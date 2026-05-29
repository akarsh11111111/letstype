export default {
  "id": 115,
  "name": "Distinct Subsequences",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/distinct-subsequences",
  "relativeDir": "D/Distinct Subsequences",
  "slug": "0115-distinct-subsequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 34,
    "python": 17,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int solve(string &s, string &t, int i, int j, vector<vector<int>> &dp){\r\n        if(j >= t.size()) return 1;\r\n        if(i >= s.size() || t.size() - j > s.size() - i) return 0;\r\n        if(dp[i][j] != -1) return dp[i][j];\r\n        int res = 0;\r\n        for(int k = i; k < s.size(); k++){\r\n            if(s[k] == t[j]) res += solve(s, t, k+1, j+1, dp); \r\n        }\r\n        return dp[i][j] = res;\r\n    }\r\n    \r\n    int numDistinct(string s, string t) {\r\n        if(s.size() == t.size()) return s == t;\r\n        vector<vector<int>> dp(s.size(), vector<int> (t.size(), -1));\r\n        return solve(s, t, 0 , 0, dp);\r\n    }\r\n};",
    "python": "# Runtime: 1092 ms (Top 41.44%) | Memory: 70.6 MB (Top 63.39%)\r\nclass Solution:\r\n    def numDistinct(self, s: str, t: str) -> int:\r\n        if len(t) > len(s):\r\n            return 0\r\n        ls, lt = len(s), len(t)\r\n        res = 0\r\n        dp = [[0] * (ls + 1) for _ in range(lt + 1)]\r\n        for j in range(ls + 1):\r\n            dp[-1][j] = 1\r\n        for i in range(lt - 1, -1, -1):\r\n            for j in range(ls -1 , -1, -1):\r\n                dp[i][j] = dp[i][j + 1]\r\n                if s[j] == t[i]:\r\n\r\n                    dp[i][j] += dp[i + 1][j + 1]\r\n        return dp[0][0]",
    "java": "class Solution {\r\n    // We assume that dp[i][j] gives us the total number of distinct subsequences for the string s[0 to i] which equals string t[0 to j]\r\n    int f(int i,int j,String s,String t,int dp[][]){\r\n        //If t gets exhausted then all the characters in t have been matched with s so we can return 1 (we found a subsequence)\r\n        if(j<0)\r\n            return 1;\r\n        // if s gets exhausted then there are characters remaining in t which are yet to be matched as s got exhausted they could not be matched so there is no distinct subsequence\r\n        if(i<0){\r\n            return 0;\r\n        }\r\n        if(dp[i][j]!=-1)\r\n            return dp[i][j];\r\n        //If both the characters in s[i] and t[j] match then we have two case\r\n            //1) Either consider the i'th character of s and find the remaining distinct subsequences of s[0 to i-1] which equals t[0 to j-1] set i.e. f(i-1,j-1)\r\n            //2) Do not consider s[i] so we are still at the same j'th character of t as we had not been considering s[i] matched with t[j] we check distinct subsequences of t[0 to j] in s[0 to i-1] i.e. f(i-1,j)\r\n        if(s.charAt(i)==t.charAt(j)){\r\n            dp[i][j]= f(i-1,j-1,s,t,dp)+f(i-1,j,s,t,dp);\r\n        }\r\n        // If both of them do not match then we consider the 2nd case of matching characters\r\n        else{\r\n            dp[i][j]=f(i-1,j,s,t,dp);\r\n        } \r\n        return dp[i][j];\r\n    }\r\n    public int numDistinct(String s, String t) {\r\n        int n=s.length();\r\n        int m=t.length();\r\n        int dp[][]=new int[n][m];\r\n        for(int i=0;i<n;i++){\r\n            Arrays.fill(dp[i],-1);\r\n        }\r\n        return f(n-1,m-1,s,t,dp);\r\n    }\r\n}",
    "javascript": "var numDistinct = function(s, t) {\r\n    const n = s.length;\r\n\r\n    const memo = {};\r\n    const dfs = (index = 0, subsequence = '') => {\r\n        if(subsequence === t) return 1;\r\n        if(n - index + 1 < t.length - subsequence.length) return 0;\r\n        if(index === n) return 0;\r\n\r\n        const key = `${index}-${subsequence}`;\r\n        if(key in memo) return memo[key];\r\n\r\n        memo[key] = t[subsequence.length] !== s[index] ? 0 : dfs(index + 1, subsequence + s[index]);\r\n        memo[key] += dfs(index + 1, subsequence);\r\n        return memo[key];\r\n    }\r\n\r\n    return dfs();\r\n};"
  }
}
