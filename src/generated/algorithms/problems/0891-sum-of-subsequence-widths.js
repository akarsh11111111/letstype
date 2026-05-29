export default {
  "id": 891,
  "name": "Sum of Subsequence Widths",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-subsequence-widths",
  "relativeDir": "S/Sum of Subsequence Widths",
  "slug": "0891-sum-of-subsequence-widths",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 15,
    "python": 16,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int sumSubseqWidths(vector<int>& nums) {\r\n        vector < long long > pow(nums.size() ); \r\n        pow[0] = 1;\r\n          for(int i = 1 ; i<nums.size(); i++){ \r\n             pow[i] = pow[i-1] * 2 % 1000000007; \r\n          }\r\n        sort(nums.begin() , nums.end()); \r\n       long long ans = 0 ;   \r\n        for(int i = 0 ; i<nums.size(); i++){ \r\n              ans = (ans + pow[i]*nums[i]) % 1000000007; \r\n               ans = (ans - pow[nums.size()-i-1] * (long long)nums[i] ) % 1000000007; \r\n           \r\n          } \r\n        return ans; \r\n    }\r\n};",
    "python": "class Solution:\r\n    def sumSubseqWidths(self, nums: List[int]) -> int:\r\n        nums.sort()\r\n        n = len(nums)\r\n        M = 10**9+7\r\n        res = 0\r\n        le = 1\r\n        re = pow(2, n-1, M)\r\n        #by Fermat's Little Thm\r\n        #inverse of 2 modulo M\r\n        inv = pow(2, M-2, M)\r\n        for num in nums:\r\n            res = (res + num * (le - re))%M\r\n            le = (le * 2) % M\r\n            re = (re * inv) % M\r\n        return res",
    "java": "// Runtime: 49 ms (Top 70.11%) | Memory: 74.1 MB (Top 69.83%)\r\nclass Solution {\r\n    public int sumSubseqWidths(int[] nums) {\r\n        int MOD = (int)1e9 + 7;\r\n        Arrays.sort(nums);\r\n\r\n        long ans = 0;\r\n        long p = 1;\r\n        for(int i = 0; i < nums.length; i++){\r\n            ans = (ans + p * nums[i] - p * nums[nums.length - 1 - i]) % MOD;\r\n            p = (p * 2) % MOD;\r\n        }\r\n        return (int)ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 450 ms (Top 11.11%) | Memory: 53.8 MB (Top 66.67%)\r\nvar sumSubseqWidths = function(nums) {\r\n    const mod = 1000000007;\r\n    nums.sort((a, b) => a - b), total = 0, power = 1;\r\n    for(let i = 0; i < nums.length; i++) {\r\n        total = (total + nums[i] * power) % mod;\r\n        power = (power * 2) % mod;\r\n    }\r\n\r\n    power = 1;\r\n    for(let i = nums.length - 1; i >= 0; i--) {\r\n        total = (total - nums[i] * power + mod) % mod;\r\n        power = (power * 2) % mod;\r\n    }\r\n\r\n    return (total + mod) % mod\r\n};"
  }
}
