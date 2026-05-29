export default {
  "id": 2240,
  "name": "Number of Ways to Buy Pens and Pencils",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils",
  "relativeDir": "N/Number of Ways to Buy Pens and Pencils",
  "slug": "2240-number-of-ways-to-buy-pens-and-pencils",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "python": 3,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    long long waysToBuyPensPencils(int total, int cost1, int cost2) {\r\n        long long ways = 0;\r\n        long long penscost = 0;\r\n        while(penscost <= total) {\r\n            long long remainingAmount = total - penscost;\r\n            long long pencils = remainingAmount/cost2 + 1;\r\n            ways += pencils;\r\n            penscost += cost1;\r\n        }\r\n        return ways;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def waysToBuyPensPencils(self, total: int, cost1: int, cost2: int) -> int:\r\n        return sum((total - pens*cost1) // cost2 + 1 for pens in range(total // cost1 + 1))",
    "javascript": "// Runtime: 78 ms (Top 95.83%) | Memory: 41.9 MB (Top 85.42%)\r\nvar waysToBuyPensPencils = function(total, cost1, cost2) {\r\n    let distinctWays = 0;\r\n\r\n    for (let cnt = 0; cnt * cost1 <= total; ++cnt) {\r\n        const remMoney = total - (cnt * cost1);\r\n        const waysToBuyPencil = Math.floor(remMoney / cost2) + 1;\r\n        distinctWays += waysToBuyPencil;\r\n    }\r\n\r\n    return distinctWays;\r\n};"
  }
}
