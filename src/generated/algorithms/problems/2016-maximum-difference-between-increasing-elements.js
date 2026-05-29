export default {
  "id": 2016,
  "name": "Maximum Difference Between Increasing Elements",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-difference-between-increasing-elements",
  "relativeDir": "M/Maximum Difference Between Increasing Elements",
  "slug": "2016-maximum-difference-between-increasing-elements",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 15,
    "python": 8,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maximumDifference(vector<int>& nums) {\r\n        int mn = nums[0], res = 0;\r\n        for (int i = 1; i < nums.size(); i++) {\r\n            res = max(res, nums[i] - mn);\r\n            mn = min(mn, nums[i]);\r\n        }\r\n        return res == 0 ? -1 : res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumDifference(self, nums: List[int]) -> int:\r\n        curmin = nums[0]\r\n        diff = 0\r\n        for num in nums:\r\n            diff = max(diff, num - curmin)\r\n            curmin = min(curmin, num)\r\n        return diff or -1",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.2 MB (Top 99.17%)\r\nclass Solution {\r\n    public int maximumDifference(int[] nums) {\r\n        if(nums.length < 2)\r\n            return -1;\r\n        int result = Integer.MIN_VALUE;\r\n        int minValue = nums[0];\r\n        for(int i = 1; i < nums.length; i++) {\r\n            if(nums[i] > minValue)\r\n                result = Math.max(result, nums[i] - minValue);\r\n            minValue = Math.min(minValue, nums[i]);\r\n        }\r\n        return result == Integer.MIN_VALUE ? -1 : result;\r\n    }\r\n}",
    "javascript": "// Runtime: 104 ms (Top 39.19%) | Memory: 42.3 MB (Top 36.02%)\r\nvar maximumDifference = function(nums) {\r\n    var diff=-1\r\n    for(let i=0;i<nums.length;i++){\r\n        for(let j=i+1;j<nums.length;j++){\r\n            if (nums[j]> nums[i]) diff=Math.max(nums[j]-nums[i],diff)\r\n        }\r\n    }\r\n    return diff\r\n};"
  }
}
