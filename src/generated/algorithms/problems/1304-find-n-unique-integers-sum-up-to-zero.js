export default {
  "id": 1304,
  "name": "Find N Unique Integers Sum up to Zero",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero",
  "relativeDir": "F/Find N Unique Integers Sum up to Zero",
  "slug": "1304-find-n-unique-integers-sum-up-to-zero",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 20,
    "python": 7,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 37.27%) | Memory: 7.30 MB (Top 15.48%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> sumZero(int n) {\r\n        vector<int>ans;\r\n        for(int i=1;i<=n/2;i++)\r\n        {\r\n            ans.push_back(-i);\r\n            ans.push_back(i);\r\n        }\r\n        if(n%2==1)\r\n            ans.push_back(0);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def sumZero(self, n: int) -> List[int]:\r\n        q,p=divmod(n,2)\r\n        if p:\r\n            return list(range(-q, q+1))\r\n        else:\r\n            return list(range(-q,0))+list(range(1,q+1))",
    "java": "class Solution {\r\n    public int[] sumZero(int n) {\r\n        int[] ans = new int[n];\r\n        int j=0;\r\n        \r\n        for(int i=1;i<=n/2;i++)\r\n        {\r\n            ans[j] = i;\r\n            j++;\r\n        }\r\n        for(int i=1;i<=n/2;i++)\r\n        {\r\n            ans[j] = -i;\r\n            j++;\r\n        }\r\n        if(n%2!=0) ans[j] = 0;\r\n        \r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 50 ms (Top 86.19%) | Memory: 43.00 MB (Top 14.55%)\r\n\r\nvar sumZero = function(n) {\r\n  var num = Math.floor(n/2); \r\n  var res = [];\r\n\r\n  for(var i=1;i<=num;i++){\r\n      res.push(i,-i)\r\n     } \r\n\r\n  if(n%2!==0){\r\n    res.push(0)\r\n  }\r\n  \r\n  return res \r\n}"
  }
}
