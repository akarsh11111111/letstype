export default {
  "id": 26,
  "name": "Remove Duplicates from Sorted Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array",
  "relativeDir": "R/Remove Duplicates from Sorted Array",
  "slug": "0026-remove-duplicates-from-sorted-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 15,
    "python": 8,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 11 ms (Top 43.43%) | Memory: 18.70 MB (Top 89.89%)\r\n\r\nclass Solution {\r\npublic:\r\n    int removeDuplicates(vector<int>& nums) {\r\n        int j = 1;\r\n        for(int i = 1; i < nums.size(); i++){\r\n            if(nums[i] != nums[i - 1]){\r\n                nums[j] = nums[i];\r\n                j++;\r\n            }\r\n        }\r\n        return j;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def removeDuplicates(self, nums: List[int]) -> int:\r\n        i = 1\r\n        for index in range(1, len(nums)):\r\n            if(nums[index] != nums[index-1]):\r\n                nums[i] = nums[index]\r\n                i += 1\r\n        return i",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 43.72 MB (Top 69.8%)\r\n\r\nclass Solution {\r\n    public int removeDuplicates(int[] arr) {\r\n        int i=0;\r\n        for(int j=1;j<arr.length;j++){\r\n            if(arr[i]!=arr[j]){\r\n                i++;\r\n                arr[i]=arr[j];\r\n            }\r\n        }\r\n        return i+1;\r\n        \r\n    }\r\n}",
    "javascript": "var removeDuplicates = function(nums) {\r\n    for (i = 0; i < nums.length; i++) {\r\n        //Next number is identical to current one\r\n        if (nums[i] == nums[i+1]) {\r\n            nums.splice(i, 1);\r\n            i--;\r\n        }\r\n    }\r\n};"
  }
}
