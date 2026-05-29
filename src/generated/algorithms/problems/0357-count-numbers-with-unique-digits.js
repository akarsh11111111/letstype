export default {
  "id": 357,
  "name": "Count Numbers with Unique Digits",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-numbers-with-unique-digits",
  "relativeDir": "C/Count Numbers with Unique Digits",
  "slug": "0357-count-numbers-with-unique-digits",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 47,
    "java": 29,
    "python": 15,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Recursion \r\nclass Solution {\r\npublic:\r\n    int solve(int n){\r\n        if (n==0)  return 1; \r\n        int tmp =9 ; \r\n        int ans = 9 ;\r\n        for ( int i =1 ; i<n ; i++)\r\n            ans*=tmp--; \r\n        return dp[n]=ans + solve(n-1); \r\n    }\r\n    int countNumbersWithUniqueDigits(int n) {\r\n        return solve(n); \r\n    }\r\n};\r\n\r\n//Memoization\r\nclass Solution {\r\npublic:\r\n    int dp[9]={1};\r\n    int solve(int n){\r\n        if ( n==0 || dp[n]!=0) return dp[n]; \r\n        int tmp =9 ; \r\n        int ans = 9 ;\r\n        for ( int i =1 ; i<n ; i++)\r\n            ans*=tmp--; \r\n        return dp[n]=ans + solve(n-1); \r\n    }\r\n    int countNumbersWithUniqueDigits(int n) {\r\n        return solve(n); \r\n    }\r\n};\r\n//Dynamic Programming\r\nclass Solution {\r\npublic:\r\n    int countNumbersWithUniqueDigits(int n) {\r\n        int sum=1,c=9;\r\n        vector<int> dp(n+2);\r\n        dp[0]=1,dp[1]=10;\r\n        for(int i=2;i<=n;i++){\r\n            dp[i]=dp[i-1]*c+sum;\r\n            sum+=dp[i-1];\r\n            c--;\r\n        }\r\n        return dp[n];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countNumbersWithUniqueDigits(self, n: int) -> int:\r\n        \r\n        if n == 0:\r\n            return 1\r\n        \r\n        table = [0]*(n+1)\r\n        \r\n        table[0] = 1\r\n        table[1] = 9\r\n        \r\n        for i in range(2, n+1):\r\n            table[i] = table[i-1]*(11-i)\r\n        \r\n        return sum(table)",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 39.90 MB (Top 52.99%)\r\n\r\nclass Solution {\r\n    public int countNumbersWithUniqueDigits(int n) \r\n    {\r\n\t/*\r\n\t    9 * 9 + 10 for n = 2\r\n        9 * 9 * 8 + 10 for n = 3\r\n        9 * 9 * 8 * 7 + 10 for n = 4\r\n        9 * 9 * 8 * 7 * 6 + 10 for n = 5\r\n\t*/\t\r\n        if(n == 0)\r\n            return 1;\r\n        \r\n        if(n == 1)\r\n            return 10;\r\n        \r\n        int product =9;\r\n        int result = 10;\r\n        \r\n        for(int i=2; i<=n; i++)\r\n        {\r\n            product = product * (11-i);\r\n            result += product;\r\n        }\r\n        \r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 53 ms (Top 32.76%) | Memory: 41.40 MB (Top 93.1%)\r\n\r\n/**\r\n * @param {number} n\r\n * @return {number}\r\n */\r\nvar countNumbersWithUniqueDigits = function(n) {\r\n    if(n==0) return 1;\r\n    let res=1;\r\n    let k=0;\r\n    for(let i=1; i<=n; i++){\r\n        k=1;\r\n        for(let j=0; j<i; j++){\r\n            if(j==0){ \r\n             k*=(9-j);}\r\n            else{\r\n             k*=(10-j);}\r\n        }\r\n        res+=k;\r\n    }\r\n    return res;\r\n\r\n};"
  }
}
