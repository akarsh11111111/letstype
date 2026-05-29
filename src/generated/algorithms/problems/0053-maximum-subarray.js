export default {
  "id": 53,
  "name": "Maximum Subarray",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-subarray",
  "relativeDir": "M/Maximum Subarray",
  "slug": "0053-maximum-subarray",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 13,
    "python": 14,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 248 ms (Top 14.67%) | Memory: 67.8 MB (Top 53.58%)\r\nclass Solution {\r\npublic:\r\n    int maxSubArray(vector<int>& nums)\r\n    {\r\n        int m = INT_MIN, sm = 0;\r\n        for (int i = 0; i < nums.size(); ++i)\r\n        {\r\n            sm += nums[i];\r\n            m = max(sm, m);\r\n            if (sm < 0) sm = 0;\r\n        }\r\n        return m;\r\n    }\r\n};",
    "python": "# Runtime: 782 ms (Top 6.1%) | Memory: 163.13 MB (Top 6.3%)\r\n\r\nclass Solution:\r\n    def maxSubArray(self, nums: List[int]) -> int:\r\n        def kadane(i):\r\n            if F[i] != None:\r\n                return F[i]\r\n            F[i] = max(nums[i],kadane(i-1) + nums[i])\r\n            return F[i]\r\n        n = len(nums)\r\n        F = [None for _ in range(n)]\r\n        F[0] = nums[0]\r\n        kadane(n-1)\r\n        return max(F)",
    "java": "class Solution {\r\n    public int maxSubArray(int[] nums) {\r\n        int n = nums.length;\r\n        int currmax = 0;\r\n        int gmax = nums[0];\r\n        for(int i=0;i<n;i++) {\r\n            currmax+=nums[i];\r\n            gmax=Math.max(gmax, currmax);\r\n            currmax=Math.max(currmax, 0);\r\n        }\r\n        return gmax;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\n var maxSubArray = function(nums) {\r\n   let max = Number.MIN_SAFE_INTEGER;\r\n   let curr = 0;\r\n   for (let i = 0; i < nums.length; i++) {\r\n      if (curr < 0 && nums[i] > curr) {\r\n          curr = 0;\r\n      }\r\n    curr += nums[i];\r\n    max = Math.max(max, curr);\r\n   }\r\n  return max;\r\n};"
  }
}
