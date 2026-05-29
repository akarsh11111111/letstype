export default {
  "id": 1866,
  "name": "Number of Ways to Rearrange Sticks With K Sticks Visible",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-ways-to-rearrange-sticks-with-k-sticks-visible",
  "relativeDir": "N/Number of Ways to Rearrange Sticks With K Sticks Visible",
  "slug": "1866-number-of-ways-to-rearrange-sticks-with-k-sticks-visible",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 14,
    "python": 19
  },
  "languages": {
    "cpp": "// Runtime: 354 ms (Top 22.54%) | Memory: 119.9 MB (Top 19.75%)\r\n#define ll long long\r\nclass Solution {\r\npublic:\r\n    vector<vector<ll> > dp;\r\n    ll mod = 1e9 + 7;\r\n\r\n    ll numWays(ll n, ll k) {\r\n        if(k == 0 || k > n) return 0; // can't have no stick visible or more sticks visible than the total number of sticks\r\n        if(n <= 2) return 1; // base condition\r\n\r\n        if(dp[n][k] != -1) return dp[n][k]; // return if already calculated\r\n\r\n        ll ans = 0;\r\n\r\n        // select the tallest stick\r\n        ans = (ans + numWays(n - 1, k - 1)) % mod;\r\n\r\n        // select any of the n - 1 sticks that are not the tallest\r\n        ans = (ans + ((n - 1) * numWays(n - 1, k))) % mod;\r\n\r\n        return dp[n][k] = ans;\r\n    }\r\n\r\n    int rearrangeSticks(int n, int k) {\r\n        dp = vector<vector<ll> >(n + 1, vector<ll>(k + 1, -1));\r\n        return numWays(n, k);\r\n    }\r\n};",
    "python": "M = 10 ** 9 + 7\r\n\r\nfrom functools import cache\r\n\r\nclass Solution:\r\n    def rearrangeSticks(self, n: int, k: int) -> int:\r\n        return dp(n, k)\r\n\r\n# consider the shortest\r\n@cache\r\ndef dp(n, k):\r\n    if n == k:\r\n        return 1\r\n    if n <= 0 or k <= 0:\r\n        return 0\r\n    return (dp(n - 1, k - 1) + (n - 1) * dp(n - 1, k)) % M  \r\n\r\n# `dp(n, k)` indicates the number of arrangements of `n` distinct sticks with exactly `k` visible sticks. \r\n# Those `n` **distinct** sticks does NOT have to be numbered from `1` to `n` consecutively.",
    "java": "// Runtime: 368 ms (Top 16.85%) | Memory: 89.8 MB (Top 41.57%)\r\nclass Solution {\r\n    public int rearrangeSticks(int n, int k) {\r\n        final int MOD = 1_000_000_007;\r\n        long[][] M = new long[k + 1][n + 1];\r\n        M[0][0] = 1;\r\n        for (int i = 1; i <= k; i++) {\r\n            for (int j = 1; j <= n; j++) {\r\n                M[i][j] = ((j - 1) * M[i][j - 1] % MOD + M[i - 1][j - 1]) % MOD;\r\n            }\r\n        }\r\n        return (int) M[k][n];\r\n    }\r\n}"
  }
}
