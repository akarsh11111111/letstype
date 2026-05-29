export default {
  "id": 1039,
  "name": "Minimum Score Triangulation of Polygon",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-score-triangulation-of-polygon",
  "relativeDir": "M/Minimum Score Triangulation of Polygon",
  "slug": "1039-minimum-score-triangulation-of-polygon",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 62,
    "python": 23,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tint f(int i,int j,vector<int>& values,vector<vector<int>> &dp){\r\n\t\tif(i == j || i+1 == j)    return 0;\r\n\t\tif(dp[i][j] != -1)        return dp[i][j];\r\n\t\tint res = INT_MAX;\r\n\t\tfor(int k = i+1;k < j;k++)\r\n\t\t{\r\n\t\t\tint temp = values[i]*values[j]*values[k] + f(k,j,values,dp) + f(i,k,values,dp);\r\n\t\t\tres = min(res,temp);\r\n\t\t}\r\n\t\treturn dp[i][j] = res;\r\n\t}\r\n\r\n\tint minScoreTriangulation(vector<int>& values) {\r\n\t\tint n = values.size();\r\n\t\tvector<vector<int>> dp(n+1,vector<int>(n+1,-1));\r\n\t\treturn f(0,n - 1,values,dp);\r\n\t}",
    "python": "class Solution:\r\n    def minScoreTriangulation(self, values: List[int]) -> int:\r\n        \r\n        n = len(values)\r\n        \r\n        c = [[0 for _ in range(n)] for _ in range(n)]\r\n        \r\n        for L in range(2, n):\r\n            \r\n            for i in range(1, n-L+1):\r\n                \r\n                j = i + L - 1\r\n                \r\n                c[i][j] = float('inf')\r\n                \r\n                for k in range(i, j):\r\n                    \r\n                    q = c[i][k] + c[k+1][j] + (values[i-1]*values[k]*values[j])\r\n                    \r\n                    if c[i][j] > q:\r\n                        c[i][j] = q\r\n        \r\n        return c[1][n-1]",
    "java": "// Runtime: 10 ms (Top 13.89%) | Memory: 41.7 MB (Top 61.06%)\r\nclass Solution {\r\n    int solve(int[] v, int i, int j){\r\n        if(i+1==j)\r\n            return 0;\r\n        int ans= Integer.MAX_VALUE;\r\n        for(int k=i+1;k<j;k++){\r\n            ans= Math.min(ans, (v[i]*v[j]*v[k] + solve(v,i,k) + solve(v,k,j) ) );\r\n        }\r\n        return ans;\r\n    }\r\n\r\n    int solveMem(int[] v, int i, int j, int[][] dp){\r\n      if(i+1==j)\r\n            return 0;\r\n\r\n        if(dp[i][j]!=-1)\r\n            return dp[i][j];\r\n\r\n       int ans= Integer.MAX_VALUE;\r\n\r\n        for(int k=i+1;k<j;k++){\r\n          ans = Math.min(ans, (v[i]*v[j]*v[k] + solveMem(v,i,k,dp) + solveMem(v,k,j,dp) ) );\r\n        }\r\n        dp[i][j]=ans;\r\n        return dp[i][j];\r\n    }\r\n\r\n    int solveTab(int[] v){\r\n        int n= v.length;\r\n        int[][] dp= new int[n][n];\r\n\r\n        for(int i=n-1;i>=0;i--){\r\n            for(int j=i+2;j<n;j++){\r\n\r\n                int ans=Integer.MAX_VALUE;\r\n                 for(int k=i+1;k<j;k++){\r\n                    ans = Math.min(ans, (v[i]*v[j]*v[k] + dp[i][k] + dp[k][j] ) );\r\n                    }\r\n                    dp[i][j]=ans;\r\n            }\r\n        }\r\n\r\n        return dp[0][n-1];\r\n\r\n        }\r\n\r\n    public int minScoreTriangulation(int[] values) {\r\n        int n= values.length;\r\n       // return solve(values, 0, n-1); // For Recursion\r\n\r\n    /* int[][] dp= new int[n][n]; // For Top-Down DP(Memoisation)\r\n        for(int[] row:dp){\r\n            Arrays.fill(row,-1);\r\n        }\r\n\r\n        return solveMem(values,0,n-1,dp);\r\n        */\r\n\r\n        return solveTab(values); //For Bottom-Down DP(Tabulisation)\r\n    }\r\n}",
    "javascript": "// Runtime: 87 ms (Top 83.78%) | Memory: 42.4 MB (Top 89.19%)\r\nvar minScoreTriangulation = function(values) {\r\n    let dp = Array(values.length).fill().map((i) => Array(values.length).fill(0));\r\n    function dfs(i, j) {\r\n        if (dp[i][j]) return dp[i][j];\r\n        if (j - i < 2) return 0;\r\n        let min = Infinity;\r\n        // k forms a triangle with i and j, thus bisecting the array into two parts\r\n        // These two parts become two subproblems that can be solved recursively\r\n        for (let k = i + 1; k < j; k++) {\r\n            let sum = values[i] * values[j] * values[k] + dfs(i, k) + dfs(k, j);\r\n            min = Math.min(min, sum);\r\n        }\r\n        return dp[i][j] = min;\r\n    }\r\n    return dfs(0, values.length - 1);\r\n};"
  }
}
