export default {
  "id": 172,
  "name": "Factorial Trailing Zeroes",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/factorial-trailing-zeroes",
  "relativeDir": "F/Factorial Trailing Zeroes",
  "slug": "0172-factorial-trailing-zeroes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 7,
    "python": 8,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int trailingZeroes(int n) {\r\n        int ni=0, mi=0;\r\n        for (int i=1; i<=n; i++){\r\n            int x=i;\r\n            while (x%2==0){\r\n                x= x>>1;\r\n                ni++;\r\n            }\r\n            while (x%5==0){\r\n                x= x/5;\r\n                mi++;\r\n            }\r\n        }\r\n        return min(mi,ni);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def trailingZeroes(self, n: int) -> int:\r\n        res = 0\r\n        for i in range(2, n+1):\r\n            while i > 0 and i%5 == 0:\r\n                i //= 5\r\n                res += 1\r\n        return res",
    "java": "class Solution {\r\n    public int trailingZeroes(int n) {\r\n        int count=0;\r\n        while(n>1) {count+=n/5; n=n/5;}\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 110 ms (Top 31.72%) | Memory: 41.9 MB (Top 87.38%)\r\n\r\nvar trailingZeroes = function(n) {\r\n    let count=0\r\n   while(n>=5){\r\n       count += ~~(n/5)\r\n       n= ~~(n/5)\r\n   }\r\n    return count\r\n};"
  }
}
