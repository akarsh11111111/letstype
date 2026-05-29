export default {
  "id": 892,
  "name": "Surface Area of 3D Shapes",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/surface-area-of-3d-shapes",
  "relativeDir": "S/Surface Area of 3D Shapes",
  "slug": "0892-surface-area-of-3d-shapes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 29,
    "python": 21,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int surfaceArea(vector<vector<int>>& grid) {\r\n        int area = 0;\r\n        \r\n        for(int i  = 0; i < grid.size(); i++) {\r\n            for(int j = 0; j < grid[0].size(); j++) {\r\n\t\t\t\t//adding 4 sides\r\n                area += grid[i][j]*4;\r\n\t\t\t\t\r\n\t\t\t\t//adding two because of there will only one top and one bottom if cube is placed upon each other\r\n                if(grid[i][j] != 0)\r\n                    area+=2;\r\n\t\t\t\t\r\n\t\t\t\t//subtracting adjacent side area if any\r\n                if(i-1 >= 0)\r\n                    area -= min(grid[i-1][j], grid[i][j]);\r\n                if(i+1 < grid.size())\r\n                    area -= min(grid[i+1][j], grid[i][j]);\r\n                if(j-1 >= 0)\r\n                    area -= min(grid[i][j-1], grid[i][j]);\r\n                if(j+1 < grid.size())\r\n                    area -= min(grid[i][j+1], grid[i][j]);\r\n            }\r\n        }\r\n        \r\n        return area;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def surfaceArea(self, grid: List[List[int]]) -> int:        \r\n        m, n = len(grid), len(grid[0])\r\n        \r\n        area = 0\r\n        for r in range(m):               \r\n            for c in range(n):\r\n                if grid[r][c] != 0:\r\n                    area += 2\r\n                \r\n                if r == 0 or r == m - 1:\r\n                    area += grid[r][c] if m != 1 else 2*grid[r][c]\r\n                if r != m - 1:                    \r\n                    area += abs(grid[r][c] - grid[r+1][c])\r\n                    \r\n                if c == 0 or c == n - 1:\r\n                    area += grid[r][c] if n != 1 else 2*grid[r][c]\r\n                if c != n - 1:                    \r\n                    area += abs(grid[r][c] - grid[r][c+1])                    \r\n                \r\n        return area",
    "java": "// Runtime: 4 ms (Top 63.77%) | Memory: 44.7 MB (Top 34.78%)\r\nclass Solution {\r\n    public int surfaceArea(int[][] grid) {\r\n        int area = 0;\r\n        int n = grid.length;\r\n        for(int i=0; i<n; i++){\r\n            for(int j=0; j<n; j++){\r\n\r\n                // Adding the top part of grid\r\n                if(i==0) area += grid[i][j];\r\n                else area += Math.abs(grid[i][j] - grid[i-1][j]);\r\n\r\n                // Adding the left part of grid\r\n                if(j==0) area += grid[i][j];\r\n                else area += Math.abs(grid[i][j] - grid[i][j-1]);\r\n\r\n                // Adding bottom part of bottom-most cubes\r\n                if(i == n-1) area += grid[i][j];\r\n\r\n                // Adding right part for right-most cubes\r\n                if(j == n-1) area += grid[i][j];\r\n\r\n                // Add top and bottom surfaces if there is no hole in grid\r\n                if(grid[i][j] != 0) area += 2;\r\n            }\r\n        }\r\n        return area;\r\n    }\r\n}",
    "javascript": "// Runtime: 55 ms (Top 83.33%) | Memory: 42.20 MB (Top 85.19%)\r\n\r\nvar surfaceArea = function(grid) {\r\n    let cube=0, overlap=0;\r\n    for(let i=0; i<grid.length; i++){\r\n        for(let j=0; j<grid[i].length; j++){\r\n            cube+=grid[i][j];\r\n            if(i>0){overlap+=Math.min(grid[i][j], grid[i-1][j]);} // x-direction\r\n            if(j>0){overlap+=Math.min(grid[i][j], grid[i][j-1]);} // y-direction\r\n\t\t\tif(grid[i][j]>1){overlap+=grid[i][j]-1}; // z-direction\r\n        }\r\n    }\r\n    return cube*6-overlap*2;\r\n};"
  }
}
