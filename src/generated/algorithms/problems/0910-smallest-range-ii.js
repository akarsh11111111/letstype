export default {
  "id": 910,
  "name": "Smallest Range II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/smallest-range-ii",
  "relativeDir": "S/Smallest Range II",
  "slug": "0910-smallest-range-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 51,
    "python": 12
  },
  "languages": {
    "cpp": "// Runtime: 45 ms (Top 16.75%) | Memory: 15.4 MB (Top 94.25%)\r\n//Need to consider each ith value as boundary and considering that,\r\n//the max value can be max val - k or i-1 th value + k\r\n//similarly the mn value can be min val + k or ith value - k\r\n//Need to check the difference of max min for all ith positions and minimize this.\r\n//Also check if the calculate min is larger than initial min or not\r\n/*\r\nExample :\r\n     2 4 7 8 and k = 5\r\n-k: -3 -1 2 3\r\n+k: 7 9 12 13\r\n\r\nhere min value will be 9 -2 = 7 when i = 2 but intital diff between min and max is 6, so the\r\nanswer will be 6.\r\n*/\r\n\r\nclass Solution {\r\npublic:\r\n    int smallestRangeII(vector<int>& nums, int k) {\r\n        sort(nums.begin(), nums.end());\r\n        int mn = nums.front();\r\n        int mx = nums.back();\r\n        if(mx - mn <= k) return mx - mn;\r\n        int newMn = INT_MAX, newMx = INT_MIN;\r\n        int ans = mx - mn;\r\n        mn = mn + k;\r\n        mx = mx - k;\r\n        for(int i = 1; i < nums.size(); ++i){\r\n            newMn = min(mn, nums[i] - k);\r\n            newMx = max(mx, nums[i-1] + k);\r\n            ans = min(ans, newMx - newMn);\r\n        }\r\n        return ans;\r\n    }\r\n\r\n};",
    "python": "// Runtime: 129 ms (Top 83.03%) | Memory: 18.50 MB (Top 25.76%)\r\n\r\nclass Solution:\r\n    def smallestRangeII(self, nums: List[int], k: int) -> int:\r\n        nums.sort()\r\n        ans = nums[-1] - nums[0]\r\n\r\n        for i in range(0, len(nums) - 1):\r\n            ans = min(ans, max(nums[i] + k, nums[-1] -\r\n                      k) - min(nums[i+1] - k, nums[0] + k))\r\n\r\n        return ans",
    "java": "// Runtime: 39 ms (Top 5.74%) | Memory: 50.2 MB (Top 6.63%)\r\nclass Solution {\r\n    public int smallestRangeII(int[] nums, int k) {\r\n        int n = nums.length;\r\n        if (n==1)\r\n            return 0; // Max and min are the same\r\n\r\n        Arrays.sort(nums);\r\n\r\n        // score = minimum(max-min)\r\n        // To minimize the score, need to add k to small numbers (Initial part of array)\r\n        // and need to subtract k from large numbers (End part of array)\r\n\r\n        // It might happen that when we add k to a number\r\n        // And subtract k from another number\r\n        // The minimum and maximum can change\r\n\r\n        // If k>=nums[n-1]-nums[0] the score will always increase if we add k to some\r\n        // numbers and subtract k from some numbers\r\n        // Hence, the minimum score is the current score\r\n\r\n        if (k >= nums[n-1]-nums[0]) {\r\n            return nums[n-1]-nums[0];\r\n        }\r\n\r\n        // Now k < nums[n-1]-nums[0]\r\n        // Add k to first p numbers and subtract k from remaining numbers\r\n        // LEFT SEGMENT: First p numbers where we add k\r\n        // RIGHT SEGMENT: Remaining numbers where we subtract k\r\n\r\n        // LEFT SEGMENT: (nums[0]+k,nums[1]+k,......,nums[p-1]+k)\r\n        // RIGHT SEGMENT: (nums[p]-k,nums[p+1]-k,.......nums[n-1]-k)\r\n\r\n        // Question: Where is p?\r\n        // Answer: We try all possible values for p and min score everytime\r\n\r\n        // After subtracting and adding k to numbers,\r\n        // the new minimum and maximum will be\r\n        // minimum = min (nums[0]+k , nums[p]-k)\r\n        // maximum = max (nums[p-1]+k, nums[n-1]-k)\r\n\r\n        int minScore = nums[n-1]-nums[0];\r\n        for (int p=1;p<n;p++) {\r\n            int min = Math.min(nums[0]+k,nums[p]-k);\r\n            int max = Math.max(nums[p-1]+k,nums[n-1]-k);\r\n            minScore = Math.min(minScore,max-min);\r\n        }\r\n\r\n        return minScore;\r\n    }\r\n}"
  }
}
