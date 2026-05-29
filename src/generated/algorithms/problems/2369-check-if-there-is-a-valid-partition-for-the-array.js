export default {
  "id": 2369,
  "name": "Check if There is a Valid Partition For The Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-there-is-a-valid-partition-for-the-array",
  "relativeDir": "C/Check if There is a Valid Partition For The Array",
  "slug": "2369-check-if-there-is-a-valid-partition-for-the-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 15,
    "python": 22,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\n    \r\npublic:\r\n    int solve(int i, vector<int> &nums, vector<int> &dp)\r\n    {\r\n        if (i == nums.size()) return 1;\r\n        if (dp[i] != -1) return dp[i];\r\n        \r\n        int ans = 0;\r\n        if (i+1 < nums.size() and nums[i] == nums[i+1])\r\n            ans = max(ans, solve(i+2, nums, dp));\r\n        if (i+2 < nums.size())\r\n        {\r\n            if (nums[i] == nums[i+1] && nums[i+1] == nums[i+2])\r\n                ans = max(ans, solve(i+3, nums, dp));\r\n            else if (abs(nums[i]-nums[i+1]) == 1 and abs(nums[i+1]-nums[i+2]) == 1)\r\n                ans = max(ans, solve(i+3, nums, dp));\r\n            \r\n        }\r\n        \r\n        return dp[i] = ans;\r\n    }\r\n    bool validPartition(vector<int>& nums) {\r\n        vector<int> dp(nums.size()+1, -1);\r\n        return solve(0, nums, dp);\r\n    }\r\n};",
    "python": "# Runtime: 920 ms (Top 32.4%) | Memory: 30.14 MB (Top 95.0%)\r\n\r\nclass Solution:\r\n    def validPartition(self, nums: List[int]) -> bool:\r\n        n = len(nums)\r\n        \r\n        dp = [False] * 3\r\n        dp[0] = True  # An empty partition is always valid\r\n\r\n        for i in range(2, n + 1):\r\n            ans = False\r\n\r\n            if nums[i - 1] == nums[i - 2]:\r\n                ans = ans or dp[(i - 2) % 3]\r\n            if i >= 3 and nums[i - 1] == nums[i - 2] == nums[i - 3]:\r\n                ans = ans or dp[(i - 3) % 3]\r\n            if i >= 3 and nums[i - 1] == nums[i - 2] + 1 == nums[i - 3] + 2:\r\n                ans = ans or dp[(i - 3) % 3]\r\n\r\n            dp[i % 3] = ans\r\n\r\n        return dp[n % 3]",
    "java": "// Runtime: 27 ms (Top 12.25%) | Memory: 82.9 MB (Top 64.19%)\r\n// Time O(n)\r\n// Space O(n)\r\nclass Solution {\r\n    public boolean validPartition(int[] nums) {\r\n        boolean[] dp = new boolean[nums.length+1];\r\n        dp[0]=true; // base case\r\n        for (int i = 2; i <= nums.length; i++){\r\n            dp[i]|= nums[i-1]==nums[i-2] && dp[i-2]; // cond 1\r\n            dp[i]|= i>2 && nums[i-1] == nums[i-2] && nums[i-2] == nums[i-3] && dp[i-3]; // cond 2\r\n            dp[i]|= i>2 && nums[i-1]-nums[i-2]==1 && nums[i-2]-nums[i-3]==1 && dp[i-3]; // cond 3\r\n        }\r\n        return dp[nums.length];\r\n    }\r\n}",
    "javascript": "// Runtime: 101 ms (Top 95.88%) | Memory: 60 MB (Top 57.22%)\r\nvar validPartition = function(nums) {\r\n  let n = nums.length, memo = Array(n).fill(-1);\r\n  return dp(0);\r\n\r\n  function dp(i) {\r\n    if (i === n) return true;\r\n    if (i === n - 1) return false;\r\n    if (memo[i] !== -1) return memo[i];\r\n\r\n    if (nums[i] === nums[i + 1] && dp(i + 2)) return memo[i] = true;\r\n    if (i < n - 2) {\r\n      if (!dp(i + 3)) return memo[i] = false;\r\n      let hasThreeEqual = nums[i] === nums[i + 1] && nums[i + 1] === nums[i + 2];\r\n      let hasThreeConsecutive = nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2];\r\n      if (hasThreeEqual || hasThreeConsecutive) return memo[i] = true;\r\n    }\r\n    return memo[i] = false;\r\n  }\r\n};"
  }
}
