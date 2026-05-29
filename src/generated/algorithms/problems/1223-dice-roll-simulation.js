export default {
  "id": 1223,
  "name": "Dice Roll Simulation",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/dice-roll-simulation",
  "relativeDir": "D/Dice Roll Simulation",
  "slug": "1223-dice-roll-simulation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 37,
    "python": 17,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 218 ms (Top 30.21%) | Memory: 35.1 MB (Top 10.13%)\r\nclass Solution {\r\npublic:\r\n\r\n    int fun( int i , int k , int p , vector<int>& rollMax ,vector< vector< vector<int> > > &dp){\r\n        if(i==0) return 1;\r\n        if(dp[i][k][p]!=-1){\r\n            return dp[i][k][p] ;\r\n        }\r\n         long long int ans=0 ;\r\n        for(int j=1 ; j<7 ; j++){\r\n            if(j==k){\r\n            if(p<rollMax[j-1]) ans=(ans+fun(i-1,j,p+1,rollMax,dp))%1000000007 ;\r\n            }\r\n\r\n            else ans=(ans+fun(i-1,j,1,rollMax,dp))%1000000007 ;\r\n        }\r\n        return dp[i][k][p]=ans ;\r\n    }\r\n\r\n    int dieSimulator(int n, vector<int>& rollMax) {\r\n       vector< vector< vector<int> > > dp(n+1, vector< vector<int> >(7 , vector<int>(16,-1)));\r\n        int ans=fun(n,0,1,rollMax,dp) ;\r\n        return ans ;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def dieSimulator(self, n: int, rollMax: List[int]) -> int:\r\n        dp = {}\r\n        def solve(n,last,count):\r\n            if n == 0: return 1\r\n            if (n,last,count) in dp: return dp[(n,last,count)]\r\n            ans = 0\r\n            for i in range(6):\r\n                if last == i:\r\n                    if count == rollMax[i]: continue\r\n                    ans += solve(n-1,last,count + 1)\r\n                else:\r\n                    ans += solve(n-1,i,1)\r\n            dp[(n,last,count)] = ans\r\n            return ans\r\n        \r\n        return solve(n,None,0) % 1000000007",
    "java": "// Runtime: 149 ms (Top 22.45%) | Memory: 56.7 MB (Top 20.41%)\r\nclass Solution {\r\n    long[][][] dp;\r\n    int mod = 1_000_000_007;\r\n    public int dieSimulator(int n, int[] rollMax) {\r\n        dp = new long[n + 1][7][16];\r\n        for(long[][] row: dp)\r\n            for(long[] col: row)\r\n                Arrays.fill(col, -1);\r\n\r\n        return (int)helper(n, 0, 0, rollMax, 0);\r\n    }\r\n\r\n    private long helper(int n, int dice, int prev, int[] rollMax, int runs)\r\n    {\r\n        if(n == dice)\r\n            return 1;\r\n\r\n        if(dp[dice][prev][runs] != -1)\r\n            return dp[dice][prev][runs];\r\n\r\n        long ans = 0;\r\n        int[] temp = rollMax;\r\n        for(int i = 1; i <= 6; i++)\r\n        {\r\n            if(prev != 0 && i == prev && rollMax[i-1] <= runs)\r\n                continue;\r\n            if(i == prev)\r\n                ans = (ans + helper(n, dice + 1, i, rollMax, runs + 1)) % mod;\r\n            else\r\n                ans = (ans + helper(n, dice + 1, i, rollMax, 1)) % mod;\r\n        }\r\n\r\n        dp[dice][prev][runs] = ans;\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 431 ms (Top 25.0%) | Memory: 98.70 MB (Top 25.0%)\r\n\r\n/**\r\n * @param {number} n\r\n * @param {number[]} rollMax\r\n * @return {number}\r\n */\r\nvar dieSimulator = function(n, rollMax) {\r\n    let dp = {}\r\n    let help = (prev, rolls, rollsLeft) => {\r\n        if(rolls == n) return 1;\r\n        if(dp[rolls] == undefined) dp[rolls] = {}\r\n        if(dp[rolls][rollsLeft] == undefined) dp[rolls][rollsLeft] = {}\r\n        if(dp[rolls][rollsLeft][prev] != undefined) return dp[rolls][rollsLeft][prev]\r\n        let sum = 0;\r\n        for(let i = 0; i < rollMax.length; i++) {\r\n            if(rollsLeft === 0 && prev===i) continue\r\n            if(prev===i) sum += help(i, rolls+1, rollsLeft-1)\r\n            else sum += help(i, rolls+1, rollMax[i]-1)\r\n        }\r\n        \r\n        dp[rolls][rollsLeft][prev] = sum % ((10**9) + 7)\r\n        return dp[rolls][rollsLeft][prev]\r\n    }\r\n    return help(null, 0, Infinity)\r\n}"
  }
}
