export default {
  "id": 209,
  "name": "Minimum Size Subarray Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-size-subarray-sum",
  "relativeDir": "M/Minimum Size Subarray Sum",
  "slug": "0209-minimum-size-subarray-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 16,
    "python": 23,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minSubArrayLen(int target, vector<int>& nums) {\r\n        int m=INT_MAX,s=0,l=0;\r\n        for(int i=0;i<nums.size();i++)\r\n        {\r\n            s+=nums[i];\r\n            if(s>=target)\r\n                m=min(m,i-l+1);\r\n            while(s>=target)\r\n            {\r\n                m=min(m,i-l+1);\r\n                s-=nums[l++];\r\n            }\r\n        }\r\n        if(m==INT_MAX)\r\n            m=0;\r\n        return m;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minSubArrayLen(self, target, nums):\r\n\t\t# Init left pointer and answer\r\n        l, ans = 0, len(nums) + 1\r\n\t\t# Init sum of subarray\r\n        s = 0 \r\n\t\t# Iterate through all numbers as right subarray \r\n        for r in range(len(nums)):\r\n\t\t\t# Add right number to sum\r\n            s += nums[r]\r\n\t\t\t# Check for subarray greater than or equal to target\r\n            while s >= target:\r\n\t\t\t\t# Calculate new min\r\n                ans = min(ans, r - l + 1)\r\n\t\t\t\t# Remove current left nubmer from sum\r\n                s -= nums[l]\r\n\t\t\t\t# Move left index up one\r\n                l += 1\r\n\t\t# No solution\r\n        if ans == len(nums) + 1:\r\n            return 0\r\n\t\t# Solution\r\n        return ans",
    "java": "class Solution {\r\n    public int minSubArrayLen(int target, int[] nums) {\r\n        int left = 0;\r\n        int n = nums.length;\r\n        int sum = 0;\r\n        int minCount = Integer.MAX_VALUE;\r\n        for(int i = 0;i<n;i++){\r\n            sum += nums[i];\r\n            while(sum >= target){\r\n                minCount = Math.min(minCount, i-left+1);\r\n                sum -= nums[left++];\r\n            }   \r\n        }\r\n        return minCount == Integer.MAX_VALUE?0:minCount;\r\n    }\r\n}",
    "javascript": "// Runtime: 134 ms (Top 14.15%) | Memory: 46.1 MB (Top 74.97%)\r\n/**\r\n * @param {number} target\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar minSubArrayLen = function(target, nums) {\r\n    let indexStartPosition = 0;\r\n    let sum = 0;\r\n    let tempcounter = 0;\r\n    let counter = Infinity;\r\n\r\n    for(var indexI=0; indexI<nums.length; indexI++){\r\n           sum = sum + nums[indexI];\r\n        tempcounter++;\r\n\r\n        while(sum >= target) {\r\n           sum = sum - nums[indexStartPosition];\r\n           indexStartPosition = indexStartPosition + 1;\r\n           counter = Math.min(counter, tempcounter);\r\n           tempcounter--;\r\n        }\r\n\r\n    }\r\n\r\n    return counter === Infinity ? 0 : counter;\r\n};"
  }
}
