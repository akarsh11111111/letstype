export default {
  "id": 1808,
  "name": "Maximize Number of Nice Divisors",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximize-number-of-nice-divisors",
  "relativeDir": "M/Maximize Number of Nice Divisors",
  "slug": "1808-maximize-number-of-nice-divisors",
  "availableLanguages": [
    "cpp",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "python": 7
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int power(long long base, int pow){\r\n        if(pow==0)return 1;\r\n        return (pow&1?(base*power(base,pow-1))%1000000007:power((base*base)%1000000007,pow/2))%1000000007;\r\n    }\r\n    int maxNiceDivisors(int primeFactors) {\r\n        long ans = 1;\r\n        if(primeFactors%3==1&&primeFactors>1){\r\n            ans  = 4;\r\n            primeFactors -= 4;\r\n        }\r\n        else if(primeFactors%3==2){\r\n            ans =2;\r\n            primeFactors-=2;\r\n        }\r\n        return (power(3,primeFactors/3)*ans)%1000000007;\r\n    }\r\n};",
    "python": "MOD = 10**9 + 7\r\nclass Solution:\r\n    def maxNiceDivisors(self, n: int) -> int:\r\n        if n <= 2: return n\r\n        i, c = divmod(n, 3)\r\n        if not c: return pow(3, i, MOD)\r\n        return (self.maxNiceDivisors(n-2)*2) % MOD"
  }
}
