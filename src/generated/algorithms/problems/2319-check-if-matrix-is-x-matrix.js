export default {
  "id": 2319,
  "name": "Check if Matrix Is X-Matrix",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-matrix-is-x-matrix",
  "relativeDir": "C/Check if Matrix Is X-Matrix",
  "slug": "2319-check-if-matrix-is-x-matrix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 15,
    "python": 11,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool checkXMatrix(vector<vector<int>>& grid) {\r\n        int n = grid.size();\r\n        for(int i = 0; i < n; i++){\r\n            for(int j = 0; j < n; j++){\r\n                if(i == j or i == n - j - 1){\r\n                    if(!grid[i][j])\r\n                        return false;\r\n                }else if(grid[i][j])\r\n                    return false;    \r\n            }\r\n        }\r\n        \r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def checkXMatrix(self, grid: List[List[int]]) -> bool:\r\n        n = len(grid)\r\n        for i in range(n):\r\n            for j in range(n):\r\n                if i==j or (i+j) ==n-1:\r\n                    if grid[i][j] == 0:\r\n                        return False\r\n                elif grid[i][j] != 0: \r\n                    return False\r\n        return True;",
    "java": "class Solution {\r\n    public boolean checkXMatrix(int[][] grid) {\r\n        \r\n        int n = grid.length;\r\n        for(int i=0; i<n; i++){\r\n            for(int j=0; j<n; j++ ){\r\n                if ( i == j  || i + j == n - 1 ) {\r\n                    if ( grid[i][j] == 0 ) return false;                    \r\n                }\r\n\t\t\t\telse if ( grid[i][j] != 0 ) return false;                                    \r\n            }\r\n        }       \r\n       return true;\r\n    }\r\n}",
    "javascript": "var checkXMatrix = function(grid) {\r\n    for (let i=0; i<grid.length; i++) {\r\n        for (let j=0; j<grid[i].length; j++) {\r\n            let leftDiagonal = grid[i].length - 1;\r\n            if (i === j && grid[i][j] !== 0 || j === leftDiagonal - i && grid[i][j] !== 0) {\r\n                continue;\r\n            }\r\n            if (i === j && grid[i][j] === 0 || j === leftDiagonal - i && grid[i][j] === 0) {\r\n                return false;\r\n            }\r\n            if (grid[i][j] !== 0) {\r\n                return false;\r\n            }\r\n        }\r\n    }\r\n    return true;\r\n};"
  }
}
