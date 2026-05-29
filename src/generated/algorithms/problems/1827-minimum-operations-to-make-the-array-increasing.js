export default {
  "id": 1827,
  "name": "Minimum Operations to Make the Array Increasing",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing",
  "relativeDir": "M/Minimum Operations to Make the Array Increasing",
  "slug": "1827-minimum-operations-to-make-the-array-increasing",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 23,
    "python": 13,
    "javascript": 13
  },
  "languages": {
    "cpp": "// Runtime: 12 ms (Top 95.79%) | Memory: 15.9 MB (Top 34.27%)\r\nclass Solution {\r\npublic:\r\n    int minOperations(vector<int>& nums) {\r\n        int output=0;\r\n        for(int i=0;i<nums.size()-1;i++){\r\n            if(nums[i]<nums[i+1])\r\n                continue;\r\n            else{\r\n                output=output+(nums[i]+1-nums[i+1]);\r\n                nums[i+1]=nums[i]+1;\r\n            }\r\n        }\r\n        return output;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minOperations(self, nums: List[int]) -> int:\r\n        sol = 0\r\n        last = nums[0]\r\n\r\n        for i in range(len(nums) - 1):\r\n            if last >= nums[i + 1]:\r\n                sol += last - nums[i + 1] + 1\r\n                last = last + 1\r\n            else:\r\n                last = nums[i + 1]\r\n        \r\n        return sol",
    "java": "class Solution {\r\n    public int minOperations(int[] nums) {\r\n        if (nums.length <= 1) {\r\n            return 0;\r\n        }\r\n\r\n        int count = 0;\r\n        int num = nums[0];\r\n        for (int i = 1; i < nums.length; i++) {\r\n            if (num == nums[i]) {\r\n                count++;\r\n                num++;\r\n            } else if (num > nums[i]) {\r\n                num++;\r\n                count += num - nums[i];\r\n            } else {\r\n                num = nums[i];\r\n            }\r\n        }\r\n        \r\n        return count;\r\n    }\r\n}",
    "javascript": "var minOperations = function(nums) {\r\n    if(nums.length < 2) return 0;\r\n    let count = 0;\r\n    for(let i = 1; i<nums.length; i++) {\r\n       if(nums[i] <= nums[i-1]) {\r\n           let change = nums[i-1] - nums[i] + 1;\r\n           count += change;\r\n           nums[i] += change;\r\n       }\r\n    }\r\n    \r\n    return count;\r\n};"
  }
}
