export default {
  "id": 1012,
  "name": "Numbers With Repeated Digits",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/numbers-with-repeated-digits",
  "relativeDir": "N/Numbers With Repeated Digits",
  "slug": "1012-numbers-with-repeated-digits",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 62,
    "java": 45,
    "python": 24
  },
  "languages": {
    "cpp": "class Solution {\r\n\tpublic:\r\n\tlong long int dp[11][2][2][(1<<10)];\r\n\tint f(int idx,bool flag,bool repeat,int mask,string &s){\r\n\r\n\t\tif(idx==s.size()){\r\n\t\t\treturn repeat;\r\n\t\t}\r\n\r\n\t\tif(dp[idx][flag][repeat][mask]!=-1) return dp[idx][flag][repeat][mask];\r\n\r\n\t\tint limit = s[idx]-'0';\r\n\t\tif(flag) limit = 9;\r\n\r\n\t\tint ans=0;\r\n\r\n\t\tfor(int digit=0;digit<=limit;digit++){\r\n\r\n\r\n\r\n\t\t\t if(digit < (s[idx]-'0')){\r\n\r\n\t\t\t\t\tif(digit==0 and mask==0){\r\n\t\t\t\t\t\t ans+=f(idx+1,true,false,mask,s);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\telse if(mask&(1<<digit)){\r\n\t\t\t\t\t\tans+=f(idx+1,true,true,mask,s);\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse{\r\n\t\t\t\t\t\tans+=f(idx+1,true,repeat,mask | (1<<digit),s);\r\n\t\t\t\t\t}\r\n\r\n\r\n\t\t\t}\r\n\t\t\telse{\r\n\t\t\t\tif(digit==0 and mask==0){\r\n\t\t\t\t\tans+=f(idx+1,flag,false,mask,s);\r\n\t\t\t\t}\r\n\r\n\t\t\t\t\telse if(mask&(1<<digit)){\r\n\t\t\t\t\t\tans+=f(idx+1,flag,true,mask,s);\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse{\r\n\t\t\t\t\t\tans+=f(idx+1,flag,repeat,mask | (1<<digit),s);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t}\r\n\r\n\t\t}\r\n\r\n\t\treturn dp[idx][flag][repeat][mask]=ans;\r\n\t}\r\n\tint numDupDigitsAtMostN(int n) {\r\n\r\n\t\tstring r = to_string(n);\r\n\t\tmemset(dp,-1,sizeof dp);\r\n\r\n\r\n\r\n\t\treturn f(0,false,false,0,r);\r\n\t}",
    "python": "class Solution:\r\n    def numDupDigitsAtMostN(self, n: int) -> int:\r\n        \r\n        nums = [int(i) for i in str(n+1)] # digits in n+1\r\n        d = len(nums) # number of digits in n+1\r\n        res = 0 # number of no duplicates\r\n        \r\n        # count no duplicates for numbers with <d digits\r\n        for i in range(1,d):\r\n            res += 9 * math.perm(9,i-1)\r\n        \r\n\t\t# count no duplicates for numbers with d digits and smaller than n\r\n        for i, x in enumerate(nums):\r\n            if i == 0:\r\n                digit_range = range(1,x) # first digit can not be 0\r\n            else:\r\n                digit_range = range(x)\r\n                \r\n            for y in digit_range:\r\n                if y not in nums[:i]:\r\n                    res += math.perm(9-i,d-1-i)\r\n            if x in nums[:i]: break\r\n                \r\n        return n - res",
    "java": "// Runtime: 1 ms (Top 98.74%) | Memory: 41.1 MB (Top 50.94%)\r\nclass Solution {\r\n    public int numDupDigitsAtMostN(int n) {\r\n        // 983582\r\n        // 108318\r\n        int ttl = n++;\r\n        int ans = 0;\r\n        List<Integer> list = new ArrayList<>();\r\n        while(n>0){\r\n            list.add(n%10);\r\n            n/=10;\r\n        }\r\n        for (int i = 1; i < list.size(); i++){\r\n            ans+=9*find(i-1, 9);\r\n        }\r\n        boolean[] seen = new boolean[10];\r\n        for (int i = list.size(), d = 9; i > 0; --i, d--){\r\n            int count = i == list.size()? list.get(i-1)-1: list.get(i-1);\r\n            for (int j = 0; j < list.get(i-1); j++){\r\n                if (seen[j]){\r\n                    count--;\r\n                }\r\n            }\r\n            ans += count*find(i-1, d);\r\n            if (seen[list.get(i-1)]){\r\n                break;\r\n            }\r\n            seen[list.get(i-1)]=true;\r\n        }\r\n        return ttl-ans;\r\n    }\r\n\r\n    private int find(int n, int d){\r\n        // dCn*n!\r\n        // d!/(d-n)/(d-n).../1\r\n        int ans = 1;\r\n        for (int i = 1; i <= d; i++){\r\n            ans *= i;\r\n        }\r\n        for (int i = n+1; i <= d; i++){\r\n            ans /= (i-n);\r\n        }\r\n        return ans;\r\n    }\r\n}"
  }
}
