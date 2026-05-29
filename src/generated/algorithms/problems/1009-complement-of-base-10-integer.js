export default {
  "id": 1009,
  "name": "Complement of Base 10 Integer",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/complement-of-base-10-integer",
  "relativeDir": "C/Complement of Base 10 Integer",
  "slug": "1009-complement-of-base-10-integer",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 10,
    "java": 16,
    "python": 16,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int bitwiseComplement(int num) {\r\n\t\t    //base case\r\n        if(num == 0) return 1;\r\n        unsigned mask = ~0;\r\n        while( mask & num ) mask = mask << 1;\r\n        return ~num ^ mask;\r\n    }\r\n};",
    "python": "// Runtime: 38 ms (Top 52.6%) | Memory: 17.10 MB (Top 12.47%)\r\n\r\nclass Solution:\r\n    def bitwiseComplement(self, n: int) -> int:\r\n        cnt=0\r\n        ans=0\r\n        if n==0:\r\n            return 1\r\n        while n>0:\r\n            if n&1:\r\n                cnt+=1\r\n            else:\r\n                ans =ans +(2**cnt)\r\n                cnt+=1\r\n            n=n>>1\r\n        return ans",
    "java": "// Runtime: 1 ms (Top 20.2%) | Memory: 39.34 MB (Top 43.8%)\r\n\r\nclass Solution {\r\n    public int bitwiseComplement(int n) {\r\n        String bin = Integer.toBinaryString(n);\r\n        String res = \"\";\r\n        for(char c :bin.toCharArray())\r\n        {\r\n            if( c == '1')\r\n                res += \"0\";\r\n            else\r\n                res += \"1\";\r\n        }\r\n        return Integer.parseInt(res, 2);\r\n    }\r\n}",
    "javascript": "var bitwiseComplement = function(n) {\r\n    let xor = 0b1;\r\n    let copy = Math.floor(n / 2);\r\n    while (copy > 0) {\r\n        xor = (xor << 1) + 1\r\n        copy = Math.floor(copy / 2);\r\n    }\r\n        \r\n    return n ^ xor;\r\n};"
  }
}
