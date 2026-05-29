export default {
  "id": 1478,
  "name": "Allocate Mailboxes",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/allocate-mailboxes",
  "relativeDir": "A/Allocate Mailboxes",
  "slug": "1478-allocate-mailboxes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 24,
    "python": 14,
    "javascript": 44
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int dp[101][101] ;\r\n    int solve(vector<int>&houses , int pos , int k){\r\n        if(k < 0) return 1e9 ;\r\n        if(pos >= houses.size()) return k ? 1e9 : 0 ; \r\n        if(dp[pos][k] != -1) return dp[pos][k] ;\r\n        \r\n        //at current position pos, spread the group from (pos upto j) and allot this whole group 1 mailbox.\r\n        //start new neigbour at j + 1\r\n        \r\n        int ans = INT_MAX ;\r\n        for(int j = pos ; j < houses.size() ; ++j ){\r\n            int middle = (pos + j) / 2 , cost = 0 ;\r\n            //cost calculation\r\n            for(int i = pos ; i <= j ; ++i ) cost += abs(houses[middle] - houses[i]);\r\n            \r\n            ans = min(ans,cost + solve(houses,j + 1, k - 1)) ;\r\n        }\r\n        return dp[pos][k] = ans ;\r\n    }\r\n    int minDistance(vector<int>& houses, int k) {\r\n        sort(begin(houses),end(houses)) ;\r\n        memset(dp,-1,sizeof(dp)) ;\r\n        \r\n        return solve(houses,0,k);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minDistance(self, houses: List[int], k: int) -> int:\r\n        houses.sort()\r\n\r\n        @lru_cache(None)\r\n        def dp(left, right, k):\r\n            if k == 1:                                          # <-- 1.\r\n                mid = houses[(left+right) // 2]\r\n                return sum(abs(houses[i] - mid) for i in range(left, right + 1))\r\n\r\n            return min(dp(left, i, 1) + dp(i+1, right, k - 1) \r\n                       for i in range(left, right - k + 2))     # <-- 2.\r\n\r\n        return dp(0, len(houses)-1, k)",
    "java": "// Runtime: 11 ms (Top 85.53%) | Memory: 42.5 MB (Top 53.95%)\r\nclass Solution {\r\n    public int minDistance(int[] houses, int k) {\r\n        Arrays.sort(houses);\r\n        int n = houses.length;\r\n        int[] dp = new int[n];\r\n        for (int i = 1; i < n; i++){ // know optimal dist for i-1, then for i, we add houses[i] - houses[i/2]\r\n            dp[i]=dp[i-1]+houses[i]-houses[i/2];\r\n        }\r\n        for (int i = 0; i < k-1; i++){\r\n            int[] next = new int[n];\r\n            Arrays.fill(next, Integer.MAX_VALUE);\r\n            for (int j = 0; j < n; j++){\r\n                int sum = 0;\r\n                for (int m = j; m >= 0; m--){\r\n                    sum += houses[(m+j+1)>>1]-houses[m]; // likewise, adding to the front needs the +1 to account for the truncation.\r\n                    next[j] = Math.min(next[j], (m==0?0:dp[m-1])+sum);\r\n                }\r\n            }\r\n            dp=next;\r\n        }\r\n        return dp[n-1];\r\n    }\r\n}",
    "javascript": "// Runtime: 97 ms (Top 81.82%) | Memory: 57.30 MB (Top 9.09%)\r\n\r\n/**\r\n * @param {number[]} houses\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar minDistance = function(houses, k) {\r\n    let n = houses.length;\r\n    let sorted = houses.sort((a,b)=> a-b)\r\n    costs = new Array(n)\r\n    for (let i = 0; i < n;i++){\r\n        costs[i] = new Array(n).fill(0)\r\n    }\r\n    const memo = new Array(100)\r\n    \r\n    for (let i = 0; i < 100;i++){\r\n        memo[i] = new Array(100)\r\n    }\r\n    \r\n    for (let i = 0 ; i < n ; i++){\r\n        for (let j = 0; j < n ; j++){\r\n            let median = sorted[Math.floor((i+j)/2)]\r\n            for (let t = i; t < j+1; t++){\r\n                costs[i][j] += Math.abs(median - sorted[t])\r\n            }\r\n        }\r\n    }\r\n\r\n    const dp = (k, i ) => {\r\n        if (k ===0 && i === n) return 0;\r\n        if (k ===0 || i === n) return Infinity;\r\n        if (memo[k][i] != null) return memo[k][i]\r\n        let ans = Infinity\r\n        for (let j = i; j < n;j++){\r\n            let cost = costs[i][j]\r\n            ans = Math.min(ans , cost + dp(k-1,j+1))\r\n        }\r\n        memo[k][i] = ans\r\n        return ans\r\n    }\r\n    \r\n    return dp(k, 0)\r\n};"
  }
}
