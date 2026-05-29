export default {
  "id": 1027,
  "name": "Longest Arithmetic Subsequence",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-arithmetic-subsequence",
  "relativeDir": "L/Longest Arithmetic Subsequence",
  "slug": "1027-longest-arithmetic-subsequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 25,
    "python": 9,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int longestArithSeqLength(vector<int>& nums) {\r\n        \r\n        int n=size(nums);\r\n        int ans=1;\r\n        vector<vector<int>>  dp(n,vector<int>(1005,1));\r\n        \r\n        for(int i=1;i<n;i++) \r\n            for(int j=0;j<i;j++)\r\n                ans=max(ans, dp[i][nums[i]-nums[j]+500]= 1+dp[j][nums[i]-nums[j] +500]);\r\n             \r\n        \r\n        return ans;\r\n        \r\n    }\r\n};",
    "python": "# Runtime: 7591 ms (Top 12.82%) | Memory: 21.8 MB (Top 96.69%)\r\nclass Solution:\r\n    def longestArithSeqLength(self, nums: List[int]) -> int:\r\n        dp = [[1]*1001 for i in range(len(nums))]\r\n        for i in range(len(nums)):\r\n            for j in range(i+1,len(nums)):\r\n                d = nums[j] - nums[i] + 500\r\n                dp[j][d] = max(dp[i][d]+1,dp[j][d])\r\n        return max([max(i) for i in dp])",
    "java": "// Runtime: 440 ms (Top 73.2%) | Memory: 70.79 MB (Top 29.5%)\r\n\r\nclass Solution \r\n{\r\n    public int longestArithSeqLength(int[] nums) \r\n    {\r\n        int n = nums.length;\r\n        int longest = 0;\r\n        Map<Integer, Integer>[] dp = new HashMap[n];\r\n        \r\n        for (int i = 0; i < n; i++) \r\n        {\r\n            dp[i] = new HashMap<>();\r\n            \r\n            for (int j = 0; j < i; j++) \r\n            {\r\n                int diff = nums[i] - nums[j];\r\n                dp[i].put(diff, dp[j].getOrDefault(diff, 1) + 1);\r\n                longest = Math.max(longest, dp[i].get(diff));\r\n            }\r\n        }\r\n        \r\n        return longest;\r\n    }\r\n}",
    "javascript": "// Runtime: 1333 ms (Top 78.26%) | Memory: 101.5 MB (Top 15.22%)\r\nvar longestArithSeqLength = function(nums) {\r\n    if (nums === null || nums.length === 0) {\r\n        return 0;\r\n    }\r\n    let diffMap = new Array(nums.length).fill(0).map(() => new Map());\r\n    let maxLen = 1;\r\n    for (let i = 0; i < nums.length; i++) {\r\n        for (let j = 0; j < i; j++) {\r\n            let diff = nums[i] - nums[j];\r\n            // if prev element has an ongoing arithmetic sequence with the same common difference\r\n            // we simply add 1 to the length of that ongoing sequence, hence diffMap[j].get(diff) + 1\r\n            // else, we start a new arithmetic sequence, initial length is 2\r\n            diffMap[i].set(diff, diffMap[j].get(diff) + 1 || 2);\r\n            maxLen = Math.max(maxLen, diffMap[i].get(diff));\r\n        }\r\n    }\r\n    return maxLen;\r\n    // T.C: O(N^2)\r\n    // S.C: O(N^2)\r\n};"
  }
}
