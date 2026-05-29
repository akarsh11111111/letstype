export default {
  "id": 240,
  "name": "Search a 2D Matrix II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/search-a-2d-matrix-ii",
  "relativeDir": "S/Search a 2D Matrix II",
  "slug": "0240-search-a-2d-matrix-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 34,
    "python": 15,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 548 ms (Top 8.60%) | Memory: 14.8 MB (Top 88.19%)\r\nclass Solution {\r\npublic:\r\n    bool searchMatrix(vector<vector<int>>& matrix, int target) {\r\n        for(int i=0;i<matrix.size();++i)\r\n        {\r\n            int s=0,e=matrix[0].size()-1;\r\n            while(s<=e)\r\n            {\r\n                int mid=(s+e)/2;\r\n                if(matrix[i][mid]>target)\r\n                {\r\n                    e=mid-1;\r\n                }\r\n                else if(matrix[i][mid]<target)\r\n                {\r\n                    s=mid+1;\r\n                }\r\n                else\r\n                {\r\n                    return true;\r\n                }\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "# Runtime: 121 ms (Top 76.1%) | Memory: 19.55 MB (Top 13.9%)\r\n\r\nclass Solution(object):\r\n    def searchMatrix(self, matrix, target):\r\n        \"\"\"\r\n        :type matrix: List[List[int]]\r\n        :type target: int\r\n        :rtype: bool\r\n        \"\"\"\r\n        found=False\r\n        for X in matrix:\r\n             for M in X:\r\n                if M==target:\r\n                    found=True\r\n        return found",
    "java": "// Runtime: 14 ms (Top 30.54%) | Memory: 57.2 MB (Top 69.94%)\r\nclass Solution {\r\n    public boolean searchMatrix(int[][] matrix, int target) {\r\n        int rows = matrix.length;\r\n        int cols = matrix[0].length;\r\n        int lo = 0, hi = rows;\r\n        while(lo + 1 < hi) {\r\n            int mid = lo + (hi - lo) / 2;\r\n            if (matrix[mid][0] <= target) {\r\n                lo = mid;\r\n            } else {\r\n                hi = mid;\r\n            }\r\n        }\r\n        int[] prospect;\r\n        for (int i = 0; i <= lo; i++) {\r\n            prospect = matrix[i];\r\n            int l = 0;\r\n            int h = cols;\r\n            while (l + 1 < h) {\r\n                int mid = l + (h - l) / 2;\r\n                if (prospect[mid] <= target) {\r\n                    l = mid;\r\n                } else {\r\n                    h = mid;\r\n                }\r\n            }\r\n            if (prospect[l] == target) {\r\n                return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "function binarySearch(arr, target) {\r\n    let low = 0;\r\n    let high = arr.length - 1;\r\n\r\n    while (low <= high) {\r\n        let mid = parseInt((low + high) / 2);\r\n\r\n        if (arr[mid] == target) {\r\n            return mid;\r\n        }\r\n        else if (arr[mid] < target) {\r\n            low = mid + 1;\r\n        }\r\n        else if (arr[mid] > target) {\r\n            high = mid - 1;\r\n        }\r\n    }\r\n    return -1;\r\n}\r\n\r\nvar searchMatrix = function(matrix, target) {\r\n    for (let i = 0; i < matrix.length; i++) {\r\n        let check = binarySearch(matrix[i], target);\r\n\r\n        if (check != -1) { return true }\r\n    }\r\n    return false\r\n};"
  }
}
