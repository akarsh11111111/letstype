export default {
  "id": 777,
  "name": "Swap Adjacent in LR String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/swap-adjacent-in-lr-string",
  "relativeDir": "S/Swap Adjacent in LR String",
  "slug": "0777-swap-adjacent-in-lr-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 35,
    "python": 16,
    "javascript": 36
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool canTransform(string start, string end) {\r\n        int s=0,e=0;\r\n        while(s<=start.size() and e<=end.size()){\r\n            while(s<start.size() and start[s]=='X'){\r\n                s++;\r\n            }\r\n            while(e<end.size() and end[e]=='X'){\r\n                e++;\r\n            }\r\n            if(s==start.size() or e==end.size()){\r\n                return s==start.size() and e==end.size();\r\n            } else if(start[s]!=end[e]){\r\n                return false;\r\n            } else if(start[s]=='R' and e<s){\r\n                return false;\r\n            } else if(start[s]=='L' and e>s){\r\n                return false;\r\n            }\r\n            s++;\r\n            e++;\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def canTransform(self, start: str, end: str) -> bool:\r\n        def chars(s):\r\n            for i, c in enumerate(s):\r\n                if c != 'X':\r\n                    yield i, c\r\n            \r\n            yield -1, ' '\r\n        \r\n        for (startI, startC), (endI, endC) in zip(chars(start), chars(end)):\r\n            if (startC != endC or\r\n                (startC == 'L' and startI < endI) or\r\n                (startC == 'R' and startI > endI)):\r\n                return False\r\n        \r\n        return True",
    "java": "// Runtime: 74 ms (Top 5.17%) | Memory: 82 MB (Top 5.24%)\r\nclass Solution {\r\n    public boolean canTransform(String start, String end) {\r\n        int startL = 0, startR = 0;\r\n        int endL = 0, endR = 0;\r\n        String stLR = \"\", edLR = \"\";\r\n        for(int i = 0; i < start.length(); i++) {\r\n            if(start.charAt(i) != 'X') {\r\n                if(start.charAt(i) == 'L') {\r\n                    startL++;\r\n                } else{\r\n                    startR++;\r\n                }\r\n                stLR+= start.charAt(i);\r\n            }\r\n            if(end.charAt(i) != 'X') {\r\n                if(end.charAt(i) == 'L') {\r\n                    endL++;\r\n                } else{\r\n                    endR++;\r\n                }\r\n                edLR += end.charAt(i);\r\n            }\r\n\r\n            if(startL > endL || startR < endR) //Check conditions at each instant\r\n                return false;\r\n        }\r\n\r\n        if(startL != endL || startR != endR || !stLR.equals(edLR)) //check their final count and positions\r\n            return false;\r\n\r\n        return true;\r\n    }\r\n\r\n}",
    "javascript": "// Runtime: 125 ms (Top 32.14%) | Memory: 42.9 MB (Top 73.21%)\r\n/**\r\n * @param {string} start\r\n * @param {string} end\r\n * @return {boolean}\r\n */\r\nvar canTransform = function(start, end) {\r\n    let i = 0;\r\n    let j = 0;\r\n\r\n    while (i < start.length || j < end.length) {\r\n        if (start[i] === 'X') {\r\n            i++;\r\n            continue;\r\n        }\r\n\r\n        if (end[j] === 'X') {\r\n            j++;\r\n            continue;\r\n        }\r\n\r\n        // Breaking (1)\r\n        if (start[i] !== end[j]) return false;\r\n\r\n        // Breaking (2)\r\n        if (start[i] === 'R' && i > j) return false;\r\n\r\n        // Breaking (3)\r\n        if (start[i] === 'L' && j > i) return false;\r\n\r\n        i++;\r\n        j++;\r\n    }\r\n\r\n    return true;\r\n};"
  }
}
