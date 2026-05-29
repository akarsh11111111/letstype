export default {
  "id": 122,
  "name": "Best Time to Buy and Sell Stock II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii",
  "relativeDir": "B/Best Time to Buy and Sell Stock II",
  "slug": "0122-best-time-to-buy-and-sell-stock-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 11,
    "python": 16,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 14 ms (Top 42.88%) | Memory: 13.1 MB (Top 59.50%)\r\nclass Solution {\r\npublic:\r\n    int maxProfit(vector<int>& prices) {\r\n        int n=prices.size();\r\n        int ans=0,currMin=prices[0];\r\n        for(int i=1;i<n;i++){\r\n            while(i<n && prices[i]>prices[i-1]){\r\n                i++;\r\n            }\r\n            ans+=(prices[i-1]-currMin);\r\n            currMin=prices[i];\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "\r\nclass Solution:\r\n    def maxProfit(self, prices: List[int]) -> int:\r\n        n=len(prices)\r\n        ans=0\r\n        want=\"valley\"\r\n        for i in range(n-1):\r\n            if want==\"valley\" and prices[i]<prices[i+1]:\r\n                ans-=prices[i]\r\n                want=\"hill\"\r\n            elif want==\"hill\" and prices[i]>prices[i+1]:\r\n                ans+=prices[i]\r\n                want=\"valley\"\r\n        if want==\"hill\":\r\n            ans+=prices[-1]\r\n        return ans",
    "java": "class Solution {\r\n    public int maxProfit(int[] prices) {\r\n        int n = prices.length,profit = 0;\r\n        for(int i=0;i<n-1;i++){\r\n            if(prices[i+1]>prices[i]){\r\n                profit += prices[i+1]-prices[i];\r\n            }\r\n        }\r\n        return profit;\r\n    }\r\n}",
    "javascript": "// Runtime: 102 ms (Top 35.16%) | Memory: 42.5 MB (Top 44.08%)\r\n/**\r\n * @param {number[]} prices\r\n * @return {number}\r\n */\r\nvar maxProfit = function(prices) {\r\n    let lowestNum = prices[0];\r\n    let highestNum = prices[0];\r\n    let profit = highestNum - lowestNum;\r\n\r\n    for(var indexI=1; indexI<prices.length; indexI++) {\r\n      if(prices[indexI] < prices[indexI - 1]) {\r\n          lowestNum = prices[indexI];\r\n      }\r\n      if(prices[indexI] > lowestNum) {\r\n        lowestNum = prices[indexI - 1];\r\n        profit = profit + prices[indexI] - lowestNum;\r\n          highestNum = prices[indexI];\r\n      }\r\n    }\r\n\r\n    return profit;\r\n};"
  }
}
