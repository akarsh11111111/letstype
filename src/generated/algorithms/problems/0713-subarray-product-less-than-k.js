export default {
  "id": 713,
  "name": "Subarray Product Less Than K",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/subarray-product-less-than-k",
  "relativeDir": "S/Subarray Product Less Than K",
  "slug": "0713-subarray-product-less-than-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 21,
    "python": 19,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 138 ms (Top 5.04%) | Memory: 61.50 MB (Top 67.87%)\r\n\r\nclass Solution {\r\npublic:\r\n    int numSubarrayProductLessThanK(vector<int>& nums, int k) {\r\n        int n = nums.size(), ans = 0, prod = 1, j = 0;\r\n        for (int i = 0; i < n; i++) {\r\n            if (i > 0 && i <= j) \r\n                prod =  prod/nums[i-1];\r\n            else \r\n                j = i;\r\n            while (j < n &&  prod*nums[j] < k) prod *= nums[j++];\r\n            ans += j-i;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numSubarrayProductLessThanK(self, nums: List[int], k: int) -> int:\r\n        if k==0 or k==1:\r\n            return 0\r\n        p=1\r\n        ini=0\r\n        fin=0\r\n        n=len(nums)\r\n        c=0\r\n        while fin<n:\r\n            p=p*nums[fin]\r\n            while p>=k :\r\n                p=p//nums[ini]\r\n                ini+=1\r\n\r\n            n1=fin-ini+1\r\n            c+=n1\r\n            fin+=1\r\n        return c",
    "java": "// Runtime: 14 ms (Top 19.32%) | Memory: 47.80 MB (Top 5.49%)\r\n\r\nclass Solution {\r\n    public int numSubarrayProductLessThanK(int[] nums, int k) {\r\n        int n = nums.length;\r\n        long p = 1l;\r\n        int i = 0;\r\n        int j = 0;\r\n        int total = 0;\r\n        while(j < n){\r\n            p *= nums[j];\r\n            while(i <= j&&p >= k){\r\n                p /= nums[i];\r\n                i++;\r\n            }\r\n            total += (j - i + 1);\r\n            j++;\r\n        }\r\n        return total;\r\n    }\r\n}",
    "javascript": "var numSubarrayProductLessThanK = function(nums, k) {\r\n    var used = new Array(nums.length).fill(0);\r\n    var l, r, runsum=1;\r\n    let ans=0;\r\n    \r\n    l = 0;\r\n    r = 0;\r\n    while( r < nums.length ) {\r\n        if( r < nums.length && runsum * nums[r] >= k ) {\r\n            if( r != l )\r\n                runsum /= nums[l];\r\n            else\r\n                r++;\r\n            l++;\r\n        } else if( l <= r ) {\r\n            runsum *= nums[r];\r\n            r++;\r\n            ans += (r-l);\r\n        } else break;\r\n    }\r\n    \r\n    return ans;\r\n};"
  }
}
