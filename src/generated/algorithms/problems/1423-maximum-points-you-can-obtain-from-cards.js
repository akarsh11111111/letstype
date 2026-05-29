export default {
  "id": 1423,
  "name": "Maximum Points You Can Obtain from Cards",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards",
  "relativeDir": "M/Maximum Points You Can Obtain from Cards",
  "slug": "1423-maximum-points-you-can-obtain-from-cards",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 29,
    "python": 18,
    "javascript": 27
  },
  "languages": {
    "cpp": "// Runtime: 125 ms (Top 23.98%) | Memory: 42.5 MB (Top 47.00%)\r\nclass Solution {\r\npublic:\r\n    int maxScore(vector<int>& cardPoints, int k) {\r\n\r\n        int max_s = 0, left =0, right = 0, n = cardPoints.size();\r\n\r\n        //getting sum of k right elements\r\n        for(int i = 0; i<k; i++){\r\n            right += cardPoints[n-i-1];\r\n        }\r\n\r\n        // Assumming max as sum of k right elements\r\n        max_s = right;\r\n        for(int i = 0; i<k; i++){\r\n            left += cardPoints[i];\r\n            right -= cardPoints[n-k+i];\r\n            max_s = max(max_s, left+right);\r\n        }\r\n        return max_s;\r\n    }\r\n};",
    "python": "// Runtime: 314 ms (Top 86.56%) | Memory: 29.90 MB (Top 66.7%)\r\n\r\nclass Solution:\r\n    def maxScore(self, cardPoints: List[int], k: int) -> int:\r\n        n = len(cardPoints)\r\n        total = sum(cardPoints)\r\n        \r\n        remaining_length = n - k\r\n        subarray_sum = sum(cardPoints[:remaining_length])\r\n        \r\n        min_sum = subarray_sum\r\n        for i in range(remaining_length, n):\r\n            # Update the sliding window sum to the subarray ending at index i\r\n            subarray_sum += cardPoints[i]\r\n            subarray_sum -= cardPoints[i - remaining_length]\r\n            # Update min_sum to track the overall minimum sum so far\r\n            min_sum = min(min_sum, subarray_sum)\r\n        return total - min_sum",
    "java": "// Runtime: 5 ms (Top 20.60%) | Memory: 66.5 MB (Top 16.04%)\r\nclass Solution {\r\n    public int maxScore(int[] cardPoints, int k) {\r\n        int n = cardPoints.length;\r\n        int[] totalSum = new int[n];\r\n        int sum = 0;\r\n        for(int i=0;i<n;i++){\r\n            sum += cardPoints[i];\r\n            totalSum[i] = sum;\r\n        }\r\n        if(n==k){\r\n            return sum;\r\n        }\r\n        int score =0;\r\n        for(int i=0;i<=k;i++){\r\n            int j = i+n-k-1;\r\n            int subsum = 0;\r\n            if(i==0){\r\n                subsum = totalSum[j];\r\n            }\r\n            else{\r\n                subsum = totalSum[j]-totalSum[i-1];\r\n            }\r\n\r\n            score = Math.max(score,sum-subsum);\r\n        }\r\n        return score;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} cardPoints\r\n * @param {number} k\r\n * @return {number}\r\n */\r\n\r\n// Obtaining k cards from the beginning or end of the row for the largest sum, meaning leaving the\r\n// array with n-k adjacent cards with the min sum\r\n// therefore, this transform the problem to finding the minSum of subarray of length n-k\r\n// we use slide window to calculate the minSubArraySum\r\nvar maxScore = function(cardPoints, k) {\r\n    const n = cardPoints.length, d = n-k // d is the window length\r\n    let sum = 0\r\n    for (let i = 0; i < d; i++) {\r\n        sum += cardPoints[i]\r\n    }\r\n    let minWindowSum = sum, totalSum = sum\r\n    console.log(sum)\r\n    for (let i = d; i < n; i++) {\r\n        // the sum of the next window will the the sum of previous window + the next card (the end card of the next window) - the beginning card of the previous window\r\n        sum += cardPoints[i] - cardPoints[i-d]\r\n        minWindowSum = Math.min(minWindowSum, sum)\r\n        totalSum += cardPoints[i]\r\n    }\r\n    // the ans will be the sum of all cards - the sum of min subArray\r\n    return totalSum - minWindowSum\r\n};"
  }
}
