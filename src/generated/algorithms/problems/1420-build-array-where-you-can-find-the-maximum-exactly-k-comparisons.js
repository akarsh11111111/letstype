export default {
  "id": 1420,
  "name": "Build Array Where You Can Find The Maximum Exactly K Comparisons",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons",
  "relativeDir": "B/Build Array Where You Can Find The Maximum Exactly K Comparisons",
  "slug": "1420-build-array-where-you-can-find-the-maximum-exactly-k-comparisons",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 31,
    "python": 7,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.9 MB (Top 98.83%)\r\nclass Solution {\r\npublic:\r\n    int numOfArrays(int n, int m, int k) {\r\n        if(m<k)return 0;\r\n        int dp[2][m+1][k+1],mod=1e9+7;\r\n        memset(dp,0,sizeof(dp));\r\n        for(int j=1;j<=m;++j)\r\n            dp[0][j][1]=j;\r\n        for(int i=1;i<n;++i)\r\n            for(int j=1;j<=m;++j)\r\n                for(int l=1;l<=min(i+1,min(j,k));++l)\r\n                    dp[i&1][j][l]=(dp[i&1][j-1][l]+(long)(dp[(i-1)&1][j][l]-dp[(i-1)&1][j-1][l])*j+dp[(i-1)&1][j-1][l-1])%mod;\r\n        return (dp[(n-1)&1][m][k]+mod)%mod;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numOfArrays(self, n: int, m: int, k: int) -> int:\r\n        @cache\r\n        def dp(a,b,c):\r\n            if a==n: return c==k\r\n            return (b*dp(a+1,b,c) if b>=1 else 0) + sum(dp(a+1,i,c+1) for i in range(b+1,m+1))\r\n        return dp(0,0,0)%(10**9+7)",
    "java": "class Solution {\r\n    public int numOfArrays(int n, int m, int k) {\r\n        int M = (int)1e9+7, ans = 0;\r\n        int[][] dp = new int[m+1][k+1]; // maximum value, num of elements seen from left side\r\n        for (int i = 1; i <= m; i++){\r\n            dp[i][1]=1; // base case \r\n        }\r\n        for (int i = 2; i <= n; i++){\r\n            int[][] next = new int[m+1][k+1];\r\n            for (int j = 1; j <= m; j++){ // for the current max value\r\n                for (int p = 1; p <= m; p++){ // previous max value\r\n                    for (int w = 1; w <= k; w++){ // for all possible k\r\n                        if (j>p){ // if current max is larger, update next[j][w] from dp[p][w-1]\r\n                            next[j][w]+=dp[p][w-1];\r\n                            next[j][w]%=M;\r\n                        }else{ // otherwise, update next[p][w] from dp[p][w]\r\n                            next[p][w]+=dp[p][w];\r\n                            next[p][w]%=M;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            dp=next;\r\n        }\r\n        for (int i = 1; i <= m; i++){ // loop through max that has k and sum them up.\r\n            ans += dp[i][k];\r\n            ans %= M;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var numOfArrays = function(n, m, k){ \r\n    let mod=1e9+7,\r\n        // dp[i][c][j] the number of arrays of length i that cost c and their max element is j  \r\n        dp=[...Array(n+1)].map(d=>[...Array(k+1)].map(d=>[...Array(m+1)].map(d=>0))),\r\n        // prefix[i][k][j] holds the prefix sum of dp[i][k][:j] \r\n        prefix=[...Array(n+1)].map(d=>[...Array(k+1)].map(d=>[...Array(m+1)].map(d=>0)))\r\n    //basecases\r\n    dp[0][0][0] = 1\r\n    prefix[0][0].fill(1)\r\n    for(var i = 1; i <= n; i++) //length of array\r\n        for(var x = 1; x <= k; x++) //curcost\r\n            for(var j = 1; j <= m; j++) //curmax\r\n                // the previous max can be anything <j with a cost of x-1, to which we append j \r\n                dp[i][x][j] += prefix[i-1][x-1][j-1],\r\n                // we can also append any number <=j to an array of length i-1 that already costs x,\r\n                //therefore not increasing the cost\r\n                dp[i][x][j] += dp[i - 1][x][j] *j ,\r\n                dp[i][x][j] %= mod,\r\n                prefix[i][x][j]=(prefix[i][x][j-1]+dp[i][x][j])%mod\r\n    return dp[n][k].reduce((a,c)=>(a+c)%mod)\r\n};"
  }
}
