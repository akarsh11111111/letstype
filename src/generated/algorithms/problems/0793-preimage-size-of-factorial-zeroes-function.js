export default {
  "id": 793,
  "name": "Preimage Size of Factorial Zeroes Function",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function",
  "relativeDir": "P/Preimage Size of Factorial Zeroes Function",
  "slug": "0793-preimage-size-of-factorial-zeroes-function",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 22,
    "python": 24
  },
  "languages": {
    "cpp": "// Runtime: 5 ms (Top 11.74%) | Memory: 5.9 MB (Top 34.16%)\r\n#define ll long long\r\nclass Solution {\r\npublic:\r\n    bool check(ll num, int k){\r\n        ll start = 5;\r\n        ll ans = 0;\r\n        while(start <= num){\r\n            ans += (num/start);\r\n            start *= 5;\r\n        }\r\n        return ans <= k;\r\n    }\r\n    ll get(int k){\r\n        ll lo = 1;ll hi = 1e18;\r\n        ll mid, res(1e18);\r\n        while(lo <= hi){\r\n            mid = (lo+hi)/2;\r\n            if(check(mid, k)){\r\n                lo = mid+1;\r\n                res = mid;\r\n            }\r\n            else\r\n                hi = mid-1;\r\n        }\r\n        return res;\r\n    }\r\n    int preimageSizeFZF(int k) {\r\n        if(k == 0)\r\n            return 5;\r\n        return (get(k) - get(k-1));\r\n    }\r\n};",
    "python": "// Runtime: 30 ms (Top 93.33%) | Memory: 16.50 MB (Top 82.96%)\r\n\r\nclass Solution:\r\n    def preimageSizeFZF(self, k: int) -> int:  \r\n\r\n        def atMost_k(k: int)-> int:\r\n\r\n            left, right = 0, 5*k + 4\r\n\r\n            while left <= right:\r\n                mid = (left+right)//2\r\n                count, n = 0, mid\r\n\r\n                while n:\r\n                    n//= 5\r\n                    count+= n\r\n\r\n                if count <= k: left = mid + 1\r\n                else: right = mid - 1\r\n\r\n            return right\r\n\r\n        \r\n        return atMost_k(k) - atMost_k(k-1)",
    "java": "class Solution {\r\n    public int preimageSizeFZF(int k) {\r\n        long n = 4L * k;\r\n        int resp = 0;\r\n        while (true) {\r\n            int t = zeros(n);\r\n            if (t > k) return 0;\r\n            if (t == k) return 5;\r\n            n++;\r\n        }\r\n    \r\n    }\r\n    \r\n    private int zeros(long n) {\r\n        int resp = 0;\r\n        while (n > 0) {\r\n            resp += (int)(n / 5);\r\n            n /= 5;\r\n        }\r\n        return resp;\r\n    }\r\n}"
  }
}
