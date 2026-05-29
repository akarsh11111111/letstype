export default {
  "id": 201,
  "name": "Bitwise AND of Numbers Range",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/bitwise-and-of-numbers-range",
  "relativeDir": "B/Bitwise AND of Numbers Range",
  "slug": "0201-bitwise-and-of-numbers-range",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 10,
    "python": 10,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int rangeBitwiseAnd(int left, int right) {\r\n        int t=0;\r\n        while(left!=right){\r\n            left= left>>1;\r\n            right= right>>1;\r\n            t++;\r\n        }\r\n        int ans= left;\r\n        while(t--){\r\n            ans= ans<<1;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 125 ms (Top 17.27%) | Memory: 13.9 MB (Top 25.09%)\r\nclass Solution:\r\n    def rangeBitwiseAnd(self, left: int, right: int) -> int:\r\n        if not left: return 0\r\n        i = 0\r\n        cur = left\r\n        while cur + (cur & -cur) <= right:\r\n            cur += cur & -cur\r\n            left &= cur\r\n        return left",
    "java": "class Solution {\r\npublic int rangeBitwiseAnd(int left, int right) {\r\n    int count=0;\r\n    while(left!=right){\r\n        left>>=1;\r\n        right>>=1;\r\n        count++;\r\n    }\r\n    return right<<=count;\r\n}",
    "javascript": "// Runtime: 261 ms (Top 34.83%) | Memory: 49.1 MB (Top 40.45%)\r\nvar rangeBitwiseAnd = function(left, right) {\r\n    const a = left.toString(2);\r\n    const b = right.toString(2);\r\n\r\n    if (a.length !== b.length) {\r\n        return 0;\r\n    }\r\n\r\n    let match = 0;\r\n\r\n    for (let i = 0; i < a.length; i++) {\r\n        if (a[i] !== b[i]) {\r\n            break;\r\n        }\r\n\r\n        match++;\r\n    }\r\n\r\n    return parseInt(b.substring(0, match).padEnd(b.length, '0'), 2);\r\n};"
  }
}
