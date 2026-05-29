export default {
  "id": 2090,
  "name": "K Radius Subarray Averages",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/k-radius-subarray-averages",
  "relativeDir": "K/K Radius Subarray Averages",
  "slug": "2090-k-radius-subarray-averages",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 26,
    "python": 16,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 149 ms (Top 91.26%) | Memory: 130.50 MB (Top 64.94%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> getAverages(vector<int>& nums, int k) {\r\n        int n = nums.size();\r\n        int windowSize = 2 * k + 1;\r\n        \r\n        long long windowSum = 0;\r\n        vector<int> result(n, -1);\r\n\r\n        if (n < windowSize) {\r\n            return result;\r\n        }\r\n\r\n        for (int i = 0; i < n; ++i) {\r\n            windowSum += nums[i]; // Add nums[i] to the window sum\r\n\r\n            if (i - windowSize >= 0) {\r\n                windowSum -= nums[i - windowSize]; // Remove nums[i - windowSize] from the window sum\r\n            }\r\n\r\n            if (i >= windowSize - 1) {\r\n                result[i - k] = windowSum / windowSize; // Calculate and store the average in the result\r\n            }\r\n        }\r\n\r\n        return result;\r\n    }\r\n};",
    "python": "# Runtime: 1318 ms (Top 77.1%) | Memory: 35.26 MB (Top 20.0%)\r\n\r\nclass Solution:\r\n    def getAverages(self, nums: list[int], k: int) -> list[int]:\r\n\r\n        n, diam = len(nums), 2*k+1\r\n        if n < diam: return [-1]*n\r\n\r\n        ans = [-1]*k\r\n\r\n        arr = list(accumulate(nums, initial = 0))\r\n\r\n        for i in range(n-diam+1):\r\n            ans.append((arr[i+diam]-arr[i])//diam)\r\n\r\n        return  ans + [-1]*k",
    "java": "// Runtime: 24 ms (Top 10.87%) | Memory: 165.8 MB (Top 61.96%)\r\nclass Solution\r\n{\r\n    public int[] getAverages(int[] nums, int k)\r\n    {\r\n        if(k == 0)\r\n            return nums;\r\n\r\n        int N = nums.length;\r\n        long[] sum = new long[N];\r\n        sum[0] = nums[0];\r\n\r\n        for(int i = 1; i < N; i++)\r\n            sum[i] = sum[i-1]+nums[i]; // Sum of 0 - ith element at sum[i]\r\n\r\n        int[] ret = new int[N];\r\n        Arrays.fill(ret,-1);\r\n\r\n        for(int i = k; i < N-k; i++) // Beyond this range, there are less than k elements so -1\r\n        {\r\n            long temp = (sum[i+k]-sum[i-k]+nums[i-k])/(k*2+1);\r\n            ret[i] = (int)temp;\r\n        }\r\n        return ret;\r\n    }\r\n}",
    "javascript": "// Runtime: 629 ms (Top 35.29%) | Memory: 80.4 MB (Top 80.39%)\r\nvar getAverages = function(nums, k) {\r\n    const twoK = 2 * k;\r\n    const windowSize = twoK + 1;\r\n\r\n    const result = [...nums].fill(-1);\r\n    let sum = 0;\r\n    for (let i = 0; i < nums.length; i++) {\r\n        sum += nums[i];\r\n        if (i >= twoK) {\r\n            result[i - k] = Math.floor(sum / windowSize)\r\n            sum -= nums[i - twoK];\r\n        }\r\n    }\r\n    return result;\r\n};"
  }
}
