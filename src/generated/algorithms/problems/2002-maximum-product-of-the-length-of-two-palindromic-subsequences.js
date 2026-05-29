export default {
  "id": 2002,
  "name": "Maximum Product of the Length of Two Palindromic Subsequences",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences",
  "relativeDir": "M/Maximum Product of the Length of Two Palindromic Subsequences",
  "slug": "2002-maximum-product-of-the-length-of-two-palindromic-subsequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 33,
    "python": 21,
    "javascript": 48
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int lca(string &s)\r\n    {\r\n        int n=s.size();\r\n        string s1=s;\r\n        string s2=s;\r\n        reverse(s2.begin(),s2.end());\r\n        int dp[s.size()+1][s.size()+1];\r\n        memset(dp,0,sizeof(dp));\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            for(int j=1;j<=n;j++)\r\n            {\r\n                dp[i][j]=(s1[i-1]==s2[j-1])?1+dp[i-1][j-1]:max(dp[i][j-1],dp[i-1][j]);\r\n            }\r\n        }\r\n        return dp[n][n];\r\n    }\r\n    int maxProduct(string s) \r\n    {\r\n        int ans=0;\r\n        int n=s.size();\r\n        for(int i=1;i<(1<<n)-1;i++)\r\n        {\r\n            string s1=\"\",s2=\"\";\r\n            for(int j=0;j<n;j++)\r\n            {\r\n                if(i&(1<<j))\r\n                {\r\n                    s1.push_back(s[j]);\r\n                }\r\n                else\r\n                {\r\n                    s2.push_back(s[j]);\r\n                }\r\n            }\r\n            ans=max(ans,lca(s1)*lca(s2));\r\n        }\r\n        return ans;\r\n    }\r\n    \r\n};",
    "python": "class Solution:\r\n    def maxProduct(self, s: str) -> int:\r\n        # n <= 12, which means the search space is small\r\n        n = len(s)\r\n        arr = []\r\n        \r\n        for mask in range(1, 1<<n):\r\n            subseq = ''\r\n            for i in range(n):\r\n                # convert the bitmask to the actual subsequence\r\n                if mask & (1 << i) > 0:\r\n                    subseq += s[i]\r\n            if subseq == subseq[::-1]:\r\n                arr.append((mask, len(subseq)))\r\n        \r\n        result = 1\r\n        for (mask1, len1), (mask2, len2) in product(arr, arr):\r\n            # disjoint\r\n            if mask1 & mask2 == 0:\r\n                result = max(result, len1 * len2)\r\n        return result",
    "java": "// Runtime: 952 ms (Top 21.5%) | Memory: 44.16 MB (Top 54.1%)\r\n\r\nclass Solution {\r\n    int res = 0;\r\n    \r\n    public int maxProduct(String s) {\r\n        char[] strArr = s.toCharArray();\r\n        dfs(strArr, 0, \"\", \"\");\r\n        return res;\r\n    }\r\n\r\n    public void dfs(char[] strArr, int i, String s1, String s2){\r\n        if(i >= strArr.length){\r\n            if(isPalindromic(s1) && isPalindromic(s2))\r\n                res = Math.max(res, s1.length()*s2.length());\r\n            return;\r\n        }\r\n        dfs(strArr, i+1, s1 + strArr[i], s2);\r\n        dfs(strArr, i+1, s1, s2 + strArr[i]);\r\n        dfs(strArr, i+1, s1, s2);\r\n    }\r\n\r\n    public boolean isPalindromic(String str){\r\n        int j = str.length() - 1;\r\n        char[] strArr = str.toCharArray();\r\n        for (int i = 0; i < j; i ++){\r\n            if (strArr[i] != strArr[j])\r\n                return false;\r\n            j--;\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "// Runtime: 1058 ms (Top 35.29%) | Memory: 48.5 MB (Top 52.94%)\r\n/**\r\n * @param {string} s\r\n * @return {number}\r\n */\r\nvar maxProduct = function(s) {\r\n    const n = s.length;\r\n    let map = new Map();\r\n    let res = 0;\r\n\r\n    for(let mask = 1; mask < 2 ** n;mask++){\r\n        let str = \"\";\r\n        for(let i = 0; i < n;i++){\r\n            if(mask & (1 << i)){\r\n                str += s.charAt(n - 1 - i);\r\n            }\r\n        }\r\n        if(isPalindrom(str)){\r\n            let length = str.length;\r\n            map.set(mask,length);\r\n        }\r\n    }\r\n\r\n    map.forEach((l1,m1) => {\r\n        map.forEach((l2,m2) => {\r\n            if((m1 & m2) == 0){\r\n                res = Math.max(res,l1 * l2);\r\n            }\r\n        })\r\n    })\r\n\r\n    return res;\r\n};\r\n\r\nfunction isPalindrom(str){\r\n    let l = 0;\r\n    let r = str.length - 1;\r\n\r\n    while(l < r){\r\n        if(str.charAt(l) != str.charAt(r)){\r\n            return false;\r\n        }\r\n        l++;\r\n        r--;\r\n    }\r\n\r\n    return true;\r\n}"
  }
}
