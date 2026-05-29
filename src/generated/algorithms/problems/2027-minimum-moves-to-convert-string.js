export default {
  "id": 2027,
  "name": "Minimum Moves to Convert String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-moves-to-convert-string",
  "relativeDir": "M/Minimum Moves to Convert String",
  "slug": "2027-minimum-moves-to-convert-string",
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
    "python": 11,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minimumMoves(string s) {\r\n        int count=0;\r\n        int i=0;\r\n        \r\n        for(int i=0;i<s.size();){\r\n            if(s[i]=='O'){\r\n             // continue;\r\n              i++;}\r\n            else{\r\n              count++;\r\n              i+=3;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "// Runtime: 64 ms (Top 5.43%) | Memory: 17.30 MB (Top 11.89%)\r\n\r\nclass Solution:\r\n    def minimumMoves(self, s: str) -> int:\r\n        ans = i = 0\r\n        while i < len(s): \r\n            if s[i] == \"X\": \r\n                ans += 1\r\n                i += 3\r\n            else: i += 1\r\n        return ans",
    "java": "// Runtime: 1 ms (Top 83.6%) | Memory: 41.00 MB (Top 8.7%)\r\n\r\nclass Solution {\r\n    public int minimumMoves(String s) {\r\n        int i=0;\r\n        int step=0;\r\n        while(i<s.length()){\r\n            if(s.charAt(i)=='X'){\r\n                i=i+3;\r\n                step++;\r\n            }\r\n            else{\r\n                i++;\r\n            }\r\n        }\r\n        return step;\r\n    }\r\n}",
    "javascript": "// Runtime: 73 ms (Top 80.85%) | Memory: 42.2 MB (Top 59.57%)\r\nvar minimumMoves = function(s) {\r\n    let move = 0;\r\n    let i = 0;\r\n    while(i<s.length){\r\n        let char = s[i];\r\n        // incrementing the index if we already have 'O'\r\n        if(char== 'O'){\r\n            i++;\r\n        }\r\n        // incrementing the move and index by 3 (Per move = 3 characters)\r\n        if(char== 'X'){\r\n            i=i+3;\r\n            move++;\r\n        }\r\n    }\r\n    return move;\r\n};"
  }
}
