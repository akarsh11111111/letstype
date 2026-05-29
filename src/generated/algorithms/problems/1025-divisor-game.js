export default {
  "id": 1025,
  "name": "Divisor Game",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/divisor-game",
  "relativeDir": "D/Divisor Game",
  "slug": "1025-divisor-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 7,
    "java": 5,
    "python": 5,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool divisorGame(int n) {\r\n        if(n%2==0) return true;\r\n        return false;\r\n    }\r\n};",
    "python": "// Runtime: 34 ms (Top 78.15%) | Memory: 16.60 MB (Top 64.13%)\r\n\r\nclass Solution:\r\n    def divisorGame(self, n: int) -> bool:\r\n        return n%2 == 0",
    "java": "class Solution {\r\n    public boolean divisorGame(int n) {\r\n        return n%2==0;\r\n    }\r\n}",
    "javascript": "var divisorGame = function(n) {\r\n    let count = 0;\r\n    while(true){\r\n        let flag = true;\r\n        for(let i = 1;i<n;i++){\r\nif(n%i==0){\r\n    flag = false;\r\n    n = n-i;\r\n    break;\r\n}\r\n            \r\n        }\r\n        if(flag){\r\nif(count %2==0) return false;\r\n            else return true;\r\n}\r\n        count++;\r\n    }\r\n};"
  }
}
