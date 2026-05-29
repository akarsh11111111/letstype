export default {
  "id": 1986,
  "name": "Minimum Number of Work Sessions to Finish the Tasks",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-work-sessions-to-finish-the-tasks",
  "relativeDir": "M/Minimum Number of Work Sessions to Finish the Tasks",
  "slug": "1986-minimum-number-of-work-sessions-to-finish-the-tasks",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 36,
    "python": 18,
    "javascript": 43
  },
  "languages": {
    "cpp": "// Runtime: 103 ms (Top 74.10%) | Memory: 10.8 MB (Top 42.47%)\r\n// C++ Solution\r\nclass Solution {\r\npublic:\r\n    int minSessions(vector<int>& tasks, int sessionTime) {\r\n        const int N = tasks.size();\r\n        const int INF = 1e9;\r\n        vector<pair<int, int>> dp(1 << N, {INF, INF});\r\n        dp[0] = {0, INF};\r\n        for(int mask = 1; mask < (1 << N); ++mask) {\r\n            pair<int, int> best = {INF, INF};\r\n            for(int i = 0; i < N; ++i) {\r\n                if(mask & (1 << i)) {\r\n                    pair<int, int> cur = dp[mask ^ (1 << i)];\r\n                    if(cur.second + tasks[i] > sessionTime) {\r\n                        cur = {cur.first + 1, tasks[i]};\r\n                    } else\r\n                        cur.second += tasks[i];\r\n                    best = min(best, cur);\r\n                }\r\n            }\r\n            dp[mask] = best;\r\n        }\r\n        return dp[(1 << N) - 1].first;\r\n    }\r\n};",
    "python": "// Runtime: 966 ms (Top 45.98%) | Memory: 41.80 MB (Top 22.32%)\r\n\r\nclass Solution:\r\n    def minSessions(self, tasks, T):\r\n        n = len(tasks)\r\n\r\n        @lru_cache(None)\r\n        def dp(mask):\r\n            if mask == 0: return (1, 0)\r\n            ans = (float(\"inf\"), float(\"inf\"))\r\n            for j in range(n):\r\n                if mask & (1<<j):\r\n                    pieces, last = dp(mask - (1 << j))\r\n                    full = (last + tasks[j] > T)\r\n                    ans = min(ans, (pieces + full, tasks[j] + (1-full)*last))  \r\n            return ans\r\n\r\n        return dp((1<<n) - 1)[0]",
    "java": "// Runtime: 116 ms (Top 47.58%) | Memory: 73.6 MB (Top 13.54%)\r\n// Java Solution\r\nclass Solution {\r\n    public int minSessions(int[] tasks, int sessionTime) {\r\n        int n = tasks.length, MAX = Integer.MAX_VALUE;\r\n        int[][] dp = new int[1<<n][2];\r\n        dp[0][0] = 1;\r\n        dp[0][1] = 0;\r\n\r\n        for(int i = 1; i < (1 << n); i++) {\r\n            dp[i][0] = MAX;\r\n            dp[i][1] = 0;\r\n\r\n            for(int t = 0; t < n; t++) {\r\n                if(((1<<t) & i) == 0) continue;\r\n\r\n                int[] prev = dp[(1<<t) ^ i];\r\n                if(prev[1] + tasks[t] <= sessionTime) {\r\n                    dp[i] = min(dp[i], new int[]{prev[0], prev[1] + tasks[t]});\r\n                }else{\r\n                    dp[i] = min(dp[i], new int[]{prev[0] + 1, tasks[t]});\r\n                }\r\n            }\r\n        }\r\n\r\n        return dp[(1<<n) - 1][0];\r\n    }\r\n\r\n    private int[] min(int[] d1, int[] d2) {\r\n        if(d1[0] > d2[0]) return d2;\r\n        if(d1[0] < d2[0]) return d1;\r\n        if(d1[1] > d2[1]) return d2;\r\n\r\n        return d1;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} tasks\r\n * @param {number} sessionTime\r\n * @return {number}\r\n */\r\nvar minSessions = function(tasks, sessionTime) {\r\n  const n = tasks.length;\r\n  const dp = Array(1 << n).fill().map(() => Array(16).fill(-1));\r\n  \r\n  const solve = (mask, time) => {\r\n    if (mask === (1 << n) - 1) {\r\n      return 1;\r\n    }\r\n    \r\n    if (dp[mask][time] !== -1) {\r\n      return dp[mask][time];\r\n    }\r\n    \r\n    let min = Infinity;\r\n    for (let i = 0; i < n; ++i) {\r\n      if (mask & (1 << i)) {\r\n        continue;\r\n      }\r\n\r\n      if (time >= tasks[i]) {\r\n        min = Math.min(\r\n          min,\r\n          solve(mask | (1 << i), time - tasks[i]),\r\n        );\r\n      } else {\r\n        min = Math.min(\r\n          min,\r\n          1 + solve(mask | (1 << i), sessionTime - tasks[i]),\r\n        );\r\n      }\r\n    }\r\n    \r\n    dp[mask][time] = min;\r\n    return min;\r\n  }\r\n  \r\n  return solve(0, sessionTime);\r\n};"
  }
}
