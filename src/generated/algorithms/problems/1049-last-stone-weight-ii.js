export default {
  "id": 1049,
  "name": "Last Stone Weight II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/last-stone-weight-ii",
  "relativeDir": "L/Last Stone Weight II",
  "slug": "1049-last-stone-weight-ii",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "python": 14,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int lastStoneWeightII(vector<int>& stones) {\r\n        int n=stones.size();\r\n        int sum=0;\r\n        for(int i=0;i<n;i++){\r\n            sum+=stones[i];\r\n        }\r\n        \r\n        int dp[n+1][sum+1];\r\n        for(int i=0;i<n+1;i++){\r\n            for(int j=0;j<sum+1;j++){\r\n                if(i==0)\r\n                    dp[i][j]=0;\r\n                if(j==0)\r\n                    dp[i][j]=1;\r\n            }\r\n        }\r\n        for(int i=1;i<n+1;i++){\r\n            for(int j=1;j<sum+1;j++){\r\n                if(stones[i-1]<=j){\r\n                    dp[i][j]=dp[i-1][j-stones[i-1]] || dp[i-1][j];\r\n                }\r\n                else\r\n                    dp[i][j]=dp[i-1][j];\r\n            }\r\n        }\r\n        vector<int>v;\r\n        for(int i=0;i<=sum/2;i++){\r\n            if(dp[n][i]==1)\r\n                v.push_back(i);\r\n        }\r\n        int mn=INT_MAX;\r\n        for(int i=0;i<v.size();i++){\r\n            mn=min(mn,sum-2*v[i]);\r\n        }\r\n        return mn;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def lastStoneWeightII(self, stones: List[int]) -> int:\r\n        if len(stones) == 1: return stones[0]\r\n        total = sum(stones)\r\n        half, leng =  total// 2, len(stones)\r\n        dp = [[0] *  (half + 1) for _ in  range(leng + 1)]\r\n        \r\n        for i in range(1, leng+1):\r\n            for j in range(1, half+1):\r\n                if j - stones[i-1] >= 0:\r\n                    dp[i][j] = max(dp[i-1][j], dp[i-1][j - stones[i-1]] + stones[i-1])\r\n                else:\r\n                    dp[i][j] = dp[i-1][j]\r\n        return total - 2 * dp[leng][half]",
    "javascript": "// Runtime: 133 ms (Top 21.62%) | Memory: 42.3 MB (Top 86.49%)\r\nvar lastStoneWeightII = function(stones) {\r\n    var sum = stones.reduce((a, b) => a + b);\r\n    var target = Math.ceil(sum / 2);\r\n    var dp = new Array(target + 1).fill(0);\r\n    for(var i = 0; i < stones.length; i++) {\r\n        for(var j = target; j >= stones[i]; j--) {\r\n            dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);\r\n        }\r\n    }\r\n    return Math.abs(2 * dp[target] - sum);\r\n};"
  }
}
