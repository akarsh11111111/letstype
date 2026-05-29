export default {
  "id": 1876,
  "name": "Substrings of Size Three with Distinct Characters",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters",
  "relativeDir": "S/Substrings of Size Three with Distinct Characters",
  "slug": "1876-substrings-of-size-three-with-distinct-characters",
  "availableLanguages": [
    "cpp",
    "java",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 10,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.90 MB (Top 23.54%)\r\n\r\nclass Solution {\r\npublic:\r\n    int countGoodSubstrings(string s) {\r\n        int cnt=0,n=s.size();\r\n        unordered_map<char,int> map;\r\n        for(int i=0;i<n;i++){\r\n            if(i>2 and --map[s[i-3]] == 0) map.erase(s[i-3]);\r\n            map[s[i]]++;\r\n            if(map.size() == 3) cnt++;\r\n        }\r\n        return cnt;\r\n    }\r\n};",
    "java": "class Solution {\r\n    public int countGoodSubstrings(String s) {\r\n        int res = 0;\r\n        \r\n        for(int i = 2 ; i< s.length();i++)\r\n            if(s.charAt(i) != s.charAt(i-1) && s.charAt(i) != s.charAt(i-2)  && s.charAt(i-1) != s.charAt(i-2))\r\n                res++;\r\n        return res;\r\n    }\r\n}",
    "javascript": "var countGoodSubstrings = function(s) {\r\n\tlet good = 0;\r\n\r\n\tfor (let index = 0; index < s.length - 2; index++) {\r\n\t\tconst subStr = s.slice(index, index + 3);\r\n\t\tconst set = new Set(subStr);\r\n\r\n\t\tset.size === 3 && (good += 1);\r\n\t}\r\n\treturn good;\r\n};"
  }
}
