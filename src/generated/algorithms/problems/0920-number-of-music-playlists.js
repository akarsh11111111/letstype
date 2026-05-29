export default {
  "id": 920,
  "name": "Number of Music Playlists",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-music-playlists",
  "relativeDir": "N/Number of Music Playlists",
  "slug": "0920-number-of-music-playlists",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "python": 13,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    using ll = long long;\r\n    int N, target;\r\n    int dp[102][102];\r\n    int mod = 1e9+7;\r\n    ll solve(int unique, int taken, int k)\r\n    {\r\n        \r\n        if(unique > N || (taken == target && unique < N))\r\n            return 0;\r\n        if(taken == target)\r\n            return 1;\r\n        \r\n        int ans = 0;\r\n        \r\n        if(dp[unique][taken] != -1)\r\n            return dp[unique][taken];\r\n        \r\n        // first time adding a new song\r\n        ans = (solve(unique+1, taken+1, k) * (N-unique)) % mod;\r\n        \r\n        // repeat from already chosen songs\r\n        int val = solve(unique, taken+1, k) * max(0, unique-k) % mod;\r\n        ans += val;\r\n        \r\n        ans %= mod;\r\n        return dp[unique][taken] = ans;\r\n    }\r\n    \r\n    int numMusicPlaylists(int n, int goal, int k) {\r\n        memset(dp, -1, sizeof(dp));\r\n        N = n, target = goal;\r\n        return solve(0, 0, k);\r\n    }\r\n};",
    "python": "# Runtime: 87 ms (Top 77.87%) | Memory: 13.9 MB (Top 86.89%)\r\nclass Solution:\r\n    def numMusicPlaylists(self, n: int, goal: int, k: int) -> int:\r\n        prev_p, cur_p = [0] * (n+1), [0] * (n+1)\r\n\r\n        for i in range(k+1, goal+1):\r\n            if i == k+1:\r\n                prev_p[i] = math.factorial(n) // math.factorial(n-i)\r\n            else:\r\n                for j in range(k+1, min(i, n)+1):\r\n                    cur_p[j] = prev_p[j-1] * (n - j + 1) + prev_p[j] * (j-k)\r\n                prev_p, cur_p = cur_p, [0] * (n+1)\r\n        return prev_p[n] % (10**9 + 7)",
    "javascript": "// Runtime: 63 ms (Top 71.43%) | Memory: 43.50 MB (Top 100.0%)\r\n\r\n/**\r\n * @param {number} n\r\n * @param {number} goal\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar numMusicPlaylists = function(n, goal, k) {\r\n    const MOD = 1e9 + 7;\r\n    let dp = Array.from({length: 2}, () => new Array(n + 1).fill(0));\r\n    dp[0][0] = 1;\r\n\r\n    for (let i = 1; i <= goal; i++) {\r\n        dp[i%2][0] = 0;\r\n        for (let j = 1; j <= Math.min(i, n); j++) {\r\n            dp[i%2][j] = dp[(i - 1)%2][j - 1] * (n - (j - 1)) % MOD;\r\n            if (j > k)\r\n                dp[i%2][j] = (dp[i%2][j] + dp[(i - 1)%2][j] * (j - k)) % MOD;\r\n        }\r\n    }\r\n\r\n    return dp[goal%2][n];\r\n};"
  }
}
