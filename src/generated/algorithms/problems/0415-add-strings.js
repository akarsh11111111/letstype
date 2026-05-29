export default {
  "id": 415,
  "name": "Add Strings",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/add-strings",
  "relativeDir": "A/Add Strings",
  "slug": "0415-add-strings",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 7,
    "python": 12,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 53 ms (Top 8.77%) | Memory: 56.1 MB (Top 8.93%)\r\nclass Solution {\r\npublic:\r\n    string ans=\"\";\r\n    int carry=0;\r\n    string addStrings(string num1, string num2) {\r\n        while(num1.size() && num2.size()){\r\n            int sum= (num1.back() -'0' + num2.back() -'0' + carry) ;\r\n            ans = (char)((sum%10) + '0') + ans;\r\n            carry= sum/10;\r\n            num1.pop_back();num2.pop_back();\r\n        }\r\n\r\n        while(num1.size()){\r\n            int sum= (num1.back() -'0' + carry) ;\r\n            ans = (char)((sum%10) + '0') + ans ;\r\n            carry= sum/10;\r\n            num1.pop_back();\r\n        }\r\n        while(num2.size()){\r\n            int sum= (num2.back() -'0' + carry) ;\r\n            ans = (char)((sum%10) + '0') + ans ;\r\n            carry= sum/10;\r\n            num2.pop_back();\r\n        }\r\n        if(carry) ans = (char)(carry+'0') + ans;\r\n        return ans;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def addStrings(self, num1: str, num2: str) -> str:\r\n        def func(n):\r\n            value = {'0':0, '1':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7, '8':8, '9':9}\r\n            result = 0\r\n            for digit in n:\r\n                result = 10 * result + value[digit]\r\n\r\n            return result\r\n\r\n        ans = func(num1) + func(num2)\r\n        return str(ans)",
    "java": "// Runtime: 19 ms (Top 29.95%) | Memory: 42.8 MB (Top 82.92%)\r\nimport java.math.BigInteger;\r\nclass Solution {\r\n    public String addStrings(String num1, String num2) {\r\n        return new BigInteger(num1).add(new BigInteger(num2)).toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 69 ms (Top 19.29%) | Memory: 44.40 MB (Top 55.25%)\r\n\r\nvar addStrings = function(num1, num2) {\r\n    let i = num1.length - 1;\r\n    let j = num2.length - 1;\r\n    let carry = 0;\r\n    let sum = '';\r\n     \r\n    for (;i >= 0 || j >= 0 || carry > 0;i--, j--) {\r\n        const digit1 = i < 0 ? 0 : num1.charAt(i) - '0';\r\n        const digit2 = j < 0 ? 0 : num2.charAt(j) - '0';\r\n        const digitsSum = digit1 + digit2 + carry;\r\n        sum = `${digitsSum % 10}${sum}`;\r\n        carry = Math.floor(digitsSum / 10);\r\n    }\r\n    \r\n    return sum;\r\n};"
  }
}
