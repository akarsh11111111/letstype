export default {
  "id": 2180,
  "name": "Count Integers With Even Digit Sum",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-integers-with-even-digit-sum",
  "relativeDir": "C/Count Integers With Even Digit Sum",
  "slug": "2180-count-integers-with-even-digit-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 23,
    "python": 13,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int countEven(int num) {\r\n        int temp = num, sum = 0;\r\n        while (num > 0) {\r\n            sum += num % 10;\r\n            num /= 10;\r\n        }\r\n        return sum % 2 == 0 ? temp / 2 : (temp - 1) / 2;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countEven(self, num: int) -> int:\r\n        if num%2!=0:\r\n            return (num//2)\r\n        s=0\r\n        t=num\r\n        while t:\r\n            s=s+(t%10)\r\n            t=t//10\r\n        if s%2==0:\r\n            return num//2\r\n        else:\r\n            return (num//2)-1",
    "java": "// Runtime: 1 ms (Top 89.76%) | Memory: 40.70 MB (Top 10.24%)\r\n\r\nclass Solution\r\n{\r\n    public int countEven(int num)\r\n    {\r\n        int count = 0;\r\n        for(int i = 1; i <= num; i++)\r\n            if(sumDig(i))\r\n                count++;\r\n        return count;\r\n    }\r\n    private boolean sumDig(int n)\r\n    {\r\n        int sum = 0;\r\n        while(n > 0)\r\n        {\r\n            sum += n % 10;\r\n            n /= 10;\r\n        }\r\n\t\treturn (sum&1) == 0 ? true : false;\r\n    }\r\n}",
    "javascript": "// Runtime: 76 ms (Top 81.10%) | Memory: 42.1 MB (Top 84.25%)\r\nvar countEven = function(num) {\r\n    let count=0;\r\n    for(let i=2;i<=num;i++){\r\n        if(isEven(i)%2==0){\r\n            count++;\r\n        }\r\n    }\r\n    return count\r\n};\r\n\r\nconst isEven = (c) =>{\r\n    let sum=0;\r\n    while(c>0){\r\n        sum+=(c%10)\r\n        c=Math.floor(c/10)\r\n    }\r\n    return sum\r\n}"
  }
}
