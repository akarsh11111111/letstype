export default {
  "id": 1800,
  "name": "Maximum Ascending Subarray Sum",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-ascending-subarray-sum",
  "relativeDir": "M/Maximum Ascending Subarray Sum",
  "slug": "1800-maximum-ascending-subarray-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 15,
    "python": 11,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 8.5 MB (Top 42.32%)\r\nclass Solution {\r\npublic:\r\n    int maxAscendingSum(vector<int>& nums) {\r\n        int max_sum = nums[0], curr = nums[0];\r\n        for (int i = 1; i < nums.size(); i++) {\r\n            if (nums[i-1] < nums[i]) {\r\n                curr += nums[i];\r\n            }\r\n            else {\r\n                max_sum = max(max_sum, curr);\r\n                curr = nums[i];\r\n            }\r\n        }\r\n        return max(max_sum, curr);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxAscendingSum(self, nums: List[int]) -> int:\r\n        count=nums[0]\r\n        final=nums[0]\r\n        for i in range(1,len(nums)):\r\n            if nums[i]>nums[i-1]:\r\n                count+=nums[i]\r\n            else:\r\n                count=nums[i]\r\n            final=max(final,count)\r\n        return final",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 41.10 MB (Top 28.39%)\r\n\r\nclass Solution {\r\n    public int maxAscendingSum(int[] nums) {\r\n        int res = nums[0],temp = nums[0];\r\n        for(int i = 1;i<nums.length;i++){\r\n            if(nums[i] > nums[i-1])\r\n                temp+=nums[i];\r\n            else\r\n                temp = nums[i];\r\n            res = Math.max(res,temp);\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 99 ms (Top 29.63%) | Memory: 41.6 MB (Top 91.36%)\r\nvar maxAscendingSum = function(nums) {\r\n    const subarray = nums.reduce((acc, curr, index) => {\r\n        curr > nums[index - 1] ? acc[acc.length - 1] += curr : acc.push(curr);\r\n        return acc;\r\n    }, []);\r\n\r\n    return Math.max(...subarray);\r\n};"
  }
}
