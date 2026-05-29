export default {
  "id": 1190,
  "name": "Reverse Substrings Between Each Pair of Parentheses",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses",
  "relativeDir": "R/Reverse Substrings Between Each Pair of Parentheses",
  "slug": "1190-reverse-substrings-between-each-pair-of-parentheses",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 47,
    "python": 16,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string reverseParentheses(string s) {\r\n        stack<int> st;\r\n        for(int i=0;i<s.size();i++)\r\n        {\r\n            if(s[i]=='(')\r\n            {\r\n                st.push(i);\r\n            }\r\n            else if(s[i]==')')\r\n            {\r\n              int strt=st.top();\r\n              strt=strt+1;\r\n              int end=i;\r\n              reverse(s.begin()+strt,s.begin()+end);\r\n              st.pop();\r\n            }\r\n        }\r\n        string ans=\"\";\r\n        for(int i=0;i<s.size();i++)\r\n        {\r\n            if(s[i]=='(' || s[i]==')')\r\n            {\r\n                continue;\r\n            }\r\n            ans+=s[i];\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def reverseParentheses(self, s: str) -> str:\r\n        stack = []\r\n        ans = \"\"\r\n        res = deque([])\r\n        s = list(s)\r\n        for i in s:\r\n            if i==\")\":\r\n                while stack[-1] != \"(\":\r\n                    res.append(stack.pop())\r\n                stack.pop()\r\n                while res:\r\n                    stack.append(res.popleft())\r\n            else:\r\n                stack.append(i)\r\n        return \"\".join(stack)",
    "java": "// Runtime: 6 ms (Top 52.91%) | Memory: 42.5 MB (Top 42.22%)\r\nclass Solution {\r\n    public String reverseParentheses(String s) {\r\n        Stack<String> stack = new Stack<>();\r\n\r\n        int j = 0;\r\n        while(j < s.length()){\r\n            /*\r\n                We need to keep on adding whatever comes\r\n                as long as it is not a ')'.\r\n            */\r\n            if(s.charAt(j) != ')')\r\n                stack.push(s.charAt(j)+\"\");\r\n\r\n            /*\r\n                Now that we have encountered an ')', its time\r\n                to start popping from top of stack unless we find an opening\r\n                parenthesis\r\n\r\n                then we just need to reverse the string formed by popping\r\n                and put it back on stack.\r\n\r\n                Try dry running and it will all make sense\r\n            */\r\n            else{\r\n                StringBuilder sb = new StringBuilder();\r\n                while(!stack.isEmpty() && !stack.peek().equals(\"(\")){\r\n                    sb.append(stack.pop());\r\n                }\r\n\r\n                stack.pop();\r\n                stack.push(sb.reverse().toString());\r\n            }\r\n            j++;\r\n        }\r\n\r\n        /*\r\n            We have our result string in the stack now,\r\n            we just need to pop it and return the reverse of it.\r\n        */\r\n        StringBuilder res = new StringBuilder();\r\n        while(!stack.isEmpty())\r\n            res.append(stack.pop());\r\n\r\n        return res.reverse().toString();\r\n    }\r\n}",
    "javascript": "function reverse(s){\r\n    return s.split(\"\").reverse().join(\"\");\r\n}\r\n\r\nfunction solve(s,index) {    \r\n    let ans = \"\";   \r\n    let j = index;\r\n    while(j<s.length)\r\n    {   \r\n        if(s[j] == '(')\r\n        {\r\n            let store = solve(s,j+1);\r\n            ans += store.ans;\r\n            j = store.j;\r\n        }\r\n        else if(s[j] == ')')\r\n            return {ans : reverse(ans),j};          \r\n        else\r\n            ans+=s[j];            \r\n        j++;\r\n    }    \r\n        \r\n    return ans;\r\n}\r\n\r\nvar reverseParentheses = function(s) {\r\n    return solve(s,0);\r\n};"
  }
}
