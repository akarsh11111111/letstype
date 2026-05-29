export default {
  "id": 1000,
  "name": "Minimum Cost to Merge Stones",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-cost-to-merge-stones",
  "relativeDir": "M/Minimum Cost to Merge Stones",
  "slug": "1000-minimum-cost-to-merge-stones",
  "availableLanguages": [
    "cpp",
    "java"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 63
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    #define LIM 32\r\n    vector<int> prefixSum = {0};\r\n    int dp[LIM][LIM][LIM];\r\n    int solve(vector<int> &stones, int start, int end, int k){\r\n        // Base Case: Invalid Index or For single element answer is always 0\r\n        if(start >= end) return 0;\r\n        int cost = INT_MAX;\r\n        if(dp[start][end][k]!=-1) return dp[start][end][k];\r\n        for(int i = start; i < end; i = i+k-1)\r\n            cost = min(cost, solve(stones, start, i, k) + solve(stones, i+1, end, k));\r\n        if((end-start)%(k-1) == 0)\r\n            cost += prefixSum[end+1]-prefixSum[start];\r\n        return dp[start][end][k]=cost;\r\n    }\r\n    int mergeStones(vector<int>& stones, int k){\r\n        int n = stones.size();\r\n        if((n-1)%(k-1) != 0) return -1;\r\n        for(int i : stones) prefixSum.push_back(prefixSum.back()+i);\r\n        for(int i=0; i<LIM; i++) for(int j=0; j<LIM; j++) for(int k=0; k<LIM; k++) dp[i][j][k]=-1;\r\n        return solve(stones, 0, n-1, k);\r\n    }\r\n};",
    "java": "// Runtime: 1 ms (Top 97.04%) | Memory: 41.60 MB (Top 27.41%)\r\n\r\nclass Solution {\r\n    int prefix[];\r\n    public int mergeStones(int[] stones, int k) {\r\n        int n=stones.length;\r\n        if((n-1)%(k-1) != 0) return -1;\r\n        prefix=new int[stones.length+1];\r\n        prefix[0]=0;\r\n        int sum=0;\r\n        for(int i=0;i<stones.length;i++){\r\n            sum+=stones[i];\r\n            prefix[i+1]=sum;\r\n        }\r\n        int dp[][]=new int[stones.length][stones.length];\r\n        for(int i=0;i<dp.length;i++){\r\n            for(int j=0;j<dp[0].length;j++){\r\n                dp[i][j]=-1;\r\n            }\r\n        }\r\n        return check(prefix,k,0,stones.length-1,dp);\r\n    }\r\n    public int check(int[] prefix,int k,int i,int j,int dp[][]){\r\n        if(i>=j){\r\n            return 0;\r\n        }\r\n        if(dp[i][j]!=-1){\r\n            return dp[i][j];\r\n        }\r\n        int min=Integer.MAX_VALUE;\r\n        for(int t=i;t<j;t=t+k-1){\r\n            int min1=check(prefix,k,i,t,dp)+check(prefix,k,t+1,j,dp);\r\n            min=Math.min(min,min1);\r\n        }\r\n        if((j-i)%(k-1)==0){\r\n            min+=prefix[j+1]-prefix[i];\r\n        }\r\n        dp[i][j]=min;\r\n        return min;\r\n    }\r\n}\r\nclass Solution0 {\r\n    public int mergeStones(int[] stones, int K) {\r\n        int n = stones.length;\r\n        if ((n - 1) % (K - 1) > 0) return -1;\r\n\r\n        int[] prefix = new int[n+1];\r\n        for (int i = 0; i <  n; i++)\r\n            prefix[i + 1] = prefix[i] + stones[i];\r\n\r\n        int[][] dp = new int[n][n];\r\n        for (int m = K; m <= n; ++m)\r\n            for (int i = 0; i + m <= n; ++i) {\r\n                int j = i + m - 1;\r\n                dp[i][j] = Integer.MAX_VALUE;\r\n                for (int mid = i; mid < j; mid += K - 1)\r\n                    dp[i][j] = Math.min(dp[i][j], dp[i][mid] + dp[mid + 1][j]);\r\n                if ((j - i) % (K - 1) == 0)\r\n                    dp[i][j] += prefix[j + 1] - prefix[i];\r\n            }\r\n        return dp[0][n - 1];\r\n    }\r\n}"
  }
}
