export default {
  "id": 537,
  "name": "Complex Number Multiplication",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/complex-number-multiplication",
  "relativeDir": "C/Complex Number Multiplication",
  "slug": "0537-complex-number-multiplication",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 10,
    "python": 11,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.40 MB (Top 16.79%)\r\n\r\nclass Solution {\r\npublic:\r\n    pair<int, int> parse(string num) {\r\n        int i = num.find('+');\r\n        double real = stoi(num.substr(0, i));\r\n        double imaginary = stoi(num.substr(i+1, num.size()-i-2));\r\n        pair<int, int> res(real, imaginary);\r\n        return res;\r\n    }\r\n    \r\n    string complexNumberMultiply(string num1, string num2) {\r\n        pair<int, int> a = parse(num1), b = parse(num2);\r\n        int real_a = a.first, imag_a = a.second;\r\n        int real_b = b.first, imag_b = b.second;\r\n        \r\n        return to_string(real_a * real_b - imag_a * imag_b) + '+' + to_string(real_a * imag_b  + real_b * imag_a)+'i' ;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def complexNumberMultiply(self, num1: str, num2: str) -> str:\r\n        i1=num1.index('+')\r\n        i2=num2.index('+')\r\n        a=int(num1[0:i1])\r\n        x=int(num2[0:i2])\r\n        b=int(num1[i1+1:len(num1)-1])\r\n        y=int(num2[i2+1:len(num2)-1])\r\n        ans1=a*x+(-1)*b*y\r\n        ans2=a*y+b*x\r\n        return str(ans1)+'+'+(str(ans2)+'i')",
    "java": "class Solution {\r\n    public String complexNumberMultiply(String num1, String num2) {\r\n        int val1 = Integer.parseInt(num1.substring(0, num1.indexOf('+')));\r\n        int val2 = Integer.parseInt(num1.substring(num1.indexOf('+')+1,num1.length()-1));\r\n        int val3 = Integer.parseInt(num2.substring(0, num2.indexOf('+')));\r\n        int val4 = Integer.parseInt(num2.substring(num2.indexOf('+')+1,num2.length()-1));\r\n        \r\n        return \"\" + (val1*val3 - val2*val4) + \"+\" + (val1*val4 + val3*val2) + \"i\";\r\n    }\r\n}",
    "javascript": "var complexNumberMultiply = function(num1, num2) {\r\n\tlet [realA, imaginaryA] = num1.split('+');\r\n\tlet [realB, imaginaryB] = num2.split('+');\r\n\timaginaryA = parseInt(imaginaryA);\r\n\timaginaryB = parseInt(imaginaryB);\r\n\tconst real = realA * realB - imaginaryA * imaginaryB;\r\n\tconst imaginary = realA * imaginaryB + imaginaryA * realB;\r\n\r\n\treturn `${real}+${imaginary}i`;\r\n};"
  }
}
