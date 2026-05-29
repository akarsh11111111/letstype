export default {
  "id": 650,
  "name": "2 Keys Keyboard",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/2-keys-keyboard",
  "relativeDir": "0-9/2 Keys Keyboard",
  "slug": "0650-2-keys-keyboard",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 17,
    "python": 34,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n//See the solution for this explanation \r\n    int byPrimeFactorization(int n) {\r\n        if(n == 1)\r\n            return 0;\r\n        if(n == 2)\r\n            return 2;\r\n        int factor = 2, ans = 0;\r\n        while(n > 1) {\r\n            while(n % factor == 0) {\r\n                ans += factor;\r\n                n /= factor;\r\n            }\r\n            factor++;\r\n        }\r\n        return ans;\r\n    }\r\n   \r\n    int byDp(int n) {\r\n        vector<int> dp(1001, INT_MAX);\r\n        dp[0] = dp[1] = 0;\r\n        dp[2] = 2, dp[3] = 3;\r\n        for(int i = 4; i <= n; i++) {\r\n            dp[i] = i; //maximum number of operations required will be i\r\n            for(int j = 2; j <= i / 2; j++) { //we copy and paste j A's till we have i A's\r\n                int x = i - j; //we already have j A's in our stream, so remaining = i - j\r\n                if(x % j == 0) { //if remaining number of A's is a multiple of J\r\n                    dp[i] = min(dp[i], dp[j] + 1 + (x / j)); //1 operation to copy, x / j to paste, dp[j] for getting j A's\r\n                }\r\n            }\r\n        }\r\n        return dp[n];\r\n    }\r\n    \r\n    int minSteps(int n) {\r\n        return byPrimeFactorization(n);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minSteps(self, n: int) -> int:      \r\n        # at every step we can copy or paste\r\n        # paste -> we need to know the current clipboard content (count)\r\n        # copy -> set clipboard count to current screen count (we should consider it, if the last operation was paste)\r\n        \r\n        memo = {}\r\n        \r\n        def dfs(clipboard_count, screen_count):\r\n            if (clipboard_count, screen_count) in memo:                   \r\n                return memo[(clipboard_count, screen_count)]\r\n            \r\n            # we reached n, this is a valid option\r\n            if screen_count == n: return 0\r\n            \r\n            # we passed n, not a valid option\r\n            if screen_count > n: return float('inf')                \r\n            \r\n            # paste or copy\r\n            copy_opt = paste_opt = float('inf')\r\n            \r\n            # we should only paste if clipboard is not empty\r\n            if clipboard_count > 0:\r\n                paste_opt = dfs(clipboard_count, screen_count + clipboard_count)             \r\n            \r\n            # we should consider copy only if the last operation was paste\r\n            if screen_count > clipboard_count:\r\n                copy_opt = dfs(screen_count, screen_count) \r\n            \r\n            # save to memo\r\n            memo[(clipboard_count, screen_count)] = 1 + min(paste_opt, copy_opt)            \r\n            return memo[(clipboard_count, screen_count)]\r\n            \r\n        return dfs(0, 1)",
    "java": "class Solution {\r\n    public int minSteps(int n) {\r\n        int rem = n-1, copied = 0, ans = 0, onScreen = 1;\r\n        \r\n        while(rem>0){\r\n            if(rem % onScreen == 0){\r\n                ans++; // copy operation\r\n                copied = onScreen;   \r\n            }\r\n            rem-=copied;\r\n            ans++; // paste operation\r\n            onScreen = n-rem; // no. of characters on screen currently that can be copied in next copy operation\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n}",
    "javascript": "var minSteps = function(n) {\r\n\tlet result = 0;\r\n\r\n\tfor (let index = 2; index <= n; index++) {\r\n\t\twhile (n % index === 0) {\r\n\t\t\tresult += index;\r\n\t\t\tn /= index;\r\n\t\t}\r\n\t}\r\n\treturn result;\r\n};"
  }
}
