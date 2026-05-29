export default {
  "id": 27,
  "name": "Remove Element",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-element",
  "relativeDir": "R/Remove Element",
  "slug": "0027-remove-element",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 13,
    "python": 15,
    "javascript": 9
  },
  "languages": {
    "cpp": "// two pointer\r\nclass Solution {\r\npublic:\r\n    int removeElement(vector<int>& nums, int val) {\r\n        int left = 0;\r\n        int right = nums.size() - 1;\r\n        while (left <= right) {\r\n              if (nums[left] != val) {\r\n                 ++left;\r\n              }\r\n              else if (nums[right] == val) {\r\n                 --right;\r\n              }\r\n              else if (left < right) {\r\n                 nums[left++] = nums[right--];\r\n              }\r\n        }\r\n        return left;\r\n    }\r\n};",
    "python": "# Runtime: 74 ms (Top 6.53%) | Memory: 13.9 MB (Top 63.16%)\r\nclass Solution(object):\r\n    def removeElement(self, nums, val):\r\n        \"\"\"\r\n        :type nums: List[int]\r\n        :type val: int\r\n        :rtype: int\r\n        \"\"\"\r\n        step = 0\r\n        while step < len(nums):\r\n            if nums[step] == val:\r\n                nums.pop(step)\r\n                continue\r\n            step+=1\r\n        return len(nums)",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 42.4 MB (Top 71.77%)\r\n\r\nclass Solution {\r\n    public int removeElement(int[] nums, int val) {\r\n        int ind = 0;\r\n        for(int i=0; i<nums.length; i++){\r\n            if(nums[i] != val){\r\n                nums[ind++] = nums[i];\r\n            }\r\n        }\r\n        return ind;\r\n    }\r\n}",
    "javascript": "var removeElement = function(nums, val) {\r\n    for(let i = 0; i < nums.length; i++){\r\n        if(nums[i] === val){\r\n            nums.splice(i, 1);\r\n            i--;\r\n        }\r\n    }\r\n    return nums.length;\r\n};"
  }
}
