export default {
  "id": 1047,
  "name": "Remove All Adjacent Duplicates In String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string",
  "relativeDir": "R/Remove All Adjacent Duplicates In String",
  "slug": "1047-remove-all-adjacent-duplicates-in-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 26,
    "python": 12
  },
  "languages": {
    "cpp": "// Runtime: 74 ms (Top 29.17%) | Memory: 11.6 MB (Top 27.11%)\r\nclass Solution {\r\npublic:\r\n    stack<char>st;\r\n    string removeDuplicates(string s) {\r\n        string ans;\r\n        char c;\r\n        for(auto &i:s){\r\n            if(st.empty()) {\r\n                st.push(i);\r\n                continue;\r\n            }\r\n            if(i==st.top()) st.pop();\r\n            else st.push(i);\r\n        }\r\n        while(!st.empty()){\r\n            c=st.top();\r\n            ans+=c;\r\n            st.pop();\r\n        }\r\n        reverse(begin(ans),end(ans));\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 69 ms (Top 68.51%) | Memory: 18.40 MB (Top 6.96%)\r\n\r\nclass Solution:\r\n    def removeDuplicates(self, S: str) -> str:\r\n        stack = []\r\n        for char in S:\r\n            if stack and stack[-1] == char:\r\n                stack.pop()\r\n            else:\r\n                stack.append(char)\r\n        \r\n        return ''.join(stack)",
    "java": "// Runtime: 95 ms (Top 46.58%) | Memory: 54.8 MB (Top 52.34%)\r\nclass Solution {\r\n    public String removeDuplicates(String s) {\r\n        Stack<Character> st=new Stack<>();\r\n        int i=s.length()-1;\r\n        while(i>=0)\r\n        {\r\n            char ch=s.charAt(i);\r\n            if(st.size()>0 && ch==st.peek())\r\n            {\r\n                st.pop();\r\n            }\r\n            else\r\n            {\r\n                st.push(ch);\r\n            }\r\n            i--;\r\n        }\r\n        StringBuilder ans=new StringBuilder(\"\");\r\n        while(!st.isEmpty())\r\n        {\r\n            ans.append(st.pop());\r\n        }\r\n        return ans.toString();\r\n    }\r\n}"
  }
}
