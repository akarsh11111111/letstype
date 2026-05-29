export default {
  "id": 1314,
  "name": "Matrix Block Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/matrix-block-sum",
  "relativeDir": "M/Matrix Block Sum",
  "slug": "1314-matrix-block-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 28,
    "python": 21,
    "javascript": 58
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> matrixBlockSum(vector<vector<int>>& mat, int k) {\r\n        int n = mat.size(), m = mat[0].size();\r\n        vector<vector<int>> pref(n+1, vector<int>(m+1, 0));\r\n        // Calculating prefix sum\r\n        for(int i = 1; i <= n; i++){\r\n            for(int j = 1; j <= m; j++){\r\n                // note that while counting for [i-1][j] and [i][j-1];\r\n                // pref[i-1][j-1] will be added twice. So we reduce it once.\r\n                pref[i][j] = mat[i-1][j-1] + pref[i-1][j] + pref[i][j-1] - pref[i-1][j-1];\r\n            }\r\n        }\r\n\r\n        // Find the sum of the elements specified in the K-block\r\n        vector<vector<int>> res(n, vector<int>(m, 0));\r\n        for(int i = 0; i < n; i++){\r\n            for(int j = 0; j < m; j++){\r\n                // checking for all pairs to be in bounds.\r\n                int r1 = max(0, i-k);\r\n                int c1 = max(0, j-k);\r\n                int r2 = min(n-1, i+k);\r\n                int c2 = min(m-1, j+k);\r\n                // finding res[i][j] = bottom right - bottom left - top right + top left\r\n                res[i][j] = pref[r2+1][c2+1] - pref[r2+1][c1] - pref[r1][c2+1] + pref[r1][c1];\r\n            }\r\n        }\r\n\r\n        return res;\r\n\r\n    }\r\n};",
    "python": "# Runtime: 308 ms (Top 20.31%) | Memory: 15.2 MB (Top 51.05%)\r\nclass Solution:\r\n    def matrixBlockSum(self, matrix: List[List[int]], k: int) -> List[List[int]]:\r\n        ROWS, COLS = len(matrix), len(matrix[0])\r\n\r\n        prefix_sums = [[0] * (COLS + 1) for _ in range(ROWS + 1)]\r\n\r\n        for r in range(1, ROWS + 1):\r\n            for c in range(1, COLS + 1):\r\n                prefix_sums[r][c] = prefix_sums[r - 1][c] + prefix_sums[r][c - 1] + \\\r\n                    matrix[r - 1][c - 1] - prefix_sums[r - 1][c - 1]\r\n\r\n        res = [[0] * COLS for _ in range(ROWS)]\r\n        for r in range(ROWS):\r\n            for c in range(COLS):\r\n                res[r][c] = prefix_sums[min(r + k + 1, ROWS)][min(c + k + 1, COLS)] - \\\r\n                    prefix_sums[max(r - k, 0)][min(c + k + 1, COLS)] - \\\r\n                    prefix_sums[min(r + k + 1, ROWS)][max(c - k, 0)] + \\\r\n                    prefix_sums[max(r - k, 0)][max(c - k, 0)]\r\n\r\n        return res",
    "java": "// Runtime: 88 ms (Top 26.15%) | Memory: 43.2 MB (Top 92.07%)\r\nclass Solution {\r\n    public int[][] matrixBlockSum(int[][] mat, int k) {\r\n        int m = mat.length,n = mat[0].length;\r\n        int[][] answer = new int[m][n];\r\n        for(int i=0;i<m;i++){\r\n            for(int j=0;j<n;j++){\r\n                int val = 0;\r\n                // take new variables to get starting index of mat[r][c]\r\n                int p = i-k,q=j-k;\r\n                //make sure p and q are atleast 0 (i.e. valid)\r\n                while(p<0)\r\n                    p++;\r\n                while(q<0)\r\n                    q++;\r\n                //traverse again in the matrix with starting at p,q and ending at i+k and j+k\r\n                //add conditions to make sure the indices dont cross the values of m and n\r\n                for(int x = p;x<=i+k && x<m;x++){\r\n                    for(int y = q;y<=j+k && y<n;y++){\r\n                        val += mat[x][y];\r\n                    }\r\n                }\r\n                answer[i][j] = val;\r\n            }\r\n        }\r\n        return answer;\r\n    }\r\n}",
    "javascript": "// Runtime: 111 ms (Top 82.18%) | Memory: 44.7 MB (Top 58.42%)\r\n/**\r\n * @param {number[][]} mat\r\n * @param {number} k\r\n * @return {number[][]}\r\n */\r\nvar matrixBlockSum = function(mat, k) {\r\n    let sum = 0;\r\n    let dp = Array(mat.length + 1);\r\n    dp[0] = Array(mat[0].length).fill(0);\r\n\r\n    // sum of row el\r\n    for (let i = 0; i < mat.length; i++){\r\n        dp[i + 1] = Array(mat[0].length).fill(0);\r\n        for (let j = 0; j < mat[0].length; j++){\r\n            dp[i + 1][j] += mat[i][j] + sum;\r\n            sum = dp[i + 1][j];\r\n        }\r\n        sum = 0;\r\n    }\r\n\r\n    // sum of col el\r\n    for (let j = 0; j < mat[0].length; j++){\r\n        for (let i = 0; i < mat.length; i++){\r\n            dp[i + 1][j] += sum;\r\n            sum = dp[i + 1][j];\r\n        }\r\n        sum = 0;\r\n    }\r\n\r\n    dp = dp.slice(1);\r\n\r\n    // cal sum of blocks\r\n    for (let i = 0; i < mat.length; i++){\r\n        let r1 = Math.max(0, i - k);\r\n        let r2 = Math.min(mat.length - 1, i + k);\r\n        for (let j = 0; j < mat[0].length; j++){\r\n            let c1 = Math.max(0, j - k);\r\n            let c2 = Math.min(mat[0].length - 1, j + k);\r\n\r\n            let value = dp[r2][c2];\r\n\r\n            if (r1 - 1 >= 0){\r\n                value -= dp[r1 - 1][c2];\r\n            }\r\n            if (c1 - 1 >= 0){\r\n                value -= dp[r2][c1 - 1]\r\n            }\r\n            if (r1 - 1 >= 0 && c1 - 1 >= 0){\r\n                value += dp[r1 - 1][c1 - 1];\r\n            }\r\n            mat[i][j] = value;\r\n        }\r\n    }\r\n\r\n    return mat;\r\n\r\n};"
  }
}
