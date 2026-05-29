export default {
  "id": 1690,
  "name": "Stone Game VII",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/stone-game-vii",
  "relativeDir": "S/Stone Game VII",
  "slug": "1690-stone-game-vii",
  "availableLanguages": [
    "cpp",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "python": 10
  },
  "languages": {
    "cpp": "// Runtime: 125 ms (Top 93.61%) | Memory: 10.50 MB (Top 96.01%)\r\n\r\nclass Solution {\r\npublic:\r\n    int stoneGameVII(vector<int>& S) {\r\n        int N = S.size();\r\n        vector<int> dp(N);\r\n        for (int i = N - 2; ~i; i--) {\r\n            int total = S[i];\r\n            for (int j = i + 1; j < N; j++) {\r\n                total += S[j];\r\n                dp[j] = max(total - S[i] - dp[j], total - S[j] - dp[j-1]);\r\n            }\r\n        }\r\n        return dp[N-1];\r\n    }\r\n};",
    "python": "# Runtime: 6869 ms (Top 56.16%) | Memory: 13.9 MB (Top 96.15%)\r\nclass Solution:\r\n    def stoneGameVII(self, S: List[int]) -> int:\r\n        N, dp = len(S), [0] * len(S)\r\n        for i in range(N - 2, -1, -1):\r\n            total = S[i]\r\n            for j in range(i + 1, N):\r\n                total += S[j]\r\n                dp[j] = max(total - S[i] - dp[j], total - S[j] - dp[j-1])\r\n        return dp[-1]"
  }
}
