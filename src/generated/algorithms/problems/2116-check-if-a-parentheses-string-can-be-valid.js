export default {
  "id": 2116,
  "name": "Check if a Parentheses String Can Be Valid",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid",
  "relativeDir": "C/Check if a Parentheses String Can Be Valid",
  "slug": "2116-check-if-a-parentheses-string-can-be-valid",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 52,
    "java": 36,
    "python": 14
  },
  "languages": {
    "cpp": "// Runtime: 117 ms (Top 72.95%) | Memory: 27.1 MB (Top 80.99%)\r\nclass Solution {\r\npublic:\r\n    bool canBeValid(string s, string locked) {\r\n\r\n        int n = s.size();\r\n        if(n&1) return false;\r\n\r\n        int balance = 0;\r\n\r\n        // First check balance from left to right\r\n        // For opening '(' brackets\r\n\r\n        for(int i=0; i<n; i++) {\r\n\r\n            // If either char is ( or it is unlocked,\r\n            // We can increment balance\r\n\r\n            if(locked[i] == '0' || s[i] == '(') balance++;\r\n            else balance--; // otherwise decrement balance, since it is ) and also locked\r\n\r\n            // Since balance is negative, we have more ')'.\r\n            // And there is no unlocked char available\r\n            // SO, it is invalid string for sure\r\n\r\n            if(balance < 0) return false;\r\n        }\r\n\r\n        // reset balance\r\n        balance = 0;\r\n\r\n        // Then also check balance from right to left\r\n        // For closing ')' brackets\r\n\r\n        for(int i=n-1; i>=0; i--) {\r\n\r\n            // If either char is ) or it is unlocked,\r\n            // We can increment balance\r\n\r\n            if(locked[i] == '0' || s[i] == ')') balance++;\r\n            else balance--;\r\n\r\n            // Since balance is negative, we have more '('.\r\n            // And there is no unlocked char available\r\n            // SO, it is invalid string for sure\r\n\r\n            if(balance < 0) return false;\r\n        }\r\n\r\n        return true;\r\n    }\r\n};",
    "python": "# Runtime: 460 ms (Top 26.24%) | Memory: 15.4 MB (Top 86.61%)\r\nclass Solution:\r\n    def canBeValid(self, s: str, locked: str) -> bool:\r\n        def validate(s: str, locked: str, op: str) -> bool:\r\n            bal, wild = 0, 0\r\n            for i in range(len(s)):\r\n                if locked[i] == \"1\":\r\n                    bal += 1 if s[i] == op else -1\r\n                else:\r\n                    wild += 1\r\n                if wild + bal < 0:\r\n                    return False\r\n            return bal <= wild\r\n        return len(s) % 2 == 0 and validate(s, locked, '(') and validate(s[::-1], locked[::-1], ')')",
    "java": "// Runtime: 18 ms (Top 30.84%) | Memory: 44.80 MB (Top 40.5%)\r\n\r\nclass Solution {\r\n    public boolean canBeValid(String s, String locked) {\r\n        int n = s.length();\r\n        if (n % 2 != 0) return false;\r\n        \r\n        int possibleOpens = 0;\r\n        int fixedCloses = 0;\r\n        \r\n        for (int i = 0; i < n; i ++) {\r\n            if (s.charAt(i) == '(' || locked.charAt(i) == '0') {\r\n                possibleOpens++;\r\n            } else {\r\n                fixedCloses++;\r\n            }\r\n            \r\n            if (fixedCloses > possibleOpens) return false;\r\n        }\r\n        \r\n        int possibleCloses = 0;\r\n        int fixedOpens = 0;\r\n        \r\n        for (int i = n - 1; i >= 0; i--) {\r\n            if (s.charAt(i) == ')' || locked.charAt(i) == '0') {\r\n                possibleCloses++;\r\n            } else {\r\n                fixedOpens++;\r\n            }\r\n            \r\n            if (fixedOpens > possibleCloses) return false;\r\n        }\r\n        \r\n        return true;\r\n    }\r\n}"
  }
}
