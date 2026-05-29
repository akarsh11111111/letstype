export default {
  "id": 1881,
  "name": "Maximum Value after Insertion",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-value-after-insertion",
  "relativeDir": "M/Maximum Value after Insertion",
  "slug": "1881-maximum-value-after-insertion",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 43,
    "python": 36,
    "javascript": 39
  },
  "languages": {
    "cpp": "class Solution { \r\n\r\npublic:\r\nstring maxValue(string s, int x) {\r\n    int p=0,flag=0;\r\n    char ch='0'+x;  //change int to char\r\n    string str;\r\n\t\r\n    if(s[0]=='-')\r\n    {   //for negative numbers\r\n\t     for(int i=1;i<s.size();i++)\r\n        {\r\n          if(ch<s[i] && !flag){\r\n            str+=ch;\r\n            str+=s[i];\r\n            flag=1; \r\n          }\r\n          else \r\n           str+=s[i];\r\n        }\r\n        if(!flag) str+=ch;\r\n        return '-'+str;\r\n    }\r\n    \r\n\t// if number is positive\r\n    for(int i=0;i<s.size();i++)\r\n    {\r\n       if(ch>s[i] && !flag){\r\n         str+=ch;\r\n         str+=s[i];\r\n         flag=1;\r\n       }\r\n       else \r\n        str+=s[i];\r\n    }    \r\n    if(!flag) str+=ch;\r\n    return str;\r\n  }\r\n};",
    "python": "class Solution:\r\n    def maxValue(self, n: str, x: int) -> str:\r\n        if int(n)>0:\r\n            ans = \"\"\r\n            flag = False\r\n            for i in range(len(n)):\r\n                if int(n[i])>=x:\r\n                    ans += n[i]\r\n                else:\r\n                    a = n[:i]\r\n                    b = n[i:]\r\n                    ans = a+str(x)+b\r\n                \r\n                    flag = True\r\n                    break\r\n            if not flag:\r\n                ans += str(x)\r\n        else:\r\n            n = n[1:]\r\n            ans = \"\"\r\n            flag = False\r\n            for i in range(len(n)):\r\n                if int(n[i])<=x:\r\n                    ans += n[i]\r\n                else:\r\n                    a = n[:i]\r\n                    b = n[i:]\r\n                    ans = a+str(x)+b\r\n            \r\n                    flag = True\r\n                    break\r\n            if not flag:\r\n                ans += str(x)\r\n            ans = \"-\"+ans\r\n        \r\n        return ans",
    "java": "class Solution {\r\n    public String maxValue(String n, int x) {\r\n        StringBuilder res= new StringBuilder();\r\n        int i=0, j=0;\r\n        if(n.charAt(0)=='-'){\r\n            res.append(n.charAt(0));\r\n            for(j=1; j<n.length(); j++){\r\n               char ch= n.charAt(j);\r\n               int val= ch-'0';\r\n               if(val<= x){  \r\n                  res.append(ch);\r\n               }else{\r\n                   res.append(x);\r\n                   res.append(ch);\r\n                   res.append(n.substring(j+1));\r\n                   break;\r\n               }\r\n           }\r\n            if(j==n.length()){\r\n                res.append(x);\r\n            }\r\n        }\r\n        else{\r\n            for(i=0; i<n.length(); i++){\r\n               char ch= n.charAt(i);\r\n               int val= ch-'0';\r\n                \r\n               if(val>= x){  \r\n                  res.append(ch);\r\n               }else{\r\n                   res.append(x);\r\n                   res.append(ch);\r\n                   res.append(n.substring(i+1));\r\n                   break;\r\n               }\r\n           }\r\n            if(i==n.length()){\r\n                res.append(x);\r\n            }\r\n        }\r\n        return res.toString();\r\n    }\r\n}",
    "javascript": "var maxValue = function(n, x) {\r\n    let i;\r\n\r\n    // if the number if positive, find the first\r\n    // number that is less than x\r\n    if (n[0] !== '-') {\r\n        for (i = 0; i < n.length; i++) {\r\n            if (Number(n[i]) < x) break;\r\n        }        \r\n    \r\n    // if the number is negative, find the first\r\n    // number that is greater than x\r\n    } else {\r\n        for (i = 1; i < n.length; i++) {\r\n            if (Number(n[i]) > x) break;\r\n        }\r\n    }\r\n    \r\n    // return the string with x inserted at the found index\r\n    return n.slice(0, i) + x + n.slice(i)\r\n};\r\n\r\n\r\n///////////////// short hand ////////////////////\r\n\r\n\r\nvar maxValue = function(n, x) {\r\n    let i;\r\n    if (n[0] !== '-') {\r\n        for (i = 0; i < n.length; i++) {\r\n            if (Number(n[i]) < x) break;\r\n        }        \r\n    } else {\r\n        for (i = 1; i < n.length; i++) {\r\n            if (Number(n[i]) > x) break;\r\n        }\r\n    }\r\n    return n.slice(0, i) + x + n.slice(i)\r\n};"
  }
}
