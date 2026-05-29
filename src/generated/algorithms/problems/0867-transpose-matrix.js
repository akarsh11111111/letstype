export default {
  "id": 867,
  "name": "Transpose Matrix",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/transpose-matrix",
  "relativeDir": "T/Transpose Matrix",
  "slug": "0867-transpose-matrix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 17,
    "python": 9,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 87.04%) | Memory: 11.00 MB (Top 30.19%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> transpose(vector<vector<int>>& matrix) {\r\n        int row = matrix.size();\r\n        int col = matrix[0].size();\r\n        vector<vector<int>> result(col, vector<int>(row, 0));\r\n        \r\n        for (int i = 0; i < col; ++i) {\r\n            for (int j = 0; j < row; ++j) {\r\n                result[i][j] = matrix[j][i];\r\n            }\r\n        }\r\n        \r\n        return result;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def transpose(self, matrix: List[List[int]]) -> List[List[int]]:\r\n        rows=len(matrix)\r\n        cols=len(matrix[0])\r\n        ans=[[0]*rows]*cols\r\n        for i in range(cols):\r\n            for j in range(rows):\r\n                ans[i][j]=matrix[j][i]\r\n        return ans",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 43.1 MB (Top 92.66%)\r\nclass Solution {\r\n    public int[][] transpose(int[][] matrix) {\r\n        int m = matrix.length;\r\n        int n = matrix[0].length;\r\n\r\n        int[][] trans = new int[n][m];\r\n\r\n        for(int i = 0; i < n; i++) {\r\n            for(int j = 0; j < m; j++) {\r\n                trans[i][j] = matrix[j][i];\r\n            }\r\n        }\r\n\r\n        return trans;\r\n    }\r\n}",
    "javascript": "// Runtime: 88 ms (Top 77.00%) | Memory: 44.4 MB (Top 78.92%)\r\n\r\nvar transpose = function(matrix){\r\n    let result = []\r\n    for(let i=0;i<matrix[0].length;i++){\r\n\r\n        let col = []\r\n\r\n        for(let j= 0;j<matrix.length;j++){\r\n            col.push(matrix[j][i])\r\n        }\r\n        result.push(col)\r\n    }\r\n    return result\r\n};\r\n\r\n    console.log(transpose( [ [1 , 2 , 3] , [ 4 , 5 , 6 ] , [ 7 , 8 , 9 ] ] ) )"
  }
}
