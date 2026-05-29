export default {
  "id": 1680,
  "name": "Concatenation of Consecutive Binary Numbers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers",
  "relativeDir": "C/Concatenation of Consecutive Binary Numbers",
  "slug": "1680-concatenation-of-consecutive-binary-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 10,
    "python": 12,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 62 ms (Top 40.74%) | Memory: 6.30 MB (Top 82.96%)\r\n\r\nclass Solution {\r\npublic:\r\n    \r\n    int numberOfBits(int n) {\r\n\t\t  return log2(n) + 1;\r\n    }\r\n    \r\n    int concatenatedBinary(int n) {\r\n        long ans = 0, MOD = 1e9 + 7;\r\n        \r\n        for (int i = 1; i <= n; ++i) {\r\n            int len = numberOfBits(i);\r\n            ans = ((ans << len) % MOD + i) % MOD;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def concatenatedBinary(self, n: int) -> int:\r\n        modulo = 10 ** 9 + 7\r\n        shift = 0 # tracking power of 2\r\n        res = 0\r\n        \r\n        for i in range(1, n+1):\r\n            if i & (i - 1) == 0: # see if num reaches a greater power of 2\r\n                shift += 1\r\n            res = ((res << shift) + i) % modulo # do the simulation\r\n        \r\n        return res",
    "java": "// Runtime: 613 ms (Top 30.00%) | Memory: 117.4 MB (Top 18.57%)\r\nclass Solution {\r\n    public int concatenatedBinary(int n) {\r\n        long res = 0;\r\n        for (int i = 1; i <= n; i++) {\r\n            res = (res * (int) Math.pow(2, Integer.toBinaryString(i).length()) + i) % 1000000007;\r\n        }\r\n        return (int) res;\r\n    }\r\n}",
    "javascript": "var concatenatedBinary = function(n) {\r\n    let num = 0;\r\n    \r\n    for(let i = 1; i <= n; i++) {\r\n        //OR num *= (1 << i.toString(2).length)\r\n        num *= (2 ** i.toString(2).length) \r\n        num += i;\r\n        num %= (10 ** 9 + 7)\r\n    }\r\n    return num;\r\n};"
  }
}
