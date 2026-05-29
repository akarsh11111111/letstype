export default {
  "id": 96,
  "name": "Unique Binary Search Trees",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/unique-binary-search-trees",
  "relativeDir": "U/Unique Binary Search Trees",
  "slug": "0096-unique-binary-search-trees",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 18,
    "python": 17,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    int catalan (int n,vector<int> &dp)\r\n    {\r\n        if(n<=1)\r\n            return 1;\r\n        \r\n        int ans =0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            ans+=catalan(i,dp)*catalan(n-1-i,dp);\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n    int numTrees(int n) {\r\n        \r\n        vector<int> dp(n+1,-1);\r\n        \r\n        dp[0] = 1;\r\n        dp[1] = 1;\r\n        \r\n        for(int i=2;i<=n;i++)\r\n        {\r\n            int ans = 0;\r\n            for(int j=0;j<i;j++)\r\n            {\r\n                ans += dp[j]*dp[i-1-j];\r\n            }\r\n            dp[i] = ans;\r\n        }\r\n        \r\n        return dp[n];\r\n        \r\n        // return catalan(n,dp);\r\n        \r\n    }\r\n};",
    "python": "# Runtime: 58 ms (Top 20.54%) | Memory: 13.9 MB (Top 13.32%)\r\nclass Solution(object):\r\n    def numTrees(self, n):\r\n        if n == 0 or n == 1:\r\n            return 1\r\n        # Create 'sol' array of length n+1...\r\n        sol = [0] * (n+1)\r\n        # The value of the first index will be 1.\r\n        sol[0] = 1\r\n        # Run a loop from 1 to n+1...\r\n        for i in range(1, n+1):\r\n            # Within the above loop, run a nested loop from 0 to i...\r\n            for j in range(i):\r\n                # Update the i-th position of the array by adding the multiplication of the respective index...\r\n                sol[i] += sol[j] * sol[i-j-1]\r\n        # Return the value of the nth index of the array to get the solution...\r\n        return sol[n]",
    "java": "class Solution {\r\n    public int numTrees(int n) {\r\n        // Create 'sol' array of length n+1...\r\n        int[] sol = new int[n+1];\r\n        // The value of the first index will be 1.\r\n        sol[0] = 1;\r\n        // Run a loop from 1 to n+1...\r\n        for(int i = 1; i <= n; i++) {\r\n            // Within the above loop, run a nested loop from 0 to i...\r\n            for(int j = 0; j < i; j++) {\r\n                // Update the i-th position of the array by adding the multiplication of the respective index...\r\n                sol[i] += sol[j] * sol[i-j-1];\r\n            }\r\n        }\r\n        // Return the value of the nth index of the array to get the solution...\r\n        return sol[n];\r\n    }\r\n}",
    "javascript": "// Runtime: 39 ms (Top 96.02%) | Memory: 41.50 MB (Top 68.13%)\r\n\r\nvar numTrees = function(n) {\r\n    // Create 'sol' array to store the solution...\r\n    var sol = [1, 1];\r\n    // Run a loop from 2 to n...\r\n    for (let i = 2; i <= n; i++) {\r\n        sol[i] = 0;\r\n        // Within the above loop, run a nested loop from 1 to i...\r\n        for (let j = 1; j <= i; j++) {\r\n            // Update the i-th position of the array by adding the multiplication of the respective index...\r\n            sol[i] += sol[i - j] * sol[j - 1];\r\n        }\r\n    }\r\n    // Return the value of the nth index of the array to get the solution...\r\n    return sol[n];\r\n};"
  }
}
