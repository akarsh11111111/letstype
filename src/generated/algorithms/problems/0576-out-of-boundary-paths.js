export default {
  "id": 576,
  "name": "Out of Boundary Paths",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/out-of-boundary-paths",
  "relativeDir": "O/Out of Boundary Paths",
  "slug": "0576-out-of-boundary-paths",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 23,
    "python": 27,
    "javascript": 29
  },
  "languages": {
    "cpp": "vector<vector<vector<int>>> dp;\r\n\r\nint dx[4] = {0,0,1,-1};\r\nint dy[4] = {1,-1,0,0};\r\n\r\nint mod = 1e9+7;\r\n\r\nint fun(int i,int j,int n,int m,int k){\r\n    \r\n    if(i < 0 || j < 0 || i == n || j == m)return 1;\r\n    else if(k == 0)return 0;\r\n    \r\n    if(dp[i][j][k] != -1)return dp[i][j][k];\r\n    \r\n    int ans = 0;\r\n    for(int c = 0; c < 4; c++){\r\n        int ni = i+dx[c] , nj = j+dy[c];\r\n        ans = (ans + fun(ni,nj,n,m,k-1)) % mod;\r\n    }\r\n    \r\n    return dp[i][j][k] = ans;\r\n}\r\n\r\nint findPaths(int m, int n, int maxMove, int startRow, int startCol) {\r\n    \r\n    dp = vector<vector<vector<int>>>(m, vector<vector<int>>(n, vector<int>(maxMove+1, -1)));\r\n\t\r\n    return fun(startRow, startCol,m,n,maxMove);\r\n}",
    "python": "class Solution:\r\n    def helper(self, m, n, maxMove, startRow, startColumn, mat,dp) -> int:\r\n        if startRow < 0 or startRow >=m or startColumn < 0 or startColumn >=n:\r\n            return 1\r\n        \r\n        if dp[maxMove][startRow][startColumn]!=-1:\r\n            return dp[maxMove][startRow][startColumn]\r\n        \r\n        if mat[startRow][startColumn]==1:\r\n            return 0\r\n        \r\n        if maxMove <= 0:\r\n            return 0\r\n        \r\n        # mat[startRow][startColumn] = 1\r\n        a = self.helper(m, n, maxMove-1, startRow+1, startColumn,mat,dp)\r\n        b = self.helper(m, n, maxMove-1, startRow-1, startColumn,mat,dp)\r\n        c = self.helper(m, n, maxMove-1, startRow, startColumn+1,mat,dp)\r\n        d = self.helper(m, n, maxMove-1, startRow, startColumn-1,mat,dp)\r\n        dp[maxMove][startRow][startColumn] = a+b+c+d\r\n        return dp[maxMove][startRow][startColumn]\r\n        \r\n        \r\n    def findPaths(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:\r\n        mat = [[0 for i in range(n)] for j in range(m)]\r\n        dp = [[[-1 for i in range(n+1)] for j in range(m+1)] for k in range(maxMove+1)]\r\n        return self.helper(m, n, maxMove, startRow, startColumn, mat,dp)%(10**9  + 7)",
    "java": "// Runtime: 13 ms (Top 36.40%) | Memory: 43.3 MB (Top 32.31%)\r\nclass Solution {\r\n    int[][][] dp;\r\n    int mod = 1000000007;\r\n    public int findPaths(int m, int n, int maxMove, int startRow, int startColumn) {\r\n        dp = new int[m][n][maxMove + 1];\r\n        for (int i = 0; i < m; i++)\r\n            for (int j = 0; j < n; j++)\r\n                for (int k = 0; k <= maxMove; k++)\r\n                    dp[i][j][k] = -1;\r\n        return count(m, n, maxMove, startRow, startColumn) % mod;\r\n    }\r\n    public int count(int m, int n, int move, int r, int c) {\r\n        if (r < 0 || c < 0 || r >= m || c >= n)\r\n            return 1;\r\n        if (move <= 0)\r\n            return 0;\r\n        if (dp[r][c][move] != -1)\r\n            return dp[r][c][move] % mod;\r\n        dp[r][c][move] = ((count(m, n, move - 1, r + 1, c) % mod + count (m, n, move - 1, r - 1, c) % mod) % mod + (count (m, n, move - 1, r, c + 1) % mod + count(m, n, move - 1, r, c - 1) % mod) % mod ) % mod;\r\n        return dp[r][c][move] % mod;\r\n    }\r\n}",
    "javascript": "vector<vector<vector<int>>> dp;\r\n\r\nint dx[4] = {0,0,1,-1};\r\nint dy[4] = {1,-1,0,0};\r\n\r\nint mod = 1e9+7;\r\n\r\nint fun(int i,int j,int n,int m,int k){\r\n    \r\n    if(i < 0 || j < 0 || i == n || j == m)return 1;\r\n    else if(k == 0)return 0;\r\n    \r\n    if(dp[i][j][k] != -1)return dp[i][j][k];\r\n    \r\n    int ans = 0;\r\n    for(int c = 0; c < 4; c++){\r\n        int ni = i+dx[c] , nj = j+dy[c];\r\n        ans = (ans + fun(ni,nj,n,m,k-1)) % mod;\r\n    }\r\n    \r\n    return dp[i][j][k] = ans;\r\n}\r\n\r\nint findPaths(int m, int n, int maxMove, int startRow, int startCol) {\r\n    \r\n    dp = vector<vector<vector<int>>>(m, vector<vector<int>>(n, vector<int>(maxMove+1, -1)));\r\n\t\r\n    return fun(startRow, startCol,m,n,maxMove);\r\n}"
  }
}
