export default {
  "id": 1822,
  "name": "Sign of the Product of an Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sign-of-the-product-of-an-array",
  "relativeDir": "S/Sign of the Product of an Array",
  "slug": "1822-sign-of-the-product-of-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 16,
    "python": 3,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int arraySign(vector<int>& nums) {\r\n        int res = 1;\r\n        for(auto x : nums)\r\n        {\r\n            if(x < 0) res *= -1;\r\n            else if(x == 0) return 0;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def arraySign(self, nums: List[int]) -> int:\r\n\t\treturn 0 if 0 in nums else -1 if sum(x < 0 for x in nums) % 2 else 1",
    "java": "class Solution {\r\n    public int arraySign(int[] nums) {\r\n        int prod=1;\r\n        for(int i=0;i<nums.length;i++){\r\n            int val=signFunc(nums[i]);\r\n            prod*=val;\r\n        }\r\n        return prod;\r\n    }\r\n    \r\n    private int signFunc(int x){\r\n        if(x<0) return -1;\r\n        else if(x>0) return 1;\r\n        return 0;\r\n    }\r\n}",
    "javascript": "// Runtime: 83 ms (Top 65.37%) | Memory: 43.7 MB (Top 52.05%)\r\n\r\nvar arraySign = function(nums) {\r\n    // use filter to find total negative numbers in the array\r\n    let negativeCount = nums.filter(n => n<0).length;\r\n\r\n    // check if the nums array has zero. If it does, then return 0\r\n    if(nums.includes(0)) return 0;\r\n\r\n    // If negativeCount variable is even answer is 1 else -1\r\n    return negativeCount % 2 === 0 ? 1 : -1\r\n};"
  }
}
