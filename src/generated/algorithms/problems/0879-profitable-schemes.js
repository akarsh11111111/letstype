export default {
  "id": 879,
  "name": "Profitable Schemes",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/profitable-schemes",
  "relativeDir": "P/Profitable Schemes",
  "slug": "0879-profitable-schemes",
  "availableLanguages": [
    "cpp",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "python": 18
  },
  "languages": {
    "cpp": "\r\nclass Solution {\r\npublic:\r\n   int dp[102][102][102];\r\n    int mod=1e9+7;\r\n    int solve(int i,int currPeople, int currProfit,int totalP, int minProfit, vector<int>& group, vector<int>& profit)\r\n    {\r\n        if(i==profit.size())\r\n        {\r\n            if(currProfit>=minProfit and totalP>=currPeople) return 1;\r\n            return 0;\r\n        }\r\n        else if(totalP<currPeople) return 0;\r\n     \r\n        if(dp[i][currPeople][currProfit]!=-1) return  dp[i][currPeople][currProfit];\r\n        int include=0,notInclude=0;\r\n        notInclude= solve(i+1,currPeople,currProfit,totalP,minProfit,group,profit);\r\n        include=solve(i+1,currPeople+group[i],min(currProfit+profit[i],minProfit),totalP,minProfit,group,profit);\r\n        return  dp[i][currPeople][currProfit] = (include  % mod + notInclude  % mod )%mod;\r\n    }\r\n    int profitableSchemes(int n, int minProfit, vector<int>& group, vector<int>& profit) {\r\n        memset(dp,-1,sizeof(dp));\r\n        return solve(0,0,0,n,minProfit,group,profit);\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def profitableSchemes(self, n, minProfit, group, profit):\r\n        \r\n        k = len(group)\r\n        arr = [[[0 for _ in range(k+1)] for _ in range(minProfit+1)] for _ in range(n+1)]\r\n        \r\n        for i in range(n+1):\r\n            arr[i][0][k] = 1\r\n       \r\n        for j in range(k-1,-1,-1):\r\n            for i in range(n,-1,-1):\r\n                for x in range(minProfit,-1,-1):\r\n\r\n                    arr[i][x][j] = arr[i][x][j+1]\r\n                    if i>=group[j]:\r\n                        arr[i][x][j] += arr[i-group[j]][max(x-profit[j],0)][j+1]\r\n        \r\n        return arr[n][minProfit][0] % (10**9 + 7)"
  }
}
