export default {
  "id": 396,
  "name": "Rotate Function",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/rotate-function",
  "relativeDir": "R/Rotate Function",
  "slug": "0396-rotate-function",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 16,
    "python": 13,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 113 ms (Top 56.94%) | Memory: 96.10 MB (Top 55.89%)\r\n\r\nclass Solution {\r\npublic:\r\n    int maxRotateFunction(vector<int>& A) {\r\n        long sum = 0, fn = 0;\r\n        int len = A.size();\r\n        for(int i=0;i<len;i++) {\r\n            sum += A[i];\r\n            fn += (i * A[i]);\r\n        }\r\n\r\n        long l = 1, r;\r\n        long newfn = fn;\r\n        \r\n        while(l < len) {\r\n            r = l + len - 1;\r\n            \r\n            long removed = (l-1) * A[l-1];\r\n            long added = r * A[r%len];\r\n            \r\n            newfn = newfn - removed + added - sum;\r\n            \r\n            fn = max(fn, newfn);\r\n            \r\n            l++;\r\n        }\r\n        \r\n        return (int)fn;\r\n    }\r\n};",
    "python": "# Runtime: 1737 ms (Top 72.92%) | Memory: 23.1 MB (Top 74.40%)\r\nclass Solution:\r\n    def maxRotateFunction(self, nums: List[int]) -> int:\r\n        preSum, cur = 0, 0\r\n        for i in range(len(nums)):\r\n            cur += i * nums[i]\r\n            preSum += nums[i]\r\n        ans = cur\r\n        for i in range(1, len(nums)):\r\n            cur -= len(nums) * nums[len(nums) - i]\r\n            cur += preSum\r\n            ans = max(ans, cur)\r\n        return ans",
    "java": "// Runtime: 3 ms (Top 100.00%) | Memory: 54.3 MB (Top 98.33%)\r\nclass Solution {\r\n    public int maxRotateFunction(int[] nums) {\r\n        int sum1 =0,sum2 = 0;\r\n        for(int i=0;i<nums.length;i++){\r\n            sum1 += nums[i];\r\n            sum2 += i*nums[i];\r\n        }\r\n        int result = sum2;\r\n        for(int i=0;i<nums.length;i++){\r\n            sum2 = sum2-sum1+(nums.length)*nums[i];\r\n            result = Math.max(result,sum2);\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "var maxRotateFunction = function(nums) { \r\n    let n = nums.length;\r\n    let dp = 0;\r\n    \r\n    let sum = 0; \r\n    for (let i=0; i<n;i++) {\r\n        sum += nums[i];\r\n        dp += i*nums[i];\r\n    }\r\n    let max = dp;\r\n    for (let i=1; i<n;i++) {\r\n        dp += sum - nums[n-i]*n;\r\n        max = Math.max(max, dp);\r\n    } \r\n    return max;\r\n};"
  }
}
