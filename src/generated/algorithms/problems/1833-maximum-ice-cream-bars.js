export default {
  "id": 1833,
  "name": "Maximum Ice Cream Bars",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-ice-cream-bars",
  "relativeDir": "M/Maximum Ice Cream Bars",
  "slug": "1833-maximum-ice-cream-bars",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 22,
    "python": 11,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxIceCream(vector<int>& costs, int coins) {\r\n        int n=costs.size();\r\n\r\n        sort(costs.begin(),costs.end());\r\n        \r\n        int i=0;\r\n        for(;i<n && coins>=costs[i];i++){\r\n            coins-=costs[i];\r\n        }\r\n        \r\n        return i;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxIceCream(self, costs: List[int], coins: int) -> int:\r\n        costs.sort()\r\n        i= 0\r\n        for price in costs:\r\n            if price<= coins:\r\n                i+= 1\r\n                coins-= price\r\n            else:\r\n                break\r\n        return i",
    "java": "// Runtime: 44 ms (Top 62.29%) | Memory: 74.7 MB (Top 66.20%)\r\nclass Solution {\r\n    public int maxIceCream(int[] costs, int coins) {\r\n\r\n        //Greedy Approach\r\n        //a. sort cost in increasing order\r\n\r\n        Arrays.sort(costs);\r\n\r\n        int count = 0;\r\n        for(int cost : costs){\r\n\r\n            //b. check remainig coin is greater or equal than cuurent ice - cream cost\r\n            if(coins - cost >= 0) {\r\n                coins -= cost;\r\n                count++;\r\n            }\r\n        }\r\n\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 421 ms (Top 13.84%) | Memory: 55.5 MB (Top 89.23%)\r\nvar maxIceCream = function(costs, coins) {\r\n  costs.sort((a, b) => a - b);\r\n  let count = 0;\r\n\r\n  for (let i = 0; i < costs.length; i++) {\r\n    if (costs[i] <= coins) {\r\n      count++;\r\n      coins -= costs[i]\r\n    } else {\r\n      break; // a small optimization, end the loop early if coins go down to zero before we reach end of the length of costs.\r\n    }\r\n  }\r\n  return count;\r\n};"
  }
}
