export default {
  "id": 1155,
  "name": "Number of Dice Rolls With Target Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-dice-rolls-with-target-sum",
  "relativeDir": "N/Number of Dice Rolls With Target Sum",
  "slug": "1155-number-of-dice-rolls-with-target-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 26,
    "python": 35,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 11 ms (Top 87.19%) | Memory: 6.50 MB (Top 92.03%)\r\n\r\nclass Solution {\r\npublic:\r\n    #define MOD 1000000007\r\n    int dp[32][1002];\r\n    \r\n    int solve(int d, int f, int target){\r\n        if(d==0 && target==0) return 1;\r\n        if(d<=0 || target<=0) return 0;\r\n        if(dp[d][target] != -1) return dp[d][target];\r\n     \r\n        int sum=0;\r\n        for(int i=1;i<=f;i++){\r\n            sum = (sum % MOD + solve(d-1,f,target-i)%MOD)%MOD;\r\n        }\r\n        dp[d][target] = sum;\r\n        return dp[d][target];\r\n    }\r\n    \r\n    int numRollsToTarget(int d, int f, int target) {\r\n        memset(dp,-1,sizeof(dp));\r\n        return solve(d,f,target);\r\n    }\r\n};",
    "python": "# Runtime: 782 ms (Top 50.50%) | Memory: 18.9 MB (Top 42.22%)\r\n\r\nclass Solution(object):\r\n    def numRollsToTarget(self, n, k, target):\r\n        \"\"\"\r\n        :type n: int\r\n        :type k: int\r\n        :type target: int\r\n        :rtype: int\r\n        \"\"\"\r\n\r\n        mem = {}\r\n\r\n        def dfs(i,currSum):\r\n\r\n            if currSum > target:\r\n                return 0\r\n\r\n            if i == n:\r\n                if currSum == target:\r\n                    return 1\r\n                return 0\r\n\r\n            if (i,currSum) in mem:\r\n                return mem[(i,currSum)]\r\n\r\n            ans = 0\r\n            for dicenumber in range(1,k+1):\r\n                ans += dfs(i+1,currSum+dicenumber)\r\n\r\n            mem[(i,currSum)] = ans\r\n\r\n            return mem[(i,currSum)]\r\n\r\n        return dfs(0,0) % (10**9 + 7)",
    "java": "// Runtime: 12 ms (Top 94.21%) | Memory: 40.8 MB (Top 96.38%)\r\nclass Solution {\r\n    public int numRollsToTarget(int n, int k, int target) {\r\n        if (target < n || target > n*k) return 0;\r\n        if (n == 1) return 1;\r\n\r\n        int[][] dp = new int[n+1][n*k+1];\r\n        for (int i = 1; i<= k; i++) {\r\n            dp[1][i] = 1;\r\n        }\r\n        int mod = 1000000007;\r\n        for (int i = 2; i <= n; i++) {\r\n            for (int j = i; j <= i*k && j <= target; j++) {\r\n                for (int x = 1; x <= k; x++) {\r\n                    if (j-x >= 1) {\r\n                        dp[i][j] += dp[i-1][j-x];\r\n                        if (dp[i][j] >= mod) {\r\n                            dp[i][j] %= mod;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return dp[n][target]%mod;\r\n    }\r\n}",
    "javascript": "// Runtime: 130 ms (Top 82.58%) | Memory: 44.7 MB (Top 86.45%)\r\nvar numRollsToTarget = function(n, k, target) {\r\n    if (n > target || n * k < target) return 0 //target is impossible to reach\r\n    let arr = new Array(k).fill(1), depth = n //start the first layer of Pascal's N-ary Triangle.\r\n    while (depth > 1) { //more layers of Triangle to fill out\r\n        tempArr = [] //next layer of triangle. not done in place as previous layer's array values are needed\r\n        for (let i = 0; i < arr.length + k - 1 && i <= target - n; i++) { //looping is bounded by size of next layer AND how much data we actually need\r\n            let val = ((tempArr[i - 1] || 0) + (arr[i] || 0) - (arr[i - k] || 0)) % (1000000007) //current index value is the sum of K number of previous layer's values, once we hit K we add next and subtract last so we don't have to manually add all K values\r\n            tempArr.push(val)\r\n        }\r\n        arr = tempArr\r\n        depth -= 1\r\n    }\r\n    let ans = arr[target - n] //answer will be in target - nth index\r\n    return ans < 0 ? ans + 1000000007 : ans\r\n};"
  }
}
