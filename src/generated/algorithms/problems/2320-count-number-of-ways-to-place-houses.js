export default {
  "id": 2320,
  "name": "Count Number of Ways to Place Houses",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-number-of-ways-to-place-houses",
  "relativeDir": "C/Count Number of Ways to Place Houses",
  "slug": "2320-count-number-of-ways-to-place-houses",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 25,
    "python": 29,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    typedef long long ll;\r\n    ll mod = 1e9+7;\r\n    int countHousePlacements(int n) {\r\n        ll house=1, space=1;\r\n        ll total = house+space;\r\n        for(int i=2;i<=n;i++){\r\n\t        house = space;\r\n\t        space = total;\r\n\t        total = (house+space)%mod;\r\n\t    }\r\n\t    return (total*total)%mod;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countHousePlacements(self, n: int) -> int:\r\n        \r\n        \r\n        @lru_cache(None)\r\n        def rec(i, k):\r\n            \r\n            # i is the index of the house \r\n            # k is the state of last house, 1 if there was a house on the last index else 0\r\n            \r\n            if i>=n:\r\n                return 1\r\n            \r\n            elif k==0:\r\n                return rec(i+1,1) + rec(i+1,0)\r\n            \r\n            else:\r\n                return rec(i+1,0)\r\n        \r\n        \r\n        \r\n        #l1 are the combinations possible in lane 1, the final answer will be the square \r\n\t\t#of of l1 as for every combination of l1 there will be \"l1\" combinations in lane2.\r\n        \r\n        l1 = rec(1,0) + rec(1,1)\r\n        \r\n        \r\n        mod = 10**9 +7\r\n        return pow(l1, 2, mod) #use this when there is mod involved along with power",
    "java": "class Solution {\r\n    int mod = (int)1e9+7;\r\n    public int countHousePlacements(int n) {\r\n        \r\n        if(n == 1)\r\n            return 4;\r\n        if(n == 2)\r\n            return 9;\r\n        long a = 2;\r\n        long b = 3;\r\n        if(n==1)\r\n            return (int)(a%mod);\r\n        if(n==2)\r\n            return (int)(b%mod);\r\n        long c=0;\r\n        for(int i=3;i<=n;i++)\r\n        {\r\n            c = (a+b)%mod;\r\n            a=b%mod;\r\n            b=c%mod;\r\n        }\r\n        \r\n        return (int)((c*c)%mod);\r\n    }\r\n}",
    "javascript": "const mod = (10 ** 9) + 7\r\nvar countHousePlacements = function(n) {\r\n    let prev2 = 1\r\n    let prev1 = 1\r\n    let ways = 2\r\n    \r\n    for ( let i = 2; i <= n; i++ ) {\r\n        prev2 = prev1\r\n        prev1 = ways\r\n        ways = ( prev1 + prev2 ) % mod\r\n    }\r\n    \r\n    return (ways ** 2) % mod\r\n}"
  }
}
