export default {
  "id": 2344,
  "name": "Minimum Deletions to Make Array Divisible",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-deletions-to-make-array-divisible",
  "relativeDir": "M/Minimum Deletions to Make Array Divisible",
  "slug": "2344-minimum-deletions-to-make-array-divisible",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "python": 5,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minOperations(vector<int>& nums, vector<int>& numsDivide) {\r\n        int c = 0; // count\r\n        priority_queue<int,vector<int>,greater<int>> pq; /// min heap\r\n        int op = numsDivide[0];\r\n        int n = numsDivide.size();\r\n        for(int i = 1;i < n;i++){\r\n            op = __gcd(op,numsDivide[i]); // as it will be the maximum number that will divide all the numbers \r\n        }\r\n        for(auto&i : nums){\r\n            pq.push(i); // pushing all elements in the heap\r\n        } \r\n        while(!pq.empty()){ \r\n            int temp = pq.top();\r\n            pq.pop();\r\n            if(op%temp == 0){ // if the minimum element divides the gcd return count at that time\r\n                return c;\r\n            }\r\n            if(temp > op){ // if pq top become bigger than the find gcd then it returns -1\r\n                return -1;\r\n            }\r\n            c++;\r\n            \r\n        }\r\n        return -1; // means the heap got empty and no element divide the numsDivide array\r\n    }\r\n};",
    "python": "# Runtime: 1147 ms (Top 45.35%) | Memory: 25.8 MB (Top 79.68%)\r\nclass Solution:\r\n    def minOperations(self, nums: List[int], divs: List[int]) -> int:\r\n        div = reduce(gcd, divs)\r\n        return next((i for i, n in enumerate(sorted(nums)) if div % n == 0), -1)",
    "javascript": "// Runtime: 3324 ms (Top 13.04%) | Memory: 55 MB (Top 57.61%)\r\nvar minOperations = function(nums, numsDivide) {\r\n    nums.sort((a,b) => a - b)\r\n    let set = new Set()\r\n\r\n    for (let i=0; i < nums.length; i++) {\r\n        let item = nums[i]\r\n        if (!set.has(item)) {\r\n            let quantity = 0;\r\n\r\n            for (let j=0; j < numsDivide.length; j++) {\r\n                if (numsDivide[j] % item !== 0) {\r\n                    set.add(item);\r\n                    quantity = nums.lastIndexOf(item) - i + 1;\r\n                    break;\r\n                }\r\n            }\r\n\r\n        if (quantity === 0) return i;\r\n        }\r\n    }\r\n\r\n    return -1;\r\n};"
  }
}
