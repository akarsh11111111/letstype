export default {
  "id": 6,
  "name": "Zigzag Conversion",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/zigzag-conversion",
  "relativeDir": "Z/Zigzag Conversion",
  "slug": "0006-zigzag-conversion",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 22,
    "python": 50,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string convert(string s, int numRows) {\r\n        vector<vector<char>> v(numRows);\r\n        int j=0,t=1;\r\n        if(numRows ==1)\r\n            return s;\r\n        for(int i=0;i<s.size();i++)\r\n        {\r\n            v[j].push_back((char)s[i]);\r\n            if(j==numRows-1 )\r\n                t=0;\r\n            else if(j==0)\r\n                t=1;\r\n            if(t)\r\n                j++;\r\n            else\r\n                j--;\r\n            \r\n        }\r\n        string x=\"\";\r\n        for(int i=0;i<numRows;i++)\r\n        {\r\n            for(int j=0;j<v[i].size();j++)\r\n                x.push_back(v[i][j]);\r\n        }\r\n        return x;\r\n    }\r\n};",
    "python": "# Runtime: 96 ms (Top 61.23%) | Memory: 14 MB (Top 75.15%)\r\nclass Solution:\r\n    def convert(self, s: str, numRows: int) -> str:\r\n\r\n        # safety check to not process single row\r\n        if numRows == 1:\r\n            return s\r\n\r\n        # safety check to not process strings shorter/equal than numRows\r\n        if len(s) <= numRows:\r\n            return s\r\n\r\n        # safety check to not process double rows\r\n        if numRows == 2:\r\n            # slice every other character\r\n            return s[0::2] + s[1::2]\r\n\r\n        # list that stores the lines\r\n        # add lines with initial letters\r\n        lines: list[str] = [letter for letter in s[:numRows]]\r\n\r\n        # positive direction goes down\r\n        # lines are created, so it's going up\r\n        direction: int = -1\r\n\r\n        # track the position at which the letter will be added\r\n        # position after bouncing off, after adding initial lines\r\n        line_index: int = numRows - 2\r\n\r\n        # edge indexes\r\n        # 0 can only be reached by going up\r\n        # numRows only by going down\r\n        edges: set[int] = {0, numRows}\r\n\r\n        for letter in s[numRows:]:\r\n            # add letter at tracked index position\r\n            lines[line_index] += letter\r\n\r\n            # prepare index before next loop iteration\r\n            line_index += direction\r\n\r\n            # reaching one of the edges\r\n            if line_index in edges:\r\n                # change direction\r\n                direction = -direction\r\n                # bounce off if bottom edge\r\n                if line_index == numRows:\r\n                    line_index += direction * 2\r\n\r\n        return \"\".join(lines)",
    "java": "class Solution {\r\n    public String convert(String s, int numRows) {\r\n        if (numRows==1)return s;\r\n        StringBuilder builder = new StringBuilder();\r\n        for (int i=1;i<=numRows;i++){\r\n            int ind = i-1;\r\n            boolean up = true;\r\n            while (ind < s.length()){\r\n                builder.append(s.charAt(ind));\r\n                if (i==1){\r\n                    ind += 2*(numRows-i);\r\n                } else if (i==numRows){\r\n                    ind += 2*(i-1);\r\n                } else {\r\n                    ind += up ? 2*(numRows-i) : 2*(i-1);\r\n                    up=!up;\r\n                }\r\n            }\r\n        }\r\n        return builder.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 123 ms (Top 65.91%) | Memory: 46.7 MB (Top 68.76%)\r\nvar convert = function(s, numRows) {\r\n  let result = [];\r\n  let row = 0;\r\n  let goingUp = false;\r\n  for (let i = 0; i < s.length; i++) {\r\n    result[row] = (result[row] || '') + s[i]; // append letter to active row\r\n    if (goingUp) {\r\n      row--;\r\n      if (row === 0) goingUp = false; // reverse direction if goingUp and reaching top\r\n    } else {\r\n      row++;\r\n      if (row === numRows - 1) goingUp = true; // reverse direction after reaching bottom\r\n    }\r\n\r\n  }\r\n  return result.join('');\r\n};"
  }
}
