export default {
  "id": 2318,
  "name": "Number of Distinct Roll Sequences",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-distinct-roll-sequences",
  "relativeDir": "N/Number of Distinct Roll Sequences",
  "slug": "2318-number-of-distinct-roll-sequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 38,
    "python": 24,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\nprivate:\r\n\tint mod = 1e9+7;\r\n\r\n\tint f(int ind,int prev1,int prev2,int n){\r\n\t\t//Base Case\r\n\t\tif(ind == n) return 1;\r\n\r\n\t\tint ans = 0;\r\n\t\tfor(int i = 1;i <= 6;i++) //Exploring all possible values\r\n\t\t\tif(prev1 != i && prev2 != i && (prev1 == 0 || __gcd(prev1,i) == 1))\r\n\t\t\t\tans = (ans + f(ind+1,i,prev1,n))%mod;\r\n\r\n\t\treturn ans;\r\n\t}\r\npublic:\r\n\tint distinctSequences(int n) {\r\n\t\treturn f(0,0,0,n);\r\n\t}\r\n};",
    "python": "mod=1000000007\r\n@cache\r\ndef func(n,prev,pp):\r\n    if n==0:\r\n        return 1\r\n    ans=0\r\n    for i in range(1,7):\r\n        if prev==-1:\r\n            ans+=func(n-1,i,prev)\r\n            ans=ans%mod\r\n        elif pp==-1:\r\n            if(math.gcd(i,prev)==1 and i!=prev):\r\n                ans+=func(n-1,i,prev)\r\n                ans=ans%mod\r\n        else:\r\n            if(math.gcd(i,prev)==1 and i!=prev and i!=pp):\r\n                ans+=func(n-1,i,prev)\r\n                ans=ans%mod\r\n    return ans;\r\nclass Solution:\r\n    \r\n            \r\n    def distinctSequences(self, n: int) -> int:\r\n        return func(n,-1,-1)",
    "java": "// Runtime: 361 ms (Top 36.73%) | Memory: 68 MB (Top 53.88%)\r\nclass Solution {\r\n    static long[][] dp;\r\n    public int distinctSequences(int n) {\r\n        if(n==1) return 6;\r\n        int mod = 1_000_000_007;\r\n        dp =new long[][]\r\n                {\r\n                    {0,1,1,1,1,1},\r\n                    {1,0,1,0,1,0},\r\n                    {1,1,0,1,1,0},\r\n                    {1,0,1,0,1,0},\r\n                    {1,1,1,1,0,1},\r\n                    {1,0,0,0,1,0}\r\n                };\r\n        for(int i=2;i<n;i++){\r\n            long[][] temp = new long[6][6];\r\n            for(int j=0;j<6;j++){\r\n                for(int k=0;k<6;k++){\r\n                    long total = 0;\r\n                    if(dp[j][k] == 0) continue;\r\n                    for(int l=0;l<6;l++){\r\n                        total = (total + ((l==k)?0:dp[l][j]))%mod;\r\n                    }\r\n                    temp[j][k] = total;\r\n                }\r\n            }\r\n            dp = temp;\r\n        }\r\n        long result = 0;\r\n        for(int i=0;i<6;i++){\r\n            for(int j=0;j<6;j++){\r\n                result = (result + dp[i][j])%mod;\r\n            }\r\n        }\r\n        return (int)(result);\r\n    }\r\n}",
    "javascript": "// Runtime: 760 ms (Top 53.85%) | Memory: 83.1 MB (Top 23.08%)\r\nvar distinctSequences = function(n) {\r\n    // 3D DP [n + 1][7][7] => rollIdx, prev, prevPrev\r\n    const dp = Array.from({ length: n + 1}, () => {\r\n        return new Array(7).fill(0).map(() => new Array(7).fill(0));\r\n    });\r\n\r\n    const gcd = (a, b) => {\r\n        if(a < b) [b, a] = [a, b];\r\n        while(b) {\r\n            let temp = b;\r\n            b = a % b;\r\n            a = temp;\r\n        }\r\n        return a;\r\n    }\r\n\r\n    const ds = (n, p = 0, pp = 0) => {\r\n        if(n == 0) return 1;\r\n        if(dp[n][p][pp] == 0) {\r\n            for(let i = 1; i <= 6; i++) {\r\n                if((i != p && i != pp) && (p == 0 || gcd(p, i) == 1)) {\r\n                    dp[n][p][pp] = (dp[n][p][pp] + ds(n - 1, i, p)) % 1000000007;\r\n                }\r\n            }\r\n        }\r\n        return dp[n][p][pp];\r\n    }\r\n    return ds(n);\r\n};"
  }
}
