export default {
  "id": 153,
  "name": "Find Minimum in Rotated Sorted Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array",
  "relativeDir": "F/Find Minimum in Rotated Sorted Array",
  "slug": "0153-find-minimum-in-rotated-sorted-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 16,
    "python": 19,
    "javascript": 5
  },
  "languages": {
    "cpp": "// Runtime: 10 ms (Top 20.79%) | Memory: 10.1 MB (Top 71.20%)\r\nclass Solution {\r\npublic:\r\n    int findMin(vector<int>& nums) {\r\n        int result = -1;\r\n        int first = nums[0];\r\n\r\n        // check the array for rotated point when it is obtained break the loop and assign result as rotation point\r\n        for(int i = 1; i<nums.size();i++){\r\n            if(nums[i-1]>nums[i]){\r\n                result = nums[i];\r\n                break;\r\n            }\r\n        }\r\n        // if the array is not sorted return first element\r\n        if(result == -1) {\r\n            return first;\r\n        }\r\n        return result;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findMin(self, nums: List[int]) -> int:\r\n        if len(nums) == 1 or nums[0] < nums[-1]:\r\n            return nums[0]\r\n        \r\n        l, r = 0, len(nums) - 1\r\n        \r\n        while l <= r:\r\n            mid = l + (r - l) // 2\r\n            \r\n            if mid > 0 and nums[mid - 1] > nums[mid]:\r\n                return nums[mid]\r\n            \r\n\t\t\t# We compare the middle number and the right index number\r\n\t\t\t# but why we cannot compare it with the left index number?\r\n            if nums[mid] > nums[r]:\r\n                l = mid + 1\r\n            else:\r\n                r = mid - 1",
    "java": "// Runtime: 1 ms (Top 45.46%) | Memory: 42.8 MB (Top 25.20%)\r\nclass Solution {\r\n    public int findMin(int[] nums)\r\n    {\r\n        int min=nums[0];\r\n\r\n        for(int i=0;i<nums.length;i++)\r\n        {\r\n            if(min>nums[i])\r\n            {\r\n                min=nums[i];\r\n            }\r\n        }\r\n        return min;\r\n    }\r\n}",
    "javascript": "// Runtime: 100 ms (Top 28.62%) | Memory: 41.9 MB (Top 82.47%)\r\nvar findMin = function(nums) {\r\n    let min = Math.min(...nums)\r\n    return min;\r\n};"
  }
}
