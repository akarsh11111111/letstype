export default {
  "id": 2054,
  "name": "Two Best Non-Overlapping Events",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/two-best-non-overlapping-events",
  "relativeDir": "T/Two Best Non-Overlapping Events",
  "slug": "2054-two-best-non-overlapping-events",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 56,
    "java": 35,
    "python": 14,
    "javascript": 34
  },
  "languages": {
    "cpp": "// Basically my intuition is sort of similar like Knapsack picking.\r\n// We have two options : Pick Event or Don't Pick an event.\r\n// If we \"Pick event\", we'll just add to our sum, then we'll find out an event whose starting time > ending time of the event that we picked and \r\n// we'll keep progressing like this until we hit 2. (as we can only pick at most two events)\r\n// If we \"Don't Pick the event\" we'll move on\r\n// And basically our maxvalue would be max outcome of (\"Pick Event\", \"Don't Pick Event\")\r\n\r\nclass Solution {\r\npublic:\r\n    \r\n    //Main Function\r\n    int maxTwoEvents(vector<vector<int>>& events) {\r\n        int n=events.size();\r\n        vector<vector<int>>dp(n,vector<int>(2,-1));\r\n        \r\n        //Sorting because since we need to find an event that has starting time > ending time \r\n        //of previous event selected, so applying binary search would help there.\r\n        sort(events.begin(),events.end());\r\n        \r\n        return solve(events,0,0,dp);\r\n    }\r\n    \r\n    //Helper function\r\n    int solve(vector<vector<int>>&nums,int idx,int k,vector<vector<int>>&dp)\r\n    {\r\n        // Base case\r\n        if(k==2)\r\n        {\r\n            return 0;\r\n        }\r\n        if(idx>=nums.size())\r\n        {\r\n            return 0;\r\n        }\r\n        \r\n        // Memoization check\r\n        if(dp[idx][k]!=-1)\r\n        {\r\n            return dp[idx][k];\r\n        }\r\n        \r\n        //Basically ending times of the events\r\n        vector<int>ans={nums[idx][1],INT_MAX,INT_MAX};\r\n        \r\n        //Searching the event whose starting time > ending time of previous event selected\r\n        int nextindex=upper_bound(begin(nums),end(nums),ans)-begin(nums);\r\n        \r\n        //Pick event\r\n        int include=nums[idx][2]+solve(nums,nextindex,k+1,dp);\r\n        \r\n        //Don't Pick event\r\n        int exclude=solve(nums,idx+1,k,dp);\r\n        \r\n        return dp[idx][k]=max(include,exclude); //Max of(Pick, Not Pick)\r\n    }\r\n};",
    "python": "class Solution:\r\ndef maxTwoEvents(self, events: List[List[int]]) -> int:\r\n    \r\n    events.sort()\r\n    heap = []\r\n    res2,res1 = 0,0\r\n    for s,e,p in events:\r\n        while heap and heap[0][0]<s:\r\n            res1 = max(res1,heapq.heappop(heap)[1])\r\n        \r\n        res2 = max(res2,res1+p)\r\n        heapq.heappush(heap,(e,p))\r\n    \r\n    return res2",
    "java": "// Runtime: 92 ms (Top 45.29%) | Memory: 159.8 MB (Top 35.88%)\r\nclass Solution {\r\n    public int maxTwoEvents(int[][] events) {\r\n        Arrays.sort(events, (a, b) -> a[0] - b[0]);\r\n        int onRight = 0, maxOne = 0, n = events.length;\r\n        int[] rightMax = new int[n+1];\r\n        for (int i = n - 1; i >= 0; i--) {\r\n            int start = events[i][0], end = events[i][1], val = events[i][2];\r\n            maxOne = Math.max(val, maxOne);\r\n            rightMax[i] = Math.max(rightMax[i+1], val);\r\n        }\r\n        int two = 0;\r\n        for (int i = 0; i < n; i++) {\r\n            int start = events[i][0], end = events[i][1], val = events[i][2];\r\n            int idx = binarySearch(end, events);\r\n            if (idx < n) {\r\n                two = Math.max(rightMax[idx] + val, two);\r\n            }\r\n        }\r\n        return Math.max(two, maxOne);\r\n    }\r\n\r\n    public int binarySearch(int end, int[][] arr) {\r\n        int left = 0, right = arr.length;\r\n        while (left < right) {\r\n            int mid = left + (right - left) / 2;\r\n            if (arr[mid][0] > end) {\r\n                right = mid;\r\n            } else {\r\n                left = mid + 1;\r\n            }\r\n        }\r\n        return left;\r\n    }\r\n}",
    "javascript": "// Runtime: 745 ms (Top 7.14%) | Memory: 109.1 MB (Top 14.29%)\r\nvar maxTwoEvents = function(events) {\r\n    const n = events.length;\r\n\r\n    events.sort((a, b) => a[0] - b[0]);\r\n\r\n    const minHeap = new MinPriorityQueue({ priority: x => x[1] });\r\n\r\n    let maxVal = 0;\r\n    let maxSum = 0;\r\n\r\n    for (let i = 0; i < n; ++i) {\r\n        const [currStart, currEnd, currVal] = events[i];\r\n\r\n        while (!minHeap.isEmpty()) {\r\n            const topElement = minHeap.front().element;\r\n            const [topIdx, topEnd] = topElement;\r\n\r\n            if (topEnd < currStart) {\r\n                maxVal = Math.max(maxVal, events[topIdx][2]);\r\n                minHeap.dequeue();\r\n            }\r\n            else {\r\n                break;\r\n            }\r\n        }\r\n\r\n        const sum = maxVal + currVal;\r\n        maxSum = Math.max(maxSum, sum);\r\n        minHeap.enqueue([i, currEnd]);\r\n    }\r\n\r\n    return maxSum;\r\n};"
  }
}
