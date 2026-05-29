export default {
  "id": 73,
  "name": "Set Matrix Zeroes",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/set-matrix-zeroes",
  "relativeDir": "S/Set Matrix Zeroes",
  "slug": "0073-set-matrix-zeroes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 26,
    "python": 21,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 11 ms (Top 71.1%) | Memory: 13.70 MB (Top 5.9%)\r\n\r\nclass Solution {\r\npublic:\r\n    void setZeroes(vector<vector<int>>& matrix) {\r\n        unordered_map<int,int>ump;\r\n        unordered_map<int,int>mp;\r\n        for(int i=0;i<matrix.size();i++){\r\n            for(int j=0;j<matrix[0].size();j++){\r\n                if(matrix[i][j]==0){\r\n                    ump[i]=1;\r\n                    mp[j]=1;\r\n                }\r\n            }\r\n        }\r\n        for(int i=0;i<matrix.size();i++){\r\n            for(int j=0;j<matrix[0].size();j++){\r\n                if(ump[i] || mp[j]){\r\n                    matrix[i][j]=0;\r\n                }\r\n            }\r\n        }\r\n\r\n\r\n        \r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def setZeroes(self, matrix: List[List[int]]) -> None:\r\n        rows = len(matrix)\r\n        cols = len(matrix[0])\r\n        visited=set()\r\n        for r in range(rows):\r\n            for c in range(cols):\r\n                \r\n                if matrix[r][c]==0 and (r,c) not in visited :\r\n                    for t in range(cols):\r\n                        if matrix[r][t]!=0:\r\n                            matrix[r][t]=0\r\n                            visited.add((r,t))\r\n                    for h in range(rows):\r\n                        if matrix[h][c]!=0:\r\n                            matrix[h][c]=0\r\n                            visited.add((h,c))\r\n        ##Time Complexity :- O(m*n)\r\n        ##Space Complexity:- O(m+n)\r\n\t\t\r\n\t\t```",
    "java": "// Runtime: 2 ms (Top 25.0%) | Memory: 44.70 MB (Top 37.39%)\r\n\r\nclass Solution {\r\n    public void setZeroes(int[][] matrix) {\r\n        Set<Integer> row = new HashSet<>();\r\n        Set<Integer> col = new HashSet<>();\r\n        for(int i = 0; i < matrix.length; i++){\r\n            for(int j = 0; j < matrix[0].length; j++){\r\n                if(matrix[i][j] == 0){\r\n                    row.add(i);\r\n                    col.add(j);\r\n                }\r\n            }\r\n        }\r\n        for(int r : row){\r\n            for(int i = 0; i < matrix[0].length; i++){\r\n                matrix[r][i] = 0;\r\n            }\r\n        }\r\n        for(int c : col){\r\n            for(int i = 0; i < matrix.length; i++){\r\n                matrix[i][c] = 0;\r\n            }\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 75 ms (Top 29.95%) | Memory: 44.90 MB (Top 45.67%)\r\n\r\nvar setZeroes = function(matrix) {\r\n  const rowSet = new Set(), colSet = new Set()\r\n  for (let i = 0; i < matrix.length; i++) {\r\n    for (let j = 0; j < matrix[i].length; j++) {\r\n      if (!matrix[i][j]) {\r\n        rowSet.add(i);\r\n        colSet.add(j);\r\n      };\r\n    }\r\n  }\r\n  for (let i = 0; i < matrix.length; i++) {\r\n    for (let j = 0; j < matrix[i].length; j++) {\r\n      if (rowSet.has(i) || colSet.has(j)) matrix[i][j] = 0\r\n    }\r\n  }\r\n};"
  }
}
