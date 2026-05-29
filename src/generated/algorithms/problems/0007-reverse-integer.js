export default {
  "id": 7,
  "name": "Reverse Integer",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reverse-integer",
  "relativeDir": "R/Reverse Integer",
  "slug": "0007-reverse-integer",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 14,
    "python": 22,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 6 ms (Top 24.99%) | Memory: 5.8 MB (Top 76.00%)\r\nclass Solution {\r\npublic:\r\n    int reverse(int x) {\r\n        long res = 0;\r\n        while (abs(x) > 0) {\r\n            res = (res + x % 10) * 10;\r\n            x /= 10;\r\n        }\r\n        x < 0 ? res = res / 10 * -1 : res = res / 10;\r\n        if (res < INT32_MIN || res > INT32_MAX) {\r\n            res = 0;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "import bisect\r\nclass Solution:\r\n    def reverse(self, x: int) -> int:\r\n\r\n        flag = 0\r\n        if x<0:\r\n            x = abs(x)\r\n            flag = 1\r\n            \r\n        l = [i for i in str(x)]\r\n        l.reverse()\r\n        \r\n        ret = ''.join(l)\r\n        ret = int(ret)\r\n        \r\n        if flag == 1:\r\n            ret = ret*-1\r\n            \r\n        if ((ret >= (-(2**31))) and (ret<=((2**31)-1))):\r\n            return ret\r\n        else:\r\n            return 0",
    "java": "// Runtime: 1 ms (Top 97.59%) | Memory: 39.60 MB (Top 71.8%)\r\n\r\nclass Solution {\r\n    public int reverse(int x) {\r\n        long reverse = 0;\r\n        while (x != 0) {\r\n            int digit = x % 10;\r\n            reverse = reverse * 10 + digit;\r\n            x = x / 10;\r\n        }\r\n        if (reverse > Integer.MAX_VALUE || reverse < Integer.MIN_VALUE) return 0;\r\n        return (int) reverse;\r\n    }\r\n}",
    "javascript": "var reverse = function(x) {\r\n    let val = Math.abs(x)\r\n    let res = 0\r\n    while(val !=0){\r\n         res = (res*10) + val %10\r\n         val = Math.floor(val/10)\r\n    }\r\n    if(x < 0)res = 0 - res\r\n    return (res > ((2**31)-1) || res < (-2)**31) ? 0 : res \r\n};"
  }
}
