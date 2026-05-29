export default {
  "id": 309,
  "name": "Best Time to Buy and Sell Stock with Cooldown",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown",
  "relativeDir": "B/Best Time to Buy and Sell Stock with Cooldown",
  "slug": "0309-best-time-to-buy-and-sell-stock-with-cooldown",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 25,
    "python": 42,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\n public:\r\n  int maxProfit(vector<int>& prices) {\r\n    int n = prices.size();\r\n    int ans = 0;\r\n    vector<int> dp(n, 0);\r\n    for (int i = 1; i < n; ++i) {\r\n      int max_dp = 0;\r\n      for (int j = 0; j < i; ++j) {\r\n        dp[i] = max(dp[i], prices[i] - prices[j] + max_dp);\r\n        max_dp = max(max_dp, j > 0 ? dp[j - 1] : 0);\r\n      }\r\n      ans = max(ans, dp[i]);\r\n    }\r\n    return ans;\r\n  }\r\n};",
    "python": "class Solution:\r\n    def maxProfit(self, prices: List[int]) -> int:\r\n        \r\n        \r\n        cache = {}\r\n        def dfs(i, buying):\r\n            \r\n            if i >= len(prices):\r\n                return 0\r\n            \r\n            if (i, buying) in cache:\r\n                return cache[(i, buying)]\r\n            \r\n            if buying:\r\n                # if have sell the share in previous step\r\n                # then currently we have two options\r\n                # either buy or not buy(cooldown)\r\n                \r\n                # we have bought so, increment the index and set buying flag to not buying\r\n                # and don't forget that we bought so, we have to reduce that share amount from profit\r\n                buy = dfs(i+1, not buying) - prices[i] \r\n                \r\n                cooldown = dfs(i+1, buying)\r\n                \r\n                profit = max( buy, cooldown )\r\n                cache[(i, buying)] = profit\r\n                \r\n            else:\r\n                # we have sell the share so, \r\n                # we cannot buy next share we have to skip the next price(cooldown for one day)\r\n                # set (not buying) flag to buying\r\n                # we also have to add that share price to profit\r\n                sell = dfs(i+2, not buying) + prices[i] \r\n                \r\n                cooldown = dfs(i+1, buying)\r\n                \r\n                profit = max( sell, cooldown )\r\n                cache[(i, buying)] = profit\r\n                \r\n            return cache[(i,  buying)]\r\n        \r\n        return dfs(0, True)",
    "java": "// Runtime: 2 ms (Top 55.13%) | Memory: 42.3 MB (Top 47.48%)\r\nclass Solution {\r\n    public int maxProfit(int[] prices) {\r\n\r\n        int n = prices.length;\r\n\r\n        int[][] dp = new int[n+2][2];\r\n\r\n        for(int index = n-1; index>=0; index--){\r\n            for(int buy = 0; buy<=1; buy++){\r\n\r\n                int profit = 0;\r\n\r\n                if(buy == 0){ // buy stocks\r\n                    profit = Math.max(-prices[index] + dp[index+1][1], 0 + dp[index+1][0]);\r\n                }\r\n                if(buy == 1){ // we can sell stocks\r\n                    profit = Math.max(prices[index] + dp[index+2][0], 0 + dp[index+1][1]);\r\n                }\r\n                dp[index][buy] = profit;\r\n            }\r\n        }\r\n        return dp[0][0];\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} prices\r\n * @return {number}\r\n */\r\nvar maxProfit = function(prices) {\r\n    let dp = {};\r\n    let recursiveProfit = (index,buy) =>{\r\n        if(index>=prices.length){\r\n            return 0;\r\n        }\r\n        if(dp[index+'_'+buy]) return dp[index+'_'+buy]\r\n        if(buy){\r\n            dp[index+'_'+buy] = Math.max(-prices[index]+recursiveProfit(index+1,0), 0+recursiveProfit(index+1,1))\r\n            return dp[index+'_'+buy];\r\n        }\r\n        else{\r\n            dp[index+'_'+buy]= Math.max(prices[index]+recursiveProfit(index+2,1),0+recursiveProfit(index+1,0))\r\n            return dp[index+'_'+buy];\r\n        }\r\n    }\r\n    return recursiveProfit(0,1);\r\n};"
  }
}
