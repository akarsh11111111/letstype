export default {
  "id": 238,
  "name": "Product of Array Except Self",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/product-of-array-except-self",
  "relativeDir": "P/Product of Array Except Self",
  "slug": "0238-product-of-array-except-self",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 24,
    "python": 15,
    "javascript": 20
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> productExceptSelf(vector<int>& nums) {\r\n        int zero=0,product=1;\r\n        for(auto i:nums){\r\n            if(i==0)\r\n                zero++;\r\n            else product*=i;\r\n        }\r\n        for(int i=0;i<nums.size();i++){\r\n            if(nums[i] == 0 && zero>1){\r\n                nums[i]=0;\r\n            }\r\n            else if(nums[i] == 0){\r\n                nums[i]=product;\r\n            }\r\n            else if(zero > 0){\r\n                nums[i]=0;\r\n            }\r\n            else nums[i]=product/nums[i];\r\n        }\r\n        return nums;\r\n    }\r\n};",
    "python": "# Runtime: 477 ms (Top 13.75%) | Memory: 22.5 MB (Top 18.46%)\r\nclass Solution:\r\n    def productExceptSelf(self, nums: List[int]) -> List[int]:\r\n        pre = [1]* (len(nums)+1)\r\n        back = [1]*(len(nums)+1)\r\n\r\n        for i in range(len(nums)):\r\n            pre[i+1] = pre[i]*nums[i]\r\n\r\n        for i in range(len(nums)-1,-1,-1):\r\n            back[i-1] = back[i]*nums[i]\r\n        for i in range(len(pre)-1):\r\n            nums[i]=pre[i]*back[i]\r\n\r\n        return nums",
    "java": "// Runtime: 2 ms (Top 62.8%) | Memory: 54.05 MB (Top 10.0%)\r\n\r\nclass Solution {\r\n    public int[] productExceptSelf(int[] nums) {\r\n        int n = nums.length;\r\n        int pre[] = new int[n];\r\n        int suff[] = new int[n];\r\n        pre[0] = 1;\r\n        suff[n - 1] = 1;\r\n        \r\n        for(int i = 1; i < n; i++) {\r\n            pre[i] = pre[i - 1] * nums[i - 1];\r\n        }\r\n        for(int i = n - 2; i >= 0; i--) {\r\n            suff[i] = suff[i + 1] * nums[i + 1];\r\n        }\r\n        \r\n        int ans[] = new int[n];\r\n        for(int i = 0; i < n; i++) {\r\n            ans[i] = pre[i] * suff[i];\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number[]}\r\n */\r\nvar productExceptSelf = function(nums) {\r\n  let result = [];\r\n  let len = nums.length;\r\n\r\n  let prefix = 1;\r\n  for (let i = 0; i < len; i++) {\r\n    result[i] = prefix;\r\n    prefix *= nums[i];\r\n  }\r\n  let postfix = 1;\r\n  for (let i = len - 1; i >= 0; i--) {\r\n    result[i] *= postfix;\r\n    postfix *= nums[i];\r\n  }\r\n  return result;\r\n};"
  }
}
