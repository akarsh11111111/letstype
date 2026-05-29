export default {
  "id": 1952,
  "name": "Three Divisors",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/three-divisors",
  "relativeDir": "T/Three Divisors",
  "slug": "1952-three-divisors",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 9,
    "python": 5,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 6 ms (Top 11.59%) | Memory: 5.8 MB (Top 68.23%)\r\nclass Solution {\r\npublic:\r\n    bool isPrime(int n) {\r\n        for (int i = 2; i <= sqrt(n); i++) if (n % i == 0) return false;\r\n        return true;\r\n    }\r\n\r\n    bool isThree(int n) {\r\n        return n != 1 && n != 2 && (int)sqrt(n)*sqrt(n) == n && isPrime(sqrt(n));\r\n    }\r\n};",
    "python": "// Runtime: 34 ms (Top 88.51%) | Memory: 16.40 MB (Top 53.4%)\r\n\r\nclass Solution:\r\n    def isThree(self, n: int) -> bool:\r\n        return sum(n%i == 0 for i in range(1, n+1)) == 3",
    "java": "class Solution {\r\n    public boolean isThree(int n) {\r\n        if(n<4 ) return false;\r\n        int res = (int)Math.sqrt(n);\r\n        for(int i=2;i*i<n;i++){\r\n            if(res%i ==0) return false;\r\n        }\r\n        return true;\r\n}}",
    "javascript": "var isThree = function(n) {\r\n    var set = new Set();\r\n    for(var i = 1; i<=Math.sqrt(n) && set.size <= 3; i++)\r\n    {\r\n        if(n % i === 0)\r\n        {\r\n            set.add(i);\r\n            set.add(n / i);\r\n        }\r\n    }\r\n    return set.size===3;  \r\n};"
  }
}
