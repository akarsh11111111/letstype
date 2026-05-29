export default {
  "id": 1425,
  "name": "Constrained Subsequence Sum",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/constrained-subsequence-sum",
  "relativeDir": "C/Constrained Subsequence Sum",
  "slug": "1425-constrained-subsequence-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 23,
    "python": 22,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 816 ms (Top 24.26%) | Memory: 139.4 MB (Top 31.76%)\r\nclass Solution {\r\npublic:\r\n    int constrainedSubsetSum(vector<int>& nums, int k) {\r\n        priority_queue<array<int, 2>> que;\r\n        int ret = nums[0], curr;\r\n        que.push({nums[0], 0});\r\n        for (int i = 1; i < nums.size(); i++) {\r\n            while (!que.empty() && que.top()[1] < i - k) {\r\n                que.pop();\r\n            }\r\n            curr = max(0, que.top()[0]) + nums[i];\r\n            ret = max(ret, curr);\r\n            que.push({curr, i});\r\n        }\r\n        return ret;\r\n    }\r\n};",
    "python": "# Runtime: 1386 ms (Top 69.5%) | Memory: 30.16 MB (Top 58.7%)\r\n\r\nclass Solution:\r\n    def constrainedSubsetSum(self, nums: List[int], k: int) -> int:\r\n        deque = []\r\n        for i, num in enumerate(nums):\r\n                \r\n            while(deque and deque[0] < i - k): # delete that didn't end with a number in A[i-k:i]\r\n                deque.pop(0)\r\n                \r\n            if deque:  # compute the max sum we can get at index i\r\n                nums[i] = nums[deque[0]] + num\r\n            \r\n            while(deque and nums[deque[-1]] < nums[i]): \r\n                # delet all the sequence that smaller than current sum, becaus there will never be\r\n                # considers ==> smaller than current sequence, and end before current sequence\r\n                deque.pop()\r\n                \r\n            if nums[i] > 0: # if nums[i] < 0, it can't be a useful prefix sum    \r\n            \tdeque.append(i)\r\n        \r\n        return max(nums)",
    "java": "// Runtime: 172 ms (Top 12.84%) | Memory: 123.7 MB (Top 41.81%)\r\nclass Solution {\r\n    public int constrainedSubsetSum(int[] nums, int k) {\r\n        int n=nums.length;\r\n        int[] dp=new int[n];\r\n        int res=nums[0];\r\n        Queue<Integer> queue=new PriorityQueue<>((a,b)->dp[b]-dp[a]); //Declaring Max heap\r\n\r\n        Arrays.fill(dp,Integer.MIN_VALUE);\r\n        dp[0]=nums[0];\r\n        queue.offer(0);\r\n\r\n        for(int j=1;j<n;j++){\r\n            int i=Math.max(j-k,0); // get the furthest index possible\r\n            while(!queue.isEmpty() && queue.peek()<i) queue.poll(); // find the global max in the specified range for that particular j index\r\n            int idx=queue.peek();\r\n            dp[j]=Math.max(dp[idx]+nums[j],nums[j]);\r\n            res=Math.max(res,dp[j]);\r\n            queue.offer(j);\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar constrainedSubsetSum = function(nums, k) {\r\n    const queue = [[0, nums[0]]];\r\n    let max = nums[0];\r\n    for (let i = 1; i < nums.length; i++) {\r\n        const cur = queue.length ? nums[i] + Math.max(0, queue[0][1]) : nums[i];\r\n        max = Math.max(max, cur);\r\n        while(queue.length && queue[queue.length-1][1] < cur) queue.pop();\r\n        queue.push([i, cur]);\r\n        while(queue.length && queue[0][0] <= i-k) queue.shift();\r\n    }\r\n    return max;\r\n};"
  }
}
