export default {
  "id": 703,
  "name": "Kth Largest Element in a Stream",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/kth-largest-element-in-a-stream",
  "relativeDir": "K/Kth Largest Element in a Stream",
  "slug": "0703-kth-largest-element-in-a-stream",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 21,
    "python": 19,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 30 ms (Top 46.32%) | Memory: 20.30 MB (Top 26.54%)\r\n\r\nclass KthLargest {\r\npublic:\r\n    \r\n    priority_queue<int, vector<int>, greater<int>> pq;\r\n    int K;\r\n    \r\n    KthLargest(int k, vector<int>& nums) {\r\n        K = k;\r\n        for(int x : nums) {\r\n            pq.push(x);\r\n            if(pq.size() > k) {\r\n                pq.pop();\r\n            }\r\n        }\r\n    }\r\n    \r\n    int add(int val) {\r\n        pq.push(val);\r\n        if(pq.size() > K) {\r\n            pq.pop();\r\n        }\r\n        return pq.top();\r\n    }\r\n};",
    "python": "# Runtime: 143 ms (Top 61.21%) | Memory: 18.3 MB (Top 46.75%)\r\nclass KthLargest:\r\n    def __init__(self, k: int, nums: List[int]):\r\n        self.k = k\r\n        self.hp = []\r\n        for x in nums:\r\n            self.add(x)\r\n\r\n        return None\r\n\r\n    def add(self, val: int) -> int:\r\n        heapq.heappush(self.hp, (val))\r\n        if len(self.hp) > self.k:\r\n            heapq.heappop(self.hp)\r\n\r\n        return self.get_kth_largest()\r\n\r\n    def get_kth_largest(self):\r\n        return self.hp[0]",
    "java": "class KthLargest {\r\n    PriorityQueue<Integer> queue=new PriorityQueue();\r\n    int k=0;\r\n    public KthLargest(int k, int[] nums) {\r\n        this.k=k;\r\n        for(int i:nums)\r\n            add(i);\r\n    }\r\n    \r\n    public int add(int val) {\r\n        if(k>queue.size())\r\n            queue.add(val);\r\n        else\r\n            if(val>queue.peek())\r\n            {\r\n                queue.poll();\r\n                queue.add(val);\r\n            }\r\n        return queue.peek();\r\n    }\r\n}",
    "javascript": "var KthLargest = function(k, nums) {\r\n    // sort ascending because I am familiar with it\r\n    // when applying my binary search algorithm\r\n    this.nums = nums.sort((a,b) => a - b);    \r\n    this.k = k;    \r\n};\r\n\r\nKthLargest.prototype.add = function(val) {\r\n    // search a place to push val\r\n    // using binary search\r\n    let left = 0; right = this.nums.length - 1;\r\n    while (left < right) {\r\n        let mid = left + Math.floor((right + 1 - left)/2);\r\n        \r\n        if (val < this.nums[mid]) {\r\n            right = mid - 1;\r\n        } else {\r\n            left = mid\r\n        }\r\n    }    \r\n    \r\n    // push val into the nums\r\n    this.nums.splice(left+(this.nums[left] < val ? 1 : 0), 0, val);  \r\n\r\n    // because our nums is sorted\r\n    // so kth largest element is easy to be returned\r\n    return this.nums[this.nums.length-this.k]\r\n};"
  }
}
