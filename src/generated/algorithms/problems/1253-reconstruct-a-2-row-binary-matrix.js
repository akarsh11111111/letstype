export default {
  "id": 1253,
  "name": "Reconstruct a 2-Row Binary Matrix",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix",
  "relativeDir": "R/Reconstruct a 2-Row Binary Matrix",
  "slug": "1253-reconstruct-a-2-row-binary-matrix",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "python": 22,
    "javascript": 48
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> reconstructMatrix(int upper, int lower, vector<int>& colsum) {\r\n        vector<int> u, l;\r\n        vector<vector<int>> ans;\r\n        \r\n        for(int i : colsum){\r\n            if(i == 2){\r\n                u.push_back(1);\r\n                l.push_back(1);\r\n                upper--;\r\n                lower--;\r\n            }\r\n            else if(i == 0) u.push_back(0), l.push_back(0);\r\n            \r\n            else if(i == 1){\r\n                if(upper >= lower){\r\n                    u.push_back(1);\r\n                    l.push_back(0);\r\n                    upper--;\r\n                }\r\n                else{\r\n                    u.push_back(0);\r\n                    l.push_back(1);\r\n                    lower--;\r\n                }\r\n            }\r\n        }\r\n        if(upper == 0 && lower == 0){\r\n            ans.push_back(u);\r\n            ans.push_back(l);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 2054 ms (Top 5.33%) | Memory: 24.4 MB (Top 72.78%)\r\nclass Solution:\r\n    def reconstructMatrix(self, upper: int, lower: int, colsum: List[int]) -> List[List[int]]:\r\n        n = len(colsum)\r\n        matrix = [[0 for i in range(n)] for j in range(2)]\r\n        for col,summ in enumerate(colsum):\r\n            if summ == 0:\r\n                continue\r\n            if summ == 2:\r\n                matrix[0][col] = matrix[1][col] = 1\r\n                upper -= 1\r\n                lower -= 1\r\n            else:\r\n                if upper > lower:\r\n                    matrix[0][col] = 1\r\n                    upper -= 1\r\n                else:\r\n                    matrix[1][col] = 1\r\n                    lower -= 1\r\n            if upper < 0 or lower < 0: break\r\n\r\n        return matrix if upper == lower == 0 else []",
    "javascript": "/**\r\n * @param {number} upper\r\n * @param {number} lower\r\n * @param {number[]} colsum\r\n * @return {number[][]}\r\n */\r\nvar reconstructMatrix = function(upper, lower, colsum){\r\n    let dp = new Array(2)\r\n   for(let i  = 0; i< dp.length; i++){\r\n      dp[i] = new Array(colsum.length)\r\n  }\r\n  let first = upper\r\n  let second = lower\r\n    let upsum = 0\r\n    let losum=  0\r\n    \r\n     for(let i = 0; i<  colsum.length; i++){\r\n         if(colsum[i] === 2){\r\n             dp[0][i] = 1\r\n             dp[1][i] = 1\r\n             upsum++\r\n             losum++\r\n         }\r\n         else if(colsum[i] === 1){\r\n             if(lower < upper){\r\n                 dp[0][i] =1\r\n                 dp[1][i] = 0\r\n                 upper--\r\n                 upsum++\r\n             }\r\n             else{\r\n                 dp[0][i] = 0\r\n                 dp[1][i] = 1\r\n                 lower--\r\n                 losum++\r\n             }\r\n         }\r\n         else if(colsum[i] === 0){\r\n             dp[0][i]  = 0\r\n             dp[1][i] = 0\r\n         }\r\n         else{\r\n             return []\r\n         }\r\n     }\r\n     if(losum !== second || upsum !== first) return []\r\n return dp\r\n}"
  }
}
