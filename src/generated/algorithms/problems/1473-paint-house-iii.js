export default {
  "id": 1473,
  "name": "Paint House III",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/paint-house-iii",
  "relativeDir": "P/Paint House III",
  "slug": "1473-paint-house-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 50,
    "python": 20,
    "javascript": 33
  },
  "languages": {
    "cpp": "// Runtime: 95 ms (Top 78.34%) | Memory: 11.2 MB (Top 58.34%)\r\nclass Solution {\r\n    int dp[101][22][101];\r\n    vector<int> h;//m\r\n    vector<vector<int>> c;//n\r\n    int mm; int nn; int t;\r\n    int dfs(int idx, int prev, int curt){\r\n        if(curt<1)\r\n            return INT_MAX;\r\n        if(idx==mm)\r\n            return (curt==1)?0:INT_MAX;\r\n        if(dp[idx][prev][curt]!=-1)\r\n            return dp[idx][prev][curt];\r\n        int res=INT_MAX;\r\n        int color=h[idx];\r\n        if(color==0){\r\n            for(int x=0;x<nn;x++){\r\n                color=x+1;\r\n                int rres=dfs(idx+1,color,curt-(prev!=21 and prev!=color));\r\n                if(rres!=INT_MAX)\r\n                    res=min(c[idx][color-1]+rres,res);\r\n            }\r\n        }else{\r\n            return dp[idx][prev][curt]=dfs(idx+1,color,curt-(prev!=21 and prev!=color));\r\n        }\r\n        return dp[idx][prev][curt]=res;\r\n    }\r\npublic:\r\n    int minCost(vector<int>& houses, vector<vector<int>>& cost, int m, int n, int target) {\r\n        h=houses,c=cost,mm=m,nn=n,t=target;\r\n        memset(dp,-1,sizeof(dp));\r\n        int res=dfs(0,21,t);\r\n        return res==INT_MAX?-1:res;\r\n    }\r\n};",
    "python": "\r\n\r\nclass Solution:\r\n    def minCost(self, houses: List[int], cost: List[List[int]], m: int, n: int, target: int) -> int:\r\n        @cache\r\n        def dp(i, p, h):\r\n            if (h > target) or (i == m and h != target):\r\n                return inf\r\n            if i == m:\r\n                return 0\r\n            if houses[i] != 0:\r\n                return dp(i + 1, houses[i], h + int(p != houses[i]))\r\n\r\n            best = inf\r\n            for j, c in enumerate(cost[i], 1):\r\n                best = min(best, dp(i + 1, j, h + int(p != j)) + c)\r\n            return best\r\n\r\n        res = dp(0, 0, 0)\r\n        return res if res != inf else -1",
    "java": "// Runtime: 70 ms (Top 34.94%) | Memory: 52.8 MB (Top 34.74%)\r\nclass Solution {\r\n    public int helper(int idx, int[] houses, int[][] cost,int target, int prevColor,int neigh,Integer[][][] dp)\r\n    {\r\n        if(idx==houses.length || neigh>target)\r\n        {\r\n            if(neigh==target)\r\n                return 0;\r\n            return Integer.MAX_VALUE;\r\n        }\r\n        if(dp[idx][prevColor][neigh]!=null)\r\n            return dp[idx][prevColor][neigh];\r\n        int minCost = Integer.MAX_VALUE;\r\n\r\n        if(houses[idx]==0)\r\n        {\r\n            for(int j = 0;j<cost[idx].length;j++)\r\n            {\r\n                int minCostHere = Integer.MAX_VALUE;\r\n\r\n                if(j+1==prevColor) // Painting the house with the same colour as that of the previous one.\r\n                    minCostHere = helper(idx+1,houses,cost,target,prevColor,neigh,dp);\r\n\r\n                else // Painting the house with a different color and incrementing the neighbour count.\r\n                    minCostHere = helper(idx+1,houses,cost,target,j+1,neigh+1,dp);\r\n\r\n                if(minCostHere!=Integer.MAX_VALUE)\r\n                    minCostHere+=cost[idx][j];\r\n\r\n                minCost = Math.min(minCostHere,minCost);\r\n            }\r\n        }\r\n        else\r\n        {\r\n            if(houses[idx]==prevColor)\r\n                minCost = helper(idx+1,houses,cost,target,prevColor,neigh,dp);\r\n            else\r\n                minCost = helper(idx+1,houses,cost,target,houses[idx],neigh+1,dp);\r\n        }\r\n\r\n        return dp[idx][prevColor][neigh] = minCost;\r\n\r\n    }\r\n    public int minCost(int[] houses, int[][] cost, int m, int n, int target) {\r\n\r\n        Integer[][][] dp = new Integer[m][n+1][target+1];\r\n        int ans = helper(0,houses,cost,target,0,0,dp);\r\n        return ans==Integer.MAX_VALUE?-1:ans;\r\n    }\r\n}",
    "javascript": "var minCost = function(houses, cost, m, n, target) {\r\n    let map = new Map();\r\n\r\n    function dfs(idx = 0, prevColor = -1, neighborhoods = 0) {\r\n        if (idx === m) return neighborhoods === target ? 0 : Infinity;\r\n\r\n        let key = `${idx}-${prevColor}-${neighborhoods}`;\r\n        if (map.has(key)) return map.get(key);\r\n        \r\n        let color = houses[idx];\r\n        // If the current house is already painted\r\n        if (color > 0) {\r\n            return color !== prevColor ? dfs(idx + 1, color, neighborhoods + 1) : dfs(idx + 1, color, neighborhoods);\r\n        }\r\n\r\n        let minCost = Infinity;\r\n        for (let i = 1; i <= n; i++) {\r\n            let potentialCost;\r\n            // If color i is !== prevColor, increment the neighborhood count\r\n            if (i !== prevColor) potentialCost = dfs(idx + 1, i, neighborhoods + 1);\r\n            // Otherwise, the neighborhood simply expanded so the neighborhood count stays the same\r\n            else potentialCost = dfs(idx + 1, i, neighborhoods);\r\n            \r\n            if (potentialCost === Infinity) continue;\r\n            minCost = Math.min(minCost, cost[idx][i - 1] + potentialCost);\r\n        }\r\n        map.set(key, minCost);\r\n        return minCost;\r\n    }\r\n    \r\n    let minCost = dfs();\r\n    return minCost === Infinity ? -1 : minCost;\r\n};"
  }
}
