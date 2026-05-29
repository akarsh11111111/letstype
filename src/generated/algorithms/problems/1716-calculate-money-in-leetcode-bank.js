export default {
  "id": 1716,
  "name": "Calculate Money in Leetcode Bank",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/calculate-money-in-leetcode-bank",
  "relativeDir": "C/Calculate Money in Leetcode Bank",
  "slug": "1716-calculate-money-in-leetcode-bank",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 19,
    "python": 12,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int totalMoney(int n) {\r\n        int res = 0;\r\n        for (int i = 1, c = 1; i <= n; i++, c++) {\r\n            res += c;\r\n            c = i % 7 ? c : (i / 7);\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "from itertools import cycle, \\\r\n                      repeat, \\\r\n                      starmap\r\nfrom operator import floordiv\r\n\r\n\r\nclass Solution:\r\n    def totalMoney(self, n: int) -> int:\r\n        return sum(starmap(add,zip(\r\n            starmap(floordiv, zip(range(n), repeat(7, n))),\r\n            cycle((1,2,3,4,5,6,7))\r\n        )))",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 39.1 MB (Top 94.89%)\r\nclass Solution {\r\n    public int totalMoney(int n) {\r\n        int m=n/7; //(no.of full weeks)\r\n        // first week 1 2 3 4 5 6 7 (sum is 28 i.e. 7*(i+3) if i=1)\r\n        // second week 2 3 4 5 6 7 8 (sum is 35 i.e. 7*(i+3) if i=2)\r\n        //.... so on\r\n        int res=0; //for result\r\n        //calculating full weeks\r\n        for(int i=1;i<=m;i++){\r\n            res+=7*(i+3);\r\n        }\r\n        //calculating left days\r\n        for(int i=7*m;i<n;i++){\r\n            res+=++m;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 99 ms (Top 38.05%) | Memory: 41.7 MB (Top 86.73%)\r\nvar totalMoney = function(n) {\r\n    let min = 1;\r\n    let days = 7;\r\n    let total = 0;\r\n    let inc = 1;\r\n    for (let i = 0; i < n; i++) {\r\n        if (days !== 0) {\r\n            total += min;\r\n            min++;\r\n            days--;\r\n        } else {\r\n            inc++;\r\n            min = inc\r\n            days = 7;\r\n            i--;\r\n        }\r\n    }\r\n    return total;\r\n};"
  }
}
