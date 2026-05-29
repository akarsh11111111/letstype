export default {
  "id": 2221,
  "name": "Find Triangular Sum of an Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-triangular-sum-of-an-array",
  "relativeDir": "F/Find Triangular Sum of an Array",
  "slug": "2221-find-triangular-sum-of-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 15,
    "python": 8,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 404 ms (Top 62.14%) | Memory: 18.6 MB (Top 88.13%)\r\nclass Solution {\r\npublic:\r\n    int triangularSum(vector<int>& nums) {\r\n        int n=nums.size();\r\n        for(int i=n-1;i>=1;i--){\r\n            for(int j=0;j<i;j++){\r\n                nums[j]=(nums[j]+nums[j+1])%10;\r\n            }\r\n        }\r\n        return nums[0];\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def triangularSum(self, nums):\r\n        while len(nums) > 1:\r\n            arr = []\r\n            for i in range(len(nums)-1):\r\n                arr.append((nums[i] + nums[i+1]) % 10)\r\n            nums = arr\r\n        return nums[0]",
    "java": "class Solution {\r\n    public int triangularSum(int[] nums) {\r\n        return find(nums,nums.length);\r\n    }\r\n    \r\n    public int find(int[] a, int n){\r\n        if(n == 1)\r\n            return a[0];\r\n            \r\n        for(int i=0;i<n-1;i++){\r\n            a[i] = (a[i] + a[i+1])%10; \r\n        }\r\n        return find(a,n-1);\r\n    }\r\n}",
    "javascript": "var triangularSum = function(nums) {\r\n    while(nums.length > 1){\r\n        let arr = []\r\n        for(let i=0; i<nums.length-1; i++){\r\n            arr.push((nums[i] + nums[i+1]) % 10)\r\n        }\r\n        nums = arr\r\n    }\r\n    return nums[0]\r\n};"
  }
}
