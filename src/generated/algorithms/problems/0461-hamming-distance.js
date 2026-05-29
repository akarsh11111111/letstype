export default {
  "id": 461,
  "name": "Hamming Distance",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/hamming-distance",
  "relativeDir": "H/Hamming Distance",
  "slug": "0461-hamming-distance",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 12,
    "python": 13,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.20 MB (Top 76.33%)\r\n\r\nclass Solution {\r\npublic:\r\n    int hammingDistance(int x, int y) {\r\n        int res = 0;\r\n        int num = x^y;\r\n        while (num) {\r\n            res += num % 2;\r\n            num >>= 1;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def hammingDistance(self, x: int, y: int) -> int:\r\n\t\t# First, using XOR Bitwise Operator, we take all distinct set bits.\r\n        z = x ^ y\r\n\t\t# We inicialize our answer with zero.\r\n        ans = 0\r\n\t\t# Iterate while our z is not zero.\r\n        while z:\r\n\t\t\t# Every iteration we add one to our answer.\r\n            ans += 1\r\n\t\t\t# Using the expression z & (z - 1), we erase the lowest set bit in z.\r\n            z &= z - 1\r\n        return ans",
    "java": "class Solution {\r\n    public int hammingDistance(int x, int y) {\r\n        int ans=x^y;\r\n        int count=0;\r\n        while(ans>0){\r\n            count+=ans&1;\r\n            ans>>=1;\r\n        }\r\n        \r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 52 ms (Top 62.71%) | Memory: 41.80 MB (Top 53.44%)\r\n\r\n/**\r\n * @param {number} x\r\n * @param {number} y\r\n * @return {number}\r\n */\r\nvar hammingDistance = function(x, y) {\r\n    let value = x ^ y;\r\n    let counter = 0;\r\n    \r\n    while (value != 0) {\r\n        if (value & 1)\r\n           ++counter\r\n           \r\n        value = value >> 1\r\n    }\r\n    \r\n    return counter\r\n};"
  }
}
