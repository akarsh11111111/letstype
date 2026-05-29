export default {
  "id": 657,
  "name": "Robot Return to Origin",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/robot-return-to-origin",
  "relativeDir": "R/Robot Return to Origin",
  "slug": "0657-robot-return-to-origin",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 47,
    "java": 15,
    "python": 8,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 13 ms (Top 65.86%) | Memory: 8 MB (Top 44.84%)\r\nclass Solution {\r\npublic:\r\n    bool judgeCircle(string moves) {\r\n        int n=moves.size();\r\n        int a=0;\r\n        int b=0;\r\n        int c=0;\r\n        int d=0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            if(moves[i]=='R')\r\n            {\r\n               a=a+1;\r\n            }\r\n            if(moves[i]=='L')\r\n            {\r\n               b=b+1;\r\n            }\r\n             if(moves[i]=='U')\r\n             {\r\n               c=c+1;\r\n             }\r\n             if(moves[i]=='D')\r\n             {\r\n               d=d+1;\r\n             }\r\n         }\r\n        /*if(a==b && c==0 && d==0)\r\n        {\r\n            return true;\r\n        }\r\n        if(c==d && a==0 && b==0)\r\n        {\r\n            return true;\r\n        }*/\r\n        if(a==b && b==c && c==d)\r\n        {\r\n            return true;\r\n        }\r\n         if(a==b && c==d)\r\n        {\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "# Runtime: 88 ms (Top 52.68%) | Memory: 14.1 MB (Top 38.28%)\r\nclass Solution:\r\n    def judgeCircle(self, moves: str) -> bool:\r\n        x=Counter(moves)\r\n        flag=False\r\n        if(x['U']==x['D'] and x['L']==x['R']):\r\n            flag=True\r\n        return flag",
    "java": "class Solution {\r\n    public boolean judgeCircle(String moves) {\r\n       int up=0;\r\n        int rt=0;\r\n        for(int i=0;i<moves.length();i++){\r\n            if(moves.charAt(i)=='U') up++;\r\n            if(moves.charAt(i)=='R') rt++;\r\n            if(moves.charAt(i)=='L') rt--;\r\n            if(moves.charAt(i)=='D') up--;\r\n            \r\n        }\r\n        if(up==0&&rt==0) return true;\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 111 ms (Top 44.23%) | Memory: 43.1 MB (Top 76.28%)\r\nvar judgeCircle = function(moves) {\r\n    let x=0,y=0\r\n    for(i=0;i<moves.length;i++){\r\n        switch (moves[i]) {\r\n            case 'R':\r\n                x++;\r\n                break;\r\n            case 'L':\r\n                x--;\r\n                break;\r\n            case 'U':\r\n                y++;\r\n                break;\r\n            case 'D':\r\n                y--;\r\n                break;\r\n        }\r\n    }\r\n     return x === 0 && y === 0\r\n\r\n};"
  }
}
