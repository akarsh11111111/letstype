export default {
  "id": 1750,
  "name": "Minimum Length of String After Deleting Similar Ends",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends",
  "relativeDir": "M/Minimum Length of String After Deleting Similar Ends",
  "slug": "1750-minimum-length-of-string-after-deleting-similar-ends",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 26,
    "python": 6,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minimumLength(string s) {\r\n        int i=0,j=s.length()-1;\r\n        while(i<j)\r\n        {\r\n            if(s[i]!=s[j])\r\n            {\r\n                break;\r\n            }\r\n            else\r\n            {\r\n                char x=s[i];\r\n                while(s[i]==x)\r\n                {\r\n                    i++;\r\n                }\r\n                if(i>j)\r\n                {\r\n                    return 0;\r\n                }\r\n                while(s[j]==x)\r\n                {\r\n                    j--;\r\n                }\r\n                if(j<i)\r\n                {\r\n                    return 0;\r\n                }\r\n            }\r\n        }\r\n        \r\n        return j-i+1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumLength(self, s: str) -> int:\r\n        while(len(s)>1 and s[0]==s[-1]):\r\n            s=s.strip(s[0])\r\n        else:\r\n            return len(s)",
    "java": "// Runtime: 8 ms (Top 45.06%) | Memory: 54.1 MB (Top 20.99%)\r\nclass Solution {\r\n    public int minimumLength(String s) {\r\n        int length = s.length();\r\n        char[] chars = s.toCharArray();\r\n        for(int left = 0,right = chars.length-1;left < right;){\r\n            if(chars[left] == chars[right]){\r\n                char c = chars[left];\r\n             while(left < right && chars[left] == c ){\r\n                    left++;\r\n                    length--;\r\n\r\n                }\r\n\r\n                while (right >= left && chars[right] == c){\r\n                    right--;\r\n                    length--;\r\n\r\n                }\r\n            }else {\r\n                break;\r\n            }\r\n        }\r\n        return length;\r\n    }\r\n}",
    "javascript": "// Runtime: 81 ms (Top 93.02%) | Memory: 45.7 MB (Top 95.35%)\r\nvar minimumLength = function(s) {\r\n    const n = s.length;\r\n\r\n    let left = 0;\r\n    let right = n - 1;\r\n\r\n    while (left < right) {\r\n        if (s.charAt(left) != s.charAt(right)) break;\r\n\r\n        left++;\r\n        right--;\r\n\r\n        while (left <= right && s.charAt(left - 1) == s.charAt(left)) left++;\r\n        while (left <= right && s.charAt(right) == s.charAt(right + 1)) right--;\r\n    }\r\n\r\n    return right - left + 1;\r\n};"
  }
}
