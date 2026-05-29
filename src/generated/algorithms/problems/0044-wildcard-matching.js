export default {
  "id": 44,
  "name": "Wildcard Matching",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/wildcard-matching",
  "relativeDir": "W/Wildcard Matching",
  "slug": "0044-wildcard-matching",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 37,
    "python": 23,
    "javascript": 33
  },
  "languages": {
    "cpp": "// Runtime: 51 ms (Top 84.03%) | Memory: 27.8 MB (Top 21.38%)\r\nclass Solution {\r\npublic:\r\n    bool match(int i, int j, string &a, string &b, vector<vector<int>>&dp)\r\n    {\r\n        if(i<0 && j<0) return true;\r\n        if(i>=0 && j<0) return false;\r\n        if(i<0 && j>=0)\r\n        {\r\n            for(;j>-1;j--) if(b[j]!='*') return false;\r\n            return true;\r\n        }\r\n        if(dp[i][j]!=-1) return dp[i][j];\r\n        if(a[i]==b[j] || b[j]=='?') return dp[i][j] = match(i-1,j-1,a,b,dp);\r\n        if(b[j]=='*') return dp[i][j] = (match(i-1,j,a,b,dp) | match(i,j-1,a,b,dp));\r\n        return false;\r\n    }\r\n    bool isMatch(string s, string p) {\r\n        int n=s.size(), m=p.size();\r\n        vector<vector<int>>dp(n+1,vector<int>(m+1,-1));\r\n        return match(n-1,m-1,s,p,dp);\r\n    }\r\n};",
    "python": "# Runtime: 1580 ms (Top 22.92%) | Memory: 22.4 MB (Top 66.92%)\r\nclass Solution:\r\n    def isMatch(self, s: str, p: str) -> bool:\r\n        m= len(s)\r\n        n= len(p)\r\n\r\n        dp = [[False]*(n+1) for i in range(m+1)]\r\n\r\n        dp[0][0] = True\r\n\r\n        for j in range(len(p)):\r\n            if p[j] == \"*\":\r\n                dp[0][j+1] = dp[0][j]\r\n\r\n        for i in range(1,m+1):\r\n            for j in range(1,n+1):\r\n                if p[j-1] == \"*\":\r\n                    dp[i][j] = dp[i-1][j] or dp[i][j-1]\r\n\r\n                elif s[i-1] == p[j-1] or p[j-1] == \"?\":\r\n                    dp[i][j] = dp[i-1][j-1]\r\n\r\n        return dp[-1][-1]",
    "java": "// Runtime: 2 ms (Top 100.00%) | Memory: 42.3 MB (Top 99.02%)\r\nclass Solution {\r\n    public boolean isMatch(String s, String p) {\r\n        int i=0;\r\n        int j=0;\r\n        int starIdx=-1;\r\n        int lastMatch=-1;\r\n\r\n        while(i<s.length()){\r\n            if(j<p.length() && (s.charAt(i)==p.charAt(j) ||\r\n              p.charAt(j)=='?')){\r\n                i++;\r\n                j++;\r\n            }else if(j<p.length() && p.charAt(j)=='*'){\r\n                starIdx=j;\r\n                lastMatch=i;\r\n                j++;\r\n            }else if(starIdx!=-1){\r\n            //there is a no match and there was a previous star, we will reset the j to indx after star_index\r\n            //lastMatch will tell from which index we start comparing the string if we encounter * in pattern\r\n                j=starIdx+1;\r\n                lastMatch++; // we are saying we included more characters in * so we incremented the index\r\n                i=lastMatch;\r\n\r\n            }else{\r\n                return false;\r\n            }\r\n        }\r\n\r\n        while(j<p.length() && p.charAt(j)=='*') j++;\r\n\r\n        if(i!=s.length() || j!=p.length()) return false;\r\n\r\n        return true;\r\n\r\n    }\r\n}",
    "javascript": "var isMatch = function(s, p) {\r\n    const slen = s.length, plen = p.length;\r\n    const dp   = new Map();\r\n    \r\n    const solve = (si = 0, pi = 0) => {\r\n        // both are compared and are equal till end\r\n        if(si == slen && pi == plen) return true;\r\n        // we have consumed are wildcard string and still s is remaining\r\n        if(pi == plen) return false;\r\n        // we still have wildcard characters remaining\r\n        if(si == slen) {\r\n            while(p[pi] == '*') pi++;\r\n            return pi == plen;\r\n        }\r\n           \r\n        const key = [si, pi].join(':');\r\n        if(dp.has(key)) return dp.get(key);\r\n        \r\n        let ans = false;\r\n        if(p[pi] == '*') {\r\n\t\t\t// drop * or use it\r\n            ans = solve(si, pi + 1) || solve(si + 1, pi);\r\n        } else {\r\n            const match = s[si] == p[pi] || p[pi] == '?';\r\n            if(match) ans = solve(si + 1, pi + 1);   \r\n        }\r\n        \r\n        dp.set(key, ans);\r\n        \r\n        return ans;\r\n    }\r\n    return solve();\r\n};"
  }
}
