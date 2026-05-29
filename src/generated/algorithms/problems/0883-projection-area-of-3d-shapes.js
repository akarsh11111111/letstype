export default {
  "id": 883,
  "name": "Projection Area of 3D Shapes",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/projection-area-of-3d-shapes",
  "relativeDir": "P/Projection Area of 3D Shapes",
  "slug": "0883-projection-area-of-3d-shapes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 31,
    "python": 14,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int projectionArea(vector<vector<int>>& grid) {\r\n        int res=0;\r\n        // X-Y ( top )\r\n        for(int i=0;i<grid.size();i++)\r\n        {\r\n            for(int j=0;j<grid[0].size();j++)\r\n            {\r\n                if(grid[i][j]) // if some cubes are present it is seen as of area 1 from top\r\n                    res++; \r\n            }\r\n        }\r\n        \r\n        // Z-X ( front )\r\n        for(int i=0;i<grid.size();i++)\r\n        {\r\n            int m=grid[i][0];\r\n            for(int j=1;j<grid[0].size();j++)\r\n            {\r\n                m=max(m,grid[i][j]);// from front, the tower with heightest height can only be seen in column\r\n            }\r\n            res+=m;\r\n        }\r\n        \r\n        // Z-Y ( side )\r\n        for(int j=0;j<grid[0].size();j++)\r\n        {\r\n            int m=grid[0][j];\r\n            for(int i=1;i<grid.size();i++)\r\n            {\r\n                m=max(m,grid[i][j]);// // from side, the tower with heightest height can only be seen in row\r\n            }\r\n            res+=m;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def projectionArea(self, grid: List[List[int]]) -> int:\r\n        total = 0\r\n\t\t\r\n        # top\r\n        total += sum([1 for i in grid for j in i if j > 0])\r\n        \r\n\t\t# front\r\n        total +=  sum([max(col) for col in zip(*grid)])\r\n        \r\n\t\t# side\r\n        total +=  sum([max(row) for row in grid])\r\n        \r\n\t\treturn total",
    "java": "class Solution {\r\n    public int projectionArea(int[][] grid) {\r\n        int totalArea = 0;\r\n        \r\n        \r\n        for(int[] row : grid){\r\n            int max = row[0];\r\n            for(int c : row){\r\n                if(max < c){\r\n                    max = c;\r\n                }if(c != 0){\r\n                    totalArea += 1;\r\n                }\r\n                \r\n            }\r\n            totalArea += max;\r\n        }\r\n        \r\n        for(int c = 0; c < grid[0].length; c++){\r\n            int max = grid[0][c];\r\n            for(int row = 0; row  <  grid.length; row++){\r\n                if(max < grid[row][c]){\r\n                    \r\n                    max = grid[row][c];\r\n                }\r\n            }\r\n            totalArea += max;\r\n            }\r\n        return totalArea;\r\n    }\r\n}",
    "javascript": "var projectionArea = function(grid) {\r\n    let maxs = new Array(grid.length).fill(0);\r\n\r\n    grid.forEach(row => row.forEach((val, idx) => {\r\n        if (maxs[idx] < val) maxs[idx] = val;\r\n    }))\r\n    \r\n    const z = grid.reduce((prev, curr) => prev + curr.filter(val => val !== 0).length, 0);\r\n    const y = grid.reduce((prev, curr) => prev + Math.max(...curr), 0);\r\n    const x = maxs.reduce((prev, curr) => prev + curr, 0)\r\n    \r\n    return x + y + z;\r\n};"
  }
}
