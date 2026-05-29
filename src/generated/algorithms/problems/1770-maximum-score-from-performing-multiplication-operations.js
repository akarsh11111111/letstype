export default {
  "id": 1770,
  "name": "Maximum Score from Performing Multiplication Operations",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations",
  "relativeDir": "M/Maximum Score from Performing Multiplication Operations",
  "slug": "1770-maximum-score-from-performing-multiplication-operations",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 20,
    "python": 18,
    "javascript": 37
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maximumScore(vector<int>& nums, vector<int>& multipliers) {\r\n        const int m = multipliers.size();\r\n        const int n = nums.size();\r\n        vector<vector<int>> dp(m + 1, vector<int>(m + 1));\r\n        for (auto z = 0; z < m; ++z) {\r\n            int row{0};\r\n            int col{z + 1};\r\n            while (col >= 0) {\r\n                dp[row][col] = max(\r\n                    (row > 0 ? dp[row - 1][col] + nums[row - 1] * multipliers[z] : INT_MIN),\r\n                    (col > 0 ? dp[row][col - 1] + nums[n - col] * multipliers[z] : INT_MIN));\r\n\r\n                --col;\r\n                ++row;\r\n            }\r\n        }\r\n\r\n        auto maxScore = INT_MIN;\r\n        for (auto row = 0; row <= m; ++row) {\r\n            maxScore = max(maxScore, dp[row][m - row]);\r\n        }\r\n\r\n        return maxScore;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumScore(self, nums: List[int], multipliers: List[int]) -> int:\r\n        n = len(nums)\r\n        m = len(multipliers)\r\n        \r\n        @lru_cache(None)\r\n        #To Save Computed Result\r\n        \r\n        def X(i, left):\r\n            \r\n            if i==m:\r\n                return 0\r\n            \r\n            return max  (   (multipliers[i] * nums[left])          + X(i + 1, left + 1), \r\n                            (multipliers[i] * nums[n-1-(i-left)])  + X(i + 1, left)       )        \r\n                \r\n        #Start from Zero operations\r\n        return X(0,0)",
    "java": "// Runtime: 360 ms (Top 22.12%) | Memory: 168.2 MB (Top 19.45%)\r\nclass Solution {\r\n    public int maximumScore(int[] nums, int[] multipliers) {\r\n        int n = nums.length, m = multipliers.length;\r\n        return helper(nums, multipliers, 0, 0, n-1, new Integer[m][m]);\r\n    }\r\n\r\n    public int helper(int[] nums, int[] multipliers, int idx, int left, int right, Integer[][] memo){\r\n        if(idx == multipliers.length) return 0;\r\n        if(memo[idx][left] != null) return memo[idx][left];\r\n\r\n        int takeLeft = nums[left] * multipliers[idx] +\r\n            helper(nums, multipliers, idx + 1, left + 1, right, memo);\r\n\r\n        int takeRight = nums[right] * multipliers[idx] +\r\n            helper(nums, multipliers, idx + 1, left, right - 1, memo);\r\n\r\n        return memo[idx][left] = Math.max(takeLeft, takeRight);\r\n    }\r\n}",
    "javascript": "// Runtime: 93 ms (Top 88.52%) | Memory: 64.00 MB (Top 63.93%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @param {number[]} multipliers\r\n * @return {number}\r\n */\r\nvar maximumScore = function(nums, multipliers) {\r\n    // using an array as memo will be faster \r\n    // in processing than using an object\r\n    let memo = new Array(multipliers.length+1).fill(0)\r\n        .map(() => new Array(multipliers.length+1).fill(0)); \r\n        \r\n    // starting point will be from the end \r\n    for (let i = multipliers.length - 1; i >= 0; i--) {    \r\n        // at state i, used i elements from nums\r\n        // and left nums.length - i consecutive elements\r\n        // those consecutive elements can be seen as the rest block\r\n        // the left of the rest block can be any where from i to 0\r\n        // whereas the left element that this state can use is from the rest block\r\n        // so left = i to 0;\r\n        for (let left = i; left >= 0; left--) {\r\n            let right = (nums.length - 1) -  (i - left);\r\n\r\n            // calculate all possible cases for state i\r\n            // each case will combine with each case of state i - 1 and so on            \r\n            memo[i][left] = Math.max(\r\n                multipliers[i] * nums[left] + memo[i+1][left+1],\r\n                multipliers[i] * nums[right] + memo[i+1][left]\r\n            );\r\n        }\r\n    }\r\n\r\n    // finish the calculation and \r\n    // return the last case that we calculated\r\n    return memo[0][0];\r\n}"
  }
}
