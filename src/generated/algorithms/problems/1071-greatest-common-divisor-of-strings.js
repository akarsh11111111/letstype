export default {
  "id": 1071,
  "name": "Greatest Common Divisor of Strings",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/greatest-common-divisor-of-strings",
  "relativeDir": "G/Greatest Common Divisor of Strings",
  "slug": "1071-greatest-common-divisor-of-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 46,
    "python": 28,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 68.31%) | Memory: 7.2 MB (Top 64.47%)\r\nclass Solution {\r\npublic:\r\n    string gcdOfStrings(string str1, string str2) {\r\n        int m = str1.length(), n = str2.length();\r\n        int temp = __gcd(m, n);\r\n        string str;\r\n        if(str1 + str2 == str2 + str1) str = str1.substr(0, temp);\r\n        return str;\r\n    }\r\n};",
    "python": "# Runtime: 85 ms (Top 15.89%) | Memory: 14 MB (Top 5.19%)\r\nclass Solution:\r\n    def gcdOfStrings(self, str1: str, str2: str) -> str:\r\n\r\n        if len(str2) > len(str1):\r\n            str1, str2 = str2, str1\r\n\r\n        curr_str2 = str2\r\n        while True:\r\n\r\n            rep = len(str1)//len(curr_str2)\r\n\r\n            if curr_str2*rep == str1:\r\n                return curr_str2\r\n\r\n            found = False\r\n            for i in range(len(curr_str2)-1, 1, -1):\r\n                try_str2 = curr_str2[:i]\r\n                rep2 = len(str2)//len(try_str2)\r\n\r\n                if try_str2*rep2 == str2:\r\n                    curr_str2 = try_str2\r\n                    found = True\r\n                    break\r\n\r\n            if not found:\r\n                break\r\n        return \"\"",
    "java": "class Solution {\r\n    public String gcdOfStrings(String str1, String str2) {\r\n        \r\n        int length1 = str1.length();\r\n        int length2 = str2.length();\r\n        String temp;\r\n        \r\n        for(int i=gcd(length1,length2); i>0 && length1 % i == 0 && length2 % i == 0; i--) {\r\n            if(str1.substring(0,i).equals(str2.substring(0,i))) {\r\n                if(doesRepeat(str1.substring(0,i),str1,str2))\r\n                    return str1.substring(0,i);\r\n            }\r\n        }\r\n        return \"\";\r\n        \r\n    }\r\n    public int gcd(int a, int b) {\r\n        if(b==0)\r\n            return a;\r\n        return gcd(b,a % b);\r\n    }\r\n    public boolean doesRepeat(String s, String str1, String str2) {\r\n        int sLength = s.length();\r\n        boolean bool1 = true, bool2 = true;\r\n        String temp = str1,temp2;\r\n        \r\n        while(sLength < temp.length()) {\r\n            temp2 = temp.substring(sLength,sLength*2);\r\n            \r\n            if(s.equals(temp2));\r\n            else\r\n                bool1 = false;\r\n            temp = temp.substring(sLength,temp.length());\r\n        }\r\n        temp = str2;\r\n        while(sLength < temp.length()) {\r\n            temp2 = temp.substring(sLength,sLength*2);\r\n            if(s.equals(temp2));\r\n            else\r\n                bool2 = false;\r\n            temp = temp.substring(sLength,temp.length());\r\n        }\r\n        return bool1 && bool2;\r\n    }\r\n    \r\n}",
    "javascript": "/**\r\n * @param {string} str1\r\n * @param {string} str2\r\n * @return {string}\r\n */\r\nvar gcdOfStrings = function(str1, str2) {\r\n  const gcdOfNumber = (num1, num2) => {\r\n    while (num2 !== 0) {\r\n      const res = num2 % num1\r\n      num1 = num2\r\n      num2 = res\r\n    }\r\n    return num1\r\n  }\r\n  const gcd = gcdOfNumber(str1.length, str2.length)\r\n  const common = str1.slice(0, gcd)\r\n  return common.repeat(str1.length / gcd) === str1 &&\r\n    common.repeat(str2.length / gcd) === str2\r\n    ? common\r\n    : ''\r\n}"
  }
}
