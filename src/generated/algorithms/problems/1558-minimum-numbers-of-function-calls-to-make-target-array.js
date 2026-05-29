export default {
  "id": 1558,
  "name": "Minimum Numbers of Function Calls to Make Target Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-numbers-of-function-calls-to-make-target-array",
  "relativeDir": "M/Minimum Numbers of Function Calls to Make Target Array",
  "slug": "1558-minimum-numbers-of-function-calls-to-make-target-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 24,
    "python": 13,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 61 ms (Top 41.75%) | Memory: 25.60 MB (Top 89.32%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minOperations(vector<int>& nums) {\r\n        int ans = 0;\r\n        while(true) {\r\n            bool largerThan1 = false;\r\n            bool allzero = true;\r\n            for(auto &n : nums) {\r\n                if(n == 0) continue;\r\n                allzero = false;\r\n                if(n > 1) largerThan1 = true;\r\n                ans += n % 2;\r\n                n /= 2;\r\n            }\r\n            ans += largerThan1; //we should do division if some element is larger than 1.\r\n            if(allzero) break;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Observe that:\r\n#   +1  places a 1 to the end of the int's binary representation\r\n#       (assuming a 0 there previously)\r\n#   x2  is a bitshift left\r\n# So you basically just need to count all the ones in the binary representations\r\n# and find how many shifts are required (largest bit length minus one).\r\n\r\nclass Solution:\r\n    def minOperations(self, nums: List[int]) -> int:\r\n        if max(nums) == 0:\r\n            return 0\r\n        \r\n        return sum([x.bit_count() for x in nums]) + max([x.bit_length() for x in nums]) - 1",
    "java": "class Solution {\r\n    public int minOperations(int[] nums) {\r\n        int odd = 0, even = 0;\r\n        Map<Integer, Integer> map = new HashMap<>();\r\n        for (int n : nums){\r\n            int res = dfs(n, map);\r\n            odd += res >> 5;\r\n            even = Math.max(res & 0b11111, even);\r\n        }\r\n\r\n        return odd + even;\r\n    }\r\n\r\n    private int dfs(int n, Map<Integer, Integer> map){\r\n        if (n == 0) return 0;\r\n        if (map.containsKey(n)) return map.get(n);\r\n\r\n        int res = n % 2 << 5;\r\n        res += dfs(n / 2, map) + (n > 1? 1 : 0);\r\n\r\n        map.put(n, res);\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 156 ms (Top 53.33%) | Memory: 45.2 MB (Top 100.00%)\r\nvar minOperations = function(nums) {\r\n    let maxpow = 0, ans = 0, pow, val\r\n    for (let i = 0; i < nums.length; i++) {\r\n        for (val = nums[i], pow = 0; val > 0; ans++)\r\n            if (val % 2) val--\r\n            else pow++, val /= 2\r\n        ans -= pow\r\n        if (pow > maxpow) maxpow = pow\r\n    }\r\n    return ans + maxpow\r\n};"
  }
}
