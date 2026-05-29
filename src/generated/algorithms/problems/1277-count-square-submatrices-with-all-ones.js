export default {
  "id": 1277,
  "name": "Count Square Submatrices with All Ones",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-square-submatrices-with-all-ones",
  "relativeDir": "C/Count Square Submatrices with All Ones",
  "slug": "1277-count-square-submatrices-with-all-ones",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 54,
    "java": 39,
    "python": 26,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 95 ms (Top 67.19%) | Memory: 28.9 MB (Top 5.13%)\r\nclass Solution {\r\npublic:\r\n\r\n    int solve( vector<vector<int>>&mat , int n , int m , vector<vector<int>>&dp){\r\n\r\n        if(n<0 or m<0 or mat[n][m] == 0 )\r\n            return 0;\r\n\r\n        if(dp[n][m] != -1 )\r\n            return dp[n][m];\r\n\r\n        return dp[n][m] = ( 1 + min({\r\n            solve( mat , n-1 , m , dp ),\r\n            solve(mat , n-1 , m-1 , dp ),\r\n            solve(mat , n , m-1 , dp )\r\n        }));\r\n\r\n    }\r\n\r\n    int countSquares(vector<vector<int>>& matrix) {\r\n        int n = matrix.size();\r\n        int m = matrix[0].size();\r\n        int ans = 0 ;\r\n\r\n        // vector<vector<int>>dp(n , vector<int>(m,-1));\r\n        // for(int i = 0 ; i<n ; ++i ){\r\n        // for(int j= 0 ; j<m ; ++j ){\r\n        // ans += solve( matrix,i , j , dp );\r\n        // }\r\n        // }\r\n\r\n        vector<vector<int>>dp(n , vector<int>(m, 0));\r\n\r\n        for(int i = 0 ; i<n ; ++i ){\r\n            for(int j = 0 ; j<m ; ++j ){\r\n                if(i==0 || j ==0 ){\r\n                    dp[i][j] = matrix[i][j];\r\n                }\r\n                else{\r\n                    if(matrix[i][j])\r\n                        dp[i][j] = 1 + min({dp[i-1][j] , dp[i-1][j-1] , dp[i][j-1]});\r\n                }\r\n            }\r\n        }\r\n\r\n        for(auto x : dp ){\r\n            for(auto y : x )\r\n                ans += y;\r\n        }\r\n\r\n        return ans ;\r\n    }\r\n};",
    "python": "# Runtime: 1687 ms (Top 8.20%) | Memory: 16.3 MB (Top 73.07%)\r\nclass Solution:\r\n    def countSquares(self, matrix: List[List[int]]) -> int:\r\n\r\n        m = len(matrix)\r\n        n = len(matrix[0])\r\n\r\n        dp = [[0 for _ in range(n)] for _ in range(m)]\r\n        total = 0\r\n\r\n        for i in range(m):\r\n            for j in range(n):\r\n\r\n                if i == 0:\r\n                    dp[i][j] = matrix[0][j]\r\n\r\n                elif j == 0:\r\n                    dp[i][j] = matrix[i][0]\r\n\r\n                else:\r\n                    if matrix[i][j] == 1:\r\n                        dp[i][j] = 1 + min(dp[i][j-1], dp[i-1][j-1], dp[i-1][j])\r\n\r\n                total += dp[i][j]\r\n\r\n        return total",
    "java": "// Runtime: 5 ms (Top 97.02%) | Memory: 55.30 MB (Top 24.22%)\r\n\r\nclass Solution \r\n{\r\n    public int countSquares(int[][] matrix)\r\n    {\r\n        int n=matrix.length;\r\n        int m=matrix[0].length;\r\n        int dp[][]=new int[n][m];\r\n        for(int i=0;i<n;i++)\r\n        {\r\n              dp[i][0]=matrix[i][0];\r\n        }\r\n        for(int i=0;i<m;i++)\r\n        {\r\n              dp[0][i]=matrix[0][i];\r\n        }\r\n        for(int i=1;i<n;i++)\r\n        {\r\n            for(int j=1;j<m;j++)\r\n            {\r\n                if(matrix[i][j]==1)\r\n                dp[i][j]=1+Math.min(dp[i-1][j-1],Math.min(dp[i][j-1],dp[i-1][j]));\r\n            }\r\n        }\r\n       \r\n        int sum=0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            for(int j=0;j<m;j++)\r\n            {\r\n                sum+=dp[i][j];\r\n            }\r\n        }\r\n        \r\n        return sum;\r\n        \r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} matrix\r\n * @return {number}\r\n */\r\nvar countSquares = function(matrix) {\r\n  let count = 0;\r\n  for (let i = 0; i < matrix.length; ++i) {\r\n    for (let j = 0; j < matrix[0].length; ++j) {\r\n      if (matrix[i][j] === 0) continue;\r\n      if (i > 0 && j > 0) {\r\n        matrix[i][j] += Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]);\r\n      }\r\n      count += matrix[i][j];\r\n    }\r\n  }\r\n  return count; \r\n};"
  }
}
