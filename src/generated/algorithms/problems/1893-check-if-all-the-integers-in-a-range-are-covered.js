export default {
  "id": 1893,
  "name": "Check if All the Integers in a Range Are Covered",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered",
  "relativeDir": "C/Check if All the Integers in a Range Are Covered",
  "slug": "1893-check-if-all-the-integers-in-a-range-are-covered",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 18,
    "python": 15,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isCovered(vector<vector<int>>& ranges, int left, int right) {\r\n        int n = ranges.size();\r\n        \r\n        sort(ranges.begin(), ranges.end());\r\n        \r\n        if(left < ranges[0][0])                 //BASE CASE\r\n            return false;\r\n        \r\n        bool ans = false;\r\n        \r\n        for(int i = 0; i < n; i++){\r\n            if(left>=ranges[i][0] && left<=ranges[i][1]){\r\n                left = ranges[i][1]+1;\r\n            }\r\n            if(left > right){\r\n                ans = true;\r\n                break;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isCovered(self, ranges: List[List[int]], left: int, right: int) -> bool:\r\n        \r\n        \r\n        t=[0]*(60)\r\n        \r\n        for i in ranges:\r\n            \r\n            t[i[0]]+=1\r\n            t[i[1]+1]-=1\r\n            \r\n        for i in range(1,len(t)):\r\n            t[i] += t[i-1]\r\n            \r\n        return min(t[left:right+1])>=1",
    "java": "// Runtime: 1 ms (Top 85.31%) | Memory: 41.7 MB (Top 83.50%)\r\nclass Solution {\r\n    public boolean isCovered(int[][] ranges, int left, int right) {\r\n        boolean flag = false;\r\n        for (int i=left; i<=right; i++) {\r\n            for (int[] arr: ranges) {\r\n                if (i >= arr[0] && i <= arr[1]) {\r\n                    flag = true;\r\n                    break;\r\n                }\r\n            }\r\n            if (!flag) return false;\r\n            flag = false;\r\n        }\r\n\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 50 ms (Top 78.79%) | Memory: 42.60 MB (Top 57.58%)\r\n\r\n/**\r\n * @param {number[][]} ranges\r\n * @param {number} left\r\n * @param {number} right\r\n * @return {boolean}\r\n */\r\nvar isCovered = function(ranges, left, right) {\r\n    let z=0,f=0,e=[];\r\n    let a=ranges.flat(Infinity);\r\n\r\n    function abc(c,d){\r\n        for(let i=c;i<=d;i++)\r\n        if(e[i]==i)\r\n        e[i]=null;\r\n    }\r\n    for(let i=left;i<=right;i++)\r\n        e[i]=i;\r\n    for(let i=0;i<a.length;i=i+2){\r\n        if(a[i]<=left&&a[i+1]>=right)\r\n        return true;\r\n        else if(a[i]>right)\r\n        continue;\r\n        else abc(a[i],a[i+1])\r\n    }\r\n    for(let i=left;i<=right;i++)\r\n    if(e[i]!=null)\r\n    return false\r\n    \r\n    return true\r\n};"
  }
}
