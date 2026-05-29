export default {
  "id": 1021,
  "name": "Remove Outermost Parentheses",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-outermost-parentheses",
  "relativeDir": "R/Remove Outermost Parentheses",
  "slug": "1021-remove-outermost-parentheses",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 27,
    "python": 16,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    stack<char>p;\r\n    int count=0;\r\n    string removeOuterParentheses(string s) {\r\n        string ans={};\r\n\r\n        for(auto &i:s){\r\n            if(i=='(' && count==0){\r\n                p.push(i);\r\n                count++;\r\n            }\r\n            else if (i=='(' && count!=0){\r\n                ans+='(';\r\n                p.push(i);\r\n                count++;\r\n            }\r\n            else{\r\n                count--;\r\n                p.pop();\r\n                if(count>0) ans+=')';\r\n            }\r\n            \r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def removeOuterParentheses(self, s: str) -> str:\r\n        c=0\r\n        res=''\r\n        for i in s:\r\n            if i==')' and c==1:\r\n                c=c-1\r\n            elif i=='(' and c==0:\r\n                c=c+1\r\n            elif i=='(':\r\n                res=res+'('\r\n                c=c+1\r\n            elif i==')':\r\n                res=res+')'\r\n                c=c-1\r\n        return res",
    "java": "// Runtime: 7 ms (Top 58.51%) | Memory: 43 MB (Top 43.86%)\r\nclass Solution {\r\n    public String removeOuterParentheses(String s) {\r\n    // if '(' check stack size > 0 add ans else not add ans\r\n        // if ')' check stack size > 0 add ans else not add ans\r\n        Stack<Character> st = new Stack<>();\r\n        StringBuilder sb = new StringBuilder();\r\n        for(int i=0;i<s.length();i++){\r\n            char ch = s.charAt(i);\r\n\r\n            if(ch == '('){\r\n                if(st.size() > 0){\r\n                    sb.append(ch);\r\n                }\r\n                st.push(ch);\r\n            }\r\n\r\n            else{\r\n                st.pop();\r\n                if(st.size() > 0){\r\n                    sb.append(ch);\r\n                }\r\n            }\r\n        }\r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "var removeOuterParentheses = function(s) {\r\n    let open = -1, ans = \"\", stack = [];\r\n    for(let c of s) {\r\n        if(c == '(') {\r\n            // open for top level open\r\n            if(open != -1) ans += c;\r\n            stack.push(open)\r\n            open++;\r\n        } else {\r\n            open = stack.pop();\r\n            // close for top level open\r\n            if(open != -1) ans += c;\r\n        }\r\n    }\r\n    return ans;\r\n};"
  }
}
