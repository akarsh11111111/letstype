export default {
  "id": 844,
  "name": "Backspace String Compare",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/backspace-string-compare",
  "relativeDir": "B/Backspace String Compare",
  "slug": "0844-backspace-string-compare",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 29,
    "python": 16,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.4 MB (Top 28.52%)\r\nclass Solution {\r\npublic:\r\n    bool backspaceCompare(string s, string t) {\r\n        stack<int> st1;\r\n        stack<int> st2;\r\n        int len = s.length();\r\n        int len2 = t.length();\r\n\r\n        for(int i=0; i<len; i++){\r\n            if(s[i] != '#'){\r\n                st1.push(s[i]);\r\n            }\r\n            else{\r\n                if(!st1.empty()){\r\n                    st1.pop();\r\n                }\r\n            }\r\n        }\r\n        for(int i=0; i<len2; i++){\r\n            if(t[i] != '#'){\r\n                st2.push(t[i]);\r\n            }\r\n            else{\r\n                if(!st2.empty()){\r\n                    st2.pop();\r\n                }\r\n            }\r\n        }\r\n\r\n        while(!st1.empty() && !st2.empty()){\r\n            if(st1.top() != st2.top()){\r\n                return false;\r\n            }\r\n            st1.pop();\r\n            st2.pop();\r\n        }\r\n        if(st1.empty() && st2.empty()){\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def backspaceCompare(self, s: str, t: str) -> bool:\r\n        def backwardResult(string):\r\n            debt = 0\r\n            \r\n            for c in reversed(string):\r\n                if c == '#':\r\n                    debt += 1\r\n                \r\n                elif debt > 0:\r\n                    debt -= 1\r\n                \r\n                else:\r\n                    yield c\r\n        \r\n        return all(a == b for (a, b) in zip_longest(backwardResult(s), backwardResult(t)))",
    "java": "// Runtime: 1 ms (Top 94.73%) | Memory: 42.2 MB (Top 59.43%)\r\n\r\nclass Solution {\r\n    public boolean backspaceCompare(String s, String t) {\r\n        int i = s.length() - 1, j = t.length() - 1;\r\n        while(i >= 0 || j >= 0) {\r\n            i = getCurPos(i, s);\r\n            j = getCurPos(j, t);\r\n            if (i >= 0 && j >= 0 && s.charAt(i) != t.charAt(j)) return false;\r\n            if ((i >= 0) != (j >= 0)) return false;\r\n            i--;\r\n            j--;\r\n        }\r\n        return true;\r\n    }\r\n    private int getCurPos(int i, String s) {\r\n        int dels = 0;\r\n        while( i >= 0) {\r\n            if (s.charAt(i) == '#') {\r\n                dels++;\r\n                i--;\r\n            } else if (dels > 0) {\r\n                dels--;\r\n                i--;\r\n            } else break;\r\n        }\r\n        return i;\r\n    }\r\n}",
    "javascript": "var backspaceCompare = function(s, t) {\r\n    let stack1 = [];\r\n    let stack2 = [];\r\n    \r\n    for(let i=0; i<s.length; i++) {\r\n        if(s[i] == '#') {\r\n            if(stack1.length != 0) {\r\n                stack1.pop();\r\n            }\r\n        } else {\r\n            stack1.push(s[i]);\r\n        }\r\n    }\r\n    \r\n    for(let j=0; j<t.length; j++) {\r\n        if(t[j] == '#') {\r\n            if(stack2.length != 0) {\r\n                stack2.pop();\r\n            }\r\n        } else {\r\n            stack2.push(t[j]);\r\n        }\r\n    }\r\n    return stack1.join('') === stack2.join('');\r\n};"
  }
}
