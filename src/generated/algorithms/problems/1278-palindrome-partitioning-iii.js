export default {
  "id": 1278,
  "name": "Palindrome Partitioning III",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/palindrome-partitioning-iii",
  "relativeDir": "P/Palindrome Partitioning III",
  "slug": "1278-palindrome-partitioning-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 53,
    "java": 33,
    "python": 25,
    "javascript": 37
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\r\n\tint dp[105][105];\r\n\t/// Count Number of changes to be done\r\n\t/// to make substring of s from i to j \r\n\t/// to palindrome\r\n\tint changes(int i , int j , string& s){\r\n\t\tint cnt = 0;\r\n\t\twhile(i < j){\r\n\t\t\tcnt += (s[i++] != s[j--]);\r\n\t\t}\r\n\t\treturn cnt;\r\n\t}\r\n\r\n\tint recur(int idx, int k, string &s){\r\n\r\n\t\t/// If Reached end of s and found partions to be done 0\r\n\t\t/// return 0 , otherwise return INT_MAX/any big number\r\n\t\tif(idx == s.size()){\r\n\t\t\treturn (k == 0) ? 0 : 1e7;\r\n\t\t}\r\n\r\n\t\t/// Partitions to be done have completed , but\r\n\t\t/// we are not at the end of the string \r\n\t\t/// return INT_MAX/any big number\r\n\t\tif(k == 0){\r\n\t\t\treturn 1e7;\r\n\t\t}\r\n\r\n\t\tif (dp[idx][k] != -1){\r\n\t\t\treturn dp[idx][k];\r\n\t\t}\r\n\r\n\t\t/// Partitioning the String\r\n\t\tint ans = INT_MAX;\r\n\t\tfor (int i = idx ; i < s.size() ; i++){\r\n\t\t\tans = min(ans , changes(idx , i , s) + recur(i + 1, k - 1, s));\r\n\t\t}\r\n\t\treturn dp[idx][k] = ans;\r\n\t}\r\n\r\n\tint palindromePartition(string s, int k) {\r\n\r\n\t\t/// Edge Case\r\n\t\tif(k == s.size()){\r\n\t\t\treturn 0;\r\n\t\t}\r\n\t\tmemset(dp , -1 , sizeof(dp));\r\n\t\treturn recur(0 , k , s);\r\n\t}\r\n\r\n};",
    "python": "class Solution:\r\n    def palindromePartition(self, s: str, t: int) -> int:\r\n        n=len(s)\r\n        @lru_cache(None)\r\n        def is_palin(s):                #This function returns min no of chars to change to make s as a palindrome\r\n            cnt=0\r\n            for c1,c2 in zip(s,s[::-1]):\r\n                if c1!=c2: cnt+=1\r\n            if len(s)%2==0:\r\n                return cnt//2\r\n            return (cnt+1)//2\r\n        @lru_cache(None)\r\n        def dp(i,j,k):            #We analyse string s[i:j+1] with k divisions left\r\n            if j==n:\r\n                return 0 if k==0 else sys.maxsize\r\n            if k==0: \r\n                return sys.maxsize\r\n            ans=sys.maxsize\r\n            cnt=is_palin(s[i:j+1])\r\n            #terminate here\r\n            ans=min(ans,dp(j+1,j+1,k-1)+cnt)\r\n            #dont terminate\r\n            ans=min(ans,dp(i,j+1,k))\r\n            return ans\r\n        return dp(0,0,t)",
    "java": "// Runtime: 38 ms (Top 26.09%) | Memory: 55.8 MB (Top 6.28%)\r\nclass Solution {\r\n    public int mismatchCount(String s) {\r\n        int n = s.length()-1;\r\n        int count = 0;\r\n        for(int i=0,j=n;i<j;i++,j--) {\r\n            if(s.charAt(i) != s.charAt(j))\r\n                count++;\r\n        }\r\n        return count;\r\n    }\r\n    public int helper(String s, int n, int i, int j, int k, Integer[][][] dp) {\r\n        if(j>=n)\r\n            return 105;\r\n        if(k<0)\r\n            return 105;\r\n        if(dp[i][j][k] != null) {\r\n            return dp[i][j][k];\r\n        }\r\n        if(n-j<k)\r\n            return dp[i][j][k] = 105;\r\n        if(n-j==k)\r\n            return dp[i][j][k] = mismatchCount(s.substring(i,j+1));\r\n        int stop = mismatchCount(s.substring(i,j+1)) + helper(s,n,j+1,j+1,k-1,dp);\r\n        int cont = helper(s,n,i,j+1,k,dp);\r\n        return dp[i][j][k] = Math.min(stop, cont);\r\n    }\r\n    public int palindromePartition(String s, int k) {\r\n        int n = s.length();\r\n        Integer[][][] dp = new Integer[n][n][k+1];\r\n        return helper(s,s.length(),0,0,k,dp);\r\n    }\r\n}",
    "javascript": "// Runtime: 193 ms (Top 16.67%) | Memory: 45.6 MB (Top 100.00%)\r\n\r\nvar palindromePartition = function(s, k) {\r\n    const len = s.length;\r\n\r\n    const cost = (i = 0, j = 0) => {\r\n        let c = 0;\r\n        while(i <= j) {\r\n            if(s[i] != s[j]) c++;\r\n            i++, j--;\r\n        }\r\n        return c;\r\n    }\r\n\r\n    const dp = Array.from({ length: len }, () => {\r\n        return new Array(k + 1).fill(-1);\r\n    })\r\n\r\n    const splitHelper = (idx = 0, sl = k) => {\r\n        if(sl < 0) return Infinity;\r\n        if(idx == len) {\r\n            if(sl == 0) return 0;\r\n            return Infinity;\r\n        }\r\n\r\n        if(dp[idx][sl] != -1) return dp[idx][sl];\r\n\r\n        let ans = Infinity;\r\n\r\n        for(let i = idx; i < len; i++) {\r\n            ans = Math.min(ans, splitHelper(i + 1, sl - 1) + cost(idx, i));\r\n        }\r\n        return dp[idx][sl] = ans;\r\n    }\r\n\r\n    return splitHelper();\r\n};"
  }
}
