export default {
  "id": 91,
  "name": "Decode Ways",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/decode-ways",
  "relativeDir": "D/Decode Ways",
  "slug": "0091-decode-ways",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 52,
    "java": 20,
    "python": 43,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numDecodings(string s) {\r\n        \r\n        if(s[0] == 0)\r\n            return 0;\r\n        int n  = s.length();\r\n       vector<int> dp(n+1, 0);\r\n        \r\n        //Storing DP[n-1]\r\n        if(s[n-1] == '0' )\r\n            dp[n-1] = 0;\r\n        else \r\n            dp[n-1] = 1;\r\n        \r\n        if(n == 1)\r\n            return dp[0];\r\n        \r\n        //Storing DP[n-2]\r\n            if(s[n-2] == '0')\r\n                dp[n-2] = 0;\r\n            else\r\n            {\r\n                string temp ;\r\n                temp.push_back(s[n-2]);\r\n                temp.push_back(s[n-1]);\r\n                \r\n                int x = stoi(temp);\r\n                if(x<27)\r\n                    dp[n-2] = 1;\r\n                dp[n-2] += dp[n-1];\r\n            }\r\n        \r\n        \r\n        for(int i = n-3; i>=0 ; i--)\r\n        {\r\n            if(s[i] == '0')\r\n                continue;\r\n            \r\n            string temp ;\r\n                temp.push_back(s[i]);\r\n                temp.push_back(s[i+1]);\r\n                \r\n                int x = stoi(temp);\r\n                if(x<27)\r\n                    dp[i] = dp[i+2];\r\n                dp[i]+=dp[i+1];\r\n        }\r\n        \r\n        return dp[0];\r\n    }\r\n};",
    "python": "# Runtime: 48 ms (Top 59.57%) | Memory: 14.1 MB (Top 30.54%)\r\nclass Solution:\r\n    def numDecodings(self, s: str) -> int:\r\n        if s[0] == '0' or '00' in s:\r\n            return 0\r\n        l = len(s)\r\n        if l == 1:\r\n            return 1\r\n        elif l == 2:\r\n            if s[1] == '0':\r\n                if s[0] == '1' or s[0] == '2':\r\n                    return 1\r\n                else:\r\n                    return 0\r\n            else:\r\n                if int(s) <= 26:\r\n                    return 2\r\n                else:\r\n                    return 1\r\n        dp = [1]\r\n        if s[1] == '0':\r\n            if s[0] == '1' or s[0] == '2':\r\n                dp.append(1)\r\n            else:\r\n                return 0\r\n        else:\r\n            if int(s[:2]) <= 26:\r\n                dp.append(2)\r\n            else:\r\n                dp.append(1)\r\n        for i in range(2, l):\r\n            num = 0\r\n            if s[i] == '0':\r\n                if s[i-1] != '1' and s[i-1] != '2':\r\n                    return 0\r\n                else:\r\n                    num = dp[i-2]\r\n            elif s[i-1] == '1' or (s[i-1] == '2' and int(f'{s[i-1]}{s[i]}') <= 26):\r\n                num = dp[i-1]+dp[i-2]\r\n            else:\r\n                num = dp[i-1]\r\n            dp.append(num)\r\n        return dp[l-1]",
    "java": "class Solution {\r\n    public int numDecodings(String s) {\r\n        int[]dp = new int[s.length() + 1];\r\n        dp[0] = 1;\r\n        dp[1] = s.charAt(0) == '0' ? 0 : 1;\r\n        \r\n        for(int i = 2;i<=s.length();i++) {\r\n            int oneDigit = Integer.valueOf(s.substring(i-1,i));\r\n            int twoDigit = Integer.valueOf(s.substring(i-2,i));\r\n            \r\n            if(oneDigit >= 1) {\r\n                dp[i] += dp[i - 1];\r\n            }\r\n            if(twoDigit >= 10 && twoDigit <= 26) {\r\n                dp[i] += dp[i - 2];\r\n            }\r\n        }\r\n        return dp[s.length()];\r\n    }\r\n}",
    "javascript": "var numDecodings = function(s) {\r\n    let dp = Array(s.length).fill(0); // dp[i] means, the total ways of decode for substring up to i\r\n    dp[0] = (s[0] !== '0') ? 1 : 0;\r\n    \r\n    for(let i = 1; i < s.length; i++){\r\n\t//case1\r\n        if(s[i] !== '0'){\r\n            dp[i] = dp[i - 1];\r\n        }\r\n   //case2\r\n        if(s[i-1] === '1' || (s[i-1] === '2' && parseInt(s[i]) <= 6)){\r\n            dp[i] += dp[i - 2] ?? 1;\r\n        }\r\n    }\r\n    \r\n    return dp[s.length - 1];\r\n};"
  }
}
