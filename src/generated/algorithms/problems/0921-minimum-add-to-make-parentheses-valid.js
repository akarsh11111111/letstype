export default {
  "id": 921,
  "name": "Minimum Add to Make Parentheses Valid",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-add-to-make-parentheses-valid",
  "relativeDir": "M/Minimum Add to Make Parentheses Valid",
  "slug": "0921-minimum-add-to-make-parentheses-valid",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 18,
    "python": 14,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.4 MB (Top 25.35%)\r\nclass Solution {\r\npublic:\r\n    int minAddToMakeValid(string s) {\r\n        stack<char> sta;\r\n        int nums = 0;\r\n        for (int i = 0; i < s.size(); i++)\r\n        {\r\n            if (s[i] == '(')\r\n            {\r\n                sta.push(s[i]);\r\n            }\r\n            else\r\n            {\r\n                if (!sta.empty())\r\n                {\r\n                    sta.pop();\r\n                }\r\n                else\r\n                {\r\n                    nums++;\r\n                }\r\n            }\r\n        }\r\n        nums += sta.size();\r\n        return nums;\r\n    }\r\n};",
    "python": "// Runtime: 29 ms (Top 94.21%) | Memory: 16.40 MB (Top 63.56%)\r\n\r\nclass Solution:\r\n    def minAddToMakeValid(self, s: str) -> int:\r\n        l, r = list(), list()\r\n        for i in s:\r\n            if i == \"(\":\r\n                l.append(i)\r\n            else:\r\n                if l:\r\n                    l.pop()\r\n                else:\r\n                    r.append(i)\r\n        return len(l) + len(r)",
    "java": "class Solution {\r\n    public int minAddToMakeValid(String s) {\r\n        int open = 0;\r\n        int extra = 0;\r\n        for(int i=0;i<s.length();i++){\r\n            if(s.charAt(i)=='('){\r\n                open++;\r\n            }else{\r\n                if(open==0){\r\n                    extra++;\r\n                }else{\r\n                    open--;\r\n                }\r\n            }\r\n        }\r\n        return open+extra;\r\n    }\r\n}",
    "javascript": "// Runtime: 81 ms (Top 66.54%) | Memory: 42.2 MB (Top 75.00%)\r\nvar minAddToMakeValid = function(s) {\r\n    let stack = []\r\n    let count = 0\r\n    for(let i=0;i<s.length;i++) {\r\n        let ch = s[i]\r\n        if(ch === '(') {\r\n            stack.push(ch)\r\n        } else {\r\n            let top = stack.pop()\r\n            if(top != '(') count++\r\n        }\r\n    }\r\n\r\n    count += stack.length\r\n\r\n    return count\r\n};"
  }
}
