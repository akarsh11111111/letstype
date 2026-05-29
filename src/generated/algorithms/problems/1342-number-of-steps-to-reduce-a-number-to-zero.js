export default {
  "id": 1342,
  "name": "Number of Steps to Reduce a Number to Zero",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero",
  "relativeDir": "N/Number of Steps to Reduce a Number to Zero",
  "slug": "1342-number-of-steps-to-reduce-a-number-to-zero",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 13,
    "python": 11,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 38.53%) | Memory: 5.8 MB (Top 74.06%)\r\nclass Solution {\r\npublic:\r\n    int numberOfSteps(int num) {\r\n        int count = 0;\r\n        while (num > 0)\r\n        {\r\n            if (num % 2==0)\r\n            {\r\n                num = num/2;\r\n                count++;\r\n            }\r\n            else\r\n            {\r\n                if(num > 1)\r\n                {\r\n                    num -= 1;\r\n                    count++;\r\n                }\r\n                else\r\n                {\r\n                    count++;\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "# Runtime: 70 ms (Top 5.12%) | Memory: 13.9 MB (Top 52.31%)\r\nclass Solution:\r\n    def numberOfSteps(self, num: int) -> int:\r\n        count=0\r\n        while num:\r\n            if num%2:\r\n                num=num-1\r\n            else:\r\n                num=num//2\r\n            count+=1\r\n        return count",
    "java": "class Solution {\r\n    public int numberOfSteps(int num) {\r\n        return helper(num,0);\r\n    }\r\n    public int helper(int n,int c){\r\n        if(n==0) return c;\r\n        if(n%2==0){              //check for even no.\r\n            return helper(n/2,c+1);\r\n        }\r\n        \r\n        return helper(n-1,c+1);\r\n    }\r\n}",
    "javascript": "// Runtime: 97 ms (Top 35.24%) | Memory: 41.7 MB (Top 89.00%)\r\nvar numberOfSteps = function(num) {\r\n    let steps = 0\r\n    while (num > 0) {\r\n        if (num % 2 === 0) {\r\n            num = num/2\r\n            steps++\r\n        }\r\n\r\n        if (num % 2 === 1) {\r\n            num--\r\n            steps++\r\n        }\r\n    }\r\n\r\n    return steps\r\n\r\n};"
  }
}
