export default {
  "id": 940,
  "name": "Distinct Subsequences II",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/distinct-subsequences-ii",
  "relativeDir": "D/Distinct Subsequences II",
  "slug": "0940-distinct-subsequences-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 29,
    "python": 7
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int distinctSubseqII(string s) {\r\n      \r\n        int n=s.length();\r\n        int mod=1e9+7;\r\n        \r\n        vector<long long>dp(n+1);\r\n        unordered_map<char,int>mp;\r\n        \r\n        dp[0]=1;\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            dp[i]=(2*dp[i-1])%mod;\r\n            char ch=s[i-1];\r\n            \r\n            if(mp.find(ch)!=mp.end())\r\n            {\r\n                int j=mp[ch];\r\n                dp[i]=(dp[i]-dp[j-1]+mod)%mod;\r\n            }\r\n            mp[s[i-1]]=i%mod;\r\n            \r\n        }\r\n        return dp[n]-1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def distinctSubseqII(self, s: str) -> int:\r\n        #number of subsequences that startwith each alphabet\r\n        startwith = [0]*26\r\n        for c in s[::-1]:\r\n            startwith[ord(c)-ord('a')] = sum(startwith) + 1\r\n        return sum(startwith)%(10**9+7)",
    "java": "// Runtime: 9 ms (Top 61.84%) | Memory: 42.7 MB (Top 63.49%)\r\nclass Solution {\r\n        public int distinctSubseqII(String s) {\r\n            int mod = (int)1e9+7;\r\n            //For storing the last occurred index of a character.\r\n            Integer li[] = new Integer[26];\r\n            int n = s.length();\r\n            int[] dp = new int[n+1];\r\n            //one empty string possible for a string of length 0.\r\n            dp[0]=1;\r\n            char[] c = s.toCharArray();\r\n            for(int i=1;i<=n;i++){\r\n                //If the character is first occurred then 2 cases\r\n                //Case 1 : we will not concat the character with previous subsequences\r\n                //Case 2 : we will concat it.\r\n                //Therefore, we multiply 2 with previous count.\r\n                int curr = (2 * (dp[i - 1] % mod)) % mod;\r\n                //Getting the int index from char for checking the previous occurrence in li[]\r\n                int idx=c[i-1]-'a';\r\n                //If previously occurred then we have to subtract the subsequences which are made\r\n                //till li[idx-1] because they would be duplicated and counted twice unnecessarily\r\n                if(li[idx]!=null) dp[i]=(curr -dp[li[idx]-1] +mod)%mod;\r\n                else dp[i]= curr;\r\n                li[idx]=i;\r\n            }\r\n            //Doing -1 because we don't have to count the empty string.\r\n            return dp[n]-1;\r\n        }\r\n    }"
  }
}
