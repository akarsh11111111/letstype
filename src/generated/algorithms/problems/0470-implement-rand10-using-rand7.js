export default {
  "id": 470,
  "name": "Implement Rand10() Using Rand7()",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/implement-rand10-using-rand7",
  "relativeDir": "I/Implement Rand10() Using Rand7()",
  "slug": "0470-implement-rand10-using-rand7",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "python": 12,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int rand10() {\r\n        while(true)\r\n        {\r\n            int col = rand7();\r\n            int last_row_tak = (rand7() - 1)*7;\r\n            int val = last_row_tak + col;\r\n            if(val<=40)\r\n            {\r\n                return (val-1)%10 + 1;\r\n            }\r\n        }\r\n    }\r\n};",
    "python": "class Solution:\r\n    def rand10(self):\r\n        \"\"\"\r\n        :rtype: int\r\n        \"\"\"\r\n        x = rand7()\r\n        y = rand7()\r\n        pos = (x - 1) * 7 + y\r\n        if pos > 40:\r\n            return self.rand10()\r\n        return (pos % 10) + 1\r\n\t\t```",
    "javascript": "// Runtime: 132 ms (Top 65.91%) | Memory: 50.3 MB (Top 43.18%)\r\nvar rand10 = function() {\r\n    while (true) {\r\n        const rand49 = (rand7() - 1) * 7 + rand7();\r\n        if (rand49 <= 40) return rand49 % 10 + 1;\r\n\r\n        const rand9 = rand49 - 40;\r\n        const rand63 = (rand9 - 1) * 7 + rand7();\r\n        if (rand63 <= 60) return rand63 % 10 + 1;\r\n\r\n        const rand3 = rand63 - 60;\r\n        const rand21 = (rand3 - 1) * 7 + rand7();\r\n        if (rand21 <= 20) return rand21 % 10 + 1;\r\n    }\r\n};"
  }
}
