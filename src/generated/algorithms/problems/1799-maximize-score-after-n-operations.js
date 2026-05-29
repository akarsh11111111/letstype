export default {
  "id": 1799,
  "name": "Maximize Score After N Operations",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximize-score-after-n-operations",
  "relativeDir": "M/Maximize Score After N Operations",
  "slug": "1799-maximize-score-after-n-operations",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 35,
    "python": 21,
    "javascript": 34
  },
  "languages": {
    "cpp": "int dp[16384];\r\nint gcd_table[14][14];\r\n\r\nclass Solution {\r\npublic:\r\n    int maxScore(vector<int>& nums) {\r\n        memset(dp, -1, sizeof(dp));\r\n        int sz = nums.size();\r\n\r\n        // Build the GCD table \r\n        for (int i = 0; i < sz; ++i) {\r\n            for (int j = i+1; j < sz; ++j) {gcd_table[i][j] = gcd(nums[i], nums[j]);}\r\n        }\r\n\r\n        // Looping from state 0 to (1<<sz)-1\r\n        dp[0] = 0;\r\n        for (int s = 0; s < (1<<sz); ++s) {\r\n            int cnt = __builtin_popcount(s);\r\n            if (cnt &1 )continue; // bitcount can't be odd\r\n            for (int i = 0; i < sz; ++i) {\r\n                if (s & (1<<i)) continue;\r\n                for (int j = i+1; j < sz; ++j) {\r\n                    if (s & (1<<j)) continue;\r\n                    int next_state = s^(1<<i)^(1<<j);\r\n                    dp[next_state] = max(dp[next_state], dp[s] + (cnt/2+1)*gcd_table[i][j]);\r\n                }\r\n            }\r\n        }\r\n        return dp[(1<<sz)-1];\r\n    }\r\n};",
    "python": "# Runtime: 6454 ms (Top 9.35%) | Memory: 24.7 MB (Top 37.40%)\r\nfrom functools import lru_cache\r\n\r\nclass Solution:\r\n    def maxScore(self, nums: List[int]) -> int:\r\n        def gcd(a, b):\r\n            while a:\r\n                a, b = b%a, a\r\n            return b\r\n        halfplus = len(nums)//2 + 1\r\n        @lru_cache(None)\r\n        def dfs(mask, k):\r\n            if k == halfplus:\r\n                return 0\r\n            res = 0\r\n            for i in range(len(nums)):\r\n                for j in range(i+1, len(nums)):\r\n                    if not(mask & (1<<i)) and not(mask &(1<<j)):\r\n                        res = max(res, k*gcd(nums[i], nums[j])+dfs(mask|(1<<i)|(1<<j), k+1))\r\n            return res\r\n        return dfs(0, 1)",
    "java": "class Solution {\r\n    public int maxScore(int[] nums) {\r\n        int n = nums.length;\r\n        Map<Integer, Integer> gcdVal = new HashMap<>();\r\n        for (int i = 0; i < n; ++i) {\r\n            for (int j = i + 1; j < n; ++j) {\r\n                gcdVal.put((1 << i) + (1 << j), gcd(nums[i], nums[j]));\r\n            }\r\n        }\r\n        \r\n        int[] dp = new int[1 << n];\r\n        \r\n        for (int i = 0; i < (1 << n); ++i) {\r\n            int bits = Integer.bitCount(i); // how many numbers are used\r\n            if (bits % 2 != 0) // odd numbers, skip it\r\n                continue;\r\n            for (int k : gcdVal.keySet()) {\r\n                if ((k & i) != 0) // overlapping used numbers\r\n                    continue;\r\n                dp[i ^ k] = Math.max(dp[i ^ k], dp[i] + gcdVal.get(k) * (bits / 2 + 1));\r\n            }\r\n        }\r\n        \r\n        return dp[(1 << n) - 1];\r\n    }\r\n    \r\n    public int gcd(int a, int b) {\r\n        if (b == 0)   \r\n            return a;     \r\n        return gcd(b, a % b);   \r\n    }\r\n}\r\n\r\n// Time: O(2^n * n^2)\r\n// Space: O(2 ^ n)",
    "javascript": "var maxScore = function(nums) {\r\n    \r\n    function gcd(a, b) {\r\n        if(!b) return a;\r\n        return gcd(b, a % b);\r\n    }\r\n    \r\n    const memo = new Map();\r\n    \r\n    function recurse(arr, num1, op) {\r\n        if(!arr.length) return 0;\r\n        \r\n        const key = arr.join() + num1;\r\n        if(memo.has(key)) return memo.get(key);\r\n        \r\n        let max = 0;\r\n        \r\n        for(let i = 0; i < arr.length; i++) {\r\n            const nextArr = [...arr.slice(0, i), ...arr.slice(i+1)];\r\n            \r\n            if(num1) {\r\n                const currGCD = gcd(num1, arr[i]);\r\n                const rest = recurse(nextArr, null, op+1);\r\n                max = Math.max(max, ((op * currGCD) + rest));\r\n            } else {\r\n                const rest = recurse(nextArr, arr[i], op);\r\n                max = Math.max(max, rest);\r\n            }\r\n        }\r\n        memo.set(key, max);\r\n        return max;\r\n    }\r\n    return recurse(nums, null, 1);\r\n};"
  }
}
