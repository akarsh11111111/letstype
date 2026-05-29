export default {
  "id": 342,
  "name": "Power of Four",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/power-of-four",
  "relativeDir": "P/Power of Four",
  "slug": "0342-power-of-four",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 6,
    "python": 9,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isPowerOfFour(int n) {\r\n        if(n==1)\r\n            return true;\r\n        long long p=1;\r\n        for(int i=1;i<n;i++)\r\n        {\r\n            p=p*4;\r\n            if(p==n)\r\n                return true;\r\n            if(p>n)\r\n                return false;\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "# Runtime: 46 ms (Top 35.3%) | Memory: 16.23 MB (Top 61.5%)\r\n\r\nimport math \r\nclass Solution:\r\n    def isPowerOfFour(self, n: int) -> bool:\r\n\r\n        if n <= 0:\r\n            return False\r\n        return math.log(n, 4).is_integer()",
    "java": "// Runtime: 2 ms (Top 64.18%) | Memory: 40.9 MB (Top 74.82%)\r\nclass Solution {\r\n    public boolean isPowerOfFour(int n) {\r\n        return (Math.log10(n)/Math.log10(4))%1==0;\r\n    }\r\n}",
    "javascript": "// Runtime: 96 ms (Top 66.73%) | Memory: 43.9 MB (Top 16.57%)\r\nvar isPowerOfFour = function(n) {\r\n    if(n==1){\r\n        return true\r\n    }\r\n    let a=1;\r\n    for(let i=2;i<=30;i++){\r\n        a=a*4\r\n        if(a===n){\r\n            return true\r\n        }\r\n    }\r\n    return false\r\n};"
  }
}
