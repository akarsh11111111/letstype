export default {
  "id": 494,
  "name": "Target Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/target-sum",
  "relativeDir": "T/Target Sum",
  "slug": "0494-target-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 63,
    "python": 10,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 553 ms (Top 27.6%) | Memory: 89.90 MB (Top 5.0%)\r\n\r\nclass Solution { // YAA\r\npublic:\r\n    \r\n    int solve(vector<int>& nums, int target, int idx, unordered_map<string, int> &dp) {\r\n        if(idx == nums.size()) {\r\n            if(target == 0) {\r\n                return 1;\r\n            }\r\n            return 0;\r\n        }\r\n        string key = to_string(idx) + \" \" + to_string(target);\r\n        if(dp.find(key) != dp.end()) {\r\n            return dp[key];\r\n        }\r\n        // +\r\n        int x = solve(nums, target - nums[idx], idx+1, dp);\r\n        // -\r\n        int y = solve(nums, target + nums[idx], idx+1, dp);\r\n        // sum\r\n        return dp[key] = x+y;\r\n    }\r\n    int findTargetSumWays(vector<int>& nums, int target) {\r\n        unordered_map<string, int> dp;\r\n        return solve(nums, target, 0, dp);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findTargetSumWays(self, nums: List[int], target: int) -> int:\r\n        @cache\r\n        def dfs(i, sum_):\r\n            if i == len(nums):\r\n                if sum_ == target: return 1\r\n                else: return 0\r\n            return dfs(i+1, sum_+nums[i]) + dfs(i+1, sum_-nums[i])\r\n        if abs(target) > sum(nums): return 0\r\n        return dfs(0, 0)",
    "java": "// Runtime: 5 ms (Top 89.09%) | Memory: 42.70 MB (Top 55.56%)\r\n\r\nclass Solution {\r\n    public int findTargetSumWays(int[] nums, int target) {\r\n        //Solution 1\r\n        int sum = 0;\r\n        for(int x : nums)\r\n            sum += x;\r\n        if(((sum - target) % 2 == 1) || (target > sum))\r\n            return 0;\r\n        \r\n        int n = nums.length;\r\n        int s2 = (sum - target)/2;\r\n        int[][] t = new int[n + 1][s2 + 1];\r\n        t[0][0] = 1;\r\n        \r\n        for(int i = 1; i < n + 1; i++) {\r\n            for(int j = 0; j < s2 + 1; j++) {\r\n                if(nums[i - 1] <= j)\r\n                    t[i][j] = t[i-1][j] + t[i - 1][j - nums[i - 1]];\r\n                else\r\n                    t[i][j] = t[i - 1][j];\r\n            }\r\n        }\r\n        return t[n][s2];\r\n        \r\n           //Solution 2\r\n//         int sum = 0;\r\n//         for(int x : nums)\r\n//             sum += x;\r\n//         if(((sum - target) % 2 != 0) || (target > sum))\r\n//             return 0;\r\n        \r\n//         int n = nums.length;\r\n//         int s2 = (sum - target)/2;\r\n        \r\n//         int[][] t = new int[n + 1][s2 + 1];\r\n//         for(int i = 0; i < n + 1; i++) {\r\n//             for(int j = 0; j < s2 + 1; j++) {\r\n//                 if(i == 0)\r\n//                     t[i][j] = 0;\r\n//                 if(j == 0)\r\n//                     t[i][j] = 1;\r\n//             }\r\n//         }\r\n        \r\n//         for(int i = 1; i < n + 1; i++) {\r\n//             for(int j = 1; j < s2 + 1; j++) {\r\n//                 if((nums[i - 1] > j) || (nums[i - 1] == 0))\r\n//                     t[i][j] = t[i - 1][j];\r\n//                 else\r\n//                     t[i][j] = t[i - 1][j] + t[i - 1][j - nums[i - 1]];\r\n//             }\r\n//         }\r\n        \r\n//         int count = 0;\r\n//         for(int x : nums)\r\n//             if(x == 0)\r\n//                 count++;\r\n        \r\n//         return (int)(Math.pow(2,count)) * t[n][s2];\r\n    }\r\n}",
    "javascript": "// Runtime: 92 ms (Top 80.92%) | Memory: 48.10 MB (Top 48.59%)\r\n\r\nvar findTargetSumWays = function(nums, S) {\r\n  let sums = new Map([[0, 1]]);\r\n  \r\n  for (let num of nums) {\r\n    const next = new Map();\r\n    \r\n    for (let [sum, amount] of sums) {\r\n      const plus = sum + num;\r\n      const minus = sum - num;\r\n\r\n      next.set(plus, next.has(plus) ? next.get(plus) + amount : amount);\r\n      next.set(minus, next.has(minus) ? next.get(minus) + amount : amount);\r\n    }\r\n    \r\n    sums = next;\r\n  }\r\n  \r\n  return sums.has(S) ? sums.get(S) : 0;\r\n};"
  }
}
