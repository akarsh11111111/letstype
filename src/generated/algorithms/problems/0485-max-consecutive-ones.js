export default {
  "id": 485,
  "name": "Max Consecutive Ones",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/max-consecutive-ones",
  "relativeDir": "M/Max Consecutive Ones",
  "slug": "0485-max-consecutive-ones",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 23,
    "python": 15,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findMaxConsecutiveOnes(vector<int>& nums)\r\n    {\r\n        int curr_count = 0;\r\n        int max_count = 0;\r\n        int i = 0;\r\n        while(i < nums.size())\r\n        {\r\n            if(nums[i] == 1)\r\n            {\r\n                curr_count += 1;\r\n                if(max_count < curr_count)\r\n                    max_count = curr_count;                        \r\n            }\r\n            \r\n            else\r\n                curr_count = 0;\r\n            i++;\r\n        }\r\n        return max_count;\r\n    }\r\n};",
    "python": "// Runtime: 297 ms (Top 70.36%) | Memory: 16.60 MB (Top 19.05%)\r\n\r\nclass Solution:\r\n    def findMaxConsecutiveOnes(self, nums: List[int]) -> int:\r\n        \r\n        count = maxCount = 0\r\n        \r\n        for i in range(len(nums)):\r\n            if nums[i] == 1:\r\n                count += 1\r\n            else:\r\n                maxCount = max(count, maxCount)\r\n                count = 0\r\n                \r\n        return max(count, maxCount)",
    "java": "// Runtime: 4 ms (Top 25.35%) | Memory: 56.8 MB (Top 44.29%)\r\nclass Solution {\r\n    public int findMaxConsecutiveOnes(int[] nums) {\r\n        int max = 0;\r\n        int new_max = 0;\r\n        for(int i=0;i<nums.length;i++){\r\n            if(nums[i]==1)\r\n            {\r\n                max++;\r\n            }\r\n            else{\r\n                if(max>new_max){\r\n                    new_max = max;\r\n                }\r\n                max = 0;\r\n            }\r\n        }\r\n        if(max<new_max)\r\n            return new_max;\r\n        else\r\n            return max;\r\n    }\r\n}",
    "javascript": "var findMaxConsecutiveOnes = function(nums) {\r\n    let count =0\r\n    let max =0\r\n    for(let i=0; i<nums.length; i ++){\r\n        if(nums[i]==1){\r\n            count ++\r\n        }\r\n        if(nums[i]==0 || i==nums.length-1){\r\n            max = Math.max(count,max)\r\n            count = 0\r\n        }\r\n    }\r\n    return max\r\n};"
  }
}
