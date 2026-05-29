export default {
  "id": 97,
  "name": "Interleaving String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/interleaving-string",
  "relativeDir": "I/Interleaving String",
  "slug": "0097-interleaving-string",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "python": 14,
    "javascript": 20
  },
  "languages": {
    "cpp": "/* index shifted by 1 because when memoization applied negative index can't be passed as arg for function */\r\nclass Solution {\r\npublic:\r\n    bool f(int i , int n ,int m, string &s1,string &s2,string &s3,vector<vector<int>> &dp){\r\n        \r\n        cout<<i<<n<<m<<endl;\r\n        if(i==0) return true;\r\n        if(n==0 && m ==0) return false;\r\n        \r\n        if(dp[n][m] != -1)\r\n            return dp[n][m];\r\n        \r\n        bool isMatchFoundS1 = false;\r\n        if(n> 0 && s1[n-1] == s3[i-1])\r\n            isMatchFoundS1 = f(i-1,n-1,m,s1,s2,s3,dp);\r\n        \r\n        bool isMatchFoundS2 = false;\r\n        if(m >0 && s2[m-1] == s3[i-1])\r\n            isMatchFoundS2 = f(i-1,n,m-1,s1,s2,s3,dp);\r\n        \r\n        return dp[n][m] = isMatchFoundS1 || isMatchFoundS2;\r\n    }\r\n    \r\n    bool isInterleave(string s1, string s2, string s3) {\r\n        \r\n        int b = s1.size();\r\n        int c = s2.size();\r\n        int a = s3.size();\r\n        if(b + c != a) return false;\r\n        \r\n      vector<vector<int>> dp(b+1,vector<int>(c+1,-1));\r\n       \r\n        return f(a,b,c,s1,s2,s3,dp);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:\r\n        if len(s1) + len(s2) != len(s3) :\r\n            return False\r\n        dp = [[False] * (len(s2) + 1) for i in range(len(s1) + 1)]\r\n        dp[len(s1)][len(s2)] = True\r\n        \r\n        for i in range(len(s1), -1, -1):\r\n            for j in range(len(s2), -1, -1):\r\n                if i < len(s1) and s1[i] == s3[i + j] and dp[i + 1][j]:\r\n                    dp[i][j] = True\r\n                if j < len(s2) and s2[j] == s3[i + j] and dp[i][j + 1]:\r\n                    dp[i][j] = True\r\n        return dp[0][0]",
    "javascript": "var isInterleave = function(s1, s2, s3) {\r\n    const dp = new Map();\r\n    const solve = (a = 0, b = 0, c = 0) => {\r\n        if(c == s3.length) return a == s1.length && b == s2.length;\r\n        const key = [a, b, c].join(':');\r\n        \r\n        if(dp.has(key)) {\r\n            // console.log('hit');\r\n            return dp.get(key);\r\n        }\r\n        \r\n        let takeS1 = false, takeS2 = false;\r\n        if(s1[a] == s3[c]) takeS1 = solve(a + 1, b, c + 1);\r\n        if(s2[b] == s3[c]) takeS2 = solve(a, b + 1, c + 1);\r\n\r\n        dp.set(key, takeS1 || takeS2);\r\n        return takeS1 || takeS2;\r\n    }\r\n    return solve();\r\n};"
  }
}
