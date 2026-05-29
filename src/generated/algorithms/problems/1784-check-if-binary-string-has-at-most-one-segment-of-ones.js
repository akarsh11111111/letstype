export default {
  "id": 1784,
  "name": "Check if Binary String Has at Most One Segment of Ones",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones",
  "relativeDir": "C/Check if Binary String Has at Most One Segment of Ones",
  "slug": "1784-check-if-binary-string-has-at-most-one-segment-of-ones",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 5,
    "python": 4,
    "javascript": 3
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tbool checkOnesSegment(string s) {\r\n\t\tfor(int i = 1; i < s.size(); i++){\r\n\t\t\tif(s[i - 1] == '0' and s[i] == '1'){\r\n\t\t\t\treturn false;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn true;\r\n\t}\r\n};",
    "python": "# Runtime: 42 ms (Top 66.03%) | Memory: 13.8 MB (Top 52.02%)\r\nclass Solution:\r\n    def checkOnesSegment(self, s: str) -> bool:\r\n        return \"01\" not in s",
    "java": "class Solution {\r\n    public boolean checkOnesSegment(String s) {\r\n        return !s.contains(\"01\");\r\n    }\r\n}",
    "javascript": "var checkOnesSegment = function(s) {\r\n   return s.indexOf(\"01\") == -1\r\n};"
  }
}
