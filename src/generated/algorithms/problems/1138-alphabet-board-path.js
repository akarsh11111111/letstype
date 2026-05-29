export default {
  "id": 1138,
  "name": "Alphabet Board Path",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/alphabet-board-path",
  "relativeDir": "A/Alphabet Board Path",
  "slug": "1138-alphabet-board-path",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 19,
    "python": 35,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 2 ms (Top 60.19%) | Memory: 6.1 MB (Top 62.14%)\r\nclass Solution {\r\npublic:\r\n    string alphabetBoardPath(string target) {\r\n        string ans = \"\";\r\n        int prevRow = 0;\r\n        int prevCol = 0;\r\n        int curRow = 0;\r\n        int curCol = 0;\r\n        for(int i = 0; i < target.length(); i++){\r\n            prevCol = curCol;\r\n            prevRow = curRow;\r\n            curRow = (target[i] - 'a')/5;\r\n            curCol = (target[i] - 'a')%5;\r\n            if(curRow == 5 and abs(curCol - prevCol) > 0){\r\n                curRow--;\r\n            }\r\n            if(curRow - prevRow > 0){\r\n                ans += string((curRow - prevRow), 'D');\r\n            }else{\r\n                ans += string((prevRow - curRow), 'U');\r\n            }\r\n            if(curCol - prevCol > 0){\r\n                ans += string((curCol - prevCol), 'R');\r\n            }else{\r\n                ans += string((prevCol - curCol), 'L');\r\n            }\r\n            if(((target[i] - 'a')/5) == 5 and abs(curCol - prevCol) > 0){\r\n                ans += 'D';\r\n                curRow++;\r\n            }\r\n            ans += '!';\r\n        }\r\n        return ans;\r\n\r\n    }\r\n};",
    "python": "# Runtime: 68 ms (Top 16.25%) | Memory: 14 MB (Top 13.50%)\r\nclass Solution:\r\n    def alphabetBoardPath(self, target: str) -> str:\r\n        def shortestPath(r,c,tr,tc):\r\n            path = \"\"\r\n            pr = r\r\n            while r > tr:\r\n                path += 'U'\r\n                r -= 1\r\n            while r < tr:\r\n                path += 'D'\r\n                r += 1\r\n            if tr == 5 and pr != tr: path = path[:len(path) - 1]\r\n            while c > tc:\r\n                path += 'L'\r\n                c -= 1\r\n            while c < tc:\r\n                path += 'R'\r\n                c += 1\r\n            if tr == 5 and pr != tr: path = path + 'D'\r\n            return path\r\n\r\n        table = ['abcde','fghij','klmno','pqrst','uvwxy','z']\r\n        r,c = 0,0\r\n        ans = \"\"\r\n        for character in target:\r\n            t_row = None\r\n            for i,word in enumerate(table):\r\n                if character in word:\r\n                    t_row = i\r\n                    break\r\n            t_col = table[i].index(character)\r\n            ans += shortestPath(r,c,t_row,t_col) + '!'\r\n            r,c = t_row,t_col\r\n        return ans",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 40.07 MB (Top 98.6%)\r\n\r\nclass Solution {\r\n    public String alphabetBoardPath(String target) {\r\n        int x = 0, y = 0;\r\n        StringBuilder sb = new StringBuilder();\r\n        for(int i = 0; i < target.length(); i++){\r\n            char ch = target.charAt(i);\r\n            int x1 = (ch - 'a') / 5;\r\n            int y1 = (ch - 'a') % 5;\r\n            while(x1 < x)   {x--; sb.append('U');}\r\n            while(y1 > y)   {y++; sb.append('R');}\r\n            while(y1 < y)   {y--; sb.append('L');}\r\n            while(x1 > x)   {x++; sb.append('D');}\r\n            sb.append('!');\r\n        }\r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "var alphabetBoardPath = function(target) {\r\n    var result = \"\";\r\n    var list = \"abcdefghijklmnopqrstuvwxyz\";\r\n    var curr = 0;\r\n    for(i=0;i<target.length;i++){ \r\n          let next = list.indexOf(target[i]);\r\n          if(next!==curr){   \r\n              if(curr===25) curr-=5, result+=\"U\";\r\n              if(next%5!==curr%5){  \r\n                 diff = next%5-curr%5;\r\n                 if(diff>0) curr+=diff, result+=\"R\".repeat(diff);\r\n                 else curr+=diff, result+=\"L\".repeat(-diff);  \r\n             }\r\n             diff = (next-curr)/5;\r\n             if(diff>0) curr+=diff*5, result+=\"D\".repeat(diff);\r\n             else curr+=diff*5, result+=\"U\".repeat(-diff);     \r\n          }\r\n    result+='!';\r\n    }\r\n    return result;\r\n};"
  }
}
