export default {
  "id": 1035,
  "name": "Uncrossed Lines",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/uncrossed-lines",
  "relativeDir": "U/Uncrossed Lines",
  "slug": "1035-uncrossed-lines",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 16,
    "python": 10,
    "javascript": 40
  },
  "languages": {
    "cpp": "// Runtime: 6 ms (Top 95.21%) | Memory: 10.00 MB (Top 97.6%)\r\n\r\nclass Solution {\r\npublic:\r\n    int maxUncrossedLines(vector<int>& nums1, vector<int>& nums2) {\r\n        int m = nums1.size(), n = nums2.size();\r\n        if (m < n) {\r\n            swap(nums1, nums2);\r\n            swap(m, n);\r\n        }\r\n        vector<int> dp(n + 1);\r\n        for (int i = 1; i <= m; i++) {\r\n            int prev = 0;\r\n            for (int j = 1; j <= n; j++) {\r\n                int curr = dp[j];\r\n                if (nums1[i-1] == nums2[j-1]) {\r\n                    dp[j] = prev + 1;\r\n                } else {\r\n                    dp[j] = max(dp[j-1], curr);\r\n                }\r\n                prev = curr;\r\n            }\r\n        }\r\n        return dp[n];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxUncrossedLines(self, nums1: List[int], nums2: List[int]) -> int:\r\n        \r\n        @lru_cache(None)\r\n        def dp(a,b):\r\n            if a>=len(nums1) or b>=len(nums2): return 0\r\n            if nums1[a]==nums2[b]: return 1+dp(a+1,b+1)\r\n            else: return max(dp(a+1,b),dp(a,b+1))\r\n        \r\n        return dp(0,0)",
    "java": "class Solution {\r\n    public int maxUncrossedLines(int[] nums1, int[] nums2) {\r\n        int m = nums1.length;\r\n        int n = nums2.length;\r\n        int[][] dp = new int[m + 1][n + 1];\r\n        for(int i = 1; i <= m; i ++){\r\n            for(int j = 1; j <= n; j ++){\r\n                if(nums1[i - 1] == nums2[j - 1])\r\n                    dp[i][j] = dp[i - 1][j - 1] + 1;\r\n                else\r\n                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\r\n            }\r\n        }\r\n        return dp[m][n];\r\n    }\r\n}",
    "javascript": "/** https://leetcode.com/problems/uncrossed-lines/\r\n * @param {number[]} nums1\r\n * @param {number[]} nums2\r\n * @return {number}\r\n */\r\nvar maxUncrossedLines = function(nums1, nums2) {\r\n  // Array to hold the combination of connected numbers\r\n  let dp = [];\r\n  \r\n  // We look up the connected numbers with matrix\r\n  for (let i=0;i< nums1.length;i++){\r\n    for (let j=0;j< nums2.length;j++){\r\n      if (nums1[i]===nums2[j]){\r\n        dp.push([i,j]);\r\n      }\r\n    }\r\n  }\r\n  \r\n  // Only 0 or 1 connected numbers found, return\r\n  if(dp.length <=1){\r\n    return dp.length;\r\n  }\r\n  \r\n  // Array to count how many connected numbers in the matrix without crossing\r\n  let count=Array(dp.length).fill(1);\r\n  let out = count[0];\r\n  \r\n  // Count from the last connected numbers, for each connected number, count how many other connected numbers in front of it that will not crossed with current\r\n  for (let i=dp.length-2;i>=0;i--){\r\n    for (let j=i+1;j<dp.length;j++){\r\n      if (dp[i][0] < dp[j][0]&&\r\n          dp[i][1] < dp[j][1]){\r\n            count[i] = Math.max(count[i],count[j]+1);\r\n            out = Math.max(out, count[i]);\r\n      }\r\n    }\r\n  }\r\n  \r\n  return out;\r\n};"
  }
}
