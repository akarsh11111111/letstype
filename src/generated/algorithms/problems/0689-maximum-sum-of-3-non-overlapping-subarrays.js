export default {
  "id": 689,
  "name": "Maximum Sum of 3 Non-Overlapping Subarrays",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays",
  "relativeDir": "M/Maximum Sum of 3 Non-Overlapping Subarrays",
  "slug": "0689-maximum-sum-of-3-non-overlapping-subarrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 51,
    "java": 33,
    "python": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> maxSumOfThreeSubarrays(vector<int>& nums, int k) {\r\n        int n = nums.size();\r\n        vector<int> prefixSum(n+1, 0);\r\n        \r\n        for(int i=1; i<=n; i++){\r\n            prefixSum[i] = prefixSum[i-1] + nums[i-1];\r\n        }\r\n        \r\n        vector<int> left(n+1, 0);\r\n        vector<int> leftInd(n+1, 0);\r\n        vector<int> right(n+1, 0);\r\n        vector<int> rightInd(n+1, 0);\r\n        \r\n        for(int i=k; i<=n; i++){\r\n            left[i] = max(left[i-1], prefixSum[i]-prefixSum[i-k]);\r\n            \r\n            if(left[i] == left[i-1]){\r\n                leftInd[i] = leftInd[i-1];\r\n            }\r\n            else{\r\n                leftInd[i] = i;\r\n            }\r\n        }\r\n        \r\n        for(int i=n-k; i>=0; i--){\r\n            right[i] = max(right[i+1], prefixSum[i+k]-prefixSum[i]);\r\n            \r\n            if(right[i] == prefixSum[i+k]-prefixSum[i]){\r\n                rightInd[i] = i;\r\n            }\r\n            else{\r\n                rightInd[i] = rightInd[i+1];\r\n            }\r\n        }\r\n        \r\n        int maxSum=0, a, b, c;\r\n        \r\n        for(int i=k; i<=n-2*k; i++){\r\n            if(maxSum < left[i]+(prefixSum[i+k]-prefixSum[i])+right[i+k]){\r\n                maxSum = left[i]+(prefixSum[i+k]-prefixSum[i])+right[i+k];\r\n                a = leftInd[i]-k;\r\n                b = i;\r\n                c = rightInd[i+k];\r\n            }\r\n        }\r\n        \r\n        return {a, b, c};\r\n    }\r\n};",
    "python": "from itertools import accumulate\r\nfrom functools import lru_cache\r\n\r\nclass Solution:\r\n    def maxSumOfThreeSubarrays(self, nums: List[int], k: int) -> List[int]:\r\n        n = len(nums)\r\n        windows = list(accumulate(nums))\r\n        windows = [windows[i+k-1]-(windows[i-1] if i>0 else 0) for i in range(len(windows)-k+1)]\r\n        \r\n        @lru_cache(None)\r\n        def dfs(i, t):\r\n            if t == 0:\r\n                return 0, []\r\n            if i >= len(windows):\r\n                return float('-inf'), []\r\n            cost1, sol1 = dfs(i+k, t-1)\r\n            cost2, sol2 = dfs(i+1, t)\r\n            if windows[i] + cost1 < cost2:\r\n                return cost2, sol2\r\n            return windows[i] + cost1, [i]+sol1\r\n        return dfs(0, 3)[1]",
    "java": "class Solution {\r\n    public int[] maxSumOfThreeSubarrays(int[] nums, int k) {\r\n        int n = nums.length;\r\n        int[] ans = new int[3];\r\n        int[] pre = new int[n];\r\n        int[] third = new int[n];\r\n        for (int i=0;i<n;++i){ // prefix sum\r\n            pre[i]=i==0?nums[i]:nums[i]+pre[i-1];\r\n        }\r\n        for (int i=n-k,max=0;i>=2*k;--i){ // find the best index for the last part\r\n            int cur = pre[i+k-1]-pre[i-1];\r\n            max=Math.max(max, cur);\r\n            third[i]=cur==max?i:third[i+1];\r\n        }\r\n        for (int i=k,first=0,fmax=0,max=0;i+2*k-1<n;i++){\r\n            int cur = pre[i-1]-(i==k?0:pre[i-1-k]);\r\n            if (cur > fmax){ // compute the best index for the first part on the fly\r\n                fmax=cur;\r\n                first=i-k;\r\n            }\r\n            int a = fmax; // first\r\n            int b = pre[i+k-1]-pre[i-1]; // middle\r\n            int c = pre[third[i+k]+k-1]-pre[third[i+k]-1]; // last\r\n            if (a+b+c>max){\r\n                max=a+b+c;\r\n                ans[0]=first;\r\n                ans[1]=i;\r\n                ans[2]=third[i+k];\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}"
  }
}
