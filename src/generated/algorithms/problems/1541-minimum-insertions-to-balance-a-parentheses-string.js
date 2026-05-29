export default {
  "id": 1541,
  "name": "Minimum Insertions to Balance a Parentheses String",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string",
  "relativeDir": "M/Minimum Insertions to Balance a Parentheses String",
  "slug": "1541-minimum-insertions-to-balance-a-parentheses-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 35,
    "python": 18,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 34 ms (Top 32.51%) | Memory: 13.40 MB (Top 25.91%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minInsertions(string s) {\r\n        stack<char> v;\r\n        int ans = 0;\r\n        for(int i = 0;i < s.size();i++){\r\n            if(s[i] == '(') v.push(s[i]);\r\n            else{\r\n                if(s[i] == ')' && i < s.size() && s[i + 1] == ')') {\r\n                    if(!v.empty())\r\n                        v.pop();\r\n                    else ans++;\r\n                    i++;       // because we considered i+1 in this case\r\n                }\r\n                else if(s[i] == ')' && i < s.size() && s[i + 1] != ')'){\r\n                    if(!v.empty()){\r\n                        v.pop();\r\n                        ans++;\r\n                    }\r\n                    else ans += 2;\r\n                }\r\n            }\r\n        }\r\n        if(v.empty()) return ans;\r\n        return v.size()*2 + ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minInsertions(self, s: str) -> int:\r\n        leftbrackets = insertions = 0\r\n        i, n = 0, len(s)\r\n\r\n        while i < n:\r\n            if s[i] == '(':\r\n                leftbrackets += 1\r\n            elif s[i] == ')':\r\n                if i == n-1 or s[i+1] != ')': insertions += 1\r\n                else: i += 1\r\n                    \r\n                if not leftbrackets: insertions += 1\r\n                else: leftbrackets -= 1\r\n                    \r\n            i += 1\r\n        \r\n        return leftbrackets * 2 + insertions",
    "java": "// Runtime: 19 ms (Top 44.46%) | Memory: 51.9 MB (Top 75.57%)\r\nclass Solution {\r\n    public int minInsertions(String s) {\r\n        int open=0;\r\n        int ans=0;\r\n\r\n        for(int i=0;i<s.length();i++){\r\n            if(s.charAt(i)=='('){\r\n                open++;\r\n            }\r\n            else{\r\n                if(i+1<s.length() && s.charAt(i+1)==')'){\r\n                    i++;\r\n                    if(open>0){\r\n                        open--;\r\n                    }\r\n                    else{\r\n                        ans++;\r\n                    }\r\n                }\r\n                else{\r\n                    if(open>0){\r\n                        open--;\r\n                        ans++;\r\n                    }\r\n                    else{\r\n                        ans+=2;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        ans+=2*open;\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 58 ms (Top 100.0%) | Memory: 45.84 MB (Top 50.0%)\r\n\r\nvar minInsertions = function(s) {\r\n    let rightNeeded = 0;\r\n    let leftNeeded = 0;\r\n    for (const char of s) {\r\n        if (char === \"(\") {\r\n            if (rightNeeded % 2 === 0) {\r\n                rightNeeded += 2;  \r\n            } else {                \r\n                rightNeeded++;\r\n                leftNeeded++;\r\n            }\r\n        } else {\r\n            rightNeeded--;\r\n            if (rightNeeded === -1 ){\r\n                leftNeeded++;\r\n                rightNeeded = 1;\r\n            }\r\n        }\r\n    }\r\n    return leftNeeded + rightNeeded;\r\n};"
  }
}
