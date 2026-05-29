export default {
  "id": 55,
  "name": "Jump Game",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/jump-game",
  "relativeDir": "J/Jump Game",
  "slug": "0055-jump-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 19,
    "python": 46,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 72 ms (Top 91.03%) | Memory: 48.3 MB (Top 93.54%)\r\nclass Solution {\r\npublic:\r\n    bool canJump(vector<int>& nums) {\r\n        int ans = nums[0];\r\n        if(nums.size()>1&&ans==0) return false;\r\n        for(int i=1; i<nums.size(); i++){\r\n            ans = max(ans-1,nums[i]);\r\n            if(ans<=0&&i!=nums.size()-1) return false;\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "# Runtime: 1132 ms (Top 16.52%) | Memory: 15.2 MB (Top 81.46%)\r\nclass Solution:\r\n    def canJump(self, nums: List[int]) -> bool:\r\n        \"\"\"\r\n        # Memoization + DFS Solution\r\n        # TLE as we have as much as n decisions depending on nums[i] which could be\r\n        # 10^5 as an uppercase according to problem constraints\r\n        # better off with a greedy approach\r\n\r\n        cache = {} # i : bool\r\n\r\n        def dfs(i):\r\n            if i == len(nums) -1:\r\n                return True\r\n            if nums[i] == 0:\r\n                return False\r\n            if i in cache:\r\n                return cache[i]\r\n            for j in range(1, nums[i] + 1):\r\n                res = dfs(i + j)\r\n                if res:\r\n                    cache[i] = True\r\n                    return cache[i]\r\n            cache[i] = False\r\n            return cache[i]\r\n\r\n        return dfs(0)\r\n        \"\"\"\r\n        # Greedy Solution\r\n        # Key with greedy is to find a local and gobal optimum\r\n        # here we find the furthest distance we can travel with each index\r\n\r\n        # futhest index reachable\r\n        reachable = 0\r\n\r\n        # iterate through all indexes and if the current index is futher than what we can travel return fasle\r\n        for i in range(len(nums)):\r\n            if i > reachable:\r\n                return False\r\n\r\n            reachable = max(reachable, nums[i] + i)\r\n            # if the futherest distance we can jump to is greater or equal than the last index break\r\n            if reachable >= len(nums) - 1:\r\n                break\r\n\r\n        return True",
    "java": "// Runtime: 3 ms (Top 67.02%) | Memory: 67.1 MB (Top 78.50%)\r\nclass Solution {\r\n    public boolean canJump(int[] nums)\r\n    {\r\n        int maxjump = 0;\r\n        for(int i=0;i<nums.length;i++)\r\n        {\r\n            // If the current index 'i' is less than current maximum jump 'curr'. It means there is no way to jump to current index...\r\n            // so we should return false\r\n            if(maxjump<i)\r\n                return false;\r\n            else\r\n                maxjump = Math.max(maxjump,nums[i]+i); // Update the current maximum jump...\r\n        }\r\n        return true;\r\n    }\r\n}\r\n\r\n//nums[i]+1 gives themax jump index possible from i",
    "javascript": "// Runtime: 131 ms (Top 48.09%) | Memory: 46.3 MB (Top 65.46%)\r\n\r\nvar canJump = function(nums) {\r\n    let target = nums.length-1;\r\n    let max = 0,index = 0;\r\n\r\n    while(index <= target){\r\n        max = Math.max(max,index + nums[index]);\r\n\r\n        if(max >= target) return true;\r\n\r\n        if(index >= max && nums[index] === 0) return false;\r\n\r\n        index++;\r\n    }\r\n\r\n    return false;\r\n};"
  }
}
