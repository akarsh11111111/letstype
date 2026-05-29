export default {
  "id": 1374,
  "name": "Generate a String With Characters That Have Odd Counts",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts",
  "relativeDir": "G/Generate a String With Characters That Have Odd Counts",
  "slug": "1374-generate-a-string-with-characters-that-have-odd-counts",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 12,
    "python": 13,
    "javascript": 5
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.2 MB (Top 69.17%)\r\nclass Solution {\r\npublic:\r\n    string generateTheString(int n) {\r\n        string s=\"\";\r\n        if(n%2!=0){\r\n            for(int i=0;i<n;i++)\r\n                s+=\"a\";\r\n        }\r\n        else{\r\n            for(int i=0;i<n-1;i++)\r\n                s+=\"a\";\r\n            s+=\"b\";\r\n        }\r\n        return s;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def generateTheString(self, n: int) -> str:\r\n        alpha = \"abcdefghijklmnopqrstuvwxyz\"\r\n        res=\"\"\r\n        while n>0:\r\n            curr, alpha = alpha[0], alpha[1:]\r\n            if n%2:\r\n                res += curr*n\r\n                n-=n\r\n            else: \r\n                res += curr*(n-1)\r\n                n-=n-1\r\n        return res",
    "java": "// Runtime: 10 ms (Top 6.68%) | Memory: 45.2 MB (Top 20.03%)\r\nclass Solution {\r\n    public String generateTheString(int n) {\r\n        String s = \"\";\r\n        String string =\"a\";\r\n        for (int i = 0; i < n-1; i++)\r\n            s += string;\r\n        if(n%2==0)\r\n        return s+\"b\";\r\n        return s+\"a\";\r\n    }\r\n}",
    "javascript": "// Runtime: 63 ms (Top 13.04%) | Memory: 42.60 MB (Top 28.26%)\r\n\r\nvar generateTheString = function(n) {\r\n    return n%2 ? new Array(n).fill('a').join('') : new Array(n - 1).fill('a').join('') + 'b';\r\n};"
  }
}
