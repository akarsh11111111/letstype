export default {
  "id": 12,
  "name": "Integer to Roman",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/integer-to-roman",
  "relativeDir": "I/Integer to Roman",
  "slug": "0012-integer-to-roman",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 60,
    "java": 16,
    "python": 25,
    "javascript": 48
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 96.82%) | Memory: 6 MB (Top 78.88%)\r\nclass Solution {\r\npublic:\r\n    string intToRoman(int num) {\r\n        string ans=\"\";\r\n        while(num>=1000){\r\n            ans += 'M';\r\n            num -= 1000;\r\n        }\r\n        while(num>=900){\r\n            ans += \"CM\";\r\n            num -= 900;\r\n        }\r\n        while(num>=500){\r\n            ans += 'D';\r\n            num -= 500;\r\n        }\r\n        while(num>=400){\r\n            ans += \"CD\";\r\n            num -= 400;\r\n        }\r\n        while(num>=100){\r\n            ans += 'C';\r\n            num -= 100;\r\n        }\r\n        while(num>=90){\r\n            ans += \"XC\";\r\n            num -= 90;\r\n        }\r\n        while(num>=50){\r\n            ans += 'L';\r\n            num -= 50;\r\n        }\r\n        while(num>=40){\r\n            ans += \"XL\";\r\n            num -= 40;\r\n        }\r\n        while(num>=10){\r\n            ans += 'X';\r\n            num -= 10;\r\n        }\r\n        while(num>=9){\r\n            ans += \"IX\";\r\n            num -= 9;\r\n        }\r\n        while(num>=5){\r\n            ans += 'V';\r\n            num -= 5;\r\n        }\r\n        while(num>=4){\r\n            ans += \"IV\";\r\n            num -= 4;\r\n        }\r\n        while(num>0){\r\n            ans += 'I';\r\n            num -= 1;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 47 ms (Top 86.4%) | Memory: 16.42 MB (Top 14.9%)\r\n\r\nclass Solution:\r\n    def intToRoman(self, num: int) -> str:\r\n        # Creating Dictionary for Lookup\r\n        num_map = {\r\n            1: \"I\",\r\n            5: \"V\",    4: \"IV\",\r\n            10: \"X\",   9: \"IX\",\r\n            50: \"L\",   40: \"XL\",\r\n            100: \"C\",  90: \"XC\",\r\n            500: \"D\",  400: \"CD\",\r\n            1000: \"M\", 900: \"CM\",\r\n        }\r\n        \r\n        # Result Variable\r\n        r = ''\r\n        \r\n        \r\n        for n in [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]:\r\n            # If n in list then add the roman value to result variable\r\n            while n <= num:\r\n                r += num_map[n]\r\n                num-=n\r\n        return r",
    "java": "// Runtime: 9 ms (Top 27.77%) | Memory: 44.00 MB (Top 31.59%)\r\n\r\nclass Solution {\r\n    final static int[] val = {1000,900,500,400,100,90,50,40,10,9,5,4,1};\r\n    final static String[] rom = {\"M\",\"CM\",\"D\",\"CD\",\"C\",\"XC\",\"L\",\"XL\",\"X\",\"IX\",\"V\",\"IV\",\"I\"};\r\n\r\n    public String intToRoman(int N) {\r\n        StringBuilder ans = new StringBuilder();\r\n        for (int i = 0; N > 0; i++)\r\n            while (N >= val[i]) {\r\n                ans.append(rom[i]);\r\n                N -= val[i];\r\n            }\r\n        return ans.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 214 ms (Top 38.09%) | Memory: 46.7 MB (Top 91.29%)\r\n\r\nvar intToRoman = function(num) {\r\n    let res = \"\";\r\n  while (num > 0) {\r\n    if (num >= 1000) {\r\n      res += \"M\";\r\n      num -= 1000;\r\n    }else if (num >= 900) {\r\n      res += \"CM\";\r\n      num -= 900;\r\n    }else if (num >= 500) {\r\n      res += \"D\";\r\n      num -= 500;\r\n    }else if (num >= 400) {\r\n      res += \"CD\";\r\n      num -= 400;\r\n    }else if (num >= 100) {\r\n      res += \"C\";\r\n      num -= 100;\r\n    }else if (num >= 90) {\r\n      res += \"XC\";\r\n      num -= 90;\r\n    }else if (num >= 50) {\r\n      res += \"L\";\r\n      num -= 50;\r\n    }else if (num >= 40) {\r\n      res += \"XL\";\r\n      num -= 40;\r\n    }else if (num >= 10) {\r\n      res += \"X\";\r\n      num -= 10;\r\n    }else if (num >= 9) {\r\n      res += \"IX\";\r\n      num -= 9;\r\n    }else if (num >= 5) {\r\n      res += \"V\";\r\n      num -= 5;\r\n    }else if (num >= 4) {\r\n      res += \"IV\";\r\n      num -= 4;\r\n    }else if (num >= 1) {\r\n      res += \"I\";\r\n      num -= 1;\r\n    }\r\n  }\r\n    return res;\r\n};"
  }
}
