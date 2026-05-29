export default {
  "id": 2140,
  "name": "Solving Questions With Brainpower",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/solving-questions-with-brainpower",
  "relativeDir": "S/Solving Questions With Brainpower",
  "slug": "2140-solving-questions-with-brainpower",
  "availableLanguages": [
    "python",
    "javascript"
  ],
  "defaultLanguage": "python",
  "lineCounts": {
    "python": 6,
    "javascript": 25
  },
  "languages": {
    "python": "class Solution:\r\n    def mostPoints(self, q: List[List[int]]) -> int:\r\n        @cache\r\n        def dfs(i: int) -> int:\r\n            return 0 if i >= len(q) else max(dfs(i + 1), q[i][0] + dfs(i + 1 + q[i][1]))\r\n        return dfs(0)",
    "javascript": "var mostPoints = function(questions) {\r\n    let totalQuestions = questions.length;\r\n    \r\n    let map = new Map();\r\n    \r\n    const helper = (index) => {\r\n        if(map.has(index))\r\n            return map.get(index);\r\n        \r\n        if(index >= totalQuestions) {\r\n            return 0;\r\n        }  \r\n        \r\n        let solve = questions[index][0] + helper(index + questions[index][1] + 1);\r\n        \r\n        let skip = helper(index + 1);\r\n        \r\n        let res = Math.max(solve, skip);\r\n        \r\n        map.set(index, res);\r\n        \r\n        return res;\r\n    }\r\n    \r\n    return helper(0);"
  }
}
