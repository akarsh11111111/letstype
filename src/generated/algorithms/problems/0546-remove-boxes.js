export default {
  "id": 546,
  "name": "Remove Boxes",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-boxes",
  "relativeDir": "R/Remove Boxes",
  "slug": "0546-remove-boxes",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 19,
    "python": 11
  },
  "languages": {
    "cpp": "// Runtime: 39 ms (Top 92.6%) | Memory: 12.28 MB (Top 69.1%)\r\n\r\nclass Solution {\r\npublic:\r\n    int dp[102][102][102];\r\n    int solve(int i, int j, int extra, vector<pair<int, int>> &groups)\r\n    {\r\n        if (i > j)\r\n            return 0;\r\n\r\n        if (dp[i][j][extra] != -1)\r\n            return dp[i][j][extra];\r\n\r\n        int ans = (groups[i].second + extra) * (groups[i].second + extra) + solve(i + 1, j, 0, groups);\r\n\r\n        for (int g = i + 1; g <= j; g++)\r\n            if (groups[g].first == groups[i].first)\r\n                ans = max(ans, solve(i + 1, g - 1, 0, groups) + solve(g, j, extra + groups[i].second, groups));\r\n\r\n        return dp[i][j][extra] = ans;\r\n    }\r\n    int removeBoxes(vector<int> &boxes)\r\n    {\r\n        int n = boxes.size();\r\n\r\n        vector<pair<int, int>> groups;\r\n        for (int i = 0; i < n; i++)\r\n        {\r\n            int j = i;\r\n            while (i + 1 < n and boxes[i + 1] == boxes[j])\r\n                i++;\r\n            groups.push_back({boxes[j], i - j + 1});\r\n        }\r\n\r\n        memset(dp, -1, sizeof(dp));\r\n        return solve(0, groups.size() - 1, 0, groups);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def removeBoxes(self, B):\r\n        \r\n        @lru_cache(None)\r\n        def dp(i, j, k):\r\n            if i > j: return 0\r\n            indx = [m for m in range(i+1, j+1) if B[m] == B[i]]\r\n            ans = (k+1)**2 + dp(i+1, j, 0)\r\n            return max([ans] + [dp(i+1, m-1, 0) + dp(m, j, k+1) for m in indx])   \r\n            \r\n        return dp(0, len(B)-1, 0)",
    "java": "class Solution {\r\n    public int removeBoxes(int[] boxes) {\r\n        int n = boxes.length;\r\n        int[][][] dp = new int[n][n][n];\r\n        for (int i = n-1; i >= 0; i--){\r\n            for (int j = i; j < n; j++){\r\n                for (int k = 0; k < n; k++){\r\n                    for (int m = i; m <= j; m++){\r\n                        if (boxes[m] == boxes[i]){\r\n                            dp[i][j][k]=Math.max(dp[i][j][k], (m-1<i+1?0:dp[i+1][m-1][0])+(k<n-1?dp[m][j][k+1]:0));\r\n                        }\r\n                    }\r\n                    dp[i][j][k]=Math.max(dp[i][j][k], (i==n-1?0:dp[i+1][j][0])+(k+1)*(k+1));\r\n                }\r\n            }\r\n        }\r\n        return dp[0][n-1][0];\r\n    }\r\n}"
  }
}
