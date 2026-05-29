export default {
  "id": 1332,
  "name": "Remove Palindromic Subsequences",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-palindromic-subsequences",
  "relativeDir": "R/Remove Palindromic Subsequences",
  "slug": "1332-remove-palindromic-subsequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 16,
    "python": 3,
    "javascript": 4
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.60 MB (Top 43.9%)\r\n\r\nclass Solution {\r\npublic:\r\n    int removePalindromeSub(string S) {\r\n        if (S == \"\") return 0;\r\n        for (int i = 0, j = S.size() - 1; i < j; i++, j--)\r\n            if (S[i] != S[j]) return 2;\r\n        return 1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def removePalindromeSub(self, s: str) -> int:\r\n        return 1 if s[::-1] == s else 2",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 42.3 MB (Top 19.55%)\r\nclass Solution\r\n{\r\n    public int removePalindromeSub(String s)\r\n    {\r\n        int left = 0 , right = s.length() - 1 ;\r\n        while( left < right )\r\n        {\r\n            if( s.charAt(left++) != s.charAt(right--) )\r\n            {\r\n                return 2 ;\r\n            }\r\n        }\r\n        return 1 ;\r\n    }\r\n}",
    "javascript": "var removePalindromeSub = function(s) {\r\n    const isPalindrome = s == s.split('').reverse().join('');\r\n    return isPalindrome ? 1 : 2;\r\n};"
  }
}
