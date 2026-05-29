export default {
  "id": 326,
  "name": "Power of Three",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/power-of-three",
  "relativeDir": "P/Power of Three",
  "slug": "0326-power-of-three",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 16,
    "python": 4,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 94.57%) | Memory: 6.30 MB (Top 51.12%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool isPowerOfThree(int n)\r\n    {\r\n        if(n < 1)\r\n        {\r\n            return false;\r\n        }\r\n        if(n == 1)\r\n        {\r\n            return true;\r\n        }\r\n        if(n%3 != 0)\r\n        {\r\n            return false;\r\n        }\r\n        return isPowerOfThree(n/3);\r\n    }\r\n};",
    "python": "// Runtime: 77 ms (Top 96.60%) | Memory: 13.8 MB (Top 57.97%)\r\nclass Solution:\r\n    def isPowerOfThree(self, n: int) -> bool:\r\n        return round(log(n,3), 9) == round(log(n,3)) if n >= 1 else False",
    "java": "class Solution {\r\n    public boolean isPowerOfThree(int n) {\r\n       if(n==1){\r\n            return true;\r\n        }\r\n        if(n<=0){\r\n            return false;\r\n        }\r\n        if(n%3 !=0 && n>1){\r\n            return false;\r\n        }\r\n        else{\r\n            return isPowerOfThree(n/3); // recurssion \r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 211 ms (Top 95.18%) | Memory: 51.5 MB (Top 23.97%)\r\nvar isPowerOfThree = function(n) {\r\n    if(n === 1){return true;}\r\n    if(n === 0){return false;}\r\n\r\n    n/=3;\r\n\r\n    if(n%3 != 0 && n != 1){\r\n        return false;\r\n    }else{\r\n        let x = isPowerOfThree(n);\r\n        return x;\r\n    }\r\n};"
  }
}
