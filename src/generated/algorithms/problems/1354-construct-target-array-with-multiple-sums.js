export default {
  "id": 1354,
  "name": "Construct Target Array With Multiple Sums",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/construct-target-array-with-multiple-sums",
  "relativeDir": "C/Construct Target Array With Multiple Sums",
  "slug": "1354-construct-target-array-with-multiple-sums",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 32,
    "python": 21,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isPossible(vector<int>& target) {\r\n        \r\n        //Priority queue for storing all the nums in taget in decreasing order.\r\n        priority_queue<int> pq;\r\n        long long sum = 0; //for storing total sum\r\n\r\n        for(auto num : target){ //adding the nums in pq and sum\r\n            pq.push(num);\r\n            sum+=num;\r\n        }\r\n        \r\n        //iterating untill all elements in pq become 1 (in turn pq.top() will also become 1);\r\n        while(pq.top() != 1){\r\n\r\n            sum -= pq.top(); //removing the greatest element as it was last upadted when converting [1,1,1...] array to target. So we are left with sum of other elements.\r\n            \r\n            //when there are elements greeter than 1 then sum of other elements can not be 0 or sum can not be greater than top element because sum + x(any number>0) is pq.top().\r\n            if(sum == 0 || sum >= pq.top()) return false;\r\n            \r\n            //if we delete all copies of sum from pq.top() we get an old element.\r\n            int old = pq.top() % sum;\r\n            \r\n            //all old elements were > 0 so it can not be 0 unless sum is 1 (This is only possible if array has only 2 elements)\r\n            if(sum != 1 && old == 0) return false;\r\n            \r\n            pq.pop();     //Deleting greatest element\r\n\r\n            pq.push(old); //Adding old element to restore array.\r\n            sum += old;   //Updating sum\r\n        }\r\n        \r\n        //if all elements are 1 then return true\r\n        return true;\r\n    }\r\n};",
    "python": "# Runtime: 492 ms (Top 22.46%) | Memory: 20 MB (Top 17.02%)\r\nclass Solution:\r\n    def isPossible(self, target: List[int]) -> bool:\r\n        if len(target) == 1:\r\n            return target == [1]\r\n        res = sum(target)\r\n        heap = [-elem for elem in target]\r\n        heapify(heap)\r\n        while heap[0]<-1:\r\n            maximum = -heappop(heap)\r\n            res -= maximum\r\n\r\n            if res == 1:\r\n                return True\r\n            x = maximum % res\r\n            if x == 0 or (x != 1 and x == maximum):\r\n                return False\r\n\r\n            res += x\r\n            heappush(heap,-x)\r\n        return True",
    "java": "// Runtime: 16 ms (Top 47.45%) | Memory: 56.9 MB (Top 77.47%)\r\n\r\nclass Solution {\r\n    public boolean isPossible(int[] target) {\r\n        if(target.length==1) return target[0]==1;\r\n\r\n        PriorityQueue<Integer> que = new PriorityQueue<Integer>(Collections.reverseOrder());\r\n        int totsum = 0;\r\n\r\n        for(int i=0;i<target.length;i++){\r\n            que.add(target[i]);\r\n            totsum += target[i];\r\n        }\r\n\r\n        while(que.peek()!=1){\r\n            int max = que.remove();\r\n            int rem = totsum-max;\r\n            int maxprev = max % rem;\r\n            totsum = rem+maxprev;\r\n\r\n            if(rem==1) return true;\r\n\r\n            if(maxprev == 0 || maxprev == max){\r\n                return false;\r\n            } else {\r\n                que.add(maxprev);\r\n            }\r\n        }\r\n\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 135 ms (Top 34.29%) | Memory: 45.5 MB (Top 45.71%)\r\nvar isPossible = function(target) {\r\n    let max=0\r\n    let index=-1\r\n\r\n    for(let i=target.length-1;i>=0;i--){\r\n        if(target[i]>max){\r\n            max=target[i]\r\n            index=i\r\n        }\r\n    }\r\n    if(max===1)return true // if max itself is 1 return true\r\n\r\n    let total=0\r\n    for(let i=0;i<target.length;i++){\r\n        if(i!==index){\r\n            total+=target[i]\r\n        }\r\n    }\r\n    // If total=1,it means only one element was remaining apart from max and its value is 1 return true\r\n    // eg target=[10,1] we started with [1,1] so next steps would be [2,1]->[3,1]->...[10,1] we can make sure it leads to target\r\n    if(total===1)return true;\r\n     // max should be greater than remaining nums sum OR if total is 0 it would lead to infinite loop( num%0 === NaN) so return false\r\n    if(max<=total||total===0)return false;\r\n    max=max%total;\r\n    if(max<1)return false; // it should not be less than 1\r\n    target[index]=max;\r\n\r\n    return isPossible(target)\r\n};"
  }
}
