export default {
  "id": 434,
  "name": "Number of Segments in a String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-segments-in-a-string",
  "relativeDir": "N/Number of Segments in a String",
  "slug": "0434-number-of-segments-in-a-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 18,
    "python": 3,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int countSegments(string s) {\r\n        if(s==\"\")\r\n            return 0;\r\n        int res=0,flag=0;\r\n        for(int i=0;i<size(s);i++){\r\n            if(s[i]!=' '){\r\n                i++;\r\n                while(i<size(s) and s[i]!=' '){\r\n                    i++;\r\n                }\r\n                res++;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countSegments(self, s: str) -> int:\r\n        return len(s.split())",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.9 MB (Top 35.26%)\r\nclass Solution {\r\n    public int countSegments(String s) {\r\n        int length = 0;\r\n        boolean flag = false;\r\n\r\n        for(Character c : s.toCharArray()) {\r\n            if(c == ' ' && flag) {\r\n                length++;\r\n                flag = !flag;\r\n            } else if(c != ' ') {\r\n                flag = true;\r\n            }\r\n        }\r\n\r\n        return flag ? length + 1 : length;\r\n    }\r\n}",
    "javascript": "// Runtime: 46 ms (Top 82.9%) | Memory: 41.90 MB (Top 24.93%)\r\n\r\nvar countSegments = function(s) {\r\n    let count = 0;\r\n    \r\n    for (let i = 0; i < s.length; i++) {\r\n        // Check if the current character is a non-space character and the previous character is a space or the start of the string\r\n        if (s[i] !== ' ' && (i === 0 || s[i - 1] === ' ')) {\r\n        count++;\r\n        }\r\n    }\r\n    \r\n    return count;\r\n}"
  }
}
