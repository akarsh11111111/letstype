export default {
  "id": 322,
  "name": "Coin Change",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/coin-change",
  "relativeDir": "C/Coin Change",
  "slug": "0322-coin-change",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 1,
    "java": 37,
    "python": 27,
    "javascript": 1
  },
  "languages": {
    "cpp": "dfs(total)",
    "python": "// Runtime: 724 ms (Top 91.98%) | Memory: 17.70 MB (Top 44.11%)\r\n\r\nclass Solution:\r\n    def coinChange(self, coins: List[int], amount: int) -> int:\r\n        numCoins = len(coins)\r\n        \r\n        # Values in this array equal the number of coins needed to achieve the cost of the index\r\n        minCoins = [amount + 1] * (amount + 1)\r\n        minCoins[0] = 0\r\n        \r\n        # Loop through every needed amount\r\n        for i in range(amount + 1):\r\n            # Loop through every coin value\r\n            for coin in coins:\r\n                # Check that the coin is not bigger than the current amount\r\n                if coin <= i:\r\n                    # minCoins[i]: number of coins needed to make amount i\r\n                    # minCoins[i-coin]: number of coins needed to make the amount before adding \r\n                    #                   the current coin to it (+1 to add the current coin)\r\n                    minCoins[i] = min(minCoins[i], minCoins[i-coin] + 1)\r\n        \r\n        # Check if any combination of coins was found to create the amount\r\n        if minCoins[amount] == amount + 1:\r\n            return -1\r\n        \r\n        # Return the optimal number of coins to create the amount\r\n        return minCoins[amount]",
    "java": "// Runtime: 19 ms (Top 47.6%) | Memory: 43.93 MB (Top 22.2%)\r\n\r\nclass Solution {\r\n    public int coinChange(int[] coins, int amount) {\r\n        int m=coins.length,n=amount;\r\n        int dp[][]=new int[m+1][n+1];\r\n        for(int j=0;j<=n;j++){\r\n            dp[0][j]=0;\r\n        }\r\n          for(int i=0;i<=m;i++){\r\n            dp[i][0]=0;\r\n        }\r\n        for(int i=1;i<=m;i++){\r\n            for(int j=1;j<=n;j++){\r\n               int t1 = Integer.MAX_VALUE;\r\n        if ((i-1) == 0) {\r\n            if (j % coins[i-1] == 0) {\r\n                dp[i][j]= j / coins[i-1];\r\n            } else {\r\n                dp[i][j]= (int)1e9;\r\n            }\r\n        } \r\n        else {\r\n            int t2 = dp[i-1][j];\r\n        if (coins[i-1] <= j) {\r\n            t1 = dp[i][j-coins[i-1]] + 1; \r\n        }\r\n                dp[i][j]= Math.min(t1, t2);\r\n        }\r\n            }\r\n        }\r\n          if(dp[m][n]>=1e9)\r\n        return -1;\r\n        else\r\n        return dp[m][n];\r\n        }\r\n    }",
    "javascript": "dfs(total)"
  }
}
