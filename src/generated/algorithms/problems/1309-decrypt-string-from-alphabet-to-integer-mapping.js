export default {
  "id": 1309,
  "name": "Decrypt String from Alphabet to Integer Mapping",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping",
  "relativeDir": "D/Decrypt String from Alphabet to Integer Mapping",
  "slug": "1309-decrypt-string-from-alphabet-to-integer-mapping",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 28,
    "python": 4,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tstring freqAlphabets(string s) {\r\n\t\tint n=s.size(); \r\n\t\tstring ans=\"\";\r\n\t\tfor(int i=0;i<n;){\r\n\t\t\tif(i+2<n && s[i+2]=='#'){\r\n\t\t\t\tans+= (s[i]-'0')*10 + (s[i+1]-'0') +96;\r\n\t\t\t\ti+=3;\r\n\t\t\t}\r\n\t\t\telse{\r\n\t\t\t\tans+=(s[i]-'0') + 96;\r\n\t\t\t\ti++;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn ans;\r\n\t}\r\n};",
    "python": "class Solution:\r\n    def freqAlphabets(self, s: str) -> str:\r\n        for i in range(26,0,-1): s = s.replace(str(i)+\"#\"*(i>9),chr(96+i))\r\n        return s",
    "java": "// Runtime: 2 ms (Top 43.3%) | Memory: 40.72 MB (Top 56.6%)\r\n\r\nclass Solution {\r\n    public String freqAlphabets(String str) {\r\n        HashMap<String, Character> map = new HashMap<>();\r\n        int k = 1;\r\n        for (char ch = 'a'; ch <= 'z'; ch++) {\r\n            if (ch < 'j')\r\n                map.put(String.valueOf(k++), ch);\r\n            else\r\n                map.put(String.valueOf(k++)+\"#\", ch);\r\n        }\r\n        \r\n        StringBuilder sb = new StringBuilder();\r\n        int i = str.length() - 1;\r\n        while (i >= 0) {\r\n            if (str.charAt(i) == '#') {\r\n                sb.append(map.get(str.substring(i - 2, i+1)));\r\n                i -= 3;\r\n            } else {\r\n                sb.append(map.get(str.substring(i, i + 1)));\r\n                i--;\r\n            }\r\n        }\r\n        \r\n        return sb.reverse().toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 48 ms (Top 83.84%) | Memory: 42.00 MB (Top 45.45%)\r\n\r\n/**\r\n * @param {string} s\r\n * @return {string}\r\n */\r\nvar freqAlphabets = function(s) {\r\n    return s\r\n        .match(/\\d{2}(?=#)|\\d/g)\r\n        .map(num => String.fromCharCode(96 + +num))\r\n        .join('')\r\n};"
  }
}
