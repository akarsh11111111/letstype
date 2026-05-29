export default {
  "id": 312,
  "name": "Burst Balloons",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/burst-balloons",
  "relativeDir": "B/Burst Balloons",
  "slug": "0312-burst-balloons",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 38,
    "python": 11,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    //topDown+memoization\r\n    int solve(int i,int j,vector<int>& nums,vector<vector<int>>& dp){\r\n        if(i>j) return 0;\r\n        if(dp[i][j]!=-1) return dp[i][j];\r\n        \r\n        int maxcost = INT_MIN;\r\n        for(int k = i;k<=j;k++){\r\n            int cost = nums[i-1]*nums[k]*nums[j+1]+solve(i,k-1,nums,dp)+solve(k+1,j,nums,dp);\r\n            maxcost = max(maxcost,cost);\r\n        }\r\n        return dp[i][j] = maxcost;\r\n    }\r\n    \r\n    int maxCoins(vector<int>& nums) {\r\n        nums.insert(nums.begin(),1);\r\n        nums.push_back(1);\r\n        int n = nums.size();\r\n        vector<vector<int>> dp(n+1,vector<int>(n+1,-1));\r\n        return solve(1,n-2,nums,dp);\r\n    }\r\n    \r\n    //bottomUp dp\r\n    int maxCoins(vector<int>& nums) {\r\n        //including the nums[-1] == 1 and nums[n] == 1\r\n        int n = nums.size();\r\n        nums.insert(nums.begin(),1);\r\n        nums.push_back(1);\r\n        vector<vector<int>> dp(nums.size()+1,vector<int>(nums.size()+1,0));\r\n        \r\n        for (int len = 1; len <= n; ++len)\r\n            for (int left = 1; left <= n - len + 1; ++left) {\r\n                int right = left + len - 1;\r\n                for (int k = left; k <= right; ++k)\r\n                    dp[left][right] = max(dp[left][right], nums[left-1]*nums[k]*nums[right+1] + dp[left][k-1] + dp[k+1][right]);\r\n            }\r\n        return dp[1][n];\r\n    }\r\n};",
    "python": "// Runtime: 3739 ms (Top 77.47%) | Memory: 34.10 MB (Top 46.9%)\r\n\r\nclass Solution:\r\n    def maxCoins(self, nums):\r\n        A = [1] + nums + [1]\r\n        \r\n        @lru_cache(None)\r\n        def dfs(i, j):\r\n            return max([A[i]*A[k]*A[j] + dfs(i,k) + dfs(k,j) for k in range(i+1, j)] or [0])\r\n        \r\n        return dfs(0, len(A) - 1)",
    "java": "class Solution {\r\n    public int maxCoins(int[] nums) {\r\n        int n = nums.length;\r\n        \r\n//         adding 1 to the front and back\r\n        int[] temp = new int[n + 2];  \r\n        temp[0] = 1;\r\n        for(int i = 1; i < temp.length - 1; i++){\r\n            temp[i] = nums[i-1];\r\n        }\r\n        temp[temp.length - 1] = 1;\r\n        nums = temp;\r\n        \r\n//         memoization\r\n        int[][] dp = new int[n+1][n+1];\r\n        for(int[] row : dp){\r\n            Arrays.fill(row, -1);\r\n        }\r\n        \r\n//         result\r\n        return f(1, n, nums, dp);\r\n    }\r\n    \r\n    int f(int i, int j, int[] a, int[][] dp){\r\n        if(i > j) return 0;\r\n        if(dp[i][j] != -1) return dp[i][j];\r\n        \r\n        int max = Integer.MIN_VALUE;\r\n        for(int n = i; n <= j; n++){\r\n            int coins = a[i-1] * a[n] * a[j+1] + f(i, n-1, a, dp) + f(n+1, j, a, dp);\r\n            max = Math.max(max, coins);\r\n        }\r\n        return dp[i][j] = max;\r\n    }\r\n}\r\n\r\n// Time Complexity: O(N * N * N) ~ O(N^3);\r\n// Space Complexity: O(N^2) + O(N);",
    "javascript": "// Runtime: 616 ms (Top 53.24%) | Memory: 45.6 MB (Top 38.13%)\r\n\r\nvar rec = function(i,j,arr,dp){\r\n    if(i>j)return 0;\r\n    if(dp[i][j] !== -1)return dp[i][j];\r\n    let max = Number.MIN_VALUE;\r\n    for(let k=i;k<=j;k++){\r\n        let cost = arr[i-1] * arr[k] * arr[j+1] + rec(i,k-1,arr,dp)+rec(k+1,j,arr,dp);\r\n        if(cost>max){\r\n            max = cost\r\n        }\r\n    }\r\n    return dp[i][j] = max\r\n}\r\nvar maxCoins = function(nums) {\r\n    let n = nums.length;\r\n    let sol = [];\r\n    for(let i=0;i<n+1;i++){\r\n        sol[i] = Array(n+1).fill(-1)\r\n    }\r\n    nums.unshift(1);\r\n    nums.push(1)\r\n    return rec(1,n,nums,sol)\r\n};"
  }
}
