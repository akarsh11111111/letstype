export default {
  "id": 123,
  "name": "Best Time to Buy and Sell Stock III",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii",
  "relativeDir": "B/Best Time to Buy and Sell Stock III",
  "slug": "0123-best-time-to-buy-and-sell-stock-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 35,
    "python": 10,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxProfit(vector<int>& prices) {\r\n        int n=prices.size();\r\n        vector<int> left(n);\r\n        vector<int> right(n);\r\n        int mini=INT_MAX;\r\n        int ans1=0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            mini=min(mini,prices[i]);\r\n            ans1=max(ans1,prices[i]-mini);\r\n            left[i]=ans1;\r\n        }\r\n        int maxi=INT_MIN;\r\n        int ans2=0;\r\n        for(int i=n-1;i>=0;i--)\r\n        {\r\n            maxi=max(maxi,prices[i]);\r\n            ans2=max(ans2,maxi-prices[i]);\r\n            right[i]=ans2;\r\n        }\r\n        int ans3=0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            ans3=max(ans3,left[i]+right[i]);\r\n        }\r\n        return ans3;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxProfit(self, prices: List[int]) -> int:\r\n        buy1, sell1, buy2, sell2 = -inf,0,-inf,0\r\n        for price in prices:\r\n            buy1 = max(buy1,-price)\r\n            sell1 = max(sell1,price+buy1)\r\n            \r\n            buy2 = max(buy2,sell1-price)\r\n            sell2 = max(sell2,price+buy2)\r\n        return sell2",
    "java": "class Solution {\r\n    public int maxProfit(int[] prices) {\r\n        \r\n       int n = prices.length;\r\n        int maxSellProfit = 0;\r\n        int min = prices[0];\r\n        int[] maxSellArr = new int[n];\r\n        int i = 1;\r\n        \r\n        while(i < n){\r\n            if(prices[i] < min){\r\n                min = prices[i];\r\n            }\r\n            maxSellArr[i] = Math.max(maxSellArr[i-1],prices[i] - min);  \r\n            \r\n            i++;\r\n        }\r\n        int[] maxBuyArr = new int[n];\r\n        int j = n-2;\r\n        int max = prices[n-1];\r\n        while(j >= 0){\r\n            if(prices[j] > max){\r\n                max = prices[j];\r\n            }\r\n            maxBuyArr[j] = Math.max(maxBuyArr[j+1],max - prices[j]);\r\n            \r\n            j--;\r\n        }\r\n        int maxProfitTwoTrans = 0;\r\n        for(int k = 0; k < n; k++){\r\n            maxProfitTwoTrans = Math.max(maxProfitTwoTrans,maxBuyArr[k] + maxSellArr[k]);\r\n        }\r\n        return maxProfitTwoTrans;\r\n    }\r\n}",
    "javascript": "var maxProfit = function(prices) {\r\n  if(prices.length == 0) return 0\r\n  \r\n  let dp = new Array(prices.length).fill(0);\r\n  let min = prices[0];\r\n  let max = 0;\r\n  for (let i = 1; i < prices.length; i++) {\r\n    min = Math.min(min, prices[i]);  // or Math.min(min, prices[i] - dp[i]) , FYI: dp[i] is 0\r\n    max = Math.max(max, prices[i] - min);\r\n    dp[i] = max;\r\n  }\r\n  \r\n  // 1st run dp = [0,0,2,2,2,3,3,4];\r\n  \r\n  min = prices[0];\r\n  max = 0;\r\n  for (let i = 1; i < prices.length; i++) {\r\n    min = Math.min(min, prices[i] - dp[i]); // substract dp[i]  = current price - what profit we made during 1st run.\r\n    max = Math.max(max, prices[i] - min);\r\n    dp[i] = max;\r\n  }\r\n  \r\n  // 2nd run dp = [0,0,2,2,2,5,5,6];\r\n  \r\n  return dp.pop();\r\n};"
  }
}
