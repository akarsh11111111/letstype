export default {
  "id": 2081,
  "name": "Sum of k-Mirror Numbers",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-k-mirror-numbers",
  "relativeDir": "S/Sum of k-Mirror Numbers",
  "slug": "2081-sum-of-k-mirror-numbers",
  "availableLanguages": [
    "cpp",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "python": 60
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    long long kMirror(int k, int n) {\r\n        \r\n        auto palin = [](int n, bool odd) {\r\n            long long ans = n; \r\n            if (odd) n /= 10; \r\n            for (; n; n /= 10) ans = 10*ans + n % 10; \r\n            return ans; \r\n        }; \r\n        \r\n        auto is_mirror = [&](long long x) {\r\n            long long rev = 0; \r\n            for (auto tmp = x; tmp; tmp /= k) rev = k*rev + tmp % k; \r\n            return x == rev; \r\n        }; \r\n        \r\n        long long ans = 0, palin0 = 0, palin1 = 0; \r\n        int odd = 1, even = 1; \r\n        while (n--) {\r\n            for (; true; ++odd) {\r\n                palin1 = palin(odd, true); \r\n                if (is_mirror(palin1)) break; \r\n            }\r\n            for (; palin0 < palin1; ++even) {\r\n                palin0 = palin(even, false); \r\n                if (is_mirror(palin0)) break; \r\n            }\r\n            if (palin0 < palin1) {\r\n                ans += palin0; \r\n                ++even; \r\n            } else {\r\n                ans += palin1; \r\n                ++odd; \r\n            }\r\n        }\r\n        return ans; \r\n    }\r\n};",
    "python": "class Solution:\r\n    def kMirror(self, k: int, n: int) -> int:\r\n\r\n        def numberToBase(n, b):\r\n            if n == 0:\r\n                return [0]\r\n            digits = []\r\n            while n:\r\n                digits.append(n % b)\r\n                n //= b\r\n            return digits[::-1]\r\n        \r\n        # not used\r\n        def baseToNumber(arr, b):\r\n            ans = 0\r\n            for x in arr:\r\n                ans = ans * b + int(x)\r\n            return ans\r\n        \r\n        def is_mirror(s):\r\n            l, r = 0, len(s)-1\r\n            while l <= r:\r\n                if s[l] != s[r]:\r\n                    return False\r\n                l += 1\r\n                r -= 1\r\n            return True\r\n        \r\n        def gen():\r\n            '''\r\n            generate for value with different length\r\n            when i == 0: num：[1, 10)\r\n            size of num: 1, 2 -> 1 or 11\r\n            when i == 1: [10, 100)\r\n            size of num: 3, 4 -> 10 or 101\r\n            when i == 2: [100, 1000)\r\n            size of num: 5, 6 -> 10001 or 100001\r\n            \r\n            the num will be increasing\r\n            '''\r\n            for i in range(30):\r\n                for num in range(10**i, 10**(i+1)):\r\n                    s = str(num) + str(num)[::-1][1:]\r\n                    yield int(s)\r\n                for num in range(10**i, 10**(i+1)):\r\n                    s = str(num) + str(num)[::-1]\r\n                    yield int(s)\r\n        \r\n        ans = 0\r\n        left = n\r\n        for num in gen():\r\n            base = numberToBase(num, k)\r\n\t\t\t# if is_mirror(base):\r\n            if base == base[::-1]:\r\n                ans += num\r\n                left -= 1\r\n            if left == 0:\r\n                break\r\n\r\n        return ans"
  }
}
