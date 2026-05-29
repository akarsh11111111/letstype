export default {
  "id": 712,
  "name": "Minimum ASCII Delete Sum for Two Strings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings",
  "relativeDir": "M/Minimum ASCII Delete Sum for Two Strings",
  "slug": "0712-minimum-ascii-delete-sum-for-two-strings",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "python": 18,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n   long long int solve(int i,int j,string &s,string &t,vector<vector<int>> &dp)\r\n    {\r\n        if(i<0) {\r\n            long long ans=0;\r\n           for(int k=0;k<j+1;k++)\r\n           {\r\n              int x=int(t[k]);\r\n              ans+=x;\r\n           }\r\n           return ans;\r\n        }\r\n        if(j<0)\r\n        { \r\n            long long ans=0;\r\n           for(int k=0;k<i+1;k++)\r\n           {\r\n              int x=int(s[k]);\r\n              ans+=x;\r\n           }\r\n           return ans;\r\n        }\r\n        if(dp[i][j]!=-1) return dp[i][j];\r\n        if(s[i]==t[j]) return dp[i][j]= solve(i-1,j-1,s,t,dp);\r\n        else{\r\n           long long x=int(s[i]) +solve(i-1,j,s,t,dp);\r\n             long long y=int(t[j])+solve(i,j-1,s,t,dp);\r\n             return dp[i][j]=min(x,y);\r\n        }\r\n    }\r\n    long long int minimumDeleteSum(string s1, string s2) {\r\n        int n=s1.size();\r\n        int m=s2.size();\r\n        vector<vector<int>> dp(n+1,vector<int>(m+1,-1));\r\n        return solve(n-1,m-1,s1,s2,dp);\r\n    }\r\n};",
    "python": "# Runtime: 4020 ms (Top 5.03%) | Memory: 205.5 MB (Top 14.36%)\r\nclass Solution:\r\n    def minimumDeleteSum(self, s1: str, s2: str) -> int:\r\n        m, n, lookup = len(s1), len(s2), {}\r\n        def fun(i, j):\r\n            if (i,j) in lookup:\r\n                return lookup[(i,j)]\r\n            if i < 0:\r\n                return sum([ord(char) for char in s2[:j+1]])\r\n            if j < 0:\r\n                return sum([ord(char) for char in s1[:i+1]])\r\n            if s1[i] == s2[j]:\r\n                res = fun(i-1, j-1)\r\n            else:\r\n                res = min(ord(s1[i]) + fun(i-1,j), ord(s2[j]) + fun(i,j-1))\r\n            lookup[(i,j)] = res\r\n            return lookup[(i,j)]\r\n        return fun(m-1, n-1)",
    "javascript": "var minimumDeleteSum = function(s1, s2) {\r\n    const len1 = s1.length, len2 = s2.length;\r\n    const dp = [...Array(len1+1)].map(() => Array(len2+1).fill(0));\r\n    \r\n    for(let i = 1; i <= len1; i++) {\r\n        dp[i][0] = dp[i-1][0] + s1.charCodeAt(i-1);\r\n    }\r\n    \r\n    for(let j = 1; j <= len2; j++) {\r\n        dp[0][j] = dp[0][j-1] + s2.charCodeAt(j-1);\r\n    }\r\n    \r\n    for(let i = 1; i <= len1; i++) {\r\n        for(let j = 1; j <= len2; j++) {\r\n            if(s1[i-1] == s2[j-1]) dp[i][j] = dp[i-1][j-1];\r\n            else {\r\n                const del1 = s1.charCodeAt(i-1) + dp[i-1][j];\r\n                const del2 = s2.charCodeAt(j-1) + dp[i][j-1];\r\n                dp[i][j] = Math.min(del1, del2);\r\n            }\r\n        }\r\n    }\r\n    return dp[len1][len2];\r\n};"
  }
}
