export default {
  "id": 1671,
  "name": "Minimum Number of Removals to Make Mountain Array",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array",
  "relativeDir": "M/Minimum Number of Removals to Make Mountain Array",
  "slug": "1671-minimum-number-of-removals-to-make-mountain-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 36,
    "python": 26,
    "javascript": 32
  },
  "languages": {
    "cpp": "// Runtime: 862 ms (Top 5.02%) | Memory: 12.1 MB (Top 84.66%)\r\nclass Solution {\r\npublic:\r\n    int minimumMountainRemovals(vector<int>& nums) {\r\n        int n = nums.size();\r\n\r\n        vector<int> dp1(n,1), dp2(n,1);\r\n\r\n        // LIS from front\r\n        for(int i=0; i<n; i++)\r\n        {\r\n            for(int j=0; j<i; j++)\r\n            {\r\n                if(nums[i] > nums[j] && 1 + dp1[j] > dp1[i])\r\n                {\r\n                    dp1[i] = 1 + dp1[j];\r\n                }\r\n            }\r\n        }\r\n\r\n        //LIS from back\r\n        for(int i=n-1; i>=0; i--)\r\n        {\r\n            for(int j=n-1; j>i; j--)\r\n            {\r\n                if(nums[i] > nums[j] && dp2[j] + 1 > dp2[i]){\r\n                    dp2[i] = dp2[j] + 1;\r\n                }\r\n            }\r\n        }\r\n\r\n        int maxi = 1;\r\n        for(int i=0; i<n; i++){\r\n            if(dp1[i] > 1 && dp2[i] > 1){\r\n                maxi = max(maxi, dp1[i] + dp2[i] -1);\r\n            }\r\n        }\r\n        return (n-maxi);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumMountainRemovals(self, nums: List[int]) -> int:\r\n        n = len(nums)\r\n        inc = [0] * n\r\n        dec = [0] * n\r\n        \r\n#  Longest Increasing Subsequence\r\n        for i in range(1,n):\r\n            for j in range(0,i):\r\n                if nums[i] > nums[j]:\r\n                    inc[i] = max(inc[i], inc[j] + 1)\r\n                \r\n#  Longest Decreasing Subsequence\r\n        for i in range(n-2,-1,-1):\r\n            for j in range(n-1,i,-1):\r\n                if nums[i] > nums[j]:\r\n                    dec[i] = max(dec[i], dec[j] + 1)\r\n        \r\n# Final calculation\r\n        res = 0\r\n        for i in range(0,n):\r\n            if inc[i] > 0 and dec[i] > 0:\r\n                res = max(res, inc[i] + dec[i])\r\n                \r\n# Final conclusion        \r\n        return n - res - 1",
    "java": "// Runtime: 103 ms (Top 13.29%) | Memory: 45.9 MB (Top 81.01%)\r\nclass Solution {\r\n    public int minimumMountainRemovals(int[] nums) {\r\n\r\n        int n = nums.length;\r\n        int[] LIS = new int[n];\r\n        int[] LDS = new int[n];\r\n\r\n        Arrays.fill(LIS, 1);\r\n        Arrays.fill(LDS, 1);\r\n        // calculate the longest increase subsequence (LIS) for every index i\r\n        for(int i=1 ; i < n ; i++)\r\n        {\r\n            for(int j = 0 ; j < i ; j++)\r\n            {\r\n                if(nums[i] > nums[j] && LIS[j]+1 > LIS[i])\r\n                    LIS[i] = LIS[j]+1;\r\n            }\r\n        }\r\n\r\n        // calculate the longest decreasing subsequence(LDS) for every index i and keep track of the maximum of LIS+LDS\r\n        int max = 0;\r\n        for(int i=n-2 ; i >= 0 ; i--)\r\n        {\r\n            for(int j = n-1 ; j > i ; j--)\r\n            {\r\n                if(nums[i] > nums[j] && LDS[j]+1 > LDS[i])\r\n                    LDS[i] = LDS[j]+1;\r\n            }\r\n\r\n            if(LIS[i] > 1 && LDS[i] > 1)\r\n                max = Math.max(LIS[i]+LDS[i]-1, max);\r\n        }\r\n        return n - max;\r\n    }\r\n}",
    "javascript": "var minimumMountainRemovals = function(nums) {\r\n    let n=nums.length\r\n    let previous=Array.from({length:n},item=>1)\r\n    let previous2=Array.from({length:n},item=>1)\r\n    //calcultaing left and right side LIS in single iteration\r\n    for (let i=0;i<n;i++){\r\n        for (let j=0;j<i;j++){\r\n            //reverse indexes\r\n            let i2=n-1-i\r\n            let j2=n-1-j\r\n            //calculating first dp serially \r\n            if (nums[i]>nums[j] && previous[i]<previous[j]+1){\r\n                previous[i]=previous[j]+1\r\n            }\r\n            //calculating second dp reversely\r\n            if (nums[i2]>nums[j2] && previous2[i2]<previous2[j2]+1){\r\n                previous2[i2]=previous2[j2]+1\r\n            }\r\n        }\r\n    }\r\n    let max=0\r\n    for (let i=0;i<n;i++){\r\n        //golden condition// to avoid only increasing and decreasing\r\n        //because if a combination of 1 indicates its increasing fully or decreasing !\r\n        if (previous[i]>1 && previous2[i]>1){\r\n        //at a specific index highest increasing will come from left LIS\r\n        // and highest decreasing will come from right side LIS\r\n        max=Math.max(max,previous[i]+previous2[i]-1)\r\n        }\r\n    }\r\n    return n-max //we need to remove the rest from total\r\n};"
  }
}
