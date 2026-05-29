export default {
  "id": 319,
  "name": "Bulb Switcher",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/bulb-switcher",
  "relativeDir": "B/Bulb Switcher",
  "slug": "0319-bulb-switcher",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 7,
    "java": 7,
    "python": 3,
    "javascript": 3
  },
  "languages": {
    "cpp": "// Runtime: 5 ms (Top 13.11%) | Memory: 5.9 MB (Top 24.70%)\r\nclass Solution {\r\npublic:\r\n    int bulbSwitch(int n) {\r\n        return sqrt(n);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def bulbSwitch(self, n: int) -> int:\r\n        return int(sqrt(n))",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 40.20 MB (Top 33.55%)\r\n\r\nclass Solution {\r\n    public int bulbSwitch(int n) {\r\n        return (int)Math.sqrt(n);\r\n    }\r\n}",
    "javascript": "var bulbSwitch = function(n) {\r\n    return Math.floor(Math.sqrt(n));\r\n};"
  }
}
