export default {
  "id": 1745,
  "name": "Palindrome Partitioning IV",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/palindrome-partitioning-iv",
  "relativeDir": "P/Palindrome Partitioning IV",
  "slug": "1745-palindrome-partitioning-iv",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 27,
    "python": 22,
    "javascript": 43
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tvector<vector<int>> dp1;\r\n\tbool isPalindrome(string& s, int i, int j) {\r\n\t\tif (i >= j) return true;\r\n\t\tif (dp1[i][j] != -1) return dp1[i][j];\r\n\t\tif (s[i] == s[j]) return dp1[i][j] = isPalindrome(s, i + 1, j - 1);\r\n\t\treturn dp1[i][j] = false;\r\n\t}\r\n\tbool checkPartitioning(string s) {\r\n\t\tint n = s.size();\r\n\t\tdp1.resize(n,vector<int> (n,-1));\r\n\t\tfor(int i=0;i<n;i++){\r\n\t\t\tfor(int j=i+1;j<n-1;j++){\r\n\t\t\t\tif(isPalindrome(s,0,i) && isPalindrome(s,i+1,j) && isPalindrome(s,j+1,n-1))\r\n\t\t\t\t\treturn true;\r\n\t\t\t}\r\n\t\t}\r\n\t\treturn false;\r\n\t}\r\n};",
    "python": "# Runtime: 4163 ms (Top 80.92%) | Memory: 673.9 MB (Top 5.26%)\r\nclass Solution:\r\n    def checkPartitioning(self, s: str) -> bool:\r\n        n = len(s)\r\n\r\n        @lru_cache(None)\r\n        def pal(i,j):\r\n            if i == j:\r\n                return True\r\n            if s[i] != s[j]:\r\n                return False\r\n            if i+1 == j:\r\n                return True\r\n            else:\r\n                return pal(i+1,j-1)\r\n\r\n        for i in range(n-2):\r\n            if pal(0,i):\r\n                for j in range(i+1,n-1):\r\n                    if pal(i+1,j) and pal(j+1,n-1):\r\n                        return True\r\n        return False",
    "java": "class Solution {\r\n    public boolean checkPartitioning(String s) {\r\n        int n = s.length();\r\n        boolean[][] dp = new boolean[n][n];\r\n        for(int g=0 ; g<n ; g++){\r\n            for(int i=0, j=g ; j<n ; j++, i++){\r\n                if(g == 0)\r\n                    dp[i][j] = true;\r\n                else if(g == 1)\r\n                    dp[i][j] = (s.charAt(i) == s.charAt(j)) ? true : false;\r\n                else{\r\n                    dp[i][j] = (dp[i+1][j-1]&((s.charAt(i) == s.charAt(j)) ? true : false));\r\n                }\r\n            }\r\n        }\r\n        for(int i=0 ; i<n-2 ; i++){\r\n             if(dp[0][i]){\r\n                for(int j=i+1 ; j<n-1 ; j++){\r\n                    if(dp[i+1][j] && dp[j+1][n-1]){\r\n                        return true;\r\n                    }\r\n                }\r\n             }\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} s\r\n * @return {boolean}\r\n */\r\nvar checkPartitioning = function(s) {\r\n    // create a dp that will represent the starting and ending index of a substring\r\n    // if dp[i][j] is true that means that the string starting from i and ending at j is a palindrome\r\n    const dp = new Array(s.length).fill(null).map(() => new Array(s.length).fill(false));\r\n    \r\n    // all substrings of length 1 are palindromes so we mark all matching indices as true\r\n    for (let i = 0; i < s.length; i++) {\r\n        dp[i][i] = true;\r\n    }\r\n    \r\n    \r\n    // slowly grow the substring from each index\r\n    // we will know the substring is a palindrom if the substring prior was a palindrome\r\n    for (let lengthOfSubString = 2; lengthOfSubString <= s.length; lengthOfSubString++) {\r\n        for (let startingIndex = 0; startingIndex + lengthOfSubString <= s.length; startingIndex++) {\r\n            \r\n            // if it's not the same character, then it can not be a palindrome\r\n            if (s[startingIndex] !== s[startingIndex + lengthOfSubString - 1]) continue;\r\n            \r\n            if (lengthOfSubString <= 3 || \r\n                \r\n                // this checks if the prior substring was a palindrome\r\n                dp[startingIndex + 1][startingIndex + lengthOfSubString - 2]) {\r\n                \r\n                dp[startingIndex][startingIndex + lengthOfSubString - 1] = true;\r\n            }\r\n        }\r\n    }\r\n    \r\n    // find out if any 3 of the partitions are palindromes\r\n    for (let i = 0; i < s.length; i++) {\r\n        for (let j = i + 1; j < s.length; j++) {\r\n            if (dp[0][i] && dp[i + 1][j] && dp[j + 1][s.length - 1]) return true;\r\n        }\r\n    }\r\n    \r\n    // if we haven't found a partition, return false\r\n    return false;\r\n};"
  }
}
