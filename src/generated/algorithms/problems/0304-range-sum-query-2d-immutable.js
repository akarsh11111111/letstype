export default {
  "id": 304,
  "name": "Range Sum Query 2D - Immutable",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/range-sum-query-2d-immutable",
  "relativeDir": "R/Range Sum Query 2D - Immutable",
  "slug": "0304-range-sum-query-2d-immutable",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 50,
    "java": 29,
    "python": 19,
    "javascript": 52
  },
  "languages": {
    "cpp": "//Using row prefix sum O(m)\r\nclass NumMatrix {\r\n    vector<vector<int>> prefix;\r\npublic:\r\n    NumMatrix(vector<vector<int>>& matrix) {\r\n        int m = matrix.size(), n = matrix[0].size();\r\n        for(int i = 0;i<m;i++){\r\n            vector<int> row(n);\r\n            row[0] = matrix[i][0];\r\n            for(int j = 1;j<n;j++){\r\n                row[j] = row[j-1] + matrix[i][j];\r\n            }\r\n            prefix.push_back(row);\r\n        }\r\n    }\r\n    \r\n    int sumRegion(int row1, int col1, int row2, int col2) {\r\n        int sum = 0;\r\n        for(int i = row1;i<=row2;i++){\r\n            sum += prefix[i][col2];\r\n            if(col1>0) sum -= prefix[i][col1-1];\r\n        }\r\n        return sum;\r\n    }\r\n};\r\n\r\n//Using mat prefix sum O(1)\r\nclass NumMatrix {\r\n    vector<vector<int>> prefix;\r\npublic:\r\n    NumMatrix(vector<vector<int>>& matrix) {\r\n        int m = matrix.size(), n = matrix[0].size();\r\n        prefix = vector<vector<int>>(m+1,vector<int>(n+1,0));\r\n        prefix[1][1] = matrix[0][0];\r\n        for(int i = 1;i<=m;i++){\r\n            for(int j = 1;j<=n;j++){\r\n                prefix[i][j] = prefix[i-1][j] + prefix[i][j-1] + matrix[i-1][j-1] - prefix[i-1][j-1];\r\n            }\r\n        }\r\n    }\r\n    \r\n    int sumRegion(int row1, int col1, int row2, int col2) {\r\n        int sum = 0;\r\n        sum += prefix[row2+1][col2+1];\r\n        sum -= prefix[row1][col2+1];\r\n        sum -= prefix[row2+1][col1];\r\n        sum += prefix[row1][col1];\r\n        return sum;\r\n    }\r\n};",
    "python": "# Runtime: 3180 ms (Top 18.96%) | Memory: 24.7 MB (Top 69.46%)\r\n\r\nclass NumMatrix:\r\n\r\n    def __init__(self, matrix: List[List[int]]):\r\n        m, n = len(matrix), len(matrix[0])\r\n        # Understand why we need to create a new matrix with extra one row/column\r\n        self.sum = [[0 for row in range(n + 1)] for column in range(m + 1)]\r\n        for r in range(1, m + 1):\r\n            for c in range(1, n + 1):\r\n                self.sum[r][c] = self.sum[r - 1][c] + self.sum[r][c - 1] - self.sum[r - 1][c - 1] + matrix[r - 1][c - 1]\r\n\r\n    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:\r\n        r1, c1, r2, c2 = row1 + 1, col1 + 1, row2 + 1, col2 + 1\r\n        return self.sum[r2][c2] - self.sum[r1 - 1][c2] - self.sum[r2][c1 - 1] + self.sum[r1 - 1][c1 - 1]\r\n\r\n# Your NumMatrix object will be instantiated and called as such:\r\n# obj = NumMatrix(matrix)\r\n# param_1 = obj.sumRegion(row1,col1,row2,col2)",
    "java": "class NumMatrix {\r\n\r\n    int mat[][];\r\n    public NumMatrix(int[][] matrix) {\r\n        mat = matrix;\r\n        int rows = mat.length;\r\n        int cols = mat[0].length;\r\n        \r\n        for(int i = 0; i< rows; i++)\r\n        {\r\n            for(int j = 0; j < cols; j++) \r\n            {\r\n                if(i > 0) mat[i][j] += mat[i-1][j];\r\n                if(j > 0) mat[i][j] += mat[i][j-1];\r\n                if(i>0 && j > 0) mat[i][j] -= mat[i-1][j-1];\r\n            }\r\n        }\r\n        \r\n    }\r\n    \r\n    public int sumRegion(int row1, int col1, int row2, int col2) {\r\n        int res = mat[row2][col2];\r\n        if(row1 > 0) res -= mat[row1-1][col2];\r\n        if(col1 > 0) res -= mat[row2][col1-1];\r\n        if(row1> 0 && col1 > 0) res += mat[row1-1][col1-1];\r\n        \r\n        return res;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} matrix\r\n */\r\nvar NumMatrix = function(matrix) {\r\n    const n = matrix.length, m = matrix[0].length;\r\n    // n * m filled with 0\r\n    this.prefix = Array.from({ length: n}, (_, i) => {\r\n        return new Array(m).fill(0);\r\n    });\r\n    const prefix = this.prefix;\r\n    // precompute\r\n    for(let i = 0; i < m; i++) {\r\n        if(i == 0) prefix[0][i] = matrix[0][i];\r\n        else prefix[0][i] = prefix[0][i-1] + matrix[0][i];\r\n    }\r\n    for(let i = 0; i < n; i++) {\r\n        if(i == 0) continue;\r\n        else prefix[i][0] = prefix[i-1][0] + matrix[i][0];\r\n    }\r\n    \r\n    for(let i = 1; i < n; i++) {\r\n        for(let j = 1; j < m; j++) {\r\n            prefix[i][j] = prefix[i-1][j] + prefix[i][j-1] - prefix[i-1][j-1] + matrix[i][j];\r\n        }\r\n    }\r\n};\r\n\r\n/** \r\n * @param {number} row1 \r\n * @param {number} col1 \r\n * @param {number} row2 \r\n * @param {number} col2\r\n * @return {number}\r\n */\r\nNumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {\r\n    const prefix = this.prefix;\r\n    const biggerRectSum = prefix[row2][col2];\r\n    if(row1 == col1 && row1 == 0) return biggerRectSum;\r\n    if(row1 == 0 || col1 == 0) {\r\n        let subtractRegion = 0;\r\n        if(row1 == 0) subtractRegion = prefix[row2][col1 - 1];\r\n        else subtractRegion = prefix[row1 - 1][col2];\r\n        return biggerRectSum - subtractRegion;\r\n    }\r\n    return biggerRectSum - prefix[row1-1][col2] - prefix[row2][col1 - 1] + prefix[row1-1][col1-1];\r\n};\r\n\r\n/** \r\n * Your NumMatrix object will be instantiated and called as such:\r\n * var obj = new NumMatrix(matrix)\r\n * var param_1 = obj.sumRegion(row1,col1,row2,col2)\r\n */"
  }
}
