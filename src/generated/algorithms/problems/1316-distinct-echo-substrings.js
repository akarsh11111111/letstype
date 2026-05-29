export default {
  "id": 1316,
  "name": "Distinct Echo Substrings",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/distinct-echo-substrings",
  "relativeDir": "D/Distinct Echo Substrings",
  "slug": "1316-distinct-echo-substrings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 52,
    "java": 29,
    "python": 14,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 253 ms (Top 86.72%) | Memory: 6.9 MB (Top 96.68%)\r\nclass Solution {\r\npublic:\r\n    static const int N=2005;\r\n    int mod=1e9+7;\r\n    int B=31;\r\n    long long h[N],p[N],invp[N];\r\n    int modexp(int x,int y){\r\n        int res=1;\r\n        while(y>0){\r\n            if(y&1) res=((long long)res*x)%mod;\r\n            x=((long long)x*x)%mod;\r\n            y=y>>1;\r\n        }\r\n        return res;\r\n    }\r\n    int sub_hash(int l,int r){\r\n        int ans=h[r];\r\n        if(l>0)\r\n            ans=((ans+mod-h[l-1])*invp[l]*1LL)%mod;\r\n        return ans;\r\n    }\r\n    int distinctEchoSubstrings(string text) {\r\n        set<int> res;\r\n        int ans=0;\r\n        p[0]=1;invp[0]=1;\r\n        for(int i=1;i<2005;i++){\r\n            p[i]=(p[i-1]*B)%mod;\r\n        }\r\n        for(int i=1;i<N;i++){\r\n            invp[i]=(invp[i-1]*modexp(B,mod-2))%mod;\r\n        }\r\n        int n=text.size();\r\n        h[0]=(text[0]-'a'+1);\r\n        for(int i=1;i<n;i++){\r\n            h[i]=(h[i-1]+((text[i]-'a'+1)*p[i])*1LL)%mod;\r\n        }\r\n        for(int len=1;len<=n/2;len++){\r\n            for(int i=0;i<n+1-2*len;i++){\r\n                int a=sub_hash(i,i+len-1);\r\n                int b=sub_hash(i+len,i+2*len-1);\r\n                if(a==b){\r\n                    if(res.find(a)==res.end()){\r\n                        res.insert(a);\r\n                        ans++;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def distinctEchoSubstrings(self, s: str) -> int:\r\n        hash=set()\r\n        n=len(s)\r\n        for i in range(n):\r\n            for j in range(i):\r\n                \r\n                if (i-j)&1==1:\r\n                    \r\n                    k=(i-j)//2\r\n                    \r\n                    if s[j:j+k+1]==s[j+k+1:i+1]:\r\n                        hash.add(s[j:j+k+1]+s[j+k+1:i+1])\r\n        return len(hash)",
    "java": "class Solution {\r\n    private static final int PRIME = 101;\r\n    private static final int MOD = 1_000_000_007;\r\n    public int distinctEchoSubstrings(String text) {\r\n        int n = text.length();\r\n        \r\n        // dp[i][j] : hash value of text[i:j]\r\n        int[][] dp = new int[n][n];\r\n        for (int i = 0; i < n; i++) {\r\n            long hash = 0;\r\n            for (int j = i; j < n; j++) {\r\n                hash = hash * PRIME + (text.charAt(j) - 'a' + 1);\r\n                hash %= MOD;\r\n                dp[i][j] = (int) hash;\r\n            }\r\n        }\r\n        \r\n        Set<Integer> set = new HashSet<>();\r\n        int res = 0;\r\n        for (int i = 0; i < n-1; i++) {\r\n            // compare text[i:j] with text[j+1: 2j-i+1]\r\n            for (int j = i; 2*j - i + 1 < n; j++) {\r\n                if (dp[i][j] == dp[j+1][2*j - i+1] && set.add(dp[i][j])) res++;\r\n            }\r\n        }\r\n        \r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 962 ms (Top 50.0%) | Memory: 48.20 MB (Top 25.0%)\r\n\r\n/**\r\n * @param {string} text\r\n * @return {number}\r\n */\r\nvar distinctEchoSubstrings = function(text) {\r\n    const store = new Set();\r\n    for (let i = 0; i < text.length; i++) {\r\n        for (let j = i + 1; j < text.length; j++) {\r\n            const left = text.substring(i,j);\r\n\t\t\tconst right = text.substring(j, j + j - i);\r\n            if (left === right) store.add(left);\r\n        }\r\n    }\r\n    return store.size;\r\n};"
  }
}
