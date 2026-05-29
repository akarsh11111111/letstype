export default {
  "id": 747,
  "name": "Largest Number At Least Twice of Others",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/largest-number-at-least-twice-of-others",
  "relativeDir": "L/Largest Number At Least Twice of Others",
  "slug": "0747-largest-number-at-least-twice-of-others",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 30,
    "python": 11,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int dominantIndex(vector<int>& nums) {\r\n        if(nums.size() < 2){\r\n            return nums.size()-1;\r\n        }\r\n        int max1 = INT_MIN;\r\n        int max2 = INT_MIN;\r\n        int result = -1;\r\n        for(int i=0;i<nums.size();i++){\r\n            if(nums[i] > max1){\r\n                result = i;\r\n                max2 = max1;\r\n                max1 = nums[i];\r\n            }else if(nums[i] > max2){\r\n                max2 = nums[i];\r\n            }\r\n        }\r\n        return max1 >= 2*max2 ? result : -1;\r\n    }\r\n};",
    "python": "# Runtime: 40 ms (Top 86.73%) | Memory: 13.8 MB (Top 57.55%)\r\nclass Solution:\r\n    def dominantIndex(self, nums: List[int]) -> int:\r\n        if len(nums) is 1:\r\n            return 0\r\n        dom = max(nums)\r\n        i = nums.index(dom)\r\n        nums.remove(dom)\r\n        if max(nums) * 2 <= dom:\r\n            return i\r\n        return -1",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 40.50 MB (Top 45.54%)\r\n\r\nclass Solution {\r\n    public int dominantIndex(int[] nums) {\r\n        if(nums == null || nums.length == 0){\r\n            return -1;\r\n        }\r\n        \r\n        if(nums.length == 1){\r\n            return 0;\r\n        }\r\n        int max = Integer.MIN_VALUE + 1;\r\n        int secondMax = Integer.MIN_VALUE;\r\n        int index = 0;\r\n        \r\n        for(int i = 0; i < nums.length; i++){\r\n            if(nums[i] > max){\r\n                secondMax = max;\r\n                max = nums[i];\r\n                index = i;\r\n            } else if(nums[i] != max && nums[i] > secondMax){\r\n                secondMax = nums[i];\r\n            }\r\n        }\r\n        if(secondMax * 2 <= max){\r\n            return index;\r\n        }\r\n        return -1;\r\n    }\r\n}",
    "javascript": "// Runtime: 70 ms (Top 84.49%) | Memory: 41.9 MB (Top 82.23%)\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar dominantIndex = function(nums) {\r\n  let first = -Infinity;\r\n  let second = -Infinity;\r\n  let ans = 0;\r\n  for (let i = 0; i < nums.length; i++) {\r\n    if (nums[i] > first) {\r\n      second = first;\r\n      first = nums[i];\r\n      ans = i;\r\n    } else if (nums[i] > second) {\r\n      second = nums[i];\r\n    }\r\n  }\r\n  return first >= second * 2 ? ans : -1;\r\n};"
  }
}
