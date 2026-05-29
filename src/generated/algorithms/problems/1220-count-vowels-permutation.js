export default {
  "id": 1220,
  "name": "Count Vowels Permutation",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-vowels-permutation",
  "relativeDir": "C/Count Vowels Permutation",
  "slug": "1220-count-vowels-permutation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 65,
    "python": 19,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 2 ms (Top 87.85%) | Memory: 5.8 MB (Top 90.24%)\r\nclass Solution {\r\npublic:\r\n    int countVowelPermutation(int n) {\r\n        long a = 1, e = 1, i = 1, o = 1, u = 1, mod = pow(10, 9)+7;\r\n        long a2, e2, i2, o2, u2;\r\n\r\n        for (int j = 2; j <= n; j++) {\r\n            a2 = (e + i + u) % mod;\r\n            e2 = (a + i) % mod;\r\n            i2 = (e + o) % mod;\r\n            o2 = i;\r\n            u2 = (o + i) % mod;\r\n\r\n            a = a2, e = e2, i = i2, o = o2, u = u2;\r\n        }\r\n\r\n        return (a + e + i + o + u) % mod;\r\n    }\r\n};",
    "python": "# Runtime: 249 ms (Top 78.97%) | Memory: 19.8 MB (Top 29.73%)\r\nclass Solution:\r\n    def countVowelPermutation(self, n: int) -> int:\r\n        # dp[i][j] means the number of strings of length i that ends with the j-th vowel.\r\n        dp = [[1] * 5] + [[0] * (5) for _ in range(n - 1)]\r\n        moduler = math.pow(10, 9) + 7\r\n        for i in range(1, n):\r\n            # For vowel a\r\n            dp[i][0] = (dp[i - 1][1] + dp[i - 1][2] + dp[i - 1][4]) % moduler\r\n            # For vowel e\r\n            dp[i][1] = (dp[i - 1][0] + dp[i - 1][2]) % moduler\r\n            # For vowel i\r\n            dp[i][2] = (dp[i - 1][1] + dp[i - 1][3]) % moduler\r\n            # For vowel o\r\n            dp[i][3] = (dp[i - 1][2]) % moduler\r\n            # For vowel u\r\n            dp[i][4] = (dp[i - 1][2] + dp[i - 1][3]) % moduler\r\n\r\n        return int(sum(dp[-1]) % moduler)",
    "java": "// Runtime: 41 ms (Top 32.30%) | Memory: 52.8 MB (Top 39.76%)\r\nclass Solution {\r\n    private long[][] dp;\r\n    private int mod = (int)1e9 + 7;\r\n\r\n    public int countVowelPermutation(int n) {\r\n        dp = new long[6][n+1];\r\n        if(n == 1) return 5;\r\n\r\n        for(int i = 0; i < 5; i++)\r\n            dp[i][0] = 1;\r\n\r\n        helper(n,'z');\r\n        return (int)dp[5][n];\r\n    }\r\n\r\n    private long helper(int n, char vowel)\r\n    {\r\n        long ans = 0;\r\n        if(n == 0) return 1;\r\n\r\n        if(vowel == 'z') // we are using z for our convenience just to add Permutations of all Vowels\r\n        {\r\n            ans = (ans + helper(n-1,'a') + helper(n-1,'e') + helper(n-1,'i') + helper(n-1,'o') + helper(n-1,'u'))%mod;\r\n            dp[5][n] = ans;\r\n        }\r\n        // from here as per our assumptions of Vowels we will make calls & store results\r\n        else if(vowel == 'a') // for Nth number we would store Result for \"a\" in dp[0][n]\r\n        {\r\n            if(dp[0][n] != 0) return dp[0][n];\r\n            ans = (ans + helper(n-1,'e'))%mod;\r\n            dp[0][n] = ans;\r\n        }\r\n\r\n        else if(vowel == 'e') // for Nth number we would store Result for \"e\" in dp[1][n]\r\n        {\r\n            if(dp[1][n] != 0) return dp[1][n];\r\n            ans = (ans + helper(n-1,'a') + helper(n-1,'i'))%mod;\r\n            dp[1][n] = ans;\r\n        }\r\n\r\n        else if(vowel == 'i') // for Nth number we would store Result for \"i\" in dp[2][n]\r\n        {\r\n            if(dp[2][n] != 0) return dp[2][n];\r\n            ans = (ans + helper(n-1,'a') + helper(n-1,'e') + helper(n-1,'o') + helper(n-1,'u'))%mod;\r\n            dp[2][n] = ans;\r\n        }\r\n\r\n        else if(vowel == 'o') // for Nth number we would store Result for \"o\" in dp[3][n]\r\n        {\r\n            if(dp[3][n] != 0) return dp[3][n];\r\n            ans = (ans + helper(n-1,'i') + helper(n-1,'u'))%mod;\r\n            dp[3][n] = ans;\r\n        }\r\n\r\n        else // for Nth number we would store Result for \"u\" in dp[4][n]\r\n        {\r\n            if(dp[4][n] != 0) return dp[4][n];\r\n            ans = (ans + helper(n-1,'a'))%mod;\r\n            dp[4][n] = ans;\r\n        }\r\n\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var countVowelPermutation = function(n) {\r\n    let a = 1, e = 1, i = 1, o = 1, u = 1, mod = 1000000007\r\n    while(n-- > 1){\r\n        let new_a = a % mod, new_e = e % mod, new_i = i % mod, new_o = o % mod, new_u = u % mod\r\n        a = new_e + new_i + new_u\r\n        e = new_a + new_i\r\n        i = new_e + new_o\r\n        o = new_i\r\n        u = new_i + new_o\r\n    }\r\n    return (a + e + i + o + u) % mod\r\n};"
  }
}
