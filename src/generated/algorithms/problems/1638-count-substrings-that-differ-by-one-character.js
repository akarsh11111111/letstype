export default {
  "id": 1638,
  "name": "Count Substrings That Differ by One Character",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-substrings-that-differ-by-one-character",
  "relativeDir": "C/Count Substrings That Differ by One Character",
  "slug": "1638-count-substrings-that-differ-by-one-character",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 34,
    "python": 11,
    "javascript": 55
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 81.15%) | Memory: 6.2 MB (Top 80.00%)\r\nclass Solution {\r\npublic:\r\n    int countSubstrings(string s, string t)\r\n    {\r\n        int n=s.size();\r\n        int m=t.size();\r\n        int ans=0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            for(int j=0;j<m;j++)\r\n            {\r\n                int diff=0;\r\n                for(int k=0;i+k<n&&j+k<m;k++)\r\n                {\r\n                    if(s[i+k]!=t[j+k])\r\n                    {\r\n                        diff++;\r\n                    }\r\n                    if(diff>1)\r\n                    {\r\n                        break;\r\n                    }\r\n                    ans+=diff;\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countSubstrings(self, s: str, t: str) -> int:\r\n        res = 0\r\n        for i in range(len(s)):\r\n            for j in range(len(t)):\r\n                miss, pos = 0, 0\r\n                while i + pos < len(s) and j + pos < len(t) and miss < 2:\r\n                    miss += s[i + pos] != t[j + pos]\r\n                    res += miss == 1\r\n                    pos += 1\r\n        return res",
    "java": "// version 1 : O(mn) space\r\nclass Solution {\r\n    public int countSubstrings(String s, String t) {\r\n        int m = s.length(), n = t.length();\r\n\r\n        int[][][] dp = new int[m][n][2];\r\n        \r\n        int res = 0;\r\n        // first col s[0:i] match t[0:0]\r\n        for (int i = 0; i < m; i++) {\r\n            dp[i][0][0] = (s.charAt(i) == t.charAt(0)) ? 1 : 0;\r\n            dp[i][0][1] = (s.charAt(i) == t.charAt(0)) ? 0 : 1;\r\n            res += dp[i][0][1];\r\n        }\r\n      \r\n        \r\n        // first row s[0:0] match t[0:j]\r\n        for (int j = 1; j < n; j++) {\r\n            dp[0][j][0] = (s.charAt(0) == t.charAt(j)) ? 1 : 0;\r\n            dp[0][j][1] = (s.charAt(0) == t.charAt(j)) ? 0 : 1;\r\n            res += dp[0][j][1];\r\n        }\r\n        \r\n        for (int i = 1; i < m; i++) {\r\n            for (int j = 1; j < n; j++) {\r\n                dp[i][j][0] = (s.charAt(i) == t.charAt(j)) ? dp[i-1][j-1][0] + 1 : 0;\r\n                dp[i][j][1] = (s.charAt(i) == t.charAt(j)) ? dp[i-1][j-1][1] : dp[i-1][j-1][0] + 1;\r\n                res += dp[i][j][1];\r\n            }\r\n        }\r\n\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 1234 ms (Top 5.88%) | Memory: 62.9 MB (Top 5.88%)\r\nvar countSubstrings = function(s, t) {\r\n    const count1 = countAllSubstr(s);\r\n    const count2 = countAllSubstr(t);\r\n\r\n    let res = 0;\r\n\r\n    for (const [substr1, freq1] of count1) {\r\n       for (const [substr2, freq2] of count2) {\r\n\r\n           if (differByOneChar(substr1, substr2)) {\r\n               res += freq1 * freq2;\r\n           }\r\n       }\r\n    }\r\n\r\n    return res;\r\n\r\n    function countAllSubstr(str) {\r\n        const n = str.length;\r\n        const count = new Map();\r\n\r\n        for (let i = 0; i < n; i++) {\r\n            let substr = \"\";\r\n            for (let j = i; j < n; j++) {\r\n                substr += str.charAt(j);\r\n\r\n                if (!count.has(substr)) count.set(substr, 0);\r\n                count.set(substr, count.get(substr) + 1);\r\n            }\r\n        }\r\n\r\n        return count;\r\n    }\r\n\r\n    function differByOneChar(str1, str2) {\r\n        if (str1.length != str2.length) return false;\r\n\r\n        const n = str1.length;\r\n\r\n        let missed = 0;\r\n\r\n        for (let i = 0; i < n; i++) {\r\n            const char1 = str1.charAt(i);\r\n            const char2 = str2.charAt(i);\r\n\r\n            if (char1 != char2) missed++;\r\n\r\n            if (missed > 1) return false;\r\n        }\r\n\r\n        return missed === 1;\r\n    }\r\n\r\n};"
  }
}
