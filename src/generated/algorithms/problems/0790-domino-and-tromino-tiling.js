export default {
  "id": 790,
  "name": "Domino and Tromino Tiling",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/domino-and-tromino-tiling",
  "relativeDir": "D/Domino and Tromino Tiling",
  "slug": "0790-domino-and-tromino-tiling",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 11,
    "python": 8,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numTilings(int n) {\r\n        long dp[n+1];\r\n        dp[0]=1;\r\n        for(int i=1; i<=n; i++){\r\n            if(i<3)\r\n                dp[i]=i;\r\n            else\r\n                dp[i] = (dp[i-1]*2+dp[i-3])%1000000007;\r\n        }\r\n        return (int)dp[n];\r\n    }\r\n};",
    "python": "# Runtime: 35 ms (Top 93.5%) | Memory: 16.27 MB (Top 85.2%)\r\n\r\nclass Solution(object):\r\n    def numTilings(self, n):\r\n        dp = [1, 2, 5] + [0] * n\r\n        for i in range(3, n):\r\n            dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % 1000000007\r\n        return dp[n - 1]",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 40.50 MB (Top 29.41%)\r\n\r\nclass Solution {\r\n    public int numTilings(int n) {\r\n        long[] dp = new long[n + 3]; dp[0] = 1; dp[1] = 2; dp[2] = 5;\r\n        for (int i = 3; i < n; i ++) {\r\n            dp[i] = (dp[i - 1] * 2 + dp[i - 3]) % 1000000007;\r\n        }\r\n        return (int)dp[n - 1];\r\n    }\r\n}",
    "javascript": "// Runtime: 75 ms (Top 81.08%) | Memory: 44.3 MB (Top 51.35%)\r\n\r\nvar numTilings = function(n) {\r\n    let mod = 10 ** 9 + 7;\r\n    let len = 4;\r\n    let ways = new Array(len).fill(0);\r\n\r\n    // base cases\r\n    ways[0] = 1;\r\n    ways[1] = 1;\r\n    ways[2] = 2;\r\n\r\n    // already calculated above\r\n    if (n < len - 1) {\r\n        return ways[n];\r\n    }\r\n\r\n    // use % len to circulate values inside our array\r\n    for (var i = len - 1; i <= n;i++) {\r\n        ways[i % len] = (\r\n            ways[(len + i - 1) % len] * 2\r\n            +\r\n            ways[(len + i - 3) % len]\r\n        ) % mod;\r\n    }\r\n\r\n    return ways[(i - 1) % len];\r\n};"
  }
}
