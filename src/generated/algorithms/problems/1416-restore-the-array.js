export default {
  "id": 1416,
  "name": "Restore The Array",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/restore-the-array",
  "relativeDir": "R/Restore The Array",
  "slug": "1416-restore-the-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 26,
    "python": 61,
    "javascript": 32
  },
  "languages": {
    "cpp": "// Runtime: 140 ms (Top 39.77%) | Memory: 21.9 MB (Top 32.10%)\r\nclass Solution {\r\npublic:\r\n    int mod=1e9+7;\r\n    int f(int i,int k,string &s,vector<int> &dp){\r\n        if(i==s.size()) return 1;//empty string\r\n        if(dp[i]!=-1) return dp[i];//Memoization step\r\n        if(s[i]=='0') return 0;//leading zeroes\r\n        long long num=0;\r\n        int ans=0;\r\n        for(int j=i;j<s.size();j++){\r\n            num=num*10+s[j]-'0';\r\n            if(num>k) break;\r\n            ans+=f(j+1,k,s,dp);//create num and call for next index\r\n            ans%=mod;\r\n        }\r\n        return dp[i]=ans;//storing answer\r\n    }\r\n    int numberOfArrays(string s, int k) {\r\n        int n=s.size();\r\n        vector<int> dp(n+1,-1);\r\n        return f(0,k,s,dp);\r\n        // dp[i]=total ways to\r\n        // create possible arrays starting at index i\r\n    }\r\n};",
    "python": "\"\"\"\r\n                                \"1317\"\r\n[1, 3, 1, 7]        -> [1] * nums(317, k)\r\n[1, 3, 17]         \r\n[1, 31, 7]\r\n[1, 317]   \r\n[13, 1, 7]          -> [13] * nums(17, k)\r\n[13, 17]\r\n[131, 7]\r\n[1317]\r\n\r\n\r\n                            \"2020\"    k = 30\r\n[2000] x\r\n[2, 020] x\r\n[20, 20]\r\n\r\n                            \"67890\" k = 90\r\n\r\n[6, 7890] x\r\n[6, 7, 8, 9, 0] x\r\n[6, 7, 8, 90]   OK\r\n[6, 78, 90]     OK\r\n[67, 8, 90]     OK\r\n[67, 89, 0] x\r\n[678, 90] x\r\nbreak because 678 > k (90), so neither 678, 6789 would be possible numbers\r\n\r\n\"\"\"\r\n\r\n\r\n\r\nclass Solution:\r\n    def num_arrays(self, s, k, memo):\r\n        if not s:\r\n            return 0\r\n        memo_ans = memo.get(s)\r\n        if memo_ans is not None:\r\n            return memo_ans\r\n        \r\n        num = int(s)\r\n        if num <= k:\r\n            counter = 1\r\n        else:\r\n            counter = 0\r\n    \r\n        for i in range(len(s) - 1):\r\n            # Stop when the number to the right side of the array is greater than k\r\n            if int(s[:i + 1]) > k:\r\n                break\r\n            # Don't count leading zeros\r\n            if s[i + 1] == \"0\":\r\n                continue\r\n            counter += self.num_arrays(s[i + 1:], k, memo)\r\n        ans = counter % (10 ** 9 + 7)\r\n        memo[s] = ans\r\n        return ans\r\n    \r\n    def numberOfArrays(self, s: str, k: int) -> int:\r\n        memo = {}\r\n        return self.num_arrays(s, k, memo)",
    "java": "// Runtime: 126 ms (Top 51.52%) | Memory: 71.7 MB (Top 43.43%)\r\nclass Solution {\r\n    static long mod;\r\n    private long solve(int idx,String s,int k,long[] dp){\r\n        if(idx==s.length())\r\n            return 1;\r\n        if(dp[idx]!=-1)\r\n            return dp[idx];\r\n        long max=0,number=0;\r\n        for(int i=idx;i<s.length();i++){\r\n            int temp=s.charAt(i)-'0';\r\n            number=(number*10)+temp;\r\n            if(number>=1 && number<=k){\r\n                max=(max+solve(i+1,s,k,dp))%mod;\r\n            }else\r\n                break;\r\n        }\r\n        return dp[idx]=max;\r\n    }\r\n    public int numberOfArrays(String s, int k) {\r\n        mod = (int)1e9+7;\r\n        long[] dp=new long[s.length()+1];\r\n        Arrays.fill(dp,-1);\r\n        return (int)solve(0,s,k,dp);\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {string} s\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar numberOfArrays = function(s, k) {\r\n    var cache={};\r\n    return backtrack(0)%1000000007;\r\n    function backtrack(pos){\r\n        let orignalPos = pos;\r\n        if(cache[pos]!==undefined){\r\n            return cache[pos];\r\n        }\r\n        let count=0;\r\n        let digit=0;\r\n        while(pos<s.length){\r\n            digit = digit*10 + parseInt(s[pos]);\r\n            if(digit<=k && pos+1<=s.length-1 && s[pos+1]!=='0'){//If we can call backtrack on next position. \r\n                count+=(backtrack(pos+1)%1000000007);\r\n            }\r\n            if(digit>k){\r\n                break;\r\n            }\r\n            pos++;\r\n        }    \r\n        if(pos===s.length && digit<=k){//If this number became the only digit in the array, for string starting at position orignalPos. This also completed the etire string. \r\n            count++;\r\n        }\r\n        cache[orignalPos]=count;\r\n        return count;\r\n    }\r\n};"
  }
}
