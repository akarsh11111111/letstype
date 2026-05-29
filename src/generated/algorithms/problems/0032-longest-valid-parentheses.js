export default {
  "id": 32,
  "name": "Longest Valid Parentheses",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-valid-parentheses",
  "relativeDir": "L/Longest Valid Parentheses",
  "slug": "0032-longest-valid-parentheses",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 23,
    "python": 15,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 56.60%) | Memory: 6.7 MB (Top 96.14%)\r\n\r\nclass Solution {\r\npublic:\r\n    int longestValidParentheses(string s) {\r\n        int n = s.length(), i = 0, ans = 0, k = 0;\r\n        for(int j = 0; j < n; j++) {\r\n            if(s[j] == '(') k++;\r\n            else if(s[j] == ')') {\r\n                k--;\r\n                if(k == 0)\r\n                    ans = max(ans, j - i + 1);\r\n            }\r\n            if(k < 0) {\r\n                k = 0;\r\n                i = j + 1;\r\n            }\r\n        }\r\n        k = 0, i = n - 1;\r\n        for(int j = n - 1; j >= 0; j--) {\r\n            if(s[j] == ')') {\r\n                k++;\r\n            }\r\n            else if(s[j] == '(') {\r\n                k--;\r\n                if(k == 0)\r\n                    ans = max(ans, i - j + 1);\r\n            }\r\n            if(k < 0) {\r\n                k = 0;\r\n                i = j - 1;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 74 ms (Top 48.14%) | Memory: 14.8 MB (Top 24.60%)\r\nclass Solution:\r\n    def longestValidParentheses(self, s: str) -> int:\r\n\r\n        maxi = 0\r\n        stack = [-1]\r\n\r\n        for i in range(len(s)) :\r\n            if s[i] == \"(\" : stack.append(i)\r\n            else :\r\n                stack.pop()\r\n                if len(stack) == 0 : stack.append(i)\r\n                else : maxi = max(maxi, i - stack[-1])\r\n\r\n        return maxi",
    "java": "// Runtime: 1644 ms (Top 5.15%) | Memory: 43.1 MB (Top 65.80%)\r\nclass Solution {\r\n    public int longestValidParentheses(String s) {\r\n        int i=0;\r\n        int len=0;\r\n        while(i<s.length()){\r\n            int j=i;\r\n            int open=0;\r\n            int closed=0;\r\n            while(j<s.length()){\r\n                char ch = s.charAt(j);\r\n                if(ch=='(') open++;\r\n                if(ch==')') closed++;\r\n                if(closed>open) break;\r\n                if(open==closed) len=Math.max(len,j-i+1);\r\n\r\n                j++;\r\n            }\r\n            i++;\r\n        }\r\n        return len;\r\n    }\r\n}",
    "javascript": "// Runtime: 60 ms (Top 57.3%) | Memory: 44.98 MB (Top 23.9%)\r\n\r\nvar longestValidParentheses = function(s) {\r\n    let indexStack=[-1]\r\n    let characterStack=[];\r\n    let maxLength=0;\r\n    for(let i=0;i<s.length;i++){\r\n        if(s[i]=='('){\r\n            indexStack.push(i);\r\n            characterStack.push(s[i]);\r\n        }else{\r\n            if(characterStack[characterStack.length-1]=='('){\r\n                indexStack.pop();\r\n                characterStack.pop();\r\n                if(maxLength<i-indexStack[indexStack.length-1]){\r\n                    maxLength=i-indexStack[indexStack.length-1];\r\n                }\r\n            }else{\r\n                indexStack.push(i);\r\n            }\r\n        }\r\n    }\r\n    return maxLength;\r\n};"
  }
}
