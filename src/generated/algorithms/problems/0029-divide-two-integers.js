export default {
  "id": 29,
  "name": "Divide Two Integers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/divide-two-integers",
  "relativeDir": "D/Divide Two Integers",
  "slug": "0029-divide-two-integers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 22,
    "python": 44,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 6.30 MB (Top 35.14%)\r\n\r\nclass Solution {\r\npublic:\r\n    int divide(int dividend, int divisor) {\r\n        if (dividend == INT_MIN && divisor == -1) {\r\n            return INT_MAX;\r\n        }\r\n        long dvd = labs(dividend), dvs = labs(divisor), ans = 0;\r\n        int sign = dividend > 0 ^ divisor > 0 ? -1 : 1;\r\n        while (dvd >= dvs) {\r\n            long temp = dvs, m = 1;\r\n            while (temp << 1 <= dvd) {\r\n                temp <<= 1;\r\n                m <<= 1;\r\n            }\r\n            dvd -= temp;\r\n            ans += m;\r\n        }\r\n        return sign * ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def divide(self, dividend: int, divisor: int) -> int:\r\n        # Solution 1 - bitwise operator <<   \r\n        \"\"\"\r\n        positive = (dividend < 0) is (divisor < 0)\r\n        dividend, divisor = abs(dividend), abs(divisor)\r\n\t\tif divisor == 1:\r\n            quotient = dividend\r\n        else:     \r\n\t\t\tquotient = 0\r\n\t\t\twhile dividend >= divisor:\r\n\t\t\t\ttemp, i = divisor, 1\r\n\t\t\t\twhile dividend >= temp:\r\n\t\t\t\t\tdividend -= temp\r\n\t\t\t\t\tquotient += i\r\n\t\t\t\t\ti <<= 1\r\n\t\t\t\t\ttemp <<= 1\r\n\r\n\t\tif not positive:\r\n\t\t\treturn max(-2147483648, -quotient)\r\n\t\telse:\r\n\t\t\treturn min(quotient, 2147483647)        \r\n        \"\"\"\r\n        # Solution 2 - cumulative sum - faster than bitwise \r\n        positive = (dividend < 0) == (divisor < 0)\r\n        dividend, divisor = abs(dividend), abs(divisor)      \r\n        if divisor == 1:\r\n            quotient = dividend\r\n        else:            \r\n            quotient = 0\r\n            _sum = divisor\r\n\r\n            while _sum <= dividend:\r\n                current_quotient = 1\r\n                while (_sum + _sum) <= dividend:\r\n                    _sum += _sum\r\n                    current_quotient += current_quotient\r\n                dividend -= _sum\r\n                _sum = divisor\r\n                quotient += current_quotient            \r\n        if not positive:\r\n            return max(-2147483648, -quotient)\r\n        else:\r\n            return min(quotient, 2147483647)",
    "java": "class Solution {\r\n    public int divide(int dividend, int divisor) {\r\n        if(dividend == 1<<31 && divisor == -1){\r\n            return Integer.MAX_VALUE;\r\n        }\r\n        boolean sign = (dividend >= 0) == (divisor >= 0) ? true : false;\r\n        \r\n        dividend = Math.abs(dividend);\r\n        divisor = Math.abs(divisor);\r\n        \r\n        int result = 0;\r\n        while(dividend - divisor >= 0){\r\n            int count = 0;\r\n            while(dividend - (divisor << 1 << count) >= 0){\r\n                count++;\r\n            }\r\n            result += 1 <<count;\r\n            dividend -= divisor << count;\r\n        }\r\n        return sign ? result : -result;\r\n    }\r\n}",
    "javascript": "// Runtime: 119 ms (Top 50.88%) | Memory: 45 MB (Top 5.70%)\r\nvar divide = function(dividend, divisor) {\r\n    if (dividend == -2147483648 && divisor == -1) return 2147483647;\r\n    let subdividend = Math.abs(dividend)\r\n    let subdivisor = Math.abs(divisor)\r\n    let string_dividend = subdividend.toString()\r\n    let i = 0\r\n    let ans=0\r\n    let remainder = 0\r\n    while(i<string_dividend.length){\r\n        remainder =remainder*10+Number(string_dividend[i])\r\n        let quotient = Math.floor(remainder/subdivisor)\r\n        ans = ans *10 + quotient\r\n        remainder = remainder - quotient*subdivisor\r\n        i++;\r\n    }\r\n    if((dividend >0 && divisor <0) || (dividend <0 && divisor >0)) return 0-ans\r\n    return ans\r\n};"
  }
}
