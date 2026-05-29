export default {
  "id": 263,
  "name": "Ugly Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/ugly-number",
  "relativeDir": "U/Ugly Number",
  "slug": "0263-ugly-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 22,
    "python": 13,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 59.11%) | Memory: 5.7 MB (Top 87.39%)\r\nclass Solution {\r\npublic:\r\n   bool isUgly(int n)\r\n  {\r\n     if (n <= 0) return false;\r\n     int n1 = 0;\r\n     while(n != n1)\r\n     {\r\n     n1 = n;\r\n     if ((n % 2) == 0) n /= 2;\r\n     if ((n % 3) == 0) n /= 3;\r\n     if ((n % 5) == 0) n /= 5;\r\n     }\r\n     if (n < 7) return true;\r\n     return false;\r\n  }\r\n};",
    "python": "class Solution:\r\n    def isUgly(self, n: int) -> bool:\r\n        if n == 0:\r\n            return False\r\n        res=[2, 3, 5]\r\n        while n!= 1:\r\n            for i in res:\r\n               if n%i==0:\r\n                   n=n//i\r\n                   break\r\n            else:\r\n                return False\r\n        return True",
    "java": "// Runtime: 2 ms (Top 68.17%) | Memory: 41.1 MB (Top 69.67%)\r\nclass Solution {\r\n    public boolean isUgly(int n) {\r\n        if(n==0) return false; //edge case\r\n        while(n!=1){\r\n            if(n%2==0){\r\n               n=n/2;\r\n            }\r\n            else if(n%3==0){\r\n               n=n/3;\r\n            }\r\n            else if(n%5==0){\r\n               n=n/5;\r\n            }\r\n            else{\r\n                return false;\r\n            }\r\n        }\r\n        return true;\r\n\r\n    }\r\n}",
    "javascript": "// Runtime: 162 ms (Top 5.33%) | Memory: 43.1 MB (Top 65.07%)\r\nvar isUgly = function(n) {\r\n    let condition = true;\r\n    if(n == 0) // 0 has infinite factors. So checking if the number is 0 or not\r\n        return false;\r\n    while(condition){ //applying for true until 2, 3, 5 gets removed from the number\r\n        if(n % 2 == 0)\r\n            n = n / 2;\r\n        else if(n % 3 == 0)\r\n            n = n / 3;\r\n        else if(n % 5 == 0)\r\n            n = n / 5;\r\n        else\r\n        condition = false; //if the number doesnt have 2, 3, 5 in it anymore, this part will execute and will end the while loop\r\n    }\r\n    return n == 1 ? true : false;//checking if the number only had 2, 3, 5 in it or had something else in it as well\r\n};"
  }
}
