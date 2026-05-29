export default {
  "id": 2088,
  "name": "Count Fertile Pyramids in a Land",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-fertile-pyramids-in-a-land",
  "relativeDir": "C/Count Fertile Pyramids in a Land",
  "slug": "2088-count-fertile-pyramids-in-a-land",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 24,
    "python": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int f(vector<vector<int>>&grid, int i, int j, vector<vector<int>>&dp){\r\n        if(j<0 || j>=grid[0].size() || !grid[i][j]) return -1;\r\n        else if(dp[i][j]!=-1) return dp[i][j];\r\n\t\t\r\n        if(i+1>=grid.size() || !grid[i+1][j]) return dp[i][j] = 0;\r\n        return dp[i][j] =  1 + min(f(grid, i+1, j-1, dp), f(grid, i+1, j+1, dp));\r\n    }\r\n    int countPyramids(vector<vector<int>>& grid) {\r\n        int res = 0, n = grid.size(), m = grid[0].size();\r\n        vector<vector<int>>dp(n, vector<int>(m, -1));\r\n        \r\n        for(int i=0; i<n-1; i++)\r\n            for(int j=0; j<m-1; j++)\r\n                if(grid[i][j]) res+=f(grid, i, j, dp);\r\n        \r\n        dp = vector<vector<int>>(n, vector<int>(m, -1));\r\n        reverse(grid.begin(), grid.end());//flip the grid to consider upside-down pyramid\r\n        \r\n        for(int i=0; i<n-1; i++)\r\n            for(int j=0; j<m-1; j++)\r\n                if(grid[i][j]) res+=f(grid, i, j, dp);\r\n        \r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countPyramids(self, grid):      \r\n        # dp[i][j] represents the number of layers of the largest pyramid with (i, j) as the vertex.\r\n        # Note that the 1-level pyramid is invalid in the problem, so it should be removed when summing.\r\n        # Note that if grid[i][j] is 0, dp[i][j] will always be 0.\r\n        # The dp recurrence formula is dp[i][j] = min(dp[i + 1][j - 1], dp[i + 1][j + 1]) + 1\r\n        m, n, dp, cnt = len(grid), len(grid[0]), copy.deepcopy(grid), 0\r\n        # triangle\r\n        for i in range(m - 2, -1, -1):\r\n            for j in range(1, n - 1):\r\n                if dp[i][j] > 0 and dp[i + 1][j] > 0:\r\n                    dp[i][j] = min(dp[i + 1][j - 1], dp[i + 1][j + 1]) + 1\r\n                    cnt += dp[i][j] - 1\r\n        # inverted triangle\r\n        dp = grid\r\n        for i in range(1, m):\r\n            for j in range(1, n - 1):\r\n                if dp[i][j] > 0 and dp[i - 1][j] > 0:\r\n                    dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j + 1]) + 1\r\n                    cnt += dp[i][j] - 1\r\n        return cnt",
    "java": "// Runtime: 17 ms (Top 60.00%) | Memory: 67.7 MB (Top 80.00%)\r\nclass Solution {\r\n    public int countPyramids(int[][] grid) {\r\n        int m = grid.length, n = grid[0].length;\r\n        int[][] rev = new int[m][n];\r\n        for (int i = 0; i < m; ++i) {\r\n            for (int j = 0; j < n; ++j) rev[m - i - 1][j] = grid[i][j];\r\n        }\r\n        return cal(grid) + cal(rev);\r\n    }\r\n    private int cal(int[][] grid) {\r\n        int m = grid.length, n = grid[0].length, res = 0;\r\n        for (int i = 1; i < m; ++i) {\r\n            for (int j = 0, cnt = 0; j < n; ++j) {\r\n                if (0 != grid[i][j]) cnt++;\r\n                else cnt = 0;\r\n                if (0 == cnt || 0 == j) continue;\r\n                grid[i][j] = Math.min(grid[i - 1][j - 1] + 1, (cnt + 1) >> 1);\r\n                res += grid[i][j] - 1;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n}"
  }
}
