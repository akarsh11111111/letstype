export default {
  "id": 171,
  "name": "Excel Sheet Column Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/excel-sheet-column-number",
  "relativeDir": "E/Excel Sheet Column Number",
  "slug": "0171-excel-sheet-column-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 15,
    "python": 11,
    "javascript": 18
  },
  "languages": {
    "cpp": "\t\t\t\t\t\t\t// 😉😉😉😉Please upvote if it helps 😉😉😉😉\r\nclass Solution {\r\npublic:\r\n    int titleToNumber(string columnTitle) {\r\n        int result = 0;\r\n        for(char c : columnTitle)\r\n        {\r\n\t\t\t//d = s[i](char) - 'A' + 1 (we used  s[i] -  'A' to convert the letter to a number like it's going to be C)\r\n\r\n            int d = c - 'A' + 1;\r\n            result = result * 26 + d;\r\n        }\r\n        return result;\r\n    }\r\n};",
    "python": "def let_to_num(char):\r\n    abc = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\"\r\n    return abc.index(char) + 1\r\n\r\nclass Solution:\r\n    def titleToNumber(self, columnTitle: str) -> int:\r\n        ans = 0\r\n        for i in range(len(columnTitle)):\r\n            ans *= 26\r\n            ans += let_to_num(columnTitle[i])\r\n        return ans",
    "java": "// Runtime: 2 ms (Top 81.25%) | Memory: 42.4 MB (Top 81.68%)\r\nclass Solution {\r\n    public int titleToNumber(String columnTitle) {\r\n        int n = columnTitle.length();\r\n        int pow = 0;\r\n        int res = 0;\r\n        for(int i = n-1; i >= 0; i--) {\r\n            char c = columnTitle.charAt(i);\r\n            res += (c - 64) * Math.pow(26, pow);\r\n            pow++;\r\n        }\r\n\r\n        return res;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} columnTitle\r\n * @return {number}\r\n */\r\nvar titleToNumber = function(columnTitle) {\r\n    /*\r\n        one letter: result between 1-26.\r\n        two letter: result between 26^1 + 1 -> 26^2 + digit. 27 - 702. All the combinations of A-Z and A-Z. \r\n    */\r\n    \r\n    let sum = 0;\r\n    for (let letter of columnTitle) {\r\n        let d = letter.charCodeAt(0) - 'A'.charCodeAt(0) + 1;\r\n        sum = sum * 26 + d;\r\n    }\r\n    \r\n    return sum;\r\n};"
  }
}
