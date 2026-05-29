export default {
  "id": 583,
  "name": "Delete Operation for Two Strings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/delete-operation-for-two-strings",
  "relativeDir": "D/Delete Operation for Two Strings",
  "slug": "0583-delete-operation-for-two-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 31,
    "python": 18,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 92.82%) | Memory: 7.90 MB (Top 76.07%)\r\n\r\nclass Solution {\r\npublic:\r\n    int lcs(string X, string Y,int m,int n){\r\n        int dp[m+1][n+1];\r\n        for(int i=0;i<m+1;i++){\r\n            for(int j=0;j<n+1;j++){\r\n                if(i==0 || j==0) dp[i][j]=0;\r\n            }\r\n        }\r\n        \r\n        for(int i=1;i<m+1;i++){\r\n            for(int j=1;j<n+1;j++){\r\n                if(X[i-1]==Y[j-1]) dp[i][j]= 1+dp[i-1][j-1];\r\n                else dp[i][j] = max(dp[i][j-1], dp[i-1][j]);\r\n            }\r\n        }\r\n        return dp[m][n];\r\n    }\r\n    int minDistance(string s1, string s2) {\r\n        int m = s1.size(), n = s2.size();\r\n        return m+n-2*lcs(s1,s2,m,n) ;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minDistance(self, word1: str, word2: str) -> int:\r\n        m = len(word1)\r\n        n = len(word2)\r\n        a = []\r\n        for i in range(m+1):\r\n            a.append([])\r\n            for j in range(n+1):\r\n                a[-1].append(0)\r\n        \r\n        for i in range(m):\r\n            for j in range(n):\r\n                if word1[i]==word2[j]:\r\n                    a[i+1][j+1] = 1 + a[i][j]\r\n                else:\r\n                    a[i+1][j+1] = max( a[i][j+1], a[i+1][j])\r\n\t\t\t\t\t\r\n        return m + n - ( 2 * a [-1][-1] )",
    "java": "// Runtime: 20 ms (Top 23.73%) | Memory: 46.5 MB (Top 77.36%)\r\nclass Solution {\r\n    public int minDistance(String word1, String word2) {\r\n        int n = word1.length();\r\n        int m = word2.length();\r\n\r\n        int[][]dp = new int[n+1][m+1];\r\n\r\n        for(int i = 0; i<n; i++){\r\n            dp[i][0] = 0;\r\n        }\r\n\r\n        for(int i = 0; i<m; i++){\r\n            dp[0][i] = 0;\r\n        }\r\n\r\n        for(int i = 1; i<=n; i++){\r\n            for(int j = 1; j<=m; j++){\r\n                if(word1.charAt(i-1) == word2.charAt(j-1)){\r\n                    dp[i][j] = 1+dp[i-1][j-1];\r\n                }else{\r\n                    dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);\r\n                }\r\n            }\r\n        }\r\n\r\n        int common = dp[n][m];\r\n        return (n+m)-(2*common);\r\n\r\n    }\r\n}",
    "javascript": "// Runtime: 80 ms (Top 69.7%) | Memory: 45.20 MB (Top 98.48%)\r\n\r\nvar minDistance = function(W1, W2) {\r\n    let m = W1.length, n = W2.length\r\n    if (m < n) [W1, W2, m, n] = [W2, W1, n, m]\r\n    let WA1 = W1.split(\"\"), WA2 = W2.split(\"\"),\r\n        dpLast = new Uint16Array(n + 1),\r\n        dpCurr = new Uint16Array(n + 1)\r\n    for (let i = 0; i < m; i++) {\r\n        for (let j = 0; j < n; j++) \r\n            dpCurr[j+1] = WA1[i] === WA2[j]\r\n                ? dpLast[j] + 1\r\n                : Math.max(dpCurr[j], dpLast[j+1]);\r\n        [dpLast, dpCurr] = [dpCurr, dpLast]\r\n    }\r\n    return m + n - 2 * dpLast[n] \r\n};"
  }
}
