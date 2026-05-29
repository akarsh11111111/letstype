export default {
  "id": 8,
  "name": "String to Integer (atoi)",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/string-to-integer-atoi",
  "relativeDir": "S/String to Integer (atoi)",
  "slug": "0008-string-to-integer-atoi",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 30,
    "python": 55,
    "javascript": 46
  },
  "languages": {
    "cpp": "class Solution\r\n{\r\n    public:\r\n        int myAtoi(string s)\r\n        {\r\n            long long ans = 0;\r\n            int neg = 1;\r\n            int i = 0;\r\n            while (i < s.length() and s[i] == ' ')\r\n            {\r\n                i++;\r\n            }\r\n\r\n            if (s[i] == '-' || s[i] == '+')\r\n            {\r\n                neg = s[i] == '-' ? -1 : 1;\r\n                i++;\r\n            }\r\n\r\n            while (i < s.length() && (s[i] >= '0' && s[i] <= '9'))\r\n            {\r\n\r\n                ans = ans *10 + (s[i] - '0');\r\n               \t// ans *= 10;\r\n                i++;\r\n                if (ans * neg >= INT_MAX) return INT_MAX;\r\n                if (ans * neg <= INT_MIN) return INT_MIN;\r\n            }\r\n            return ans * neg;\r\n        }\r\n};",
    "python": "# Runtime: 69 ms (Top 20.00%) | Memory: 13.9 MB (Top 79.88%)\r\n\r\nclass Solution:\r\n\r\n    def assign_sign(self, sign):\r\n      # verify that we haven't already got a sign\r\n      #&nbsp;\"+42-\" -> we don't want to return -42; hence check\r\n      if not self.is_neg and not self.is_pos:\r\n          # no sign has been set yet\r\n        if sign==\"+\":\r\n          self.is_pos = True\r\n        elif sign==\"-\":\r\n          self.is_neg = True\r\n      return\r\n\r\n    def add_to_int(self, num):\r\n      if not self.num:\r\n        self.num = num\r\n      else:\r\n        self.num = (self.num*10) + num\r\n\r\n    def myAtoi(self, s: str) -> int:\r\n        #&nbsp;remove the leading and trailing spaces\r\n        self.is_neg = False\r\n        self.is_pos = False\r\n        self.num = None\r\n        s=s.strip()\r\n        for i in s:\r\n          # ignore the rest of the string if a non digit character is read\r\n          if i in (\"+\",\"-\"):\r\n            #&nbsp;only read the first symbol; break if second symbol is read\r\n            if self.is_pos or self.is_neg or isinstance(self.num, int):\r\n              #&nbsp;one of the two symbols is read or a number is read\r\n              break\r\n            self.assign_sign(i)\r\n            continue\r\n          try:\r\n            i = int(i)\r\n            self.add_to_int(i)\r\n          except ValueError:\r\n            # it's neither a sign, nor a number; terminate\r\n            break\r\n\r\n        # outside the loop; compile the result\r\n        if not self.num:\r\n          return 0\r\n        upper_limit = 2**31 - 1\r\n        if self.is_pos or (not self.is_pos and not self.is_neg):\r\n          if self.num > upper_limit:\r\n            self.num = upper_limit\r\n        elif self.is_neg:\r\n          if self.num > upper_limit+1:\r\n            self.num = upper_limit+1\r\n          self.num = -1 * self.num\r\n        return self.num",
    "java": "class Solution {\r\n    public int myAtoi(String s) {\r\n        long n=0;\r\n        int i=0,a=0;\r\n        s=s.trim();\r\n        if(s.length()==0)\r\n            return 0;\r\n        if(s.charAt(i)=='+' || s.charAt(i)=='-')\r\n            a=1;\r\n        while(a<s.length())\r\n            if(s.charAt(a)=='0')\r\n                a++;\r\n            else \r\n                break;\r\n        for(i=a;i<a+11 && i<s.length();i++)\r\n        {\r\n            if(s.charAt(i)>='0' && s.charAt(i)<='9')\r\n                n=n*10+(int)(s.charAt(i)-'0');\r\n            else\r\n                break;\r\n        }\r\n        if(s.charAt(0)=='-')\r\n            n=-n;\r\n        if(n>2147483647)\r\n            n=2147483647;\r\n        if(n<-2147483648)\r\n            n=-2147483648;\r\n        return (int)n;\r\n    }\r\n}",
    "javascript": "// Runtime: 132 ms (Top 31.75%) | Memory: 45.5 MB (Top 21.64%)\r\nfunction isNum(ch){\r\n    return !Number.isNaN(parseInt(ch));\r\n}\r\nvar myAtoi = function(s) {\r\n    let index = 0;\r\n\r\n    // Remove whitespace\r\n    while(index < s.length && s[index] === ' '){\r\n        index++;\r\n    }\r\n\r\n    // Get the multiplier.\r\n    const MULTIPLIER = index < s.length && s[index] === '-' ? -1: 1;\r\n\r\n    // If the starting index is a sign char then move to the next character.\r\n    if(index < s.length && (s[index] === '-' || s[index] === '+')){\r\n        index++;\r\n    }\r\n\r\n    // Remove all leading zeros.\r\n    while(index < s.length && s[index] === '0'){\r\n        index++;\r\n    }\r\n\r\n    const MIN_NEG_INT = Math.pow(-2,31);\r\n    const MAX_POS_INT = (MIN_NEG_INT + 1) * -1;\r\n\r\n    // Get the first sequence number in the string.\r\n    let num = 0;\r\n    while(index < s.length && isNum(s[index])){\r\n        let digit = parseInt(s[index]);\r\n        if(num > Math.floor((MAX_POS_INT - digit)/10)){\r\n            // Handle overflow.\r\n            if(MULTIPLIER === 1){\r\n                return MAX_POS_INT;\r\n            }else{\r\n                return MIN_NEG_INT;\r\n            }\r\n        }\r\n        num = num * 10 + parseInt(s[index]);\r\n        index++;\r\n    }\r\n\r\n    return num * MULTIPLIER;\r\n};"
  }
}
