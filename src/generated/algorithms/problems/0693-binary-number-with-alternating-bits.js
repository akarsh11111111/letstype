export default {
  "id": 693,
  "name": "Binary Number with Alternating Bits",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-number-with-alternating-bits",
  "relativeDir": "B/Binary Number with Alternating Bits",
  "slug": "0693-binary-number-with-alternating-bits",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 8,
    "java": 14,
    "python": 11,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 2 ms (Top 45.45%) | Memory: 5.9 MB (Top 68.90%)\r\nclass Solution {\r\npublic:\r\n    const static uint32_t a = 0b10101010101010101010101010101010;\r\n    bool hasAlternatingBits(int n) {\r\n        return ((a >> __builtin_clz(n)) ^ n) == 0;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def hasAlternatingBits(self, n: int) -> bool:\r\n        bin_n = bin(n)[2:]\r\n        for i in range(len(bin_n)-1):\r\n            if bin_n[i] == '0' and bin_n[i+1] == '0':\r\n                return False\r\n            \r\n            if bin_n[i] == '1' and bin_n[i+1] == '1':\r\n                return False\r\n            \r\n        return True",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 39.76 MB (Top 13.5%)\r\n\r\nclass Solution {\r\n    public boolean hasAlternatingBits(int n) {\r\n        int flag = 1;\r\n        if(n % 2 == 0) flag = 0;\r\n        return bin(n / 2, flag);\r\n    }\r\n    public boolean bin(int n, int flag) {\r\n        if(flag == n % 2) return false;\r\n        if(n == 0) return true;\r\n        else return bin(n / 2, n % 2);\r\n    }\r\n}",
    "javascript": "// Runtime: 84 ms (Top 59.88%) | Memory: 42.1 MB (Top 45.06%)\r\n/**\r\n * @param {number} n\r\n * @return {boolean}\r\n */\r\nvar hasAlternatingBits = function(n) {\r\n  let previous;\r\n  while (n) {\r\n    const current = n & 1;\r\n    if (previous === current) return false;\r\n    previous = current;\r\n    n >>>= 1;\r\n  }\r\n  return true;\r\n};"
  }
}
