export default {
  "id": 2256,
  "name": "Minimum Average Difference",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-average-difference",
  "relativeDir": "M/Minimum Average Difference",
  "slug": "2256-minimum-average-difference",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 43,
    "python": 24,
    "javascript": 32
  },
  "languages": {
    "cpp": "// Runtime: 311 ms (Top 11.84%) | Memory: 78.4 MB (Top 71.03%)\r\nclass Solution {\r\npublic:\r\n    int minimumAverageDifference(vector<int>& nums) {\r\n\r\n        int n(size(nums)), minAverageDifference(INT_MAX), index;\r\n\r\n        long long sumFromFront(0), sumFromEnd(0);\r\n        for (auto& num : nums) sumFromEnd += num;\r\n\r\n        for (int i=0; i<n; i++) {\r\n            sumFromFront += nums[i];\r\n            sumFromEnd -= nums[i];\r\n            int a = sumFromFront / (i+1); // average of the first i + 1 elements.\r\n            int b = (i == n-1) ? 0 : sumFromEnd / (n-i-1); // average of the last n - i - 1 elements.\r\n\r\n            if (abs(a-b) < minAverageDifference) {\r\n                minAverageDifference = abs(a-b);\r\n                index = i;\r\n            }\r\n        }\r\n        return index;\r\n    }\r\n};",
    "python": "from itertools import accumulate\r\n\r\nclass Solution:\r\n    def minimumAverageDifference(self, nums: List[int]) -> int:\r\n        size = len(nums)\r\n\r\n        nums[::] = list(accumulate(nums))\r\n        total = nums[-1]\r\n        \r\n        min_tuple = [0, sys.maxsize]\r\n        \r\n        for (i, n) in enumerate(nums):\r\n            i = i + 1\r\n            avg_i = floor(n/i)\r\n            \r\n            diff = size - i\r\n            total_avg = floor((total - n) / (diff if diff>0 else 1))\r\n\r\n            avg = abs( avg_i - total_avg) \r\n            if min_tuple[1] > avg:\r\n                min_tuple[1] = avg\r\n                min_tuple[0] = i - 1\r\n            \r\n        return min_tuple[0]",
    "java": "// Runtime: 27 ms (Top 34.34%) | Memory: 76.7 MB (Top 35.00%)\r\nclass Solution {\r\n    public int minimumAverageDifference(int[] nums) {\r\n        if(nums.length == 1){\r\n            return 0;\r\n        }\r\n        int idx = -1;\r\n        long min = Integer.MAX_VALUE;\r\n        long suml = nums[0];\r\n        long sumr = 0;\r\n        for(int i = 1; i < nums.length; i++){\r\n            sumr += nums[i];\r\n        }\r\n        int i = 1;\r\n        int calc = 0;\r\n        int left = 1;\r\n        int right = nums.length - left;\r\n        long[] arr = new long[nums.length];\r\n        while(i < nums.length){\r\n            long diff = Math.abs((suml/left) - (sumr/right));\r\n            arr[calc] = diff;\r\n            if(diff < min){\r\n                min = diff;\r\n                idx = calc;\r\n            }\r\n            suml += nums[i];\r\n            sumr -= nums[i];\r\n            left++;\r\n            right--;\r\n            calc++;\r\n            i++;\r\n        }\r\n        arr[calc] = suml/nums.length;\r\n        if(arr[calc] < min){\r\n            min = arr[calc];\r\n            idx = nums.length - 1;\r\n        }\r\n        // for(i = 0; i < nums.length; i++){\r\n        // System.out.println(arr[i]);\r\n        // }\r\n        return (int)idx;\r\n    }\r\n}",
    "javascript": "// Runtime: 83 ms (Top 27.27%) | Memory: 65.10 MB (Top 27.27%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar minimumAverageDifference = function(nums) {\r\n    let firstSum = 0;\r\n    let lastSum = 0;\r\n    \r\n    for(let num of nums) lastSum+=num;\r\n    \r\n    let minAvg = Number.POSITIVE_INFINITY;\r\n    let minAvgIndex = 0;\r\n\r\n    for(let i=0; i<nums.length; i++){\r\n        firstSum+=nums[i];\r\n        lastSum-=nums[i];\r\n\r\n        if(i !== nums.length-1)\r\n            currAvg = Math.abs(Math.floor(firstSum/(i+1))-Math.floor(lastSum/(nums.length-i-1)));\r\n        else\r\n            currAvg = Math.abs(Math.floor(firstSum/(i+1)));\r\n\r\n        if(currAvg < minAvg){\r\n            minAvg = currAvg;\r\n            minAvgIndex = i;\r\n        } \r\n    }\r\n\r\n    return minAvgIndex;\r\n};"
  }
}
