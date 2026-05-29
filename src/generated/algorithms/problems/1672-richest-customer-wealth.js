export default {
  "id": 1672,
  "name": "Richest Customer Wealth",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/richest-customer-wealth",
  "relativeDir": "R/Richest Customer Wealth",
  "slug": "1672-richest-customer-wealth",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 14,
    "python": 4,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maximumWealth(vector<vector<int>>& accounts) {\r\n           int maxWealth = 0;\r\n        for (auto account : accounts) {\r\n            int currentSum = 0;\r\n            for (int x : account) currentSum += x;\r\n            if (currentSum > maxWealth) maxWealth = currentSum;\r\n        }\r\n        return maxWealth;\r\n    }\r\n};",
    "python": "# Runtime: 132 ms (Top 5.33%) | Memory: 13.9 MB (Top 32.60%)\r\nclass Solution:\r\n    def maximumWealth(self, accounts: List[List[int]]) -> int:\r\n        return max(map(sum, accounts))",
    "java": "// Runtime: 1 ms (Top 56.03%) | Memory: 43.3 MB (Top 46.87%)\r\nclass Solution {\r\n    public int maximumWealth(int[][] accounts) {\r\n        int res = 0;\r\n        for(int i =0;i<accounts.length;i++){\r\n            int temp = 0;\r\n            for(int j = 0;j<accounts[i].length;j++){\r\n                temp+=accounts[i][j];\r\n            }\r\n            res = Math.max(res,temp);\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 60 ms (Top 96.91%) | Memory: 42.1 MB (Top 62.50%)\r\nvar maximumWealth = function(accounts) {\r\n        var res = 0;\r\n        for(var i =0;i<accounts.length;i++){\r\n            var temp = 0;\r\n            for(var j = 0;j<accounts[i].length;j++){\r\n                temp+=accounts[i][j];\r\n            }\r\n            res = Math.max(res,temp);\r\n        }\r\n        return res;\r\n};"
  }
}
