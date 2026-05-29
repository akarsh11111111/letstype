export default {
  "id": 2310,
  "name": "Sum of Numbers With Units Digit K",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-numbers-with-units-digit-k",
  "relativeDir": "S/Sum of Numbers With Units Digit K",
  "slug": "2310-sum-of-numbers-with-units-digit-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 20,
    "python": 13,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 7.30 MB (Top 29.79%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minimumNumbers(int sum, int k) {\r\n        if (sum == 0) return 0;\r\n        for (int i = 1; i <= 10; ++i)\r\n            if ((i * k) % 10 == sum % 10 && i * k <= sum) return i;\r\n        return -1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumNumbers(self, num: int, k: int) -> int:\r\n        if num == 0:\r\n            return 0\r\n        \r\n        if k == 0:\r\n            return 1 if num % 10 == 0 else -1\r\n        \r\n        for n in range(1, min(num // k, 10) + 1):\r\n            if (num - n * k) % 10 == 0:\r\n                return n\r\n        \r\n        return -1",
    "java": "// Runtime: 1 ms (Top 90.88%) | Memory: 40.7 MB (Top 84.12%)\r\n\r\nclass Solution\r\n{\r\n    public int minimumNumbers(int num, int k)\r\n    {\r\n        if(num == 0)\r\n            return 0;\r\n        if(k == 0)\r\n            if(num % 10 == 0) //E.g. 20,1590,3000\r\n                return 1;\r\n            else\r\n                return -1;\r\n        for(int i = 1; i <= num/k; i++) // Start with set size 1 and look for set having unit's digit equal to that of num\r\n            if(num % 10 == ((i*k)%10)) // Look for equal unit's digit\r\n                return i;\r\n\r\n        return -1;\r\n    }\r\n}",
    "javascript": "// Runtime: 57 ms (Top 47.06%) | Memory: 42.40 MB (Top 5.88%)\r\n\r\n/**\r\n * @param {number} num\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar minimumNumbers = function(num, k) {\r\n    if (num === 0) return 0\r\n    if (num === k) return 1\r\n    if (k === 0) return num % 10 !== 0 ? -1 : 1\r\n    \r\n    let x = Math.floor(num / k)\r\n    \r\n    while (x >= 0) {\r\n        if ((num - 10 * x) > 0 && (num - 10 * x) % k === 0) {\r\n            return (num - 10 * x) / k\r\n        }\r\n        x--\r\n    }\r\n    \r\n    return -1\r\n};"
  }
}
