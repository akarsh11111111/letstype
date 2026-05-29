export default {
  "id": 1227,
  "name": "Airplane Seat Assignment Probability",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/airplane-seat-assignment-probability",
  "relativeDir": "A/Airplane Seat Assignment Probability",
  "slug": "1227-airplane-seat-assignment-probability",
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
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6 MB (Top 31.29%)\r\nclass Solution {\r\npublic:\r\n    double nthPersonGetsNthSeat(int n) {\r\n        if(n==1)return (double)1;\r\n        return (double)1/2;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def nthPersonGetsNthSeat(self, n: int) -> float:\r\n\r\n        return 0.5 if n > 1 else 1",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 39 MB (Top 96.77%)\r\nlass Solution {\r\n    public double nthPersonGetsNthSeat(int n) {\r\n       if(n==1)\r\n           return (double)1;\r\n        return (double)1/2;\r\n    }\r\n}",
    "javascript": "// Runtime: 48 ms (Top 84.85%) | Memory: 48.40 MB (Top 9.09%)\r\n\r\n/**\r\n * @param {number} n\r\n * @return {number}\r\n */\r\nvar nthPersonGetsNthSeat = function(n) {\r\n    return n===1? 1 :0.5\r\n};"
  }
}
