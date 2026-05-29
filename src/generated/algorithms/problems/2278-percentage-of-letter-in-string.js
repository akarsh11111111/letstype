export default {
  "id": 2278,
  "name": "Percentage of Letter in String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/percentage-of-letter-in-string",
  "relativeDir": "P/Percentage of Letter in String",
  "slug": "2278-percentage-of-letter-in-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 17,
    "python": 3,
    "javascript": 8
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int percentageLetter(string s, char letter) {\r\n        int count=0;\r\n        for(int i=0;i<s.length();i++)\r\n        {  if(s[i]==letter)\r\n            {\r\n                count++;\r\n            }\r\n        }\r\n        return (count*100)/s.length();\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def percentageLetter(self, s: str, letter: str) -> int:\r\n        return (s.count(letter)*100)//len(s)",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 40.55 MB (Top 34.5%)\r\n\r\nclass Solution {\r\n    public int percentageLetter(String str, char letter) {\r\n        int count=0;\r\n        int n=str.length();\r\n        for(int i=0;i<n;i++){\r\n            if(str.charAt(i)==letter){\r\n\r\n                count ++;\r\n            }\r\n        }\r\n                 int per= (100*count)/n;\r\n         return per;   \r\n        \r\n    }\r\n}",
    "javascript": "// Runtime: 99 ms (Top 27.52%) | Memory: 42.1 MB (Top 51.50%)\r\nvar percentageLetter = function(s, letter) {\r\n    let count = 0;\r\n    for (let i of s) { // count how many letters are in s\r\n        if (i == letter) count++;\r\n    }\r\n    return (Math.floor((count*1.0) / (s.length*1.0) * 100)) // get percentage\r\n};"
  }
}
