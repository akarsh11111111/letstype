export default {
  "id": 1388,
  "name": "Pizza With 3n Slices",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/pizza-with-3n-slices",
  "relativeDir": "P/Pizza With 3n Slices",
  "slug": "1388-pizza-with-3n-slices",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 23,
    "python": 22,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    int dp[501][501];\r\n    \r\n    int solve(vector<int>&v , int i ,int count ){\r\n        \r\n        if( i >= v.size() || count > v.size()/3 ) return 0 ;\r\n        \r\n        if(dp[i][count] !=  -1 ) return dp[i][count]; \r\n        \r\n        int pick = v[i] + solve(v,i+2,count+1) ;\r\n        int notPick = solve(v,i+1,count) ;\r\n        \r\n        return  dp[i][count] = max(pick,notPick) ;\r\n        \r\n    }\r\n    \r\n    \r\n    int maxSizeSlices(vector<int>& slices) { \r\n        \r\n     vector<int>v1 ;\r\n     vector<int>v2 ;\r\n        \r\n     for(int i = 0 ; i < slices.size() ;i++){\r\n         \r\n         if( i != slices.size()-1 ) v1.push_back(slices[i]) ;\r\n         if( i != 0 ) v2.push_back(slices[i]);\r\n         \r\n     }\r\n     memset(dp,-1,sizeof(dp)) ;   \r\n     int ans1 = solve(v1,0,0);\r\n     memset(dp,-1,sizeof(dp)) ; \r\n     int ans2 = solve(v2,0,0);\r\n        \r\n     return max(ans1,ans2) ;\r\n        \r\n    }\r\n};",
    "python": " class Solution:\r\n    def maxSizeSlices(self, slices: List[int]) -> int:\r\n       ** #This solve function mainly on work on the idea of A Previous dp problem House Robber II \r\n\t\t#If we take the first slice then we cant take the second slice and vice versa**\r\n\t\tdef solve(slices,start,end,n,dp):\r\n            if start>end or n==0:\r\n                return 0\r\n            if dp[start][n] !=-1:\r\n                return dp[start][n]\r\n            include = slices[start] + solve(slices,start+2,end,n-1,dp)\r\n            \r\n            exclude = 0 + solve(slices,start+1,end,n,dp)\r\n            \r\n            dp[start][n]= max(include,exclude)\r\n            return dp[start][n]\r\n        dp1=[[-1 for i in range(k+1)]for _ in range(k+1)]\r\n        dp2=[[-1 for i in range(k+1)]for _ in range(k+1)]\r\n        \r\n        option1=solve(slices,0,k-2,k//3,dp1)#Taking the the first slice , now we cant take the last slice and next slice\r\n        option2=solve(slices,1,k-1,k//3,dp2)#Taking the the second slice , now we cant take the second last slice and next slice\r\n        \r\n        return max(option1,option2)",
    "java": "class Solution {\r\n    public int maxSizeSlices(int[] slices) {\r\n        int n = slices.length;\r\n        return Math.max(helper(slices, n/3, 0, n - 2), helper(slices, n/3, 1, n - 1));\r\n    }\r\n    \r\n    private int helper(int[] slices, int rounds, int start, int end) {\r\n        int n = end - start + 1, max = 0;\r\n        int[][][] dp = new int[n][rounds+1][2];\r\n        dp[0][1][1] = slices[start];\r\n        for (int i = start + 1; i <= end; i++) {\r\n            int x = i - start;\r\n            for (int j = 1; j <= rounds; j++) {\r\n                dp[x][j][0] = Math.max(dp[x-1][j][0], dp[x-1][j][1]);\r\n                dp[x][j][1] = dp[x-1][j-1][0] + slices[i];\r\n                if (j == rounds) {\r\n                    max = Math.max(max, Math.max(dp[x][j][0], dp[x][j][1]));\r\n                }\r\n            }\r\n        }\r\n        return max;\r\n    }\r\n}",
    "javascript": "var maxSizeSlices = function(slices) {\r\n    const numSlices = slices.length / 3;\r\n    const len = slices.length - 1;\r\n    \r\n    const dp = new Array(len).fill(null).map(() => new Array(numSlices + 1).fill(0));\r\n    const getMaxTotalSlices = (pieces) => {\r\n\t    // the max for 1 piece using only the first slice is itself\r\n        dp[0][1] = pieces[0];\r\n\t\t// the max for 1 piece using the first 2 slices is the max of the first and second slice\r\n        dp[1][1] = Math.max(pieces[0], pieces[1]);\r\n\t\t// start the max as the max of taking 1 slice from the first 2 slices\r\n        let max = dp[1][1];\r\n\t\t\r\n\t\t// calculate the max value for taking x number of pieces using up to that piece\r\n        for (let i = 2; i < pieces.length; i++) {\r\n            for (let numPieces = 1; numPieces <= numSlices; numPieces++) {\r\n                dp[i][numPieces] = Math.max(dp[i - 1][numPieces],                    // the max for not taking this piece\r\n\t\t\t\t                            dp[i - 2][numPieces - 1] + pieces[i]);   // the max for taking this piece\r\n                if (max < dp[i][numPieces]) max = dp[i][numPieces];                  // update the max if it is greater\r\n            }\r\n        }\r\n        return max;\r\n    }\r\n    \r\n    return Math.max(getMaxTotalSlices(slices.slice(0, slices.length - 1)),    // get max without the last slice\r\n                    getMaxTotalSlices(slices.slice(1)));                      // get max without the first slice\r\n};"
  }
}
