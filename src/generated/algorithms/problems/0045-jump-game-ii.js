export default {
  "id": 45,
  "name": "Jump Game II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/jump-game-ii",
  "relativeDir": "J/Jump Game II",
  "slug": "0045-jump-game-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 27,
    "python": 16,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int jump(vector<int>& nums) {\r\n        int step=0, jump_now;\r\n        int ans = 0, index=0, i, mx;\r\n        if(nums.size()==1) return ans;\r\n        while(index+step<nums.size()-1){\r\n            ans++;\r\n            step = nums[index];\r\n            if(index+step>=nums.size()-1) break;\r\n            mx = 0;\r\n            for(i=1; i<=step; i++){\r\n                if(i+nums[index+i]>mx){\r\n                    mx = i+nums[index+i];\r\n                    jump_now = i;\r\n                }\r\n            }\r\n            step = 0;\r\n            index += jump_now;\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 305 ms (Top 40.77%) | Memory: 15 MB (Top 90.04%)\r\nclass Solution(object):\r\n    def jump(self, nums):\r\n        ans = l = r = 0\r\n\r\n        while r < len(nums) - 1:\r\n            farthestJump = 0\r\n\r\n            for i in range(l, r + 1):\r\n                farthestJump = max(farthestJump, i + nums[i])\r\n\r\n            l = r + 1\r\n            r = farthestJump\r\n            ans += 1\r\n\r\n        return ans",
    "java": "// Runtime: 2 ms (Top 82.01%) | Memory: 50 MB (Top 21.41%)\r\nclass Solution {\r\n\r\n    public int jump(int[] nums) {\r\n\r\n        int result = 0;\r\n\r\n        int L = 0;\r\n        int R = 0;\r\n\r\n        while (R < nums.length - 1) {\r\n\r\n            int localMaxRight = 0;\r\n\r\n            for (int i=L; i<=R; i++) {\r\n\r\n                localMaxRight = Math.max(i + nums[i], localMaxRight);\r\n            }\r\n\r\n            L = R + 1;\r\n            R = localMaxRight;\r\n            result++;\r\n        }\r\n\r\n        return result;\r\n    }\r\n}",
    "javascript": "**//Time Complexity : O(n),   Space Complexity: O(1)**\r\nvar jump = function(nums) {\r\n    var jump = 0;\r\n    var prev = 0;\r\n    var max = 0;\r\n    for (var i = 0; i < nums.length - 1; i++) {\r\n        // Keep track of the maximum jump\r\n        max = Math.max(max, i + nums[i]);\r\n        // When we get to the index where we had our previous maximum jump, we increase our jump...\r\n        if (i === prev) {\r\n            jump++;\r\n            prev = max;\r\n        }\r\n    }\r\n    return jump;\r\n};"
  }
}
