export default {
  "id": 2328,
  "name": "Number of Increasing Paths in a Grid",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-increasing-paths-in-a-grid",
  "relativeDir": "N/Number of Increasing Paths in a Grid",
  "slug": "2328-number-of-increasing-paths-in-a-grid",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 25,
    "python": 29,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 355 ms (Top 76.39%) | Memory: 43.3 MB (Top 89.82%)\r\nclass Solution {\r\npublic:\r\n    int mod = 1000000007;\r\n    int dx[4] = {1,0,-1,0};\r\n    int dy[4] = {0,1,0,-1};\r\n    int countPaths(vector<vector<int>>& grid) {\r\n        vector <vector <int>> dp(grid.size(),vector<int>(grid[0].size(),-1));\r\n        long long count = 0;\r\n        for(int i = 0; i<grid.size(); i++){\r\n            for(int j = 0; j<grid[0].size(); j++){\r\n                count = (count%mod + dfs(i,j,grid,dp)%mod)%mod;\r\n            }\r\n        }\r\n        return (int)count%mod;\r\n    }\r\nprotected:\r\n    bool isvalid(int x, int y, vector<vector<int>>&grid){\r\n        if(x<0 or x>=grid.size() or y<0 or y>=grid[0].size()) return false;\r\n        return true;\r\n    }\r\n    int dfs(int x, int y, vector <vector<int>>&grid,vector <vector<int>>&dp){\r\n        if(dp[x][y]!=-1) return dp[x][y];\r\n\r\n        int ans = 1;\r\n        for(int i = 0; i<4; i++){\r\n            if(isvalid(x+dx[i],y+dy[i],grid) and grid[x][y]>grid[x+dx[i]][y+dy[i]]){\r\n                ans = (ans%mod+dfs(x+dx[i],y+dy[i],grid,dp)%mod)%mod;\r\n            }\r\n        }\r\n        return dp[x][y] = ans%mod;\r\n    }\r\n};",
    "python": "# Runtime: 2506 ms (Top 21.4%) | Memory: 118.67 MB (Top 7.1%)\r\n\r\nclass Solution:\r\n    def __init__(self):\r\n        self.dp = None\r\n        self.di = [0, 0, -1, 1]\r\n        self.dj = [-1, 1, 0, 0]\r\n        self.mod = 1000000007\r\n    \r\n    def countPaths(self, grid):\r\n        n = len(grid)\r\n        m = len(grid[0])\r\n        self.dp = [[0] * m for _ in range(n)]\r\n        ans = 0\r\n        for i in range(n):\r\n            for j in range(m):\r\n                ans = (ans + self.dfs(grid, i, j, -1)) % self.mod\r\n        return ans\r\n    \r\n    def dfs(self, grid, i, j, prev):\r\n        if i < 0 or j < 0 or i >= len(grid) or j >= len(grid[0]) or grid[i][j] <= prev:\r\n            return 0\r\n        if self.dp[i][j] != 0:\r\n            return self.dp[i][j]\r\n        self.dp[i][j] = 1\r\n        for k in range(4):\r\n            self.dp[i][j] += self.dfs(grid, i + self.di[k], j + self.dj[k], grid[i][j])\r\n            self.dp[i][j] %= self.mod\r\n        return self.dp[i][j] % self.mod",
    "java": "class Solution {\r\n    long[][] dp;\r\n    int mod = 1_000_000_007;\r\n    public int countPaths(int[][] grid) {\r\n        dp = new long[grid.length][grid[0].length];\r\n        long sum=0L;\r\n        for(int i=0;i<grid.length;i++){\r\n            for(int j=0;j<grid[0].length;j++){\r\n                sum = (sum + dfs(grid,i,j,0)) % mod;\r\n            }\r\n        }\r\n        return (int)sum;\r\n    }\r\n    long dfs(int[][] grid,int i,int j,int pre){\r\n        if(i<0||j<0||i>=grid.length||j>=grid[0].length) return 0;\r\n        if(grid[i][j]<=pre) return 0;\r\n        if(dp[i][j]>0) return dp[i][j];\r\n        long a = dfs(grid,i+1,j,grid[i][j]);\r\n        long b = dfs(grid,i,j+1,grid[i][j]);\r\n        long c = dfs(grid,i-1,j,grid[i][j]);\r\n        long d = dfs(grid,i,j-1,grid[i][j]);\r\n        dp[i][j] = (1+a+b+c+d)%mod;\r\n        return dp[i][j];\r\n    }\r\n}",
    "javascript": "// Runtime: 267 ms (Top 66.25%) | Memory: 55.4 MB (Top 55.00%)\r\nvar countPaths = function(grid) {\r\n  let mod = Math.pow(10, 9) + 7;\r\n  let result = 0;\r\n  let rows = grid.length, columns = grid[0].length;\r\n  let dp = Array(rows).fill(null).map(_ => Array(columns).fill(0));\r\n\r\n  const dfs = (r, c, preVal)=> {\r\n    if (r < 0 || r == rows || c < 0 || c == columns || grid[r][c] <= preVal) return 0\r\n    if (dp[r][c]) return dp[r][c]\r\n    return dp[r][c] = (1 + dfs(r + 1, c, grid[r][c]) +\r\n                       dfs(r - 1, c, grid[r][c]) +\r\n                       dfs(r , c + 1, grid[r][c]) +\r\n                       dfs(r , c - 1, grid[r][c])) % mod;\r\n  }\r\n   for(let i = 0; i < rows; i++) {\r\n    for(let j = 0; j < columns; j++) {\r\n      result += dfs(i, j, -1) % mod;\r\n    }\r\n  }\r\n\r\n  return result % mod;\r\n};"
  }
}
