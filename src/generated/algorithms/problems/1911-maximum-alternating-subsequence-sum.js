export default {
  "id": 1911,
  "name": "Maximum Alternating Subsequence Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-alternating-subsequence-sum",
  "relativeDir": "M/Maximum Alternating Subsequence Sum",
  "slug": "1911-maximum-alternating-subsequence-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 12,
    "python": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    long long dp[2][100001];\r\n    long long util(int i, vector<int>&nums, bool isPos){\r\n        if(i>=nums.size())return 0;\r\n        if(dp[isPos][i]!=-1)return dp[isPos][i];\r\n        long long curr = (isPos?nums[i]:-1*nums[i]);\r\n        return dp[isPos][i] = max(curr + util(i+1, nums, !isPos), util(i+1, nums, isPos));\r\n    }\r\n    long long maxAlternatingSum(vector<int>& nums) {\r\n        memset(dp, -1, sizeof(dp));\r\n        return util(0, nums, true);\r\n    }\r\n};",
    "python": "# Runtime: 2571 ms (Top 53.06%) | Memory: 28.4 MB (Top 82.81%)\r\nclass Solution:\r\n    def maxAlternatingSum(self, nums: List[int]) -> int:\r\n        ans = 0\r\n        direction = 'down'\r\n        n = len(nums)\r\n        for i in range(n-1):\r\n            if direction == 'down' and nums[i] >= nums[i+1]:\r\n                ans += nums[i]\r\n                direction = 'up'\r\n            elif direction == 'up' and nums[i] <= nums[i+1]:\r\n                ans -= nums[i]\r\n                direction = 'down'\r\n        if direction == 'up':\r\n            return ans\r\n        return ans + nums[-1]",
    "java": "class Solution {\r\n    public long maxAlternatingSum(int[] nums) {\r\n        int n = nums.length;\r\n        long dp[][] = new long[n][2];\r\n        dp[0][0] = nums[0];\r\n        for(int i=1;i<n;i++){\r\n            dp[i][0] = Math.max(dp[i-1][0] , Math.max(dp[i-1][1]+nums[i] , nums[i]));\r\n            dp[i][1] = Math.max(dp[i-1][1] , Math.max(dp[i-1][0]-nums[i] , 0));\r\n        }\r\n        return Math.max(dp[n-1][0] , dp[n-1][1]);\r\n    }\r\n}"
  }
}
