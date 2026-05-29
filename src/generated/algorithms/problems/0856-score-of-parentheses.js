export default {
  "id": 856,
  "name": "Score of Parentheses",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/score-of-parentheses",
  "relativeDir": "S/Score of Parentheses",
  "slug": "0856-score-of-parentheses",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 19,
    "python": 17,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int scoreOfParentheses(string s) {\r\n        stack<int> st;\r\n        int score = 0;\r\n        for(int i = 0; i < s.size(); i++){\r\n            if(s[i] == '('){\r\n                st.push(score);\r\n                score = 0;\r\n            }\r\n            else {\r\n                score = st.top() + max(2 * score, 1);\r\n                st.pop();\r\n            }\r\n        }\r\n        return score;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def scoreOfParentheses(self, s: str) -> int:\r\n        \r\n        level = 0\r\n        result = 0\r\n        prev = \"\"\r\n        \r\n        for c in s:           \r\n            if c == \"(\":\r\n                level += 1\r\n            if c == \")\":\r\n                if prev == \"(\":\r\n                    result += 2 ** (level - 1)\r\n                level -= 1                \r\n            prev = c\r\n            \r\n        return result",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 41.30 MB (Top 25.38%)\r\n\r\nclass Solution {\r\n    public int scoreOfParentheses(String s) {\r\n        Stack<Integer> st = new Stack<>();\r\n        int score = 0;\r\n        for(int i = 0; i < s.length(); i++){\r\n            char ch = s.charAt(i);\r\n            if(ch == '('){\r\n                st.push(score);\r\n                score = 0;\r\n            }\r\n            else {\r\n                score = st.pop() + Math.max(2 * score, 1);\r\n            }\r\n        }\r\n        return score;\r\n    }\r\n}",
    "javascript": "// Runtime: 98 ms (Top 20.59%) | Memory: 42.1 MB (Top 49.02%)\r\nvar scoreOfParentheses = function(s) {\r\n    let len = s.length, pwr = 0, ans = 0;\r\n\r\n    for (let i = 1; i < len; i++){\r\n        if (s.charAt(i) === \"(\"){\r\n            pwr++;\r\n        }\r\n        else if (s.charAt(i-1) === \"(\"){\r\n            ans += 1 << pwr--;\r\n        }\r\n        else{\r\n            pwr--;\r\n        }\r\n    }\r\n\r\n    return ans;\r\n}"
  }
}
