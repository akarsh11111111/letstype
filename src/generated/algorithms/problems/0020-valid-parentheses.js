export default {
  "id": 20,
  "name": "Valid Parentheses",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/valid-parentheses",
  "relativeDir": "V/Valid Parentheses",
  "slug": "0020-valid-parentheses",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 22,
    "python": 12,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.70 MB (Top 37.86%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool isValid(string s) {\r\n        stack<char> st;  //taking stack for keep tracking the order of the brackets..\r\n        for(auto i:s)  //iterate over each and every elements\r\n        {\r\n            if(i=='(' or i=='{' or i=='[') st.push(i);  //if current element of the string will be opening bracket then we will just simply push it into the stack\r\n            else  //if control comes to else part, it means that current element is a closing bracket, so check two conditions  current element matches with top of the stack and the stack must not be empty...\r\n            {\r\n                if(st.empty() or (st.top()=='(' and i!=')') or (st.top()=='{' and i!='}') or (st.top()=='[' and i!=']')) return false;\r\n                st.pop();  //if control reaches to that line, it means we have got the right pair of brackets, so just pop it.\r\n            }\r\n        }\r\n        return st.empty();  //at last, it may possible that we left something into the stack unpair so return checking stack is empty or not..\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isValid(self, string: str) -> bool:\r\n         while True:\r\n            if '()' in string:\r\n                string = string.replace('()', '')\r\n            elif '{}' in string:\r\n                string = string.replace('{}', '')\r\n            elif '[]' in string:\r\n                string = string.replace('[]', '')\r\n\r\n            else:\r\n                return not string",
    "java": "// Runtime: 2 ms (Top 84.7%) | Memory: 40.80 MB (Top 15.0%)\r\n\r\nclass Solution {\r\n    public boolean isValid(String s) {\r\n        Stack<Character> stack = new Stack<Character>(); // create an empty stack\r\n        for (char c : s.toCharArray()) { // loop through each character in the string\r\n            if (c == '(') // if the character is an opening parenthesis\r\n                stack.push(')'); // push the corresponding closing parenthesis onto the stack\r\n            else if (c == '{') // if the character is an opening brace\r\n                stack.push('}'); // push the corresponding closing brace onto the stack\r\n            else if (c == '[') // if the character is an opening bracket\r\n                stack.push(']'); // push the corresponding closing bracket onto the stack\r\n            else if (stack.isEmpty() || stack.pop() != c) // if the character is a closing bracket\r\n                // if the stack is empty (i.e., there is no matching opening bracket) or the top of the stack\r\n                // does not match the closing bracket, the string is not valid, so return false\r\n                return false;\r\n        }\r\n        // if the stack is empty, all opening brackets have been matched with their corresponding closing brackets,\r\n        // so the string is valid, otherwise, there are unmatched opening brackets, so return false\r\n        return stack.isEmpty();\r\n    }\r\n}",
    "javascript": "\r\nvar isValid = function(s) {   \r\n    const stack = [];\r\n    \r\n    for (let i = 0 ; i < s.length ; i++) {\r\n        let c = s.charAt(i);\r\n        switch(c) {\r\n            case '(': stack.push(')');\r\n                break;\r\n            case '[': stack.push(']');\r\n                break;\r\n            case '{': stack.push('}');\r\n                break;\r\n            default:\r\n                if (c !== stack.pop()) {\r\n                    return false;\r\n                }\r\n        }\r\n    }\r\n    \r\n    return stack.length === 0;\r\n};"
  }
}
