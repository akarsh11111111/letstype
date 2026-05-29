export default {
  "id": 1208,
  "name": "Get Equal Substrings Within Budget",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/get-equal-substrings-within-budget",
  "relativeDir": "G/Get Equal Substrings Within Budget",
  "slug": "1208-get-equal-substrings-within-budget",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 18,
    "python": 28,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 9 ms (Top 64.85%) | Memory: 7.7 MB (Top 51.71%)\r\nclass Solution {\r\npublic:\r\n    int equalSubstring(string s, string t, int maxCost) {\r\n        int l = 0, r = 0, currCost = 0, n = s.length(), maxLen = 0;\r\n\r\n        while(r < n) {\r\n            currCost += abs(s[r] - t[r]);\r\n            r++;\r\n\r\n            while(currCost > maxCost) {\r\n                currCost -= abs(s[l] - t[l]);\r\n                l++;\r\n            }\r\n\r\n            maxLen = max(r - l, maxLen);\r\n        }\r\n\r\n        return maxLen;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def equalSubstring(self, s, t, maxCost):\r\n        \"\"\"\r\n        :type s: str\r\n        :type t: str\r\n        :type maxCost: int\r\n        :rtype: int\r\n        \"\"\"\r\n        \r\n        \r\n        \r\n        \r\n        best = 0\r\n        \r\n        windowCost = 0\r\n        l = 0\r\n        for r in range(len(s)):\r\n            \r\n            windowCost += abs(ord(s[r]) - ord(t[r]))\r\n            \r\n            while windowCost > maxCost:\r\n                \r\n                windowCost -= abs(ord(s[l]) - ord(t[l]))\r\n                l+=1\r\n                \r\n            best = max(best,r-l+1)\r\n            \r\n        return best",
    "java": "// Runtime: 10 ms (Top 46.31%) | Memory: 43.1 MB (Top 83.52%)\r\nclass Solution {\r\n    public int equalSubstring(String s, String t, int maxCost) {\r\n        int ans =0;\r\n        int tempcost =0;\r\n        int l =0 ;\r\n        int r= 0 ;\r\n        for(;r!=s.length();r++){\r\n            tempcost += Math.abs(s.charAt(r)-t.charAt(r));\r\n            while(tempcost>maxCost){\r\n                tempcost -= Math.abs(s.charAt(l)-t.charAt(l));\r\n                l++;\r\n            }\r\n            ans =Math.max(ans,r+1-l);\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var equalSubstring = function(s, t, maxCost) {\r\n    let dp = [], ans = 0;\r\n\r\n    for (let i = 0, j = 0, k = 0; i < s.length; i++) {\r\n        // overlay\r\n        k += dp[i] = abs(s[i], t[i]);\r\n        \r\n        // non first\r\n        if (k > maxCost) {\r\n            k -= dp[j], j++;\r\n            continue;\r\n        }\r\n        \r\n        // eligible\r\n        ans++;\r\n    }\r\n\r\n    return ans;\r\n\r\n    // get abs value\r\n    function abs(a, b) {\r\n        return Math.abs(a.charCodeAt(0) - b.charCodeAt(0));\r\n    }\r\n};"
  }
}
