export default {
  "id": 463,
  "name": "Island Perimeter",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/island-perimeter",
  "relativeDir": "I/Island Perimeter",
  "slug": "0463-island-perimeter",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 28,
    "python": 16,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 75 ms (Top 80.5%) | Memory: 96.50 MB (Top 55.46%)\r\n\r\nclass Solution {\r\npublic:\r\n    int islandPerimeter(vector<vector<int>>& grid) {\r\n        int ans = 0 , row = grid.size(), col = grid[0].size();    \r\n        for(int i = 0 ; i < row ; i++)\r\n        {\r\n           for(int j = 0 ; j < col ; j++)\r\n           {\r\n               if( grid[i][j])\r\n               {\r\n                  ans+=4;\r\n                  if(i < row - 1 && grid[i+1][j])ans--; \r\n                  if(j < col -1 && grid[i][j+1])ans--; \r\n                  if(j  && grid[i][j-1])ans--; \r\n                  if(i  && grid[i-1][j])ans--; \r\n               }\r\n           } \r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 382 ms (Top 98.7%) | Memory: 16.57 MB (Top 93.9%)\r\n\r\nclass Solution:\r\n    def islandPerimeter(self, grid: List[List[int]]) -> int:\r\n        perimeter = 0\r\n\r\n        for i in range(len(grid)):\r\n            for j in range(len(grid[0])):\r\n                if grid[i][j] == 1:\r\n                    perimeter += 4\r\n                    if i != 0 and grid[i-1][j] == 1:\r\n                        perimeter -= 2\r\n                    if j != 0 and grid[i][j-1] == 1:\r\n                        perimeter -= 2 \r\n            \r\n        return perimeter",
    "java": "// Runtime: 10 ms (Top 73.55%) | Memory: 62.3 MB (Top 52.61%)\r\nclass Solution {\r\n    public int islandPerimeter(int[][] grid) {\r\n        if(grid == null || grid.length == 0) return 0;\r\n\r\n        int row=grid.length,col=grid[0].length;\r\n        int perimeter=0;\r\n\r\n        for(int i=0;i<row;i++){\r\n            for(int j=0;j<col;j++){\r\n\r\n                if(grid[i][j]==1){\r\n                    perimeter+=4;\r\n\r\n                    if(i>0 && grid[i-1][j]==1){\r\n                    perimeter-=2;\r\n                   }\r\n\r\n                    if(j>0 && grid[i][j-1]==1){\r\n                    perimeter-=2;\r\n                   }\r\n                }\r\n\r\n            }\r\n        }\r\n        return perimeter;\r\n    }\r\n}",
    "javascript": "var islandPerimeter = function(grid) {\r\n    let perimeter = 0\r\n    let row = grid.length\r\n    let col = grid[0].length\r\n    \r\n    for (let i = 0; i < grid.length; i++) {\r\n        for (let j = 0; j < grid[i].length; j++) {\r\n            if (grid[i][j] === 1) {\r\n                if (i === 0 || i > 0 && grid[i-1][j] === 0) perimeter++ \r\n                if (i === row-1 || i < row-1 && grid[i+1][j] === 0) perimeter++              \r\n                if (j === 0 || j > 0 && grid[i][j-1] === 0) perimeter++\r\n                if (j === col - 1 || j < col && grid[i][j+1] === 0) perimeter++\r\n            }\r\n        }\r\n    }\r\n    \r\n    return perimeter\r\n};"
  }
}
