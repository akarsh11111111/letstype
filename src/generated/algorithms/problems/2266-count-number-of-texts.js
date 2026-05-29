export default {
  "id": 2266,
  "name": "Count Number of Texts",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-number-of-texts",
  "relativeDir": "C/Count Number of Texts",
  "slug": "2266-count-number-of-texts",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 24,
    "python": 23,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int mod = 1e9+7;\r\n    int solve(string &str, int idx) {\r\n        if(idx == str.length()) return 1;\r\n        int maxKeyPress = (str[idx] == '7' || str[idx] == '9') ? 4 : 3;\r\n        long long currIndex = idx, pressFrequency = 1, ans = 0;\r\n        while(pressFrequency <= maxKeyPress && str[currIndex] == str[idx]) {\r\n            ++currIndex;\r\n            ++pressFrequency;\r\n            ans += solve(str, currIndex) % mod;\r\n        }\r\n        return ans%mod;\r\n    }\r\n    int countTexts(string pressedKeys) {\r\n        return solve(pressedKeys, 0) % mod;\r\n    }\r\n};",
    "python": "# Runtime: 2740 ms (Top 30.44%) | Memory: 19.5 MB (Top 65.22%)\r\nclass Solution(object):\r\n    def countTexts(self, pressedKeys):\r\n        \"\"\"\r\n        :type pressedKeys: str\r\n        :rtype: int\r\n        \"\"\"\r\n        dp = [1] + [0]*len(pressedKeys)\r\n        mod = 10**9 + 7\r\n        for i, n in enumerate(pressedKeys):\r\n            dp[i+1] = dp[i]\r\n            # check if is continous\r\n            if i >= 1 and pressedKeys[i-1] == n:\r\n                dp[i+1] += dp[i-1]\r\n                dp[i+1] %= mod\r\n                if i >= 2 and pressedKeys[i-2] == n:\r\n                    dp[i+1] += dp[i-2]\r\n                    dp[i+1] %= mod\r\n                    # Special case for '7' and '9' that can have 4 characters combination\r\n                    if i >= 3 and pressedKeys[i-3] == n and (n == \"7\" or n == \"9\"):\r\n                        dp[i+1] += dp[i-3]\r\n                        dp[i+1] %= mod\r\n        return dp[-1]",
    "java": "// Runtime: 19 ms (Top 90.12%) | Memory: 45.20 MB (Top 64.2%)\r\n\r\nclass Solution {\r\n    int mod = (1000000007);\r\n\r\n    public int countTexts(String pressedKeys) {\r\n        int[] key = new int[] { 0, 0, 3, 3, 3, 3, 3, 4, 3, 4 };\r\n        int n = pressedKeys.length();\r\n        int[] dp = new int[n + 1];\r\n        dp[n] = 1;\r\n\r\n        for (int ind = n - 1; ind >= 0; ind--) {\r\n            int count = 0;\r\n            int num = pressedKeys.charAt(ind) - '0';\r\n            int rep = key[num];\r\n            for (int i = 0; i < rep && ind + i < pressedKeys.length() && pressedKeys.charAt(ind) == pressedKeys.charAt(ind + i); i++) {\r\n                count += dp[ind+i+1];\r\n                count %= mod;\r\n            }\r\n             dp[ind] = count;\r\n        }\r\n        return dp[0];\r\n    }\r\n}",
    "javascript": "// Runtime: 134 ms (Top 52.17%) | Memory: 48.8 MB (Top 91.30%)\r\nvar countTexts = function(pressedKeys) {\r\n    const MOD = 1e9 + 7;\r\n    const n = pressedKeys.length;\r\n    const dp = new Array(n + 1).fill(0);\r\n\r\n    dp[0] = 1;\r\n\r\n    let lastChar = \"\";\r\n    let repeatCount = 0;\r\n\r\n    for (let i = 1; i <= n; ++i) {\r\n        const currChar = pressedKeys[i - 1];\r\n\r\n        if (currChar != lastChar) repeatCount = 0;\r\n\r\n        lastChar = currChar;\r\n        repeatCount += 1;\r\n\r\n        dp[i] = (dp[i] + dp[i - 1]) % MOD;\r\n\r\n        if (i >= 2 && repeatCount >= 2) dp[i] = (dp[i] + dp[i - 2]) % MOD;\r\n        if (i >= 3 && repeatCount >= 3) dp[i] = (dp[i] + dp[i - 3]) % MOD;\r\n        if ((currChar == \"7\" || currChar == \"9\") && i >= 4 && repeatCount >= 4) dp[i] = (dp[i] + dp[i - 4]) % MOD;\r\n     }\r\n\r\n    return dp[n];\r\n};"
  }
}
