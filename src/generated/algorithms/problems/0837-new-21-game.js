export default {
  "id": 837,
  "name": "New 21 Game",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/new-21-game",
  "relativeDir": "N/New 21 Game",
  "slug": "0837-new-21-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 18,
    "python": 10,
    "javascript": 29
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    double new21Game(int n, int k, int maxPts) {\r\n        if(k==0 || n>=k+maxPts-1)\r\n            return (double) 1;\r\n        vector<double> dp(n+1);\r\n        dp[0]=1;\r\n        double sum = 0;\r\n        for(int i=0; i<n; i++)\r\n        {\r\n            if(i<k)\r\n                sum+=dp[i]; // reach f(2) by directly drawing f(2) or f(1) and f(1) \r\n            if(i>=maxPts)\r\n                sum-=dp[i-maxPts];\r\n                \r\n            dp[i+1] = sum/maxPts;\r\n        }\r\n        double ret = 0;\r\n        for(int i=k; i<=n; i++)\r\n            ret+=dp[i];\r\n        return ret;\r\n    }\r\n};",
    "python": "# Runtime: 110 ms (Top 69.47%) | Memory: 14.5 MB (Top 12.98%)\r\nclass Solution:\r\n    def new21Game(self, n: int, k: int, maxPts: int) -> float:\r\n        dp = collections.deque([float(i <= n) for i in range(k, k + maxPts)])\r\n        s = sum(dp)\r\n        for i in range(k):\r\n            dp.appendleft(s / maxPts)\r\n            s += dp[0] - dp.pop()\r\n\r\n        return dp[0]",
    "java": "class Solution {\r\n    public double new21Game(int n, int k, int maxPts) {\r\n        double[] dp = new double[k + maxPts];\r\n        dp[0] = 1;\r\n        for (int i = 0; i < k; i++){\r\n            for (int j = 1; j <= maxPts; j++){\r\n                dp[i + j] += dp[i] * 1.0 / maxPts;\r\n            }\r\n        }\r\n\r\n        double ans = 0;\r\n        for (int i = k; i < k + maxPts && i <= n; i++){\r\n            ans += dp[i];\r\n        }\r\n\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 122 ms (Top 45.45%) | Memory: 47.8 MB (Top 36.36%)\r\n\r\nvar new21Game = function(n, k, maxPts) {\r\n    if (k+maxPts <= n || k===0) return 1;\r\n\r\n    let dp = [];\r\n    dp[0] = 1;\r\n    dp[1] = 1/maxPts;\r\n\r\n    for (let i = 2; i <= n; i++) {\r\n        dp[i] = 0;\r\n\r\n        if (i <= k) {\r\n            dp[i] = (1 + 1/maxPts) * dp[i-1];\r\n        } else {\r\n            dp[i] = dp[i-1];\r\n        }\r\n        if (i > maxPts) {\r\n            dp[i] -= dp[i-maxPts-1] / maxPts;\r\n        }\r\n    }\r\n\r\n    return dp.reduce((acc, cur, idx) => {\r\n        if (idx >= k) {\r\n            acc += cur;\r\n        }\r\n        return acc;\r\n    }, 0)\r\n};"
  }
}
