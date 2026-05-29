export default {
  "id": 1143,
  "name": "Longest Common Subsequence",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-common-subsequence",
  "relativeDir": "L/Longest Common Subsequence",
  "slug": "1143-longest-common-subsequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 21,
    "python": 20,
    "javascript": 46
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int longestCommonSubsequence(string text1, string text2) {\r\n        int dp[1001][1001] = {0};\r\n        for(int i = 1; i <= text1.size(); i++)\r\n            for(int j = 1; j <= text2.size(); j++)\r\n                if(text1[i-1] == text2[j-1]) dp[i][j] = 1 + dp[i-1][j-1];\r\n                else dp[i][j] = max(dp[i-1][j], dp[i][j-1]);\r\n        return dp[text1.size()][text2.size()];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def longestCommonSubsequence(self, text1: str, text2: str) -> int:\r\n        def lcs(ind1,ind2):\r\n            prev=[0 for i in range(ind2+1)]\r\n            curr=[0 for i in range(ind2+1)]\r\n            \r\n            for i in range(1,ind1+1):\r\n                for j in range(1,ind2+1):\r\n                    if text1[i-1]==text2[j-1]:\r\n                        curr[j]=1+prev[j-1]\r\n                         \r\n                    else:\r\n                        curr[j]=max(prev[j],curr[j-1])\r\n                prev=list(curr) # remember to use a new list for prev\r\n\r\n            return prev[-1]\r\n                    \r\n        \r\n        ans=lcs(len(text1),len(text2))\r\n        return ans",
    "java": "// Runtime: 21 ms (Top 78.9%) | Memory: 48.13 MB (Top 74.6%)\r\n\r\nclass Solution {\r\n    public int longestCommonSubsequence(String text1, String text2) {\r\n        int m = text1.length();\r\n        int n = text2.length();\r\n        int[][] dp = new int[m + 1][n + 1];\r\n\r\n        for (int i = 1; i <= m; i++) {\r\n            for (int j = 1; j <= n; j++) {\r\n                if (text1.charAt(i - 1) == text2.charAt(j - 1)) {\r\n                    dp[i][j] = 1 + dp[i - 1][j - 1];\r\n                } else {\r\n                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);\r\n                }\r\n            }\r\n        }\r\n\r\n        return dp[m][n];\r\n    }\r\n}",
    "javascript": "// Runtime: 165 ms (Top 45.70%) | Memory: 65.3 MB (Top 23.79%)\r\n/**\r\n * @param {string} text1\r\n * @param {string} text2\r\n * @return {number}\r\n */\r\nlet memo\r\nconst dp=(a,b,i,j)=>{\r\n    if(i===0||j===0)return 0;\r\n    if(memo[i][j]!=-1)return memo[i][j];\r\n    if(a[i-1]===b[j-1]){\r\n        return memo[i][j]= 1+ dp(a,b,i-1,j-1);\r\n    }else{\r\n        return memo[i][j]=Math.max(dp(a,b,i-1,j),dp(a,b,i,j-1));\r\n    }\r\n\r\n}\r\nconst bottomUp=(a,b)=>{\r\n\r\n    for(let i=1;i<=a.length;i++){\r\n        for(let j=1;j<=b.length;j++){\r\n            if(a[i-1]===b[j-1]){\r\n              memo[i][j]=1+memo[i-1][j-1]\r\n            }else{\r\n                memo[i][j]=Math.max(memo[i-1][j],memo[i][j-1]);\r\n            }\r\n\r\n        }\r\n    }\r\n\r\nreturn memo[a.length][b.length]\r\n\r\n}\r\n\r\nvar longestCommonSubsequence = function(text1, text2) {\r\n    memo=[];\r\n    for(let i=0;i<=text1.length;i++){\r\n        memo[i]=[];\r\n        for(let j=0;j<=text2.length;j++){\r\n          if(i===0||j===0)memo[i][j]=0;\r\n            else memo[i][j]=-1;\r\n        }\r\n    }\r\n    return bottomUp(text1,text2,text1.length,text2.length);\r\n    // return dp(text1,text2,text1.length,text2.length);\r\n};"
  }
}
