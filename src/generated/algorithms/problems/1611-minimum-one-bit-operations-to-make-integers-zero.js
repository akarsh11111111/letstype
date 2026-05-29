export default {
  "id": 1611,
  "name": "Minimum One Bit Operations to Make Integers Zero",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero",
  "relativeDir": "M/Minimum One Bit Operations to Make Integers Zero",
  "slug": "1611-minimum-one-bit-operations-to-make-integers-zero",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 16,
    "python": 15,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minimumOneBitOperations(int n) {\r\n        int output = 0;\r\n        \r\n        while( n> 0)\r\n        {\r\n            output ^= n;\r\n            n = n >> 1;\r\n        }\r\n        \r\n        return output;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumOneBitOperations(self, n: int) -> int:\r\n        if n <= 1:\r\n            return n\r\n        def leftmostbit(x):\r\n            x |= x >> 1\r\n            x |= x >> 2\r\n            x |= x >> 4\r\n            x |= x >> 8\r\n            x |= x >> 16\r\n            x += 1\r\n            x >>= 1\r\n            return x\r\n        x = leftmostbit(n)\r\n        return ((x << 1) - 1) - self.minimumOneBitOperations(n - x)",
    "java": "// Runtime: 52 ms (Top 5.71%) | Memory: 41.9 MB (Top 21.90%)\r\nclass Solution {\r\n    public int minimumOneBitOperations(int n) {\r\n\r\n    int inv = 0;\r\n\r\n        // xor until n becomes zero\r\n        for ( ; n != 0 ; n = n >> 1){\r\n\r\n            inv ^= n;\r\n            System.out.println(inv+\" \"+n);\r\n        }\r\n\r\n        return inv;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} n\r\n * @return {number}\r\n */\r\nvar minimumOneBitOperations = function(n) {\r\n  let answer = 0;\r\n  let op = 1;\r\n  let bits = 30;\r\n  while(bits >= 0) {\r\n    if(n & (1 << bits)) {\r\n      let tmp = (1 << (bits + 1)) - 1;\r\n      answer += tmp * op;\r\n      op *= -1;\r\n    }\r\n    bits--;\r\n  }\r\n  return answer;\r\n}"
  }
}
