export default {
  "id": 1312,
  "name": "Minimum Insertion Steps to Make a String Palindrome",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome",
  "relativeDir": "M/Minimum Insertion Steps to Make a String Palindrome",
  "slug": "1312-minimum-insertion-steps-to-make-a-string-palindrome",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 30,
    "python": 17,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int t[501][501];\r\n    int MinInsertion(string x,int m){\r\n    string y=x;\r\n    reverse(y.begin(),y.end());\r\n    for(int i=0;i<m+1;i++){\r\n        for(int j=0;j<m+1;j++){\r\n            if(i==0||j==0)\r\n                t[i][j]=0;\r\n        }\r\n    }\r\n    for(int i=1;i<m+1;i++){\r\n        for(int j=1;j<m+1;j++){\r\n            if(x[i-1]==y[j-1])\r\n                t[i][j]=1+t[i-1][j-1];\r\n            else    \r\n                t[i][j]=max(t[i-1][j],t[i][j-1]);\r\n        }\r\n    }\r\n    return m-t[m][m];\r\n}\r\n    int minInsertions(string s) {\r\n        return MinInsertion(s,s.length());\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minInsertions(self, s: str) -> int:\r\n        n = len(s)\r\n        prev_prev = [0]*n\r\n        prev = [0]*n\r\n        curr = [0] * n\r\n\r\n        for l in range(1, n):\r\n            for i in range(l, n):\r\n                if s[i] == s[i-l]:\r\n                    curr[i] = prev_prev[i-1]\r\n                else:\r\n                    curr[i] = min(prev[i-1], prev[i])+1\r\n            # print(curr)\r\n            prev_prev, prev, curr = prev, curr, prev_prev\r\n        \r\n        return prev[-1]",
    "java": "// Runtime: 40 ms (Top 71.55%) | Memory: 43.3 MB (Top 97.03%)\r\nclass Solution {\r\n    public int minInsertions(String s) {\r\n        StringBuilder sb = new StringBuilder(s);\r\n         String str = sb.reverse().toString();\r\n        int m=s.length();\r\n        int n=str.length();\r\n         System.out.println(str);\r\n        return LCS(s,str,m,n);\r\n\r\n    }\r\n    public int LCS(String x, String y,int m,int n){\r\n        int [][] t = new int [m+1][n+1];\r\n        for(int i=0;i<m+1;i++){\r\n           for(int j=0;j<n+1;j++){\r\n            if(m==0||n==0){t[m][n]=0;}\r\n           }\r\n        }\r\n        for(int i=1;i<m+1;i++){\r\n            for(int j=1;j<n+1;j++){\r\n                if(x.charAt(i-1)==y.charAt(j-1)){\r\n                    t[i][j]=1+t[i-1][j-1];\r\n                }\r\n                else{t[i][j]=Math.max(t[i][j-1],t[i-1][j]);\r\n                }\r\n            }\r\n        }\r\n        return y.length()-t[m][n];\r\n    }\r\n}",
    "javascript": "// Runtime: 219 ms (Top 27.71%) | Memory: 52.3 MB (Top 43.37%)\r\nvar minInsertions = function(s) {\r\n    const len = s.length;\r\n    const dp = new Array(len).fill(0).map(() => {\r\n        return new Array(len).fill(-1);\r\n    });\r\n\r\n    const compute = (i = 0, j = len - 1) => {\r\n        if(i >= j) return 0;\r\n\r\n        if(dp[i][j] != -1) return dp[i][j];\r\n\r\n        if(s[i] == s[j]) return compute(i + 1, j - 1);\r\n\r\n        return dp[i][j] = Math.min(\r\n            compute(i + 1, j),\r\n            compute(i, j - 1)\r\n        ) + 1;\r\n    }\r\n    return compute();\r\n};"
  }
}
