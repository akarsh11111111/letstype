export default {
  "id": 504,
  "name": "Base 7",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/base-7",
  "relativeDir": "B/Base 7",
  "slug": "0504-base-7",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 22,
    "python": 17,
    "javascript": 21
  },
  "languages": {
    "cpp": "Method 1 :- \r\n---------------\r\nclass Solution {\r\npublic:\r\n    string convertToBase7(int num) {\r\n        if(num < 0) \r\n            return \"-\" + convertToBase7(-num);\r\n        else if(num < 7)\r\n            return to_string(num);\r\n        else\r\n            return convertToBase7(num/7) + convertToBase7(num%7);\r\n    }\r\n};\r\n\r\nMethod 2 :-\r\n---------------\r\nclass Solution {\r\npublic:\r\n    string convertToBase7(int num) {\r\n        string res = \"\";\r\n        int num1 = num;\r\n        if(num == 0)\r\n            return \"0\";\r\n        num = abs(num);\r\n        while(num > 0)\r\n        {\r\n            res += to_string(num % 7);\r\n            num = num/7;\r\n        }\r\n        reverse(res.begin(),res.end());\r\n        if(num1 < 0)\r\n            res = \"-\" + res;\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 35 ms (Top 75.17%) | Memory: 17.30 MB (Top 6.4%)\r\n\r\nclass Solution:\r\n    def convertToBase7(self, num: int) -> str:\r\n        \r\n        if not num:\r\n            return '0'\r\n        \r\n        sign = num < 0\r\n        num = abs(num)\r\n        \r\n        stack = []\r\n        while num:\r\n            stack.append(str(num % 7))\r\n            num = num // 7\r\n        \r\n        return '-'*sign + ''.join(stack[::-1])",
    "java": "// Runtime: 1 ms (Top 62.45%) | Memory: 40.70 MB (Top 12.35%)\r\n\r\nclass Solution {\r\n    public String convertToBase7(int num) {\r\n        StringBuilder sb = new StringBuilder();\r\n        while(Math.abs(num) > 6) {\r\n            sb.append(num % 7);\r\n            num = num / 7;\r\n        }\r\n        if (num < 0) {\r\n            sb.append(Math.abs(num)).append(\"-\");\r\n        } else {\r\n            sb.append(num);\r\n        }\r\n        for (int i = 0; i < sb.length() - 1; i++) {\r\n            if (!Character.isDigit(sb.charAt(i))) {\r\n                sb.replace(i, i + 1, \"\");\r\n            }\r\n        }\r\n        return sb.reverse().toString();\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} num\r\n * @return {string}\r\n */\r\nvar convertToBase7 = function(num) {\r\n    \r\n      let str = \"\", sign\r\n      if(num<0){\r\n          sign =-1;\r\n          num*=-1;\r\n      }\r\n    \r\n      while(num>= 7){\r\n          str+= num%7;\r\n          num = Math.floor(num/7);\r\n      }\r\n      str+=num;\r\n      if(sign<0) str+='-'  \r\n    \r\n    return str.split(\"\").reverse().join(\"\")\r\n};"
  }
}
