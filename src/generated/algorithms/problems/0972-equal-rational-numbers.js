export default {
  "id": 972,
  "name": "Equal Rational Numbers",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/equal-rational-numbers",
  "relativeDir": "E/Equal Rational Numbers",
  "slug": "0972-equal-rational-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 59,
    "java": 22,
    "python": 49,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 30.23%) | Memory: 5.8 MB (Top 100.00%)\r\nclass Solution {\r\npublic:\r\n    double toDouble(string s){\r\n\r\n       // Strings for each integral, fractional, and repeating part\r\n       string in=\"\", fn=\"\", rn=\"\";\r\n\r\n        int i=0;\r\n\r\n        // Integral\r\n        while(i<s.size() && s[i]!='.'){ in+=s[i]; i++; }\r\n        // Fractional\r\n        i++;\r\n        while(i<s.size() && s[i]!='('){ fn+=s[i]; i++; }\r\n        // Repeating\r\n        i++;\r\n        while(i<s.size() && s[i]!=')'){ rn+=s[i]; i++; }\r\n\r\n         // Number\r\n        double a = 0;\r\n\r\n        // Adding integral part\r\n        if(!in.empty()) a=stoi(in);\r\n\r\n        i=0;\r\n\r\n        // Adding fractional part\r\n        while(i<fn.size()){\r\n            a = a*10 + fn[i] - '0';\r\n            i++;\r\n        }\r\n\r\n        // Adding repeating part\r\n        if(i < 8){\r\n            // If repeatig part isn't there then just add 0s\r\n            if(rn.size() == 0){\r\n                while(i <= 8){ a*=10;i++; }\r\n            }\r\n\r\n            else {\r\n                int j=0;\r\n                while(i <= 8){\r\n                    a = a*10 + rn[j%rn.size()] - '0';\r\n                    j++;\r\n                    i++;\r\n                }\r\n            }\r\n        }\r\n        // Return number/10^8\r\n        return a/10e8;\r\n    }\r\n\r\n    bool isRationalEqual(string s, string t) {\r\n        // Find absolute differance till 8 digits after decimal and compar if its lesser\r\n        double ans = abs(toDouble(s) - toDouble(t));\r\n        return ans < 0.000000002;\r\n    }\r\n};",
    "python": "// Runtime: 69 ms (Top 5.88%) | Memory: 14 MB (Top 23.53%)\r\nclass Solution:\r\n    # inspired from:\r\n    # https://coolconversion.com/math/recurring-decimals-as-a-fraction/\r\n    # to which we wouldn't have access during interview.\r\n\r\n    import typing\r\n    def isRationalEqual(self, s: str, t: str) -> bool:\r\n\r\n        # intuition:\r\n        # write each numbes as fraction: num / den\r\n        # then compare the two fractions.\r\n\r\n        num1, den1 = self.toFraction(s)\r\n        num2, den2 = self.toFraction(t)\r\n\r\n        return den1 * num2 == den2 * num1\r\n\r\n    def toFraction(self, s: str) -> typing.Tuple[int, int]:\r\n        if \".\" not in s:\r\n            return int(s), 1\r\n\r\n        intp, frac = s.split(\".\")\r\n        # decimal dot, but no repeating part:\r\n        # xyz.abc = xyzabc / 1000\r\n        if \"(\" not in frac:\r\n            ifrac = int(frac) if len(frac) > 0 else 0\r\n            num = int(intp) * (10 ** len(frac)) + ifrac\r\n            den = 10 ** len(frac)\r\n            return num, den\r\n\r\n        # this is for cases like a.b(c)\r\n        # let n = a.b(c)\r\n        # then, 10^(len(b+c)) * n = abc.(c)\r\n        # and 10^(len(b)) * n = ab.(c)\r\n        # subtract the two, and solve for n:\r\n        # n = (abc - ab) / (10^len(b + c) - 10^len(b))\r\n        frac, repfrac = frac.split(\"(\")\r\n        repfrac = repfrac[:-1]\r\n\r\n        iintp = int(intp)\r\n        ifrac = int(frac) if len(frac) > 0 else 0\r\n        irep = int(repfrac)\r\n\r\n        return (\r\n            (iintp * (10 ** (len(frac + repfrac))) + ifrac * 10 ** len(repfrac) + irep) - (iintp * 10 ** len(frac) + ifrac),\r\n            (10** len(frac+repfrac) - 10 **len(frac))\r\n        )\r\n    ```",
    "java": "// Runtime: 1 ms (Top 100.0%) | Memory: 41.00 MB (Top 31.82%)\r\n\r\nclass Solution {\r\n\r\n    private List<Double> ratios = Arrays.asList(1.0, 1.0 / 9, 1.0 / 99, 1.0 / 999, 1.0 / 9999);\r\n\r\n    public boolean isRationalEqual(String S, String T) {\r\n        return Math.abs(computeValue(S) - computeValue(T)) < 1e-9;\r\n    }\r\n\r\n    private double computeValue(String s) {\r\n        if (!s.contains(\"(\")) {\r\n            return Double.valueOf(s);\r\n        } else {\r\n            double intNonRepeatingValue = Double.valueOf(s.substring(0, s.indexOf('(')));\r\n            int nonRepeatingLength = s.indexOf('(') - s.indexOf('.') - 1;\r\n            int repeatingLength = s.indexOf(')') - s.indexOf('(') - 1;\r\n            int repeatingValue = Integer.parseInt(s.substring(s.indexOf('(') + 1, s.indexOf(')')));\r\n            return intNonRepeatingValue + repeatingValue * Math.pow(0.1, nonRepeatingLength) * ratios.get(repeatingLength);\r\n        }\r\n    }\r\n}",
    "javascript": "var isRationalEqual = function(s, t) {\r\n    return calculate(s) === calculate(t);\r\n\r\n    function calculate(v) {\r\n        let start = v.split('(')[0] || v;\r\n        let newer = v.split('(')[1] && v.split('(')[1].split(')')[0] || '0';\r\n\r\n        start = start.includes('.') ? start : start + '.';\r\n        newer = newer.padEnd(100, newer);\r\n\r\n        return parseFloat(start + newer);\r\n    }\r\n};"
  }
}
