export default {
  "id": 233,
  "name": "Number of Digit One",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-digit-one",
  "relativeDir": "N/Number of Digit One",
  "slug": "0233-number-of-digit-one",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 26,
    "python": 18,
    "javascript": 8
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tint countDigitOne(int n) {\r\n\t\tint c = 0;\r\n\t\tfor(int i=1; i<=n; i++){\r\n\t\t\tstring s = to_string(i);\r\n\t\t\tc += count(s.begin(), s.end(), '1');\r\n\t\t}\r\n\t\treturn c;\r\n\t}\r\n};\r\n\r\n// T.C. --> O(n * log(n))\r\n// S.C. --> O(log(n))",
    "python": "# Runtime: 65 ms (Top 7.05%) | Memory: 13.8 MB (Top 68.36%)\r\nclass Solution:\r\n    def countDigitOne(self, n: int) -> int:\r\n        num = str(n)[::-1]\r\n        count = 0\r\n        for i in range(len(num)-1, -1, -1):\r\n            pv = 10**i # placevalue\r\n            # mulitplicity of current digit (how many times it will be repeated)\r\n            mul = n//(pv*10)\r\n            rem = n % pv # remainder of current place value\r\n            count += mul * pv # count for number of times 1 occurs in this place when the current digit is considered to be less than 1\r\n            # if the current digit is greater than 1 then additional number of 1's are added to the count (equivalent to the place value)\r\n            if num[i] > '1':\r\n                count += pv\r\n            # if the current digit is equal to 1 then additional number of 1's are added to the count (equivalent to the number modded by the current place value)\r\n            if num[i] == '1':\r\n                count += rem + 1\r\n        return count",
    "java": "  class Solution {\r\n\tint max(int a, int b){\r\n\t\tif(a>b)\r\n\t\t\treturn a;\r\n\t\telse\r\n\t\t\treturn b;\r\n\t}\r\n\r\n\tint min(int a, int b){\r\n\t\tif(a>b)\r\n\t\t\treturn b;\r\n\t\telse\r\n\t\t\treturn a;\r\n\t}\r\n\r\n\tpublic int countDigitOne(int n) {\r\n\t\tint c = 0;\r\n\t\tfor(int i=1; i<=n; i*=10){\r\n\t\t\tint divider = i*10;\r\n\t\t\tc += (n/divider)*i + min(max((n%divider -i + 1), 0),i);\r\n\t\t}\r\n\t\treturn c;\r\n\t}\r\n}\r\n\r\n// T.C.  - O(log n)",
    "javascript": "// Runtime: 59 ms (Top 97.10%) | Memory: 42.1 MB (Top 56.52%)\r\nvar countDigitOne = function(n) {\r\n    if(n <= 0) return 0;\r\n    if(n < 10) return 1;\r\n    var base = Math.pow(10, n.toString().length - 1);\r\n    var answer = parseInt(n / base);\r\n    return countDigitOne(base - 1) * answer + (answer === 1 ? (n - base + 1) : base) + countDigitOne(n % base);\r\n};"
  }
}
