export default {
  "id": 227,
  "name": "Basic Calculator II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/basic-calculator-ii",
  "relativeDir": "B/Basic Calculator II",
  "slug": "0227-basic-calculator-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 46,
    "java": 33,
    "python": 29,
    "javascript": 34
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int calculate(string s) {\r\n        stack<int> nums;\r\n        stack<char> ops;\r\n        int n = 0;\r\n        for(int i = 0; i < s.size(); ++i){\r\n            if(s[i] >= '0' && s[i] <= '9'){\r\n                string t(1, s[i]);\r\n                n = n*10 + stoi(t);\r\n            }else if( s[i] == '+' || s[i] == '-' || s[i] == '*' || s[i] == '/'){\r\n                nums.push(n);\r\n                n = 0;\r\n                if(!ops.empty() && (ops.top() == '*' || ops.top() == '/') ){\r\n                    int n2 = nums.top(); nums.pop();\r\n                    int n1 = nums.top(); nums.pop();\r\n                    if(ops.top() == '*') nums.push(n1*n2);\r\n                    else nums.push(n1/n2);\r\n                    ops.pop();\r\n                }\r\n                ops.push(s[i]);\r\n            }\r\n        }\r\n        nums.push(n);\r\n        if(!ops.empty() && (ops.top() == '*' || ops.top() == '/') ){\r\n            int n2 = nums.top(); nums.pop();\r\n            int n1 = nums.top(); nums.pop();\r\n            if(ops.top() == '*') nums.push(n1*n2);\r\n            else nums.push(n1/n2);\r\n            ops.pop();\r\n        }\r\n        stack<int> tnums;\r\n        stack<char> tops;\r\n        while(!nums.empty()){ tnums.push(nums.top()); nums.pop();}\r\n        while(!ops.empty()) { tops.push(ops.top()); ops.pop(); }\r\n        \r\n        while(!tops.empty()){ //cout<<tops.top()<<\" \" ;\r\n            int n1 = tnums.top(); tnums.pop();\r\n            int n2 = tnums.top(); tnums.pop();\r\n            if(tops.top() == '+') tnums.push(n1 + n2);\r\n            else tnums.push(n1 - n2);\r\n            tops.pop();\r\n        }\r\n        return tnums.top();\r\n    }\r\n};",
    "python": "# Runtime: 201 ms (Top 18.42%) | Memory: 15.8 MB (Top 36.40%)\r\nclass Solution:\r\n    def calculate(self, s: str) -> int:\r\n        stack = []\r\n        currentNumber = 0\r\n        operator = '+'\r\n        operations = '+-/*'\r\n        for i in range(len(s)):\r\n            ch = s[i]\r\n            if ch.isdigit():\r\n                currentNumber = currentNumber * 10 + int(ch)\r\n\r\n            if ch in operations or i == len(s) - 1:\r\n                if operator == '+':\r\n                    stack.append(currentNumber)\r\n\r\n                elif operator == '-':\r\n                    stack.append(-currentNumber)\r\n\r\n                elif operator == '*':\r\n                    stack.append(stack.pop() * currentNumber)\r\n\r\n                elif operator == '/':\r\n                    stack.append(int(stack.pop()/currentNumber))\r\n\r\n                currentNumber =0\r\n                operator = ch\r\n\r\n        return sum(stack)",
    "java": "// Runtime: 33 ms (Top 27.28%) | Memory: 45.6 MB (Top 25.17%)\r\nclass Solution {\r\n    public int calculate(String s) {\r\n        if(s==null ||s.length()==0)return 0;\r\n        Stack<Integer> st = new Stack<>();\r\n        int curr=0;\r\n        char op = '+';\r\n        char [] ch = s.toCharArray();\r\n        for(int i=0;i<s.length();i++){\r\n            if(Character.isDigit(ch[i])){\r\n                curr= curr*10+ch[i]-'0';\r\n            }\r\n            if(!Character.isDigit(ch[i])&& ch[i]!=' ' || i==ch.length-1){\r\n                if(op=='+'){\r\n                    st.push(curr);\r\n                }else if(op=='-'){\r\n                    st.push(-curr);\r\n                }else if(op=='*'){\r\n                    st.push(st.pop()*curr);\r\n                }else if(op=='/'){\r\n                    st.push(st.pop()/curr);\r\n                }\r\n                op=ch[i];\r\n                curr=0;\r\n            }\r\n        }\r\n        int sum=0;\r\n        while(!st.isEmpty()){\r\n            sum+=st.pop();\r\n        }\r\n        return sum;\r\n    }\r\n} //TC=o(n),SC=o(n)",
    "javascript": "/**\r\n * @param {string} s\r\n * @return {number}\r\n */\r\nvar calculate = function(s) {\r\n    const n = s.length;\r\n    let currNum = 0, lastNum = 0, res = 0;\r\n    let op = '+';\r\n    \r\n    for (let i = 0; i < n; i++) {\r\n        let currChar = s[i];\r\n        \r\n        if (currChar !== \" \" && !isNaN(Number(currChar))) {\r\n            currNum = currNum * 10 + Number(currChar);\r\n        }\r\n        \r\n        if (isNaN(Number(currChar)) && currChar !== \" \" || i === n - 1) {\r\n            if (op === '+' || op === '-') {\r\n                res += lastNum;\r\n                lastNum = (op === '+' ? currNum : -currNum);\r\n            } else if (op === '*') {\r\n                lastNum *= currNum;\r\n            } else if (op === '/') {\r\n                lastNum = Math.floor(Math.abs(lastNum) / currNum) * (lastNum < 0 ? -1 : 1);\r\n            }\r\n            \r\n            op = currChar;\r\n            currNum = 0;\r\n        }\r\n    }\r\n    \r\n    res += lastNum;\r\n    return res;\r\n};"
  }
}
