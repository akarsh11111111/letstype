export default {
  "id": 2223,
  "name": "Sum of Scores of Built Strings",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-scores-of-built-strings",
  "relativeDir": "S/Sum of Scores of Built Strings",
  "slug": "2223-sum-of-scores-of-built-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 36,
    "python": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> zfunction(string s)\r\n    {\r\n        int n = s.size();\r\n        vector<int> z(n,0);\r\n        z[0]=n;\r\n        int l=0,r=0;\r\n        for(int i=1;i<n;++i)\r\n        {\r\n            if(i<=r)\r\n                z[i] = min(r-i+1,z[i-l]);\r\n            while(i+z[i]<n && s[z[i]] == s[i+z[i]])\r\n                ++z[i];\r\n           if(i+z[i]-1 > r)\r\n               l = i, r = i+z[i]-1;\r\n        }\r\n        return z;\r\n    }\r\n    long long sumScores(string s) {\r\n        vector<int> z = zfunction(s);\r\n        long long sum=0;\r\n        sum = accumulate(begin(z),end(z),sum);\r\n        return sum;\r\n    }\r\n};",
    "python": "// Runtime: 200 ms (Top 85.96%) | Memory: 25.20 MB (Top 24.56%)\r\n\r\nclass Solution:\r\n    def sumScores(self, s):\r\n        n = len(s)\r\n\r\n        dp, ans, j = [1]*n, [0]*n, 0 \r\n\r\n        for i in range(1,n):\r\n            while s[i] != s[j] and j > 0:\r\n                j = ans[j-1]\r\n\r\n            if s[i] == s[j]:\r\n                dp[i] += dp[j]\r\n                ans[i] = j+1\r\n                j += 1 \r\n\r\n        return sum(dp)",
    "java": "class Solution {\r\n    public long[] hsh, hsh2, pw, pw2;\r\n    public int mod = (int) 1e9+7;\r\n    public long sumScores(String s) {\r\n        int n = s.length(), base = 131, base2 = 137;\r\n        hsh = new long[n+1]; pw = new long[n+1];\r\n        hsh2 = new long[n+1]; pw2 = new long[n+1];\r\n        pw[0] = 1; pw2[0] = 1;\r\n        for (int j = 1; j <= n; j++) {\r\n            hsh[j] = (hsh[j-1]*base + s.charAt(j-1))%mod;\r\n            pw[j] = pw[j-1]*base%mod;\r\n            hsh2[j] = (hsh2[j-1]*base2 + s.charAt(j-1))%mod;\r\n            pw2[j] = pw2[j-1]*base2%mod;\r\n        }\r\n        // binary search for score\r\n        long ans = 0;\r\n        for (int i = n; i >= 1; i--) {\r\n            if (s.charAt(i-1)!=s.charAt(0)) continue;\r\n            int lo = 0, hi = n-i+1, res = 0;\r\n            while (lo<=hi) {\r\n                int mid = (lo+hi)>>1;\r\n                if (getSubstrHash(0, mid)==getSubstrHash(i-1, i+mid-1)) {\r\n                    lo = mid+1; res = mid;\r\n                }\r\n                else hi = mid-1;\r\n            }\r\n            ans+=res;\r\n        }\r\n        return ans;\r\n    }\r\n    public long getSubstrHash(int l, int r){\r\n        long h1 = (hsh[r] - hsh[l] * pw[r-l] % mod + mod)%mod;\r\n        long h2 = (hsh2[r] - hsh2[l] * pw2[r-l] % mod + mod)%mod;\r\n        return (h1<<31) | h2;\r\n    }\r\n}"
  }
}
