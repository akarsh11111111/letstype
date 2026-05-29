export default {
  "id": 2119,
  "name": "A Number After a Double Reversal",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/a-number-after-a-double-reversal",
  "relativeDir": "A/A Number After a Double Reversal",
  "slug": "2119-a-number-after-a-double-reversal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 6,
    "java": 7,
    "python": 4,
    "javascript": 9
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isSameAfterReversals(int num) {\r\n        return num == 0 || num % 10 > 0; // All you have to do is check the Trailing zeros\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def isSameAfterReversals(self, num):\r\n\t\t# All you have to do is check the Trailing zeros\r\n        return num == 0 or num % 10  # num % 10 means num % 10 != 0",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 39.24 MB (Top 48.0%)\r\n\r\nclass Solution {\r\n    public boolean isSameAfterReversals(int num) {\r\n        return (num%10!=0||num<10);\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} num\r\n * @return {boolean}\r\n */\r\nvar isSameAfterReversals = function(num) {\r\n    if(num == 0)    return true;\r\n    if(num % 10 == 0)   return false;\r\n    return true;\r\n};"
  }
}
