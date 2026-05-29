export default {
  "id": 766,
  "name": "Toeplitz Matrix",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/toeplitz-matrix",
  "relativeDir": "T/Toeplitz Matrix",
  "slug": "0766-toeplitz-matrix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 38,
    "python": 28,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isToeplitzMatrix(vector<vector<int>>& matrix) {\r\n        int m = matrix.size(), n = matrix[0].size();\r\n        for (int i = 1; i < m; i++)\r\n            for (int j = 1; j < n; j++)\r\n                if (matrix[i][j] != matrix[i - 1][j - 1])\r\n                    return false;\r\n        return true;\r\n    }\r\n};",
    "python": "###########################################################################################\r\n#   Runtime: O(MN)\r\n#       Number of rows(M) x expected numbers(N)\r\n#   Space: O(N)\r\n#       We need to store the expected numbers in list\r\n############################################################################################\r\nclass Solution:\r\n    def isToeplitzMatrix(self, matrix: List[List[int]]) -> bool:\r\n        # Validate Input\r\n        if not matrix or not matrix[0]:\r\n            return False                \r\n        \r\n        # Create a deque tracking the expected values for the next row\r\n        expected = matrix[0]\r\n        # We only care about the elements before last element\r\n        expected.pop()\r\n        \r\n        # From the second row, pop out the last element of the expected numbers and compare it with the target row[1:]\r\n        for row in matrix[1:]:\r\n            # Compare row with expected numbers, invalidate it as soon as we find the numbers are not the same (O(N))\r\n            if row[1:] != expected:\r\n                return False\r\n            else:\r\n                # Pop the last element from row, use it as the expected numbers for the next iteration\r\n                row.pop()\r\n                expected = row\r\n        # If we've reached here, all diagonals aligned\r\n        return True",
    "java": "class Solution {\r\n    public boolean isToeplitzMatrix(int[][] matrix) {\r\n          \r\n        \r\n        int n = matrix.length;\r\n        int m = matrix[0].length;\r\n        \r\n        for(int i = 0; i < m; i++){\r\n            int row = 0;\r\n            int col = i;\r\n            int e = matrix[row++][col++];\r\n           while(row < n && col< m){\r\n               if(e == matrix[row][col]){\r\n                   row++;\r\n                   col++;\r\n               }else{\r\n                   return false;\r\n               }\r\n           }  \r\n        }\r\n        \r\n        for(int r = 1; r < n; r++){\r\n            int row = r;\r\n            int col = 0;\r\n            int e =matrix[row++][col++];\r\n            while(row < n && col < m){\r\n                if(e == matrix[row][col]){\r\n                    row++;\r\n                    col++;\r\n                }else{\r\n                    return false;\r\n                }\r\n            }\r\n        }\r\n        \r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 86 ms (Top 70.68%) | Memory: 44.5 MB (Top 21.92%)\r\nvar isToeplitzMatrix = function(matrix) {\r\n    for (let i=0; i < matrix.length-1; i++) {\r\n        for (let j=0; j < matrix[i].length-1; j++) {\r\n            if (matrix[i][j] !== matrix[i+1][j+1]) {\r\n                return false\r\n            }\r\n        }\r\n    }\r\n\r\n    return true\r\n};"
  }
}
