export default {
  "id": 48,
  "name": "Rotate Image",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rotate-image",
  "relativeDir": "R/Rotate Image",
  "slug": "0048-rotate-image",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 22,
    "python": 19,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 7.01 MB (Top 57.2%)\r\n\r\nclass Solution {\r\npublic:\r\n    void rotate(vector<vector<int>>& matrix) {\r\n        int row = matrix.size();\r\n        for(int i=0;i<row; i++){\r\n            for(int j=0; j<=i;j++){\r\n                swap(matrix[i][j], matrix[j][i]);\r\n            }\r\n        }\r\n        for(int i=0;i<row;i++){\r\n            reverse(matrix[i].begin(), matrix[i].end());\r\n        }\r\n    }\r\n};",
    "python": "class Solution:\r\n    \r\n    def rotate(self, matrix: List[List[int]]) -> None:\r\n        \"\"\"\r\n        Do not return anything, modify matrix in-place instead.\r\n        \"\"\"\r\n        # transpose \r\n        size = len(matrix)\r\n        for i in range(size):\r\n            for j in range(i+1, size):\r\n                matrix[j][i],matrix[i][j] = matrix[i][j],matrix[j][i]\r\n        \r\n        print(matrix)\r\n        \r\n        # reverse row\r\n        for row in range(len(matrix)):\r\n            matrix[row] = matrix[row][::-1]\r\n        \r\n        print(matrix)",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 42.7 MB (Top 54.90%)\r\nclass Solution {\r\n    public void swap(int[][] matrix, int n1, int m1, int n2, int m2) {\r\n        int a = matrix[n1][m1];\r\n        int temp = matrix[n2][m2];\r\n        matrix[n2][m2] = a;\r\n        matrix[n1][m1] = temp;\r\n    }\r\n    public void rotate(int[][] matrix) {\r\n        int n = matrix.length;\r\n        for (int i = 0; i < n/2; i++) {\r\n            for (int j = 0; j < n; j++) {\r\n                swap(matrix, i,j, n-i-1, j);\r\n            }\r\n        }\r\n        for (int i = n-1; i >= 0; i--) {\r\n            for (int j = 0; j < i; j++) {\r\n                swap(matrix, i,j, j, i);\r\n            }\r\n        }\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} matrix\r\n * @return {void} Do not return anything, modify matrix in-place instead.\r\n */\r\nvar rotate = function(matrix) {\r\n    let m = matrix.length;\r\n    let n = matrix[0].length;\r\n    \r\n    for (let i = m - 1; i >= 0; i--) {\r\n        for (let j = 0; j < m; j++) {\r\n            matrix[j].push(matrix[i].shift());\r\n        }\r\n    }\r\n};"
  }
}
