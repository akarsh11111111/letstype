export default {
  "id": 2216,
  "name": "Minimum Deletions to Make Array Beautiful",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful",
  "relativeDir": "M/Minimum Deletions to Make Array Beautiful",
  "slug": "2216-minimum-deletions-to-make-array-beautiful",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 14,
    "python": 30,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 145 ms (Top 30.03%) | Memory: 121.50 MB (Top 63.37%)\r\n\r\nclass Solution {\r\n    public:\r\n        int minDeletion(vector < int > & nums) {\r\n            bool even = true;\r\n            int size = 0, c = 0;\r\n            for (int i = 0; i < nums.size(); i++) {\r\n                while (i + 1 < nums.size() && even && nums[i] == nums[i + 1]) i++, c++;\r\n                size++;\r\n                even = !even;\r\n            }\r\n            return c + size % 2;\r\n        }\r\n};",
    "python": "class Solution:\r\n    def minDeletion(self, nums: List[int]) -> int:\r\n        # Greedy !\r\n        # we first only consider requirement 2: nums[i] != nums[i + 1] for all i % 2 == 0\r\n        # at the begining, we consider the num on the even index\r\n        # when we delete a num, we need consider the num on the odd index\r\n        # then repeat this process\r\n        # at the end we check the requirement 1: nums.length is even or not\r\n        \r\n        n = len(nums)\r\n        count = 0\r\n        # flag is true then check the even index\r\n        # flag is false then check the odd index\r\n        flag = True\r\n        \r\n        for i in range(n):\r\n            # check the even index\r\n            if flag:\r\n                if i % 2 == 0 and i != n -1 and nums[i] == nums[i + 1]:\r\n                    count += 1\r\n                    flag = False\r\n            # check the odd index\r\n            elif not flag:\r\n                if i % 2 == 1 and i != n -1 and nums[i] == nums[i + 1]:\r\n                    count += 1\r\n                    flag = True\r\n        \r\n        curLength = n - count\r\n        \r\n        return count if curLength % 2 == 0 else count + 1",
    "java": "// Runtime: 8 ms (Top 50.94%) | Memory: 58.2 MB (Top 89.06%)\r\nclass Solution {\r\n    public int minDeletion(int[] nums) {\r\n\r\n        int deletion = 0, n = nums.length;\r\n\r\n        for (int i=0; i<n-1; ) {\r\n            int newIndex = i-deletion;\r\n            if ((newIndex % 2 == 0) && nums[i] == nums[i+1]) deletion++;\r\n            else i++;\r\n        }\r\n        return ((n-deletion) % 2 == 0) ? deletion : deletion+1;\r\n    }\r\n}",
    "javascript": "// Runtime: 296 ms (Top 10.64%) | Memory: 60.3 MB (Top 8.51%)\r\nvar minDeletion = function(nums) {\r\n    const n = nums.length;\r\n    const res = [];\r\n\r\n    for (let i = 0; i < n; ++i) {\r\n        const num = nums[i];\r\n\r\n        if (res.length % 2 === 0 || res.at(-1) != num) {\r\n            res.push(num);\r\n        }\r\n    }\r\n\r\n    if (res.length % 2 === 1) res.pop();\r\n\r\n    return n - res.length;\r\n};"
  }
}
