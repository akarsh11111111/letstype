export default {
  "id": 788,
  "name": "Rotated Digits",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rotated-digits",
  "relativeDir": "R/Rotated Digits",
  "slug": "0788-rotated-digits",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 18,
    "python": 34,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 69.84%) | Memory: 7 MB (Top 11.11%)\r\nclass Solution\r\n{\r\npublic:\r\n    bool isValid(int n)\r\n    {\r\n        bool check = false;\r\n        while (n > 0)\r\n        {\r\n            int k = n % 10;\r\n            if (k == 2 || k == 5 || k == 6 || k == 9)\r\n                check = true;\r\n            if (k == 3 || k == 4 || k == 7)\r\n                return false;\r\n            n /= 10;\r\n        }\r\n        return check;\r\n    }\r\n    int rotatedDigits(int n)\r\n    {\r\n        vector<int> dp(n + 1, 0);\r\n        for (int i = 2; i <= n; i++)\r\n        {\r\n            if (isValid(i))\r\n                dp[i]++;\r\n            dp[i] += dp[i - 1];\r\n        }\r\n        return dp[n];\r\n    }\r\n};",
    "python": "# Runtime: 226 ms (Top 14.46%) | Memory: 13.9 MB (Top 71.45%)\r\nclass Solution:\r\n    def rotatedDigits(self, n: int) -> int:\r\n        d={\r\n            0:0,\r\n            1:1,\r\n            2:5,\r\n            3:None,\r\n            4: None,\r\n            5:2,\r\n            6:9,\r\n            7:None,\r\n            8:8,\r\n            9:6\r\n        }\r\n        res=0\r\n        for i in range(n+1):\r\n            t=i\r\n            pos=0\r\n            temp=0\r\n            status=True\r\n            while t>0:\r\n                r=d[t%10] #Every Digit Rotation Is Must, We Don't Have Choice To Leave It Without Rotating\r\n                if r is None:\r\n                    status=False\r\n                    break\r\n\r\n                temp+=((10**pos)*r)\r\n                pos+=1\r\n                t=t//10\r\n\r\n            if temp!=i and status:\r\n                res+=1\r\n        return res",
    "java": "// Runtime: 5 ms (Top 82.34%) | Memory: 39.1 MB (Top 97.40%)\r\nclass Solution {\r\n    public int rotatedDigits(int n) {\r\n        int ans=0;\r\n        for(int i=1; i<=n; i++){\r\n            int k = i;\r\n            boolean bool1=true; boolean bool2=false;\r\n            while(k>0){\r\n                int m=k%10;\r\n                if(m==3 || m==4 || m==7){ bool1=false; break; }\r\n                else if(m==2 || m==5 || m==6 || m==9){ bool2=true; }\r\n                k/=10;\r\n            }\r\n            if(bool1 && bool2){ ans++; }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} n\r\n * @return {number}\r\n */\r\nvar rotatedDigits = function(n) {\r\n    let count=0;\r\n    for(let i=1;i<=n;i++){\r\n        let str=i.toString().split(\"\");\r\n        let f=str.filter(s=> s!=1 && s!=0 && s!=8);\r\n        if(f.length===0) continue;\r\n        let g=f.filter(s=> s!=5 && s!=2 && s!=6 && s!=9);\r\n        if(g.length===0) count++;\r\n    }\r\n    return count;\r\n};"
  }
}
