export default {
  "id": 1961,
  "name": "Check If String Is a Prefix of Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-string-is-a-prefix-of-array",
  "relativeDir": "C/Check If String Is a Prefix of Array",
  "slug": "1961-check-if-string-is-a-prefix-of-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 15,
    "python": 15,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isPrefixString(string s, vector<string>& words) {\r\n        string n=\"\";\r\n        for(string str:words){\r\n            for(char ch:str){\r\n                n+=ch;\r\n            }\r\n            if(n==s){\r\n                return true;\r\n            }\r\n        }\r\n        \r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isPrefixString(self, s: str, words: List[str]) -> bool:\r\n        \r\n        a = ''\r\n    \r\n        for i in words:\r\n            \r\n            a += i\r\n            \r\n            if a == s:\r\n                return True\r\n            if not s.startswith(a):\r\n                break\r\n                     \r\n        return False",
    "java": "// Runtime: 1 ms (Top 90.41%) | Memory: 42.90 MB (Top 8.98%)\r\n\r\nclass Solution {\r\n    public boolean isPrefixString(String s, String[] words) {\r\n        StringBuilder res = new StringBuilder (\"\");\r\n        for (String word : words) {\r\n            res.append (word);\r\n            if (s.equals (res.toString()))\r\n                return true;\r\n            if (s.indexOf (res.toString()) == -1)\r\n                return false;\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 93 ms (Top 50.00%) | Memory: 43.3 MB (Top 14.29%)\r\nvar isPrefixString = function(s, words) {\r\n    let str = words[0];\r\n    if(s === words[0]){\r\n        return true;\r\n    }\r\n    for(let i=1; i < words.length; i++){\r\n        if(s === str){\r\n            return true;\r\n        }\r\n        if( s.startsWith(str)){\r\n            str += words[i];\r\n            continue;\r\n        }else{\r\n            return false;\r\n        }\r\n    }\r\n    if(s !== str){\r\n            return false;\r\n        }\r\n    return true;\r\n};"
  }
}
