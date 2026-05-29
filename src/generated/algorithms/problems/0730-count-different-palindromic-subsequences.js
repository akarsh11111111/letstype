export default {
  "id": 730,
  "name": "Count Different Palindromic Subsequences",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-different-palindromic-subsequences",
  "relativeDir": "C/Count Different Palindromic Subsequences",
  "slug": "0730-count-different-palindromic-subsequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 56,
    "python": 30
  },
  "languages": {
    "cpp": "class Solution\r\n{\r\n    public:\r\n        int countPalindromicSubsequences(string s)\r\n        {\r\n            int n = s.size();\r\n            long dp[n + 1][n + 1];\r\n            memset(dp, 0, sizeof dp);\r\n            long MOD = 1e9 + 7;\r\n            for (int i = n - 1; i >= 0; i--)\r\n            {\r\n                dp[i][i] = 1;\r\n                for (int j = i + 1; j < n; j++)\r\n                {\r\n                    if (s[i] != s[j])\r\n                        dp[i][j] = dp[i + 1][j] + dp[i][j - 1] - dp[i + 1][j - 1];\r\n                    else\r\n                    {\r\n                        dp[i][j] = dp[i + 1][j - 1] *2;\r\n                        int left = i + 1, right = j - 1;\r\n                        while (left <= right && s[left] != s[i]) left++;\r\n                        while (left <= right && s[right] != s[i]) right--;\r\n                        if (left > right)\r\n                            dp[i][j] += 2;\r\n                        else if (left == right)\r\n                            dp[i][j] += 1;\r\n                        else\r\n                            dp[i][j] -= dp[left + 1][right - 1];\r\n                    }\r\n                    dp[i][j] = (dp[i][j] + MOD) % MOD;\r\n                }\r\n            }\r\n            return (int) dp[0][n - 1];\r\n        }\r\n};",
    "python": "class Solution:\r\n    def countPalindromicSubsequences(self, s: str) -> int:\r\n        \r\n        N = len(s)\r\n        mod = 10**9 + 7\r\n        memo = {}\r\n        \r\n        def backTrack(start,end):\r\n            \r\n            if start >= N or end < 0: return 0\r\n            \r\n            key = (start,end) \r\n            \r\n            if key in memo: return memo[key]\r\n            \r\n            strn = s[start:end+1]\r\n\r\n            memo[key] = 0\r\n\r\n            for char in \"abcd\":\r\n                if not char in strn: continue\r\n                i = start + strn.index(char)\r\n                j = start + strn.rindex(char)\r\n                memo[key] += backTrack(i+1,j-1) + 2 if i != j else 1\r\n            \r\n            memo[key] %= mod\r\n            \r\n            return memo[key]\r\n        \r\n        return backTrack(0,N-1)",
    "java": "// Runtime: 33 ms (Top 61.21%) | Memory: 50.70 MB (Top 75.86%)\r\n\r\nclass Solution {\r\n    public int countPalindromicSubsequences(String str) {\r\n        int[] pre = new int[str.length()];\r\n\t\tHashMap<Character, Integer> map = new HashMap<>();\r\n\t\tint mod = 1000000007;\r\n\t\tfor(int i = 0; i < str.length(); i++) {\r\n\t\t\tchar ch = str.charAt(i);\r\n\t\t\tif(map.containsKey(ch))\r\n\t\t\t\tpre[i] = map.get(ch);\r\n\t\t\telse\r\n\t\t\t\tpre[i] = -1;\r\n\t\t\tmap.put(ch, i);\r\n\t\t}\r\n\t\t\r\n\t\tint[] next = new int[str.length()];\r\n\t\tmap = new HashMap<>();\r\n\t\tfor(int i = str.length() - 1; i >= 0; i--) {\r\n\t\t\tchar ch = str.charAt(i);\r\n\t\t\tif(map.containsKey(ch))\r\n\t\t\t\tnext[i] = map.get(ch);\r\n\t\t\telse\r\n\t\t\t\tnext[i] = Integer.MAX_VALUE;\r\n\t\t\tmap.put(ch, i);\r\n\t\t}\r\n\t\t\r\n\t\tint[][] dp = new int[str.length()][str.length()];\r\n\t\t\r\n\t\tfor(int g = 0; g < dp.length; g++) {\r\n\t\t\tfor(int i = 0, j = g; j < dp[0].length; i++, j++) {\r\n\t\t\t\tif(g == 0)\r\n\t\t\t\t\tdp[i][j] = 1;\r\n\t\t\t\telse if(g == 1)\r\n\t\t\t\t\tdp[i][j] = 2;\r\n\t\t\t\telse {\r\n\t\t\t\t\tif(str.charAt(i) == str.charAt(j)) {\r\n\t\t\t\t\t\tint n = next[i];\r\n\t\t\t\t\t\tint p = pre[j];\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\tif(n > p)\r\n\t\t\t\t\t\t\tdp[i][j] = ((2 * dp[i+1][j-1]) + 2) % mod;\r\n\t\t\t\t\t\telse if(n == p)\r\n\t\t\t\t\t\t\tdp[i][j] = ((2 * dp[i+1][j-1]) + 1) % mod;\r\n\t\t\t\t\t\telse\r\n\t\t\t\t\t\t\tdp[i][j] = ((2 * dp[i+1][j-1]) - dp[n+1][p-1]) % mod;\r\n\t\t\t\t\t}else\r\n\t\t\t\t\t\tdp[i][j] = (dp[i+1][j] + dp[i][j-1] - dp[i+1][j-1]) % mod;\r\n\t\t\t\t}\r\n                if(dp[i][j] < 0)\r\n                    dp[i][j] += mod;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn dp[0][dp[0].length - 1] % mod;\r\n    }\r\n}"
  }
}
