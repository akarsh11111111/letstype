export default {
  "id": 984,
  "name": "String Without AAA or BBB",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/string-without-aaa-or-bbb",
  "relativeDir": "S/String Without AAA or BBB",
  "slug": "0984-string-without-aaa-or-bbb",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 27,
    "python": 45,
    "javascript": 42
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    string strWithout3a3b(int a, int b) {\r\n        string ans=\"\";\r\n        while(a and b){\r\n            if(a > b) ans += \"aab\", a--;\r\n            else if(b > a) ans +=\"bba\", b--;\r\n            else ans += \"ab\";\r\n            a--, b--;\r\n        }\r\n        while(a) ans +='a' , a--;\r\n        while(b) ans +='b' , b--;\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def strWithout3a3b(self, a: int, b: int) -> str:\r\n        if a<3 and b<3:\r\n            return 'a'*a+'b'*b\r\n        s=''\r\n        if a>=b:\r\n            k=a//b\r\n            \r\n            if a//b!=a/b:\r\n              \r\n                k+=1\r\n            if k>=3:\r\n                k=2\r\n            while a>0 or b>0:\r\n               \r\n                if a>k:\r\n                    s+='a'*k  \r\n                else:\r\n                    s+='a'*a\r\n                a-=k\r\n                if b>0:\r\n                    s+='b'\r\n                b-=1\r\n                if a==b:\r\n                    k=1\r\n        if a<b:\r\n            k=b//a\r\n            if b//a!=b/a:\r\n               \r\n                k+=1\r\n            if k>=3:\r\n                k=2\r\n            while b>0 or a>0:\r\n                \r\n                if b>k:\r\n                    s+='b'*k  \r\n                else:\r\n                    s+='b'*b\r\n                b-=k\r\n                if a>0:\r\n                    s+='a'\r\n                a-=1\r\n                if a==b:\r\n                    k=1\r\n        return s",
    "java": "// Runtime: 1 ms (Top 90.03%) | Memory: 41.4 MB (Top 67.52%)\r\nclass Solution {\r\n    public String strWithout3a3b(int a, int b) {\r\n        StringBuilder sb = new StringBuilder();\r\n        int x = Math.min(a, Math.min(b, Math.abs(a - b))); // TAKE THE MIN OF (a, b, abs(a - b))\r\n        if (a > b){\r\n            sb.append(\"aab\".repeat(x));\r\n            b -= x;\r\n            a -= 2 * x;\r\n        }\r\n        if (a < b){\r\n            sb.append(\"bba\".repeat(x));\r\n            b -= 2 * x;\r\n            a -= x;\r\n        }\r\n        if (a == b){\r\n            sb.append(\"ab\".repeat(a));\r\n        }\r\n        if (a == 0){\r\n            sb.append(\"b\".repeat(b));\r\n        }\r\n        if (b == 0){\r\n            sb.append(\"a\".repeat(a));\r\n        }\r\n        return sb.toString();\r\n    }\r\n}",
    "javascript": "// Runtime: 125 ms (Top 10.81%) | Memory: 42.4 MB (Top 45.95%)\r\n/**\r\n * @param {number} a\r\n * @param {number} b\r\n * @return {string}\r\n */\r\nvar strWithout3a3b = function(a, b) {\r\n    let r = '';\r\n\r\n    let A = 'a', AA = A + A;\r\n    let B = 'b', BB = B + B;\r\n\r\n    while (a > 0 || b > 0) {\r\n        if (a > b) {\r\n            a = calculate(a, A, AA);\r\n            b = calculate(b, B, BB, true);\r\n        }\r\n        else {\r\n            b = calculate(b, B, BB);\r\n            a = calculate(a, A, AA, true);\r\n        }\r\n    }\r\n\r\n    return r;\r\n\r\n    function calculate(v, s, ss, l = false) {\r\n        if (l) {\r\n            if (v > 0) {\r\n                r += s, v -= 1;\r\n            }\r\n\r\n            return v;\r\n        }\r\n\r\n        let c = v >= 2 && r[r.length - 1] !== s;\r\n\r\n        r += c ? ss : s;\r\n        v -= c ? 2 : 1;\r\n\r\n        return v;\r\n    }\r\n};"
  }
}
