export default {
  "id": 509,
  "name": "Fibonacci Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/fibonacci-number",
  "relativeDir": "F/Fibonacci Number",
  "slug": "0509-fibonacci-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 7,
    "java": 16,
    "python": 9,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int fib(int n) {\r\n        if(n<=1) return n;\r\n        return fib(n-1)+fib(n-2);\r\n    }\r\n};",
    "python": "# Runtime: 46 ms (Top 80.68%) | Memory: 13.8 MB (Top 55.21%)\r\nclass Solution:\r\n    def fib(self, n: int) -> int:\r\n        fa = [0, 1]\r\n\r\n        for i in range(2, n + 1):\r\n            fa.append(fa[i-2] + fa[i-1])\r\n\r\n        return fa[n]",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 40.00 MB (Top 41.57%)\r\n\r\nclass Solution {\r\n    public int fib(int n) {\r\n        if(n == 0)\r\n            return 0;\r\n        if(n == 1)\r\n            return 1;\r\n        int[] Fibonacci = new int[n+1];\r\n        Fibonacci[0] = 0;\r\n        Fibonacci[1] = 1;\r\n        for(int i = 2; i < n+1; i++)\r\n            Fibonacci[i] = Fibonacci[i-1] + Fibonacci[i-2];\r\n        return Fibonacci[n];\r\n    }\r\n}",
    "javascript": "// Runtime: 86 ms (Top 69.22%) | Memory: 41.9 MB (Top 44.06%)\r\n/**\r\n * @param {number} n\r\n * @return {number}\r\n */\r\n // Recursion and memomization approach\r\nvar fib = function(n,cache ={}) {\r\n    if (n <= 0) return 0\r\n    if(n in cache) {\r\n        return cache[n]\r\n    }\r\n    if(n == 1 || n == 2) {\r\n        return 1;\r\n    }\r\n    cache[n] = fib(n-1,cache) + fib(n-2,cache)\r\n    return cache[n]\r\n};\r\n//Tabulation approach\r\nvar fib = function(n) {\r\n    const table = new Array(n + 1).fill(0);\r\n    table[1] = 1;\r\n    for(let i = 0;i<=n;i++) {\r\n            table[i+1] += table[i];\r\n            table[i+2] += table[i];\r\n    }\r\n    return table[n]\r\n};"
  }
}
