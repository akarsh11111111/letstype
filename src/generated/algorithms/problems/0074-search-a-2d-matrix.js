export default {
  "id": 74,
  "name": "Search a 2D Matrix",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/search-a-2d-matrix",
  "relativeDir": "S/Search a 2D Matrix",
  "slug": "0074-search-a-2d-matrix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 21,
    "python": 9,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 79.96%) | Memory: 9.6 MB (Top 51.36%)\r\nclass Solution {\r\npublic:\r\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\r\n        for(int i = 0; i < matrix.size(); i ++) {\r\n            if(matrix[i][0] > target) return false;\r\n            for(int j = 0; j < matrix[i].size(); j ++) {\r\n                if(matrix[i][j] == target) return true;\r\n                else if(matrix[i][j] > target) break;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "// Runtime: 38 ms (Top 96.94%) | Memory: 17.90 MB (Top 11.07%)\r\n\r\nclass Solution:\r\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\r\n        n = len(matrix[0])\r\n        def get(idx: int) -> int:\r\n            r, c = divmod(idx, n)\r\n            return matrix[r][c]\r\n        return get(bisect_left(range(len(matrix)*n-1), target, key=get)) == target",
    "java": "class Solution {\r\n    public boolean searchMatrix(int[][] matrix, int target) {\r\n        if (target < matrix[0][0]) {\r\n            return false;\r\n        }\r\n        for (int i = 0; i < matrix.length; i++) {\r\n            if (matrix[i][0] > target | i == matrix.length - 1) {\r\n                if (matrix[i][0] > target) {\r\n                    i--;\r\n                }\r\n                for (int j = 0; j < matrix[i].length; j++) {\r\n                    if (matrix[i][j] == target) {\r\n                        return true;\r\n                    }\r\n                }\r\n                return false;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "var searchMatrix = function(matrix, target) {\r\n    let matCopy = [...matrix];\r\n    let leftIndex = 0;\r\n    let rightIndex = matrix.length - 1;\r\n\r\n    let mid = Math.ceil((matrix.length - 1) / 2);\r\n\r\n    let eachMatrixLength = matrix[0].length;\r\n  \r\n    if (matrix[mid].includes(target) === true) {\r\n        return true;\r\n    } else if (matrix.length == 1) {\r\n        return false;\r\n    }\r\n\r\n    if (matrix[mid][eachMatrixLength - 1] > target) {\r\n        rightIndex = mid - 1;\r\n        matCopy.splice(-mid);\r\n    } else {\r\n        leftIndex = mid + 1;\r\n        matCopy.splice(0, mid);\r\n    }\r\n\r\n    return searchMatrix(matCopy, target);\r\n   \r\n};"
  }
}
