export default {
  "id": 1072,
  "name": "Flip Columns For Maximum Number of Equal Rows",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows",
  "relativeDir": "F/Flip Columns For Maximum Number of Equal Rows",
  "slug": "1072-flip-columns-for-maximum-number-of-equal-rows",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "python": 21,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxEqualRowsAfterFlips(vector<vector<int>>& matrix) {\r\n        int m = matrix.size(), n = matrix[0].size();\r\n        int ans = 0;\r\n        for(int i = 0; i < m; i++){\r\n            vector<int> temp(n);\r\n            for(int j = 0; j < n; j++)\r\n            temp[j] = !matrix[i][j];\r\n            int count = 0;\r\n            for(int j = i; j < m; j++){       \r\n                \r\n                if((matrix[i] == matrix[j]) || (temp == matrix[j]))\r\n                    count++;\r\n            }\r\n            ans = max(ans, count);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "from typing import List\r\nfrom collections import Counter\r\n\r\n\r\nclass Solution:\r\n    def maxEqualRowsAfterFlips(self, matrix: List[List[int]]) -> int:\r\n        counter = Counter()\r\n        max_val = 2 ** len(matrix[0]) - 1\r\n        for row in matrix:\r\n            v = self.calculate_binary(row)\r\n            counter[v] += 1\r\n            counter[max_val - v] += 1\r\n            # print(f'counter: {counter}')\r\n\r\n        return counter.most_common(1)[0][1]\r\n\r\n    def calculate_binary(self, row: List[int]) -> int:\r\n        val = 0\r\n        for r in row:\r\n            val = val * 2 + r\r\n        return val",
    "javascript": "var maxEqualRowsAfterFlips = function(matrix) {\r\n    const m = matrix.length;\r\n    const n = matrix[0].length;\r\n    const map = new Map();\r\n    let max = 0;\r\n    \r\n    for (let i = 0; i < m; i++) {\r\n        let normal = 0;\r\n        let reversed = 0;\r\n        \r\n        for (let j = 0; j < n; j++) {\r\n            normal = normal << 1 | matrix[i][j];\r\n            reversed = reversed << 1 | (1 - matrix[i][j]);\r\n        }\r\n        \r\n        if (!map.has(normal)) map.set(normal, 0);\r\n        map.set(normal, map.get(normal) + 1);\r\n        max = Math.max(max, map.get(normal));\r\n        \r\n        if (!map.has(reversed)) map.set(reversed, 0);\r\n        map.set(reversed, map.get(reversed) + 1);\r\n        max = Math.max(max, map.get(reversed));\r\n    }\r\n    \r\n    return max;\r\n};"
  }
}
