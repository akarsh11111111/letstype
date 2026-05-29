export default {
  "id": 1186,
  "name": "Maximum Subarray Sum with One Deletion",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion",
  "relativeDir": "M/Maximum Subarray Sum with One Deletion",
  "slug": "1186-maximum-subarray-sum-with-one-deletion",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 30,
    "python": 37,
    "javascript": 31
  },
  "languages": {
    "cpp": "// Runtime: 23 ms (Top 76.54%) | Memory: 23.70 MB (Top 72.35%)\r\n\r\nclass Solution {\r\npublic:\r\n    int maximumSum(vector<int>& a) {\r\n        \r\n\t\t// Kadane's Algo\r\n        // DP time: O(N) space: O(N)\r\n        // dp[i][2]-->dp[i][0]->suf_del and dp[i][1]->suf_no_del\r\n        \r\n        // Space optimized time: O(N) space: O(1)\r\n\t\tint n=a.size();\r\n        int suf_del=0; \r\n        int suf_no_del=a[0];\r\n        int ans=a[0];\r\n        for(int i=1;i<n;i++){\r\n            suf_del=max(suf_del+a[i],suf_no_del);       // suf_del\r\n            suf_no_del=max(suf_no_del+a[i],a[i]);       // suf_no_del\r\n            ans=max({ans,suf_del,suf_no_del});         \r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumSum(self, arr: List[int]) -> int:\r\n        n = len(arr)\r\n        if n ==1:\r\n            return arr[0]\r\n        dpLeft = [-10**4-1 for _ in range(n)]\r\n        dpLeft[0] = arr[0]\r\n        i = 1 \r\n        while i < n :\r\n            dpLeft[i] = max(arr[i],dpLeft[i-1]+arr[i])\r\n            i += 1\r\n        dpRight = [-10**4-1 for _ in range(n)]\r\n        dpRight[-1] = arr[-1]\r\n        j = n-2 \r\n        while j >= 0:\r\n            dpRight[j] = max(arr[j],dpRight[j+1]+arr[j])\r\n            j -= 1\r\n        k = 0\r\n        maxi = -10**4-1\r\n        while k < n:\r\n            # if we take it \r\n            curr_maxi_with = dpRight[k] + dpLeft[k] - arr[k]\r\n            \r\n            if k==0:\r\n                curr_maxi_without = dpRight[k+1]\r\n            elif k==n-1:\r\n                curr_maxi_without = dpLeft[k-1]\r\n            else:\r\n                if dpLeft[k-1]>=0 and dpRight[k+1]>=0:\r\n                    curr_maxi_without = dpRight[k+1] + dpLeft[k-1]\r\n                else:\r\n                    curr_maxi_without = max(dpLeft[k-1],dpRight[k+1])\r\n            \r\n            maxi= max(maxi,curr_maxi_without, curr_maxi_with)\r\n            k += 1\r\n        \r\n        return maxi",
    "java": "class Solution {\r\n    public int maximumSum(int[] arr) {\r\n        int n = arr.length;\r\n        int[] prefixSum = new int[n+1];\r\n        prefixSum[0] = 0;\r\n        int ans = (int)-1e9;\r\n        for(int i = 1; i <= n; i++){\r\n            prefixSum[i] = prefixSum[i-1] + arr[i-1];\r\n            ans = Math.max(ans, arr[i-1]);\r\n        }\r\n        if(ans < 0) return ans;  \r\n        for(int i = 1; i <= n; i++){\r\n            if(arr[i-1] < 0){\r\n                int leftPrefixSum = 0;\r\n                // find max in i to 0\r\n                for(int j = i-1; j >= 0; j--){\r\n                    leftPrefixSum = Math.max(leftPrefixSum, prefixSum[i-1] -prefixSum[j]);\r\n                }\r\n                \r\n                int rightPrefixSum = 0;\r\n                // find max in i to n\r\n                for(int j = i+1; j <= n; j++){\r\n                    rightPrefixSum = Math.max(rightPrefixSum, prefixSum[j] -prefixSum[i]);\r\n                } \r\n                ans = Math.max(ans, leftPrefixSum + rightPrefixSum);\r\n            }\r\n        }\r\n        return Math.max(ans, prefixSum[n]);\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} arr\r\n * @return {number}\r\n */\r\n \r\n\r\n// var maximumSum = function(arr) {\r\n//     const len = arr.length;\r\n//     const dp = new Array(len).fill(() => [null, null]);\r\n//     dp[0][0] = arr[0];\r\n//     dp[0][1] = 0;\r\n//     let result = arr[0];\r\n//     for(let i = 1; i < len; i++) {\r\n//         dp[i][1] = Math.max(dp[i-1][1] + arr[i], dp[i-1][0]);\r\n//         dp[i][0] = Math.max(dp[i-1][0] + arr[i], arr[i]);\r\n//         result = Math.max(result, Math.max(dp[i][0], dp[i][1]));  \r\n//     }\r\n    \r\n//     return result;\r\n// };\r\n\r\n// optimization\r\nvar maximumSum = function(arr) {\r\n    let noDelete = arr[0], oneDelete = 0, max = arr[0];\r\n    for(let i = 1; i < arr.length; i++) {\r\n        oneDelete = Math.max(oneDelete + arr[i], noDelete);\r\n        noDelete = Math.max(noDelete + arr[i], arr[i]);\r\n        max = Math.max(max, Math.max(noDelete, oneDelete));\r\n    }\r\n    return max;\r\n};"
  }
}
