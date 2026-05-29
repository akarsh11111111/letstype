export default {
  "id": 1005,
  "name": "Maximize Sum Of Array After K Negations",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximize-sum-of-array-after-k-negations",
  "relativeDir": "M/Maximize Sum Of Array After K Negations",
  "slug": "1005-maximize-sum-of-array-after-k-negations",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 21,
    "python": 11,
    "javascript": 41
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 82.1%) | Memory: 9.30 MB (Top 79.12%)\r\n\r\nclass Solution {\r\npublic:\r\n    int largestSumAfterKNegations(vector<int>& A, int K) {\r\n        sort(A.begin(), A.end());\r\n        int i, t=0, n=A.size();\r\n        \r\n        for(i=0; i < min(n, K); i++) {\r\n            if(A[t]>=0) break;\r\n            \r\n            else {\r\n                A[t]=-A[t];\r\n                t++;\r\n            }\r\n        }\r\n        \r\n        sort(A.begin(), A.end());\r\n        if(i<K) {\r\n            if((K-i)%2) {\r\n                A[0]=-A[0];\r\n            }\r\n        }\r\n        \r\n        int sum=0;\r\n        for(i=0; i<A.size(); i++) {\r\n            sum += A[i];\r\n        }\r\n        return sum;\r\n    }\r\n};",
    "python": "from heapq import heapify, heapreplace\r\n\r\nclass Solution:\r\n    def largestSumAfterKNegations(self, nums: List[int], k: int) -> int:\r\n        heapify(nums)\r\n        while k and nums[0] < 0:\r\n            heapreplace(nums, -nums[0])\r\n            k -= 1\r\n        if k % 2:\r\n            heapreplace(nums, -nums[0])\r\n        return sum(nums)",
    "java": "// Runtime: 9 ms (Top 31.54%) | Memory: 43.4 MB (Top 14.91%)\r\nclass Solution {\r\n    public int largestSumAfterKNegations(int[] nums, int k) {\r\n\r\n        PriorityQueue<Integer> minHeap = new PriorityQueue<>();\r\n        for(int val : nums) minHeap.add(val);\r\n\r\n        while(k > 0){\r\n\r\n            int curr = minHeap.poll();\r\n            minHeap.add(-curr);\r\n            k--;\r\n        }\r\n\r\n        int sum = 0;\r\n        while(!minHeap.isEmpty()){\r\n            sum += minHeap.poll();\r\n        }\r\n        return sum;\r\n    }\r\n}",
    "javascript": "// Runtime: 73 ms (Top 92.34%) | Memory: 43.5 MB (Top 69.86%)\r\n/**\r\n * @param {number[]} nums\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar largestSumAfterKNegations = function(nums, k) {\r\n    let negations = k\r\n    let index = 0\r\n    const sortedNums = [...nums]\r\n\r\n    // Sort in increasing order\r\n    sortedNums.sort((a, b) => a - b)\r\n\r\n    // loop into the sorted array using the\r\n    // number of negations\r\n    while (negations > 0) {\r\n        negations--\r\n\r\n        const currentNumber = -sortedNums[index]\r\n        const nextNumber = sortedNums[index + 1]\r\n\r\n        sortedNums[index] = currentNumber\r\n\r\n        // if the number is 0, undefined or\r\n        // the current number is less than the\r\n        // next number (meaning it will be\r\n        // less the amount if it's a negative\r\n        // number) just use the same number\r\n        // again to flip.\r\n        if (\r\n                currentNumber === 0 ||\r\n                nextNumber === undefined ||\r\n                currentNumber < nextNumber\r\n        ) continue\r\n\r\n        index++\r\n    }\r\n\r\n    return sortedNums.reduce((sum, num) => sum + num, 0)\r\n};"
  }
}
