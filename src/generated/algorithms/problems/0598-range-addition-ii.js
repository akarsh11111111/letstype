export default {
  "id": 598,
  "name": "Range Addition II",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/range-addition-ii",
  "relativeDir": "R/Range Addition II",
  "slug": "0598-range-addition-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 11,
    "python": 7,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 13 ms (Top 73.09%) | Memory: 11 MB (Top 58.74%)\r\nclass Solution {\r\npublic:\r\n    int maxCount(int m, int n, vector<vector<int>>& ops) {\r\n\r\n        int mn_i = m, mn_j = n;\r\n        for(auto &i : ops)\r\n            mn_i = min(mn_i, i[0]), mn_j = min(mn_j, i[1]);\r\n\r\n        return mn_i * mn_j;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxCount(self, m: int, n: int, ops: List[List[int]]) -> int:\r\n        if not ops:\r\n            return m*n\r\n        else:\r\n            x,y = zip(*ops)\r\n            return min(x) * min(y)",
    "java": "// Runtime: 2 ms (Top 12.57%) | Memory: 45.3 MB (Top 7.43%)\r\nclass Solution {\r\n    public int maxCount(int m, int n, int[][] ops) {\r\n        int minRow=m,minCol=n;\r\n        for(int[] op:ops){\r\n            minRow=Math.min(minRow,op[0]);\r\n            minCol=Math.min(minCol,op[1]);\r\n        }\r\n        return minRow*minCol;\r\n    }\r\n}",
    "javascript": "var maxCount = function(m, n, ops) {\r\n    if( ops.length === 0 )\r\n        return m*n\r\n    let min_a = m , min_b = n\r\n    for( let [x,y] of ops ){\r\n        if( x < min_a )\r\n            min_a = x\r\n        if( y < min_b )\r\n            min_b = y\r\n    }\r\n    return min_a * min_b\r\n};"
  }
}
