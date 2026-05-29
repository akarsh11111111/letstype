export default {
  "id": 268,
  "name": "Missing Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/missing-number",
  "relativeDir": "M/Missing Number",
  "slug": "0268-missing-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 52,
    "python": 12,
    "javascript": 3
  },
  "languages": {
    "cpp": "// Runtime: 47 ms (Top 14.86%) | Memory: 18 MB (Top 20.20%)\r\n\r\nclass Solution {\r\npublic:\r\n    int missingNumber(vector<int>& nums) {\r\n      int n=nums.size();\r\n        long sum=n*(n+1)/2;\r\n        long temp=0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            temp+=nums[i];\r\n\r\n        }\r\n        return sum-temp;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def missingNumber(self, nums: List[int]) -> int:\r\n        # T.C = O(n) S.C = O(1)\r\n        actualsum = 0\r\n        currentsum = 0\r\n        i = 1\r\n        for num in nums:\r\n            currentsum += num\r\n            actualsum += i\r\n            i += 1\r\n        \r\n        return actualsum - currentsum",
    "java": "// Approach 1: Find diff\r\n\r\nclass Solution {\r\n    public int missingNumber(int[] nums) {\r\n        int n = nums.length;\r\n        int expectedSum = (n * (n + 1)) / 2;\r\n        for (int num : nums)\r\n            expectedSum -= num;\r\n        return expectedSum;\r\n    }\r\n}\r\n\r\n// Approach 2: XOR\r\nclass Solution {\r\n    public int missingNumber(int[] nums) {\r\n        int xor1 = 0;\r\n        for (int i = 1; i <= nums.length; i++)\r\n            xor1 = xor1 ^ i;\r\n\r\n        int xor2 = 0;\r\n        for (int num : nums)\r\n            xor2 = xor2 ^ num;\r\n        return xor1 ^ xor2;\r\n    }\r\n}\r\n\r\n// Approach 3: Cyclic sort\r\nclass Solution {\r\n    public int missingNumber(int[] nums) {\r\n        \r\n        int i = 0;\r\n        while (i < nums.length) {\r\n\r\n            if (nums[i] != i && nums[i] < nums.length)\r\n                swap(i, nums[i], nums);\r\n            else\r\n                i += 1;\r\n        }\r\n        \r\n        for (int j = 0; j < nums.length; j++) {\r\n            if (nums[j] != j)\r\n                return j;\r\n        }\r\n        return nums.length;\r\n    }\r\n    \r\n    private void swap(int i, int j, int[] nums) {\r\n        int temp = nums[i];\r\n        nums[i] = nums[j];\r\n        nums[j] = temp;\r\n    }\r\n}",
    "javascript": "var missingNumber = function(nums) {\r\n    return ((1 + nums.length)*nums.length/2) - nums.reduce((a,b) => a+b)\r\n};"
  }
}
