export default {
  "id": 2222,
  "name": "Number of Ways to Select Buildings",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-ways-to-select-buildings",
  "relativeDir": "N/Number of Ways to Select Buildings",
  "slug": "2222-number-of-ways-to-select-buildings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 31,
    "python": 30,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    long long numberOfWays(string s) {\r\n        long long a=0,b=0,ans=0;        // a and b are the number of occurances of '1' and '0' after the current building respectively.\r\n        for(int i=0;i<s.length();i++){\r\n            if(s[i]=='1')\r\n                a++;\r\n            else\r\n                b++;\r\n        }\r\n        long long c=0,d=0;              // c and d are the number of occurances of '1' and '0' before the current building respectively.\r\n        for(int i=0;i<s.length();i++){\r\n            if(s[i]=='1'){               // Counting the sequences of \"010\"\r\n                ans+=(d*b);\r\n                a--;\r\n                c++;\r\n            }\r\n            else{                        // Counting the sequences of \"101\"\r\n                ans+=(a*c);\r\n                b--;\r\n                d++;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numberOfWays(self, s: str) -> int:\r\n        \r\n        temp = []\r\n        c0 = 0\r\n        c1 = 0\r\n        for char in s :\r\n            if char == \"0\" :\r\n                c0+=1\r\n            else:\r\n                c1+=1\r\n            temp.append([c0,c1])\r\n            \r\n        total0 = c0\r\n        total1 = c1\r\n        \r\n        \r\n        count = 0\r\n        for i in range(1, len(s)-1) :\r\n            \r\n            if s[i] == \"0\" :\r\n                m1 = temp[i-1][1]\r\n                m2 = total1 - temp[i][1]\r\n                count += m1*m2\r\n                \r\n            else:\r\n                m1 = temp[i-1][0]\r\n                m2 = total0 - temp[i][0]\r\n                count += m1*m2\r\n        return count",
    "java": "class Solution\r\n{\r\n    public long numberOfWays(String s)\r\n    {\r\n        int zero = 0; // Individual zeroes count\r\n        long zeroOne = 0; // Number of combinations of 01s\r\n        int one = 0; // Individual ones count\r\n        long oneZero = 0; // Number of combinations of 10s\r\n        long tot = 0; // Final answer\r\n        for(char ch : s.toCharArray())\r\n        {\r\n            if(ch == '0')\r\n            {\r\n                zero++;\r\n                if(one > 0)\r\n                    oneZero += one; // Each of the previously found 1s can pair up with the current 0 to form 10\r\n                if(zeroOne > 0)\r\n                    tot += zeroOne; // Each of the previously formed 01 can form a triplet with the current 0 to form 010\r\n            }\r\n            else\r\n            {\r\n                one++;\r\n                if(zero > 0)\r\n                    zeroOne += zero; // Each of the previously found 0s can pair to form 01\r\n                if(oneZero > 0)\r\n                    tot += oneZero; // Each of the previously formed 10 can form 101\r\n            }\r\n        }\r\n        return tot;\r\n    }\r\n}",
    "javascript": "// Runtime: 2425 ms (Top 13.72%) | Memory: 77.5 MB (Top 19.61%)\r\nvar numberOfWays = function(s) {\r\n    const len = s.length;\r\n    const prefix = new Array(len).fill(0).map(() => new Array(2).fill(0));\r\n    for(let i = 0; i < len; i++) {\r\n        const idx = s[i] == '1' ? 1 : 0;\r\n        if(i == 0) prefix[i][idx]++;\r\n        else {\r\n            prefix[i] = Array.from(prefix[i-1]);\r\n            prefix[i][idx]++;\r\n        }\r\n    }\r\n    let ans = 0;\r\n    for(let i = 1; i < len - 1; i++) {\r\n        const c = s[i] == '1' ? 0 : 1;\r\n        ans += (prefix.at(-1)[c] - prefix[i][c]) * prefix[i-1][c];\r\n    }\r\n    return ans;\r\n};"
  }
}
