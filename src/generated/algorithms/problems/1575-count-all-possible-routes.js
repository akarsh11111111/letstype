export default {
  "id": 1575,
  "name": "Count All Possible Routes",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-all-possible-routes",
  "relativeDir": "C/Count All Possible Routes",
  "slug": "1575-count-all-possible-routes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 60,
    "python": 26,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    int fun(vector<int> &arr , int s , int f , int k , vector<vector<int>> &dp){\r\n        if(k<0) return 0 ;\r\n        if(dp[s][k]!=-1) return dp[s][k] ;\r\n        int ans=0 ;\r\n        if(s==f) ans=1 ;\r\n        for(int i=0 ; i<arr.size() ; i++){\r\n            if(i!=s) ans=(ans+fun(arr,i,f,k-abs(arr[s]-arr[i]),dp))%1000000007;\r\n        }\r\n     return dp[s][k]=ans ;   \r\n    }\r\n    \r\n    int countRoutes(vector<int>& locations, int start, int finish, int fuel) {\r\n        vector<vector<int>> dp(locations.size()+1,vector<int>(fuel+1,-1)) ;\r\n        int ans=fun(locations,start,finish,fuel,dp) ;\r\n        return ans ;\r\n    }\r\n};",
    "python": "# Runtime: 3516 ms (Top 53.70%) | Memory: 22.1 MB (Top 43.52%)\r\n\r\nfrom bisect import bisect_left\r\nfrom functools import lru_cache\r\nclass Solution:\r\n    def countRoutes(self, locations: List[int], start: int, finish: int, fuel: int) -> int:\r\n        start = locations[start]\r\n        end = locations[finish]\r\n        locations.sort()\r\n        start = bisect_left(locations, start)\r\n        end = bisect_left(locations, end)\r\n        @lru_cache(None)\r\n        def dfs(i, fuel):\r\n            if fuel == 0 and i == end: return 1\r\n            res = 0\r\n            if i == end: res += 1\r\n            j = i-1\r\n            while j>=0 and abs(locations[j]-locations[i]) <= fuel:\r\n                res += dfs(j, fuel-abs(locations[j]-locations[i]))\r\n                j -= 1\r\n            j = i+1\r\n            while j<len(locations) and abs(locations[j]-locations[i]) <= fuel:\r\n                res += dfs(j, fuel-abs(locations[j]-locations[i]))\r\n                j += 1\r\n            return res\r\n        return dfs(start, fuel) % (10**9+7)",
    "java": "// Runtime: 81 ms (Top 78.44%) | Memory: 41.8 MB (Top 95.21%)\r\n\r\n/*\r\n\r\nUsing DFS and Memo :\r\n\r\n1. We will start from start pos provided and will dfs travel to each other location .\r\n2. each time we will see if we reach finish , we will increment the result . but we wont stop there if we have fuel left and continue travelling\r\n3. if fuel goes negetive , we will return 0 , as there is no valid solution in that path\r\n4. we will take dp[locations][fuel+1] to cache the result , to avoid recomputing .\r\n\r\n*/\r\n\r\nclass Solution {\r\n\r\n    int mod = (int)Math.pow(10,9) + 7 ;\r\n    int[][] dp ;\r\n\r\n    public int countRoutes(int[] locations, int start, int finish, int fuel) {\r\n\r\n        dp = new int[locations.length][fuel+1] ;\r\n\r\n        for(int[] row : dp){\r\n            Arrays.fill(row , -1) ;\r\n        }\r\n\r\n        return dfs(locations , start , finish , fuel);\r\n    }\r\n\r\n    public int dfs(int[] locations , int cur_location , int finish , int fuel){\r\n\r\n        if(fuel < 0){\r\n            return 0 ;\r\n        }\r\n\r\n        if(dp[cur_location][fuel] != -1){\r\n            return dp[cur_location][fuel] ;\r\n        }\r\n\r\n        int result = 0 ;\r\n\r\n        if(cur_location == finish){\r\n            result++ ;\r\n        }\r\n\r\n        for(int i=0 ; i<locations.length ; i++){\r\n\r\n            if(i == cur_location) continue ;\r\n\r\n            int fuel_cost = Math.abs(locations[i] - locations[cur_location]);\r\n            int next_trip = dfs(locations , i , finish , fuel-fuel_cost);\r\n            result += next_trip ;\r\n            result %= mod ;\r\n        }\r\n\r\n        dp[cur_location][fuel] = result ;\r\n\r\n        return dp[cur_location][fuel] ;\r\n    }\r\n}",
    "javascript": "var countRoutes = function(locations, start, finish, fuel) {\r\n    const memo = new Array(locations.length+1).fill(0).map(()=>new Array(201).fill(-1));\r\n    \r\n    const dfs = function(cur, f){\r\n        if(f<0) return 0;\r\n        if(memo[cur][f]!=-1) return memo[cur][f];\r\n        let res = (cur==finish);\r\n        for(let i in locations){\r\n            if(i==cur) continue;\r\n            res = (res + dfs(i, f-Math.abs(locations[i]-locations[cur])))%1000000007;\r\n        }\r\n        return memo[cur][f]=res;\r\n    }\r\n    \r\n    return dfs(start, fuel);\r\n};"
  }
}
