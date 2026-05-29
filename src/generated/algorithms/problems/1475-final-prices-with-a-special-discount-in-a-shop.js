export default {
  "id": 1475,
  "name": "Final Prices With a Special Discount in a Shop",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop",
  "relativeDir": "F/Final Prices With a Special Discount in a Shop",
  "slug": "1475-final-prices-with-a-special-discount-in-a-shop",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 14,
    "python": 10,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 10.20 MB (Top 89.83%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> finalPrices(vector<int>& prices) {\r\n        vector<int> res;\r\n        for(int i=0;i<prices.size();i++)\r\n        {\r\n            res.push_back(prices[i]);\r\n            for(int j=i+1;j<prices.size();j++)\r\n            {\r\n                if(prices[j]<=prices[i])\r\n                {\r\n                    res[i] = prices[i]-prices[j];\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 47 ms (Top 83.49%) | Memory: 16.60 MB (Top 61.19%)\r\n\r\nclass Solution:\r\n    def finalPrices(self, prices: List[int]) -> List[int]:\r\n        for i in range(len(prices)):\r\n          for j in range(i+1,len(prices)):\r\n            if prices[j]<=prices[i]:\r\n              prices[i]=prices[i]-prices[j]\r\n              break\r\n        return (prices)",
    "java": "// Runtime: 4 ms (Top 50.03%) | Memory: 44.5 MB (Top 32.12%)\r\nclass Solution {\r\n    public int[] finalPrices(int[] prices) {\r\n        for(int i = 0; i < prices.length; i++){\r\n            for(int j = i + 1; j < prices.length; j++){\r\n                if(j > i && prices[j] <= prices[i]){\r\n                    prices[i] -= prices[j];\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        return prices;\r\n    }\r\n}",
    "javascript": "var finalPrices = function(prices) {\r\n    let adjPrices = [];\r\n    while(prices.length) {\r\n        let currentPrice = prices[0];\r\n        \r\n        // Remove first price in original array\r\n        // Since we're looking for a price less than or equal to\r\n        prices.shift();\r\n        \r\n        let lowerPrice = prices.find((a) => a <= currentPrice);\r\n        adjPrices.push(lowerPrice ? currentPrice - lowerPrice : currentPrice);\r\n    }\r\n    \r\n    return adjPrices;\r\n};"
  }
}
