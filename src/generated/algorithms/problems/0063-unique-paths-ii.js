export default {
  "id": 63,
  "name": "Unique Paths II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/unique-paths-ii",
  "relativeDir": "U/Unique Paths II",
  "slug": "0063-unique-paths-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 15,
    "python": 18,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int dp[101][101];\r\n    int paths(int i,int j,int &m, int &n,vector<vector<int>> &grid){\r\n        if(i>=m || j>=n) return 0;\r\n        \r\n        if(grid[i][j] == 1) return 0;\r\n        \r\n        if(i== m-1 && j== n-1) return 1;\r\n        \r\n        if(dp[i][j] != -1) return dp[i][j];\r\n        \r\n        int v = paths(i,j+1,m,n,grid);\r\n        int h = paths(i+1,j,m,n,grid);\r\n        \r\n        return dp[i][j] = v + h;\r\n    }\r\n    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {\r\n        int m = obstacleGrid.size();\r\n        int n = obstacleGrid[0].size();\r\n        \r\n        memset(dp,-1,sizeof(dp));\r\n        \r\n        return paths(0,0,m,n,obstacleGrid);\r\n    }\r\n};",
    "python": "# Runtime: 75 ms (Top 36.49%) | Memory: 14 MB (Top 43.32%)\r\nclass Solution:\r\n    def uniquePathsWithObstacles(self, obstacleGrid: List[List[int]]) -> int:\r\n        def valid(r,c,matrix):\r\n            return r >= 0 and c >= 0 and r < len(matrix) and c < len(matrix[0])\r\n\r\n        dp = [[0] * len(obstacleGrid[0]) for _ in range(len(obstacleGrid))]\r\n        dp[0][0] = 1 ^ obstacleGrid[0][0]\r\n\r\n        for r in range(len(obstacleGrid)):\r\n            for c in range(len(obstacleGrid[0])):\r\n                if obstacleGrid[r][c] != 1:\r\n                    if valid(r-1, c, dp) and obstacleGrid[r-1][c] != 1:\r\n                        dp[r][c] += dp[r-1][c]\r\n                    if valid(r, c-1, dp) and obstacleGrid[r][c-1] != 1:\r\n                        dp[r][c] += dp[r][c-1]\r\n\r\n        return dp[-1][-1]",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 41.40 MB (Top 60.59%)\r\n\r\nclass Solution {\r\n    public int uniquePathsWithObstacles(int[][] OG) {\r\n        if (OG[0][0] == 1) return 0;\r\n        int m = OG.length, n = OG[0].length;\r\n        int[][] dp = new int[m][n];\r\n        dp[0][0] = 1;\r\n        for (int i = 0; i < m; i++)\r\n            for (int j = 0; j < n; j++)\r\n                if (OG[i][j] == 1 || (i == 0 && j == 0)) continue;\r\n                else dp[i][j] = (i > 0 ? dp[i-1][j] : 0) + (j > 0 ? dp[i][j-1] : 0);\r\n        return dp[m-1][n-1];\r\n    }\r\n}",
    "javascript": "var uniquePathsWithObstacles = function(grid) {\r\n        let m=grid.length, n=grid[0].length;\r\n        const dp = [...Array(m+1)].map((e) => Array(n+1).fill(0));\r\n        dp[0][1]=1;\r\n        for(let i=1;i<m+1;i++){\r\n            for(let j=1;j<n+1;j++){\r\n                dp[i][j]=grid[i-1][j-1]==1 ? 0:dp[i][j-1]+dp[i-1][j]; \r\n            }\r\n        }\r\n        return dp[m][n];\r\n};"
  }
}
