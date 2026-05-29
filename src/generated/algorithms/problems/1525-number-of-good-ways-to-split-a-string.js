export default {
  "id": 1525,
  "name": "Number of Good Ways to Split a String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-good-ways-to-split-a-string",
  "relativeDir": "N/Number of Good Ways to Split a String",
  "slug": "1525-number-of-good-ways-to-split-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 26,
    "python": 20,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numSplits(string s) {\r\n        int n=s.size();\r\n        vector<int>left(26,0);\r\n        vector<int>right(26,0);\r\n        int left_count=0,right_count=0;\r\n        int splits=0;\r\n        for(auto &it:s){\r\n            right[it-'a']++;\r\n            if(right[it-'a']==1)right_count++;\r\n        }\r\n        for(auto &it:s){\r\n            left[it-'a']++;\r\n            right[it-'a']--;\r\n            if(left[it-'a']==1)left_count++;\r\n            if(right[it-'a']==0)right_count--;\r\n            if(left_count==right_count)\r\n                splits++;\r\n        }\r\n        return splits;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numSplits(self, s: str) -> int:\r\n        one = set()\r\n        two = set()\r\n        dic = {}\r\n        \r\n        for i in s:\r\n            dic[i] = dic.get(i, 0) + 1\r\n            two.add(i)\r\n        tot = 0\r\n        \r\n        for i in s:\r\n            one.add(i)\r\n            dic[i] -= 1\r\n            if dic[i] == 0:\r\n                two.remove(i)\r\n            \r\n            if len(one) == len(two):\r\n                tot += 1\r\n        return tot",
    "java": "class Solution {\r\n    public int numSplits(String s) {\r\n        int a[] = new int[26];\r\n        int b[] = new int[26];\r\n        int ds1=0,ds2=0;\r\n        int count=0;\r\n        for(int i=0;i<s.length();i++)\r\n        {\r\n            b[s.charAt(i)-97]++;\r\n            if(b[s.charAt(i)-97] == 1)\r\n                ds2++;\r\n        }\r\n        for(int i=0;i<s.length();i++)\r\n        {\r\n            a[s.charAt(i)-97]++;\r\n            b[s.charAt(i)-97]--;\r\n            if(b[s.charAt(i)-97] == 0)\r\n                ds2--;\r\n            if(a[s.charAt(i)-97] == 1)\r\n                ds1++;\r\n            if(ds1 == ds2)\r\n                count++;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 168 ms (Top 57.53%) | Memory: 48.9 MB (Top 58.07%)\r\nvar numSplits = function(s) {\r\n        let n = s.length;\r\n        let preFix = new Array(n) , suFix = new Array(n);\r\n        let preSet = new Set();\r\n        let suSet = new Set();\r\n\r\n        for(let i=0; i<n ; i++){\r\n            preSet.add(s[i]);\r\n            suSet.add(s[n-1-i]);\r\n            preFix[i]= preSet.size;\r\n            suFix[n-1-i]= suSet.size;\r\n        }\r\n\r\n        let goodWays=0;\r\n\r\n        for(let i=0; i<n-1; i++){\r\n            if(preFix[i]===suFix[i+1]) goodWays++;\r\n        }\r\n\r\n        return goodWays;\r\n};"
  }
}
