export default {
  "id": 1991,
  "name": "Find the Middle Index in Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-middle-index-in-array",
  "relativeDir": "F/Find the Middle Index in Array",
  "slug": "1991-find-the-middle-index-in-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 22,
    "python": 8,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 68.16%) | Memory: 12.70 MB (Top 66.47%)\r\n\r\nclass Solution {\r\npublic:\r\n  \r\n    int findMiddleIndex(vector<int>& nums) \r\n    {\r\n        int n=nums.size();\r\n        int left_sum=0;\r\n        int right_sum=0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            right_sum+=nums[i];\r\n        }\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            right_sum-=nums[i];\r\n            if(left_sum==right_sum)\r\n            {\r\n                return i;\r\n            }\r\n            left_sum+=nums[i];\r\n        }\r\n        return -1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findMiddleIndex(self, nums: List[int]) -> int:\r\n        A = [0] + list(accumulate(nums)) + [0]\r\n        total, n = sum(nums), len(nums)\r\n        for i in range(n):\r\n            if A[i] == total - A[i] - nums[i]:\r\n                return i\r\n        return -1",
    "java": "// Runtime: 2 ms (Top 16.64%) | Memory: 42.4 MB (Top 52.37%)\r\n\r\nclass Solution {\r\n    public int findMiddleIndex(int[] nums) {\r\n\r\n        for(int i=0;i<nums.length;i++)\r\n        {\r\n            int rsum=0;\r\n            int lsum=0;\r\n\r\n            for(int k=0;k<i;k++) lsum+=nums[k];\r\n            for(int k=i+1;k<nums.length;k++) rsum+=nums[k];\r\n\r\n            if(lsum==rsum){\r\n                return i;\r\n            }\r\n        }\r\n\r\n        return -1;\r\n\r\n    }\r\n}",
    "javascript": "// Runtime: 80 ms (Top 76.14%) | Memory: 44.4 MB (Top 9.37%)\r\nvar findMiddleIndex = function(nums) {\r\n    for (let i = 0; i < nums.length; i++) {\r\n        let leftNums = nums.slice(0, i).reduce((a, b) => a + b, 0);\r\n        let rightNums = nums.slice(i + 1).reduce((a, b) => a + b, 0);\r\n        if (leftNums === rightNums) {\r\n            return i;\r\n        }\r\n    }\r\n    return -1;\r\n};"
  }
}
