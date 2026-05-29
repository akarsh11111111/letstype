export default {
  "id": 189,
  "name": "Rotate Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rotate-array",
  "relativeDir": "R/Rotate Array",
  "slug": "0189-rotate-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 17,
    "python": 17,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 22 ms (Top 99.63%) | Memory: 25.6 MB (Top 27.04%)\r\n\r\nclass Solution {\r\npublic:\r\n    void rotate(vector<int>& nums, int k) {\r\n\r\n        vector<int> temp(nums.size());\r\n        for(int i = 0; i < nums.size() ;i++){\r\n\r\n            temp[(i+k)%nums.size()] = nums[i];\r\n\r\n        }\r\n\r\n        nums = temp;\r\n    }\r\n};",
    "python": "# Runtime: 484 ms (Top 40.41%) | Memory: 25.4 MB (Top 28.89%)\r\nclass Solution:\r\n    def reverse(self,arr,left,right):\r\n        while left < right:\r\n            arr[left],arr[right] = arr[right], arr[left]\r\n            left, right = left + 1, right - 1\r\n        return arr\r\n    def rotate(self, nums: List[int], k: int) -> None:\r\n        length = len(nums)\r\n        k = k % length\r\n        l, r = 0, length - 1\r\n        nums = self.reverse(nums,l,r)\r\n        l, r = 0, k - 1\r\n        nums = self.reverse(nums,l,r)\r\n        l, r = k, length - 1\r\n        nums = self.reverse(nums,l,r)\r\n        return nums",
    "java": "class Solution {\r\n    public void rotate(int[] nums, int k) {\r\n        reverse(nums , 0 , nums.length-1);\r\n        reverse(nums , 0 , k-1);\r\n        reverse(nums , k , nums.length -1);\r\n    }\r\n    \r\n    public static void reverse(int[] arr , int start , int end){\r\n        while(start<end){\r\n            int temp = arr[start];\r\n            arr[start] = arr[end];\r\n            arr[end] = temp;\r\n            start++;\r\n            end--;\r\n        }\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @param {number} k\r\n * @return {void} Do not return anything, modify nums in-place instead.\r\n */\r\nvar rotate = function(nums, k) {\r\n    const len = nums.length;\r\n    k %= len;\r\n    const t = nums.splice(len - k, k);\r\n    nums.unshift(...t);\r\n};"
  }
}
