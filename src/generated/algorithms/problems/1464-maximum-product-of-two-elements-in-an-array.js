export default {
  "id": 1464,
  "name": "Maximum Product of Two Elements in an Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array",
  "relativeDir": "M/Maximum Product of Two Elements in an Array",
  "slug": "1464-maximum-product-of-two-elements-in-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 8,
    "java": 18,
    "python": 12,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxProduct(vector<int>& nums) {\r\n        int n = nums.size();      \r\n         sort(nums.begin(), nums.end());                \r\n       return (nums[n -1]-1)* (nums[n-2]-1);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxProduct(self, nums: List[int]) -> int:\r\n        # mx1 - max element, mx2 - second max element\r\n        mx1 = nums[0] if nums[0] > nums[1] else nums[1]\r\n        mx2 = nums[1] if nums[0] > nums[1] else nums[0]\r\n        for num in nums[2:]:\r\n            if num > mx1:\r\n                mx1, mx2 = num, mx1\r\n            elif num > mx2:\r\n                mx2 = num\r\n\r\n        return (mx1 - 1) * (mx2 - 1)",
    "java": "class Solution {\r\n    public int maxProduct(int[] nums) {\r\n        int max = Integer.MIN_VALUE;\r\n        int maxi = -1;\r\n        for (int i = 0; i < nums.length; ++i) {\r\n            if (nums[i] > max) {\r\n                max = nums[i];\r\n                maxi = i;\r\n            }\r\n        }\r\n        nums[maxi] = Integer.MIN_VALUE;\r\n        int nextmax = Integer.MIN_VALUE;\r\n        for (int i = 0; i < nums.length; ++i) {\r\n            if (nums[i] > nextmax) nextmax = nums[i];\r\n        }\r\n        return max*nextmax-max-nextmax+1;\r\n    }\r\n}",
    "javascript": "// Runtime: 185 ms (Top 5.06%) | Memory: 67.7 MB (Top 5.06%)\r\nvar maxProduct = function(nums) {\r\n    let val = [];\r\n    for(let i=0; i<nums.length; i++){\r\n        for(let j=i+1; j<nums.length; j++){\r\n            val.push((nums[i]-1)*(nums[j]-1))\r\n        }\r\n    }\r\n    return Math.max(...val)\r\n};"
  }
}
