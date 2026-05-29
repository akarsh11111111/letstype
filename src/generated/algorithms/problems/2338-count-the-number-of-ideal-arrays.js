export default {
  "id": 2338,
  "name": "Count the Number of Ideal Arrays",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-the-number-of-ideal-arrays",
  "relativeDir": "C/Count the Number of Ideal Arrays",
  "slug": "2338-count-the-number-of-ideal-arrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 43,
    "python": 56,
    "javascript": 24
  },
  "languages": {
    "cpp": "int comb[10001][14] = { 1 }, cnt[10001][14] = {}, mod = 1000000007;\r\nclass Solution {\r\npublic: \r\nint idealArrays(int n, int maxValue) {\r\n    if (comb[1][1] == 0) { // one-time computation.\r\n        for (int s = 1; s <= 10000; ++s) // nCr (comb)\r\n            for (int r = 0; r < 14; ++r)\r\n                comb[s][r] = r == 0 ? 1 : (comb[s - 1][r - 1] + comb[s - 1][r]) % mod;\r\n        for (int div = 1; div <= 10000; ++div) { // Sieve of Eratosthenes\r\n            ++cnt[div][0];\r\n            for (int i = 2 * div; i <= 10000; i += div)\r\n                for (int bars = 0; cnt[div][bars]; ++bars)\r\n                    cnt[i][bars + 1] += cnt[div][bars];\r\n        }\r\n    }\r\n    int res = 0;\r\n    for (int i = 1; i <= maxValue; ++i)\r\n        for (int bars = 0; bars < min(14, n) && cnt[i][bars]; ++bars)\r\n            res = (1LL * cnt[i][bars] * comb[n - 1][bars] + res) % mod;\r\n    return res;\r\n}\r\n};",
    "python": "from math import sqrt\r\n\r\nclass Solution:\r\n    def primesUpTo(self, n):\r\n        primes = set(range(2, n + 1))\r\n        for i in range(2, n):\r\n            if i in primes:\r\n                it = i * 2\r\n                while it <= n:\r\n                    if it in primes:\r\n                        primes.remove(it)\r\n                    it += i\r\n\r\n        return primes\r\n\r\n    def getPrimeFactors(self, n, primes):\r\n        ret = {}\r\n        sq = int(math.sqrt(n))\r\n\r\n        for p in primes:\r\n            if n in primes:\r\n                ret[n] = 1\r\n                break\r\n\r\n            while n % p == 0:\r\n                ret[p] = ret.get(p, 0) + 1\r\n                n //= p\r\n\r\n            if n <= 1:\r\n                break\r\n\r\n        return ret\r\n        \r\n    def idealArrays(self, n: int, maxValue: int) -> int:\r\n        mod = 10**9 + 7\r\n        ret = 0\r\n        primes = self.primesUpTo(maxValue)\r\n        \r\n        for num in range(1, maxValue + 1):\r\n            # find number of arrays that can end with num\r\n            # for each prime factor, we can add it at any index i that we want\r\n            pf = self.getPrimeFactors(num, primes)\r\n            cur = 1\r\n            for d in pf:\r\n                ct = pf[d]\r\n                v = n\r\n                # there are (n + 1) choose k ways to add k prime factors\r\n                for add in range(1, ct):\r\n                    v *= (n + add)\r\n                    v //= (add + 1)\r\n                \r\n                cur = (cur * v) % mod\r\n                    \r\n            ret = (ret + cur) % mod\r\n                    \r\n        return ret",
    "java": "\r\nclass Solution {\r\n    int M =(int)1e9+7;\r\n    public int idealArrays(int n, int maxValue) {\r\n        long ans = 0;\r\n        int N = n+maxValue;\r\n        long[] inv = new long[N];\r\n        long[] fact = new long[N];\r\n        long[] factinv = new long[N];\r\n        inv[1]=fact[0]=fact[1]=factinv[0]=factinv[1]=1;\r\n        for (int i = 2; i < N; i++){ // mod inverse\r\n            inv[i]=M-M/i*inv[M%i]%M;\r\n            fact[i]=fact[i-1]*i%M;\r\n            factinv[i]=factinv[i-1]*inv[i]%M;\r\n        }\r\n        for (int i = 1; i <= maxValue; i++){\r\n            int tmp = i;\r\n            Map<Integer, Integer> map = new HashMap<>();\r\n            for (int j = 2; j*j<= tmp; j++){\r\n                while(tmp%j==0){  // prime factorization.\r\n                    tmp/=j;\r\n                    map.merge(j, 1, Integer::sum);\r\n                }\r\n            }\r\n            if (tmp>1){\r\n                map.merge(tmp, 1, Integer::sum);\r\n            }\r\n            long gain=1;\r\n            for (int val : map.values()){ // arranges all the primes.\r\n                gain *= comb(n+val-1, val, fact, factinv);\r\n                gain %= M;\r\n            }\r\n            ans += gain;\r\n            ans %= M;\r\n        }\r\n\r\n        return (int)ans;\r\n    }\r\n\r\n    private long comb(int a, int b, long[] fact, long[] factinv){\r\n        return fact[a]*factinv[b]%M*factinv[a-b]%M;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} n\r\n * @param {number} maxValue\r\n * @return {number}\r\n */\r\nvar idealArrays = function(n, maxValue) {\r\n  const mod = 1e9 + 7;\r\n  let cur = 0;\r\n  let arr = Array(2).fill().map(() => Array(maxValue).fill(1));\r\n  for (let l = 2; l <= n; l++) {\r\n    const prev = arr[cur];\r\n    const next = arr[1-cur];\r\n    for (let s = 1; s <= maxValue; s++) {\r\n      let res = 0;\r\n      for (let m = 1; m * s <= maxValue; m++) {\r\n        res = (res + prev[m * s - 1]) % mod;\r\n      }\r\n      next[s-1] = res;\r\n    }\r\n    cur = 1 - cur;\r\n  }\r\n  const res = arr[cur].reduce((a, b) => (a + b) % mod, 0);\r\n  return res;\r\n};"
  }
}
