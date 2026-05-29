export default {
  "id": 2270,
  "name": "Number of Ways to Split Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-ways-to-split-array",
  "relativeDir": "N/Number of Ways to Split Array",
  "slug": "2270-number-of-ways-to-split-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 17,
    "python": 12,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 298 ms (Top 27.82%) | Memory: 85.6 MB (Top 63.00%)\r\nclass Solution {\r\npublic:\r\n    int waysToSplitArray(vector<int>& nums) {\r\n\r\n        long long sumFromBack(0), sumFromFront(0);\r\n        for (auto& i : nums) sumFromBack += i;\r\n\r\n        int n(size(nums)), res(0);\r\n        for (auto i=0; i<n-1; i++) {\r\n\r\n            sumFromFront += nums[i]; // sum of the first i + 1 elements\r\n            sumFromBack -= nums[i]; // sum of the last n - i - 1 elements.\r\n            if (sumFromFront >= sumFromBack) res++;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def waysToSplitArray(self, nums: List[int]) -> int:\r\n        prefix_sum = [nums[0]]\r\n        n = len(nums)\r\n        for i in range(1, n):\r\n            prefix_sum.append(nums[i] + prefix_sum[-1]) \r\n        \r\n        count = 0\r\n        for i in range(n-1):\r\n            if prefix_sum[i] >= prefix_sum[n-1] - prefix_sum[i]:\r\n                count += 1\r\n        return count",
    "java": "class Solution {\r\n    public int waysToSplitArray(int[] nums) {\r\n        long sum = 0;\r\n        for(int i : nums){\r\n            sum+=i;\r\n        }\r\n        int sol = 0;\r\n        long localSum = 0;\r\n        for(int i=0; i<nums.length-1;i++){\r\n            localSum += nums[i];\r\n            if(localSum >= sum-localSum){\r\n                sol++;\r\n            }\r\n        }\r\n        return sol;\r\n    }\r\n}",
    "javascript": "// Runtime: 172 ms (Top 28.33%) | Memory: 54.8 MB (Top 73.33%)\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar waysToSplitArray = function(nums) {\r\n    let result = 0;\r\n    let letsum = 0;\r\n    let rightsum = nums.reduce((a,b)=> a+b);\r\n    let end = nums.length-1;\r\n    for (let i = 0;i<end;i++) {\r\n        letsum+=nums[i];\r\n        rightsum-=nums[i];\r\n        if (letsum>=rightsum) {\r\n            result++;\r\n        }\r\n    }\r\n    return result;\r\n};"
  }
}
