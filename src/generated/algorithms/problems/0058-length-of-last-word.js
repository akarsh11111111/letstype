export default {
  "id": 58,
  "name": "Length of Last Word",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/length-of-last-word",
  "relativeDir": "L/Length of Last Word",
  "slug": "0058-length-of-last-word",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 12,
    "python": 3,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int lengthOfLastWord(string s) {\r\n        int count = 0;\r\n        int n = s.size();\r\n        int i = n-1;\r\n        while(i>=0){\r\n            if(s[i]==' '){\r\n                i--;\r\n                if(count >0){\r\n                    break;\r\n                }\r\n            }\r\n            else{\r\n                count++;\r\n                i--;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def lengthOfLastWord(self, s: str) -> int:\r\n        return len(s.strip().split()[-1])",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.9 MB (Top 78.55%)\r\nclass Solution {\r\n    public int lengthOfLastWord(String s) {\r\n        int j=s.length()-1,len=0; boolean flag=true;\r\n        while(j>=0 && (flag || (!flag && s.charAt(j)!=' ')))\r\n            if(s.charAt(j--)!=' '){\r\n                flag=false;\r\n                len++;\r\n            }\r\n        return len;\r\n    }\r\n}",
    "javascript": "var lengthOfLastWord = function(s) {\r\n    s = s.split(\" \");\r\n    if(s[s.length-1] == ``)\r\n    {\r\n        for(var i = s.length-1; i >= 0; i-- )\r\n        {\r\n            if(s[i].length > 0)\r\n            {\r\n                return s[i].length;\r\n            }\r\n        }\r\n    }\r\n    else\r\n    {\r\n        return s[s.length-1].length;\r\n    }\r\n};"
  }
}
