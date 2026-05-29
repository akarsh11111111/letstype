export default {
  "id": 150,
  "name": "Evaluate Reverse Polish Notation",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/evaluate-reverse-polish-notation",
  "relativeDir": "E/Evaluate Reverse Polish Notation",
  "slug": "0150-evaluate-reverse-polish-notation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 61,
    "java": 24,
    "python": 16,
    "javascript": 41
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int stoi(string s){\r\n        int n = 0;\r\n        int i = 0;\r\n        bool neg = false;\r\n        if(s[0] == '-'){\r\n            i++;\r\n            neg = true;\r\n        }\r\n        for(; i < s.size(); i++){\r\n            n = n*10 + (s[i]-'0');\r\n        }\r\n        if(neg) n = -n;\r\n        return n;\r\n    }\r\n    int evalRPN(vector<string>& tokens) {\r\n        stack<int>s;\r\n        int n = tokens.size();\r\n        for(int i = 0; i < n; i++){\r\n            string str = tokens[i];\r\n            if(str == \"*\"){\r\n                int n1 = s.top();\r\n                s.pop();\r\n                int n2 = s.top();\r\n                s.pop();\r\n                int res = n2*n1;\r\n                s.push(res);\r\n            }\r\n            else if(str == \"+\") {\r\n                int n1 = s.top();\r\n                s.pop();\r\n                int n2 = s.top();\r\n                s.pop();\r\n                int res = n2+n1;\r\n                s.push(res);\r\n            }\r\n            else if(str == \"/\"){\r\n                int n1 = s.top();\r\n                s.pop();\r\n                int n2 = s.top();\r\n                s.pop();\r\n                int res = n2/n1;\r\n                s.push(res);\r\n            }\r\n            else if(str == \"-\"){\r\n                int n1 = s.top();\r\n                s.pop();\r\n                int n2 = s.top();\r\n                s.pop();\r\n                int res = n2-n1;\r\n                s.push(res);\r\n            }\r\n            else{\r\n                int num = stoi(str);\r\n                s.push(num);\r\n            }\r\n        }\r\n        return s.top();\r\n    }\r\n};",
    "python": "class Solution:\r\n    def evalRPN(self, tokens: List[str]) -> int:\r\n        stack = []      \r\n        for i in tokens:\r\n            if i == \"+\":\r\n                stack[-1] = stack[-2] + stack.pop()\r\n            elif i == \"-\":\r\n                stack[-1] = stack[-2] - stack.pop()\r\n            elif i == \"*\":\r\n                stack[-1] = stack[-2] * stack.pop()\r\n            elif i == \"/\":\r\n                stack[-1] = int(stack[-2] / stack.pop())\r\n            else:\r\n                stack.append(int(i))\r\n                \r\n        return stack.pop()",
    "java": "class Solution {\r\n    public int evalRPN(String[] tokens) {\r\n        Stack<Integer> stack = new Stack();\r\n        for(String i: tokens){\r\n            if(i.equals(\"+\") || i.equals(\"-\") || i.equals(\"*\") || i.equals(\"/\")){\r\n                int a = stack.pop();\r\n                int b = stack.pop();\r\n                int temp = 0;\r\n                if(i.equals(\"+\"))\r\n                    temp = a+b;\r\n                else if(i.equals(\"-\"))\r\n                    temp = b-a;\r\n                else if(i.equals(\"*\"))\r\n                    temp = a*b;\r\n                else if(i.equals(\"/\"))\r\n                    temp = b/a;\r\n                stack.push(temp);\r\n            }\r\n            else\r\n                stack.push(Integer.parseInt(i));\r\n        }\r\n        return stack.pop();\r\n    }\r\n}",
    "javascript": "// Runtime: 74 ms (Top 94.68%) | Memory: 44 MB (Top 93.79%)\r\nconst ops = new Set(['+', '-', '*', '/']);\r\n\r\n/**\r\n * @param {string[]} tokens\r\n * @return {number}\r\n */\r\nvar evalRPN = function(tokens) {\r\n    const stack = [];\r\n\r\n    for (const token of tokens) {\r\n        if (!ops.has(token)) {\r\n            stack.push(Number(token));\r\n            continue;\r\n        }\r\n\r\n        const val1 = stack.pop();\r\n        const val2 = stack.pop();\r\n        let toPush;\r\n\r\n        if (token === '+') {\r\n            toPush = val1 + val2;\r\n        }\r\n\r\n        if (token === '-') {\r\n            toPush = val2 - val1;\r\n        }\r\n\r\n        if (token === '*') {\r\n            toPush = val1 * val2;\r\n        }\r\n\r\n        if (token === '/') {\r\n            toPush = Math.trunc(val2 / val1);\r\n        }\r\n\r\n        stack.push(toPush);\r\n    }\r\n\r\n    return stack[0] || 0;\r\n};"
  }
}
