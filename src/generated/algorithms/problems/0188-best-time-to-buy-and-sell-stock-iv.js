export default {
  "id": 188,
  "name": "Best Time to Buy and Sell Stock IV",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv",
  "relativeDir": "B/Best Time to Buy and Sell Stock IV",
  "slug": "0188-best-time-to-buy-and-sell-stock-iv",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 36,
    "python": 9,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 18 ms (Top 56.69%) | Memory: 13.1 MB (Top 35.45%)\r\nclass Solution {\r\npublic:\r\n    int solve(int ind, int buy, int k, vector<int>& prices, vector<vector<vector<int>>>& dp){\r\n        if(k==0 || ind==prices.size()) return 0;\r\n        if(dp[ind][buy][k] != -1) return dp[ind][buy][k];\r\n        if(buy){\r\n            return dp[ind][buy][k] = max(-prices[ind]+solve(ind+1, 0, k, prices, dp), solve(ind+1, 1, k, prices, dp));\r\n        }\r\n        return dp[ind][buy][k] = max(prices[ind]+solve(ind+1, 1, k-1, prices, dp), solve(ind+1, 0, k, prices, dp));\r\n    }\r\n    int maxProfit(int k, vector<int>& prices) {\r\n        vector<vector<vector<int>>> dp(prices.size(), vector<vector<int>> (2, vector<int> (k+1, -1)));\r\n        return solve(0, 1, k, prices, dp);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxProfit(self, k: int, prices: List[int]) -> int:\r\n        buy = [-inf] * (k+1)\r\n        sell = [0] * (k+1)\r\n        for price in prices:\r\n            for i in range(1,k+1):\r\n                    buy[i] = max(buy[i],sell[i-1]-price)\r\n                    sell[i] = max(sell[i],buy[i]+price)\r\n        return sell[-1]",
    "java": "class Solution {\r\n    public int maxProfit(int k, int[] prices) {\r\n        int transaction = k;\r\n        int N = prices.length;\r\n        int[][][]dp =new int[N][2][k+1];\r\n        for(int i=0;i<N;i++){\r\n            for(int j =0;j<2;j++){\r\n                for(int tran=0;tran<=k;tran++){\r\n                    dp[i][j][tran] = -1;\r\n                }\r\n            }\r\n        }//init dp\r\n        return profit(0,1,k,prices,dp);\r\n    }\r\n    int profit(int index, int buy, int transaction , int[]prices, int[][][]dp){\r\n        if(transaction == 0){\r\n            return 0;\r\n        }\r\n        if(index == prices.length){\r\n            return 0;\r\n        }\r\n        if(dp[index][buy][transaction] != -1){\r\n            return dp[index][buy][transaction];\r\n        }\r\n        int profit =0;\r\n        if(buy == 1){\r\n            profit = Math.max(-prices[index] + profit(index+1,0,transaction,prices,dp),\r\n                               0 + profit(index+1,1,transaction,prices,dp));\r\n        }else{\r\n            profit = Math.max(prices[index] + profit(index+1,1,transaction-1,prices,dp),\r\n                              0 + profit(index+1, 0, transaction,prices,dp));\r\n        }\r\n        dp[index][buy][transaction] = profit;\r\n        return dp[index][buy][transaction];\r\n    }\r\n}",
    "javascript": "// Runtime: 121 ms (Top 56.75%) | Memory: 44.9 MB (Top 48.84%)\r\nvar maxProfit = function(k, prices) {\r\n    const len = prices.length;\r\n    let dp = new Array(len).fill(0);\r\n    dp = dp.map(() => new Array(2).fill(0).map(() => new Array(k+1).fill(-1)));\r\n    const solve = (day = 0, cap = k, buy = 0) => {\r\n        if(day == len || cap == 0) return 0;\r\n\r\n        if(dp[day][buy][cap] != -1) return dp[day][buy][cap];\r\n\r\n        let take, notake;\r\n        notake = solve(day + 1, cap, buy);\r\n        if(buy == 0) {\r\n            take = solve(day + 1, cap, 1) - prices[day];\r\n        } else {\r\n            take = solve(day + 1, cap - 1, 0) + prices[day];\r\n        }\r\n        return dp[day][buy][cap] = Math.max(take, notake)\r\n    };\r\n    return solve();\r\n};"
  }
}
