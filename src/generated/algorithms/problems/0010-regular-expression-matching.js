export default {
  "id": 10,
  "name": "Regular Expression Matching",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/regular-expression-matching",
  "relativeDir": "R/Regular Expression Matching",
  "slug": "0010-regular-expression-matching",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 22,
    "python": 19,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isMatch(string s, string p) {\r\n        return helper(s,p,0,0);\r\n    }\r\n    \r\n    bool helper(string s, string p, int i, int j)\r\n    {\r\n        if(j==p.length())\r\n            return i==s.length();\r\n        bool first_match=(i<s.length() && (s[i]==p[j] || p[j]=='.' ));\r\n        \r\n        if(j+1<p.length() && p[j+1]=='*')\r\n        {\r\n            return (helper(s,p,i,j+2)|| (first_match && helper(s,p,i+1,j) ));\r\n        }\r\n        else\r\n        {\r\n            return (first_match && helper(s,p,i+1,j+1));\r\n        }\r\n    }\r\n};",
    "python": "class Solution:\r\n   def isMatch(self, s, p):\r\n       n = len(s)\r\n       m = len(p)\r\n       dp = [[False for _ in range (m+1)] for _ in range (n+1)]\r\n       dp[0][0] = True\r\n       for c in range(1,m+1):\r\n           if p[c-1] == '*' and c > 1:\r\n               dp[0][c] = dp[0][c-2]\r\n       for r in range(1,n+1):\r\n           for c in range(1,m+1):\r\n               if p[c-1] == s[r-1] or p[c-1] == '.':\r\n                   dp[r][c] = dp[r-1][c-1]\r\n               elif c > 1 and p[c-1] == '*':\r\n                   if  p[c-2] =='.' or s[r-1]==p[c-2]:\r\n                       dp[r][c] =dp[r][c-2] or dp[r-1][c]\r\n                   else:\r\n                       dp[r][c] = dp[r][c-2]\r\n       return dp[n][m]",
    "java": "// Runtime: 4 ms (Top 79.86%) | Memory: 42.3 MB (Top 82.62%)\r\nclass Solution {\r\n    public boolean isMatch(String s, String p) {\r\n        if (p == null || p.length() == 0) return (s == null || s.length() == 0);\r\n\r\n        boolean dp[][] = new boolean[s.length()+1][p.length()+1];\r\n        dp[0][0] = true;\r\n        for (int j=2; j<=p.length(); j++) {\r\n            dp[0][j] = p.charAt(j-1) == '*' && dp[0][j-2];\r\n        }\r\n\r\n        for (int j=1; j<=p.length(); j++) {\r\n            for (int i=1; i<=s.length(); i++) {\r\n                if (p.charAt(j-1) == s.charAt(i-1) || p.charAt(j-1) == '.')\r\n                    dp[i][j] = dp[i-1][j-1];\r\n                else if(p.charAt(j-1) == '*')\r\n                    dp[i][j] = dp[i][j-2] || ((s.charAt(i-1) == p.charAt(j-2) || p.charAt(j-2) == '.') && dp[i-1][j]);\r\n            }\r\n        }\r\n        return dp[s.length()][p.length()];\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} s\r\n * @param {string} p\r\n * @return {boolean}\r\n */\r\n\r\nvar isMatch = function(s, p) {\r\n    const pattern = new RegExp('^'+p+'$'); // ^ means start of string, $ means end of the string, these are to prevent certain pattern that match a part of the string to be returned as true.\r\n    return pattern.test(s);\r\n};"
  }
}
