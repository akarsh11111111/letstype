export default {
  "id": 2038,
  "name": "Remove Colored Pieces if Both Neighbors are the Same Color",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color",
  "relativeDir": "R/Remove Colored Pieces if Both Neighbors are the Same Color",
  "slug": "2038-remove-colored-pieces-if-both-neighbors-are-the-same-color",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 12,
    "python": 13,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 298 ms (Top 5.08%) | Memory: 13.4 MB (Top 39.48%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool winnerOfGame(string colors) {\r\n        if (colors.size() < 3) return false;\r\n        int a = 0, b = 0;\r\n        for (int i = 0; i < colors.size()-2; i++) {\r\n            if (colors.substr(i, 3) == \"AAA\") a++;\r\n            else if (colors.substr(i, 3) == \"BBB\") b++;\r\n        }\r\n        return a > b;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def winnerOfGame(self, s: str) -> bool:\r\n        \r\n        a = b = 0\r\n        \r\n        for i in range(1,len(s)-1):\r\n            if s[i-1] == s[i] == s[i+1]:\r\n                if s[i] == 'A':\r\n                    a += 1\r\n                else:\r\n                    b += 1\r\n                    \r\n        return a>b",
    "java": "// Runtime: 48 ms (Top 5.50%) | Memory: 52.8 MB (Top 84.58%)\r\nclass Solution {\r\n    public boolean winnerOfGame(String colors) {\r\n        int cntA=0,cntB=0;\r\n        for(int i=1;i<colors.length()-1;i++){\r\n             if(colors.charAt(i)=='A'&&colors.charAt(i-1)=='A'&&colors.charAt(i+1)=='A')cntA++;\r\n            if(colors.charAt(i)=='B'&&colors.charAt(i-1)=='B'&&colors.charAt(i+1)=='B')cntB++;\r\n        }\r\n\r\n        return cntA>cntB;\r\n    }\r\n}",
    "javascript": "// Runtime: 66 ms (Top 82.26%) | Memory: 45.70 MB (Top 32.26%)\r\n\r\n/**\r\n * @param {string} colors\r\n * @return {boolean}\r\n */\r\nvar winnerOfGame = function(colors) {\r\n        let alice_plays = 0, bob_plays = 0, count = 0;\r\n        \r\n        for (let i = 1; i < colors.length; i++) {\r\n            if (colors[i] == colors[i - 1]) {\r\n                count++;\r\n            } else {\r\n                if (colors[i - 1] == 'A') {\r\n                    alice_plays += Math.max(0, count - 1);\r\n                } else {\r\n                    bob_plays += Math.max(0, count - 1);\r\n                }\r\n                count = 0;\r\n            }\r\n        }\r\n\r\n        if (colors.charAt(colors.length - 1) == 'A') {\r\n            alice_plays += Math.max(0, count - 1);\r\n        } else {\r\n            bob_plays += Math.max(0, count - 1);\r\n        }\r\n        \r\n        return alice_plays > bob_plays;\r\n    }"
  }
}
