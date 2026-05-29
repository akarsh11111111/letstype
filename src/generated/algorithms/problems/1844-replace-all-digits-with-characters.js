export default {
  "id": 1844,
  "name": "Replace All Digits with Characters",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/replace-all-digits-with-characters",
  "relativeDir": "R/Replace All Digits with Characters",
  "slug": "1844-replace-all-digits-with-characters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 9,
    "java": 20,
    "python": 16,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string replaceDigits(string s) {\r\n        for(int i=1;i<s.size();i+=2){\r\n            s[i]=s[i-1]+(s[i]-'0'); //or s[i] += s[i-1] - '0';\r\n        }\r\n        return s;\r\n    }\r\n};",
    "python": "# Runtime: 73 ms (Top 5.29%) | Memory: 13.8 MB (Top 58.42%)\r\nclass Solution(object):\r\n    def replaceDigits(self, s):\r\n        \"\"\"\r\n        :type s: str\r\n        :rtype: str\r\n        \"\"\"\r\n        res = []\r\n\r\n        for i in range(len(s)):\r\n            if i % 2 == 0:\r\n                res.append(s[i])\r\n            if i % 2 == 1:\r\n                res.append( chr(ord(s[i-1]) + int(s[i])) )\r\n\r\n        return ''.join(res)",
    "java": "// Runtime: 2 ms (Top 43.86%) | Memory: 42.6 MB (Top 27.39%)\r\nclass Solution {\r\n    public String replaceDigits(String s) {\r\n        char[] str = s.toCharArray();\r\n\r\n        for(int i=0;i<str.length;i++){\r\n            if(Character.isDigit(str[i])){\r\n              str[i] = shift(str[i-1],str[i]);\r\n            }\r\n        }\r\n        return String.valueOf(str);\r\n    }\r\n\r\n    char shift(char letter, char number){\r\n        int a = Integer.parseInt(String.valueOf(number));\r\n        int asci = (int)letter;\r\n        char c = (char)(asci + a);\r\n        return c;\r\n    }\r\n}",
    "javascript": "// Runtime: 78 ms (Top 73.93%) | Memory: 42.3 MB (Top 48.93%)\r\nvar replaceDigits = function(s) {\r\n    let res = ''\r\n    for(let i = 0; i < s.length; i++){\r\n        if(i % 2 !== 0){\r\n          res += String.fromCharCode(s[i - 1].charCodeAt() + parseInt(s[i]))\r\n        } else{\r\n            res += s[i]\r\n        }\r\n\r\n    }\r\n    return res;\r\n};"
  }
}
