export default {
  "id": 2235,
  "name": "Add Two Integers",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/add-two-integers",
  "relativeDir": "A/Add Two Integers",
  "slug": "2235-add-two-integers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 7,
    "java": 12,
    "python": 5,
    "javascript": 3
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 39.04%) | Memory: 5.8 MB (Top 95.13%)\r\nclass Solution {\r\npublic:\r\n    int sum(int num1, int num2) {\r\n        return num1+num2;\r\n    }\r\n};",
    "python": "// Runtime: 23 ms (Top 99.37%) | Memory: 16.60 MB (Top 53.73%)\r\n\r\nclass Solution:\r\n    def sum(self, num1: int, num2: int) -> int:\r\n        return num1 + num2",
    "java": "class Solution {\r\n    public int sum(int num1, int num2) {\r\n        int l = -200, r = 200;\r\n        while (l < r) {\r\n            int mid = (l + r) >> 1;\r\n            if (mid == num1 + num2) { return mid; }\r\n            if (mid <  num1 + num2) l = mid + 1;\r\n            if (mid >  num1 + num2) r = mid - 1;\r\n        }\r\n        return l;\r\n    }\r\n}",
    "javascript": "var sum = function(num1, num2) {\r\n    return num1+num2\r\n};"
  }
}
