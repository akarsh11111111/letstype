export default {
  "id": 796,
  "name": "Rotate String",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rotate-string",
  "relativeDir": "R/Rotate String",
  "slug": "0796-rotate-string",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 21,
    "python": 10,
    "javascript": 9
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool rotateString(string s, string goal) {\r\n        if(s.size()!=goal.size()){\r\n            return false;\r\n        }\r\n        string temp=s+s;\r\n        if(temp.find(goal)!=-1){\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "# Runtime: 33 ms, faster than 90.10% of Python3 online submissions for Rotate String.\r\n# Memory Usage: 13.8 MB, less than 97.64% of Python3 online submissions for Rotate String.\r\n\r\nclass Solution:\r\n    def rotateString(self, s: str, goal: str) -> bool:\r\n        for x in range(len(s)):\r\n            s = s[-1] + s[:-1]\r\n            if (goal == s):\r\n                return True\r\n        return False",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 42.5 MB (Top 17.04%)\r\nclass Solution {\r\n    public boolean rotateString(String s, String goal) {\r\n        int n = s.length(), m = goal.length();\r\n        if (m != n) return false;\r\n\r\n        for (int offset = 0; offset < n; offset++) {\r\n            if (isMatch(s, goal, offset)) return true;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    private boolean isMatch(String s, String g, int offset) {\r\n        int n = s.length();\r\n        for (int si = 0; si < n; si++) {\r\n            int gi = (si + offset) % n;\r\n            if (s.charAt(si) != g.charAt(gi)) return false;\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 96 ms (Top 39.69%) | Memory: 41.8 MB (Top 87.19%)\r\nvar rotateString = function(s, goal) {\r\n   const n = s.length;\r\n   for(let i = 0; i < n; i++) {\r\n      s = s.substring(1) + s[0];\r\n      if(s === goal) return true;\r\n   }\r\n   return false;\r\n};"
  }
}
