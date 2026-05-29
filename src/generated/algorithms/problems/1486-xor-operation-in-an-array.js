export default {
  "id": 1486,
  "name": "XOR Operation in an Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/xor-operation-in-an-array",
  "relativeDir": "X/XOR Operation in an Array",
  "slug": "1486-xor-operation-in-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 10,
    "python": 7,
    "javascript": 8
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.20 MB (Top 99.44%)\r\n\r\nclass Solution {\r\npublic:\r\n\tint xorOperation(int n, int start) {\r\n\t\tint ans =0;\r\n\t\tfor(int i=0;i<n;i++){\r\n\t\t\tans ^= start + 2*i;\r\n\t\t}\r\n\t\treturn ans;\r\n\t}\r\n};",
    "python": "class Solution:\r\n    def xorOperation(self, n: int, start: int) -> int:\r\n        nums = [start + 2*i for i in range(n)] #generate list of numbers\r\n        ans = nums[0]\r\n        for i in range(1,n):\r\n            ans = ans^nums[i] # XOR operation\r\n        return ans",
    "java": "class Solution {\r\n    public int xorOperation(int n, int start) {\r\n        int nums[]=new int[n];\r\n        for(int i=0;i<n;i++)\r\n            nums[i] = start + 2 * i;\r\n        for(int i=1;i<n;i++)\r\n            nums[i] = nums[i-1]^nums[i];\r\n        return nums[n-1];\r\n    }\r\n}",
    "javascript": "// Runtime: 109 ms (Top 13.69%) | Memory: 42.1 MB (Top 30.04%)\r\nvar xorOperation = function(n, start) {\r\n    let arr = []\r\n    for(let i=0; i<n; i++){\r\n        arr.push(start+2*i)\r\n    }\r\n    return arr.reduce((a,c)=> a^c)\r\n};"
  }
}
