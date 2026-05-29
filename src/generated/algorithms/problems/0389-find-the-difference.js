export default {
  "id": 389,
  "name": "Find the Difference",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-difference",
  "relativeDir": "F/Find the Difference",
  "slug": "0389-find-the-difference",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 8,
    "python": 6,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 7.10 MB (Top 53.07%)\r\n\r\nclass Solution {\r\npublic:\r\n    char findTheDifference(string s, string t) {\r\n        char c = 0;\r\n        for(char cs : s) c ^= cs;\r\n        for(char ct : t) c ^= ct;\r\n        return c;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findTheDifference(self, s: str, t: str) -> str:\r\n        c = 0\r\n        for cs in s: c ^= ord(cs) #ord is ASCII value\r\n        for ct in t: c ^= ord(ct)\r\n        return chr(c) #chr = convert ASCII into character",
    "java": "class Solution {\r\n    public char findTheDifference(String s, String t) {\r\n        char c = 0;\r\n        for(char cs : s.toCharArray()) c ^= cs;\r\n        for(char ct : t.toCharArray()) c ^= ct;\r\n        return c;\r\n    }\r\n}",
    "javascript": "// Runtime: 131 ms (Top 17.65%) | Memory: 45.7 MB (Top 18.28%)\r\nvar findTheDifference = function(s, t) {\r\n    var map = {};\r\n    var re = \"\";\r\n    for(let i = 0; i < t.length; i++){\r\n        if(t[i] in map){\r\n            map[t[i]] += 1;\r\n        }else{\r\n            map[t[i]] = 1;\r\n        }\r\n    }\r\n\r\n    for(let i = 0; i < s.length; i++){\r\n        if(s[i] in map){\r\n            map[s[i]] -= 1;\r\n        }\r\n    }\r\n\r\n    for(let [key, value] of Object.entries(map)){\r\n        if(value > 0){\r\n            let temp = re.concat(key);\r\n            re = temp;\r\n        }\r\n    }\r\n    return re;\r\n};"
  }
}
