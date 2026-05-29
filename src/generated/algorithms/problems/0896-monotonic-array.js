export default {
  "id": 896,
  "name": "Monotonic Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/monotonic-array",
  "relativeDir": "M/Monotonic Array",
  "slug": "0896-monotonic-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 8,
    "java": 15,
    "python": 15,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isMonotonic(vector<int>& nums) {\r\n        auto i = find_if_not(begin(nums), end(nums), [&](int a) {return a == nums.front();});\r\n        auto j = find_if_not(rbegin(nums), rend(nums), [&](int a) {return a == nums.back();});\r\n        return is_sorted(--i, end(nums)) or is_sorted(--j, rend(nums));\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isMonotonic(self, nums: List[int]) -> bool:\r\n        counter = 0\r\n        for i in range(len(nums) - 1):\r\n            if nums[i] >= nums[i + 1]:\r\n                counter += 1\r\n        if counter == len(nums) - 1:\r\n            return True\r\n        counter = 0\r\n        for i in range(len(nums) - 1):\r\n            if nums[i] <= nums[i + 1]:\r\n                counter += 1\r\n        if counter == len(nums) - 1:\r\n            return True\r\n        return False",
    "java": "// Runtime: 4 ms (Top 51.45%) | Memory: 92.5 MB (Top 78.69%)\r\nclass Solution {\r\n    public boolean isMonotonic(int[] nums) {\r\n        if(nums[0]<nums[nums.length-1]){\r\n            for(int i=0;i<nums.length-1;i++){\r\n            if(!(nums[i]<=nums[i+1])) return false;\r\n        }\r\n        }else{\r\n            for(int i=0;i<nums.length-1;i++){\r\n            if(!(nums[i]>=nums[i+1])) return false;\r\n        }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "var isMonotonic = function(nums) {\r\n    let increasingCount = 0;\r\n    let decreasingCount = 0;\r\n    for(let i = 1; i < nums.length; i++){\r\n        if(nums[i] > nums[i-1]){\r\n            increasingCount++;\r\n        }else if(nums[i] < nums[i-1]){\r\n            decreasingCount++;\r\n        }\r\n    }\r\n    \r\n    return !(increasingCount && decreasingCount);\r\n};"
  }
}
