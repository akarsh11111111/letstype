export default {
  "id": 521,
  "name": "Longest Uncommon Subsequence I",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-uncommon-subsequence-i",
  "relativeDir": "L/Longest Uncommon Subsequence I",
  "slug": "0521-longest-uncommon-subsequence-i",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 7,
    "python": 8,
    "javascript": 6
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findLUSlength(string a, string b) {\r\n        if(a==b){\r\n            return -1;\r\n        }\r\n        if(a.size()>=b.size()){\r\n            return a.size();\r\n        }\r\n        return b.size();\r\n    }\r\n};",
    "python": "# Runtime: 47 ms (Top 54.94%) | Memory: 13.9 MB (Top 58.35%)\r\nclass Solution:\r\n    def findLUSlength(self, a: str, b: str) -> int:\r\n        if a == b:\r\n            return -1\r\n\r\n        else:\r\n            return max(len(a), len(b))",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.7 MB (Top 58.87%)\r\nclass Solution {\r\n    public int findLUSlength(String a, String b) {\r\n        if(a.equals(b)) return -1;\r\n        return Math.max(a.length(),b.length());\r\n    }\r\n}",
    "javascript": "// Runtime: 76 ms (Top 70.00%) | Memory: 41.9 MB (Top 62.22%)\r\nvar findLUSlength = function(a, b) {\r\n    if (a===b) return -1\r\n    return Math.max(a.length,b.length)\r\n\r\n};"
  }
}
