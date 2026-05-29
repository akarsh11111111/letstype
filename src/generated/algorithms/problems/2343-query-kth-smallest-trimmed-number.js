export default {
  "id": 2343,
  "name": "Query Kth Smallest Trimmed Number",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/query-kth-smallest-trimmed-number",
  "relativeDir": "Q/Query Kth Smallest Trimmed Number",
  "slug": "2343-query-kth-smallest-trimmed-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 36,
    "python": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> smallestTrimmedNumbers(vector<string>& nums, vector<vector<int>>& queries) {\r\n        vector<int> res;\r\n        for(auto x:queries)\r\n        {\r\n            priority_queue<pair<string,int>> v;\r\n            for(int i=0;i<nums.size();i++)\r\n            {\r\n                int t=nums[i].length()-x[1];\r\n                string p=nums[i].substr(t,x[1]);\r\n                if(v.size()<x[0])\r\n                    v.push({p,i});\r\n                else\r\n                {\r\n                    if(v.top().first > p)\r\n                    {\r\n                        v.pop();\r\n                        v.push({p,i});\r\n                    }\r\n                }\r\n            }\r\n            int val=v.top().second;\r\n            res.push_back(val);\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 1276 ms (Top 58.39%) | Memory: 15.2 MB (Top 22.81%)\r\nfrom collections import defaultdict\r\n\r\nclass Solution:\r\n    def smallestTrimmedNumbers(self, nums: List[str], queries: List[List[int]]) -> List[int]:\r\n        sl = len(nums[0])\r\n        len_to_sorted = defaultdict(list)\r\n        ans = [0] * len(queries)\r\n\r\n        for i, (k_smallest, trim_len) in enumerate(queries):\r\n            if trim_len not in len_to_sorted:\r\n                # have to trim\r\n                for ni, num in enumerate(nums):\r\n                    len_to_sorted[trim_len].append( (int(num[sl - trim_len:]), ni) )\r\n\r\n                len_to_sorted[trim_len] = sorted(len_to_sorted[trim_len])\r\n            ans[i] = len_to_sorted[trim_len][k_smallest -1][1]\r\n\r\n        return ans",
    "java": "// Runtime: 526 ms (Top 46.46%) | Memory: 54.8 MB (Top 85.59%)\r\nclass Solution {\r\n    public int[] smallestTrimmedNumbers(String[] nums, int[][] queries) {\r\n\r\n        if (nums.length == 0)\r\n            return new int[0];\r\n\r\n        int[] result = new int[queries.length];\r\n        int strLen = nums[0].length();\r\n        int[] index = new int[1];\r\n\r\n        PriorityQueue<Integer> queue = new PriorityQueue<>((a, b) -> {\r\n            for (int i = index[0]; i < strLen; i++) {\r\n                if (nums[a].charAt(i) != nums[b].charAt(i))\r\n                    return nums[b].charAt(i) - nums[a].charAt(i);\r\n            }\r\n\r\n            return b - a;\r\n        });\r\n\r\n        for (int i = 0; i < queries.length; i++) {\r\n            index[0] = strLen - queries[i][1];\r\n            queue.clear();\r\n\r\n            for (int j = 0; j < nums.length; j++) {\r\n                queue.add(j);\r\n                if (queue.size() > queries[i][0])\r\n                    queue.poll();\r\n            }\r\n\r\n            result[i] = queue.poll();\r\n        }\r\n\r\n        return result;\r\n    }\r\n}"
  }
}
