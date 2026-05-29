export default {
  "id": 1595,
  "name": "Minimum Cost to Connect Two Groups of Points",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points",
  "relativeDir": "M/Minimum Cost to Connect Two Groups of Points",
  "slug": "1595-minimum-cost-to-connect-two-groups-of-points",
  "availableLanguages": [
    "cpp",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 49,
    "python": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    \r\n    vector<vector<int>>dp;\r\n    \r\n    \r\n    int recurs(vector<vector<int>>& cost,vector<int>&v,int i,int mask)\r\n    {\r\n        \r\n        if(dp[i][mask]!=-1)\r\n            return dp[i][mask];\r\n        \r\n        if(i<cost.size())\r\n        {\r\n            int res=INT_MAX;\r\n            for(int j=0;j<cost[0].size();j++)\r\n                res=min(res,recurs(cost,v,i+1,(mask|(1<<j)))+cost[i][j]);\r\n            return dp[i][mask]=res;\r\n        }\r\n        else\r\n        {\r\n            int res=0;\r\n            for(int  j=0;j<cost[0].size();j++)\r\n                res+=v[j]*(!(mask&(1<<j)));\r\n            return dp[i][mask]=res;   \r\n        }\r\n    }\r\n    \r\n    \r\n    int connectTwoGroups(vector<vector<int>>& cost) {\r\n        \r\n        \r\n        dp.resize(cost.size()+1,vector<int>(5000,-1));\r\n        \r\n        vector<int>v(cost[0].size(),0);\r\n        \r\n        for(int j=0;j<cost[0].size();j++)\r\n        {\r\n            int m=INT_MAX;\r\n            for(int i=0;i<cost.size();i++)\r\n                 m=min(m,cost[i][j]);\r\n            v[j]=m;\r\n        }\r\n        \r\n        \r\n        return recurs(cost,v,0,0);\r\n    }\r\n};",
    "python": "// Runtime: 345 ms (Top 92.68%) | Memory: 29.40 MB (Top 24.39%)\r\n\r\nclass Solution:\r\n    def connectTwoGroups(self, cost: List[List[int]]) -> int:\r\n        m, n = len(cost), len(cost[0])\r\n        mn = [min(x) for x in zip(*cost)] # min cost of connecting points in 2nd group \r\n        \r\n        @lru_cache(None)\r\n        def fn(i, mask):\r\n            \"\"\"Return min cost of connecting group1[i:] and group2 represented as mask.\"\"\"\r\n            if i == m: return sum(mn[j] for j in range(n) if not (mask & (1<<j)))\r\n            return min(cost[i][j] + fn(i+1, mask | 1<<j) for j in range(n))\r\n                \r\n        return fn(0, 0)"
  }
}
