export default {
  "id": 371,
  "name": "Sum of Two Integers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-two-integers",
  "relativeDir": "S/Sum of Two Integers",
  "slug": "0371-sum-of-two-integers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 6,
    "python": 10,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 2 ms (Top 48.87%) | Memory: 6.20 MB (Top 75.88%)\r\n\r\nclass Solution {\r\npublic:\r\n    int getSum(int a, int b) {\r\n        unsigned int buff;\r\n        do {\r\n            buff = a & b;\r\n            a ^= b;\r\n            b = buff << 1;\r\n        } while(buff);\r\n        return a;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def getSum(self, a, b):\r\n        \"\"\"\r\n        :type a: int\r\n        :type b: int\r\n        :rtype: int\r\n        \"\"\"\r\n        sol=(a,b)\r\n        return sum(sol)\r\n\t```",
    "java": "class Solution {\r\n    \r\n     public int getSum(int a, int b) {\r\n       return Integer.sum(a, b);\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} a\r\n * @param {number} b\r\n * @return {number}\r\n */\r\nvar getSum = function(a, b) {\r\n    if (a==0){\r\n        return b;\r\n    }\r\n    else if (b==0){\r\n        return a;\r\n    }\r\n    else{\r\n        return getSum((a^b),(a&b)<<1);\r\n    }\r\n    \r\n};"
  }
}
