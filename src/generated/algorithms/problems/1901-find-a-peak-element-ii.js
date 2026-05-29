export default {
  "id": 1901,
  "name": "Find a Peak Element II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-a-peak-element-ii",
  "relativeDir": "F/Find a Peak Element II",
  "slug": "1901-find-a-peak-element-ii",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "python": 26,
    "javascript": 47
  },
  "languages": {
    "cpp": "// Runtime: 132 ms (Top 70.56%) | Memory: 46.90 MB (Top 39.59%)\r\n\r\nclass Solution {\r\npublic:\r\n    int maxEl(vector<vector<int>>& mat, int n, int m, int col) {\r\n        int maxi = -1;\r\n        int ind = -1;  \r\n        for(int i = 0; i<n; i++) {\r\n            if(mat[i][col]>maxi) {\r\n                maxi = mat[i][col];\r\n                ind = i;\r\n            }\r\n        }\r\n        return ind;\r\n    }\r\n    vector<int> findPeakGrid(vector<vector<int>>& mat) {\r\n        int n = mat.size();\r\n        int m = mat[0].size();\r\n        int low = 0;\r\n        int high = m - 1; \r\n        while(low<=high) {\r\n            int mid = (low+high)/2;\r\n            int row = maxEl(mat, n, m, mid);\r\n            int left = mid-1>=0 ? mat[row][mid-1] : -1; \r\n            int right = mid+1<m ? mat[row][mid+1] : -1; \r\n            if(mat[row][mid]>left && mat[row][mid]>right) return {row, mid};\r\n            else if(mat[row][mid]<left) high = mid-1;\r\n            else low = mid+1;\r\n        }\r\n        return {-1,-1};\r\n    }\r\n};",
    "python": "// Runtime: 887 ms (Top 94.77%) | Memory: 48.10 MB (Top 59.48%)\r\n\r\nclass Solution:\r\n    def findPeakGrid(self, mat: List[List[int]]) -> List[int]:\r\n        m, n = len(mat), len(mat[0])\r\n        l, r = 0, n\r\n        while l <= r:\r\n            mid = (l + r) // 2\r\n            cur_max, left = 0, False\r\n            for i in range(m):\r\n                if i > 0 and mat[i-1][mid] >= mat[i][mid]:\r\n                    continue\r\n                if i+1 < m and mat[i+1][mid] >= mat[i][mid]:   \r\n                    continue\r\n                if mid+1 < n and mat[i][mid+1] >= mat[i][mid]:   \r\n                    cur_max, left = mat[i][mid], not mat[i][mid] > cur_max\r\n                    continue\r\n                if mid > 0 and mat[i][mid-1] >= mat[i][mid]:   \r\n                    cur_max, left = mat[i][mid], mat[i][mid] > cur_max\r\n                    continue\r\n                return [i, mid]\r\n            if left:\r\n                r = mid-1\r\n            else:\r\n                l = mid+1\r\n        return []",
    "javascript": "/**\r\n * @param {number[][]} mat\r\n * @return {number[]}\r\n */\r\nvar findPeakGrid = function(mat) {   \r\n    /**\r\n    * Helper function to find max value in a given list\r\n    * Time: O(n)\r\n    * Memory: O(1)\r\n    */\r\n    function maxValueIdx(array) {\r\n        let maxIdx = 0;\r\n        for(let i = 0; i < array.length; i++) {\r\n            if(array[i] > array[maxIdx]) {\r\n                maxIdx = i;\r\n            }\r\n        }\r\n        return maxIdx\r\n    };\r\n    \r\n    \r\n    // Helper pointers for Binary Search\r\n    let left = 0;\r\n    let right = mat.length - 1;\r\n\r\n    while(left < right) {\r\n        const midRowIdx = parseInt((left + right) / 2, 10);\r\n        \r\n        // Find index with highest value in the mid row\r\n        let colIdx = maxValueIdx(mat[midRowIdx]);\r\n        \r\n        // If value in the next row is higher - current value is not a pick - check right subgroup\r\n        if(mat[midRowIdx][colIdx] < mat[midRowIdx + 1][colIdx]) {\r\n            left = midRowIdx + 1;\r\n        // If value in the next row is not higher - current value might be a pick - check left subgroup\r\n        } else {\r\n            right = midRowIdx;\r\n        }\r\n    }\r\n    \r\n    // After completing binary search last value will be pointing to a peak item.    \r\n\t// Complexity:\r\n\t// Time: Binary Search to find row * Linear search to find max value in a row\r\n\t// Time: O(log(N) * M) where N - number of rows, M - number of cells\r\n\t// Memory: O(1)\r\n    return [left, maxValueIdx(mat[left])];\r\n};"
  }
}
