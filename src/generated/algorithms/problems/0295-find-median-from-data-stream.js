export default {
  "id": 295,
  "name": "Find Median from Data Stream",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-median-from-data-stream",
  "relativeDir": "F/Find Median from Data Stream",
  "slug": "0295-find-median-from-data-stream",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 49,
    "python": 34,
    "javascript": 49
  },
  "languages": {
    "cpp": "class MedianFinder {\r\npublic:\r\n    /* Implemented @StefanPochmann's Incridible Idea */\r\n    priority_queue<long long> small, large;\r\n    MedianFinder() {\r\n        \r\n    }\r\n    \r\n    void addNum(int num) {\r\n        small.push(num);          // cool three step trick\r\n        large.push(-small.top());\r\n        small.pop();\r\n        while(small.size() < large.size()){\r\n            small.push(-large.top());\r\n            large.pop();\r\n        }\r\n    }\r\n    \r\n    double findMedian() {\r\n        return small.size() > large.size()\r\n            ? small.top()\r\n            : (small.top() - large.top())/2.0;\r\n    }\r\n};",
    "python": "// Runtime: 705 ms (Top 15.04%) | Memory: 39.30 MB (Top 5.61%)\r\n\r\nclass MedianFinder:\r\n\r\n    def __init__(self):\r\n        ### max heap to store the first half of the list\r\n        self.maxHeap = []\r\n        ### min heap to store the second half of the list\r\n        self.minHeap = []\r\n\r\n    def addNum(self, num: int) -> None:\r\n        ### push num into the correct heap\r\n        if not self.maxHeap or num <= -self.maxHeap[0]:\r\n            heappush(self.maxHeap, -num)\r\n        else:\r\n            heappush(self.minHeap, num)\r\n        \r\n        ### banance the two heaps so that each of them representing half of the list\r\n        ### for odd length list, len(maxHeap) == len(minHeap)+1\r\n        ### for even length list, len(maxHeap) == len(minHeap)\r\n        if len(self.minHeap) > len(self.maxHeap):\r\n            heappush(self.maxHeap, -heappop(self.minHeap)) \r\n        elif len(self.maxHeap) > len(self.minHeap)+1:\r\n            heappush(self.minHeap, -heappop(self.maxHeap)) \r\n\r\n    def findMedian(self) -> float:\r\n        \r\n        ### if the length of entire list is even, \r\n        ### get the mean of the two middle values\r\n        if (len(self.maxHeap)+len(self.minHeap))%2==0:\r\n            return (-self.maxHeap[0]+self.minHeap[0])/2\r\n        \r\n        ### when odd, we know that the median is in maxHeap\r\n        return -self.maxHeap[0]",
    "java": "// Runtime: 183 ms (Top 63.97%) | Memory: 124.7 MB (Top 57.27%)\r\nclass MedianFinder {\r\n\r\n    PriorityQueue maxHeap;\r\n    PriorityQueue minHeap;\r\n\r\n    public MedianFinder() {\r\n        maxHeap= new PriorityQueue<Integer>((a,b)->b-a);\r\n        minHeap= new PriorityQueue<Integer>();\r\n    }\r\n\r\n    public void addNum(int num) {\r\n\r\n        //Pushing\r\n        if ( maxHeap.isEmpty() || ((int)maxHeap.peek() > num) ){\r\n            maxHeap.offer(num);\r\n        }\r\n        else{\r\n            minHeap.offer(num);\r\n        }\r\n\r\n        //Balancing\r\n        if ( maxHeap.size() > minHeap.size()+ 1){\r\n             minHeap.offer(maxHeap.peek());\r\n             maxHeap.poll();\r\n        }\r\n        else if (minHeap.size() > maxHeap.size()+ 1 ){\r\n             maxHeap.offer(minHeap.peek());\r\n             minHeap.poll();\r\n        }\r\n\r\n    }\r\n\r\n    public double findMedian() {\r\n\r\n        //Evaluating Median\r\n        if ( maxHeap.size() == minHeap.size() ){ // Even Number\r\n            return ((int)maxHeap.peek()+ (int)minHeap.peek())/2.0;\r\n        }\r\n        else{ //Odd Number\r\n             if ( maxHeap.size() > minHeap.size()){\r\n                 return (int)maxHeap.peek()+ 0.0;\r\n             }\r\n            else{ // minHeap.size() > maxHeap.size()\r\n                 return (int)minHeap.peek()+ 0.0;\r\n            }\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 963 ms (Top 55.56%) | Memory: 101.7 MB (Top 5.32%)\r\n\r\nvar MedianFinder = function() {\r\n    this.left = new MaxPriorityQueue();\r\n  this.right = new MinPriorityQueue();\r\n};\r\n\r\n/**\r\n * @param {number} num\r\n * @return {void}\r\n */\r\nMedianFinder.prototype.addNum = function(num) {\r\nlet { right, left } = this\r\n  if (right.size() > 0 && num > right.front().element) {\r\n    right.enqueue(num)\r\n  } else {\r\n    left.enqueue(num)\r\n  }\r\n\r\n  if (Math.abs(left.size() - right.size()) == 2) {\r\n    if (left.size() > right.size()) {\r\n      right.enqueue(left.dequeue().element)\r\n    } else {\r\n      left.enqueue(right.dequeue().element)\r\n    }\r\n  }\r\n};\r\n\r\n/**\r\n * @return {number}\r\n */\r\nMedianFinder.prototype.findMedian = function() {\r\n  let { left, right } = this\r\n  if (left.size() > right.size()) {\r\n    return left.front().element\r\n  } else if(right.size() > left.size()) {\r\n    return right.front().element\r\n  } else{\r\n      // get the sum of all\r\n      return (left.front().element + right.front().element) / 2\r\n  }\r\n};\r\n\r\n/**\r\n * Your MedianFinder object will be instantiated and called as such:\r\n * var obj = new MedianFinder()\r\n * obj.addNum(num)\r\n * var param_2 = obj.findMedian()\r\n */"
  }
}
