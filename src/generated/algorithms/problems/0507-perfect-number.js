export default {
  "id": 507,
  "name": "Perfect Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/perfect-number",
  "relativeDir": "P/Perfect Number",
  "slug": "0507-perfect-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 20,
    "python": 10,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 5.9 MB (Top 68.45%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool checkPerfectNumber(int num) {\r\n    // we are initialising sum with 1 instead of 0 because 1 will be divisor of every number\r\n        int sum=1;\r\n        for(int i=2; i<sqrt(num); i++){\r\n            if(num%i==0){\r\n            // it checks if both are same factors, for ex, if num=9, i=3, num/i is also equal to 3. It is done so that repeated factors aren't added.\r\n                if(i==num/i){\r\n                    sum += i;\r\n                }\r\n                else{\r\n                // we are adding n/i because since we are running the loop for sqrt(num), we will be missing divisors >sqrt(num) so tto include that factor we'll add num/i; for ex if we have 64 as number than 8 is sqrt but 16 and 32 also divides 64 but our loop won't consider that case; so we are adding num/i, which means with 2 we are adding 32 and with 4 we are adding 16.\r\n                    sum += i + num/i;\r\n                }\r\n            }\r\n        }\r\n        if(sum==num && num!=1){\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def checkPerfectNumber(self, num: int) -> bool:\r\n        sum = 0\r\n        root = num**0.5  \r\n        if num ==1:\r\n            return False\r\n        for i in range(2,int(root)+1):\r\n            if num%i== 0:\r\n                sum +=(num//i)+i\r\n        return sum+1 == num",
    "java": "// Runtime: 3 ms (Top 51.95%) | Memory: 40.9 MB (Top 44.38%)\r\nclass Solution {\r\n    public boolean checkPerfectNumber(int num) {\r\n        if(num==1)\r\n        return false;\r\n\r\n        int sum = 1;\r\n        for(int i=2; i<Math.sqrt(num); i++){\r\n            if(num%i==0){\r\n            sum += i + num / i;\r\n            }\r\n        }\r\n        if(sum==num){\r\n        return true;\r\n        }\r\n        else{\r\n        return false;\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 4252 ms (Top 41.99%) | Memory: 42.1 MB (Top 50.71%)\r\n    /**\r\n * @param {number} num\r\n * @return {boolean}\r\n */\r\nvar checkPerfectNumber = function(num) {\r\n    let total = 0\r\n\r\n    for(let i = 1 ; i < num;i++){\r\n        if(num % i == 0){\r\n            total += i\r\n        }\r\n    }\r\n    return total == num ? true : false\r\n};"
  }
}
