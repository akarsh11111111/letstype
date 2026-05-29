export default {
  "id": 2370,
  "name": "Longest Ideal Subsequence",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-ideal-subsequence",
  "relativeDir": "L/Longest Ideal Subsequence",
  "slug": "2370-longest-ideal-subsequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 19,
    "python": 9,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 77 ms (Top 85.46%) | Memory: 10.3 MB (Top 60.17%)\r\nclass Solution {\r\npublic:\r\n    int longestIdealString(string s, int k) {\r\n        int DP[26] = {0}, ans = 1;\r\n\r\n        for (char &ch: s) {\r\n            int i = ch - 'a';\r\n            DP[i] = DP[i] + 1;\r\n\r\n            for (int j = max(0, i - k); j <= min(25, i + k); j++)\r\n                if (j != i)\r\n                    DP[i] = max(DP[i], DP[j] + 1);\r\n\r\n            ans = max(ans, DP[i]);\r\n        }\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 381 ms (Top 86.75%) | Memory: 17.40 MB (Top 70.48%)\r\n\r\nclass Solution:\r\n    def longestIdealString(self, s: str, k: int) -> int:\r\n        dp = [0] * 26\r\n        for ch in s:\r\n            i = ord(ch) - ord(\"a\")\r\n            dp[i] = 1 + max(dp[max(0, i - k) : min(26, i + k + 1)])\r\n        return max(dp)",
    "java": "// Runtime: 50 ms (Top 49.30%) | Memory: 48.5 MB (Top 48.18%)\r\nclass Solution {\r\n    public int longestIdealString(String s, int k) {\r\n        int DP[] = new int[26], ans = 1;\r\n\r\n        for (int ch = 0, n = s.length(); ch < n; ch++) {\r\n            int i = s.charAt(ch) - 'a';\r\n            DP[i] = DP[i] + 1;\r\n\r\n            for (int j = Math.max(0, i - k); j <= Math.min(25, i + k); j++)\r\n                if (j != i)\r\n                    DP[i] = Math.max(DP[i], DP[j] + 1);\r\n\r\n            ans = Math.max(ans, DP[i]);\r\n        }\r\n\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 245 ms (Top 43.75%) | Memory: 45.1 MB (Top 66.96%)\r\nvar longestIdealString = function(s, k) {\r\n    let n = s.length\r\n    let dp = Array(26).fill(0);\r\n    let ans = 0;\r\n    for(let i=0; i<n; i++){\r\n        const cur = s.charCodeAt(i)-97;\r\n        dp[cur] += 1;\r\n        for(let j=Math.max(0, cur-k); j<=Math.min(cur+k, 25); j++){\r\n            if(j !== cur){\r\n                dp[cur] = Math.max(dp[cur], dp[j]+1);\r\n            }\r\n        }\r\n        ans = Math.max(dp[cur], ans)\r\n    }\r\n    return ans;\r\n};"
  }
}
