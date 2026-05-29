export default {
  "id": 413,
  "name": "Arithmetic Slices",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/arithmetic-slices",
  "relativeDir": "A/Arithmetic Slices",
  "slug": "0413-arithmetic-slices",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 23,
    "python": 16,
    "javascript": 42
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numberOfArithmeticSlices(vector<int>& nums) {\r\n        int n=nums.size(),i,j,count=0,comm_diff;\r\n        for(i=0;i<=n-3;i++)\r\n        {\r\n            comm_diff = nums[i+1]-nums[i];\r\n            for(j=i+1;j<n;j++)\r\n            {\r\n                if(nums[j]-nums[j-1]==comm_diff)\r\n                {\r\n                    if((j-i+1)>=3)\r\n                    {\r\n                        count++;\r\n                    }\r\n                }\r\n                else\r\n                {\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "// Runtime: 36 ms (Top 86.27%) | Memory: 16.90 MB (Top 84.26%)\r\n\r\nclass Solution:\r\n    def numberOfArithmeticSlices(self, nums: List[int]) -> int:\r\n        ans = 0\r\n        table = [0] * len(nums)\r\n\r\n        for r in range(2, len(nums)):\r\n            diff1 = nums[r] - nums[r-1]\r\n            diff2 = nums[r-1] - nums[r-2]\r\n\r\n            if diff1 == diff2:\r\n                table[r] = table[r-1] + 1\r\n                ans += table[r-1] + 1\r\n\r\n        return ans",
    "java": "class Solution {\r\n    public int numberOfArithmeticSlices(int[] nums) {\r\n        int n = nums.length;\r\n        if (n < 3) {\r\n            return 0;\r\n        }\r\n        int[] dp = new int[n - 1];\r\n        dp[0] = nums[1] - nums[0];\r\n        for (int i = 2; i < n; i++) {\r\n            dp[i - 1] = nums[i] - nums[i - 1];\r\n        }\r\n        int si = 0;\r\n        int count = 0;\r\n        for (int i = 1; i < n - 1; i++) {\r\n            if (dp[i] == dp[i - 1]) {\r\n                count += (i - si);\r\n            } else {\r\n                si = i;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 50 ms (Top 70.73%) | Memory: 41.90 MB (Top 54.1%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar numberOfArithmeticSlices = function(nums) {\r\n    if (nums.length < 3) return 0\r\n  \r\n    const diff = []\r\n    \r\n    /* fill our array of differences */\r\n    for (let i = 1; i < nums.length; i++) {\r\n      diff.push(nums[i] - nums[i - 1])\r\n    }\r\n\r\n    /* if the first two numbers of our difference array are equal\r\n     * then set our multiplier to 1\r\n     * and also set our \"previous\" variable to 1\r\n     * otherwise set both to 0 representing no sequence found yet\r\n     */\r\n \r\n    let multiplier = diff[1] === diff[0] ? 1 : 0\r\n    let dp = diff[1] === diff[0] ? 1 : 0 // our \"previous\" variable\r\n  \r\n    /* loop thru our differences from idx 2 (0 and 1 have been     \r\n     * accounted for),\r\n     * and check for continuing sequences\r\n     */\r\n    for (let i = 2; i < diff.length; i++) {\r\n      if (diff[i] === diff[i - 1]) { // if equal, increment our multiplier\r\n        multiplier++\r\n      } else { // if not equal, set our multiplier back to 0\r\n        multiplier = 0\r\n      }\r\n      \r\n      dp = dp + 1 * multiplier // recurrence relation\r\n    }\r\n\r\n    return dp // our \"previous\" variable\r\n\r\n}"
  }
}
