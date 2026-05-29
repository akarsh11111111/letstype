export default {
  "id": 69,
  "name": "Sqrt(x)",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sqrtx",
  "relativeDir": "S/Sqrt(x)",
  "slug": "0069-sqrt-x",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 11,
    "python": 14,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int mySqrt(int x) {\r\n        int s = 0 , e = x , mid;\r\n        \r\n        while(s<e)\r\n        {\r\n            mid = s + (e-s)/2 ;\r\n            if(e-s == 1)\r\n                break ;\r\n            long double sqr = (long double)mid *mid;\r\n            if(sqr <= x)\r\n                s = mid ;\r\n            else\r\n                e = mid - 1 ;\r\n        }\r\n        if(e*e <= x )\r\n            return e ;\r\n        else\r\n            return s ;\r\n    }\r\n}; ```",
    "python": "class Solution:\r\n    def mySqrt(self, x: int) -> int:\r\n        beg =0\r\n        end =x\r\n        while beg <=end:\r\n            mid = (beg+end)//2\r\n            sqr = mid*mid\r\n            if sqr == x:\r\n                return mid\r\n            elif sqr < x:\r\n                beg = mid+1\r\n            else:\r\n                end = mid-1\r\n        return end",
    "java": "// Runtime: 34 ms (Top 10.30%) | Memory: 41.3 MB (Top 62.51%)\r\n\r\nclass Solution {\r\n    public int mySqrt(int x) {\r\n        long answer = 0;\r\n        while (answer * answer <= x) {\r\n            answer += 1;\r\n        }\r\n        return (int)answer - 1;\r\n    }\r\n}",
    "javascript": "// Runtime: 112 ms (Top 59.43%) | Memory: 43.6 MB (Top 60.45%)\r\n/**\r\n * @param {number} x\r\n * @return {number}\r\n */\r\nvar mySqrt = function(x) {\r\n    const numx = x;\r\n    let num = 0;\r\n\r\n    while (num <= x) {\r\n        const avg = Math.floor((num+x) / 2);\r\n        if (avg * avg > numx) x = avg - 1;\r\n        else num = avg + 1;\r\n    }\r\n    return x;\r\n};"
  }
}
