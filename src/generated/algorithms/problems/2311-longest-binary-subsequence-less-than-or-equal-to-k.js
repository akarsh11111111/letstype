export default {
  "id": 2311,
  "name": "Longest Binary Subsequence Less Than or Equal to K",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k",
  "relativeDir": "L/Longest Binary Subsequence Less Than or Equal to K",
  "slug": "2311-longest-binary-subsequence-less-than-or-equal-to-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 27,
    "python": 9,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 1368 ms (Top 5.00%) | Memory: 264.8 MB (Top 5.88%)\r\n\r\nclass Solution {\r\npublic:\r\n    int ans = 0;\r\n    int f(int i,int size, int sum, string &s, vector<vector<int>>&dp){\r\n        if(i<0){\r\n            return 0;\r\n        }\r\n        if(dp[i][size] != -1){\r\n            return dp[i][size];\r\n        }\r\n        int no = f(i-1,size,sum,s,dp);\r\n        int yes = 0;\r\n        if((sum-(s[i]-'0')*pow(2,size)) >=0){\r\n            yes = 1+ f(i-1,size+1,(sum-(s[i]-'0')*pow(2,size)),s,dp);\r\n        }\r\n        return dp[i][size]=max(no,yes);\r\n    }\r\n    int longestSubsequence(string s, int k) {\r\n\r\n        int n = s.size();\r\n        vector<vector<int>>dp(n,vector<int>(n,-1));\r\n        return f(n-1,0,k,s,dp);\r\n\r\n    }\r\n};",
    "python": "// Runtime: 46 ms (Top 62.5%) | Memory: 16.50 MB (Top 18.75%)\r\n\r\nclass Solution:\r\n    def longestSubsequence(self, s: str, k: int) -> int:\r\n    \r\n        end, n  = len(s)-1, s.count(\"0\")    \r\n        while end >=0 and  int(s[end:], 2)<= k:\r\n            end-=1\r\n        return n+ s[end+1:].count(\"1\")",
    "java": "// Runtime: 1 ms (Top 100.0%) | Memory: 41.60 MB (Top 67.53%)\r\n\r\nclass Solution {\r\n    public int longestSubsequence(String s, int k) {\r\n        int z=0;\r\n        //count zero\r\n        for(int i=0;i<s.length();i++)if(s.charAt(i)=='0')z++;\r\n\r\n        int num=0,base=1,len=0;\r\n\t\t//take as many ones from right as possible until they do not make the num>k\r\n        for(int i=s.length()-1;i>=0;i--){\r\n            \r\n            if(num+base>k)break;\r\n            if(s.charAt(i)=='1'){\r\n               num+=base;\r\n            }\r\n            else {\r\n\t\t\t//remove already taken zeros from zeros count\r\n                z--;\r\n            }\r\n            base*=2;\r\n            len++;\r\n        }\r\n        \r\n        return len+z;\r\n    }\r\n}",
    "javascript": "// Runtime: 117 ms (Top 41.38%) | Memory: 44.1 MB (Top 58.62%)\r\n/**\r\n * @param {string} s\r\n * @param {number} k\r\n * @return {number}\r\n */\r\n\r\nvar longestSubsequence = function(s, k) {\r\n    let count = 0;\r\n    let j = s.length - 1; // starting from the last digit\r\n    let i = 0; // binary number position\r\n    let acc = 0;\r\n\r\n    while(j >= 0){\r\n        let positionNumber = Number(s[j]) * Math.pow(2, i);\r\n        j--;\r\n        i++;\r\n        if(acc + positionNumber > k) continue;\r\n\r\n        acc += positionNumber;\r\n        count++;\r\n    }\r\n\r\n    return count;\r\n};"
  }
}
