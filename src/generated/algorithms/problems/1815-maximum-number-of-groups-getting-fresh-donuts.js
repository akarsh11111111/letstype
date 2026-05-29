export default {
  "id": 1815,
  "name": "Maximum Number of Groups Getting Fresh Donuts",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts",
  "relativeDir": "M/Maximum Number of Groups Getting Fresh Donuts",
  "slug": "1815-maximum-number-of-groups-getting-fresh-donuts",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "python": 33,
    "javascript": 1
  },
  "languages": {
    "cpp": "class Solution{\r\ntypedef long long ll;\r\n#define vi(x) vector<x>\r\npublic:\r\n    unordered_map<string, ll>dp;\r\n    string s;\r\n    ll func(ll rem){\r\n        if(dp.find(s)==dp.end()){\r\n            dp[s]=-1;\r\n        }\r\n        ll&ans=dp[s];\r\n        if(ans==-1){\r\n            ans=0;\r\n            ll bs=s.size();\r\n            for(ll i=1;i<bs;++i){\r\n                if(s[i]>'0'){\r\n                    --s[i];\r\n                    ans=max(ans, func((bs+rem-i)%bs)+!rem);\r\n                    ++s[i];\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n    int maxHappyGroups(int bs, vector<int>&v) {\r\n        s.assign(bs, '0');\r\n        ll ans=0;\r\n        for(ll it:v){\r\n            if(it%bs==0){\r\n                ++ans;\r\n            }\r\n            else if(s[bs-it%bs]>'0'){\r\n                ++ans;\r\n                --s[bs-it%bs];\r\n            }\r\n            else{\r\n                ++s[it%bs];\r\n            }\r\n        }\r\n        return ans+func(0);\r\n    }\r\n};",
    "python": "// Runtime: 209 ms (Top 60.0%) | Memory: 21.90 MB (Top 65.0%)\r\n\r\nclass Solution:\r\n    def maxHappyGroups(self, B, groups):\r\n        ans = sum(g%B == 0 for g in groups)\r\n        groups = [g for g in groups if g%B != 0]\r\n\r\n        pos = [0]*B\r\n        for g in groups: pos[g%B] += 1\r\n\r\n        for i in range(1, B):\r\n            t = min(pos[i], pos[B-i]) if 2*i != B else pos[i]//2\r\n            ans += t\r\n            pos[i] -= t\r\n            pos[B-i] -= t\r\n            \r\n        if sum(pos) == 0: return ans\r\n\r\n        @lru_cache(None)\r\n        def dfs(position, last):\r\n            if sum(position) == 0: return 0\r\n\r\n            ans = float(\"-inf\")\r\n            for i in range(B):\r\n                if position[i] > 0:\r\n                    t = [j for j in position]\r\n                    t[i] -= 1\r\n                    U = (last - i) % B\r\n                    ans = max(ans, dfs(tuple(t), U) + (U == 0))\r\n                      \r\n            return ans\r\n\r\n        return max(dfs(tuple(pos), i) for i in range(1, B)) + ans",
    "javascript": "O(n!)"
  }
}
