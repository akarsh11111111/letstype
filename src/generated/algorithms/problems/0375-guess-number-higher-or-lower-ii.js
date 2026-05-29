export default {
  "id": 375,
  "name": "Guess Number Higher or Lower II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/guess-number-higher-or-lower-ii",
  "relativeDir": "G/Guess Number Higher or Lower II",
  "slug": "0375-guess-number-higher-or-lower-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 19,
    "python": 21,
    "javascript": 53
  },
  "languages": {
    "cpp": "// Runtime: 226 ms (Top 55.81%) | Memory: 8.2 MB (Top 44.55%)\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> dp;\r\n\r\n    int solve(int start, int end)\r\n    {\r\n        if(start>= end)\r\n            return 0;\r\n\r\n        if(dp[start][end] != -1)\r\n            return dp[start][end];\r\n\r\n        int ans = 0;\r\n        int result = INT_MAX;\r\n        for(int i=start; i<=end; i++)\r\n        {\r\n            int left = solve(start,i-1);\r\n            int right = solve(i+1,end);\r\n            ans = max(left,right) + i; // this line gurantee to include the money that is needed to win higher values\r\n            result = min(ans,result);\r\n        }\r\n\r\n        return dp[start][end] = result;\r\n    }\r\n\r\n    int getMoneyAmount(int n) {\r\n        int ans = 0;\r\n        dp = vector<vector<int>>(n+1,vector<int>(n+1,-1));\r\n        return solve(1,n);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def getMoneyAmount(self, n):\r\n                        # For an interval [l,r], we choose a num, which if incorrect still\r\n                        # allows us to know whether the secret# is in either [l,num-1] or\r\n                        # [num+1,r]. So, the worst-case (w-c) cost is\r\n                        #\r\n                        #      num + max(w-c cost in [l,num-1], w-c cost in [num+1,r])\r\n                        # \r\n                        # We do this by recursion and binary search, starting with [1,n].\r\n\r\n        @lru_cache(None)              # <-- we cache function results to avoid recomputing them\r\n        def dp(l = 1, r = n)-> int:\r\n            if r-l < 1: return 0      # <-- base case for the recursion; one number in [l,r]       \r\n            ans = 1000                # <-- the answer for n = 200 is 952\r\n            \r\n            for choice in range((l+r)//2,r):\r\n                ans = min(ans,choice+max(dp(l,choice-1),dp(choice+1,r)))\r\n\r\n            return ans\r\n\r\n        return dp()",
    "java": "class Solution {\r\n    public int getMoneyAmount(int n) {\r\n        int dp[][]=new int[n+1][n+1];\r\n        for(int a[]:dp){\r\n            Arrays.fill(a,-1);\r\n        }\r\n        return solve(1,n,dp);\r\n    }\r\n    static int solve(int start,int end,int[][] dp){\r\n    if(start>=end) return 0;\r\n    if(dp[start][end]!=-1) return dp[start][end];\r\n    int min=Integer.MAX_VALUE;\r\n    for(int i=start;i<=end;i++){\r\n    min=Math.min(min,i+Math.max(solve(start,i-1,dp),solve(i+1,end,dp)));\r\n    }\r\n    dp[start][end]=min;\r\n    return min;\r\n    }\r\n}",
    "javascript": "/** https://leetcode.com/problems/guess-number-higher-or-lower-ii/\r\n * @param {number} n\r\n * @return {number}\r\n */\r\nvar getMoneyAmount = function(n) {\r\n  // Memo\r\n  this.memo = new Map();\r\n  \r\n  return dp(n, 0, n);\r\n};\r\n\r\nvar dp = function(n, start, end) {\r\n  let key = `${start}_${end}`;\r\n  \r\n  // Base, there is only 1 node on this side of the leg, which mean our guess is always correct and it cost nothing so return 0\r\n  if (end - start < 2) {\r\n    return 0;\r\n  }\r\n  \r\n  // Base, there are only 2 nodes on this side of the leg, which mean we only need to pick cheapest guess\r\n  if (end - start === 2) {\r\n    // The `start` will always be smaller so pick `start`, add 1 to account for 0 index\r\n    return start + 1;\r\n  }\r\n  \r\n  // Return from memo\r\n  if (this.memo.has(key) === true) {\r\n    return this.memo.get(key);\r\n  }\r\n  \r\n  // Minimum cost\r\n  let minCost = Infinity;\r\n  \r\n  // Try to arrange the tree's left and right leg and find the cost of each leg\r\n  for (let i = start; i < end; i++) {\r\n    let left = dp(n, start, i);\r\n    let right = dp(n, i + 1, end);\r\n    \r\n    // Cost of current guess, add 1 to account for 0 index\r\n    let curr = i + 1;\r\n    \r\n    // Update cost of current guess, which is the max of left or right leg\r\n    curr = Math.max(left + curr, right + curr);\r\n    \r\n    // Then update the minimum cost for entire tree\r\n    minCost = Math.min(minCost, curr);\r\n  }\r\n  \r\n  // Set memo\r\n  this.memo.set(key, minCost);\r\n  \r\n  return minCost;\r\n};"
  }
}
