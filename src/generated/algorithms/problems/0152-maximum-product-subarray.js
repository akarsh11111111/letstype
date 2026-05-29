export default {
  "id": 152,
  "name": "Maximum Product Subarray",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-product-subarray",
  "relativeDir": "M/Maximum Product Subarray",
  "slug": "0152-maximum-product-subarray",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 19,
    "python": 18,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 14 ms (Top 41.00%) | Memory: 13.8 MB (Top 71.46%)\r\nclass Solution {\r\npublic:\r\n    int maxProduct(vector<int>& nums) {\r\n        int n = nums.size();\r\n        int negPro = 1;\r\n        int posPro = 1;\r\n        int CHECK_ZERO = 0;\r\n        int res = INT_MIN;\r\n        for(int i = 0; i < n; i++)\r\n        {\r\n            if(nums[i] == 0)\r\n            {\r\n                posPro = 1;\r\n                negPro = 1;\r\n                CHECK_ZERO = 1;\r\n            }\r\n            int numPos = posPro * nums[i];\r\n            int numNeg = negPro * nums[i];\r\n            posPro = max(numPos, max(numNeg, nums[i]));\r\n            negPro = min(numPos, min(numNeg, nums[i]));\r\n            res = max(posPro,res);\r\n        }\r\n        return (CHECK_ZERO ? max(0,res) : res);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxProduct(self, nums: List[int]) -> int:\r\n        prod=1\r\n        maxprod=-100000000\r\n        for i in range(len(nums)): # traverse from L-R so that we get max \r\n            prod*=nums[i]\r\n            maxprod=max(maxprod,prod)\r\n            if prod==0:\r\n                prod=1\r\n\r\n        prod=1\r\n        for i in range(len(nums)-1,-1,-1): #if 0 or -ve present at starting then find from back\r\n            prod*=nums[i]\r\n            maxprod=max(maxprod,prod)\r\n            if prod==0:\r\n                prod=1\r\n\r\n        return maxprod",
    "java": "// Runtime: 1 ms (Top 97.73%) | Memory: 44.9 MB (Top 43.86%)\r\nclass Solution {\r\n    public int maxProduct(int[] nums) {\r\n        int ans = Integer.MIN_VALUE;\r\n        int m = 1;\r\n        for(int i=0; i< nums.length; i++){\r\n            m*=nums[i];\r\n            ans = Math.max(m, ans);\r\n            if(m == 0) m=1;\r\n        }\r\n        int n = 1;\r\n        for(int i=nums.length-1; i>=0; i--){\r\n            n*=nums[i];\r\n            ans = Math.max(n, ans);\r\n            if(n == 0) n=1;\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 111 ms (Top 29.35%) | Memory: 42.3 MB (Top 82.36%)\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar maxProduct = function(nums) {\r\n    const n = nums.length - 1;\r\n    let ans = nums[0];\r\n    let l = 1, r = 1;\r\n\r\n    for (let i = 0; i < nums.length; i++) {\r\n        l = (l ? l : 1) * nums[i];\r\n        r = (r ? r : 1) * nums[n - i];\r\n        ans = Math.max(ans, Math.max(l, r));\r\n    }\r\n\r\n    return ans;\r\n};"
  }
}
