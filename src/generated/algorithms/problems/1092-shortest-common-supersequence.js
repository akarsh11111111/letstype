export default {
  "id": 1092,
  "name": "Shortest Common Supersequence",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/shortest-common-supersequence",
  "relativeDir": "S/Shortest Common Supersequence",
  "slug": "1092-shortest-common-supersequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 71,
    "java": 40,
    "python": 13,
    "javascript": 62
  },
  "languages": {
    "cpp": "// Runtime: 22 ms (Top 70.57%) | Memory: 10.5 MB (Top 99.25%)\r\nclass Solution\r\n{\r\n    string LCS(string str1, string str2, int m, int n)\r\n    {\r\n        int t[m+1][n+1];\r\n        string ans = \"\";\r\n        for(int i = 0;i < m+1; ++i)\r\n        {\r\n            for(int j = 0; j< n+1; ++j)\r\n            {\r\n                if(i == 0 || j == 0)\r\n                    t[i][j] = 0;\r\n            }\r\n        }\r\n\r\n        for(int i = 1; i < m+1; ++i)\r\n        {\r\n            for(int j = 1; j < n+1; ++j)\r\n            {\r\n                if(str1[i-1] == str2[j-1])\r\n                    t[i][j] = 1 + t[i-1][j-1];\r\n                else\r\n                    t[i][j] = max(t[i-1][j], t[i][j-1]);\r\n            }\r\n        }\r\n        int i = m, j = n;\r\n        while(i > 0 && j > 0)\r\n        {\r\n            if(str1[i-1] == str2[j-1])\r\n            {\r\n                ans.push_back(str1[i-1]);\r\n                --i;\r\n                --j;\r\n            }\r\n\r\n            else if(t[i][j-1] > t[i-1][j])\r\n            {\r\n                ans.push_back(str2[j-1]);\r\n                --j;\r\n            }\r\n\r\n            else\r\n            {\r\n                ans.push_back(str1[i-1]);\r\n                --i;\r\n            }\r\n        }\r\n        while( i > 0)\r\n        {\r\n            ans.push_back(str1[i-1]);\r\n            --i;\r\n        }\r\n        while( j > 0)\r\n        {\r\n            ans.push_back(str2[j-1]);\r\n            --j;\r\n        }\r\n        reverse(ans.begin(),ans.end());\r\n        return ans;\r\n    }\r\n\r\npublic:\r\n    string shortestCommonSupersequence(string str1, string str2) {\r\n\r\n        int m = str1.length();\r\n        int n = str2.length();\r\n\r\n        return LCS(str1, str2, m ,n);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def shortestCommonSupersequence(self, A, B):\r\n        n, m = len(A), len(B)\r\n        dp = [B[:i] for i in range(m + 1)]\r\n        for i in range(n):\r\n            prev = A[:i]\r\n            dp[0] = A[:i + 1]\r\n            for j in range(m):\r\n                if A[i] == B[j]:\r\n                    prev, dp[j + 1] = dp[j + 1], prev + A[i]\r\n                else:\r\n                    prev, dp[j + 1] = dp[j + 1], min(dp[j] + B[j], dp[j + 1] + A[i], key = len)\r\n        return dp[-1]",
    "java": "class Solution {\r\n    public String shortestCommonSupersequence(String str1, String str2) {\r\n        int m=str1.length();\r\n        int n=str2.length();\r\n        int[][] dp=new int[m+1][n+1];\r\n        for(int i=1;i<m+1;i++){\r\n            for(int j=1;j<n+1;j++){\r\n                if(str1.charAt(i-1)==str2.charAt(j-1)){\r\n                    dp[i][j]=1+dp[i-1][j-1];\r\n                }else{\r\n                    dp[i][j]=Math.max(dp[i][j-1],dp[i-1][j]);\r\n                }\r\n            }\r\n        }\r\n        int i=m,j=n;\r\n        String res=\"\";\r\n        while(i>0 && j>0){\r\n            if(str1.charAt(i-1)==str2.charAt(j-1)){\r\n                res=str1.charAt(i-1)+res;\r\n                i--;\r\n                j--;\r\n            }else if(dp[i-1][j]>dp[i][j-1]){\r\n                res=str1.charAt(i-1)+res;\r\n                i--;\r\n            }else{\r\n                res=str2.charAt(j-1)+res;\r\n                j--;\r\n            }\r\n        }\r\n        while(i>0){\r\n            res=str1.charAt(i-1)+res;\r\n            i--;\r\n        }\r\n        while(j>0){\r\n            res=str2.charAt(j-1)+res;\r\n            j--;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var shortestCommonSupersequence = function(str1, str2) {\r\n    const lcs = getLCS(str1, str2)\r\n    \r\n    let i = 0\r\n    let j = 0\r\n\r\n    let result = ''\r\n    for (const c of lcs) {\r\n        while(i < str1.length && str1[i] !== c) {\r\n            result += str1[i]\r\n            i++\r\n        }\r\n        while(j < str2.length && str2[j] !== c) {\r\n            result += str2[j]\r\n            j++\r\n        }\r\n        result += c\r\n        i++\r\n        j++\r\n    }\r\n    while(i < str1.length) {\r\n        result += str1[i]\r\n        i++\r\n    }\r\n    while(j < str2.length) {\r\n        result += str2[j]\r\n        j++\r\n    }\r\n    return result\r\n};\r\n\r\nfunction getLCS (a, b) {\r\n    const t = new Array(a.length + 1).fill(0).map(() => new Array(b.length + 1).fill(0))\r\n    \r\n    for (let i = 1; i <= a.length; i++) {\r\n        for (let j = 1; j <= b.length; j++) {\r\n            if (a[i - 1] === b[j - 1]) {\r\n                t[i][j] = 1 + t[i - 1][j - 1]\r\n            } else {\r\n                t[i][j] = Math.max(t[i - 1][j], t[i][j - 1])\r\n            }\r\n        }\r\n    }\r\n    \r\n    let i = a.length\r\n    let j = b.length\r\n    let result = ''\r\n    while(i > 0 && j > 0) {\r\n        if (a[i-1] === b[j-1]) {\r\n            result += a[i-1]\r\n            i--\r\n            j--\r\n        } else {\r\n            if (t[i-1][j] > t[i][j-1]) {\r\n                i--\r\n            } else {\r\n                j--\r\n            }\r\n        }\r\n    }\r\n    return result.split('').reverse().join('')\r\n}"
  }
}
