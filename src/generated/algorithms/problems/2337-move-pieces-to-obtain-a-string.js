export default {
  "id": 2337,
  "name": "Move Pieces to Obtain a String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/move-pieces-to-obtain-a-string",
  "relativeDir": "M/Move Pieces to Obtain a String",
  "slug": "2337-move-pieces-to-obtain-a-string",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "python": 10,
    "javascript": 27
  },
  "languages": {
    "cpp": "// Runtime: 61 ms (Top 67.96%) | Memory: 19.30 MB (Top 97.79%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool canChange(string s, string t) {\r\n        int i = 0, j = 0, n = s.size(), m = t.size();\r\n        if(n != m) return false;\r\n        \r\n        while(i < n || j < m) {\r\n            while(i < n && s[i] == '_') i++;\r\n            while(j < m && t[j] == '_') j++;\r\n            \r\n            if(s[i] != t[j]) return false;\r\n            if(s[i] == 'R' && i > j) return false;\r\n            if(s[i] == 'L' && i < j) return false;\r\n            i++, j++;\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "// Runtime: 303 ms (Top 21.43%) | Memory: 21.30 MB (Top 33.04%)\r\n\r\nclass Solution:\r\n    def canChange(self, A: str, B: str) -> bool:\r\n        P = lambda c    :  c != '_'\r\n        I = lambda s,x  :  [i for i,c in enumerate(s) if c==x]\r\n        G = lambda d,p  :  all( p(x,y) for x,y in zip( I(A,d), I(B,d) ) )\r\n        S = lambda      :  [*filter(P,A)] == [*filter(P,B)]\r\n        return S() and G('L', ge) and G('R', le)\r\n\t\t#      1.          2.             3.",
    "javascript": "// Runtime: 151 ms (Top 47.54%) | Memory: 47.4 MB (Top 60.66%)\r\n/**\r\n * @param {string} start\r\n * @param {string} target\r\n * @return {boolean}\r\n */\r\nvar canChange = function(start, target) {\r\n    let i = 0\r\n    let j = 0\r\n    const len = start.length\r\n\r\n    while(i <= len && j <= len) {\r\n        while(i < len && start[i] === '_') i++\r\n        while(j < len && target[j] === '_') j++\r\n\r\n        if(i === len && j === len) return true\r\n        if(i === len || j === len) return false\r\n\r\n        if(start[i] !== target[j]) return false\r\n        if(start[i] === 'L' && j > i) return false\r\n        if(start[i] === 'R' && j < i) return false\r\n        i++\r\n        j++\r\n    }\r\n\r\n    return false\r\n};"
  }
}
