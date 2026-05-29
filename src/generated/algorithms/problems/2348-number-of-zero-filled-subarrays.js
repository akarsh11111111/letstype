export default {
  "id": 2348,
  "name": "Number of Zero-Filled Subarrays",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-zero-filled-subarrays",
  "relativeDir": "N/Number of Zero-Filled Subarrays",
  "slug": "2348-number-of-zero-filled-subarrays",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "python": 11,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution \r\n{\r\npublic:\r\n    long long zeroFilledSubarray(vector<int>& nums) \r\n    {\r\n        long long count = 0;\r\n        long long ans = 0;\r\n        \r\n        for(int i=0; i<nums.size(); i++)\r\n        {\r\n            if(nums[i]==0)\r\n            {\r\n                count++;\r\n                ans += count;\r\n            }\r\n            else\r\n            {\r\n                count = 0;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n    \r\n};",
    "python": "#Baraa\r\nclass Solution:\r\n    def zeroFilledSubarray(self, nums: List[int]) -> int:\r\n        i = 0\r\n        res = 0\r\n        for j in range(len(nums)):\r\n            if nums[j] != 0:\r\n                i = j + 1\r\n            else:\r\n                res += (j - i + 1)\r\n        return res",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar zeroFilledSubarray = function(nums) {\r\n  let numOfSubarray = 0\r\n    \r\n  for (let i = 0; i < nums.length; i++) {\r\n    if (nums[i] === 0) {\r\n      let j = i\r\n      while (nums[j] === 0 && j < nums.length) {\r\n        j++\r\n      }\r\n      \r\n      numOfSubarray += (j - i + 1) * (j - i) / 2\r\n      i = j\r\n    }\r\n  }\r\n  \r\n  return numOfSubarray\r\n};"
  }
}
