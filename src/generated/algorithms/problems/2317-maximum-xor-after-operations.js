export default {
  "id": 2317,
  "name": "Maximum XOR After Operations",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-xor-after-operations",
  "relativeDir": "M/Maximum XOR After Operations",
  "slug": "2317-maximum-xor-after-operations",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 10,
    "java": 9,
    "python": 6,
    "javascript": 7
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maximumXOR(vector<int>& nums) {\r\n        int res = 0;\r\n        for (int i=0; i<nums.size() ; i++){\r\n            res |= nums[i];\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumXOR(self, nums: List[int]) -> int:\r\n        res=0\r\n        for i in nums:\r\n            res |= i\r\n        return res",
    "java": "class Solution {\r\n    public int maximumXOR(int[] nums) {\r\n        int res = 0;\r\n        for (int i=0; i<nums.length; i++){\r\n            res |= nums[i];\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar maximumXOR = function(nums) {\r\n  return nums.reduce((acc, cur) => acc |= cur, 0);\r\n};"
  }
}
