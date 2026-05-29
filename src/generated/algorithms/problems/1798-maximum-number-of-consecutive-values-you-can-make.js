export default {
  "id": 1798,
  "name": "Maximum Number of Consecutive Values You Can Make",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make",
  "relativeDir": "M/Maximum Number of Consecutive Values You Can Make",
  "slug": "1798-maximum-number-of-consecutive-values-you-can-make",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 19,
    "python": 16,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int getMaximumConsecutive(vector<int>& coins) {\r\n        sort(coins.begin(), coins.end());\r\n        int n = coins.size();\r\n        int ans = 1;\r\n        for(int i = 0; i < n; i++) {\r\n            if(coins[i] > ans) return ans;\r\n            ans += coins[i]; \r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 576 ms (Top 97.83%) | Memory: 23.00 MB (Top 5.22%)\r\n\r\nclass Solution:\r\n    def getMaximumConsecutive(self, coins: List[int]) -> int:\r\n        cur_max = 0\r\n        coins.sort()\r\n      \r\n        for coin in coins:\r\n            if coin == 1:\r\n                cur_max += 1\r\n            elif coin <= cur_max+1:\r\n                cur_max += coin\r\n            else: #coin > cur_max + 1\r\n                break\r\n        \r\n        return cur_max+1",
    "java": "class Solution {\r\n    public int getMaximumConsecutive(int[] coins) {\r\n      if(coins.length==0 && coins==null)\r\n          return 0;\r\n      TreeMap<Integer,Integer> map=new TreeMap<Integer,Integer>();\r\n      for(int i:coins)\r\n          map.put(i,map.getOrDefault(i,0)+1);\r\n      int range=0;\r\n      for(int i:map.keySet()){\r\n       if(range==0 && i==1)\r\n       range=i*map.get(i);\r\n       else if(range!=0 && range+1>=i)\r\n         range+=i*map.get(i);\r\n       else \r\n        break;\r\n      }\r\n     return range+1;\r\n    }\r\n}",
    "javascript": "// Runtime: 134 ms (Top 91.67%) | Memory: 59.20 MB (Top 25.0%)\r\n\r\nvar getMaximumConsecutive = function(coins) {\r\n    coins.sort((a, b) => a - b);\r\n    let maxConsec = 1;\r\n    \r\n    for(let num of coins) {\r\n        if(num <= maxConsec) maxConsec += num;\r\n    }\r\n    return maxConsec;    \r\n};"
  }
}
