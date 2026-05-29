export default {
  "id": 1925,
  "name": "Count Square Sum Triples",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-square-sum-triples",
  "relativeDir": "C/Count Square Sum Triples",
  "slug": "1925-count-square-sum-triples",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 14,
    "python": 10,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 12 ms (Top 62.01%) | Memory: 6 MB (Top 20.41%)\r\nclass Solution {\r\npublic:\r\n    int countTriples(int n) {\r\n        int res = 0;\r\n        for (int a = 3, sqa; a < n; a++) {\r\n            sqa = a * a;\r\n            for (int b = 3, sqc, c; b < n; b++) {\r\n                sqc = sqa + b * b;\r\n                c = sqrt(sqc);\r\n                if (c > n) break;\r\n                res += c * c == sqc;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countTriples(self, n: int) -> int:\r\n        c = 0\r\n        for i in range(1, n+1):\r\n            for j in range(i+1, n+1):\r\n                sq = i*i + j*j\r\n                r = int(sq ** 0.5)\r\n                if ( r*r == sq and r <= n ):\r\n                    c +=2\r\n        return c",
    "java": "class Solution {\r\n    public int countTriples(int n) {\r\n        int c = 0;\r\n        for(int i=1 ; i<=n ; i++){\r\n            for(int j=i+1 ; j<=n ; j++){\r\n                int sq = ( i * i) + ( j * j);\r\n                int r = (int) Math.sqrt(sq);\r\n                if( r*r == sq && r <= n )\r\n                    c += 2;\r\n            }\r\n        }\r\n        return c;\r\n    }\r\n}",
    "javascript": "// Runtime: 111 ms (Top 65.71%) | Memory: 41.8 MB (Top 92.86%)\r\nvar countTriples = function(n) {\r\n    let count = 0;\r\n    for (let i=1; i < n; i++) {\r\n        for (let j=1; j < n; j++) {\r\n            let root = Math.sqrt(j*j + i*i)\r\n            if (Number.isInteger(root) && root <= n) {\r\n                count++\r\n            }\r\n        }\r\n    }\r\n\r\n    return count\r\n};"
  }
}
