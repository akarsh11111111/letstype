export default {
  "id": 376,
  "name": "Wiggle Subsequence",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/wiggle-subsequence",
  "relativeDir": "W/Wiggle Subsequence",
  "slug": "0376-wiggle-subsequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 42,
    "python": 24,
    "javascript": 35
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int wiggleMaxLength(vector<int>& nums) {\r\n        vector<vector<int>> dp(2, vector<int>(nums.size(),0));\r\n        int ans = 1, high, low;\r\n        dp[0][0] = dp[1][0] = 1;\r\n        for(int i=1; i<nums.size(); ++i){\r\n            high = low = 0;\r\n            for(int j=0; j<i; ++j){\r\n                if(nums[i]>nums[j]) low = max(low, dp[1][j]);\r\n                else if(nums[i]<nums[j]) high = max(high, dp[0][j]);\r\n            }\r\n            dp[0][i] = low + 1;\r\n            dp[1][i] = high + 1;\r\n            ans = max({ans, dp[0][i], dp[1][i]});\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 47 ms (Top 48.8%) | Memory: 16.22 MB (Top 87.1%)\r\n\r\n#####################################################################################################################\r\n# Problem:  Wiggle Subsequence\r\n# Solution : Dynamic Programming\r\n# Time Complexity : O(n) \r\n# Space Complexity : O(1)\r\n#####################################################################################################################\r\n\r\nclass Solution:\r\n    def wiggleMaxLength(self, nums: List[int]) -> int:\r\n        \r\n        positive, negative = 1, 1\r\n        \r\n        if len(nums) < 2:\r\n            return len(nums)\r\n        \r\n        for i in range(1, len(nums)):\r\n            if nums[i] > nums[i - 1]:\r\n                positive = negative + 1\r\n            elif nums[i] < nums[i - 1]:\r\n                negative = positive + 1\r\n                \r\n        return max(positive, negative)",
    "java": "// Runtime: 150 ms (Top 5.98%) | Memory: 74.5 MB (Top 5.03%)\r\nclass Solution {\r\n    int n;\r\n    int dp[][][];\r\n    public int wiggleMaxLength(int[] nums) {\r\n        n = nums.length;\r\n        dp = new int[n][1005][2];\r\n        for(int i = 0; i < n; i++){\r\n            for(int j = 0; j < 1005; j++){\r\n                Arrays.fill(dp[i][j] , -1);\r\n            }\r\n        }\r\n        int pos = f(0 , 0 , nums , -1);\r\n        for(int i = 0; i < n; i++){\r\n            for(int j = 0; j < 1005; j++){\r\n                Arrays.fill(dp[i][j] , -1);\r\n            }\r\n        }\r\n        int neg = f(0 , 1 , nums , 1001);\r\n        return Math.max(pos , neg);\r\n    }\r\n    int f(int i , int posPre , int a[] , int prev){\r\n        if(i == n) return 0;\r\n        if(dp[i][prev + 1][posPre] != -1) return dp[i][prev + 1][posPre];\r\n        if(posPre == 0){\r\n            int not = f(i + 1 , 0 , a , prev);\r\n            int take = 0;\r\n            if(a[i] - prev > 0){\r\n                take = f(i + 1 , 1 , a , a[i]) + 1;\r\n            }\r\n            return dp[i][prev + 1][posPre] = Math.max(not , take);\r\n        }\r\n        else{\r\n            int not = f(i + 1 , 1 , a , prev);\r\n            int take = 0;\r\n            if(a[i] - prev < 0){\r\n                take = f(i + 1 , 0 , a , a[i]) + 1;\r\n            }\r\n            return dp[i][prev + 1][posPre] = Math.max(not , take);\r\n        }\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar wiggleMaxLength = function(nums) {\r\n    //two pass\r\n    //assume we start with positive or start with negative\r\n    //choose the longest of the two\r\n    return Math.max(helper(nums,true),helper(nums,false))\r\n};\r\n\r\nconst helper =  (nums, start) =>{\r\n    let l = 0\r\n    let r = 1\r\n    let res = nums.length\r\n    let sign = start\r\n    while(r < nums.length){\r\n        //if sign are what we expected, just flip the sign\r\n        if((sign && nums[r] > nums[l]) || (!sign && nums[r] < nums[l])){\r\n            sign = !sign\r\n        }\r\n        //if sign aren't what we expected then we \"remove\" one\r\n        //if we want positive then we remove the bigger number to give us a better chance of getting positive\r\n        //if we want negative we remove the smaller number go give us a chance of getting a negative\r\n        // want negative but nums[r] - nums[l] = positive   => remove nums[l] \r\n        // want positive but nums[r] - nums[l] = negative   => remove nums[l]\r\n        //it just so happens that the number we want to remove will always be nums[l], so we don't have to do anything special\r\n        else{\r\n            res--\r\n        }\r\n        l++\r\n        r++\r\n    }\r\n    return res\r\n}"
  }
}
