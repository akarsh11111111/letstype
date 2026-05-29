export default {
  "id": 1014,
  "name": "Best Sightseeing Pair",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/best-sightseeing-pair",
  "relativeDir": "B/Best Sightseeing Pair",
  "slug": "1014-best-sightseeing-pair",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 56,
    "python": 29,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 140 ms (Top 8.75%) | Memory: 39.5 MB (Top 25.58%)\r\nclass Solution {\r\npublic:\r\n    int maxScoreSightseeingPair(vector<int>& values) {\r\n        int ans=-1e9;\r\n        int maxSum=values[0];\r\n        int n=values.size();\r\n        for(int i=1;i<n;i++){\r\n            ans=max(ans,maxSum+values[i]-i);\r\n            maxSum=max(maxSum,values[i]+i);\r\n        }\r\n        return ans;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    \"\"\"\r\n    Approach: \r\n    O(n^2) is very straight forward\r\n    For all the possible pairs\r\n    for i in range(n)\r\n      for j in range(i+1, n)\r\n         value[i] = max(value[i], value[i] + value[j] + i - j`)\r\n    \r\n    we can do this problem in O(n) as well\r\n    values = [8, 1, 5, 2, 6]\r\n    max_val = [0, 0, 0, 0, 0]\r\n    max_val[i] = max(max_val[i-1]-1, values[i-1]-1)\r\n    we have to do it once from left side and then from right side\r\n    \"\"\"\r\n    def maxScoreSightseeingPair(self, values: List[int]) -> int:\r\n        left_max_vals = [float('-inf') for _ in range(len(values))]\r\n        right_max_vals = [float('-inf') for _ in range(len(values))]\r\n        \r\n        for i in range(1, len(values)):\r\n            left_max_vals[i] = max(left_max_vals[i-1]-1, values[i-1]-1)\r\n            \r\n        for i in range(len(values)-2, -1, -1):\r\n            right_max_vals[i] = max(right_max_vals[i+1]-1, values[i+1]-1)\r\n        \r\n        max_pair = float('-inf')\r\n        for i in range(len(values)):\r\n            max_pair = max(max_pair, values[i] + max(left_max_vals[i], right_max_vals[i]))\r\n        return max_pair",
    "java": "// Runtime: 4 ms (Top 77.63%) | Memory: 50.10 MB (Top 66.67%)\r\n\r\nclass Solution {\r\n    public int maxScoreSightseeingPair(int[] A) {\r\n        // A[i] + A[j] + i - j = (A[i]+i) + (A[j]-j)\r\n        // think about dividing them into two parts\r\n        // get the max of left part and right part, then add them \r\n        // to get the maximum score\r\n        //\r\n        //                 max(left)   + max(right)\r\n        // maximum score = max(A[i]+i) + max((A[j]-j))\r\n\r\n        /* example:\r\n          i  0  1  2  3  4\r\n          A [8, 1, 5, 2, 6], max = 0\r\n          \r\n            i=1,\r\n                left  = A[0]+0 = 8\r\n                right = A[1]-1 = 0\r\n                => max = max(max=0, left + right=8)    = 8\r\n                Before moving to i=2, we need to update left part by \r\n                comparing current left and right\r\n                so ----> left = max(left=8, A[1]+1=2)  = 8\r\n            i=2,\r\n                left  = 8\r\n                right = A[2]-2 = 3\r\n                => max = max(max=8, left + right=11)   = 11\r\n                so ----> left = max(left=8, A[2]+2=7)  = 8 \r\n            i=3,\r\n                left  = 8\r\n                right = A[3]-3 = 1\r\n                => max = max(max=11, left + right=9)   = 11\r\n                so ----> left = max(left=8, A[3]+3=5)  = 8 \r\n            i=4,\r\n                left  = 8\r\n                right = A[4]-4 = 2\r\n                => max = max(max=11, left + right=10)  = 11\r\n                so ----> left = max(left=8, A[4]+4=10) = 8            \r\n            end loop\r\n                max = 11\r\n        */\r\n        int N = A.length;\r\n        int left = A[0]+0;\r\n        int right = 0; \r\n        int max = 0;\r\n\r\n        for (int i=1; i<N; i++){\r\n            right = A[i]-i;\r\n            max = Math.max(max, left+right);\r\n            // before we move on, we need to update the state of left part\r\n            // now our current right part will become left part in next round\r\n            left = Math.max(left, A[i]+i); \r\n        }\r\n        return max;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} values\r\n * @return {number}\r\n */\r\nvar maxScoreSightseeingPair = function(values) {\r\n    let n=values.length,\r\n        prevIndexMaxAddition=values[n-1],\r\n        maxValue=-2;\r\n    for(let i=n-2;i>-1;i--){\r\n        let curIndexMaxAddition=Math.max(values[i],prevIndexMaxAddition-1);\r\n        let curIndexMaxValue=values[i]+prevIndexMaxAddition-1;\r\n        if(maxValue<curIndexMaxValue){\r\n            maxValue=curIndexMaxValue;\r\n        }\r\n        prevIndexMaxAddition=curIndexMaxAddition;\r\n    }\r\n    return maxValue;\r\n};"
  }
}
