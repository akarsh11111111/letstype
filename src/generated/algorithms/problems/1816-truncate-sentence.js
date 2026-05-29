export default {
  "id": 1816,
  "name": "Truncate Sentence",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/truncate-sentence",
  "relativeDir": "T/Truncate Sentence",
  "slug": "1816-truncate-sentence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 18,
    "python": 4,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tstring truncateSentence(string s, int k) {\r\n\r\n\t\tint n = s.size();\r\n\r\n\t\tstring ans;\r\n\t\tint cnt = 0;\r\n\t\tfor(int i=0 ; i<n ; i++){\r\n\r\n\t\t\tif(s[i] == ' '){\r\n\t\t\t\tcnt++;\r\n\t\t\t}\r\n\r\n\t\t\tif(k == cnt){\r\n\t\t\t\treturn ans;\r\n\t\t\t}\r\n\r\n\t\t\tans += s[i];\r\n\r\n\t\t}\r\n\r\n\t\treturn ans; \r\n\t}\r\n};",
    "python": "class Solution:\r\n    def truncateSentence(self, s: str, k: int) -> str:\r\n        words = s.split(\" \")\r\n        return \" \".join(words[0:k])",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 41.30 MB (Top 77.37%)\r\n\r\nclass Solution {\r\n    public String truncateSentence(String s, int k) {\r\n        int n = s.length();\r\n        int count = 0;\r\n        int i = 0;\r\n        while(i<n){\r\n            if(s.charAt(i)==' '){\r\n                count++;\r\n                if(count==k) \r\n                    return s.substring(0,i);\r\n            }\r\n            i++;\r\n        }\r\n        return s;\r\n    }\r\n}",
    "javascript": "// Runtime: 51 ms (Top 67.8%) | Memory: 41.86 MB (Top 66.1%)\r\n\r\n/**\r\n * @param {string} s\r\n * @param {number} k\r\n * @return {string}\r\n */\r\nvar truncateSentence = function(s, k) {\r\n   return s.split(\" \").slice(0,k).join(\" \")\r\n};"
  }
}
