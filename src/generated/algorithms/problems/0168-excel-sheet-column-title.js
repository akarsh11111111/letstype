export default {
  "id": 168,
  "name": "Excel Sheet Column Title",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/excel-sheet-column-title",
  "relativeDir": "E/Excel Sheet Column Title",
  "slug": "0168-excel-sheet-column-title",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 12,
    "python": 10,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string convertToTitle(int columnNumber) {\r\n        string s = \"\";\r\n        while(columnNumber){\r\n            char c = (columnNumber-1)%26+65;\r\n            s = c+s;\r\n            columnNumber = (columnNumber-1)/26;\r\n        }\r\n        return s;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def convertToTitle(self, num: int) -> str:\r\n\t\t# We make this lookup list, having A-Z in ascending order\r\n        alpha = [chr(x) for x in range(ord(\"A\"), ord(\"Z\")+1)]     # range(65, 90+1) -> 91-65 = 26\r\n        res = \"\"\r\n\r\n        while num > 0:\r\n            res += alpha[(num-1)%26]     # since 0 indexed list, num-1 % 26 gives the index of ch in alpha\r\n            num = (num-1) // 26 \r\n        return res[::-1]",
    "java": "// Runtime: 1 ms (Top 36.84%) | Memory: 41.2 MB (Top 58.44%)\r\nclass Solution {\r\n    public String convertToTitle(int columnNumber) {\r\n        String ans = \"\";\r\n        while(columnNumber > 0){\r\n            columnNumber--;\r\n            ans = String.valueOf((char)('A' + (int)((26 + (long)columnNumber) % 26))) + ans;\r\n            columnNumber /= 26;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 66 ms (Top 81.19%) | Memory: 41.8 MB (Top 59.65%)\r\n/**\r\n * @param {number} columnNumber\r\n * @return {string}\r\n */\r\nvar convertToTitle = function(columnNumber) {\r\n    let ans = \"\";\r\n    while(columnNumber >0){\r\n        let n = (--columnNumber) % 26;\r\n        columnNumber = Math.floor(columnNumber/ 26);\r\n\r\n        // console.log(String.fromCharCode(65+n),)\r\n        ans+=String.fromCharCode(65 + n);\r\n\r\n    }\r\n    ans = ans.split(\"\").reverse().join(\"\")\r\n    return ans\r\n};"
  }
}
