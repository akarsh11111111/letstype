export default {
  "id": 392,
  "name": "Is Subsequence",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/is-subsequence",
  "relativeDir": "I/Is Subsequence",
  "slug": "0392-is-subsequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 18,
    "python": 12,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isSubsequence(string s, string t) {\r\n        int n = s.length(),m=t.length();\r\n        int j = 0; \r\n    // For index of s (or subsequence\r\n \r\n    // Traverse s and t, and\r\n    // compare current character\r\n    // of s with first unmatched char\r\n    // of t, if matched\r\n    // then move ahead in s\r\n    for (int i = 0; i < m and j < n; i++)\r\n        if (s[j] == t[i])\r\n            j++;\r\n \r\n    // If all characters of s were found in t\r\n    return (j == n);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isSubsequence(self, s: str, t: str) -> bool:\r\n        if len(s) > len(t):return False\r\n        if len(s) == 0:return True\r\n        subsequence=0\r\n        for i in range(0,len(t)):\r\n            if subsequence <= len(s) -1:\r\n                print(s[subsequence])\r\n                if s[subsequence]==t[i]:\r\n\r\n                    subsequence+=1\r\n        return  subsequence == len(s)",
    "java": "class Solution \r\n{\r\n    public boolean isSubsequence(String s, String t) \r\n    {\r\n        int i,x,p=-1;\r\n        if(s.length()>t.length())\r\n            return false;\r\n        for(i=0;i<s.length();i++)\r\n        {\r\n            x=t.indexOf(s.charAt(i),p+1);\r\n            if(x>p)\r\n                p=x;\r\n            else\r\n                return false;\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} s\r\n * @param {string} t\r\n * @return {boolean}\r\n */\r\nvar isSubsequence = function(s, t) {\r\n    for (let i = 0, n = s.length; i < n; i++)\r\n        if (t.includes(s[i]))\r\n            t = t.slice(t.indexOf(s[i]) + 1);\r\n        else return false;\r\n    \r\n    return true;\r\n}"
  }
}
