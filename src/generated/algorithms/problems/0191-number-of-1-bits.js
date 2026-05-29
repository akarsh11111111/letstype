export default {
  "id": 191,
  "name": "Number of 1 Bits",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-1-bits",
  "relativeDir": "N/Number of 1 Bits",
  "slug": "0191-number-of-1-bits",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 6,
    "python": 8,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int hammingWeight(uint32_t n) {\r\n      int ans=0;\r\n      while(n!=0){\r\n        n=n&(n-1);\r\n        ans++;\r\n      }\r\n      return ans;  \r\n    }\r\n};",
    "python": "# Runtime: 27 ms (Top 98.51%) | Memory: 13.8 MB (Top 50.40%)\r\nclass Solution:\r\n    def hammingWeight(self, n: int) -> int:\r\n      i = 0\r\n      while n > 0:\r\n        if n % 2 != 0: i += 1\r\n        n = n >> 1\r\n      return i",
    "java": "public class Solution {\r\n    // you need to treat n as an unsigned value\r\n    public int hammingWeight(int n) {\r\n        return Integer.bitCount(n);\r\n    }\r\n}",
    "javascript": "// Runtime: 79 ms (Top 80.89%) | Memory: 42.4 MB (Top 62.06%)\r\nvar hammingWeight = function(n) {\r\n    let count = 0, i = 0;\r\n    while(n > 0) {\r\n        i = 0;\r\n        while(n >= Math.pow(2,i)) {\r\n            i++;\r\n        }\r\n        count++;\r\n        n -= Math.pow(2,i-1);\r\n    }\r\n    return count;\r\n};"
  }
}
