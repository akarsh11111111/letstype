export default {
  "id": 1221,
  "name": "Split a String in Balanced Strings",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/split-a-string-in-balanced-strings",
  "relativeDir": "S/Split a String in Balanced Strings",
  "slug": "1221-split-a-string-in-balanced-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 15,
    "python": 14,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tint balancedStringSplit(string s) {\r\n\r\n\t\tint left = 0;\r\n\t\tint right = 0;\r\n\t\tint cnt = 0;\r\n\r\n\t\tfor(int i=0 ; i<s.size() ; i++){\r\n\t\t\tif(s[i] == 'L'){\r\n\t\t\t\tleft++;\r\n\t\t\t}\r\n\t\t\tif(s[i] == 'R'){\r\n\t\t\t\tright++;\r\n\t\t\t}\r\n\r\n\t\t\tif(left - right == 0){\r\n\t\t\t\tcnt++;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn cnt;\r\n\t}\r\n}",
    "python": "class Solution:\r\n    def balancedStringSplit(self, s: str) -> int:\r\n        r_count=l_count=t_count=0\r\n        for i in s:\r\n            if i=='R':\r\n                r_count+=1\r\n            elif i=='L':\r\n                l_count+=1\r\n            if r_count==l_count:\r\n                t_count+=1\r\n                r_count=0\r\n                l_count=0\r\n            continue\r\n        return t_count",
    "java": "class Solution {\r\n    public int balancedStringSplit(String s) {\r\n        int nl = 0;\r\n        int nr = 0;\r\n        int count = 0;\r\n        for (int i = 0; i < s.length(); ++i) {\r\n            if (s.substring(i,i+1).equals(\"L\")) ++nl;\r\n            else ++nr;\r\n            if (nr == nl) {\r\n                ++count;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 77 ms (Top 74.11%) | Memory: 41.7 MB (Top 91.56%)\r\nvar balancedStringSplit = function(s) {\r\n    let r_count = 0;\r\n    let l_count = 0;\r\n    let ans =0;\r\n    for(let i = 0 ; i < s.length;i++){\r\n        if(s[i]==='R') r_count++;\r\n        else l_count++;\r\n\r\n        if(l_count==r_count) {\r\n         l_count=0\r\n        r_count=0;\r\n            ans++\r\n        }\r\n\r\n    }\r\n    return ans\r\n};"
  }
}
