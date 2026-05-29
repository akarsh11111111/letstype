export default {
  "id": 1605,
  "name": "Find Valid Matrix Given Row and Column Sums",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums",
  "relativeDir": "F/Find Valid Matrix Given Row and Column Sums",
  "slug": "1605-find-valid-matrix-given-row-and-column-sums",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "python": 19,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tvector<vector<int>> restoreMatrix(vector<int>& rowSum, vector<int>& colSum) {\r\n\t\tint nRow = rowSum.size();\r\n\t\tint nCol = colSum.size();\r\n\r\n\t\tvector<vector<int>> res(nRow, vector<int> (nCol, 0));\r\n\r\n\t\tint i = 0, j = 0;\r\n\t\twhile(i < nRow and j < nCol){\r\n\t\t\tif(rowSum[i] < colSum[j]){\r\n\t\t\t\tres[i][j] = rowSum[i];\r\n\t\t\t\tcolSum[j] -= rowSum[i];\r\n\t\t\t\trowSum[i++] = 0;\r\n\t\t\t}\r\n\t\t\telse{\r\n\t\t\t\tres[i][j] = colSum[j];\r\n\t\t\t\trowSum[i] -= colSum[j];\r\n\t\t\t\tcolSum[j++] = 0;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn res;\r\n\t}\r\n};",
    "python": "class Solution:\r\n    def restoreMatrix(self, rowSum: List[int], colSum: List[int]) -> List[List[int]]:\r\n        matrix = []\r\n        for row in range(len(rowSum)):\r\n            data, array = rowSum[row], []\r\n            for col in range(len(colSum)):\r\n                if data == 0 or colSum[col] == 0:\r\n                    array.append(0)\r\n                elif data > colSum[col]:\r\n                    data -= colSum[col]\r\n                    array.append(colSum[col])\r\n                    colSum[col] = 0\r\n                else:\r\n                    array.append(data)\r\n                    colSum[col] -= data\r\n                    data = 0\r\n            matrix.append(array)\r\n\r\n        return matrix",
    "javascript": "var restoreMatrix = function(rowSum, colSum) {\r\n    let matrix = new Array(rowSum.length);\r\n    for(let i = 0; i < matrix.length; i++){\r\n        matrix[i] = new Array(colSum.length).fill(0);\r\n    }\r\nlet helper = function(row, col, mat) {\r\n        let rowmin = Math.min(...row);   \r\n        let colmin = Math.min(...col);\r\n        let i = col.indexOf(colmin);\r\n        let j = row.indexOf(rowmin);\r\n        if(rowmin === Infinity || colmin === Infinity) return 0;  \r\n        if(rowmin<colmin){\r\n            mat[j][i] = rowmin;\r\n            col[i] -= row[j]; \r\n            row[j] = Infinity;\r\n        }else{\r\n            mat[j][i] = colmin;\r\n            row[j] -= col[i]; \r\n            col[i] = Infinity;\r\n            \r\n    }\r\n    \r\n       return helper(rowSum, colSum, matrix);\r\n};\r\n    \r\n    \r\n    helper(rowSum, colSum, matrix);\r\n\r\n    \r\n\r\n    return matrix;\r\n};"
  }
}
