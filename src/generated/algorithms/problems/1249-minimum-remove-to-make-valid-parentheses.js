export default {
  "id": 1249,
  "name": "Minimum Remove to Make Valid Parentheses",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses",
  "relativeDir": "M/Minimum Remove to Make Valid Parentheses",
  "slug": "1249-minimum-remove-to-make-valid-parentheses",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 47,
    "java": 28,
    "python": 18,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 10 ms (Top 99.79%) | Memory: 9.8 MB (Top 95.82%)\r\n\r\nclass Solution {\r\npublic:\r\n    string minRemoveToMakeValid(string s) {\r\n        int count = 0;\r\n        for(int i = 0; i < s.size(); i++)\r\n        {\r\n\r\n            if(s[i]=='(')\r\n            {\r\n                count++;\r\n            }\r\n            if(s[i]==')')\r\n            {\r\n                if(count==0)\r\n                {\r\n                    s[i]='*';\r\n                }\r\n                else\r\n                {\r\n                    count--;\r\n                }\r\n            }\r\n\r\n        }\r\n        if(count==0)\r\n        {\r\n            s.erase(remove(s.begin(), s.end(), '*'), s.end());\r\n            return s;\r\n        }\r\n        for(int i = s.size()-1; i >=0; i--)\r\n        {\r\n            if(s[i]=='(')\r\n            {\r\n                s[i]='*';\r\n                count--;\r\n            }\r\n            if(count==0)\r\n            {\r\n                s.erase(remove(s.begin(), s.end(), '*'), s.end());\r\n                return s;\r\n            }\r\n        }\r\n        return s;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minRemoveToMakeValid(self, s) :\r\n        stack=[]\r\n        split_str=list(s)\r\n        for i in range(len(s)):\r\n            if s[i]=='(':\r\n                # if current char is '(' then push it to stack\r\n                stack.append(i)\r\n            elif s[i]==')':\r\n                # if current char is ')' then pop top of the stack\r\n                if len(stack) !=0:\r\n                    stack.pop()\r\n                else:\r\n                    # if our stack is empty then we can't pop so make  current char as ''\r\n                    split_str[i]=\"\"\r\n        for i in stack:\r\n            split_str[i]=\"\"\r\n        return '' .join(split_str)",
    "java": "// Runtime: 47 ms (Top 39.96%) | Memory: 42.9 MB (Top 93.77%)\r\nclass Solution {\r\n    public String minRemoveToMakeValid(String s) {\r\n        Stack<Integer> stack = new Stack<>();\r\n        for(int i=0;i<s.length();i++) {\r\n            char ch = s.charAt(i);\r\n            if(Character.isAlphabetic(ch))\r\n                continue;\r\n            if(ch == '(')\r\n                stack.push(i);\r\n            else {\r\n                if(!stack.isEmpty() && s.charAt(stack.peek()) == '(')\r\n                    stack.pop();\r\n                else stack.push(i);\r\n            }\r\n        }\r\n\r\n        // if(stack.size() == 0) return \"\";\r\n\r\n        StringBuilder result = new StringBuilder();\r\n        HashSet<Integer> set = new HashSet<>(stack);\r\n        for(int i=0;i<s.length();i++)\r\n            if(!set.contains(i))\r\n                result.append(s.charAt(i));\r\n\r\n        return result.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 154 ms (Top 33.70%) | Memory: 56.1 MB (Top 16.54%)\r\nvar minRemoveToMakeValid = function(s) {\r\n    let validity = 0;\r\n    for(let index = 0; index < s.length; index++) {\r\n        if(s[index] == ')') {\r\n            if(validity == 0) {\r\n                s = s.substring(0,index)+s.substring(index+1);\r\n                index--;\r\n            }\r\n            else {\r\n                validity--;\r\n            }\r\n        }\r\n        else if(s[index] == '(') {\r\n            validity++;\r\n        }\r\n    }\r\n    if(validity > 0) {\r\n        for(let index = s.length-1; index >= 0; index--) {\r\n            if(s[index] == '(') {\r\n                s = s.substring(0,index)+s.substring(index+1);\r\n                validity--;\r\n                if(validity === 0) break;\r\n            }\r\n        }\r\n    }\r\n    return s;\r\n};"
  }
}
