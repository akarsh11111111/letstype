export default {
  "id": 516,
  "name": "Longest Palindromic Subsequence",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-palindromic-subsequence",
  "relativeDir": "L/Longest Palindromic Subsequence",
  "slug": "0516-longest-palindromic-subsequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 24,
    "python": 17,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 111 ms (Top 80.62%) | Memory: 10.8 MB (Top 79.38%)\r\nclass Solution {\r\npublic:\r\n    int longestPalindromeSubseq(string s) {\r\n        int n = s.size();\r\n        int dp[n][n];\r\n        memset(dp, 0, sizeof(dp));\r\n        for(int i = 0; i < n; i++){\r\n            dp[i][i] = 1;\r\n        }\r\n        int res = 1;\r\n        for(int j = 1; j < n; j++){\r\n            for(int r = 0, c = j ; r < n && c < n; r++, c++){\r\n                if(s[r] == s[c]){\r\n                    dp[r][c] = 2+dp[r+1][c-1];\r\n                }\r\n                else{\r\n                    dp[r][c] = max(dp[r][c-1],dp[r+1][c]);\r\n                }\r\n            }\r\n        }\r\n        return dp[0][n-1];\r\n    }\r\n};",
    "python": "// Runtime: 1248 ms (Top 52.16%) | Memory: 34.60 MB (Top 50.8%)\r\n\r\nclass Solution:\r\n    def longestPalindromeSubseq(self, s: str) -> int:\r\n        dp = [[0 for _ in range(len(s))] for _ in range(len(s))]\r\n        for k in range(1, len(s) + 1):\r\n            for i in range(len(s) - k + 1):\r\n                j = k + i - 1\r\n                if i == j:\r\n                    dp[i][j] = 1\r\n                elif i + 1 == j and s[i] == s[j]:\r\n                    dp[i][j] = 2\r\n                elif s[i] == s[j]:\r\n                    dp[i][j] = dp[i+1][j-1] + 2\r\n                else:\r\n                    dp[i][j] = max(dp[i+1][j], dp[i][j-1])\r\n        return dp[0][-1]",
    "java": "class Solution {\r\n    public int longestPalindromeSubseq(String s) {\r\n        \tStringBuilder sb = new StringBuilder(s);\r\n    \t    sb.reverse();\r\n    \t    String s2 = sb.toString();\r\n        return longestCommonSubsequence(s,s2);\r\n    }\r\n     public int longestCommonSubsequence(String text1, String text2) {\r\n        int [][]dp = new int[text1.length()+1][text2.length()+1]; \r\n        for(int i= text1.length()-1;i>=0;i--){\r\n            for(int j = text2.length()-1;j>=0;j--){\r\n                char ch1 = text1.charAt(i);\r\n                char ch2 = text2.charAt(j);\r\n                if(ch1==ch2) // diagnal\r\n                dp[i][j]= 1+dp[i+1][j+1];\r\n                else// right,down considering not matchning char from s1 and skipping s2 \r\n                //considering not matchning char from s2 and skipping s1\r\n                    dp[i][j] = Math.max(dp[i][j+1],dp[i+1][j]);\r\n                    \r\n            }\r\n        }\r\n        return dp[0][0];\r\n    }\r\n}",
    "javascript": "// Runtime: 414 ms (Top 33.56%) | Memory: 88.6 MB (Top 56.51%)\r\nvar longestPalindromeSubseq = function(s) {\r\n    const { length } = s;\r\n    const dp = Array(length).fill('').map(() => Array(length).fill(0));\r\n\r\n    for (let start = 0; start < length; start++) {\r\n        const str = s[start];\r\n        dp[start][start] = 1;\r\n\r\n        for (let end = start - 1; end >= 0; end--) {\r\n            dp[start][end] = str === s[end]\r\n                ? dp[start - 1][end + 1] + 2\r\n                : Math.max(dp[start - 1][end], dp[start][end + 1])\r\n        }\r\n    }\r\n    return dp[length - 1][0];\r\n};"
  }
}
