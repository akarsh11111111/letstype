export default {
  "id": 1594,
  "name": "Maximum Non Negative Product in a Matrix",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix",
  "relativeDir": "M/Maximum Non Negative Product in a Matrix",
  "slug": "1594-maximum-non-negative-product-in-a-matrix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 37,
    "python": 19,
    "javascript": 27
  },
  "languages": {
    "cpp": "const long long MOD = 1e9 + 7;\r\nclass Solution {\r\npublic:\r\n    int maxProductPath(vector<vector<int>>& grid) {\r\n        long long mx[20][20] = {0};\r\n        long long mn[20][20] = {0};\r\n        int row = grid.size(), col = grid[0].size();\r\n        \r\n        // Init\r\n        mx[0][0] = mn[0][0] = grid[0][0];\r\n        \r\n        // Init the row0 and col0 to be the continuous multiply of the elements.\r\n        for(int i = 1; i < row; i++){\r\n            mx[i][0] = mn[i][0] = mx[i - 1][0] * grid[i][0];\r\n        }\r\n        for(int j = 1; j < col; j++){\r\n            mx[0][j] = mn[0][j] = mx[0][j - 1] * grid[0][j];\r\n        }\r\n        \r\n        // DP as the explanation picture shows\r\n        for(int i = 1; i < row; i++){\r\n            for(int j = 1; j < col; j++){\r\n                mx[i][j] = max(max(mx[i - 1][j], mx[i][j - 1]) * grid[i][j], min(mn[i - 1][j], mn[i][j - 1]) * grid[i][j]);\r\n                mn[i][j] = min(max(mx[i - 1][j], mx[i][j - 1]) * grid[i][j], min(mn[i - 1][j], mn[i][j - 1]) * grid[i][j]);\r\n            }\r\n        }\r\n        \r\n        return mx[row - 1][col - 1] < 0 ? -1 : mx[row - 1][col - 1] % MOD;\r\n    }\r\n};",
    "python": "# Runtime: 63 ms (Top 56.0%) | Memory: 16.84 MB (Top 17.4%)\r\n\r\nclass Solution:\r\n    def maxProductPath(self, grid: List[List[int]]) -> int:\r\n        m, n = len(grid), len(grid[0])\r\n        \r\n        @lru_cache(None)\r\n        def fn(i, j): \r\n            \"\"\"Return maximum & minimum products ending at (i, j).\"\"\"\r\n            if i == 0 and j == 0: return grid[0][0], grid[0][0]\r\n            if i < 0 or j < 0: return -inf, inf\r\n            if grid[i][j] == 0: return 0, 0\r\n            mx1, mn1 = fn(i-1, j) # from top\r\n            mx2, mn2 = fn(i, j-1) # from left \r\n            mx, mn = max(mx1, mx2)*grid[i][j], min(mn1, mn2)*grid[i][j]\r\n            return (mx, mn) if grid[i][j] > 0 else (mn, mx)\r\n        \r\n        mx, _ = fn(m-1, n-1)\r\n        return -1 if mx < 0 else mx % 1_000_000_007",
    "java": "// Runtime: 4 ms (Top 41.67%) | Memory: 43.3 MB (Top 29.76%)\r\nclass Solution {\r\n    public class Pair{\r\n        long min=Integer.MAX_VALUE,max=Integer.MIN_VALUE;\r\n        Pair(){\r\n\r\n        }\r\n        Pair(long min,long max){\r\n            this.min=min;\r\n            this.max=max;\r\n        }\r\n    }\r\n    public int maxProductPath(int[][] grid) {\r\n        Pair[][] dp=new Pair[grid.length][grid[0].length];\r\n        for(int r=grid.length-1;r>=0;r--){\r\n            for(int c=grid[0].length-1;c>=0;c--){\r\n                if(r==grid.length-1 && c==grid[0].length-1){\r\n                    dp[r][c]=new Pair(grid[r][c],grid[r][c]);\r\n                }else{\r\n                    Pair hor=(c==grid[0].length-1)?new Pair():dp[r][c+1];\r\n                    Pair ver=(r==grid.length-1)?new Pair():dp[r+1][c];\r\n                    long min,max;\r\n                    if(grid[r][c]>=0){\r\n                         max=Math.max(hor.max,ver.max);\r\n                         min=Math.min(hor.min,ver.min);\r\n                    }else{\r\n                         min=Math.max(hor.max,ver.max);\r\n                         max=Math.min(hor.min,ver.min);\r\n                    }\r\n                        dp[r][c]=new Pair(min*grid[r][c],max*grid[r][c]);\r\n                }\r\n            }\r\n        }\r\n        int mod=(int)1e9 +7;\r\n        return dp[0][0].max<0?-1:(int)(dp[0][0].max%mod);\r\n    }\r\n}",
    "javascript": "var maxProductPath = function(grid) {\r\n    const R = grid.length, C = grid[0].length;\r\n    if (R === 0 || C === 0)\r\n        return -1;\r\n    \r\n    const mat = [...Array(R)].map(() => [...Array(C)].map(() => new Array(2)));\r\n    \r\n    mat[0][0] = [grid[0][0], grid[0][0]];\r\n    for (let i = 1; i < R; i++)\r\n        mat[i][0] = [mat[i-1][0][0]*grid[i][0], mat[i-1][0][1]*grid[i][0]];\r\n    \r\n    for (let i = 1; i < C; i++)\r\n        mat[0][i] = [mat[0][i-1][0]*grid[0][i], mat[0][i-1][1]*grid[0][i]];\r\n    \r\n    for (let i = 1; i < R; i++) {\r\n        for (let j = 1; j < C; j++) {\r\n            const max = Math.max(mat[i-1][j][0], mat[i][j-1][0]),\r\n                  min = Math.min(mat[i-1][j][1], mat[i][j-1][1]);\r\n            if (grid[i][j] >= 0)\r\n                mat[i][j] = [max*grid[i][j], min*grid[i][j]];\r\n            else\r\n                mat[i][j] = [min*grid[i][j], max*grid[i][j]];\r\n        }\r\n    }\r\n    \r\n    return mat[R-1][C-1][0] >= 0 ? mat[R-1][C-1][0] % (10**9+7) : -1;\r\n};"
  }
}
