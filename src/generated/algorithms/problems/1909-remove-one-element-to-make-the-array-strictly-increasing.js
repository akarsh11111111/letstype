export default {
  "id": 1909,
  "name": "Remove One Element to Make the Array Strictly Increasing",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing",
  "relativeDir": "R/Remove One Element to Make the Array Strictly Increasing",
  "slug": "1909-remove-one-element-to-make-the-array-strictly-increasing",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 20,
    "python": 23,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 93.99%) | Memory: 10 MB (Top 62.81%)\r\nclass Solution {\r\npublic:\r\n    bool canBeIncreasing(vector<int>& nums) {\r\nint count = 0;\r\n        for (int i = 1; i < nums.size(); ++i) {\r\n            if (nums[i] <= nums[i - 1]) {\r\n                if (count == 1)\r\n                    return false;\r\n                count++;\r\n                if (i > 1 && nums[i] <= nums[i - 2] )\r\n                    nums[i] = nums[i - 1];\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def canBeIncreasing(self, nums: List[int]) -> bool:\r\n        indx = -1\r\n        count = 0\r\n        n = len(nums)\r\n        \r\n        # count the number of non-increasing elements\r\n        for i in range(n-1):\r\n            if nums[i] >= nums[i+1]:\r\n                indx = i\r\n                count += 1\r\n        \r\n        #the cases explained above\r\n        if count==0:\r\n            return True\r\n        \r\n        if count == 1:\r\n            if indx == 0 or indx == n-2:\r\n                return True\r\n            if nums[indx-1] < nums[indx+1] or(indx+2 < n and nums[indx] < nums[indx+2]):\r\n                return True\r\n            \r\n        return False",
    "java": "// Runtime: 1 ms (Top 78.74%) | Memory: 42.8 MB (Top 79.54%)\r\nclass Solution {\r\n    public boolean canBeIncreasing(int[] nums) {\r\n        int count=0;\r\n        int p=0;\r\n        for(int i=0;i<nums.length-1;i++){\r\n            if(nums[i]>nums[i+1] || nums[i]==nums[i+1]) {\r\n                count++;\r\n                p=i;\r\n            }\r\n        }\r\n        if(count>1) return false;\r\n        else if(count==1){\r\n            if(p==0 || p== nums.length-2) return true;\r\n            if(nums[p+1]>nums[p-1] || nums[p+2]>nums[p]) return true;\r\n            else return false;\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "var canBeIncreasing = function(nums) {\r\n  for (let i = 1, used = false, prev = nums[0]; i < nums.length; i++) {\r\n    if (nums[i] > prev) { prev = nums[i]; continue }\r\n    if (used) return false;\r\n    used = true;\r\n    (i === 1 || nums[i] > nums[i - 2]) && (prev = nums[i]);\r\n  }\r\n  return true;\r\n};"
  }
}
