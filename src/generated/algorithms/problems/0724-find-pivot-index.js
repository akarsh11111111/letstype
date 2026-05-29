export default {
  "id": 724,
  "name": "Find Pivot Index",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-pivot-index",
  "relativeDir": "F/Find Pivot Index",
  "slug": "0724-find-pivot-index",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 20,
    "python": 13,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int pivotIndex(vector<int>& nums) {\r\n        int sum=0, leftSum=0;\r\n        for (int& n : nums){\r\n            sum += n;\r\n        }\r\n        for(int i=0; i<nums.size();i++){\r\n            if(leftSum == sum-leftSum-nums[i]){\r\n                return i;\r\n            }\r\n            leftSum += nums[i];\r\n        }\r\n        return -1;\r\n    }\r\n};",
    "python": "# Runtime: 342 ms (Top 15.25%) | Memory: 15.2 MB (Top 92.14%)\r\nclass Solution:\r\n    def pivotIndex(self, nums: List[int]) -> int:\r\n        right = sum(nums)\r\n        left = 0\r\n\r\n        for i in range(len(nums)):\r\n            right -= nums[i]\r\n            left += nums[i - 1] if i > 0 else 0\r\n\r\n            if right == left: return i\r\n\r\n        return -1",
    "java": "// Runtime: 1 ms (Top 100.00%) | Memory: 43.2 MB (Top 91.78%)\r\nclass Solution {\r\n    public int pivotIndex(int[] nums) {\r\n\r\n        int leftsum = 0;\r\n        int rightsum = 0;\r\n\r\n        for(int i =1; i< nums.length; i++) rightsum += nums[i];\r\n\r\n        if (leftsum == rightsum) return 0;\r\n\r\n        for(int i = 1 ; i < nums.length; i++){\r\n            leftsum += nums[i-1];\r\n            rightsum -= nums[i];\r\n\r\n            if(leftsum == rightsum) return i;\r\n        }\r\n        return -1;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar pivotIndex = function(nums) {\r\n   //step 1\r\n    var tot=0;\r\n    for (let i = 0; i < nums.length; i++) {\r\n        tot+= nums[i];       \r\n    }\r\n    // Step 2\r\n    left = 0 ;\r\n    for (let j = 0; j < nums.length; j++) {\r\n        right = tot - nums[j] - left;\r\n        if (left == right){\r\n            return j\r\n        }\r\n        left += nums[j];\r\n    }\r\n    return -1\r\n};"
  }
}
