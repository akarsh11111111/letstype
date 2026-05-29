export default {
  "id": 600,
  "name": "Non-negative Integers without Consecutive Ones",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/non-negative-integers-without-consecutive-ones",
  "relativeDir": "N/Non-negative Integers without Consecutive Ones",
  "slug": "0600-non-negative-integers-without-consecutive-ones",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 48,
    "java": 23,
    "python": 25,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int dp[31][2];\r\n    vector<int> f(){ \r\n        vector<int> res(31, 1);\r\n        dp[1][0]=0;\r\n        dp[1][1]=1;\r\n        for(int i=2; i<31; i++){\r\n            dp[i][0]=dp[i-1][0]+dp[i-1][1];\r\n            dp[i][1]=dp[i-1][0];\r\n        }\r\n        \r\n        \r\n        for(int i=1; i<31; i++){\r\n            res[i]=res[i-1]+dp[i][0]+dp[i][1];\r\n        }\r\n\r\n        res[1]=2;\r\n        return res;\r\n    }\r\n    \r\n    int findIntegers(int n) {\r\n        int res=0;\r\n        int bits=0;\r\n        int temp=n;\r\n        vector<int> v;\r\n        while(temp>0){\r\n            bits++;\r\n            v.push_back(temp&1);\r\n            temp=temp>>1;\r\n        }\r\n        vector<int> nums=f();\r\n        \r\n        bool valid=true, isValid=true;\r\n\r\n        for(int i=bits-2;i>=0;i--){\r\n            if(v[i]==1 && v[i+1]==1){\r\n                res+=nums[i];\r\n                isValid=false;\r\n                break;\r\n            }else if(v[i]==1)\r\n                res+=nums[i];\r\n        }\r\n        \r\n        res+=nums[bits-1];\r\n        return isValid==true ? res+1:res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findIntegers(self, n: int) -> int:\r\n        b=(bin(n).replace(\"0b\",\"\"))\r\n        dp=[[[[-1 for i in range(2)] for i in range(2)] for i in range(2)] for i in range(30)]\r\n        def fun(i,last,tight,leading_zeros):\r\n            if i==len(str(b)):\r\n                return 1\r\n            if dp[i][tight][leading_zeros][last]!=-1:\r\n                return dp[i][tight][leading_zeros][last]\r\n            end=1\r\n            if tight==1:\r\n                end = int(b[i])\r\n            res=0\r\n            for j in range(end+1):\r\n                if j==0 and leading_zeros==1:\r\n                    res+=fun(i+1,j,tight&int(j==end),1)\r\n                else:\r\n                    if j==0:\r\n                        res+=fun(i+1,j,tight&int(j==end),0)\r\n                    else:\r\n                        if last!=j:\r\n                            res+=fun(i+1,j,tight&int(j==end),0)\r\n            dp[i][tight][leading_zeros][last] = res\r\n            return res\r\n        return fun(0,0,1,1)",
    "java": "class Solution {\r\n    public int findIntegers(int n) {\r\n        int val=0,res=0,cn=n,digi=0,prevdig=0,i;//digi means bin digi\r\n        while(cn>0){\r\n            cn=cn>>1;\r\n            digi++;\r\n        }\r\n        int dp[]=new int[digi+1];\r\n        dp[0]=1;dp[1]=2;\r\n        for(i=2;i<=digi;i++)\r\n            dp[i]=dp[i-1]+dp[i-2];\r\n        digi++;\r\n        while(digi-->=0){\r\n            if((n&(1<<digi))>0){\r\n                res+=dp[digi];\r\n                if(prevdig==1)return res;\r\n                prevdig=1;\r\n            }else prevdig=0;\r\n        }\r\n        \r\n        return res+1;\r\n    }\r\n}",
    "javascript": "var findIntegers = function(n) {\r\n    let dp = len=>{\r\n        if (len<0)\r\n            return 0;\r\n        if (!len)\r\n            return 1;\r\n        let _0x = 1; // number of accepted combination when '1' is first\r\n        let _1x = 1; // number of accepted combination when '0' is first\r\n        while (--len)\r\n            [_0x, _1x] = [_0x+_1x, _0x];\r\n        return _0x + _1x;\r\n    };\r\n    let binary = n.toString(2);\r\n    let count = 0;\r\n    let is_prev_one = false;\r\n    for (let i = 0; i<binary.length; i++) {\r\n        if (binary[i] === '0') {\r\n            is_prev_one = false;\r\n            continue;\r\n        }\r\n        count += dp(binary.length-i-1);\r\n        if (is_prev_one)\r\n            return count;\r\n        is_prev_one = true;\r\n    }\r\n    return count + 1;\r\n};"
  }
}
