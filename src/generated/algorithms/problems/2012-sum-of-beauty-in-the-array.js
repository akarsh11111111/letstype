export default {
  "id": 2012,
  "name": "Sum of Beauty in the Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-beauty-in-the-array",
  "relativeDir": "S/Sum of Beauty in the Array",
  "slug": "2012-sum-of-beauty-in-the-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 38,
    "python": 21,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int sumOfBeauties(vector<int>& nums) {\r\n        int n=nums.size();\r\n        vector<int>right;\r\n        vector<int>left;\r\n        int low=nums[0];\r\n        for(int i=0;i<nums.size();i++){\r\n            \r\n            left.push_back(low);\r\n            low=max(low,nums[i]);\r\n        }\r\n        low=nums[n-1];\r\n        for(int i=n-1;i>=0;i--){\r\n            \r\n            right.push_back(low);\r\n            low=min(low,nums[i]);\r\n        }\r\n        reverse(right.begin(),right.end());\r\n        int ans=0;\r\n        for(int i=1;i<n-1;i++){\r\n            if(nums[i]>left[i] && nums[i]<right[i]){\r\n                ans+=2;\r\n            }\r\n            else if(nums[i]>nums[i-1] && nums[i]<nums[i+1]){\r\n                ans+=1;\r\n            }\r\n            else{\r\n                ans+=0;\r\n            }\r\n        }\r\n        return ans;\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def sumOfBeauties(self, nums: List[int]) -> int:\r\n        n = len(nums)\r\n        max_dp = [0] * n\r\n        min_dp = [float(inf)] * n\r\n        max_dp[0] = nums[0]\r\n        min_dp[-1] = nums[-1]\r\n        \r\n        for i in range(1, n):\r\n            max_dp[i] = max(nums[i], max_dp[i-1])\r\n            \r\n        for i in range(n-2, -1, -1):\r\n            min_dp[i] = min(nums[i], min_dp[i+1])\r\n        \r\n        ans = 0\r\n        for i in range(1, n-1):\r\n            if max_dp[i-1] < max_dp[i] and nums[i] < min_dp[i+1]:\r\n                ans += 2\r\n            elif nums[i-1] < nums[i] < nums[i+1]:\r\n                ans += 1\r\n        return ans",
    "java": "// Runtime: 9 ms (Top 73.89%) | Memory: 94 MB (Top 67.52%)\r\nclass Solution {\r\n    public int sumOfBeauties(int[] nums) {\r\n        boolean[] left = new boolean[nums.length];\r\n        boolean[] right = new boolean[nums.length];\r\n\r\n        left[0] = true;\r\n        int leftMax = nums[0];\r\n        for(int i = 1; i < nums.length; i++) {\r\n            if(nums[i] > leftMax) {\r\n                left[i] = true;\r\n                leftMax = nums[i];\r\n            }\r\n        }\r\n\r\n        right[nums.length-1] = true;\r\n        int rightMin = nums[nums.length-1];\r\n        for(int i = nums.length-2; i >= 0; i--) {\r\n            if(nums[i] < rightMin) {\r\n                right[i] = true;\r\n                rightMin = nums[i];\r\n            }\r\n        }\r\n\r\n        int beautyCount = 0;\r\n        for(int i = 1; i < nums.length-1; i++) {\r\n            if(left[i] && right[i]) {\r\n                beautyCount += 2;\r\n            }\r\n\r\n            else if(nums[i-1] < nums[i] && nums[i] < nums[i+1]) {\r\n                beautyCount += 1;\r\n            }\r\n\r\n        }\r\n        return beautyCount;\r\n    }\r\n}",
    "javascript": "// Runtime: 155 ms (Top 80.49%) | Memory: 60.8 MB (Top 63.42%)\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar sumOfBeauties = function(nums) {\r\n    let min = nums[0], max = Infinity, maxArr = [], total = 0;\r\n\r\n    // Creating an array, which will keep the record of minimum values from last index\r\n    for(let i=nums.length-1; i>1; i--) {\r\n        if(nums[i] < max) max = nums[i];\r\n        maxArr.push(max);\r\n    }\r\n\r\n    // iterating through array to check the given conditions\r\n    for(let i=1; i<nums.length-1; i++) {\r\n\r\n        // Keeping a record of max value from all index < i\r\n        if(nums[i-1] > min) min = nums[i-1];\r\n\r\n        // Checking conditions\r\n        if(nums[i] < maxArr.pop() && min < nums[i]) total += 2;\r\n        else if(nums[i-1] < nums[i] && nums[i] < nums[i+1]) total += 1;\r\n    }\r\n\r\n    return total;\r\n};"
  }
}
