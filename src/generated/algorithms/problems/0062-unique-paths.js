export default {
  "id": 62,
  "name": "Unique Paths",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/unique-paths",
  "relativeDir": "U/Unique Paths",
  "slug": "0062-unique-paths",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 29,
    "python": 8,
    "javascript": 12
  },
  "languages": {
    "cpp": "#define vi vector<int>\r\n#define vvi vector<vi>\r\nclass Solution {\r\npublic:\r\n    \r\n    int countPath(vvi& dp,int r,int c, int m , int n){\r\n          if(m==r-1 || n==c-1)\r\n              return 1;\r\n           \r\n        if(dp[m][n]!=-1)\r\n            return dp[m][n];\r\n        \r\n       return dp[m][n] = countPath(dp,r,c,m+1,n) + countPath(dp,r,c,m,n+1);\r\n    }\r\n    int uniquePaths(int m, int n) {\r\n        \r\n        vvi dp(m,vi(n,-1));\r\n        \r\n        return countPath(dp,m,n,0,0);\r\n    }\r\n};",
    "python": "// Runtime: 39 ms (Top 53.95%) | Memory: 17.30 MB (Top 9.72%)\r\n\r\nclass Solution:\r\n    def uniquePaths(self, m, n):\r\n        dp = [[1]*n for i in range(m)]\r\n        for i, j in product(range(1, m), range(1, n)):\r\n            dp[i][j] = dp[i-1][j] + dp[i][j-1]\r\n        return dp[-1][-1]",
    "java": "class Solution {\r\n    public int uniquePaths(int m, int n) {\r\n        int[][] dp = new int[m][n];\r\n        \r\n        for(int i = 0; i < m; i ++) {\r\n            for(int j = 0; j < n; j ++) {\r\n                dp[i][j] = -1;\r\n            }\r\n        }\r\n        \r\n        return helper(m, 0, n, 0, dp);\r\n    }\r\n    \r\n    private int helper(int m, int i, int n, int j, int[][] dp) {\r\n        if(i == m || j == n) {\r\n            return 0;\r\n        }\r\n        \r\n        if(i == m-1 && j == n-1) {\r\n            dp[i][j] = 1;\r\n        }\r\n        \r\n        if(dp[i][j] == -1) {\r\n            dp[i][j] = helper(m, i+1, n, j, dp) + helper(m, i, n, j+1, dp);\r\n        }\r\n        \r\n        return dp[i][j];\r\n    }\r\n}",
    "javascript": "// Runtime: 62 ms (Top 95.54%) | Memory: 42.3 MB (Top 53.45%)\r\nvar uniquePaths = function(m, n) {\r\n    let count = Array(m)\r\n    for(let i=0; i<m; i++) count[i] = Array(n)\r\n    for(let i=0; i<m; i++){\r\n        for(let j=0; j<n; j++){\r\n            if(i == 0 || j == 0) count[i][j] = 1\r\n            else count[i][j] = count[i][j-1] + count[i-1][j]\r\n        }\r\n    }\r\n    return count[m-1][n-1]\r\n};"
  }
}
