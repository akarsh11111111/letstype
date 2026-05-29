export default {
  "id": 2169,
  "name": "Count Operations to Obtain Zero",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-operations-to-obtain-zero",
  "relativeDir": "C/Count Operations to Obtain Zero",
  "slug": "2169-count-operations-to-obtain-zero",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 10,
    "java": 16,
    "python": 12,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 8.75%) | Memory: 7.5 MB (Top 7.30%)\r\nclass Solution {\r\npublic:\r\n    int countOperations(int num1, int num2) {\r\n        if(num1==0 || num2==0) return 0;\r\n        if(num1>=num2) num1=num1-num2;\r\n        else if(num2>num1) num2=num2-num1;\r\n        return 1+countOperations(num1,num2);\r\n    }\r\n};",
    "python": "// Runtime: 77 ms (Top 87.66%) | Memory: 17.40 MB (Top 8.01%)\r\n\r\nclass Solution:\r\n    def countOperations(self, num1: int, num2: int) -> int:\r\n        count = 0\r\n        while num1 != 0 and num2 != 0:\r\n            if num1 >= num2:\r\n                num1 -= num2\r\n            else:\r\n                num2 -= num1\r\n            count +=1\r\n        return count",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 40.8 MB (Top 69.19%)\r\nclass Solution {\r\n    public int countOperations(int num1, int num2) {\r\n        int count=0;\r\n        while(num1!=0 && num2!=0){\r\n            if(num1<num2){\r\n                count+=num2/num1;\r\n                num2=num2%num1;\r\n            }else{\r\n                count+=num1/num2;\r\n                num1=num1%num2;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} num1\r\n * @param {number} num2\r\n * @return {number}\r\n */\r\nvar countOperations = function(num1, num2) {\r\n    let count = 0;\r\n    while (num1 !== 0 && num2 !== 0) {\r\n        if (num1 <= num2) num2 -= num1;\r\n        else num1 -= num2;\r\n        count++;\r\n    }\r\n    return count;\r\n};"
  }
}
