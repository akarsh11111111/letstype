export default {
  "id": 1749,
  "name": "Maximum Absolute Sum of Any Subarray",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray",
  "relativeDir": "M/Maximum Absolute Sum of Any Subarray",
  "slug": "1749-maximum-absolute-sum-of-any-subarray",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 18,
    "python": 9,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxAbsoluteSum(vector<int>& nums) {\r\n        int mx1=0;\r\n        int sum=0;\r\n        for(int i=0;i<nums.size();i++){\r\n            sum+=nums[i];\r\n            if(sum<0)sum=0;\r\n            mx1=max(sum,mx1);\r\n        }\r\n        sum=0;\r\n        int mx2=0;\r\n        for(int i=0;i<nums.size();i++){\r\n            sum+=nums[i];\r\n            if(sum>=0)sum=0;\r\n            mx2=min(sum,mx2);\r\n        }\r\n        \r\n        return max(mx1,abs(mx2));\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef maxAbsoluteSum(self, A):\r\n\r\n\t\tma,mi,res = 0,0,0\r\n\t\tfor a in A:\r\n\t\t\tma = max(0,ma+a)\r\n\t\t\tmi = min(0,mi+a)\r\n\t\t\tres = max(res,ma,-mi)\r\n\t\treturn res",
    "java": "// Runtime: 3 ms (Top 94.60%) | Memory: 49.9 MB (Top 95.68%)\r\nclass Solution {\r\n    public int maxAbsoluteSum(int[] nums) {\r\n        int minSum = Integer.MAX_VALUE, maxSum = Integer.MIN_VALUE, currentMinSum = 0, currentMaxSum = 0;\r\n        for(int num: nums) {\r\n            currentMaxSum += num;\r\n            maxSum = Math.max(maxSum, currentMaxSum);\r\n            if (currentMaxSum < 0)\r\n                currentMaxSum = 0;\r\n\r\n            currentMinSum += num;\r\n            minSum = Math.min(minSum, currentMinSum);\r\n            if (currentMinSum > 0)\r\n                currentMinSum = 0;\r\n        }\r\n        return Math.max(maxSum, -minSum);\r\n    }\r\n}",
    "javascript": "// Runtime: 77 ms (Top 25.0%) | Memory: 48.14 MB (Top 32.1%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar maxAbsoluteSum = function(nums) {\r\n    maxi = Number.MIN_VALUE , mini = Number.MAX_VALUE\r\n    cur_max = 0, cur_min = 0\r\n    for(let i=0; i<nums.length; i++){\r\n        cur_max = Math.max(cur_max+nums[i],nums[i])\r\n        cur_min = Math.min(cur_min+nums[i], nums[i])\r\n        maxi = Math.max(maxi,cur_max)\r\n        mini = Math.min(mini,cur_min)\r\n    }\r\n    return Math.max(maxi,-mini)\r\n};"
  }
}
