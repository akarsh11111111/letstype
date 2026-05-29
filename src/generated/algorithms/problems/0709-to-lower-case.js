export default {
  "id": 709,
  "name": "To Lower Case",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/to-lower-case",
  "relativeDir": "T/To Lower Case",
  "slug": "0709-to-lower-case",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "python": 15,
    "javascript": 3
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 44.79%) | Memory: 6.50 MB (Top 90.75%)\r\n\r\nclass Solution {\r\npublic:\r\n    string toLowerCase(string s) {\r\n        string res=\"\";\r\n        for(auto c:s) {\r\n            if('A' <= c && c <= 'Z')\r\n                res+=c - 'A' + 'a';\r\n            else res+=c;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "#approach -1\r\nclass Solution:\r\n    def toLowerCase(self, s: str) -> str:\r\n        ch = \"\"\r\n        for i in s:\r\n            asc = ord(i)\r\n            if asc > 64 and asc < 91:\r\n                ch += chr(asc+32)\r\n            else:\r\n                ch +=chr(asc)\r\n        return ch\r\n    \r\n#approach -2\r\nclass Solution:\r\n    return s.lower()",
    "javascript": "var toLowerCase = function(s) {\r\n    return s.toLowerCase();\r\n};"
  }
}
