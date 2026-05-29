export default {
  "id": 2108,
  "name": "Find First Palindromic String in the Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-first-palindromic-string-in-the-array",
  "relativeDir": "F/Find First Palindromic String in the Array",
  "slug": "2108-find-first-palindromic-string-in-the-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 11,
    "python": 5,
    "javascript": 7
  },
  "languages": {
    "cpp": "// Runtime: 188 ms (Top 5.26%) | Memory: 22.9 MB (Top 68.97%)\r\nclass Solution {\r\n    bool isPalindrome(string str){\r\n        int i=0 ;\r\n        int j=str.length()-1;\r\n        while( i<= j ){\r\n            if( str[i] != str[j] )\r\n                return false;\r\n            i++;\r\n            j--;\r\n        }\r\n        return true;\r\n    }\r\npublic:\r\n    string firstPalindrome(vector<string>& words) {\r\n\r\n        for(int i=0 ; i<words.size() ; i++){\r\n            if(isPalindrome(words[i]))\r\n                return words[i];\r\n        }\r\n        return \"\";\r\n    }\r\n};",
    "python": "class Solution:\r\n    def firstPalindrome(self, words):\r\n        for word in words:\r\n            if word == word[::-1]: return word\r\n        return \"\"",
    "java": "class Solution {\r\n    public String firstPalindrome(String[] words) {\r\n        for (String s : words) {\r\n            StringBuilder sb = new StringBuilder(s);\r\n            if (s.equals(sb.reverse().toString())) {\r\n                return s;\r\n            }\r\n        }\r\n        return \"\";\r\n    }\r\n}",
    "javascript": "var firstPalindrome = function(words) {\r\n    for (const word of words) {\r\n        if (word === word.split('').reverse().join('')) return word;\r\n    }\r\n    \r\n    return '';\r\n};"
  }
}
