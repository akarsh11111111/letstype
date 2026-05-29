export default {
  "id": 1963,
  "name": "Minimum Number of Swaps to Make the String Balanced",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced",
  "relativeDir": "M/Minimum Number of Swaps to Make the String Balanced",
  "slug": "1963-minimum-number-of-swaps-to-make-the-string-balanced",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 19,
    "python": 9,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 404 ms (Top 5.05%) | Memory: 33.7 MB (Top 18.77%)\r\nclass Solution {\r\npublic:\r\n    int minSwaps(string s) {\r\n        int ans=0;\r\n        stack<char> stack;\r\n        for(int i=0;i<s.length();i++){\r\n            if(s[i]=='['){\r\n                stack.push(s[i]);\r\n            }\r\n            if(s[i]==']' && stack.size()!=0 && stack.top()=='['){\r\n                stack.pop();\r\n            }\r\n\r\n        }\r\n\r\n        ans=stack.size();\r\n        if(ans%2==0)\r\n            return ans/2;\r\n        else\r\n            return (ans+1)/2;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minSwaps(self, s: str) -> int:\r\n        res, bal = 0, 0\r\n        for ch in s:\r\n            bal += 1 if ch == '[' else -1\r\n            if bal == -1:\r\n                res += 1\r\n                bal = 1\r\n        return res",
    "java": "// Runtime: 414 ms (Top 6.65%) | Memory: 100.2 MB (Top 5.02%)\r\nclass Solution {\r\n    public int minSwaps(String s) {\r\n        // remove the balanced part from the given string\r\n        Stack<Character> stack = new Stack<>();\r\n        for(char ch : s.toCharArray()) {\r\n            if(ch == '[')\r\n                stack.push(ch);\r\n            else {\r\n                if(!stack.isEmpty() && stack.peek() == '[')\r\n                    stack.pop();\r\n                else\r\n                    stack.push(ch);\r\n            }\r\n        }\r\n        int unb = stack.size()/2; // # of open or close bracket\r\n        return (unb+1)/2;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} s\r\n * @return {number}\r\n */\r\nvar minSwaps = function(s) {\r\n    let stk = []\r\n    for(let c of s){\r\n        if(stk && c == ']')    stk.pop()\r\n        else if(c == '[')   stk.push(c)\r\n    }\r\n    return (stk.length) / 2\r\n};"
  }
}
