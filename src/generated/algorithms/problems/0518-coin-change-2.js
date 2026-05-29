export default {
  "id": 518,
  "name": "Coin Change 2",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/coin-change-2",
  "relativeDir": "C/Coin Change 2",
  "slug": "0518-coin-change-2",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 13,
    "python": 11,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int change(int amount, vector<int>& coins) \r\n    {\r\n\t\tif(amount == 0)\r\n            return 1;\r\n        int dp[coins.size()+1][amount+1];\r\n\t\tmemset(dp, 0, sizeof(dp));\r\n        for(int i = 0; i <= coins.size(); i++)\r\n            dp[i][0] = 1;\r\n        for(int i = 1; i <= coins.size(); i++)\r\n        {\r\n            for(int j = 1; j <= amount; j++)\r\n            {\r\n                if(j < coins[i-1])\r\n                    dp[i][j] = dp[i-1][j];\r\n                else\r\n                    dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]];\r\n            }\r\n        }\r\n        return dp[coins.size()][amount];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def change(self, amount: int, coins: List[int]) -> int:\r\n        leng = len(coins)\r\n        def dfs(amount, start):\r\n            if amount == 0: return 1\r\n            elif amount < 0: return 0\r\n            res = 0\r\n            for i in range(start, leng):\r\n                res += dfs(amount - coins[i], i)\r\n            return res\r\n        return dfs(amount, 0)",
    "java": "class Solution {\r\n    public int change(int amount, int[] coins) {\r\n        int[] dp = new int[amount + 1];\r\n        // for each coin iteration : dp[i] = number of coins required to make i with coins [0...coin]\r\n        dp[0] = 1;\r\n        for(int coin : coins) {\r\n            for(int i = coin; i <= amount; i++) {\r\n                dp[i] += dp[i-coin];\r\n            }\r\n        }\r\n        return dp[amount];\r\n    }\r\n}",
    "javascript": "var change = function(amount, coins) {\r\n\tconst dp = Array(amount + 1).fill(0);\r\n\tdp[0] = 1;\r\n\r\n\tcoins.forEach(coin => {\r\n\t\tfor (let num = coin; num <= amount; num++) {\r\n\t\t\tdp[num] += dp[num - coin];\r\n\t\t}\r\n\t});\r\n\treturn dp[amount];\r\n};"
  }
}
