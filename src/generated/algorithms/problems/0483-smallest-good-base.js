export default {
  "id": 483,
  "name": "Smallest Good Base",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/smallest-good-base",
  "relativeDir": "S/Smallest Good Base",
  "slug": "0483-smallest-good-base",
  "availableLanguages": [
    "cpp",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "python": 11
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 73.58%) | Memory: 6.3 MB (Top 42.92%)\r\nclass Solution {\r\npublic:\r\n    string smallestGoodBase(string n) {\r\n        string ans;\r\n        long long nn = stol(n);\r\n\r\n        // since n<1E18, the largest possible number of digits is 62.\r\n        for (int i=62;i>2;i--){\r\n            // Since n = k^i-1 + k^i-2 + ... + k + 1, a good estimate of k is pow(n, 1/(i-1))\r\n            long long k = pow(nn,1.0/(i-1));\r\n            if (k==1) continue;\r\n\r\n            long long sum = 1,kk=1;\r\n\r\n            // Calculate the sum of i-ones base k. Although we have a direct approach using the formula of geometric series sum, n = (k^i - 1)/(k-1), but this approach has two issues: 1) k^i may be larger than LONG_MAX; 2) the pow() function returns a float number which only has 15 decimal digits precision, and not suitable for calculation of 18 digit int.\r\n            for (int j=1;j<i;j++){\r\n                kk*=k;\r\n                sum+=kk;\r\n            }\r\n\r\n            if (sum==nn) return to_string(k);\r\n        }\r\n\r\n        // We always have a trivial solution n-1. The number is 2 digits base (n-1);\r\n        return to_string(nn-1);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def smallestGoodBase(self, n: str) -> str:\r\n        import math\r\n        n = int(n)\r\n        max_m = math.floor(math.log(n, 2))\r\n        ans = 0\r\n        for m in range(max_m, 0, -1):\r\n            k = int(n ** (1 / m))\r\n            if (k ** (m + 1)  - 1) // (k - 1) == n:\r\n                return str(k)\r\n        return str(n - 1)"
  }
}
