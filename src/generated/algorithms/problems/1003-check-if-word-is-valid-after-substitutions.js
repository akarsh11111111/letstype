export default {
  "id": 1003,
  "name": "Check If Word Is Valid After Substitutions",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-word-is-valid-after-substitutions",
  "relativeDir": "C/Check If Word Is Valid After Substitutions",
  "slug": "1003-check-if-word-is-valid-after-substitutions",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 50,
    "python": 17,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isValid(string s) {\r\n        stack<char>st;\r\n        for(int i=0;i<s.length();i++){\r\n            if(s[i]=='a')\r\n                st.push(s[i]);\r\n            else if(s[i]=='b'){\r\n                if(st.empty() || st.top()!='a')\r\n                return false;\r\n                else\r\n                    st.push(s[i]);\r\n            }\r\n            else if(s[i]=='c'){\r\n                if(st.empty() ||  st.top()!='b')\r\n                    return false;\r\n                else{\r\n                    for(int i=0;i<2;i++)\r\n                        st.pop();\r\n                }\r\n            }\r\n        }\r\n        return st.size()==0;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isValid(self, s: str) -> bool:\r\n        \r\n        \r\n        ans = ''\r\n        for i in s:\r\n            ans+=i\r\n            while len(ans)>=3:\r\n                if ans[-3:]==\"abc\":\r\n                    ans=ans[0:-3]\r\n                else:\r\n                    break\r\n            \r\n        if ans=='':\r\n            return True\r\n        else:\r\n            return False",
    "java": "class Solution {\r\n    public boolean isValid(String s) {\r\n        \r\n        //Lets see how we can solve that as we know we have only abc in string.\r\n        //Like           aabcbc\r\n        // See as that   ((b)b) Think a is '(' and c is ')'.\r\n        // If a string is made by using abc only we can remove abc to make it empty also.\r\n        \r\n        //Think in Reverse Way.\r\n        \r\n        \r\n        \r\n        Stack<Character> stack = new Stack<>();\r\n        char[] arr = s.toCharArray();\r\n        for (int i = 0; i < arr.length; i++) {\r\n            \r\n            // We have to work only when we get ')' means c.\r\n            \r\n            if(arr[i] == 'c')\r\n            {\r\n                // If we at c means we have 2 elements before us a and b.\r\n                // When we first pop we get b at second pop we get a\r\n                \r\n            // If this all hold true we will delete a and b we are not adding c so c also\r\n                \r\n                if(stack.size()>=2 && stack.pop() == 'b' && stack.pop() == 'a')\r\n                {\r\n\r\n                }\r\n                else\r\n                {\r\n                    \r\n                    // If anywhere we get false in any condition that means this is not a                          valid set i.e. abc pattern is not present.\r\n                    \r\n                    return false;\r\n                }\r\n            }\r\n            else\r\n            {\r\n                // For a and b we simply add.\r\n                \r\n                stack.push(arr[i]);\r\n            }\r\n        }\r\n        \r\n        //If we have only abc pattern the stack will become empty.\r\n        \r\n        return stack.size()==0;\r\n    }\r\n}",
    "javascript": "// Runtime: 105 ms (Top 65.38%) | Memory: 45.6 MB (Top 59.62%)\r\n\r\nvar isValid = function(s) {\r\n    const stack = [];\r\n    for(let c of s) {\r\n        if(c !== 'c') {\r\n            stack.push(c);\r\n        }else {\r\n            if(stack.pop() !== 'b') return false;\r\n            if(stack.pop() !== 'a') return false;\r\n        }\r\n    }\r\n\r\n    return stack.length === 0;\r\n};"
  }
}
