export default {
  "id": 960,
  "name": "Delete Columns to Make Sorted III",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/delete-columns-to-make-sorted-iii",
  "relativeDir": "D/Delete Columns to Make Sorted III",
  "slug": "0960-delete-columns-to-make-sorted-iii",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "python": 16,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 13 ms (Top 76.86%) | Memory: 10.60 MB (Top 44.63%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minDeletionSize(vector<string>& strs) {\r\n        \r\n        int n = strs.size();\r\n        int m = strs[0].length();\r\n\r\n        vector<int> dp(m, 1);\r\n        int res = 1;\r\n        for(int i = 0; i < m; i++) {\r\n            for(int j = 0; j < i; j++) {\r\n                for(int k = 0; k <= n; k++) {\r\n                    if(k == n) {\r\n                        dp[i] = max(dp[i], dp[j] + 1);\r\n                        res = max(res, dp[i]);\r\n                    } else if (strs[k][j] > strs[k][i]) {\r\n                        break;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return m - res;\r\n    }\r\n};",
    "python": "// Runtime: 83 ms (Top 95.45%) | Memory: 16.80 MB (Top 79.55%)\r\n\r\nclass Solution:\r\n    def minDeletionSize(self, strs: List[str]) -> int:\r\n        n = len(strs[0])\r\n        dp = [1] * n\r\n        for i in range(1, n):\r\n            for j in range(i):\r\n                valid = True\r\n                for a in strs:\r\n                    if a[j] > a[i]: \r\n                        valid = False\r\n                        break\r\n                if valid:\r\n                    dp[i] = max(dp[i], dp[j] + 1)\r\n        return n - max(dp)",
    "javascript": "// Runtime: 49 ms (Top 100.0%) | Memory: 43.10 MB (Top 40.0%)\r\n\r\n/**\r\n * @param {string[]} strs\r\n * @return {number}\r\n */\r\nvar minDeletionSize = function(strs) {\r\n    if (strs.length === 0) return 0\r\n    let dp = new Array(strs[0].length).fill(1)\r\n    for (let i = 1; i < strs[0].length; i++) {\r\n        for (let j = 0; j < i; j++) {\r\n            let flag = true\r\n            for (let k = 0; k < strs.length; k++) {\r\n                if (strs[k][j] > strs[k][i]) {\r\n                    flag = false\r\n                    break\r\n                }\r\n            }\r\n            if (flag) {\r\n                dp[i] = Math.max(dp[i], dp[j] + 1)\r\n            }\r\n        }\r\n    }\r\n    return strs[0].length - Math.max(...dp)\r\n};"
  }
}
