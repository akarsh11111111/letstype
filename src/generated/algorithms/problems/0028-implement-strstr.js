export default {
  "id": 28,
  "name": "Implement strStr()",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/implement-strstr",
  "relativeDir": "I/Implement strStr()",
  "slug": "0028-implement-strstr",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 6,
    "java": 32,
    "python": 13,
    "javascript": 3
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int strStr(string haystack, string needle) {\r\n        return haystack.find(needle);\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def strStr(self, haystack, needle):\r\n        if needle == '':\r\n            return 0\r\n        else:\r\n            return self.search_substring(haystack, needle)\r\n\r\n    def search_substring(self, haystack, needle):\r\n        len_substring = len(needle)\r\n        for i in range(len(haystack)):\r\n            if haystack[i: i + len_substring] == needle:\r\n                return i\r\n        return -1",
    "java": "class Solution {\r\n    public int strStr(String haystack, String needle) {\r\n        \r\n        if(needle.length()>haystack.length()) {\r\n            return -1;\r\n        } \r\n        if(needle.length()==haystack.length()) {\r\n            if(haystack.equals(needle)) {\r\n                return 0;\r\n            }\r\n            return -1;\r\n        }\r\n        \r\n        \r\n        int i=0;\r\n        int j=0;\r\n        while(i<needle.length() && j<haystack.length()) {\r\n            if(needle.charAt(i)==haystack.charAt(j)) {\r\n                i++;\r\n                j++;\r\n                if(i==needle.length()) {\r\n                    return j-needle.length();\r\n                }\r\n            } else {\r\n                j = j-i+1; // backtrack to last pos+1 where there was a probable match\r\n                i=0;\r\n            }\r\n        }\r\n        \r\n        return -1;\r\n    }\r\n}",
    "javascript": "var strStr = function(haystack, needle) {\r\n    return haystack.indexOf(needle)\r\n};"
  }
}
