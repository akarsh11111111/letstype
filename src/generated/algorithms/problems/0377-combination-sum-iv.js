export default {
  "id": 377,
  "name": "Combination Sum IV",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/combination-sum-iv",
  "relativeDir": "C/Combination Sum IV",
  "slug": "0377-combination-sum-iv",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 21,
    "python": 10,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 12.71%) | Memory: 6.8 MB (Top 29.75%)\r\nclass Solution {\r\npublic:\r\n    int combinationSum4(vector<int>& nums, int target) {\r\n        vector<unsigned int> dp(target+1, 0);\r\n        dp[0] = 1;\r\n        for (int i = 1; i <= target; i++) {\r\n            for (auto x : nums) {\r\n                if (x <= i) {\r\n                    dp[i] += dp[i - x];\r\n                }\r\n            }\r\n        }\r\n        return dp[target];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def combinationSum4(self, nums: List[int], target: int) -> int:\r\n        dp = [0] * (target+1)\r\n        dp[0] = 1\r\n        for i in range(1, target+1):\r\n            for num in nums: \r\n                num_before = i - num\r\n                if num_before >= 0:\r\n                    dp[i] += dp[num_before]\r\n        return dp[target]",
    "java": "class Solution {\r\n    public int combinationSum4(int[] nums, int target) {\r\n        Integer[] memo = new Integer[target + 1];\r\n        return recurse(nums, target, memo);\r\n    }\r\n    \r\n    public int recurse(int[] nums, int remain, Integer[] memo){\r\n        \r\n        if(remain < 0) return 0;\r\n        if(memo[remain] != null) return memo[remain];\r\n        if(remain == 0) return 1;\r\n        \r\n        int ans = 0;\r\n        for(int i = 0; i < nums.length; i++){\r\n            ans += recurse(nums, remain - nums[i], memo);\r\n        }\r\n        \r\n        memo[remain] = ans;\r\n        return memo[remain];\r\n    }\r\n}",
    "javascript": "var combinationSum4 = function(nums, target) {\r\n    const dp = Array(target + 1).fill(0);\r\n    \r\n    nums.sort((a,b) => a - b);\r\n    \r\n    for(let k=1; k <= target; k++) {\r\n        for(let n of nums) {\r\n            if(k < n) break;\r\n            dp[k] += (k == n) ? 1 : dp[k-n];\r\n        }\r\n    }\r\n     \r\n    return dp[target];\r\n};"
  }
}
