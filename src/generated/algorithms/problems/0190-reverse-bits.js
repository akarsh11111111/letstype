export default {
  "id": 190,
  "name": "Reverse Bits",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reverse-bits",
  "relativeDir": "R/Reverse Bits",
  "slug": "0190-reverse-bits",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 24,
    "python": 9,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    uint32_t reverseBits(uint32_t n) {\r\n        int ans =0;\r\n        int i =1;\r\n        int bit =0;\r\n        while(i<32){\r\n            bit = n&1;\r\n            ans = ans|bit;\r\n            n = n>>1;\r\n            ans = ans<<1;\r\n            i++;\r\n        }\r\n        if (i ==32){\r\n            bit = n&1;\r\n            ans = ans|bit;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n# @param n, an integer\r\n# @return an integer\r\ndef reverseBits(self, n):\r\n    res=0\r\n    for i in range(32):\r\n        bit=(n>>i)&1\r\n        res=res|bit<<(31-i)\r\n    return res",
    "java": "public class Solution {\r\n    // you need treat n as an unsigned value\r\n    public int reverseBits(int n) {\r\n        int mask = 0;\r\n        int smask = 0;\r\n        int j = 0;\r\n        int rev = 0;\r\n        \r\n        // basically we are checking that the number is set bit or not \r\n        // if the number is set bit then we are appending that to our main answer i.e, rev\r\n        for(int i=31 ; i>=0 ; i--){\r\n            mask = 1<<i;\r\n            if((mask&n)!=0){\r\n                smask = 1<<j;\r\n                rev = rev|smask;\r\n            }\r\n            j++;\r\n        }\r\n        \r\n        // Time Complexity : O(32 for int)\r\n        // Space Complexity : O(1)\r\n        return rev;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} n - a positive integer\r\n * @return {number} - a positive integer\r\n */\r\n\r\n// remember the binary must always be of length 32 ;);\r\nvar reverseBits = function(n) {\r\n    const reversedBin = n.toString(2).split('').reverse().join('');\r\n    const result =  reversedBin.padEnd(32,'0'); \r\n    return parseInt(result, 2);\r\n};"
  }
}
