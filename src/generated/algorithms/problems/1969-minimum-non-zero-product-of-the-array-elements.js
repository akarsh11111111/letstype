export default {
  "id": 1969,
  "name": "Minimum Non-Zero Product of the Array Elements",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-non-zero-product-of-the-array-elements",
  "relativeDir": "M/Minimum Non-Zero Product of the Array Elements",
  "slug": "1969-minimum-non-zero-product-of-the-array-elements",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 26,
    "python": 4,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    long long myPow(long long base, long long exponent, long long mod) {\r\n        if (exponent == 0) return 1;\r\n        if (exponent == 1) return base % mod;\r\n        \r\n        long long tmp = myPow(base, exponent/2, mod);\r\n        \r\n        if (exponent % 2 == 0) { // (base ^ exponent/2) * (base ^ exponent/2)\r\n            return (tmp * tmp) % mod;\r\n        }\r\n        else { // (base ^ exponent/2) * (base ^ exponent/2) * base\r\n            tmp = tmp * tmp % mod;\r\n            base %= mod;\r\n            return (tmp * base) % mod;\r\n        }\r\n    }\r\n    \r\n    int minNonZeroProduct(int p) {\r\n        long long range = pow(2, p);\r\n        range--;\r\n        long long mod = pow(10, 9) + 7;\r\n        long long tmp = myPow(range-1, range/2, mod);\r\n        return (tmp * (range%mod)) % mod;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minNonZeroProduct(self, p: int) -> int:\r\n        mod = 10**9+7\r\n        return (pow(2**p-2,2**(p-1)-1,mod)*(2**p-1))%mod",
    "java": "class Solution {\r\n    public int mod = 1_000_000_007;\r\n    public int minNonZeroProduct(int p) {\r\n        if (p == 1) return 1;\r\n        \r\n        long mx = (long)(Math.pow(2, p)) - 1;\r\n        long sm = mx - 1;\r\n        long n = sm/2;\r\n        long sum = rec(sm, n);\r\n        \r\n        return (int)(sum * (mx % mod) % mod); \r\n    }\r\n    \r\n    public long rec(long val, long n) {\r\n        if (n == 0) return 1;\r\n        if (n == 1) return (val % mod);\r\n        \r\n        long newVal = ((val % mod) * (val % mod)) % mod;\r\n        \r\n        if (n % 2 != 0) {\r\n            return ((rec(newVal, n/2) % mod) * (val % mod)) % mod;\r\n        }\r\n        \r\n        return rec(newVal, n/2) % mod;\r\n    }\r\n}",
    "javascript": "var minNonZeroProduct = function(p) {\r\n    p = BigInt(p);\r\n    \r\n    const MOD = BigInt(1e9 + 7);\r\n    const first = ((1n << p) - 1n);\r\n    \r\n   const half = first / 2n;\r\n    \r\n    const second = powMOD(first - 1n, half); \r\n    \r\n    return (first * second) % MOD;\r\n    \r\n    function powMOD(num, exp) {\r\n        if (exp === 0n) return 1n; \r\n        \r\n        const tmp = powMOD(num, exp >> 1n);\r\n        \r\n        let res = (tmp * tmp) % MOD;\r\n        \r\n        if (exp % 2n) res = (res * num) % MOD;\r\n        \r\n        return res;\r\n    }\r\n};"
  }
}
