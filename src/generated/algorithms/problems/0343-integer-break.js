export default {
  "id": 343,
  "name": "Integer Break",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/integer-break",
  "relativeDir": "I/Integer Break",
  "slug": "0343-integer-break",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 26,
    "python": 8,
    "javascript": 23
  },
  "languages": {
    "cpp": "class Solution\r\n{\r\npublic:\r\n    int integerBreak(int n)\r\n    {\r\n        if (n == 2)\r\n            return 1;\r\n        if (n == 3)\r\n            return 2;\r\n        if (n == 4)\r\n            return 4;\r\n        int k = n / 3;\r\n        int m = n % 3;\r\n        int ans;\r\n        if (m == 0)\r\n            ans = pow(3, k);\r\n        else if (m == 1)\r\n            ans = pow(3, k - 1) * 4;\r\n        else if (m == 2)\r\n            ans = pow(3, k) * m;\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def integerBreak(self, n: int) -> int:\r\n        dp = [0 for _ in range(n+1)]\r\n        dp[1] = 1\r\n        for i in range(2, n+1):\r\n            for j in range(1, i//2+1):\r\n                dp[i] = max(j * (i-j), j * dp[i-j], dp[i])\r\n        return dp[-1]",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 40.80 MB (Top 7.7%)\r\n\r\nclass Solution {\r\n    public int integerBreak(int n) {\r\n        if (n <= 1) {\r\n            return 0;\r\n        }\r\n        int[] memo = new int[n + 1];\r\n        return maxProduct(n, memo);\r\n    }\r\n    \r\n    private int maxProduct(int n, int[] memo) {\r\n        if (n == 2) {\r\n            return 1;\r\n        }\r\n        if (memo[n] != 0) {\r\n            return memo[n];\r\n        }\r\n        int max = 0;\r\n        for (int i = 1; i < n; i++) {\r\n            max = Math.max(max, Math.max(i * (n - i), i * maxProduct(n - i, memo)));\r\n        }\r\n        memo[n] = max;\r\n        return max;\r\n    }\r\n}",
    "javascript": "// Runtime: 62 ms (Top 95.56%) | Memory: 42 MB (Top 66.94%)\r\nvar integerBreak = function(n) {\r\n\r\n       if(n == 2) return 1;\r\n       if(n == 3) return 2;\r\n       if(n == 4) return 4;\r\n\r\n       let c = ~~(n/3);\r\n       let d = n % 3;\r\n\r\n       if(d === 0){\r\n           return 3 ** c;\r\n       }\r\n\r\n       if(d === 1){\r\n           return 3 ** (c-1) * 4;\r\n       }\r\n\r\n       if(d === 2){\r\n           return 3 ** (c) * 2;\r\n       }\r\n\r\n};"
  }
}
