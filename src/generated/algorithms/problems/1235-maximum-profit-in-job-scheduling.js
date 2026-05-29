export default {
  "id": 1235,
  "name": "Maximum Profit in Job Scheduling",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-profit-in-job-scheduling",
  "relativeDir": "M/Maximum Profit in Job Scheduling",
  "slug": "1235-maximum-profit-in-job-scheduling",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "python": 16,
    "javascript": 71
  },
  "languages": {
    "cpp": "// Runtime: 150 ms (Top 93.74%) | Memory: 49.8 MB (Top 86.31%)\r\nstruct Task {\r\n    int start, end, profit;\r\n    Task(int s, int e, int p) : start(s), end(e), profit(p) {};\r\n};\r\n\r\nclass Solution {\r\npublic:\r\n    int jobScheduling(vector<int>& startTime, vector<int>& endTime, vector<int>& profit) {\r\n        int n = startTime.size();\r\n        // sort by ascending end time\r\n        vector<Task> tasks;\r\n        for (int i = 0; i < n; i++) tasks.push_back(Task(startTime[i], endTime[i], profit[i]));\r\n        auto cmp = [] (const Task& t1, const Task& t2) { return t1.end < t2.end; };\r\n        sort(tasks.begin(), tasks.end(), cmp);\r\n\r\n        vector<int> dp(n, 0);\r\n        dp[0] = tasks[0].profit;\r\n        for (int i = 1; i < n; i++) {\r\n            // Why upper bound works?\r\n            // [1] if start time i-th task >= end time j-th task, then i-th task can complete all previous tasks of j-th task\r\n            // [2] dp[i] can be dp[i-1], dp[i] means the maximum profit from 0 to i-th, but it includes i-th task or not\r\n            // [3] same end time diffrent profit cases -> because of [2], we have to find the last index among duplicate numbers\r\n            int j = lastBound(i-1, tasks, tasks[i].start);\r\n            dp[i] = max(dp[i-1], (j!=-1?dp[j]:0) + tasks[i].profit);\r\n        }\r\n        return dp[n-1];\r\n    }\r\n    // Time : O(Nlog(N) + Nlog(N))\r\n    // Space : O(N)\r\n    // lastBound from upperBound\r\n    int lastBound(int end, vector<Task>& tasks, int target) {\r\n        int lo = 0, hi = end;\r\n        while (lo < hi) {\r\n            int m = lo + (hi-lo)/2;\r\n            if (tasks[m].end <= target) lo = m + 1;\r\n            else hi = m;\r\n        }\r\n        if (tasks[lo].end > target) lo--;\r\n        return lo;\r\n    }\r\n};",
    "python": "# Runtime: 990 ms (Top 41.71%) | Memory: 47.5 MB (Top 21.04%)\r\nclass Solution:\r\n    def jobScheduling(self, startTime: List[int], endTime: List[int], profit: List[int]) -> int:\r\n        n = len(startTime)\r\n        jobs = list(zip(startTime, endTime, profit))\r\n        jobs.sort()\r\n        startTime.sort()\r\n        @lru_cache(None)\r\n        def recur(i):\r\n            if i == n:\r\n                return 0\r\n            j = bisect_left(startTime, jobs[i][1])\r\n            one = jobs[i][2] + recur(j)\r\n            two = recur(i+1)\r\n            return max(one, two)\r\n        return recur(0)",
    "javascript": "var jobScheduling = function(startTime, endTime, profit) {\r\n  const N = startTime.length;\r\n\r\n  let zip = [];\r\n  for(let i = 0; i < N; i++) {\r\n    zip.push([startTime[i], endTime[i], profit[i]]);\r\n  }\r\n  const starts = mergesort(zip, (a, b) => a[0] - b[0]).map(s => s[0]);\r\n  const endAsc = mergesort(zip, (a, b) => a[1] - b[1]);\r\n  const ends = endAsc.map(s => s[1]);\r\n  \r\n  const startToClosestEnd = {};\r\n  let j = 0;\r\n  for(const start of starts) {\r\n    let curEnd = ends[j];\r\n    let nextEnd = ends[j+1];\r\n    // While the current and next end are before the current start...\r\n    while(curEnd <= start && nextEnd && nextEnd <= start) {\r\n      // Advance one end.\r\n      j++;\r\n      curEnd = ends[j];\r\n      nextEnd = ends[j+1];\r\n    }\r\n    \r\n    if(curEnd <= start) {\r\n      startToClosestEnd[start] = curEnd;\r\n    } else {\r\n      startToClosestEnd[start] = null;\r\n    }\r\n  }\r\n\r\n  let maxProfit = Number.MIN_SAFE_INTEGER;\r\n  \r\n  const bestAtEnd = {};\r\n  for(const [start, end, profit] of endAsc) {\r\n    if(startToClosestEnd[start]) {\r\n      maxProfit = Math.max(maxProfit, bestAtEnd[startToClosestEnd[start]] + profit);\r\n    } else {\r\n      maxProfit = Math.max(maxProfit, profit);\r\n    }\r\n    \r\n    bestAtEnd[end] = maxProfit;\r\n  }\r\n\r\n  return maxProfit;\r\n};\r\n\r\nfunction mergesort(arr, comparator) {\r\n  if(arr.length === 1) return arr;\r\n\r\n  const mid = Math.floor((arr.length - 1) / 2);\r\n  const a = mergesort(arr.slice(0, mid+1), comparator);\r\n  const b = mergesort(arr.slice(mid+1), comparator);\r\n  const c = [];\r\n\r\n  while(a.length || b.length) {\r\n    if(a.length && b.length) {\r\n      if(comparator(a[0], b[0]) < 0) {\r\n        c.push(a.shift());\r\n      } else {\r\n        c.push(b.shift());\r\n      }\r\n    } else if(b.length) {\r\n      c.push(b.shift());\r\n    } else {\r\n      c.push(a.shift());\r\n    }\r\n  }\r\n\r\n  return c;\r\n}"
  }
}
