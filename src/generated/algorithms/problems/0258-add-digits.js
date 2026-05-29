export default {
  "id": 258,
  "name": "Add Digits",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/add-digits",
  "relativeDir": "A/Add Digits",
  "slug": "0258-add-digits",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 6,
    "java": 8,
    "python": 7,
    "javascript": 4
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int addDigits(int n) {\r\n        return n < 10 ? n : addDigits(n / 10 + n % 10);\r\n    }\r\n};",
    "python": "// Runtime: 45 ms (Top 20.34%) | Memory: 16.40 MB (Top 13.14%)\r\n\r\nclass Solution:\r\n    def addDigits(self, num: int) -> int:\r\n        while num > 9:\r\n            num = num % 10 + num // 10\r\n        return num",
    "java": "// Runtime: 2 ms (Top 73.88%) | Memory: 41.9 MB (Top 17.90%)\r\nclass Solution {\r\n    public int addDigits(int num) {\r\n        if(num == 0) return 0;\r\n        else if(num % 9 == 0) return 9;\r\n        else return num % 9;\r\n    }\r\n}",
    "javascript": "// Runtime: 101 ms (Top 63.77%) | Memory: 43.2 MB (Top 91.64%)\r\nvar addDigits = function(num) {\r\n    return 1 + (num - 1) % 9;\r\n};"
  }
}
