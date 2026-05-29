export default {
  "id": 476,
  "name": "Number Complement",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-complement",
  "relativeDir": "N/Number Complement",
  "slug": "0476-number-complement",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 16,
    "python": 8,
    "javascript": 4
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.8 MB (Top 78.74%)\r\nclass Solution {\r\npublic:\r\n    int findComplement(int num) {\r\n        long n=1;\r\n        while(n-1<num)\r\n        {\r\n            n<<=1;\r\n        }\r\n        n--;\r\n        return n-num;\r\n    }\r\n};",
    "python": "# Runtime: 62 ms (Top 13.03%) | Memory: 13.8 MB (Top 53.14%)\r\n\r\nclass Solution:\r\n    def findComplement(self, num: int) -> int:\r\n        i = 0\r\n        while(2**i <= num):\r\n            i += 1\r\n        return (2**i - num - 1)",
    "java": "class Solution {\r\n    public int findComplement(int num) {\r\n       int x=0;int sum=0;\r\n        while(num>0){\r\n           int i = num%2;\r\n            if(i==0){\r\n               sum+=Math.pow(2,x++);\r\n            }\r\n            else{\r\n                x++;\r\n            }\r\n            num/=2;\r\n        }\r\n        return sum;\r\n    }\r\n}",
    "javascript": "// Runtime: 73 ms (Top 73.80%) | Memory: 42.2 MB (Top 25.76%)\r\nvar findComplement = function(num) {\r\n    return num ^ parseInt(Array(num.toString(2).length).fill(\"1\").join(\"\"), 2)\r\n}"
  }
}
