export default {
  "id": 520,
  "name": "Detect Capital",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/detect-capital",
  "relativeDir": "D/Detect Capital",
  "slug": "0520-detect-capital",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 14,
    "python": 19,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 10.31%) | Memory: 6 MB (Top 66.23%)\r\nclass Solution {\r\npublic:\r\n    bool detectCapitalUse(string word) {\r\n        int n = word.size();\r\n\r\n        //if the first letter of the string is lower-case\r\n        if(islower(word[0])){\r\n            int c = 0;\r\n            for(int i=0; i<n; i++){\r\n                if(islower(word[i])){\r\n                    c++;\r\n                }\r\n            }\r\n\r\n            //total lower-case count must be equal to the size of the string\r\n            if(c == n){\r\n                return true;\r\n            }\r\n            return false;\r\n        }\r\n\r\n        //if the first letter of the string is upper-case.\r\n        else{\r\n            int c = 0;\r\n            for(int i=0; i<n; i++){\r\n                if(isupper(word[i])){\r\n                    c++;\r\n                }\r\n            }\r\n\r\n            //count of total upper-case letters must be equal to 1 or to the size of the string.\r\n            if(c == 1 or c == n){\r\n                return true;\r\n            }\r\n\r\n            //in all other cases, return false.\r\n            return false;\r\n        }\r\n    }\r\n};",
    "python": "class Solution:\r\n    def detectCapitalUse(self, word: str) -> bool:\r\n        l=len(word)\r\n        if l==1:\r\n            return True\r\n        if word[0]==word[0].lower() and word[1]==word[1].upper():\r\n            return False\r\n            \r\n        u=False\r\n        if word[0]==word[0].upper():\r\n            if word[1]==word[1].upper():\r\n                u=True\r\n                \r\n        for i in word[2:]:\r\n            if i==i.upper() and u==False:\r\n                return False\r\n            elif i==i.lower() and u==True:\r\n                return False\r\n        return True",
    "java": "// Runtime: 3 ms (Top 29.72%) | Memory: 41.4 MB (Top 86.57%)\r\nclass Solution {\r\n    public boolean detectCapitalUse(String word) {\r\n        int count = 0;\r\n        for(int i=0; i < word.length(); i++){\r\n            if('A' <= word.charAt(i) && word.charAt(i) <= 'Z')\r\n                count++;\r\n        }\r\n        if(count == 0 || count == word.length() || (count == 1 && ('A' <= word.charAt(0) && word.charAt(0) <= 'Z')))\r\n            return true;\r\n        else\r\n            return false;\r\n    }\r\n}",
    "javascript": "var detectCapitalUse = function(word) {\r\n      if((word.charAt(0)==word.charAt(0).toUpperCase() && word.slice(1)==word.slice(1).toLowerCase()) || (word == word.toUpperCase() \r\n   || word == word.toLowerCase()))\r\n   {\r\n      return true\r\n   }\r\n    else{\r\n      return false\r\n  }\r\n};"
  }
}
