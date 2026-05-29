export default {
  "id": 1404,
  "name": "Number of Steps to Reduce a Number in Binary Representation to One",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one",
  "relativeDir": "N/Number of Steps to Reduce a Number in Binary Representation to One",
  "slug": "1404-number-of-steps-to-reduce-a-number-in-binary-representation-to-one",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 24,
    "python": 14,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 22.27%) | Memory: 6.2 MB (Top 89.57%)\r\nclass Solution {\r\npublic:\r\n    int numSteps(string s) {\r\n        int n=0;\r\n        bool carry = false;\r\n        int steps = 0;\r\n        if(s == \"1\") return 0;\r\n        while(s.length() > 0){\r\n            int i = s.length()-1;\r\n            if(carry){\r\n                if(s[i] == '1'){\r\n                    carry = true; s[i] = '0';\r\n                }else{\r\n                    s[i] = '1'; carry = false;\r\n                }\r\n            }\r\n            if(s[i] == '0'){ s.pop_back(); steps++;}\r\n            else{carry = true; s.pop_back(); steps += 2;}\r\n            if(s == \"1\"){\r\n                if(carry) steps++;\r\n                break;\r\n            }\r\n        }\r\n        return steps;\r\n    }\r\n};",
    "python": "\r\nclass Solution:\r\n    def numSteps(self, s: str) -> int:\r\n        size = len(s)\r\n        if size == 1:\r\n            return 0\r\n        one_group = s.split('0')\r\n        zero_group = s.split('1')\r\n\r\n        \r\n        if size - len(zero_group[-1]) == 1:\r\n            return size - 1\r\n        else:\r\n            return size + len(one_group) - len(zero_group[-1])",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 40.41 MB (Top 54.8%)\r\n\r\nclass Solution \r\n{\r\n    public int numSteps(String s)\r\n    {\r\n        int countSteps = 0;\r\n        int carry = 0;\r\n        for(int i = s.length()-1;i>=1;i--)\r\n        {\r\n            int rightMostBit = s.charAt(i)-'0';\r\n            if((rightMostBit+carry) == 1)\r\n            {\r\n                carry=1;\r\n                countSteps += 2;\r\n            }\r\n            else\r\n            {\r\n                countSteps++;\r\n            }\r\n        }\r\n        return countSteps+carry;\r\n    }\r\n}",
    "javascript": "// Runtime: 106 ms (Top 32.20%) | Memory: 42.5 MB (Top 52.54%)\r\nvar numSteps = function(s) {\r\n    let res = 0;\r\n    s = s.split(\"\");\r\n    while(s.length>1){\r\n        if(s[s.length-1]===\"0\") s.pop();\r\n        else plusone(s);\r\n        res++;\r\n    }\r\n    return res;\r\n};\r\nvar plusone = function(p) {\r\n    p.unshift(\"0\");\r\n    let i = p.length-1;\r\n    p[i] = 1+(+p[i]);\r\n    while(p[i]===2){\r\n        p[i-1] = 1+(+p[i-1]);\r\n        i--;\r\n        p[i+1] = \"0\";\r\n    }\r\n    if(p[0]===\"0\") p.shift();\r\n    return p;\r\n};"
  }
}
