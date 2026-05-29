export default {
  "id": 1678,
  "name": "Goal Parser Interpretation",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/goal-parser-interpretation",
  "relativeDir": "G/Goal Parser Interpretation",
  "slug": "1678-goal-parser-interpretation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 26,
    "python": 3,
    "javascript": 3
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string interpret(string command) {\r\n        string s=\"\",str;\r\n        for(char ch: command){\r\n            s+=ch;\r\n            if(s==\"G\"){\r\n                str+=\"G\";\r\n                s=\"\";\r\n            }else if(s==\"()\"){\r\n                str+=\"o\";\r\n                s=\"\";\r\n            }else if(s==\"(al)\"){\r\n                str+=\"al\";\r\n                s=\"\";\r\n            }\r\n        }\r\n        return str;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def interpret(self, command: str) -> str:\r\n        return command.replace('()','o').replace('(al)','al')",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 41.40 MB (Top 29.82%)\r\n\r\nclass Solution {\r\n    public String interpret(String c) {\r\n        StringBuilder st = new StringBuilder();\r\n        for(int i =0; i<c.length(); i++)\r\n        {\r\n            if(c.charAt(i) == 'G')\r\n                st.append(\"G\");\r\n            else\r\n            {\r\n                if(c.charAt(i+1) == ')' )\r\n                {\r\n                    st.append(\"o\");\r\n                    i++;\r\n                }\r\n                else\r\n                {\r\n                    st.append(\"al\");\r\n                    i = i+3;\r\n                }\r\n            }\r\n        }\r\n        return st.toString();\r\n    }\r\n}",
    "javascript": "var interpret = function(command) {\r\n    return command.split(\"()\").join(\"o\").split(\"(al)\").join(\"al\");\r\n};"
  }
}
