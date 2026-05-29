export default {
  "id": 385,
  "name": "Mini Parser",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/mini-parser",
  "relativeDir": "M/Mini Parser",
  "slug": "0385-mini-parser",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "python": 33,
    "javascript": 29
  },
  "languages": {
    "cpp": "// Runtime: 20 ms (Top 36.02%) | Memory: 13.5 MB (Top 22.22%)\r\nclass Solution {\r\npublic:\r\n    NestedInteger deserialize(string s) {\r\n\r\n        int i = 0;\r\n        return helper(s, i).getList()[0];\r\n    }\r\n\r\n    NestedInteger helper(string &s, int &i)\r\n    {\r\n        NestedInteger nI;\r\n\r\n        while(i < s.size())\r\n        {\r\n            if(s[i] == ',')\r\n            {\r\n                i++;\r\n                continue;\r\n            }\r\n\r\n            if(s[i] == ']')\r\n            {\r\n                i++;\r\n                return nI;\r\n            }\r\n\r\n            if(s[i] == '[')\r\n                nI.add(helper(s, ++i));\r\n            else\r\n            {\r\n                string tmp;\r\n                while(i < s.size() && s[i] != ',' && s[i] != ']')\r\n                    tmp += s[i++];\r\n\r\n                NestedInteger tmp_nI(stoi(tmp));\r\n                nI.add(tmp_nI);\r\n            }\r\n        }\r\n\r\n        return nI;\r\n    }\r\n};",
    "python": "class Solution:\r\n    \"\"\"\r\n    we can approach this problem using stack\r\n    \"\"\"\r\n    \r\n    def dfs(self, i, s):\r\n        res = NestedInteger()\r\n        while i < len(s):\r\n            if s[i] == '[':\r\n                y, i = self.dfs(i+1, s)\r\n                res.add(y)\r\n            elif i < len(s) and s[i] == ']':\r\n                i+=1\r\n                return res, i\r\n            elif i < len(s) and s[i] == ',':\r\n                i+=1\r\n            else: \r\n                if i < len(s):\r\n                    start = i\r\n                    while s[i] != ',' and s[i] != ']':\r\n                        i+=1\r\n                    res.add(NestedInteger(int(s[start:i])))\r\n        return res, i\r\n    \r\n    def deserialize(self, s: str) -> NestedInteger:\r\n        if s[0] == '[':\r\n            res, i = self.dfs(1, s)\r\n            return res\r\n        else:\r\n            num = int(s)\r\n            res = NestedInteger()\r\n            res.setInteger(num)\r\n            return res",
    "javascript": "var deserialize = function(s) {\r\n\tif (s[0] !== '[') return new NestedInteger(s);\r\n\r\n\tconst stack = [];\r\n\tlet start = 0;\r\n\tconst process = {\r\n\t\t'['(index) {\r\n\t\t\tstack.push(new NestedInteger());\r\n\t\t\tstart = index + 1;\r\n\t\t},\r\n\t\t','(index) {\r\n\t\t\tif (index > start) {\r\n\t\t\t\tconst value = s.slice(start, index);\r\n\t\t\t\tstack[stack.length - 1].add(new NestedInteger(value));\r\n\t\t\t}\r\n\t\t\tstart = index + 1;\r\n\t\t},\r\n\t\t']'(index) {\r\n\t\t\tthis[','](index);\r\n\t\t\tif (stack.length < 2) return;\r\n\t\t\tconst last = stack.pop();\r\n\t\t\tstack[stack.length - 1].add(last);\r\n\t\t}\r\n\t};\r\n\r\n\t[...s].forEach((current, index) => process[current]?.(index));\r\n\r\n\treturn stack[0];\r\n};"
  }
}
