export default {
  "id": 868,
  "name": "Binary Gap",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-gap",
  "relativeDir": "B/Binary Gap",
  "slug": "0868-binary-gap",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 16,
    "python": 9,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.9 MB (Top 76.87%)\r\nclass Solution {\r\npublic:\r\n    int binaryGap(int n) {\r\n        int res=0;\r\n        int s=0,i=0;\r\n        while(n){\r\n            if(n&1){\r\n                s=i;break;\r\n            }\r\n            i++;\r\n            n=n>>1;\r\n        }\r\n        while(n){\r\n            if(n&1){\r\n                res=max(res,(i-s));\r\n                s=i;\r\n            }\r\n            i++;\r\n            n=n>>1;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def binaryGap(self, n: int) -> int:\r\n        prev = 0\r\n        res = 0\r\n        for i, d in enumerate(bin(n)[3:]):\r\n            if d == \"1\":\r\n                res = max(res, i-prev+1)\r\n                prev = i + 1\r\n        return res",
    "java": "// Runtime: 2 ms (Top 30.57%) | Memory: 41 MB (Top 56.77%)\r\nclass Solution {\r\n    public int binaryGap(int n) {\r\n      char[] arr = Integer.toBinaryString(n).toCharArray();\r\n        List<Integer> ans = new ArrayList();\r\n        for(int i = 0; i < arr.length ; i++){\r\n            if(arr[i] == '1')\r\n                ans.add(i);\r\n        }\r\n        int res = 0;\r\n        for ( int i = 0 ; i < ans.size() -1 ; i++){\r\n            res =Math.max(res,ans.get(i+1) - ans.get(i));\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var binaryGap = function(n) {\r\n    var str = (n >>> 0).toString(2), start = 0, end = 0, diff = 0;\r\n    for(var i=0;i<str.length;i++) {\r\n    \tif(str[i] === '1') {\r\n      \tend = i;\r\n        diff = Math.max(diff, end - start);\r\n        start = i;\r\n      } \r\n    }\r\n    return diff;\r\n};"
  }
}
