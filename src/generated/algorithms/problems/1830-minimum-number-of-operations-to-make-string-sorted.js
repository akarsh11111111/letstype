export default {
  "id": 1830,
  "name": "Minimum Number of Operations to Make String Sorted",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted",
  "relativeDir": "M/Minimum Number of Operations to Make String Sorted",
  "slug": "1830-minimum-number-of-operations-to-make-string-sorted",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 55,
    "java": 45,
    "python": 18
  },
  "languages": {
    "cpp": "// Runtime: 13 ms (Top 88.46%) | Memory: 7.40 MB (Top 76.92%)\r\n\r\nconst int MOD = 1e9 + 7;\r\nconst int N = 3010;\r\n\r\nlong f[N];\r\nlong g[N];\r\n\r\nlong qmi(long a, int k) {\r\n    long res = 1;\r\n    while (k != 0) {\r\n        if ((k & 1) == 1) {\r\n            res = res * a % MOD;\r\n        }\r\n        k >>= 1;\r\n        a = a * a % MOD;\r\n    }\r\n    return res;\r\n}\r\n\r\nint init = []() {\r\n    f[0] = g[0] = 1;\r\n    for (int i = 1; i < N; ++i) {\r\n        f[i] = f[i - 1] * i % MOD;\r\n        g[i] = qmi(f[i], MOD - 2);\r\n    }\r\n    return 0;\r\n}();\r\n\r\nclass Solution {\r\npublic:\r\n    int makeStringSorted(string s) {\r\n        int cnt[26]{};\r\n        for (char& c : s) {\r\n            ++cnt[c - 'a'];\r\n        }\r\n        int n = s.size();\r\n        long ans = 0;\r\n        for (int i = 0; i < n; ++i) {\r\n            int m = 0;\r\n            for (int j = 0; j < 26; ++j) {\r\n                if (j < s[i] - 'a') {\r\n                    m += cnt[j];\r\n                }\r\n            }\r\n            long t = m * f[n - i - 1] % MOD;\r\n            for (int j = 0; j < 26; ++j) {\r\n                t = t * g[cnt[j]] % MOD;\r\n            }\r\n            ans = (ans + t) % MOD;\r\n            --cnt[s[i] - 'a'];\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "from math import gcd\r\n\r\nclass Solution:\r\n    def makeStringSorted(self, s: str) -> int:\r\n        s = [ord(c) - ord('a') for c in s]\r\n        ans, MOD = 0, 10 ** 9 + 7\r\n        cnt, t, d, step = [0] * 26, 1, 1, 1\r\n        cnt[s[-1]] = 1\r\n        for c in reversed(s[:-1]):\r\n            d *= (cnt[c] + 1)\r\n            t *= step\r\n            g = gcd(d, t)\r\n            d //= g\r\n            t //= g\r\n            ans = (ans + t * sum(cnt[i] for i in range(c)) // d) % MOD\r\n            cnt[c] += 1\r\n            step += 1\r\n        return ans",
    "java": "import java.math.*;\r\n\r\nclass Solution {\r\n    public int makeStringSorted(String s) {\r\n        BigInteger res = new BigInteger(\"0\");\r\n        BigInteger mod = new BigInteger(\"1000000007\");\r\n        \r\n        int[] count = new int[26];\r\n        BigInteger[] fact = factory(s.length(), mod);\r\n        \r\n        int n = s.length();\r\n        BigInteger div = new BigInteger(\"1\");\r\n                \r\n        for (int i = n - 1; i >= 0; --i) {\r\n            char c = s.charAt(i);\r\n            count[c-'a'] ++;\r\n            BigInteger c1 = countInverse(count, c);            \r\n            BigInteger ans = c1.multiply(fact[n-i-1]);\r\n            div = div.multiply(new BigInteger(String.valueOf(count[c-'a'])));\r\n            ans = ans.multiply(div.modPow(mod.subtract(new BigInteger(String.valueOf(2))), mod)).mod(mod);\r\n            res = res.add(ans).mod(mod);\r\n        }\r\n        \r\n        return res.intValue();\r\n    }\r\n    \r\n    public BigInteger countInverse(int[] count, char c) {\r\n        long cnt = 0;\r\n        for (int i = 0; i < (c - 'a'); ++i) {\r\n            cnt += count[i];\r\n        }\r\n        \r\n        return new BigInteger(String.valueOf(cnt));\r\n    }\r\n    \r\n    public BigInteger[] factory(int n, BigInteger mod) {\r\n        BigInteger[] fact = new BigInteger[n+1];\r\n        fact[0] = new BigInteger(\"1\");\r\n        for (int i = 1; i <= n; ++i) {\r\n            fact[i] = fact[i-1].multiply(new BigInteger(String.valueOf(i))).mod(mod);\r\n        }\r\n        \r\n        return fact;\r\n    }\r\n}"
  }
}
