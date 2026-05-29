export default {
  "id": 1370,
  "name": "Increasing Decreasing String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/increasing-decreasing-string",
  "relativeDir": "I/Increasing Decreasing String",
  "slug": "1370-increasing-decreasing-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 28,
    "python": 14,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 10 ms (Top 67.59%) | Memory: 7.5 MB (Top 80.20%)\r\nclass Solution {\r\npublic:\r\n    string sortString(string s) {\r\n       int count [26]={0};\r\n        for(int i =0 ;i< s.size();i++){\r\n            char ch = s[i];\r\n            count[ch-'a']++;\r\n        }\r\n        string res ;\r\n        while(res.size()!=s.size()){\r\n            for(int i = 0 ;i<26;i++){\r\n                if(count[i] >0) {\r\n                     char ch = i+'a';\r\n                      res += ch;\r\n                      count[i]--;\r\n                }\r\n           }\r\n            for(int i = 25 ;i>=0 ;i--){\r\n                if(count[i] >0){\r\n                     char ch= i+'a';\r\n                     res += ch;\r\n                     count[i]--;\r\n                    }\r\n              }\r\n         }\r\n        return res ;\r\n    }\r\n};",
    "python": "// Runtime: 72 ms (Top 48.8%) | Memory: 17.70 MB (Top 9.21%)\r\n\r\nclass Solution:\r\n    def sortString(self, s: str) -> str:\r\n        s = list(s)\r\n        result = ''\r\n        while s:\r\n            for letter in sorted(set(s)):\r\n                s.remove(letter)\r\n                result += letter\r\n            for letter in sorted(set(s), reverse=True):\r\n                s.remove(letter)\r\n                result += letter\r\n        return result",
    "java": "class Solution {\r\n    public String sortString(String s) {\r\n        \r\n        StringBuilder result = new StringBuilder();\r\n        int[] freq  = new int[26];\r\n        for(char c: s.toCharArray()){\r\n            freq[c-'a']++;\r\n        }\r\n        int remaining = s.length();\r\n        while(remaining!=0){\r\n            for(int i=0;i<26&&remaining!=0;i++){\r\n                if(freq[i]!=0){\r\n                    freq[i]--;\r\n                    result.append((char)(i+'a'));\r\n                    remaining--;\r\n                }\r\n            }\r\n            for(int i=25;i>=0&&remaining!=0;i--){\r\n                if(freq[i]!=0){\r\n                    freq[i]--;\r\n                    result.append((char)(i+'a'));\r\n                    remaining--;\r\n                }\r\n            }\r\n        }\r\n        return result.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 160 ms (Top 30.26%) | Memory: 45.8 MB (Top 75.00%)\r\n/**\r\n * @param {string} s\r\n * @return {string}\r\n */\r\nvar sortString = function(s) {\r\n  const counts = [...s].reduce((acc, cur) => (acc[cur.charCodeAt() - 97] += 1, acc), new Array(26).fill(0));\r\n  const result = [];\r\n\r\n  const pick = (code) => {\r\n    if (counts[code]) {\r\n      result.push(String.fromCharCode(code + 97));\r\n      counts[code] -= 1;\r\n    }\r\n  }\r\n\r\n  while (result.length < s.length) {\r\n    for (let i = 0; i < counts.length; i++) pick(i);\r\n    for (let i = 0; i < counts.length; i++) pick(counts.length - 1 - i);\r\n  }\r\n\r\n  return result.join('');\r\n};"
  }
}
