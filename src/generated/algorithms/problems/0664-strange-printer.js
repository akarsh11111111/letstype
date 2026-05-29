export default {
  "id": 664,
  "name": "Strange Printer",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/strange-printer",
  "relativeDir": "S/Strange Printer",
  "slug": "0664-strange-printer",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 22,
    "python": 46,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 1755 ms (Top 5.17%) | Memory: 312.6 MB (Top 5.17%)\r\nclass Solution {\r\npublic:\r\n    int dp[101][101];\r\n    int solve(string s,int i,int j)\r\n    {\r\n        if(i>j)\r\n            return 0;\r\n        if(dp[i][j]!=-1)\r\n            return dp[i][j];\r\n        int ans=0;\r\n        while(i<j && s[i+1]==s[i])\r\n            i++;\r\n        while(i<j && s[j]==s[j-1])\r\n        {\r\n            j--;\r\n        }\r\n        ans=1+solve(s,i+1,j);\r\n        for(int k=i+1;k<=j;k++)\r\n        {\r\n            if(s[k]==s[i])\r\n            {\r\n                int cnt=solve(s,i+1,k-1)+solve(s,k,j);\r\n                ans=min(ans,cnt);\r\n            }\r\n        }\r\n        return dp[i][j]=ans;\r\n    }\r\n    int strangePrinter(string s)\r\n    {\r\n        memset(dp,-1,sizeof(dp));\r\n         return solve(s,0,s.size()-1);\r\n    }\r\n};\r\n// if you like the solution plz upvote.",
    "python": "# Runtime: 878 ms (Top 47.91%) | Memory: 16.1 MB (Top 47.44%)\r\nclass Solution(object):\r\n    def strangePrinter(self, s):\r\n        \"\"\"\r\n        :type s: str\r\n        :rtype: int\r\n        \"\"\"\r\n        # remove duplicate letters from s.\r\n        tmp = []\r\n        for c in s:\r\n            if len(tmp) == 0 or tmp[-1] != c:\r\n                tmp.append(c)\r\n        s = \"\".join(tmp)\r\n\r\n        _m = {}\r\n        def _dp(i, j, background):\r\n            if j < i:\r\n                return 0\r\n            elif i == j:\r\n                return 1 if background != s[i] else 0\r\n            elif (i, j, background) in _m:\r\n                return _m[(i, j, background)]\r\n\r\n            ans = len(s)\r\n\r\n            # shrink s[i:j+1] to s[i_:j_+1] according to the background letter\r\n            i_ = i + 1 if s[i] == background else i\r\n            j_ = j - 1 if s[j] == background else j\r\n\r\n            if s[i_] == s[j_]:\r\n                # case \"AxxxA\" => best strategy is printing A first\r\n                ans = _dp(i_ + 1, j_ - 1, s[i_]) + 1\r\n            else:\r\n                # otherwise, print first letter, try every possible print length\r\n                for p in range(i_, j_ + 1):\r\n                    # searching is needed only if s[p] == s[i_]\r\n                    # e.g. s=\"ABCDEA\"print 'A' on s[0:1] is equivalent to s[0:5]\r\n                    if s[p] != s[i_]:\r\n                        continue\r\n                    l = _dp(i_, p, s[i_])\r\n                    r = _dp(p + 1, j_, background)\r\n                    ans = min(ans, l + r + 1)\r\n            _m[(i, j, background)] = ans\r\n            return ans\r\n\r\n        return _dp(0, len(s) - 1, '')",
    "java": "class Solution {\r\n\r\npublic int strangePrinter(String s) {\r\n    if (s.equals(\"\")) return 0;\r\n    int len = s.length();\r\n    int[][] dp = new int[len][len];\r\n    for (int i = 0; i < len; i++)\r\n        dp[i][i] = 1;\r\n    for (int l = 2; l <= len; l++) {\r\n        for (int i = 0; i < len && l + i - 1 < len; i++) {\r\n            int j = l + i - 1;\r\n            dp[i][j] = dp[i][j - 1] + (s.charAt(i) == s.charAt(j) ? 0 : 1);\r\n            for (int k = i + 1; k < j; k++) {\r\n                if (s.charAt(k) == s.charAt(j)) {\r\n                    dp[i][j] = Math.min(dp[i][j], dp[i][k - 1] + dp[k][j - 1]);\r\n                }\r\n            }\r\n        }\r\n    }\r\n    return dp[0][len - 1];\r\n}\r\n}",
    "javascript": "var strangePrinter = function(s) {\r\n    if(!s) return 0;\r\n\r\n    const N = s.length;    \r\n    const state = Array.from({length:N}, () => Array.from({length:N}));\r\n    \r\n    for(let i = 0; i < N; i++) {\r\n        // Printing one character always takes one attempt\r\n        state[i][i] = 1;\r\n    }\r\n    \r\n    const search = (i,j) => {\r\n        if(state[i][j]) return state[i][j];\r\n        \r\n        state[i][j] = Infinity;\r\n        for(let k = i; k < j; k++) {\r\n            state[i][j] = Math.min(state[i][j], search(i,k) + search(k+1,j));\r\n        }\r\n        if(s[i] === s[j]) state[i][j]--;\r\n        return state[i][j];\r\n    }\r\n    \r\n    return search(0, N-1);\r\n}"
  }
}
