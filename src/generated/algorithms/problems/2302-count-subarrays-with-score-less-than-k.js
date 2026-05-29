export default {
  "id": 2302,
  "name": "Count Subarrays With Score Less Than K",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-subarrays-with-score-less-than-k",
  "relativeDir": "C/Count Subarrays With Score Less Than K",
  "slug": "2302-count-subarrays-with-score-less-than-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 22,
    "python": 12,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    typedef long long ll;\r\n    long long countSubarrays(vector<int>& nums, long long k) {\r\n        \r\n        int n=nums.size();\r\n        vector<ll>v(n+1,0);\r\n        for(int i=1;i<=n;i++){\r\n            v[i]+=v[i-1]+nums[i-1];\r\n            // doing prefix sum.\r\n        }\r\n        ll ans=0;\r\n        for(int i=1;i<=n;i++){\r\n            int low=i;\r\n            int high=n;\r\n            int ans1=-1;\r\n            // counting the number of sub arrays in which the current element is included by doing binary search.\r\n\t\t\t// The current element is the starting element of the subarrays we count.\r\n            while(low<=high){\r\n                int mid=low+(high-low)/2;\r\n                ll sum=v[mid]-v[i-1];\r\n                sum*=(mid-i+1);\r\n                if(sum>=k){\r\n                    high=mid-1;\r\n                }\r\n                else{\r\n                   ans1=mid;\r\n                   low=mid+1;\r\n                }\r\n            }\r\n            if(ans1!=-1){\r\n              ans+=(ans1-i+1);  \r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 1779 ms (Top 5.03%) | Memory: 31.30 MB (Top 6.6%)\r\n\r\nclass Solution:\r\n    def countSubarrays(self, nums: List[int], k: int) -> int:\r\n        sum, res, j = 0, 0, 0\r\n        for i, n in enumerate(nums):\r\n            sum += n\r\n            while sum * (i - j + 1) >= k:\r\n                sum -= nums[j]\r\n                j += 1\r\n            res += i - j + 1\r\n        return res",
    "java": "// Runtime: 2 ms (Top 100.0%) | Memory: 61.40 MB (Top 26.22%)\r\n\r\nclass Solution {\r\n    public long countSubarrays(int[] nums, long k) {\r\n        int i=0;\r\n        int  j=0;\r\n        long max = 0;\r\n        long operation = 0;\r\n\r\n        while(j < nums.length){\r\n            operation += nums[j];\r\n            while(operation*(j-i+1) >= k){\r\n                operation -= nums[i];\r\n                i++;\r\n            }\r\n            max += j-i+1;\r\n            j++;\r\n        }\r\n        return max;\r\n\r\n    }\r\n}",
    "javascript": "// Runtime: 81 ms (Top 78.57%) | Memory: 53.40 MB (Top 28.57%)\r\n\r\nvar countSubarrays = function(nums, k) {\r\n  let curentRunningSum = 0, result = 0, windowEnd = 0, windowStart = 0;\r\n  while (windowEnd < nums.length) {\r\n    curentRunningSum += nums[windowEnd];\r\n    while (curentRunningSum * (windowEnd - windowStart + 1) >= k)  curentRunningSum -= nums[windowStart++];\r\n    result += windowEnd - windowStart + 1;\r\n    windowEnd++;\r\n  }\r\n  return result; \r\n};"
  }
}
