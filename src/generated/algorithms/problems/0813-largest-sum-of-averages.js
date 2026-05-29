export default {
  "id": 813,
  "name": "Largest Sum of Averages",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-sum-of-averages",
  "relativeDir": "L/Largest Sum of Averages",
  "slug": "0813-largest-sum-of-averages",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 27,
    "python": 15,
    "javascript": 40
  },
  "languages": {
    "cpp": "// Runtime: 20 ms (Top 78.88%) | Memory: 8 MB (Top 44.62%)\r\nclass Solution {\r\npublic:\r\n    double solve(vector<int>&nums, int index, int k, vector<vector<double>>&dp){\r\n        if(index<0)\r\n            return 0;\r\n        if(k<=0)\r\n            return -1e8;\r\n\r\n        if(dp[index][k]!=-1)\r\n            return dp[index][k];\r\n\r\n        double s_sum = 0;\r\n        double maxi = INT_MIN;\r\n        int cnt = 1;\r\n        for(int i=index;i>=0;i--){\r\n            s_sum += nums[i];\r\n            maxi = max(maxi, (s_sum/cnt) + solve(nums, i-1, k-1, dp));\r\n            cnt++;\r\n        }\r\n        return dp[index][k] = maxi;\r\n    }\r\n\r\n    double largestSumOfAverages(vector<int>& nums, int k) {\r\n        int n = nums.size();\r\n        vector<vector<double>>dp(n, vector<double>(k+1, -1));\r\n        return solve(nums, n-1, k, dp);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def largestSumOfAverages(self, A, k):\r\n        n = len(A)\r\n        dp = [0] * n\r\n        sum = 0\r\n        for i in range(n-1,-1,-1):\r\n            sum += A[i]\r\n            dp[i] = sum / (n-i)\r\n        for l in range(1,k):\r\n            for i in range(n-l):\r\n                sum = 0\r\n                for j in range(i,n-l):\r\n                    sum += A[j]\r\n                    dp[i] = max(dp[i],dp[j+1] + sum / (j-i+1))\r\n        return dp[0]",
    "java": "class Solution {\r\n    Double dp[][][];\r\n    int n;\r\n    int k1;\r\n    public double check(int b, int c,long sum,int n1,int ar[]){\r\n        System.out.println(b+\" \"+c);\r\n        if(dp[b][c][n1]!=null)\r\n            return dp[b][c][n1];\r\n        if(b==n){\r\n            if(sum!=0)\r\n            return (double)sum/(double)n1;\r\n            else\r\n                return 0.0;}\r\n        if(c<k1&&sum>0)\r\n            dp[b][c][n1]=Math.max((double)sum/(double)n1+check(b,c+1,0,0,ar),check(b+1,c,sum+(long)ar[b],n1+1,ar));\r\n        else\r\n            dp[b][c][n1]=check(b+1,c,sum+(long)ar[b],n1+1,ar);\r\n\r\n        return dp[b][c][n1];\r\n    }\r\n    public double largestSumOfAverages(int[] nums, int k) {\r\n        n=nums.length;\r\n        k1=k-1;\r\n        dp= new Double[n+1][k][n+1];\r\n        return check(0,0,0l,0,nums);\r\n    }\r\n}",
    "javascript": "// Runtime: 124 ms (Top 33.33%) | Memory: 44.8 MB (Top 33.33%)\r\n/**\r\n * @param {number[]} nums\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar largestSumOfAverages = function(nums, k) {\r\n    // set length\r\n    const len = nums.length;\r\n    // set sum by len fill\r\n    const sum = new Array(len).fill(0);\r\n    // set nums first to first of sum\r\n    sum[0] = nums[0];\r\n\r\n    // set every item of sum to the sum of the previous and the corresponding item of nums\r\n    for (let i = 1; i < len; i++) {\r\n        sum[i] = sum[i - 1] + nums[i];\r\n    }\r\n\r\n    // set dynamic programming\r\n    const dp = new Array(k + 1).fill(\"\").map(() => new Array(len).fill(0));\r\n\r\n    // according to the meaning of the problem, set the value of dp\r\n    for (let i = 0; i < len; i++) {\r\n        dp[1][i] = sum[i] / (i + 1);\r\n    }\r\n    for (let i = 1; i <= k; i++) {\r\n        dp[i][i - 1] = sum[i - 1];\r\n    }\r\n    for (let i = 2; i <= k; i++) {\r\n        for (let j = i; j < len; j++) {\r\n            for (let m = j - 1; m >= i - 2; m--) {\r\n                dp[i][j] = Math.max(dp[i][j], dp[i - 1][m] + (sum[j] - sum[m]) / (j - m));\r\n            }\r\n        }\r\n    }\r\n\r\n    // result\r\n    return dp[k][len - 1];\r\n};"
  }
}
