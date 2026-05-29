export default {
  "id": 70,
  "name": "Climbing Stairs",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/climbing-stairs",
  "relativeDir": "C/Climbing Stairs",
  "slug": "0070-climbing-stairs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 21,
    "python": 18,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.9 MB (Top 57.18%)\r\n\r\nclass Solution {\r\npublic:\r\n    int climbStairs(int n) {\r\n        if (n <= 2) return n;\r\n        int prev = 2, prev2 = 1, res;\r\n        for (int i = 3; i <= n; i++) {\r\n            res = prev + prev2;\r\n            prev2 = prev;\r\n            prev = res;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def climbStairs(self, n):\r\n        \"\"\"\r\n        :type n: int\r\n        :rtype: int\r\n        \"\"\"\r\n        memo ={}\r\n        memo[1] = 1\r\n        memo[2] = 2\r\n        \r\n        def climb(n):\r\n            if n in memo: # if the recurssion already done before first take a look-up in the look-up table\r\n                return memo[n]\r\n            else:   # Store the recurssion function in the look-up table and reuturn the stored look-up table function\r\n                memo[n] =  climb(n-1) + climb(n-2)\r\n                return memo[n]\r\n        \r\n        return climb(n)",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 39.00 MB (Top 80.9%)\r\n\r\nclass Solution {\r\n    public int climbStairs(int n) {\r\n        int[] memo = new int[n + 1];\r\n        return calculateWays(n, memo);\r\n    }\r\n    \r\n    private int calculateWays(int n, int[] memo) {\r\n        if (n == 1 || n == 2) {\r\n            return n;\r\n        }\r\n        \r\n        if (memo[n] != 0) {\r\n            return memo[n];\r\n        }\r\n        \r\n        memo[n] = calculateWays(n - 1, memo) + calculateWays(n - 2, memo);\r\n        return memo[n];\r\n    }\r\n}",
    "javascript": "// Runtime: 40 ms (Top 97.32%) | Memory: 41.70 MB (Top 60.47%)\r\n\r\nvar climbStairs = function(n) {\r\n    if (n < 4) return n;\r\n    let fib = [1, 1];\r\n    for (let i = 2; i <= n; i++) {\r\n        fib[i] = fib[i - 1] + fib[i - 2];\r\n    }\r\n    return fib[n];\r\n};"
  }
}
