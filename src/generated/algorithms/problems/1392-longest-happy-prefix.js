export default {
  "id": 1392,
  "name": "Longest Happy Prefix",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-happy-prefix",
  "relativeDir": "L/Longest Happy Prefix",
  "slug": "1392-longest-happy-prefix",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 39,
    "python": 16,
    "javascript": 27
  },
  "languages": {
    "cpp": "// Runtime: 59 ms (Top 53.19%) | Memory: 15.1 MB (Top 86.23%)\r\nclass Solution {\r\npublic:\r\n    string longestPrefix(string s) {\r\n        if(s == \"\")\r\n            return \"\";\r\n        int n = s.length();\r\n        int arr[n];\r\n        fill(arr, arr + n, 0);\r\n        int prevLPS = 0, i = 1;\r\n        while(i < n){\r\n            if(s[i] == s[prevLPS]){\r\n                arr[i] = prevLPS + 1;\r\n                i++;\r\n                prevLPS++;\r\n            }\r\n            else if(prevLPS == 0){\r\n                arr[i] = 0;\r\n                i++;\r\n            }\r\n            else{\r\n                prevLPS = arr[prevLPS - 1];\r\n            }\r\n        }\r\n        int oplen = arr[n-1];\r\n        string temp = s.substr(n - oplen, oplen);\r\n        return temp;\r\n    }\r\n};",
    "python": "# Runtime: 186 ms (Top 90.2%) | Memory: 21.02 MB (Top 32.3%)\r\n\r\nclass Solution:\r\n    def longestPrefix(self, s: str) -> str:\r\n        n=len(s)\r\n        lps=[0]*n\r\n        j=0\r\n        for i in range(1,n):\r\n            while s[i]!=s[j] and j>0:\r\n                j=lps[j-1]\r\n\r\n            if s[i]==s[j]:\r\n                lps[i]=j+1\r\n                j+=1\r\n\r\n        return s[:lps[-1]]",
    "java": "// Runtime: 13 ms (Top 89.72%) | Memory: 43.2 MB (Top 90.81%)\r\nclass Solution {\r\n    public String longestPrefix(String s) {\r\n       int n=s.length();\r\n        char arr[] = s.toCharArray();\r\n        int lps[]=new int[n];\r\n        for(int i=1; i<n; i++){\r\n            int j=lps[i-1]; // COMPARING ITS i WITH ITS PREV ELEMENT\r\n            while(j>0 && arr[j]!=arr[i]){\r\n                j=lps[j-1]; // DEACREASING TILL WE FIND ITS PREFIX WHICH IS EQUAL TO ITS SUFFIX\r\n            }\r\n            if(arr[j]==arr[i]){// IF ITS PREV IS SAME AS CURRENT THEN INCREAMENT IT\r\n                j++;\r\n            }\r\n            lps[i]=j; // SAVE WHATEVER THE VALUE IS\r\n        }\r\n        int j=lps[n-1];\r\n       StringBuilder sb = new StringBuilder();\r\n        for(int i=0;i<j;i++){\r\n            sb.append(arr[i]);\r\n        }\r\n        return sb.toString();\r\n\r\n    }\r\n}\r\n/*\r\n ALTERNATE\r\n\r\n  for(int i=1;i<n;i++){\r\n            if(arr[i]==arr[j]){ // IF SAME INCREASE IT\r\n                lps[i]=++j;\r\n            }else if(j>0){ // ELSE DEACREASE TILL WE ARE NOT FINDING IT\r\n                j=lps[j-1];\r\n                i--;\r\n            }\r\n        }\r\n        return s.substring(0,j);\r\n\r\n */",
    "javascript": "var longestPrefix = function(s) {\r\n    const len = s.length;\r\n    const z = new Array(len).fill(0);\r\n    let l = 0, r = 0;\r\n    \r\n    for(let i = 1; i < len; i++) {\r\n        if(i <= r) \r\n            z[i] = Math.min(r - i + 1, z[i - l]);\r\n        while(i + z[i] < len && s[z[i]] == s[i + z[i]]) {\r\n            z[i]++;\r\n        }\r\n        if(i + z[i] - 1 > r) {\r\n            r = i + z[i] - 1;\r\n            l = i;\r\n        }\r\n    }\r\n    \r\n    let idx = -1;\r\n    for(let i = 1; i < len; i++) {\r\n        if(i + z[i] == len) {\r\n            idx = i;\r\n            break;\r\n        }\r\n    }\r\n    if(idx == -1) return '';\r\n    return s.slice(idx);\r\n};"
  }
}
