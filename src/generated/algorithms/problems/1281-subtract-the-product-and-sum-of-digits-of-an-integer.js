export default {
  "id": 1281,
  "name": "Subtract the Product and Sum of Digits of an Integer",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer",
  "relativeDir": "S/Subtract the Product and Sum of Digits of an Integer",
  "slug": "1281-subtract-the-product-and-sum-of-digits-of-an-integer",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 12,
    "python": 15,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 6.1 MB (Top 26.58%)\r\nclass Solution {\r\npublic:\r\n    int subtractProductAndSum(int n) {\r\n        vector<int> digit;\r\n        int product=1;\r\n        int sum=0;\r\n        while(n>0){\r\n            digit.push_back(n%10);\r\n            n/=10;\r\n        }\r\n        for(int i=0;i<digit.size();i++){\r\n            product*=digit[i];\r\n            sum+=digit[i];\r\n        }\r\n        return product-sum;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def subtractProductAndSum(self, n: int) -> int:\r\n        n_to_list = list(str(n))\r\n        \r\n        sum_of_digits = 0 \r\n        for num in n_to_list:\r\n            sum_of_digits = sum_of_digits + int(num)\r\n        \r\n        product_of_digits = 1\r\n        for num in n_to_list:\r\n            product_of_digits = product_of_digits * int(num)\r\n            \r\n        answer = product_of_digits - sum_of_digits\r\n        \r\n        return answer",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 39.3 MB (Top 90.51%)\r\nclass Solution {\r\n    public int subtractProductAndSum(int n) {\r\n        int mul=1,sum=0;\r\n        while(n!=0){\r\n            sum=sum+n%10;\r\n            mul=mul*(n%10);\r\n            n=n/10;\r\n        }\r\n        return mul-sum;\r\n    }\r\n}",
    "javascript": "// Runtime: 76 ms (Top 70.55%) | Memory: 42 MB (Top 76.90%)\r\n\r\nvar subtractProductAndSum = function(n) {\r\n  let product=1,sum=0\r\n  n=n.toString().split('')\r\n  n.forEach((x)=>{\r\n   product *=parseInt(x)\r\n   sum +=parseInt(x)\r\n  }\r\n  )\r\n    return product-sum\r\n  };"
  }
}
