export default {
  "id": 137,
  "name": "Single Number II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/single-number-ii",
  "relativeDir": "S/Single Number II",
  "slug": "0137-single-number-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 23,
    "python": 19,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int singleNumber(vector<int>& nums) {\r\n        unordered_map<int,int> mp;\r\n        int ans= 0;\r\n        for(auto i: nums){\r\n            mp[i]++;\r\n        }\r\n        for(auto j: mp){\r\n            if(j.second == 1){\r\n                ans = j.first;\r\n                break;\r\n            }\r\n        }\r\n        return ans;\r\n        \r\n    }\r\n};",
    "python": "import math\r\nclass Solution(object):\r\n    def singleNumber(self, nums):\r\n        \"\"\"\r\n        :type nums: List[int]\r\n        :rtype: int\r\n        [0,-1,1,0]\r\n        \r\n        [2,2,3,2]\r\n        [2,2,3,2]\r\n        [2,2,3,2]\r\n        10   10   11  10\r\n        \"\"\"\r\n        total = sum(nums)\r\n        \r\n        uniqueTotals = set()\r\n        while nums:\r\n            uniqueTotals.add(nums.pop())\r\n        return (sum(uniqueTotals)*3 - total)/2",
    "java": "// Runtime: 12 ms (Top 11.96%) | Memory: 44.6 MB (Top 34.33%)\r\nclass Solution {\r\n    public int singleNumber(int[] nums) {\r\n\r\n        int[] bitCount = new int[32]; // 32 bit number\r\n\r\n        // Count occurrence of each bits in each num\r\n        for (int i = 0; i < bitCount.length; i++) {\r\n            for (int num : nums) {\r\n                if ((num & 1 << i) != 0) // If ith bit in \"num\" is 1\r\n                    bitCount[i]++;\r\n            }\r\n        }\r\n\r\n        // Check the bit which doesn't have count multiple of 3 (i.e. no of repeating digits in input nums arr)\r\n        // and add it to the result.\r\n        int result = 0;\r\n        for (int i = 0; i < bitCount.length; i++)\r\n            result += (bitCount[i] % 3) * (1 << i);\r\n\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 109 ms (Top 37.41%) | Memory: 45 MB (Top 18.53%)\r\n /**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar singleNumber = function(nums) {\r\n    if(nums.length === 1) return nums[0];\r\n\r\n    const objNums = {};\r\n    for(var indexI=0; indexI<nums.length; indexI++){\r\n       if(objNums[nums[indexI]] === 2) delete objNums[nums[indexI]];\r\n       else objNums[nums[indexI]] = (objNums[nums[indexI]] || 0) + 1;\r\n    }\r\n\r\n    return Object.keys(objNums)[0];\r\n};"
  }
}
