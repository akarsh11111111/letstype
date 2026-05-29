export default {
  "id": 1006,
  "name": "Clumsy Factorial",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/clumsy-factorial",
  "relativeDir": "C/Clumsy Factorial",
  "slug": "1006-clumsy-factorial",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "python": 14,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.9 MB (Top 74.03%)\r\n\r\nclass Solution {\r\npublic:\r\n    int calc(int num) {\r\n        int a = num, b = num-1, c = num-2;\r\n        return a*b/c;\r\n    }\r\n    int clumsy(int n) {\r\n        if(n == 1) return 1;\r\n        if(n == 2) return 2;\r\n        if(n == 3) return 6;\r\n        int res = calc(n), i;\r\n        res += n-3;\r\n        for(i=n-4;i>=4;i-=4) {\r\n            int val = calc(i);\r\n            res -= val; res += i-3;\r\n        }\r\n        if(i == 1) return res -1;\r\n        else if(i==2) return res - 2;\r\n        else if(i==3) return res - 6;\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 87 ms (Top 67.15%) | Memory: 13.9 MB (Top 59.65%)\r\nclass Solution:\r\n    def clumsy(self, n: int) -> int:\r\n        if(n>2):\r\n            sum=n*(n-1)//(n-2)+(n-3)\r\n        else:\r\n            sum=n\r\n        for i in range(n-4,0,-4):\r\n            if(i<3):\r\n                sum=sum-i\r\n                break;\r\n            sum=sum-(i)*(i-1)//(i-2)+(i-3)\r\n\r\n        return sum",
    "javascript": "// Runtime: 56 ms (Top 66.6%) | Memory: 44.56 MB (Top 25.0%)\r\n\r\nvar clumsy = function(N) {\r\n    let s = [N];\r\n    let op = \"*\"\r\n    for (let i=N-1; i>0; i--) {\r\n        n = s.length;\r\n        switch (op) {\r\n            case \"*\":\r\n                s[n-1] *= i;\r\n                op = \"/\"\r\n                break\r\n            case \"/\":\r\n                s[n-1] = (s[n-1]<0) ? -Math.floor(Math.abs(s[n-1])/i) : Math.floor(s[n-1]/i)\r\n                op = \"+\"\r\n                break;\r\n            case \"+\":\r\n                s.push(i)\r\n                op = \"-\";\r\n                break;\r\n            case \"-\":\r\n                s.push(-i)\r\n                op = \"*\";\r\n                break;\r\n        }\r\n    }\r\n    // console.log(s)\r\n    let ans = s.reduce((a,b) => a+b)\r\n    return ans\r\n};"
  }
}
