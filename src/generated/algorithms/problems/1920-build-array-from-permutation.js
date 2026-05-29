export default {
  "id": 1920,
  "name": "Build Array from Permutation",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/build-array-from-permutation",
  "relativeDir": "B/Build Array from Permutation",
  "slug": "1920-build-array-from-permutation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 11,
    "python": 13,
    "javascript": 4
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> buildArray(vector<int>& nums) {\r\n        int n=nums.size();\r\n        vector<int> ans(n);\r\n        for(int i=0;i<n;i++){\r\n            ans[i]=nums[nums[i]];\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n\t#As maximum value of the array element is 1000, this solution would work\r\n    def buildArray(self, nums: List[int]) -> List[int]:\r\n        for i in range(len(nums)):            \r\n            if nums[nums[i]] <= len(nums):\r\n                nums[i] = nums[nums[i]] * 1000 + nums[i]\r\n            else:\r\n                nums[i] = mod(nums[nums[i]],1000) * 1000 + nums[i]\r\n            \r\n        for i in range(len(nums)):\r\n            nums[i]  = nums[i] // 1000\r\n            \r\n        return nums",
    "java": "class Solution {\r\n    public int[] buildArray(int[] nums) {\r\n        int n=nums.length;\r\n        for(int i=0;i<n;i++)\r\n            nums[i] = nums[i] + n*(nums[nums[i]]%n);\r\n        for(int i=0;i<n;i++)\r\n\t\t\tnums[i] = nums[i]/n;\r\n\t\t\r\n\t\treturn nums;\r\n    }\r\n}",
    "javascript": "// Runtime: 133 ms (Top 33.90%) | Memory: 45.8 MB (Top 67.87%)\r\nvar buildArray = function(nums) {\r\n    return nums.map(a=>nums[a]);\r\n};"
  }
}
