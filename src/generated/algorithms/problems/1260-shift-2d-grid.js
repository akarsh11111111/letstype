export default {
  "id": 1260,
  "name": "Shift 2D Grid",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/shift-2d-grid",
  "relativeDir": "S/Shift 2D Grid",
  "slug": "1260-shift-2d-grid",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 34,
    "python": 18,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> shiftGrid(vector<vector<int>>& grid, int k) {\r\n        \r\n        deque<int>dq;\r\n        \r\n        for(int i=0;i<grid.size();i++){\r\n            for(int j=0;j<grid[i].size();j++){\r\n                dq.push_back(grid[i][j]);\r\n            }\r\n        }\r\n        \r\n        int last = dq.size()-1;\r\n        while(k--){\r\n            int a = dq[last];\r\n            dq.push_front(a);\r\n            dq.pop_back();\r\n        }\r\n        \r\n        int p = 0;\r\n        \r\n        for(int i=0;i<grid.size();i++){\r\n            for(int j=0;j<grid[i].size();j++){\r\n                grid[i][j] = dq[p];\r\n                p++;\r\n            }\r\n        }\r\n        \r\n        return grid;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def shiftGrid(self, grid: List[List[int]], k: int) -> List[List[int]]:\r\n        m, n = len(grid), len(grid[0])\r\n        cache = []\r\n        for i in range(m):\r\n            for j in range(n):\r\n                cache.append(grid[i][j])\r\n        \r\n        k %= len(cache)\r\n        new_vals = cache[-k:] + cache[:-k]\r\n        \r\n        cur = 0\r\n        for i in range(m):\r\n            for j in range(n):\r\n                grid[i][j] = new_vals[cur]\r\n                cur += 1\r\n        \r\n        return grid",
    "java": "class Solution {\r\n    public List<List<Integer>> shiftGrid(int[][] grid, int k) {\r\n        // just bruteforce??? O(i*j*k)\r\n        // instead we calculate the final position at once!\r\n        \r\n        int m = grid.length;  // row\r\n        int n = grid[0].length;  // column\r\n        \r\n        int[][] arr = new int[m][n];\r\n        \r\n        // Since moving m*n times will result in same matrix, we do this:\r\n        k = k % (m*n);\r\n        \r\n        // Then we move each element\r\n        for (int i = 0; i < m; i++) {\r\n            for (int j = 0; j < n; j++) {\r\n                // for calculating column, it back to the original position\r\n                // every n steps\r\n                int column = (j + k) % n;\r\n                \r\n                // for calculating row, we move to the next row each time\r\n                // it exceed the last element on the current row.\r\n                // For example when 2 moves k=5 steps it turns to the (+2) row.\r\n                // Thus it's original row + ((original column + steps) / n)\r\n                // But if 2 moves k=8 steps it turns to the (0,0),\r\n                // and row + ((original column + steps) / n) gives 0+(9/3)=3 (out of bounds)\r\n                // so we'll need to % number of rows to get 0. (circle back)\r\n                int row = (i + ((j + k) / n)) % m;\r\n                arr[row][column] = grid[i][j];\r\n            }\r\n        }\r\n        return (List) Arrays.asList(arr);\r\n    }\r\n}",
    "javascript": "// Runtime: 197 ms (Top 12.59%) | Memory: 48.9 MB (Top 29.63%)\r\n/**\r\n * @param {number[][]} grid\r\n * @param {number} k\r\n * @return {number[][]}\r\n */\r\nvar shiftGrid = function(grid, k) {\r\n\r\n    let m = grid.length\r\n    let n = grid[0].length\r\n\r\n    for (let r = 0; r < k; r++) {\r\n        const newGrid = Array(m).fill(\"X\").map(() => Array(n).fill(\"X\"))\r\n        for (let i = 0; i < m; i++) {\r\n            for (let j = 1; j < n; j++) {\r\n                newGrid[i][j] = grid[i][j-1]\r\n            }\r\n         }\r\n\r\n        for (let i = 1; i < m; i++) {\r\n            newGrid[i][0] = grid[i-1][n-1]\r\n        }\r\n\r\n        newGrid[0][0] = grid[m-1][n-1]\r\n\r\n        //copy the new grid for the next iteration\r\n        grid = newGrid\r\n    }\r\n\r\n    return grid\r\n\r\n};"
  }
}
