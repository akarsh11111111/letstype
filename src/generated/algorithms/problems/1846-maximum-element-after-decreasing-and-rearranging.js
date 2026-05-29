export default {
  "id": 1846,
  "name": "Maximum Element After Decreasing and Rearranging",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging",
  "relativeDir": "M/Maximum Element After Decreasing and Rearranging",
  "slug": "1846-maximum-element-after-decreasing-and-rearranging",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 11,
    "python": 16,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 150 ms (Top 64.37%) | Memory: 51.4 MB (Top 22.05%)\r\nclass Solution {\r\npublic:\r\n    int maximumElementAfterDecrementingAndRearranging(vector<int>& arr) {\r\n        sort(arr.begin(),arr.end());\r\n        int n=arr.size();\r\n        arr[0]=1;\r\n        for(int i=1;i<n;i++)\r\n        {\r\n            if(arr[i]-arr[i-1]>1)\r\n            {\r\n                arr[i]=arr[i-1]+1;\r\n            }\r\n        }\r\n        return arr[n-1];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumElementAfterDecrementingAndRearranging(self, arr: List[int]) -> int:\r\n\t\tcounter = collections.Counter(arr)\r\n        available = sum(n > len(arr) for n in arr)\r\n        i = ans = len(arr)\r\n        while i > 0:\r\n            # This number is not in arr\r\n            if not counter[i]:\r\n                # Use another number to fill in its place. If we cannot, we have to decrease our max\r\n                if available: available -= 1               \r\n                else: ans -= 1\r\n            # Other occurences can be used for future.\r\n            else:\r\n                available += counter[i] - 1\r\n            i -= 1\r\n        return ans",
    "java": "class Solution {\r\n    public int maximumElementAfterDecrementingAndRearranging(int[] arr) {\r\n      Arrays.sort(arr);\r\n      arr[0] = 1;\r\n      for(int i = 1;i<arr.length;i++){\r\n         if(Math.abs(arr[i] - arr[i-1]) > 1)\r\n            arr[i] = arr[i-1] + 1;    \r\n      }\r\n      return arr[arr.length-1];\r\n    }\r\n}",
    "javascript": "// Runtime: 60 ms (Top 97.33%) | Memory: 51.50 MB (Top 90.66%)\r\n\r\nvar maximumElementAfterDecrementingAndRearranging = function(arr) {\r\n    arr.sort((a, b) => a - b);\r\n    let maxVal = 1;\r\n\r\n    for (let i = 1; i < arr.length; i++) {\r\n        if (arr[i] > maxVal) {\r\n            maxVal += 1;\r\n        }\r\n    }\r\n\r\n    return maxVal;    \r\n};"
  }
}
