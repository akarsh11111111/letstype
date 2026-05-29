export default {
  "id": 1582,
  "name": "Special Positions in a Binary Matrix",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/special-positions-in-a-binary-matrix",
  "relativeDir": "S/Special Positions in a Binary Matrix",
  "slug": "1582-special-positions-in-a-binary-matrix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 26,
    "python": 14,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 67 ms (Top 10.18%) | Memory: 18.5 MB (Top 5.36%)\r\nclass Solution {\r\npublic:\r\n    int numSpecial(vector<vector<int>>& mat) {\r\n        vector<vector<int>>v;\r\n        map<int,vector<int>>m;\r\n\r\n        for(int i=0;i<mat.size();i++){\r\n            vector<int>temp = mat[i];\r\n\r\n            for(int j=0;j<temp.size();j++){\r\n                m[j].push_back(temp[j]);\r\n            }\r\n        }\r\n        for(auto i:m){\r\n            v.push_back(i.second);\r\n        }\r\n        int counter = 0;\r\n        for(int i=0;i<mat.size();i++){\r\n            int onecount = 0;\r\n            int column = 0;\r\n            for(int j=0;j<mat[i].size();j++){\r\n                if(mat[i][j]==1){\r\n                    column = j;\r\n                    onecount++;\r\n                }\r\n            }\r\n            if(onecount==1){\r\n                int countone = 0;\r\n                vector<int>temp = v[column];\r\n                for(auto i:temp){\r\n                    if(i==1){\r\n                        countone++;\r\n                    }\r\n                }\r\n                if(countone==1){\r\n                    counter++;\r\n                }\r\n            }\r\n        }\r\n        return counter;\r\n    }\r\n};",
    "python": "// Runtime: 136 ms (Top 99.34%) | Memory: 17.90 MB (Top 5.36%)\r\n\r\nclass Solution:\r\n    def numSpecial(self, mat: List[List[int]]) -> int:\r\n        def get_column_sum(col_idx):\r\n            return sum(row[col_idx] for row in mat)\r\n\r\n        special = 0\r\n        for row in mat:\r\n            if sum(row) == 1:\r\n                col_idx = row.index(1)\r\n                special += get_column_sum(col_idx) == 1\r\n\r\n        return special",
    "java": "class Solution {\r\n    public int numSpecial(int[][] mat) {\r\n      int count=0;\r\n        for(int i=0;i<mat.length;i++){\r\n            for(int j=0;j<mat[0].length;j++){\r\n                if(mat[i][j]==1){\r\n                    int flag=0;\r\n                    for(int k=0;k<mat.length;k++){\r\n                        if(mat[k][j]!=0 && k!=i){\r\n                            flag=1;break;\r\n                        }\r\n                    }\r\n                    if(flag==1) continue;\r\n                    for(int k=0;k<mat[0].length;k++){\r\n                        if(mat[i][k]!=0 && k!=j){\r\n                            flag=1;\r\n                            break;\r\n                        }\r\n                    }\r\n                    if(flag==0) count++;\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 43 ms (Top 98.89%) | Memory: 50.90 MB (Top 5.16%)\r\n\r\nvar numSpecial = function(mat) {\r\n    function getColumnSum(colIdx) {\r\n        return mat.reduce((sum, row) => sum + row[colIdx], 0);\r\n    }\r\n\r\n    let special = 0;\r\n    for (let row of mat) {\r\n        if (row.reduce((acc, val) => acc + val, 0) === 1) {\r\n            const colIdx = row.indexOf(1);\r\n            special += getColumnSum(colIdx) === 1;\r\n        }\r\n    }\r\n\r\n    return special;    \r\n};"
  }
}
