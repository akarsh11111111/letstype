export default {
  "id": 566,
  "name": "Reshape the Matrix",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reshape-the-matrix",
  "relativeDir": "R/Reshape the Matrix",
  "slug": "0566-reshape-the-matrix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 25,
    "python": 4,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 6 ms (Top 87.16%) | Memory: 11.70 MB (Top 14.09%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> matrixReshape(vector<vector<int>>& mat, int r, int c) {\r\n        int m = mat.size() , n= mat[0].size();\r\n        vector<vector<int>>v(r,vector<int>(c));\r\n        queue<int>q;\r\n        if(m*n == r*c){\r\n            for(int i=0;i<m;i++){\r\n                for(int j=0;j<n;j++){\r\n                    q.push(mat[i][j]);\r\n                }\r\n            }\r\n            for(int i=0;i<r;i++){\r\n                for(int j=0;j<c;j++){\r\n                    v[i][j] = q.front();\r\n                    q.pop();\r\n                }\r\n            }\r\n            return v;\r\n        }\r\n        return mat;\r\n    }\r\n};",
    "python": "import numpy\r\nclass Solution:\r\n    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:\r\n        return numpy.reshape(mat,(r,c)) if r*c==len(mat)*len(mat[0]) else mat",
    "java": "// Runtime: 1 ms (Top 90.50%) | Memory: 50.7 MB (Top 48.08%)\r\nclass Solution {\r\n    public int[][] matrixReshape(int[][] mat, int r, int c) {\r\n\r\n        if (r * c != mat.length * mat[0].length) {\r\n            return mat;\r\n        }\r\n\r\n        int[][] ans = new int[r][c];\r\n\r\n        int i = 0;\r\n        int j = 0;\r\n\r\n        for(int k = 0; k < mat.length; k++) {\r\n            for(int l = 0; l < mat[0].length; l++) {\r\n                if (j == c) {\r\n                    i++;\r\n                    j = 0;\r\n                }\r\n                ans[i][j++] = mat[k][l];\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "\r\nvar matrixReshape = function(mat, r, c) {\r\n  const origR = mat.length;\r\n  const origC = mat[0].length;\r\n  \r\n  if (r*c !== origR*origC) {\r\n    return mat;\r\n  }\r\n  \r\n  const flat = mat.flatMap(n => n);\r\n  \r\n  const output = [];\r\n  for (let i=0; i<flat.length; i++) {\r\n    if (i%c === 0) {\r\n      output.push([]);\r\n    }\r\n    \r\n    output[output.length-1].push(flat[i]);\r\n  };\r\n  return output;\r\n};"
  }
}
