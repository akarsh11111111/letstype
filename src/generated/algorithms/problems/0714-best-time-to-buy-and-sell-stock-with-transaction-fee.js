export default {
  "id": 714,
  "name": "Best Time to Buy and Sell Stock with Transaction Fee",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee",
  "relativeDir": "B/Best Time to Buy and Sell Stock with Transaction Fee",
  "slug": "0714-best-time-to-buy-and-sell-stock-with-transaction-fee",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 30,
    "python": 19,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 82 ms (Top 75.08%) | Memory: 55.60 MB (Top 64.82%)\r\n\r\nclass Solution {\r\npublic:\r\n    int maxProfit(vector<int>& prices, int fee) {\r\n        int buy = INT_MIN;\r\n        int sell = 0;\r\n\r\n        for (int price : prices) {\r\n            buy = max(buy, sell - price);\r\n            sell = max(sell, buy + price - fee);\r\n        }\r\n\r\n        return sell;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxProfit(self, prices: List[int], fee: int) -> int:\r\n        n = len(prices)\r\n        lookup = {}\r\n        def f(ind, buy, lookup):\r\n            \r\n            if ind == n: return 0\r\n            \r\n            if (ind, buy) in lookup: return lookup[(ind, buy)]\r\n            profit = 0\r\n            if buy:\r\n                profit = max(-prices[ind] + f(ind+1,0,lookup), f(ind+1, 1,lookup))\r\n            else:\r\n                profit = max(prices[ind] + f(ind+1,1,lookup) - fee, f(ind+1, 0,lookup))\r\n                \r\n            lookup[(ind,buy)] = profit\r\n            return lookup[(ind,buy)]\r\n        \r\n        return f(0, 1,lookup)",
    "java": "// Runtime: 48 ms (Top 22.74%) | Memory: 58.7 MB (Top 87.06%)\r\nclass Solution {\r\n    public int maxProfit(int[] prices, int fee) {\r\n        int[][] dp = new int[prices.length][2];\r\n        for (int[] a : dp) {\r\n            a[0] = -1;\r\n            a[1] = -1;\r\n        }\r\n        return profit(prices, fee, 0, 1, dp);\r\n    }\r\n    public int profit(int[] prices, int fee, int i, int buy, int[][] dp) {\r\n        if (i == prices.length) {\r\n            return 0;\r\n        }\r\n        if (dp[i][buy] != -1) {\r\n            return dp[i][buy];\r\n        }\r\n        int maxProfit = 0;\r\n        if (buy == 1) {\r\n            int yesBuy = profit(prices, fee, i + 1, 0, dp) - prices[i];\r\n            int noBuy = profit(prices, fee, i + 1, 1, dp);\r\n            maxProfit = Math.max(yesBuy, noBuy);\r\n        } else {\r\n            int yesSell = prices[i] - fee + profit(prices, fee, i + 1, 1, dp);\r\n            int noSell = profit(prices, fee, i + 1, 0, dp);\r\n            maxProfit = Math.max(yesSell, noSell);\r\n        }\r\n        return dp[i][buy] = maxProfit;\r\n    }\r\n}",
    "javascript": "// Runtime: 108 ms (Top 71.63%) | Memory: 49.5 MB (Top 46.05%)\r\n/**\r\n * @param {number[]} prices\r\n * @param {number} fee\r\n * @return {number}\r\n */\r\nvar maxProfit = function(prices, fee) {\r\n    let purchase = -1*prices[0];//If we purchase on 0th day\r\n    let sell=0;//If we sell on 0th day\r\n    let prevPurchase;\r\n    for(let i=1;i<prices.length;i++){\r\n        prevPurchase = purchase;\r\n        purchase = Math.max(purchase,sell-prices[i]);//If we purchase on ith day\r\n        sell = Math.max(sell,prevPurchase+prices[i]-fee);//If we sell on ith day\r\n    }\r\n    return sell;//If must return the best price whenever we sold stock because then only we can be at max profit.\r\n};"
  }
}
