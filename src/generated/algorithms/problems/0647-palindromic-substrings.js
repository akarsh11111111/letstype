export default {
  "id": 647,
  "name": "Palindromic Substrings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/palindromic-substrings",
  "relativeDir": "P/Palindromic Substrings",
  "slug": "0647-palindromic-substrings",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "python": 21,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int countSubstrings(string s) {\r\n        int count = s.size();\r\n        for(int i = 0; i < s.size(); i++) {\r\n            int len1 = expand(s, i, i+1);\r\n            int len2 = expand(s, i, i);\r\n            \r\n\t\t\t// every palindrome found has len/2 total number of palindromes\r\n            count += len1/2;\r\n            count += len2/2;\r\n        }\r\n        return count;\r\n    }\r\n    \r\n    int expand(string s, int i, int j) {\r\n        while(i >= 0 && j < s.size() && s[i] == s[j]) {\r\n            i--;j++;\r\n        }\r\n        return j-i-1;\r\n    }\r\n};",
    "python": "int n = s.length();\r\n        int count = 0;\r\n        for(int i = 0;i<n;i++){\r\n            int l = i;\r\n            int r = l;\r\n            while(l>=0 && r<n && s[l]==s[r]){\r\n                count++;\r\n                l--;\r\n                r++;\r\n            }\r\n        }\r\n        for(int i = 0;i<n-1;i++){\r\n            int l =  i;\r\n            int r = l+1;\r\n            while(l>=0 && r<n && s[l]==s[r]){\r\n                count++;\r\n                l--;\r\n                r++;\r\n            }\r\n        }\r\n        return count;",
    "javascript": "// Runtime: 91 ms (Top 28.5%) | Memory: 71.62 MB (Top 8.5%)\r\n\r\nvar countSubstrings = function(s) {\r\n    const n = s.length;\r\n    const dp = [...Array(n)].map(() => Array(n).fill(false));\r\n    let count = 0;\r\n    \r\n    // Base case: single letter substrings\r\n    for(let i = 0; i < n; i++) {\r\n        dp[i][i] = true;\r\n        count++\r\n    }\r\n    \r\n    // Base case: double letter substrings\r\n    for(let i = 0; i < n-1; i++) {\r\n        dp[i][i+1] = (s[i] === s[i+1]);\r\n        dp[i][i+1] && count++;\r\n    }\r\n    \r\n    // substrings longer than 2 chars\r\n    for(let len = 3; len <= n; len++) {\r\n        let start = 0, end = start+len-1;\r\n        \r\n        while(end < n) {\r\n            dp[start][end] = (dp[start+1][end-1] && s[start] === s[end]);\r\n            dp[start][end] && count++;\r\n            start++; end++;\r\n        }\r\n    }\r\n    return count;\r\n};"
  }
}
