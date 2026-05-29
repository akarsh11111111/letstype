export default {
  "id": 633,
  "name": "Sum of Square Numbers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-square-numbers",
  "relativeDir": "S/Sum of Square Numbers",
  "slug": "0633-sum-of-square-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 21,
    "python": 17,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool judgeSquareSum(int c) {\r\n        long long start=0,end=0;\r\n        while(end*end<c){\r\n            end++;\r\n        }\r\n        long long target=c;\r\n        while(start<=end){\r\n            long long product=start*start+end*end;\r\n            if(product==target){\r\n                return true;\r\n            } else if(product>c){\r\n                end--;\r\n            } else {\r\n                start++;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "# Runtime: 669 ms (Top 21.17%) | Memory: 13.8 MB (Top 63.98%)\r\nimport math\r\n\r\nclass Solution:\r\n    def judgeSquareSum(self, c: int) -> bool:\r\n\r\n        a = 0\r\n\r\n        while a ** 2 <= c:\r\n            b = math.sqrt(c - a ** 2)\r\n\r\n            if b.is_integer():\r\n                return True\r\n\r\n            a += 1\r\n\r\n        return False",
    "java": "// Runtime: 4 ms (Top 55.1%) | Memory: 39.57 MB (Top 27.7%)\r\n\r\nclass Solution {\r\n    public boolean judgeSquareSum(int c) {\r\n        long a = 0;\r\n        long b = (long) Math.sqrt(c);\r\n\r\n        while(a<=b){\r\n            if(((a*a) + (b*b)) == c){\r\n                return true;\r\n            }\r\n            else if((((a*a)+(b*b)) < c)){\r\n                a++;\r\n            }\r\n            else{\r\n                b--;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 52 ms (Top 89.65%) | Memory: 42.70 MB (Top 31.03%)\r\n\r\nvar judgeSquareSum = function(c) {\r\n    if (c === 0) {\r\n        return true\r\n    }\r\n    for (let a = 0; a*a < c; a++) {\r\n        let b = Math.sqrt(parseFloat(c-a*a));\r\n        if (b - Math.round(b) === 0) {\r\n            return true;\r\n        }\r\n    }\r\n        return false\r\n};"
  }
}
