export default {
  "id": 2022,
  "name": "Convert 1D Array Into 2D Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/convert-1d-array-into-2d-array",
  "relativeDir": "C/Convert 1D Array Into 2D Array",
  "slug": "2022-convert-1d-array-into-2d-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 23,
    "python": 9,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 251 ms (Top 39.98%) | Memory: 87.3 MB (Top 63.78%)\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> construct2DArray(vector<int>& original, int m, int n) {\r\n        if (m * n != original.size()) return {};\r\n\r\n        vector<vector<int>> res;\r\n        for (int i = 0; i < m*n; i+=n)\r\n            res.push_back(vector<int>(original.begin()+i, original.begin()+i+n));\r\n\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 675 ms (Top 89.58%) | Memory: 23.80 MB (Top 95.52%)\r\n\r\nclass Solution:\r\n    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:\r\n        ans = []\r\n        if len(original) == m*n: \r\n            for i in range(0, len(original), n): \r\n                ans.append(original[i:i+n])\r\n        return ans",
    "java": "// Runtime: 4 ms (Top 59.22%) | Memory: 55.50 MB (Top 5.02%)\r\n\r\nclass Solution {\r\n    public int[][] construct2DArray(int[] original, int m, int n) {        \r\n        if (original.length != m * n) return new int[0][];\r\n        \r\n        int[][] ans = new int[m][n];\r\n        int currRow = 0, currCol = 0;\r\n        \r\n        for (int num : original) {\r\n            ans[currRow][currCol++] = num;\r\n            \r\n            if (currCol == n) {\r\n                currCol = 0;\r\n                currRow++;\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n}\r\n\r\n// TC: O(n), SC: O(m * n)",
    "javascript": "// Runtime: 413 ms (Top 31.46%) | Memory: 81.5 MB (Top 29.47%)\r\nvar construct2DArray = function(original, m, n) {\r\n    if (original.length !== (m*n)) return []\r\n    let result = []\r\n    let arr = []\r\n    for (let i = 0; i < original.length; i++){\r\n        arr.push(original[i])\r\n        if (arr.length === n){\r\n            result.push(arr)\r\n            arr = []\r\n        }\r\n    }\r\n    return result\r\n};"
  }
}
