export default {
  "id": 2220,
  "name": "Minimum Bit Flips to Convert Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-bit-flips-to-convert-number",
  "relativeDir": "M/Minimum Bit Flips to Convert Number",
  "slug": "2220-minimum-bit-flips-to-convert-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 7,
    "java": 11,
    "python": 7,
    "javascript": 3
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6 MB (Top 5.99%)\r\nclass Solution {\r\npublic:\r\n    int minBitFlips(int start, int goal) {\r\n        return __builtin_popcount(start^goal);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minBitFlips(self, s: int, g: int) -> int:\r\n        count = 0 \r\n        while s or g:\r\n            if s%2 != g%2: count+=1\r\n            s, g = s//2, g//2\r\n        return count",
    "java": "class Solution {\r\n\tpublic static int minBitFlips(int a1, int a2) {\r\n\t\tint n = (a1 ^ a2);\r\n\t\tint res = 0;\r\n\t\twhile (n != 0) {\r\n\t\t\tres++;\r\n\t\t\tn &= (n - 1);\r\n\t\t}\r\n\t\treturn res;\r\n\t}\r\n}",
    "javascript": "var minBitFlips = function(start, goal) {\r\n    return (start^goal).toString(2).split(\"0\").join(\"\").length;\r\n};"
  }
}
