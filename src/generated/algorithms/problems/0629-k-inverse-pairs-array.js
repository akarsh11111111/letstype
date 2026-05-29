export default {
  "id": 629,
  "name": "K Inverse Pairs Array",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/k-inverse-pairs-array",
  "relativeDir": "K/K Inverse Pairs Array",
  "slug": "0629-k-inverse-pairs-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 21,
    "python": 21,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int mod = (int)(1e9 + 7);\r\n    int dp[1001][1001] = {};\r\n    \r\n    int kInversePairs(int n, int k) {\r\n        //base case\r\n        if(k<=0) return k==0;\r\n        \r\n        if(dp[n][k]==0){\r\n            dp[n][k] = 1;\r\n            \r\n            for(int i=0; i<n; i++){\r\n                dp[n][k] = (dp[n][k] + kInversePairs(n-1,k-i))%mod;\r\n            }\r\n        }\r\n        return dp[n][k]-1;\r\n    }\r\n};",
    "python": "// Runtime: 185 ms (Top 92.81%) | Memory: 17.30 MB (Top 67.63%)\r\n\r\nclass Solution:\r\n                        # A very good description of the dp solution is at\r\n                        # https://leetcode.com/problems/k-inverse-pairs-array/solution/ \r\n                        # The code below uses two 1D arrays--dp and tmp--instead if a \r\n                        # 2D array. tmp replaces dp after each i-iteration.\r\n    def kInversePairs(self, n: int, k: int) -> int:\r\n        dp, mod = [1]+[0] * k, 1000000007\r\n        \r\n        for i in range(n):\r\n            tmp, sm = [], 0\r\n            for j in range(k + 1):\r\n                sm+= dp[j]\r\n                if j-i >= 1: sm-= dp[j-i-1]\r\n                sm%= mod\r\n                tmp.append(sm)\r\n            dp = tmp\r\n            #print(dp)       # <-- uncomment this line to get a sense of dp from the print output\r\n\t\t\t                 #     try n = 6, k = 4; your answer should be 49.\r\n        return dp[k]",
    "java": "// Runtime: 28 ms (Top 65.12%) | Memory: 47.8 MB (Top 52.38%)\r\nclass Solution {\r\n    public int kInversePairs(int n, int k) {\r\n        int MOD = 1000000007;\r\n        int[][] opt = new int[k + 1][n];\r\n        for (int i = 0; i <= k; i++) {\r\n            for (int j = 0; j < n; j++) {\r\n                if (i == 0) {\r\n                    opt[i][j] = 1;\r\n                } else if (j > 0) {\r\n                    opt[i][j] = (opt[i - 1][j] + opt[i][j - 1]) % MOD;\r\n                    if (i >= j + 1) {\r\n                        opt[i][j] = (opt[i][j] - opt[i - j - 1][j - 1] + MOD) % MOD;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        return opt[k][n - 1];\r\n    }\r\n}",
    "javascript": "// Runtime: 191 ms (Top 53.06%) | Memory: 77.6 MB (Top 21.02%)\r\nvar kInversePairs = function(n, k) {\r\n    const dp = new Array(n+1).fill(0).map(el => new Array(k+1).fill(0))\r\n    const MOD = Math.pow(10, 9) + 7\r\n\r\n    for(let i = 0; i < n+1; i++) {\r\n        dp[i][0] = 1\r\n    }\r\n\r\n    for(let i = 1; i <= n; i++) {\r\n        for(let j = 1; j <= k; j++) {\r\n            dp[i][j] = (dp[i][j-1] + dp[i-1][j] % MOD) - (j >= i ? dp[i-1][j-i] : 0)%MOD\r\n        }\r\n    }\r\n\r\n    return dp[n][k] % MOD\r\n};"
  }
}
