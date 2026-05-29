export default {
  "id": 2120,
  "name": "Execution of All Suffix Instructions Staying in a Grid",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid",
  "relativeDir": "E/Execution of All Suffix Instructions Staying in a Grid",
  "slug": "2120-execution-of-all-suffix-instructions-staying-in-a-grid",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 41,
    "python": 29,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tvector<int> executeInstructions(int n, vector<int>& start, string s) {\r\n\t\tint m=s.size();\r\n\t\tvector<int> ans(m);\r\n\t\tfor(int l=0;l<m;l++){\r\n\t\t\tint count=0;\r\n\t\t\tint i=start[0],j=start[1];\r\n\t\t\tfor(int k=l;k<m;k++){\r\n\t\t\t\tif(s[k]=='L'){\r\n\t\t\t\t\tif(j-1>=0){\r\n\t\t\t\t\t\tj--;\r\n\t\t\t\t\t\tcount++;\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse break;\r\n\t\t\t\t}\r\n\t\t\t\telse if(s[k]=='R'){\r\n\t\t\t\t\tif(j+1<n){\r\n\t\t\t\t\t\tj++;\r\n\t\t\t\t\t\tcount++;\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse break;\r\n\t\t\t\t}\r\n\t\t\t\telse if(s[k]=='U'){\r\n\t\t\t\t\tif(i-1>=0){\r\n\t\t\t\t\t\ti--;\r\n\t\t\t\t\t\tcount++;\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse break;\r\n\t\t\t\t} \r\n\t\t\t\telse{\r\n\t\t\t\t\tif(i+1<n){\r\n\t\t\t\t\t\ti++;\r\n\t\t\t\t\t\tcount++;\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse break;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tans[l]=count;\r\n\t\t}\r\n\t\treturn ans;\r\n\t}\r\n};",
    "python": "class Solution:\r\n    def executeInstructions(self, n: int, startPos: List[int], s: str) -> List[int]:\r\n        result = []\r\n        for idx in range(len(s)):\r\n            count, row, col = 0, startPos[0],startPos[1]\r\n            while  idx < len(s):\r\n                if s[idx] == 'D':\r\n                    row += 1\r\n                    if row >= n:\r\n                        break\r\n                    count += 1\r\n                elif s[idx] == 'U':\r\n                    row -= 1\r\n                    if row < 0:\r\n                        break\r\n                    count += 1\r\n                elif s[idx] == 'R':\r\n                    col += 1\r\n                    if col >= n:\r\n                        break\r\n                    count += 1\r\n                else:\r\n                    col -= 1\r\n                    if col < 0:\r\n                        break\r\n                    count += 1\r\n                idx += 1\r\n            result.append(count)\r\n        return result",
    "java": "// Runtime: 101 ms (Top 24.39%) | Memory: 46.7 MB (Top 33.10%)\r\nclass Solution {\r\n    public int[] executeInstructions(int n, int[] startPos, String s) {\r\n        //Make array of length equal to string length\r\n        int ans[]=new int[s.length()];\r\n\r\n        //Now use two for loops\r\n        for(int i=0;i<s.length();i++){\r\n            //countmoves will keep on counting the valid moves from i to s.length\r\n            int countMoves=0;\r\n            int yIndex=startPos[0];\r\n            int xIndex=startPos[1];\r\n            for(int j=i;j<s.length();j++){\r\n\r\n                if(s.charAt(j)=='R'){\r\n                    xIndex++;\r\n                }\r\n                if(s.charAt(j)=='L'){\r\n                       xIndex--;\r\n                }\r\n               if(s.charAt(j)=='U'){\r\n                        yIndex--;\r\n                }\r\n                if(s.charAt(j)=='D'){\r\n                    yIndex++;\r\n                }\r\n                if(xIndex<0 || xIndex>=n || yIndex<0 || yIndex>=n){\r\n                    break;\r\n                }\r\n                else{\r\n                    countMoves++;\r\n                }\r\n            }\r\n\r\n            ans[i]=countMoves;\r\n\r\n        }\r\n        return ans;\r\n\r\n    }\r\n}",
    "javascript": "// Runtime: 120 ms (Top 95.62%) | Memory: 45.3 MB (Top 37.23%)\r\n// Time: O(n^2)\r\nvar executeInstructions = function(n, startPos, s) {\r\n    let answers = [];\r\n    for (i = 0; i < s.length; i++) {\r\n        let movement = 0;\r\n        let [row, col] = startPos;\r\n        for (j = i; j < s.length; j++) {\r\n            if (s[j] == \"R\") col++;\r\n            else if (s[j] == \"L\") col--;\r\n            else if (s[j] == \"D\") row++;\r\n            else row--;\r\n            if(row>n-1 || col > n-1 || row < 0 || col < 0) {\r\n                break;\r\n            }\r\n            movement++;\r\n        }\r\n        answers[i] = movement;\r\n    }\r\n    return answers;\r\n};"
  }
}
