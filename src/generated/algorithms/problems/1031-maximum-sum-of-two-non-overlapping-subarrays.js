export default {
  "id": 1031,
  "name": "Maximum Sum of Two Non-Overlapping Subarrays",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays",
  "relativeDir": "M/Maximum Sum of Two Non-Overlapping Subarrays",
  "slug": "1031-maximum-sum-of-two-non-overlapping-subarrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 72,
    "python": 14,
    "javascript": 43
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    int solve(vector<int>& prefixSum, int n, int firstLen, int secondLen){\r\n        vector<int> dp(n, 0);\r\n        \r\n        dp[n-secondLen] = prefixSum[n]-prefixSum[n-secondLen];\r\n        \r\n        for(int i=n-secondLen-1; i>=0; i--){\r\n            dp[i] = max(dp[i+1], prefixSum[i+secondLen]-prefixSum[i]);\r\n        }\r\n        \r\n        dp[firstLen] = dp[firstLen] + prefixSum[firstLen]-prefixSum[0];\r\n        \r\n        for(int i=firstLen+1; i<=n-secondLen; i++){\r\n            dp[i] = max(dp[i-1], dp[i] + (prefixSum[i]-prefixSum[i-firstLen]));\r\n        }\r\n        \r\n        return *max_element(dp.begin(), dp.end());\r\n    }\r\n    \r\n    int maxSumTwoNoOverlap(vector<int>& nums, int firstLen, int secondLen) {\r\n        int n = nums.size();\r\n        vector<int> prefixSum(n+1, 0);\r\n        \r\n        for(int i=1; i<=n; i++){\r\n            prefixSum[i] = prefixSum[i-1] + nums[i-1];\r\n        }\r\n        \r\n        return max(solve(prefixSum, n, firstLen, secondLen), solve(prefixSum, n, secondLen, firstLen));\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxSumTwoNoOverlap(self, nums: List[int], firstLen: int, secondLen: int) -> int:\r\n        n = len(nums)\r\n        p = [0]\r\n        for el in nums:\r\n            p.append(p[-1] + el)\r\n        msum = 0\r\n        for f, s in [(firstLen, secondLen), (secondLen, firstLen)]:\r\n            for i in range(f - 1, n - s + 1):\r\n                for j in range(i + 1, n - s + 1):\r\n                    l = p[i + 1] - p[i - f + 1]\r\n                    r = p[j + s] - p[j]\r\n                    msum = max(msum, l + r)\r\n        return msum",
    "java": "class Solution {\r\n    public int maxSumTwoNoOverlap(int[] nums, int firstLen, int secondLen) {\r\n        int []dp1=new int[nums.length];\r\n        int []dp2=new int[nums.length];\r\n        \r\n        int sum=0;\r\n        for(int i=0;i<nums.length;i++){\r\n            if(i<firstLen){\r\n                sum+=nums[i];\r\n                dp1[i]=sum;\r\n            }else{\r\n                sum+=nums[i]-nums[i-firstLen];\r\n                dp1[i]=Math.max(sum,dp1[i-1]);\r\n            }\r\n        }\r\n        \r\n        sum=0;\r\n        for(int i=nums.length-1;i>=0;i--){\r\n            if(i+secondLen>=nums.length){\r\n                sum+=nums[i];\r\n                dp2[i]=sum;\r\n            }else{\r\n                sum+=nums[i]-nums[i+secondLen];\r\n                dp2[i]=Math.max(sum,dp2[i+1]);\r\n            }\r\n        }\r\n        \r\n        int max=0;\r\n        \r\n        for(int i=firstLen-1;i<nums.length-secondLen;i++){\r\n            max=Math.max(max,dp1[i]+dp2[i+1]);\r\n        }\r\n        \r\n        int max1=max;\r\n        \r\n        dp1=new int[nums.length];\r\n        dp2=new int[nums.length];\r\n        \r\n        sum=0;\r\n        for(int i=0;i<nums.length;i++){\r\n            if(i<secondLen){\r\n                sum+=nums[i];\r\n                dp1[i]=sum;\r\n            }else{\r\n                sum+=nums[i]-nums[i-secondLen];\r\n                dp1[i]=Math.max(sum,dp1[i-1]);\r\n            }\r\n        }\r\n        \r\n        sum=0;\r\n        for(int i=nums.length-1;i>=0;i--){\r\n            if(i+firstLen>=nums.length){\r\n                sum+=nums[i];\r\n                dp2[i]=sum;\r\n            }else{\r\n                sum+=nums[i]-nums[i+firstLen];\r\n                dp2[i]=Math.max(sum,dp2[i+1]);\r\n            }\r\n        }\r\n        \r\n        max=0;\r\n        \r\n        for(int i=secondLen-1;i<nums.length-firstLen;i++){\r\n            max=Math.max(max,dp1[i]+dp2[i+1]);\r\n        }\r\n        \r\n        \r\n        int max2=max;\r\n        \r\n        return Math.max(max1,max2);\r\n    }\r\n}",
    "javascript": "var maxSumTwoNoOverlap = function(nums, firstLen, secondLen) {\r\n    function helper(arr, x, y)\r\n    {\r\n        const n = arr.length;\r\n        let sum = 0;\r\n        const dp1 = []; // store left x sum\r\n        const dp2 = []; // store right y sum\r\n\r\n        for(let i = 0; i<n; i++)\r\n        {\r\n            if(i<x) {\r\n                sum += arr[i];\r\n                dp1[i] = sum;\r\n            }\r\n            else {\r\n                sum += arr[i] - arr[i-x];\r\n                dp1[i] = Math.max(dp1[i-1], sum);\r\n            }\r\n        }\r\n        sum = 0;\r\n        for(let i = n-1; i>=0; i--)\r\n        {\r\n            if(i>=n-y)\r\n            {\r\n                sum += arr[i];\r\n                dp2[i] = sum;\r\n            }\r\n            else\r\n            {\r\n                sum += arr[i] - arr[i+y];\r\n                dp2[i] = Math.max(dp2[i+1], sum);\r\n            }\r\n        }\r\n        let max = -Infinity;\r\n        for(let i = x-1; i< n-y; i++)\r\n        {\r\n            max = Math.max(max, dp1[i] + dp2[i+1]);\r\n        }\r\n        return max;\r\n    }\r\n    return Math.max(helper(nums, firstLen, secondLen), \r\n                   helper(nums, secondLen, firstLen));\r\n};"
  }
}
