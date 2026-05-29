export default {
  "id": 1771,
  "name": "Maximize Palindrome Length From Subsequences",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximize-palindrome-length-from-subsequences",
  "relativeDir": "M/Maximize Palindrome Length From Subsequences",
  "slug": "1771-maximize-palindrome-length-from-subsequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 89,
    "java": 22,
    "python": 19
  },
  "languages": {
    "cpp": "// Runtime: 319 ms (Top 38.38%) | Memory: 70.9 MB (Top 7.75%)\r\nclass Solution {\r\npublic:\r\n\r\n    //use to memoize recursive solution\r\n    vector<vector<int>> v;\r\n\r\n    /*\r\n    boundary of both strings,\r\n    l is length of concatenated string,\r\n    ans is used to store final result\r\n    */\r\n\r\n    int boundary,l,ans;\r\n\r\n    //Longest palindromic string\r\n    int find(string &s,int i,int j)\r\n    {\r\n        // i->left, j->right\r\n        //if left index is greater than right then return\r\n        if(i>j) return 0;\r\n\r\n        //if already calculated, return result\r\n        if(v[i][j]!=-1) return v[i][j];\r\n\r\n        //if we are at stage where i==j,\r\n        //means here single character\r\n        //count it and increase left boundary and decrease right boundary\r\n        if(i==j)\r\n        {\r\n            return v[i][j]=1+find(s,i+1,j-1);\r\n        }\r\n\r\n        //if two characters are same, count these two and\r\n        //increase left boundary and decrease right boundary\r\n        //and call function\r\n        if(s[i]==s[j])\r\n        {\r\n\r\n            int k=v[i][j]=2+find(s,i+1,j-1);\r\n\r\n            /*\r\n\r\n             if left character is from word1 and\r\n             right character is from word2\r\n             then store maximum result in ans\r\n\r\n             NOTE: till (boundary-1) index s stored word1\r\n             and from index (boundary) s stored word2\r\n\r\n            */\r\n            if(i<boundary && j>=boundary)\r\n            {\r\n                ans=max(ans,k);\r\n            }\r\n            return k;\r\n        }\r\n\r\n        //if characters are not same,\r\n        //try both increase left index and make right index constent\r\n        // or make left constant or decrease right index\r\n        // and return max of both\r\n        else\r\n        {\r\n            return v[i][j]=max(find(s,i+1,j),find(s,i,j-1));\r\n        }\r\n    }\r\n\r\n    int longestPalindrome(string word1, string word2) {\r\n\r\n        //store boundary of strings\r\n        boundary=word1.size();\r\n\r\n        //concatenate both strings\r\n        word1+=word2;\r\n\r\n        //find total length of string\r\n        l=word1.length();\r\n\r\n        //used to memoize solution\r\n        v=vector<vector<int>> (l+1,vector<int> (l+1,-1));\r\n\r\n        //call function\r\n        int k=find(word1,0,l-1);\r\n\r\n        //return final ans\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 932 ms (Top 96.15%) | Memory: 70.20 MB (Top 90.38%)\r\n\r\nclass Solution:\r\n\tdef longestPalindrome(self, word1: str, word2: str) -> int:\r\n\t\tres=0\r\n\t\tnew_word=word1+word2\r\n\t\tn,mid=len(word1)+len(word2),len(word1)\r\n\t\tdp=[[0]*n for _ in range(n)]\r\n\t\tfor i in range(n):\r\n\t\t\tdp[i][i]=1\r\n\t\tfor l in range(n-2,-1,-1):\r\n\t\t\tfor r in range(l+1,n,1):\r\n\t\t\t\tif new_word[l]==new_word[r]:\r\n\t\t\t\t\tdp[l][r]=(dp[l+1][r-1] if r-1>=l+1 else 0)+2\r\n\t\t\t\t\tif l<mid and r>=mid:\r\n\t\t\t\t\t\tres=max(res,dp[l][r])\r\n\t\t\t\telse:\r\n\t\t\t\t\tdp[l][r]=max(dp[l+1][r],dp[l][r-1])\r\n\t\treturn res",
    "java": "// Runtime: 545 ms (Top 8.4%) | Memory: 230.95 MB (Top 8.4%)\r\n\r\nclass Solution {\r\n    public int longestPalindrome(String word1, String word2) {\r\n        String lWord = word1 + word2;\r\n        return palindrome(lWord, 0, lWord.length()-1, word1.length(), false, \r\n                          new int[lWord.length()][lWord.length()][2]);\r\n    }\r\n    \r\n    private int palindrome(String word, int start, int end, int boundary, boolean isFound, int[][][] dp) {\r\n        if ((!isFound && (start >= boundary || end < boundary)) || (start > end))\r\n            return 0;\r\n        \r\n        if (dp[start][end][isFound?0:1] != 0)\r\n            return dp[start][end][isFound?0:1];\r\n        \r\n        return dp[start][end][isFound?0:1] = word.charAt(start) == word.charAt(end) ? \r\n            ((start == end ? 1: 2) + palindrome(word, start+1, end-1, boundary, true, dp)) : \r\n                Math.max(palindrome(word, start+1, end, boundary, isFound, dp), \r\n                         palindrome(word, start, end-1, boundary, isFound, dp));\r\n    }\r\n}"
  }
}
