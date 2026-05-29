export default {
  "id": 1614,
  "name": "Maximum Nesting Depth of the Parentheses",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses",
  "relativeDir": "M/Maximum Nesting Depth of the Parentheses",
  "slug": "1614-maximum-nesting-depth-of-the-parentheses",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 16,
    "python": 10,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.3 MB (Top 56.85%)\r\nclass Solution {\r\npublic:\r\n    int maxDepth(string s) {\r\n        int maxi=0,curr=0;\r\n        for(int i=0;i<s.size();i++){\r\n            if(s[i]=='('){\r\n                maxi=max(maxi,++curr);\r\n            }else if(s[i]==')'){\r\n                curr--;\r\n            }\r\n        }\r\n        return maxi;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxDepth(self, s: str) -> int:\r\n        ans = cur = 0\r\n        for c in s:\r\n            if c == '(':\r\n                cur += 1\r\n                ans = max(ans, cur)\r\n            elif c == ')':\r\n                cur -= 1\r\n        return ans",
    "java": "class Solution {\r\n    public int maxDepth(String s) {\r\n        int count = 0;   //count current dept of \"()\"\r\n        int max = 0;     //count max dept of \"()\"\r\n\r\n        for (int i = 0; i < s.length(); i++) {\r\n            if (s.charAt(i) == '(') {\r\n                count++;\r\n            } else if (s.charAt(i) == ')') {\r\n                count--;\r\n            }\r\n            max = Math.max(count, max);\r\n        }\r\n        return max;\r\n    }\r\n}",
    "javascript": "var maxDepth = function(s) {\r\n    let maxCount = 0, count = 0;\r\n    for (let i = 0; i < s.length; i++) {\r\n        if (s[i] === '(') {\r\n            maxCount = Math.max(maxCount, ++count);\r\n        } else if (s[i] === ')') {\r\n            count--;\r\n        }\r\n    }\r\n    return maxCount;\r\n};"
  }
}
