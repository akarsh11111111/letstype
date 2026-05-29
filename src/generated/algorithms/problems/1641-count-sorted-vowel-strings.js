export default {
  "id": 1641,
  "name": "Count Sorted Vowel Strings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-sorted-vowel-strings",
  "relativeDir": "C/Count Sorted Vowel Strings",
  "slug": "1641-count-sorted-vowel-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 14,
    "python": 13
  },
  "languages": {
    "cpp": "//Solution 01:\r\nclass Solution {\r\npublic:\r\n    int countVowelStrings(int n) {\r\n        int a=1, e=1, i=1, o=1, u=1;\r\n        \r\n        while(--n){\r\n            o += u;\r\n            i += o;\r\n            e += i;\r\n            a += e;\r\n        }\r\n        \r\n        return a+e+i+o+u;\r\n    }\r\n};\r\n\r\n//Solution 02:\r\nclass Solution {\r\npublic:\r\n    int countVowelStrings(int n) {\r\n        vector<int> dp(5, 1);\r\n        int ans = 0;\r\n        \r\n        while(--n){\r\n            for(int i=3; i>=0; i--){\r\n                dp[i] += dp[i+1];\r\n            }\r\n        }\r\n        \r\n        for(auto x:dp) ans += x;\r\n        \r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 28 ms (Top 98.15%) | Memory: 13.9 MB (Top 68.10%)\r\nclass Solution:\r\n    def countVowelStrings(self, n: int) -> int:\r\n        dp = [[0] * 6 for _ in range(n+1)]\r\n        for i in range(1, 6):\r\n            dp[1][i] = i\r\n\r\n        for i in range(2, n+1):\r\n            dp[i][1]=1\r\n            for j in range(2, 6):\r\n                dp[i][j] = dp[i][j-1] + dp[i-1][j]\r\n\r\n        return dp[n][5]",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 39.04 MB (Top 74.4%)\r\n\r\nclass Solution {\r\n    public int countVowelStrings(int n) {\r\n        int a=1,e=1,i=1,o=1,u=1;\r\n        for(int k=1;k<n;k++){\r\n            a=a+e+i+o+u;\r\n            e=e+i+o+u;\r\n            i=i+o+u;\r\n            o=o+u;\r\n        }\r\n        return a+e+i+o+u;\r\n    }\r\n}"
  }
}
