export default {
  "id": 1572,
  "name": "Matrix Diagonal Sum",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/matrix-diagonal-sum",
  "relativeDir": "M/Matrix Diagonal Sum",
  "slug": "1572-matrix-diagonal-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 18,
    "python": 26,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 41 ms (Top 5.11%) | Memory: 11.3 MB (Top 10.91%)\r\nclass Solution {\r\npublic:\r\n    int diagonalSum(vector<vector<int>>& mat) {\r\n     int n = mat.size() ;\r\n     int ans = 0 ;\r\n\r\n     for(int i = 0 ; i < n ; i++){\r\n        ans = ans + mat[i][i] + mat[i][n - i - 1] ;\r\n      }\r\n      ans = (n & 1) ? ans - mat[n/2][n/2] : ans ;//if n is odd then we have to subtract mat[n/2][n/2] from the ans because we add it twice earlier.\r\n      return ans ;\r\n    }\r\n};",
    "python": "// Runtime: 98 ms (Top 89.16%) | Memory: 17.60 MB (Top 5.05%)\r\n\r\nclass Solution:\r\n    def diagonalSum(self, mat: List[List[int]]) -> int:\r\n        \r\n        n = len(mat)\r\n        \r\n        mid = n // 2\r\n        \r\n        summation = 0\r\n        \r\n        for i in range(n):\r\n            \r\n            # primary diagonal\r\n            summation += mat[i][i]\r\n            \r\n            # secondary diagonal\r\n            summation += mat[n-1-i][i]\r\n            \r\n            \r\n        if n % 2 == 1:\r\n            # remove center element (repeated) on odd side-length case\r\n            summation -= mat[mid][mid]\r\n            \r\n            \r\n        return summation",
    "java": "class Solution {\r\n    public int diagonalSum(int[][] mat) {\r\n        int sum1 = 0;\r\n        int sum2 = 0;\r\n        int n = mat.length;\r\n        for(int i = 0 ; i < n ; i++)\r\n        {\r\n            sum1 += mat[i][i];\r\n            sum2 += mat[i][n-i-1];\r\n        }\r\n        int res = sum1 + sum2;\r\n        if(n%2 != 0)\r\n        {\r\n            res -= mat[n/2][n/2];\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 101 ms (Top 40.82%) | Memory: 43.3 MB (Top 79.80%)\r\nvar diagonalSum = function(mat) {\r\n    return mat.reduce((acc, matrix, i)=>{\r\n      const matrixlength = matrix.length-1;\r\n       return acc += (i !== matrixlength-i) ? matrix[i]+ matrix[matrixlength-i] : matrix[i];\r\n    },0)\r\n};\r\n\r\n/*\r\nRuntime: 67 ms, faster than 92.84% of JavaScript online submissions for Matrix Diagonal Sum.\r\nMemory Usage: 42.9 MB, less than 88.29% of JavaScript online submissions for Matrix Diagonal Sum.\r\n*/"
  }
}
