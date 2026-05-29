export default {
  "id": 80,
  "name": "Remove Duplicates from Sorted Array II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii",
  "relativeDir": "R/Remove Duplicates from Sorted Array II",
  "slug": "0080-remove-duplicates-from-sorted-array-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 22,
    "python": 36,
    "javascript": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int removeDuplicates(vector<int>& nums) {\r\n       int l = 1;\r\n        int last_selected = nums[0];\r\n        int count = 1;\r\n        int n = nums.size();\r\n        for(int i = 1;i<n;i++)\r\n        {\r\n            if(nums[i]!=last_selected){\r\n                count = 1;\r\n                last_selected = nums[i];\r\n                nums[l] = nums[i];\r\n                l++;\r\n            }\r\n            else if(count == 2){\r\n                continue;\r\n            }\r\n            else{\r\n                nums[l] = nums[i];\r\n                l++;\r\n                count++;\r\n            }\r\n        }\r\n        return (l);\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def removeDuplicates(self, nums):\r\n        n=len(nums)\r\n        if n==2:\r\n            return 2\r\n        if n==0:\r\n            return 0\r\n        if n==1:\r\n            return 1\r\n        same=0\r\n        start=-1\r\n        end=-1\r\n        i=0\r\n        while i<n-1:\r\n            if nums[i]==nums[i+1] and same==0:\r\n                same=1\r\n                start=i+2\r\n                i+=1\r\n                continue\r\n            while i<n-1 and nums[i]==nums[i+1] and same==1:\r\n                end=i+1\r\n                i+=1\r\n            i+=1\r\n            if start!=-1 and end!=-1:\r\n                no_of_shifts=end-start+1\r\n                while i<n:\r\n                    nums[i-no_of_shifts]=nums[i]\r\n                    i+=1\r\n                n=n-no_of_shifts\r\n                i=start\r\n            start=-1\r\n            end=-1\r\n            same=0\r\n            \r\n        return n\r\n\t\t```",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 43.37 MB (Top 93.9%)\r\n\r\nclass Solution {\r\n    public int removeDuplicates(int[] nums) {\r\n     int   index = 1;\r\n      int  count = 0;\r\n        for(int i = 1;i<nums.length;i++){\r\n            if(nums[i] == nums[i-1]){\r\n                count++;\r\n            }\r\n            else{\r\n                count = 0;\r\n            }\r\n\r\n            if(count <= 1){\r\n                nums[index] = nums[i];\r\n                index++;\r\n            }\r\n        }\r\n        return index;\r\n    }\r\n}",
    "javascript": "// Runtime: 85 ms (Top 81.32%) | Memory: 43.9 MB (Top 72.24%)\r\nvar removeDuplicates = function(nums) {\r\n    let i = 0;\r\n    let count = 0;\r\n    for(let num of nums) {\r\n        (num == nums[i - 1]) ? count++ : count = 1;\r\n        if(i == 0 || (num >= nums[i - 1] && count <= 2)) nums[i++] = num;\r\n    }\r\n    return i;\r\n};"
  }
}
