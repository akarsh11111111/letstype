export default {
  "id": 1621,
  "name": "Number of Sets of K Non-Overlapping Line Segments",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-sets-of-k-non-overlapping-line-segments",
  "relativeDir": "N/Number of Sets of K Non-Overlapping Line Segments",
  "slug": "1621-number-of-sets-of-k-non-overlapping-line-segments",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 45,
    "java": 22,
    "python": 14,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int MOD = 1e9+7;\r\n    int sumDyp(int n, int k, vector<vector<int>> &dp, vector<vector<int>> &sumDp)\r\n    {\r\n        if(n < 2)\r\n            return 0;\r\n        \r\n        if(sumDp[n][k] != -1)\r\n            return sumDp[n][k];\r\n        \r\n        sumDp[n][k] = ((sumDyp(n-1, k, dp, sumDp)%MOD) + (dyp(n, k, dp, sumDp)%MOD))%MOD;\r\n        return sumDp[n][k];\r\n    }\r\n        \r\n    int dyp(int n, int k, vector<vector<int>> &dp, vector<vector<int>> &sumDp)\r\n    {\r\n        if(n < 2)\r\n            return 0;\r\n        \r\n        if(dp[n][k] != -1)\r\n            return dp[n][k];\r\n        \r\n        if(k == 1)\r\n        {\r\n            dp[n][k] = ((((n-1)%MOD) * (n%MOD))%MOD)/2;\r\n            return dp[n][k];\r\n        }\r\n        \r\n        \r\n        int ans1 = dyp(n-1, k, dp, sumDp);\r\n        int ans2 = sumDyp(n-1, k-1, dp, sumDp);\r\n        \r\n        int ans = ((ans1%MOD) + (ans2%MOD))%MOD;\r\n        dp[n][k] = ans;\r\n        return ans;\r\n    }\r\n    \r\n    int numberOfSets(int n, int k) \r\n    {\r\n        vector<vector<int>> dp(n+1, vector<int>(k+1, -1));\r\n        vector<vector<int>> sumDp(n+1, vector<int>(k+1, -1));\r\n        return dyp(n, k, dp, sumDp);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numberOfSets(self, n: int, k: int) -> int:\r\n        MOD = 10**9 + 7\r\n        @lru_cache(None)\r\n        def dp(i, k, isStart):\r\n            if k == 0: return 1 # Found a way to draw k valid segments\r\n            if i == n: return 0 # Reach end of points\r\n            ans = dp(i+1, k, isStart) # Skip ith point\r\n            if isStart:\r\n                ans += dp(i+1, k, False) # Take ith point as start\r\n            else:\r\n                ans += dp(i, k-1, True) # Take ith point as end\r\n            return ans % MOD\r\n        return dp(0, k, True)",
    "java": "class Solution {\r\n    Integer[][][] memo;\r\n    int n;\r\n    public int numberOfSets(int n, int k) {\r\n        this.n = n;\r\n        this.memo = new Integer[n+1][k+1][2];\r\n        return dp(0, k, 1);\r\n    }\r\n    int dp(int i, int k, int isStart) {\r\n        if (memo[i][k][isStart] != null) return memo[i][k][isStart];\r\n        if (k == 0) return 1; // Found a way to draw k valid segments\r\n        if (i == n) return 0; // Reach end of points\r\n\r\n        int ans = dp(i+1, k, isStart); // Skip ith point\r\n        if (isStart == 1)\r\n            ans += dp(i+1, k, 0); // Take ith point as start\r\n        else\r\n            ans += dp(i, k-1, 1); // Take ith point as end\r\n\r\n        return memo[i][k][isStart] = ans % 1_000_000_007;\r\n    }\r\n}",
    "javascript": "var numberOfSets = function(n, k) {\r\n    return combinations(n+k-1,2*k)%(1e9+7)\r\n};\r\nvar combinations=(n,k)=>{\r\n    var dp=[...Array(n+1)].map(d=>[...Array(k+1)].map(d=>1))\r\n    for (let i = 1; i <=n; i++) \r\n        for (let k = 1; k <i; k++)\r\n            dp[i][k]=(dp[i-1][k-1]+dp[i-1][k]) %(1e9+7)     \r\n    return dp[n][k]\r\n}"
  }
}
