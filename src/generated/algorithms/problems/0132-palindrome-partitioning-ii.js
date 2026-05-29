export default {
  "id": 132,
  "name": "Palindrome Partitioning II",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/palindrome-partitioning-ii",
  "relativeDir": "P/Palindrome Partitioning II",
  "slug": "0132-palindrome-partitioning-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 66,
    "java": 42,
    "python": 19,
    "javascript": 23
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n\t// function to precompute if every substring of s is a palindrome or not\r\n    vector<vector<bool>> isPalindrome(string& s){\r\n        int n = s.size();\r\n        vector<vector<bool>> dp(n, vector<bool>(n, false));\r\n        \r\n        for(int i=0; i<n; i++){\r\n            dp[i][i] = true;\r\n        }\r\n        \r\n        for(int i=0; i<n-1; i++){\r\n            if(s[i] == s[i+1]){\r\n                dp[i][i+1] = true;\r\n            }\r\n        }\r\n        \r\n        int k = 2;\r\n        \r\n        while(k < n){\r\n            int i=0;\r\n            int j=k;\r\n            \r\n            while(j<n){\r\n                if(s[i] == s[j] and dp[i+1][j-1]){\r\n                    dp[i][j] = true;\r\n                }\r\n                \r\n                i++;\r\n                j++;\r\n            }\r\n            \r\n            k++;\r\n        }\r\n        \r\n        return dp;\r\n    }\r\n    \r\n\t// function to find the minimum palindromic substrings in s\r\n    int solve(string& s, int n, int i, vector<vector<bool>>& palin, vector<int>& memo){\r\n        if(i==n){\r\n            return 0;\r\n        }\r\n        if(memo[i] != -1){\r\n            return memo[i];\r\n        }\r\n        \r\n        int result = INT_MAX;\r\n        \r\n        for(int j=i+1; j<=n; j++){\r\n            if(palin[i][j-1]){\r\n                result = min(result, 1+solve(s, n, j, palin, memo));\r\n            }\r\n        }\r\n        \r\n        return memo[i] = result;\r\n    }\r\n    \r\n    int minCut(string s) {\r\n        int n = s.size();\r\n        vector<int> memo(n, -1);\r\n        vector<vector<bool>> palin = isPalindrome(s);\r\n        return solve(s, n, 0, palin, memo)-1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isPallindrom(self, s: str, l, r) -> bool:\r\n        st = s[l: r+1]\r\n        rev = st[::-1]\r\n        return st == rev\r\n    \r\n    def minCut(self, s: str) -> int:\r\n        N = len(s)\r\n        if not s: return 0\r\n        if self.isPallindrom(s, 0, N-1): return 0\r\n        dp = [sys.maxsize] * (N+1)\r\n        dp[-1] = 0\r\n        \r\n        for i in range(N-1, -1, -1):\r\n            for j in range(i, N):\r\n                if self.isPallindrom(s, i, j):\r\n                    dp[i] = min(dp[i], 1 + dp[j+1])\r\n                    \r\n        return dp[0]-1",
    "java": "class Solution {\r\nint dp[];\r\n\r\n public boolean pali(int i,int j,String s){\r\n    \r\n   // int j=s.length()-1,i=0;\r\n    \r\n    while(i<=j){\r\n        \r\n        if(s.charAt(i)!=s.charAt(j))return false;\r\n            \r\n            i++;j--;\r\n        \r\n    }\r\n    \r\n    return true;\r\n    \r\n}\r\npublic int cut(String s,int i,int n,int dp[]){\r\n    \r\n    if(i==n)return 0;\r\n    if(dp[i]!=-1)return dp[i];\r\n    \r\n    int min=Integer.MAX_VALUE;\r\n    \r\n    for(int j=i;j<n;j++){\r\n        \r\n        if(pali(i,j,s)){\r\n            \r\n            int cost=1+cut(s,j+1,n,dp);\r\n            min=Math.min(min,cost);\r\n            \r\n      } \r\n    }\r\n   return  dp[i]=min;\r\n       \r\npublic int minCut(String s) {\r\n    int n=s.length();\r\n    dp=new int[n];\r\n    Arrays.fill(dp,-1);\r\n    return cut(s,0,n,dp)-1;       \r\n}",
    "javascript": "// Runtime: 1073 ms (Top 40.58%) | Memory: 43.7 MB (Top 82.61%)\r\nvar minCut = function(s) {\r\n    function isPal(l, r) {\r\n        while (l < r) {\r\n            if (s[l] === s[r]) l++, r--;\r\n            else return false;\r\n        } return true;\r\n    }\r\n\r\n    let map = new Map();\r\n    function dfs(idx = 0) {\r\n        if (idx === s.length) return 0;\r\n        if (map.has(idx)) return map.get(idx);\r\n        let min = Infinity;\r\n        for (let i = idx; i < s.length; i++) {\r\n            if (isPal(idx, i)) min = Math.min(min, 1 + dfs(i + 1));\r\n        }\r\n        map.set(idx, min);\r\n        return min;\r\n    }\r\n\r\n    return dfs() - 1;\r\n};"
  }
}
