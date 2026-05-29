export default {
  "id": 2059,
  "name": "Minimum Operations to Convert Number",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-operations-to-convert-number",
  "relativeDir": "M/Minimum Operations to Convert Number",
  "slug": "2059-minimum-operations-to-convert-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 29,
    "python": 19
  },
  "languages": {
    "cpp": "// Runtime: 356 ms (Top 70.09%) | Memory: 8.7 MB (Top 99.54%)\r\nclass Solution {\r\npublic:\r\n    int minimumOperations(vector<int>& nums, int start, int goal) {\r\n        int n = nums.size();\r\n        // BFS\r\n        queue<int> q;\r\n        vector<bool> vis(1001, false);\r\n\r\n        q.push(goal);\r\n        if (0 <= goal && goal <= 1000) vis[goal] = true;\r\n\r\n        int dist = -1;\r\n        bool done = false;\r\n        while (!q.empty() && !done) {\r\n            dist++;\r\n            int sz = q.size();\r\n            for (int i = 0; i < sz; i++) {\r\n                int cur = q.front(); q.pop();\r\n                if (cur == start) {\r\n                    done = true;\r\n                    break;\r\n                }\r\n                for (int j = 0; j < n; j++) {\r\n                    if (0 <= cur-nums[j] && cur-nums[j] <= 1000 && !vis[cur-nums[j]]) {\r\n                        q.push(cur-nums[j]);\r\n                        vis[cur-nums[j]] = true;\r\n                    }\r\n                    if (0 <= cur+nums[j] && cur+nums[j] <= 1000 && !vis[cur+nums[j]]) {\r\n                        q.push(cur+nums[j]);\r\n                        vis[cur+nums[j]] = true;\r\n                    }\r\n                    if (0 <= (cur^nums[j]) && (cur^nums[j]) <= 1000 && !vis[cur^nums[j]]) {\r\n                        q.push(cur^nums[j]);\r\n                        vis[cur^nums[j]] = true;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        return done ? dist : -1;\r\n    }\r\n};",
    "python": "# Runtime: 4131 ms (Top 24.3%) | Memory: 185.60 MB (Top 35.5%)\r\n\r\nclass Solution:\r\n    def minimumOperations(self, nums: List[int], start: int, goal: int) -> int:\r\n        ans = 0\r\n        seen = {start}\r\n        queue = deque([start])\r\n        while queue: \r\n            for _ in range(len(queue)): \r\n                val = queue.popleft()\r\n                if val == goal: return ans \r\n                if 0 <= val <= 1000: \r\n                    for x in nums: \r\n                        for op in (add, sub, xor): \r\n                            if op(val, x) not in seen: \r\n                                seen.add(op(val, x))\r\n                                queue.append(op(val, x))\r\n            ans += 1\r\n        return -1",
    "java": "// Runtime: 907 ms (Top 10.13%) | Memory: 306.2 MB (Top 27.03%)\r\nclass Solution {\r\n    public int minimumOperations(int[] nums, int start, int goal) {\r\n        int res = 0;\r\n        Queue<Integer> q = new LinkedList<>();\r\n        Set<Integer> set = new HashSet<>();\r\n        q.offer(start);\r\n\r\n        while(!q.isEmpty()){\r\n            int size = q.size();\r\n\r\n            for(int i = 0;i<size;i++){\r\n                int val = q.poll();\r\n                if(val == goal)return res;\r\n                if((val < 0 || val > 1000) || set.contains(val))continue;\r\n                if(!set.contains(val))set.add(val);\r\n\r\n                for(int num : nums){\r\n                    q.offer(val + num);\r\n                    q.offer(val - num);\r\n                    q.offer(val ^ num);\r\n                }\r\n            }\r\n            res++;\r\n        }\r\n\r\n        return -1;\r\n    }\r\n}"
  }
}
