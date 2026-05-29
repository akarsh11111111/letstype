export default {
  "id": 166,
  "name": "Fraction to Recurring Decimal",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/fraction-to-recurring-decimal",
  "relativeDir": "F/Fraction to Recurring Decimal",
  "slug": "0166-fraction-to-recurring-decimal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 36,
    "python": 17,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string fractionToDecimal(int numerator, int denominator) {\r\n        unordered_map<int, int> umap;\r\n        string result = \"\";\r\n        if ((double) numerator / (double) denominator < 0) result.push_back('-');\r\n        long long l_numerator = numerator > 0 ? numerator : -(long long) numerator;\r\n        long long l_denominator = denominator > 0 ? denominator : -(long long) denominator;\r\n        long long quotient = l_numerator / l_denominator;\r\n        long long remainder = l_numerator % l_denominator;\r\n        result.append(to_string(quotient));\r\n        if (remainder == 0) return result;\r\n        result.push_back('.');\r\n        int position = result.size();\r\n        umap[remainder] = position++;\r\n        while (remainder != 0) {\r\n            l_numerator = remainder * 10;\r\n            quotient = l_numerator / l_denominator;\r\n            remainder = l_numerator % l_denominator;\r\n            char digit = '0' + quotient;\r\n            result.push_back(digit);\r\n            if (umap.find(remainder) != umap.end()) {\r\n                result.insert(umap[remainder], 1, '(');\r\n                result.push_back(')');\r\n                return result;\r\n            }\r\n            umap[remainder] = position++;\r\n        }\r\n        return result;\r\n    }\r\n};",
    "python": "from collections import defaultdict\r\nclass Solution:\r\n    def fractionToDecimal(self, numerator: int, denominator: int) -> str:\r\n        sign = \"\" if numerator*denominator >= 0 else \"-\"\r\n        numerator, denominator = abs(numerator), abs(denominator)\r\n        a = numerator//denominator\r\n        numerator %= denominator\r\n        if not numerator: return sign+str(a)\r\n        fractions = []\r\n        index = defaultdict(int)\r\n        while 10*numerator not in index:\r\n            numerator *= 10\r\n            index[numerator] = len(fractions)\r\n            fractions.append(str(numerator//denominator))\r\n            numerator %= denominator\r\n        i = index[10*numerator]\r\n        return sign+str(a)+\".\"+\"\".join(fractions[:i])+\"(\"+\"\".join(fractions[i:])+\")\" if numerator else sign+str(a)+\".\"+\"\".join(fractions[:i])",
    "java": "\r\nclass Solution {\r\n    public String fractionToDecimal(int numerator, int denominator) {\r\n        if(numerator == 0){\r\n            return  \"0\";\r\n        }\r\n        \r\n        StringBuilder sb = new StringBuilder(\"\");\r\n        if(numerator<0 && denominator>0 || numerator>0 && denominator<0){\r\n            sb.append(\"-\");\r\n        }\r\n        \r\n        long divisor = Math.abs((long)numerator);\r\n        long dividend = Math.abs((long)denominator);\r\n        long remainder = divisor % dividend;\r\n        sb.append(divisor / dividend);\r\n        \r\n        if(remainder == 0){\r\n            return sb.toString();\r\n        }\r\n        sb.append(\".\");\r\n        HashMap<Long, Integer> map = new HashMap<Long, Integer>();\r\n        while(remainder!=0){\r\n            if(map.containsKey(remainder)){\r\n                sb.insert(map.get(remainder), \"(\");\r\n                sb.append(\")\");\r\n                break;\r\n            }\r\n            map.put(remainder, sb.length());\r\n            remainder*= 10;\r\n            sb.append(remainder/dividend);\r\n            remainder%= dividend;\r\n        }\r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "var fractionToDecimal = function(numerator, denominator) {\r\n    if(numerator == 0) return '0'\r\n    let result = ''\r\n    if(numerator*denominator <0){\r\n        result += '-'\r\n    }\r\n    \r\n    let dividend = Math.abs(numerator)\r\n    let divisor = Math.abs(denominator)\r\n    result += Math.floor(dividend/divisor).toString()\r\n    \r\n    let remainder = dividend % divisor\r\n    if(remainder == 0) return result\r\n    \r\n    result += '.'\r\n    \r\n    let map1 = new Map()\r\n    while(remainder != 0){\r\n        if(map1.has(remainder)){\r\n            let i = map1.get(remainder)\r\n            result = result.slice(0, i) + '(' + result.slice(i) + ')'\r\n            break;\r\n        }\r\n        map1.set(remainder, result.length)\r\n        remainder *= 10\r\n        result += Math.floor(remainder/divisor).toString()\r\n        remainder %= divisor\r\n    }\r\n    return result\r\n};"
  }
}
