export default {
  "id": 50,
  "name": "Pow(x, n)",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/powx-n",
  "relativeDir": "P/Pow(x, n)",
  "slug": "0050-pow-x-n",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 11,
    "python": 25,
    "javascript": 3
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    double myPow(double x, int n) {\r\n        \r\n        if(n==0) return 1;      //anything to the power 0 is 1\r\n        \r\n        if(x==1 || n==1) return x;  //1 to the power anything = 1 or x to the power 1 = x\r\n        \r\n        double ans = 1;\r\n        \r\n        long long int a = abs(n);   //since int range is from -2147483648 to 2147483647, so it can't store absolute value of -2147483648\r\n        \r\n        if(n<0){    //as 2^(-2) = 1/2^2\r\n            if(a%2 == 0) ans = 1/myPow(x*x,a/2);\r\n            else ans = 1/(x * myPow(x,a-1));\r\n        }\r\n        else{\r\n            if(a%2 == 0) ans = myPow(x*x,a/2);\r\n            else ans = x * myPow(x,a-1);\r\n        }\r\n        \r\n        return ans;\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def myPow(self, x: float, n: int) -> float:\r\n        self.x = x\r\n        \r\n        if n == 0:\r\n            return 1\r\n        \r\n        isInverted = False\r\n        if n < 0:\r\n            isInverted = True\r\n            n = -1 * n\r\n\r\n        result = self.pow(n)\r\n        \r\n        return result if not isInverted else 1 / result\r\n        \r\n    def pow(self, n):\r\n        if n == 1:\r\n            return self.x\r\n        \r\n        if n % 2 == 0:\r\n            p = self.pow(n / 2)\r\n            return p * p\r\n        else:\r\n            return self.x * self.pow(n-1)",
    "java": "class Solution {\r\n    public double myPow(double x, int n) {\r\n        if (n == 0) return 1;\r\n        if (n == 1) return x;\r\n        else if (n == -1) return 1 / x;\r\n        double res = myPow(x, n / 2);\r\n        if (n % 2 == 0) return res * res;\r\n        else if (n % 2 == -1) return res * res * (1/x);\r\n        else return res * res * x;\r\n    }\r\n}",
    "javascript": "var myPow = function(x, n) {\r\n    return x**n;\r\n};"
  }
}
