export default {
  "id": 1523,
  "name": "Count Odd Numbers in an Interval Range",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-odd-numbers-in-an-interval-range",
  "relativeDir": "C/Count Odd Numbers in an Interval Range",
  "slug": "1523-count-odd-numbers-in-an-interval-range",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 9,
    "python": 16,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 47.19%) | Memory: 5.9 MB (Top 24.93%)\r\nclass Solution {\r\npublic:\r\n    int countOdds(int low, int high) {\r\n        if (low%2 == 0 && high%2 == 0 ){\r\n            return (high - low)/2;\r\n        }\r\n        else{\r\n            return (high - low)/2 + 1;\r\n        }\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countOdds(self, low: int, high: int) -> int:        \r\n        total_nums = high - low\r\n        \r\n        answer = total_nums // 2\r\n        \r\n        if low % 2 == 1 and high % 2 == 1:\r\n            return answer + 1\r\n        \r\n        if low % 2 == 1:\r\n            answer = answer + 1\r\n            \r\n        if high % 2 == 1:\r\n            answer = answer + 1\r\n        \r\n        return answer",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.8 MB (Top 5.10%)\r\nclass Solution {\r\n    public int countOdds(int low, int high) {\r\n        if(low%2==0 && high%2==0){\r\n            return (high-low)/2;\r\n        }\r\n        return (high-low)/2+1;\r\n    }\r\n}",
    "javascript": "var countOdds = function(low, high) {\r\n    let total = 0;\r\n    for (let i = low; i <= high; i++) {\r\n        if (i % 2 !== 0) {\r\n            total++;\r\n        }\r\n    }\r\n    return total;\r\n};"
  }
}
