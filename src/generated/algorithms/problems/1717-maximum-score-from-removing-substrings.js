export default {
  "id": 1717,
  "name": "Maximum Score From Removing Substrings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-score-from-removing-substrings",
  "relativeDir": "M/Maximum Score From Removing Substrings",
  "slug": "1717-maximum-score-from-removing-substrings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 36,
    "python": 21,
    "javascript": 39
  },
  "languages": {
    "cpp": "// Runtime: 345 ms (Top 11.27%) | Memory: 21.5 MB (Top 63.27%)\r\nclass Solution {\r\npublic:\r\n\r\n    int helper(string&str, char a, char b){\r\n        int count =0;\r\n        stack<char> st;\r\n        for(int i=0;i<str.length();i++) {\r\n            if(!st.empty() && str[i]==b && st.top()==a) {\r\n                st.pop();\r\n                count++;\r\n            }\r\n            else {\r\n                st.push(str[i]);\r\n            }\r\n        }\r\n        str=\"\";\r\n        while(!st.empty()) {\r\n            str += st.top();\r\n              st.pop();\r\n            }\r\n        reverse(str.begin(),str.end());\r\n        return count;\r\n    }\r\n\r\n    int maximumGain(string s, int x, int y) {\r\n        int ca=0,cb=0;\r\n        if(x>y) {\r\n            ca = helper(s,'a','b');\r\n            cb = helper(s,'b','a');\r\n        }\r\n        else {\r\n            cb = helper(s,'b','a');\r\n            ca = helper(s,'a','b');\r\n        }\r\n        return ca*x + cb*y;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumGain(self, s: str, x: int, y: int) -> int:\r\n        a = 'a'\r\n        b = 'b'\r\n        if x < y:\r\n            x, y = y, x\r\n            a, b = b, a\r\n        seen = Counter()\r\n        ans = 0\r\n        for c in s + 'x':\r\n            if c in 'ab':\r\n                if c == b and 0 < seen[a]:\r\n                    ans += x\r\n                    seen[a] -= 1\r\n                else:\r\n                    seen[c] += 1\r\n            else:\r\n                ans += y * min(seen[a], seen[b])\r\n                seen = Counter()\r\n\r\n        return ans",
    "java": "class Solution {\r\n    public int maximumGain(String s, int x, int y) {\r\n        \r\n        int aCount = 0;\r\n        int bCount = 0;\r\n        int lesser = Math.min(x, y);\r\n        int result = 0;\r\n        \r\n        for (int i = 0; i < s.length(); i++) {\r\n            char c = s.charAt(i);\r\n            if (c > 'b') {\r\n                result += Math.min(aCount, bCount) * lesser;\r\n                aCount = 0;\r\n                bCount = 0;\r\n            } else if (c == 'a') {\r\n                if (x < y && bCount > 0) {\r\n                    bCount--;\r\n                    result += y;\r\n                } else {\r\n                    aCount++;\r\n                }\r\n            } else {\r\n                if (x > y && aCount > 0) {\r\n                    aCount--;\r\n                    result += x;\r\n                } else {\r\n                    bCount++;\r\n                };\r\n            }\r\n        }\r\n        \r\n        result += Math.min(aCount, bCount) * lesser;\r\n        \r\n        return result;\r\n    }\r\n}",
    "javascript": "var maximumGain = function(s, x, y) {\r\n    const n = s.length;\r\n    \r\n    let totPoints = 0;\r\n    let stack;\r\n    \r\n    if (x > y) {\r\n        stack = remove(s, x, \"ab\");\r\n        s = stack.join(\"\");\r\n        remove(s, y, \"ba\");\r\n        \r\n    }\r\n    else {\r\n        stack = remove(s, y, \"ba\");\r\n        s = stack.join(\"\");\r\n        remove(s, x, \"ab\");\r\n    }\r\n    \r\n    return totPoints;\r\n    \r\n    \r\n    function remove(str, points, match) {\r\n        const stack = [];\r\n        \r\n        for (let i = 0; i < str.length; i++) {\r\n            const char = str.charAt(i);\r\n            \r\n            if (stack.length > 0 && stack[stack.length - 1] + char == match) {\r\n                totPoints += points;\r\n                stack.pop();\r\n            }\r\n            else {\r\n                stack.push(char);\r\n            }\r\n        }\r\n        \r\n        return stack;\r\n    }\r\n};"
  }
}
