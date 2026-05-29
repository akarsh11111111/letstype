export default {
  "id": 1547,
  "name": "Minimum Cost to Cut a Stick",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-cost-to-cut-a-stick",
  "relativeDir": "M/Minimum Cost to Cut a Stick",
  "slug": "1547-minimum-cost-to-cut-a-stick",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 36,
    "python": 16,
    "javascript": 29
  },
  "languages": {
    "cpp": "// Runtime: 233 ms (Top 8.43%) | Memory: 10.3 MB (Top 39.50%)\r\nclass Solution {\r\npublic:\r\n    long cutMin(int i, int j, vector<int>&c, vector<vector<int>>&dp)\r\n    {\r\n        if(i>j) return 0;\r\n        if(dp[i][j]!=-1) return dp[i][j];\r\n        long mini = INT_MAX;\r\n        for(int ind=i;ind<=j;ind++)\r\n        {\r\n            long cost = c[j+1]-c[i-1]+cutMin(i,ind-1,c,dp)+cutMin(ind+1,j,c,dp);\r\n            mini = min(mini,cost);\r\n        }\r\n        return dp[i][j] = mini;\r\n    }\r\n    int minCost(int n, vector<int>& cuts) {\r\n        int c = cuts.size();\r\n        cuts.push_back(0);\r\n        cuts.push_back(n);\r\n        sort(cuts.begin(),cuts.end());\r\n        vector<vector<int>>dp(c+1,vector<int>(c+1,-1));\r\n        return cutMin(1,c,cuts,dp);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minCost(self, n: int, cuts: List[int]) -> int:\r\n        cuts = [0] + sorted(cuts) + [n]\r\n        k = len(cuts)\r\n        dp = [[float('inf')] * k for _ in range(k)]\r\n        for l in range(1, k + 1):\r\n            for beg in range(k - l):\r\n                end = beg + l\r\n                if l == 1:\r\n                    dp[beg][end] = 0\r\n                    continue\r\n                for i in range(beg + 1, end):\r\n                    currcost = cuts[end] - cuts[beg]\r\n                    currcost += dp[beg][i] + dp[i][end]\r\n                    dp[beg][end] = min(dp[beg][end], currcost)\r\n        return dp[0][k - 1]",
    "java": "class Solution {\r\n    public int minCost(int n, int[] cuts) {\r\n        \r\n        int len = cuts.length;\r\n        \r\n        Arrays.sort(cuts);\r\n        \r\n        int[] arr = new int[len+2];\r\n        for(int i = 1 ; i <= len ; i++)\r\n            arr[i] = cuts[i-1];\r\n        \r\n        arr[0] = 0;\r\n        arr[len+1] = n;\r\n        int[][] dp = new int[len+1][len+1];\r\n        for(int i = 0 ; i <= len ; i++)\r\n            for(int j = 0 ; j <= len ; j++)\r\n                dp[i][j] = -1;\r\n        return cut(arr , 1 , len , dp);\r\n    }\r\n    \r\n    int cut(int[] cuts , int i , int j , int[][] dp){\r\n        if(i > j)\r\n            return 0;\r\n        \r\n        if(dp[i][j] != -1)\r\n            return dp[i][j];\r\n        \r\n        int mini = Integer.MAX_VALUE;\r\n        for(int k = i ; k <= j ; k++){\r\n            int cost = cuts[j+1]-cuts[i-1] + cut(cuts , i , k-1 , dp) + cut(cuts , k+1 , j , dp);\r\n            mini = Math.min(cost , mini);\r\n        }\r\n        \r\n        return dp[i][j] = mini;\r\n    }\r\n}",
    "javascript": "var minCost = function(n, cuts) {\r\n    cuts = cuts.sort((a, b) => a - b);\r\n    let map = new Map();\r\n    // Use cutIdx to track the idx of the cut position in the cuts array\r\n    function dfs(start, end, cutIdx) {\r\n        let key = `${start}-${end}`;\r\n        if (map.has(key)) return map.get(key);\r\n        let min = Infinity\r\n        for (let i = cutIdx; i < cuts.length; i++) {\r\n            let cut = cuts[i];\r\n            if (cut <= start) continue;\r\n            if (cut < end) {\r\n                let len = end - start;\r\n                let left = dfs(start, cut, 0);\r\n                let right = dfs(cut, end, i + 1);\r\n                min = Math.min(min, len + left + right);\r\n            } else break;\r\n        }\r\n        if (min === Infinity) {\r\n            map.set(key, 0);\r\n            return 0;\r\n        }\r\n        else {\r\n            map.set(key, min);\r\n            return min;\r\n        }\r\n    }\r\n    return dfs(0, n, 0);\r\n};"
  }
}
