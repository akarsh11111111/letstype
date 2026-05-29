export default {
  "id": 72,
  "name": "Edit Distance",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/edit-distance",
  "relativeDir": "E/Edit Distance",
  "slug": "0072-edit-distance",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 34,
    "python": 24,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 13 ms (Top 45.48%) | Memory: 9.60 MB (Top 18.07%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minDistance(string word1, string word2) {\r\n        int m = word1.size(), n = word2.size();\r\n        vector<vector<int>> dp(m + 1, vector<int>(n + 1, 0));\r\n        for (int i = 1; i <= m; i++) {\r\n            dp[i][0] = i;\r\n        }\r\n        for (int j = 1; j <= n; j++) {\r\n            dp[0][j] = j;\r\n        }\r\n        for (int i = 1; i <= m; i++) {\r\n            for (int j = 1; j <= n; j++) {\r\n                if (word1[i - 1] == word2[j - 1]) {\r\n                    dp[i][j] = dp[i - 1][j - 1];\r\n                } else {\r\n                    dp[i][j] = min(dp[i - 1][j - 1], min(dp[i][j - 1], dp[i - 1][j])) + 1;\r\n                }\r\n            }\r\n        }\r\n        return dp[m][n];\r\n    }\r\n};",
    "python": "from functools import cache\r\n\r\n\r\nclass Solution:\r\n    def minDistance(self, word1: str, word2: str) -> int:\r\n        m, n = len(word1), len(word2)\r\n        \r\n        @cache\r\n        def dp(i, j):\r\n            if i == 0:\r\n                return j\r\n            if j == 0:\r\n                return i\r\n            \r\n            l1, l2 = word1[i - 1], word2[j - 1]\r\n            if l1 != l2:\r\n                return 1 + min(\r\n                    dp(i, j - 1),     # Delete / insert j\r\n                    dp(i - 1, j),     # Delete / insert i\r\n                    dp(i - 1, j - 1)  # Replace i or j\r\n                )\r\n            return dp(i - 1, j - 1)         \r\n                    \r\n        return dp(m, n)",
    "java": "class Solution {\r\n    \r\n    public int minDistance(String word1, String word2) {\r\n        int m = word1.length();\r\n        int n = word2.length();\r\n        int dp[][] = new int[m][n];\r\n        for(int i=0 ; i<m ; i++){\r\n            for(int j=0 ; j<n ; j++){\r\n                dp[i][j] = -1;\r\n            }\r\n        }\r\n        return solve(word1, word2 , m-1, n-1 ,dp);\r\n    }\r\n    \r\n    public int solve(String str1, String str2, int m , int  n , int dp[][]){\r\n        if(m<0){\r\n            return n+1;\r\n        }\r\n        if(n<0){\r\n            return m+1;\r\n        }\r\n        if(dp[m][n] != -1){\r\n            return dp[m][n];\r\n        }\r\n        if(str1.charAt(m) == str2.charAt(n)){\r\n            return solve(str1, str2 , m-1, n-1 ,dp);\r\n        }\r\n        else{\r\n            int min = Math.min(solve(str1, str2, m-1 ,n ,dp), solve(str1, str2, m ,n-1 , dp));\r\n            dp[m][n] = 1+Math.min(min, solve(str1, str2, m-1, n-1, dp));\r\n        }\r\n        return dp[m][n];\r\n    }\r\n}",
    "javascript": "// Runtime: 135 ms (Top 56.56%) | Memory: 46.3 MB (Top 80.04%)\r\nvar minDistance = function(word1, word2) {\r\n    const m = word1.length;\r\n    const n = word2.length;\r\n\r\n    const memo = new Array(m).fill().map(() => new Array(n));\r\n    const dfs = (i = m - 1, j = n - 1) => {\r\n        if(i < 0 && j < 0) return 0;\r\n        if(i < 0 && j >= 0) return j + 1;\r\n        if(i >= 0 && j < 0) return i + 1;\r\n        if(memo[i][j] !== undefined) return memo[i][j];\r\n\r\n        if(word1[i] === word2[j]) {\r\n            return memo[i][j] = dfs(i - 1, j - 1);\r\n        }\r\n\r\n        return memo[i][j] = 1 + Math.min(...[\r\n            dfs(i, j - 1),\r\n            dfs(i - 1, j),\r\n            dfs(i - 1, j - 1)\r\n        ]);\r\n    }\r\n\r\n    return dfs();\r\n};"
  }
}
