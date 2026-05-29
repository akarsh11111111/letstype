export default {
  "id": 1254,
  "name": "Number of Closed Islands",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-closed-islands",
  "relativeDir": "N/Number of Closed Islands",
  "slug": "1254-number-of-closed-islands",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 37,
    "python": 38,
    "javascript": 50
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 97.43%) | Memory: 10.00 MB (Top 60.42%)\r\n\r\nclass Solution {\r\npublic:\r\n    void dfs(int i, int j, vector<vector<int>>& grid) {\r\n        int m = grid.size(), n = grid[0].size();\r\n        if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] != 0)\r\n            return;\r\n\r\n        grid[i][j] = 1;\r\n        int dx[4] = {1, -1, 0, 0};\r\n        int dy[4] = {0, 0, 1, -1};\r\n\r\n        for(int k=0;k<4;k++){\r\n            int nx = i + dx[k];\r\n            int ny = j + dy[k];\r\n            dfs(nx, ny, grid);\r\n        }\r\n    }\r\n    \r\n    int closedIsland(vector<vector<int>>& grid) {\r\n        int m = grid.size(), n = grid[0].size();\r\n        for(int i=0;i<m;i++){\r\n            for(int j=0;j<n;j++){\r\n                if((i*j==0 || i==m-1 || j==n-1) && (grid[i][j]==0))\r\n                    dfs(i, j, grid);\r\n            }\r\n        }\r\n        \r\n        int count = 0;\r\n        for (int i = 1; i < m-1; i++) {\r\n            for (int j = 1; j < n-1; j++) {\r\n                if (grid[i][j] == 0) {\r\n                    dfs(i, j, grid);\r\n                    count++;\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    '''主函数：计算封闭岛屿的数量'''\r\n    def closedIsland(self, grid: List[List[int]]) -> int:\r\n        result = 0\r\n        m, n = len(grid), len(grid[0])\r\n        self.direction = [[1, 0], [-1, 0], [0, 1], [0, -1]]\r\n        \r\n        # 遍历 grid，处理边缘陆地\r\n        for j in range(n):\r\n            self.dfs(grid, 0, j)\r\n            self.dfs(grid, m - 1, j)\r\n        for i in range(m):\r\n            self.dfs(grid, i, 0)\r\n            self.dfs(grid, i, n - 1)\r\n        \r\n        # 剩下都是封闭岛屿，遍历找结果\r\n        for i in range(m):\r\n            for j in range(n):\r\n                if grid[i][j] == 0:\r\n                    result += 1\r\n                    self.dfs(grid, i, j)\r\n        return result\r\n    \r\n    '''从 (i, j) 开始，将与之相邻的陆地都变成海水'''\r\n    def dfs(self, grid, i, j):\r\n        m, n = len(grid), len(grid[0])\r\n        # 超出索引边界\r\n        if i < 0 or j < 0 or i >= m or j >= n:\r\n            return\r\n        # 已经是海水了\r\n        if grid[i][j] == 1:\r\n            return\r\n        # 变成海水\r\n        grid[i][j] = 1\r\n        for d in self.direction:\r\n            x = i + d[0]\r\n            y = j + d[1]\r\n            self.dfs(grid, x, y)",
    "java": "// Runtime: 4 ms (Top 35.60%) | Memory: 47.1 MB (Top 38.97%)\r\nclass Solution {\r\n    boolean isClosed = true;\r\n    public int closedIsland(int[][] grid) {\r\n        int m = grid.length;\r\n        int n = grid[0].length;\r\n        int count = 0;\r\n\r\n        for(int i=1; i<m-1; i++){\r\n            for(int j=1; j<n-1; j++){\r\n                isClosed = true;\r\n                if(grid[i][j] == 0){\r\n                    dfs(grid, i, j);\r\n\r\n                    if(isClosed){\r\n                        count++;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        return count;\r\n    }\r\n\r\n    public void dfs(int[][] grid, int i, int j){\r\n        if(i<0 || j<0 || i> grid.length-1 || j> grid[0].length-1 || grid[i][j] != 0) return;\r\n\r\n         grid[i][j] = 1; // to mark as visited\r\n\r\n        if(i == 0 || j == 0 || i == grid.length -1 || j == grid[0].length - 1) isClosed = false;\r\n\r\n        dfs(grid, i, j+1);\r\n        dfs(grid, i, j-1);\r\n        dfs(grid, i+1, j);\r\n        dfs(grid, i-1, j);\r\n    }\r\n}",
    "javascript": "// Runtime: 118 ms (Top 50.00%) | Memory: 44.6 MB (Top 73.90%)\r\n/**\r\n * @param {number[][]} grid\r\n * @return {number}\r\n */\r\nvar closedIsland = function(grid) {\r\n    let rows = grid.length;\r\n    let cols = grid[0].length;\r\n    let islandCount = 0; // Initial island count\r\n\r\n    // For Quick Response\r\n    if (rows <= 2 || cols <= 2) return islandCount;\r\n\r\n    for (let i = 0; i <= rows - 1; i++) {\r\n        for (let j = 0; j <= cols - 1; j++) {\r\n            /*\r\n                If land was found on the border, it can never be enclosed by water.\r\n                So, mark the all the adjacent land across grid as visited.\r\n            */\r\n            if (grid[i][j] === 0 && (i == 0 || j == 0 || i == rows - 1 || j == cols - 1)) {\r\n                dfs(i, j);\r\n            }\r\n        }\r\n    }\r\n\r\n    // If land is found, increase the count and walk around land(adjacent indexes) to mark them as visited.\r\n    for (let i = 1; i <= rows - 1; i++) {\r\n        for (let j = 1; j <= cols - 1; j++) {\r\n            if (grid[i][j] === 0) {\r\n                islandCount++;\r\n                dfs(i, j);\r\n            }\r\n        }\r\n    }\r\n\r\n    // To walk around land and mark it as visited\r\n    function dfs(x, y) {\r\n        if (x < 0 || y < 0 || x >= rows || y >= cols) return;\r\n        if (grid[x][y] !== 0) return;\r\n\r\n        grid[x][y] = 2;\r\n\r\n        dfs(x + 1, y);\r\n        dfs(x, y + 1);\r\n        dfs(x - 1, y);\r\n        dfs(x, y - 1);\r\n    }\r\n\r\n    return islandCount;\r\n};"
  }
}
