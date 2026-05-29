export default {
  "id": 125,
  "name": "Valid Palindrome",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/valid-palindrome",
  "relativeDir": "V/Valid Palindrome",
  "slug": "0125-valid-palindrome",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 37,
    "python": 7,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 58.78%) | Memory: 7.4 MB (Top 54.16%)\r\nclass Solution {\r\npublic:\r\n    bool isPalindrome(string s) {\r\n        auto it = remove_if(s.begin(), s.end(), [](char const &c) {\r\n            return !isalnum(c);\r\n        });\r\n\r\n        s.erase(it, s.end());\r\n        transform(s.begin(), s.end(), s.begin(), ::tolower);\r\n\r\n        int i = 0;\r\n        int j = s.size()-1;\r\n\r\n        while(i <= j) {\r\n            if(s[i] != s[j]) return false;\r\n            i++; j--;\r\n        }\r\n\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isPalindrome(self, s: str) -> bool:\r\n        cleaned = \"\"\r\n        for c in s:\r\n            if c.isalnum():\r\n                cleaned += c.lower()\r\n        return (cleaned == cleaned[::-1])",
    "java": "// Runtime: 313 ms (Top 34.84%) | Memory: 43.9 MB (Top 52.81%)\r\nclass Solution {\r\n    public boolean isPalindrome(String s) {\r\n        if(s.length()==1 || s.length()==0)\r\n        {\r\n            return true;\r\n        }\r\n\r\n        s=s.trim().toLowerCase();\r\n        //s=s.toLowerCase();\r\n        String a=\"\";\r\n        boolean bool=false;\r\n        for(int i=0;i<s.length();i++)\r\n        {\r\n            if((s.charAt(i)>='a' && s.charAt(i)<='z') || (s.charAt(i)>='0' && s.charAt(i)<='9'))\r\n            {\r\n                a=a+s.charAt(i);\r\n            }\r\n        }\r\n        if(a.length()==1 || a.length()==0)\r\n        {\r\n            return true;\r\n        }\r\n        for(int i=0;i<a.length()/2;i++)\r\n        {\r\n            if(a.charAt(i)==a.charAt(a.length()-i-1))\r\n            {\r\n                bool=true;\r\n            }\r\n            else{\r\n                return false;\r\n            }\r\n        }\r\n\r\n        return bool;\r\n    }\r\n}",
    "javascript": "var isPalindrome = function(s) {\r\n  const toLower = s.toLowerCase().replace(/[\\W_\\s]+/g, '').replace(/ /g, '')\r\n  let m = 0\r\n  let n = toLower.length - 1\r\n\r\n  while (m < n) {\r\n    if (toLower[m] !== toLower[n]) {\r\n      return false\r\n    }\r\n    m++\r\n    n--\r\n  }\r\n  return true\r\n}"
  }
}
