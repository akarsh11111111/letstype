export default {
  "id": 1463,
  "name": "Cherry Pickup II",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/cherry-pickup-ii",
  "relativeDir": "C/Cherry Pickup II",
  "slug": "1463-cherry-pickup-ii",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "python": 27,
    "javascript": 37
  },
  "languages": {
    "cpp": "// Runtime: 461 ms (Top 6.78%) | Memory: 16.8 MB (Top 51.89%)\r\nclass Solution {\r\npublic:\r\n    int cherryPickup(vector<vector<int>>& grid) {\r\n        int n = grid.size();\r\n        int m = grid[0].size();\r\n        vector<vector<vector<int>>> dp(n,vector<vector<int>>(m,vector<int>(m, 0)));\r\n\r\n        for(int i = 0 ; i < m ; i++){\r\n            for(int j = 0 ; j < m ; j++){\r\n                if(i==j) dp[n-1][i][j] = grid[n-1][i];\r\n                else dp[n-1][i][j] = grid[n-1][i] + grid[n-1][j];\r\n            }\r\n        }\r\n        for(int i = n-2 ; i >= 0 ; i--){\r\n            for(int j1 = 0 ; j1 < m ; j1++){\r\n                for(int j2 = 0 ; j2 < m ; j2++){\r\n                    int maxi = -1e8;\r\n                    for(int dj1 = -1 ; dj1 <= 1 ; dj1 ++){\r\n                        for(int dj2 = -1 ; dj2 <= 1 ; dj2 ++){\r\n                            int value = 0;\r\n                            if(j1 == j2) value = grid[i][j2];\r\n                            else value = grid[i][j1] + grid[i][j2];\r\n\r\n                            if(j1+dj1 >= 0 && j1+dj1 < m && j2 +dj2 >= 0 && j2 +dj2 < m)\r\n                                value += dp[i+1][j1+dj1][j2 +dj2];\r\n                            else\r\n                                value+= -1e8;\r\n                            maxi = max(maxi,value);\r\n                        }\r\n                    }\r\n                    dp[i][j1][j2] = maxi;\r\n                }\r\n            }\r\n        }\r\n        return dp[0][0][m-1];\r\n    }\r\n};",
    "python": "// Runtime: 609 ms (Top 95.65%) | Memory: 24.30 MB (Top 75.94%)\r\n\r\nclass Solution:\r\n    def cherryPickup(self, grid: List[List[int]]) -> int:\r\n        rows, cols = len(grid), len(grid[0])\r\n        \r\n        dp = [[[0]*(cols + 2) for _ in range(cols + 2)] for _ in range(rows + 1)]\r\n        \r\n        def get_next_max(row, col_r1, col_r2):\r\n            res = 0\r\n            for next_col_r1 in (col_r1 - 1, col_r1, col_r1 + 1):\r\n                for next_col_r2 in (col_r2 - 1, col_r2, col_r2 + 1):\r\n                    res = max(res, dp[row + 1][next_col_r1 + 1][next_col_r2 + 1])\r\n\r\n            return res\r\n        \r\n        for row in reversed(range(rows)):\r\n            for col_r1 in range(min(cols, row + 2)):\r\n                for col_r2 in range(max(0, cols - row - 1), cols):\r\n\r\n                    reward = grid[row][col_r1] + grid[row][col_r2]\r\n                    if col_r1 == col_r2:\r\n                        reward /= 2\r\n                    \r\n                    dp[row][col_r1 + 1][col_r2 + 1] = reward + get_next_max(row, col_r1, col_r2)\r\n                    \r\n        return dp[0][1][cols]",
    "javascript": "/**\r\n * @param {number[][]} grid\r\n * @return {number}\r\n */\r\nvar cherryPickup = function(grid) {\r\n    const numOfRow = grid.length\r\n    const numOfCol = grid[0].length\r\n\r\n    let memo = {} // must memorize the step result which already get, or you will get a TLE\r\n\r\n    const dfs = (row, col1, col2) => {\r\n        if (memo[`${row},${col1},${col2}`]) { // return the result once the location have already been calculated\r\n            return memo[`${row},${col1},${col2}`]\r\n        }\r\n\r\n        let cherries = grid[row][col1] // Robot #1 location\r\n        if (col1 !== col2) { // when both robots stay in the same cell, only one takes the cherries.\r\n            cherries += grid[row][col2]\r\n        }\r\n\r\n        if (row === numOfRow - 1) return cherries // last row, no need to do more DFS\r\n\r\n        let max = 0 // initial the max cherries with next row with min integer 0\r\n\t\t\r\n\t\t// all the possible locations with Robot #1 and Robot #2 should calculate, the max combination is 3*3=6\r\n        for (let i = col1 - 1; i <= col1 + 1; i++) { // Robot #1 next step could be next row with current col-1, current col or current col+1\r\n            for (let j = col2 - 1; j <= col2 + 1; j++) { // Robot #2 next step could be next row with current col-1, current col or current col+1\r\n                if (i >= 0 && j >= 0 && i < numOfCol && j < numOfCol) { // Both robot next column should greater and equal than 0, less than numOfCol\r\n                    max = Math.max(max, dfs(row + 1, i, j)) // save the max result with all the possible locations\r\n                }\r\n            }\r\n        }\r\n        memo[`${row},${col1},${col2}`] = max + cherries // save the result to memo\r\n        return max + cherries // return the max cherries and the current position's cherries\r\n    }\r\n    return dfs(0, 0, numOfCol - 1) // from row 0, Robot #1 col1 = 0(top-left corner), Robot #2 col2 = numOfCol-1(top-right corner )\r\n}"
  }
}
