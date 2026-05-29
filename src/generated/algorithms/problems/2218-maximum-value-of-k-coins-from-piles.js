export default {
  "id": 2218,
  "name": "Maximum Value of K Coins From Piles",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-value-of-k-coins-from-piles",
  "relativeDir": "M/Maximum Value of K Coins From Piles",
  "slug": "2218-maximum-value-of-k-coins-from-piles",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 24,
    "python": 22,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 348 ms (Top 76.94%) | Memory: 19.6 MB (Top 26.02%)\r\nclass Solution {\r\npublic:\r\n   int dp[1001][2001]; //Dp array For Memoization.\r\n   int solve(vector<vector<int>>&v,int index,int coin)\r\n   {\r\n       if(index>=v.size()||coin==0) //Base Condition\r\n           return 0;\r\n       if(dp[index][coin]!=-1) //Check wheather It is Already Calculated Or not.\r\n           return dp[index][coin];\r\n\r\n       /* Our 1st choice :- We not take any Coin from that pile*/\r\n       int ans=solve(v,index+1,coin); //Just Call function for next Pile.\r\n\r\n       /*Otherwise we can take Coins from that Pile.*/\r\n       int loop=v[index].size()-1;\r\n       int sum=0;\r\n\r\n       for(int j=0;j<=min(coin-1,loop);j++) //\r\n       {\r\n           sum=sum+v[index][j];\r\n           ans=max(ans,sum+solve(v,index+1,coin-(j+1)));\r\n\r\n           /*Aove we Pass coin-(j+1). Because till j'th index we have taken j+1 coin from that pile.*/\r\n       }\r\n\r\n       return dp[index][coin]=ans;\r\n   }\r\n   int maxValueOfCoins(vector<vector<int>>& piles, int k) {\r\n       memset(dp,-1,sizeof(dp));\r\n       return solve(piles,0,k);\r\n   }\r\n};",
    "python": "class Solution:\r\n    def maxValueOfCoins(self, piles: List[List[int]], k: int) -> int:\r\n        n = len(piles)\r\n        prefixSum = []\r\n        for i in range(n):\r\n            temp = [0]\r\n            for j in range(len(piles[i])):\r\n                temp.append(temp[-1] + piles[i][j])\r\n            prefixSum.append(temp)\r\n            \r\n        dp = [[0] * (k + 1) for _ in range(n)]\r\n        for j in range(1, k + 1):\r\n            if j < len(prefixSum[0]):\r\n                dp[0][j] = prefixSum[0][j]\r\n        \r\n        for i in range(1, n):\r\n            for j in range(1, k + 1):\r\n                for l in range(len(prefixSum[i])):\r\n                    if l > j:\r\n                        break\r\n                    dp[i][j] = max(dp[i][j], prefixSum[i][l] + dp[i - 1][j - l])\r\n        return dp[n - 1][k]",
    "java": "// Runtime: 223 ms (Top 73.40%) | Memory: 55.8 MB (Top 38.07%)\r\nclass Solution {\r\n    public int maxValueOfCoins(List<List<Integer>> piles, int k) {\r\n        int n = piles.size();\r\n        int[][] ans = new int[n+1][2001];\r\n        Collections.sort(piles, (List<Integer> a, List<Integer> b) -> b.size() - a.size());\r\n        for(int i = 1; i <= k; i++) {\r\n            for(int j = 1; j <= n; j++) {\r\n                int sizeOfPile = piles.get(j-1).size();\r\n                List<Integer> pile = piles.get(j-1);\r\n                int sum = 0;\r\n                ans[j][i] = ans[j-1][i];\r\n                for(int l = 1; l <= Math.min(i, sizeOfPile); l++) {\r\n                    // Take K from this pile + remaining from previous piles\r\n                    sum += pile.get(l-1);\r\n                    int rem = i - l;\r\n                    ans[j][i] = Math.max(ans[j][i], sum + ans[j-1][rem]);\r\n                }\r\n            }\r\n        }\r\n\r\n        return ans[n][k];\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[][]} piles\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar maxValueOfCoins = function(piles, k) {\r\n    var n = piles.length;\r\n    var cache = {};\r\n    \r\n    var getMax = function(i, k) {\r\n        if (i >= n || k <= 0) return 0;\r\n        var key = i + ',' + k;\r\n        if (cache[key] !== undefined) return cache[key];\r\n        var ans = getMax(i + 1, k);\r\n        var cur = 0;\r\n        \r\n        for (var j = 0; j < piles[i].length && j < k; j++) {\r\n            cur+=piles[i][j];\r\n            ans = Math.max(ans, cur + getMax(i + 1, k - j - 1));\r\n        }\r\n        \r\n        return cache[key] = ans;\r\n    }\r\n    \r\n    return getMax(0, k);\r\n};"
  }
}
