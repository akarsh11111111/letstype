export default {
  "id": 169,
  "name": "Majority Element",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/majority-element",
  "relativeDir": "M/Majority Element",
  "slug": "0169-majority-element",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 14,
    "python": 9,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 41 ms (Top 23.63%) | Memory: 19.6 MB (Top 14.15%)\r\nclass Solution {\r\npublic:\r\n    int majorityElement(vector<int>& nums) {\r\n        // Initialize sol and cnt to store the solution and its frequency for respective iterations...\r\n        int sol = 0, cnt = 0;\r\n        // For every element i in the array...\r\n        for(int i = 0; i < nums.size(); i++ ) {\r\n            // If cnt is equal to zero, update sol as sol = i\r\n            if(cnt == 0){\r\n                sol = nums[i];\r\n                cnt = 1;\r\n            }\r\n            // If i is equal to candidate, increment cnt...\r\n            else if(sol == nums[i]){\r\n                cnt++;\r\n            }\r\n            // Otherwise, decrement cnt...\r\n            else{\r\n                cnt--;\r\n            }\r\n        }\r\n        // Return & print the solution...\r\n        return sol;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def majorityElement(self, nums):\r\n        sol = None\r\n        cnt = 0\r\n        for i in nums:\r\n            if cnt == 0:\r\n                sol = i\r\n            cnt += (1 if i == sol else -1)\r\n        return sol",
    "java": "// Runtime: 14 ms (Top 32.93%) | Memory: 56.8 MB (Top 19.67%)\r\nclass Solution {\r\n    public int majorityElement(int[] nums) {\r\n        // Base case...\r\n        if (nums.length == 1) {\r\n            return nums[0];\r\n        }\r\n        // Sort nums array...\r\n        Arrays.sort(nums);\r\n        // Since the majority element appears more than n / 2 times...\r\n        // The n/2 -th element in the sorted nums must be the majority element...\r\n        return nums[nums.length / 2];\r\n    }\r\n}",
    "javascript": "var majorityElement = function(nums) {\r\n    // Initialize sol and cnt to store the solution and its frequency for respective iterations...\r\n    let sol = 0, cnt = 0;\r\n    // For every element i in the array...\r\n    for(let i = 0; i < nums.length; i++ ) {\r\n        // If cnt is equal to zero, update sol as sol = i\r\n        if(cnt == 0){\r\n            sol = nums[i];\r\n            cnt = 1;\r\n        }\r\n        // If i is equal to candidate, increment cnt...\r\n        else if(sol == nums[i]){\r\n            cnt++;\r\n        }\r\n        // Otherwise, decrement cnt...\r\n        else{\r\n            cnt--;\r\n        }\r\n    }\r\n    // Return & print the solution...\r\n    return sol;\r\n};"
  }
}
