export default {
  "id": 292,
  "name": "Nim Game",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/nim-game",
  "relativeDir": "N/Nim Game",
  "slug": "0292-nim-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 8,
    "java": 8,
    "python": 4,
    "javascript": 5
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.20 MB (Top 98.75%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool canWinNim(int n) {\r\n        return n%4 ;\r\n    }\r\n};",
    "python": "// Runtime: 39 ms (Top 73.60%) | Memory: 13.9 MB (Top 45.89%)\r\nclass Solution:\r\n    def canWinNim(self, n: int) -> bool:\r\n        return n%4",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 40.8 MB (Top 59.25%)\r\nclass Solution {\r\n    public boolean canWinNim(int n) {\r\n        if(n%4==0) return false;\r\n\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 78 ms (Top 68.64%) | Memory: 41.5 MB (Top 94.30%)\r\nvar canWinNim = function(n) {\r\n    if(n%4==0) return false;\r\n    else return true;\r\n};"
  }
}
