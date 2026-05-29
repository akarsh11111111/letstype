export default {
  "id": 1458,
  "name": "Max Dot Product of Two Subsequences",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/max-dot-product-of-two-subsequences",
  "relativeDir": "M/Max Dot Product of Two Subsequences",
  "slug": "1458-max-dot-product-of-two-subsequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 21,
    "python": 10,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 69 ms (Top 40.88%) | Memory: 13.2 MB (Top 27.46%)\r\nclass Solution\r\n{\r\n    public:\r\n\r\n        const int NEG_INF = -10e8;\r\n        int maxDotProduct(vector<int>& nums1, vector<int>& nums2) {\r\n\r\n        int n = nums1.size();\r\n        int m = nums2.size();\r\n\r\n        // NOTE : we can't initialize with INT_MIN because adding any val with it will give overflow\r\n        // that is why we prefer 10^7 or 10^8\r\n\r\n        vector<vector<int>> dp(n+1, vector<int>(m+1, NEG_INF));\r\n\r\n        for (int i=1; i<=n; i++) {\r\n            for (int j=1; j<=m; j++) {\r\n\r\n                int temp_p = nums1[i-1]*nums2[j-1];\r\n\r\n        // Although it is a variation of LCS but here we need to check for all answers we already know in dp\r\n        // Why only temp_p ? -> suppose in dp[i-1][j-1] is -10^7 + temp_p is 2 == gives nearly -10^7(which is wrong ans)\r\n        // For Remaining comparisons we already know why !\r\n\r\n                dp[i][j] = max({ dp[i-1][j-1] + temp_p,\r\n                                      temp_p,\r\n                                      dp[i-1][j],\r\n                                      dp[i][j-1]\r\n                              });\r\n            }\r\n        }\r\n\r\n        return dp[n][m];\r\n    }\r\n};",
    "python": "# Runtime: 435 ms (Top 93.00%) | Memory: 13.8 MB (Top 100.00%)\r\nclass Solution:\r\n    def maxDotProduct(self, A, B):\r\n        dp = [float('-inf')] * (len(B)+1)\r\n        for i in range(len(A)):\r\n            prev = float('-inf')\r\n            for j in range(len(B)):\r\n                product = A[i] * B[j]\r\n                prev, dp[j+1] = dp[j+1], max(dp[j+1], dp[j], product, prev + product)\r\n        return dp[-1]",
    "java": "class Solution {\r\n    public int maxDotProduct(int[] nums1, int[] nums2) {\r\n        int N = nums1.length, M = nums2.length;\r\n        int[][] dp = new int[N][M];\r\n        for (int i = 0; i < N; i++) {\r\n            for (int j = 0; j < M; j++) {\r\n                dp[i][j] = nums1[i] * nums2[j];\r\n                if (i > 0 && j > 0 && dp[i - 1][j - 1] > 0) {\r\n                    dp[i][j] += dp[i - 1][j - 1];\r\n                }\r\n                if (i > 0 && dp[i - 1][j] > dp[i][j]) {\r\n                    dp[i][j] = dp[i - 1][j];\r\n                }\r\n                if (j > 0 && dp[i][j - 1] > dp[i][j]) {\r\n                    dp[i][j] = dp[i][j - 1];\r\n                }\r\n            }\r\n        }\r\n        return dp[N - 1][M - 1];\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums1\r\n * @param {number[]} nums2\r\n * @return {number}\r\n */\r\nvar maxDotProduct = function(nums1, nums2) {\r\n    var m = nums1.length;\r\n    var n = nums2.length;\r\n    if (!m || !n) return 0;\r\n    var dp = [[nums1[0] * nums2[0]]];\r\n    for (var i = 1; i < m; i++) {\r\n        dp[i] = [];\r\n        dp[i][0] = Math.max(nums1[i] * nums2[0], dp[i-1][0]);\r\n    }\r\n    for (var i = 1; i < n; i++) dp[0][i] = Math.max(nums1[0] * nums2[i], dp[0][i-1]);\r\n    for (var i = 1; i < m; i++) {\r\n        for (var j = 1; j < n; j++) {\r\n            var val = nums1[i] * nums2[j];\r\n            dp[i][j] = Math.max(val, val + dp[i-1][j-1], dp[i][j-1], dp[i-1][j]);\r\n        }\r\n    }\r\n    return dp[m - 1][n - 1];\r\n};"
  }
}
