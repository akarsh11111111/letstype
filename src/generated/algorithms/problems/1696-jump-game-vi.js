export default {
  "id": 1696,
  "name": "Jump Game VI",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/jump-game-vi",
  "relativeDir": "J/Jump Game VI",
  "slug": "1696-jump-game-vi",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 15,
    "python": 13,
    "javascript": 10
  },
  "languages": {
    "cpp": "#define pii pair<int, int>\r\nclass Solution {\r\npublic:\r\n    int maxResult(vector<int>& nums, int k)\r\n    {\r\n        int n=nums.size();\r\n        int score[n];\r\n        priority_queue<pii> pq;\r\n        \r\n        for(int i=n-1 ; i>=0 ; i--)\r\n        {\r\n            while(pq.size() && pq.top().second>i+k)\r\n                pq.pop();\r\n            \r\n            score[i]=nums[i];\r\n            score[i]+=(pq.size() ? pq.top().first : 0);\r\n            pq.push({score[i], i});\r\n        }\r\n        \r\n        return score[0];\r\n    }\r\n};",
    "python": "// Runtime: 791 ms (Top 67.87%) | Memory: 30.60 MB (Top 42.3%)\r\n\r\nclass Solution:\r\n    def maxResult(self, nums, k):\r\n        deq, n = deque([0]), len(nums)\r\n\r\n        for i in range(1, n):\r\n            while deq and deq[0] < i - k: deq.popleft()\r\n            nums[i] += nums[deq[0]]   \r\n            while deq and nums[i] >= nums[deq[-1]]: deq.pop()\r\n            deq.append(i)\r\n            \r\n        return nums[-1]",
    "java": "// Runtime: 20 ms (Top 93.03%) | Memory: 78 MB (Top 81.86%)\r\nclass Solution {\r\n    public int maxResult(int[] nums, int k) {\r\n        int n = nums.length, a = 0, b = 0;\r\n        int[] deq = new int[n];\r\n        deq[0] = n - 1;\r\n        for (int i = n - 2; i >= 0; i--) {\r\n            if (deq[a] - i > k) a++;\r\n            nums[i] += nums[deq[a]];\r\n            while (b >= a && nums[deq[b]] <= nums[i]) b--;\r\n            deq[++b] = i;\r\n        }\r\n        return nums[0];\r\n    }\r\n}",
    "javascript": "var maxResult = function(nums, k) {\r\n   let n = nums.length, deq = [n-1]\r\n    for (let i = n - 2; ~i; i--) {\r\n        if (deq[0] - i > k) deq.shift()\r\n        nums[i] += nums[deq[0]]\r\n        while (deq.length && nums[deq[deq.length-1]] <= nums[i]) deq.pop()\r\n        deq.push(i)\r\n    }\r\n    return nums[0] \r\n};"
  }
}
