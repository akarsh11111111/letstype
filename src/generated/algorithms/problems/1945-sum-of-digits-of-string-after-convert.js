export default {
  "id": 1945,
  "name": "Sum of Digits of String After Convert",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-digits-of-string-after-convert",
  "relativeDir": "S/Sum of Digits of String After Convert",
  "slug": "1945-sum-of-digits-of-string-after-convert",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 26,
    "python": 7,
    "javascript": 29
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.50 MB (Top 94.31%)\r\n\r\nclass Solution {\r\npublic:\r\n    int sumDigits(int num) {\r\n        int sum = 0;\r\n        while(num) {\r\n            sum += num%10;\r\n            num /= 10;\r\n        }\r\n        return sum;\r\n    }\r\n    \r\n    int getLucky(string s, int k) {\r\n        int sum = 0;\r\n        for(char &ch : s) {\r\n\t\t    int val = ch-'a'+1;\r\n\t\t    sum += val < 10 ? val : (val%10 + val/10);\r\n\t\t}\r\n\r\n        k -= 1; //Why ? We already did one transformation above (getting sum of character values)\r\n        while(k-- && sum >= 10) //sum >= 10 reduces unwanted Transform calls because if we are left with 1-digit,that will be our result\r\n            sum = sumDigits(sum);\r\n        \r\n        return sum;\r\n    }\r\n};",
    "python": "# Runtime: 78 ms (Top 10.28%) | Memory: 14 MB (Top 20.56%)\r\nclass Solution:\r\n    def getLucky(self, s: str, k: int) -> int:\r\n        nums = [str(ord(c) - ord('a') + 1) for c in s]\r\n        for _ in range(k):\r\n            nums = str(sum(int(digit) for num in nums for digit in num))\r\n        return nums",
    "java": "\r\nclass Solution {\r\n    public int getLucky(String s, int k) {\r\n    \r\n        StringBuilder sb=new StringBuilder();\r\n\r\n        for(int i=0;i<s.length();i++)\r\n        sb.append((s.charAt(i)-'a')+1);\r\n        String result=sb.toString();\r\n \r\n        if(result.length()==1)\r\n        return Character.getNumericValue(result.charAt(0));\r\n        \r\n        int sum=0;\r\n        while(k-->0 && result.length()>1)\r\n        {   \r\n            sum=0;\r\n            for(int i=0;i<result.length();i++)\r\n            sum+=Character.getNumericValue(result.charAt(i));\r\n            \r\n            result=String.valueOf(sum);\r\n        }\r\n        \r\n        return sum;   \r\n    }\r\n}",
    "javascript": "// Runtime: 52 ms (Top 100.00%) | Memory: 44.2 MB (Top 53.23%)\r\n/**\r\n * @param {string} s\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar getLucky = function(s, k) {\r\n    function alphabetPosition(text) {\r\n      var result = [];\r\n      for (var i = 0; i < text.length; i++) {\r\n        var code = text.toUpperCase().charCodeAt(i)\r\n        if (code > 64 && code < 91) result.push(code - 64);\r\n      }\r\n      return result;\r\n    }\r\n\r\n    let str = alphabetPosition(s).join(\"\");\r\n    let sum = 0;\r\n    let newArr;\r\n\r\n    while(k>0){\r\n        newArr = str.split(\"\");\r\n        sum = newArr.reduce((acc, e) => parseInt(acc)+parseInt(e));\r\n        str = sum.toString();\r\n        k--;\r\n    }\r\n    return sum\r\n\r\n};"
  }
}
