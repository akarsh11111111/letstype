export default {
  "id": 15,
  "name": "3Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/3sum",
  "relativeDir": "0-9/3Sum",
  "slug": "0015-3sum",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "python": 22,
    "javascript": 33
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> threeSum(vector<int>& nums) \r\n    {\r\n        sort(nums.begin(), nums.end());\r\n        vector<vector<int>> ans;\r\n\r\n        for (int i = 0; i < nums.size() - 2; i++)\r\n        {\r\n            if(i > 0 && (nums[i] == nums[i - 1]))\r\n                continue;\r\n\r\n            int left_index = i + 1;\r\n            int right_index = nums.size() - 1;\r\n\r\n            while(left_index < right_index)\r\n            {\r\n                int threesome = nums[i] + nums[left_index] + nums[right_index];\r\n                if (threesome > 0)\r\n                    right_index--;\r\n                else if (threesome < 0)\r\n                    left_index++;\r\n                else\r\n                {\r\n                    ans.push_back({nums[i], nums[left_index], nums[right_index]});\r\n                    \r\n                    while(((left_index < right_index) && nums[left_index] == nums[left_index + 1]))\r\n                        left_index++;\r\n                    left_index ++;\r\n\r\n                }\r\n\r\n            }\r\n            \r\n        }\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def threeSum(self, nums):\r\n        ans = []\r\n        nums.sort()\r\n        \r\n        for i in range(len(nums)):\r\n            if nums[i] > 0: break  # after sorting, if the min > 0, we couldn't find such three values\r\n            if i > 0 and nums[i] == nums[i - 1]:  # ensure that nums[i] is not duplicated\r\n                continue               \r\n            l, r = i + 1, len(nums) - 1\r\n            while l < r:\r\n                if nums[l] + nums[r] > -nums[i]:\r\n                    r -= 1\r\n                elif nums[l] + nums[r] < -nums[i]:\r\n                    l += 1\r\n                else:\r\n                    ans.append([nums[i], nums[l], nums[r]])\r\n\t\t\t\t\t# update l to get a different sum\r\n                    l += 1\r\n                    while nums[l] == nums[l - 1] and l < r:\r\n                        l += 1\r\n        return ans",
    "javascript": "// Runtime: 250 ms (Top 39.42%) | Memory: 52.7 MB (Top 62.36%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @return {number[][]}\r\n */\r\nvar threeSum = function(nums) {\r\n    nums.sort((a, b) => a - b);\r\n\r\n    const ans = [];\r\n\r\n    for (let i = 0; i < nums.length - 2; i++) {\r\n        if (i === 0 || nums[i - 1] !== nums[i]) {\r\n            let j = i + 1;\r\n            let k = nums.length - 1;\r\n            while (j < k) {\r\n                if (nums[j] + nums[k] === -nums[i]) {\r\n                    ans.push([nums[i], nums[j], nums[k]]);\r\n                    j++;\r\n                    while(j < k && nums[j - 1] === nums[j]) j++;\r\n                    k--;\r\n                    while(k > -1 && nums[k] === nums[k + 1]) k--;\r\n                } else if (nums[j] + nums[k] < -nums[i]) {\r\n                    j++;\r\n                } else {\r\n                    k--;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    return ans;\r\n};"
  }
}
