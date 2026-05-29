export default {
  "id": 1509,
  "name": "Minimum Difference Between Largest and Smallest Value in Three Moves",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-difference-between-largest-and-smallest-value-in-three-moves",
  "relativeDir": "M/Minimum Difference Between Largest and Smallest Value in Three Moves",
  "slug": "1509-minimum-difference-between-largest-and-smallest-value-in-three-moves",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 30,
    "python": 13,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 112 ms (Top 79.01%) | Memory: 35.4 MB (Top 11.56%)\r\nclass Solution {\r\npublic:\r\n    int minDifference(vector<int>& nums) {\r\n\r\n        int n =nums.size();\r\n\r\n        sort( nums.begin(), nums.end());\r\n\r\n        if( n<5){\r\n            return 0;\r\n\r\n        }\r\n        else return min({nums[n-4]- nums[0],nums[n-3]- nums[1] ,nums[n-2]-nums[2], nums[n-1]-nums[3]});\r\n\r\n    }\r\n};",
    "python": "# Runtime: 942 ms (Top 5.03%) | Memory: 24.7 MB (Top 96.65%)\r\nclass Solution:\r\n    def minDifference(self, nums: List[int]) -> int:\r\n        if len(nums) <= 3:\r\n            return 0\r\n\r\n        nums.sort()\r\n        t1 = nums[-1] - nums[3]\r\n        t2 = nums[-4] - nums[0]\r\n        t3 = nums[-2] - nums[2]\r\n        t4 = nums[-3] - nums[1]\r\n\r\n        return min(t1,t2,t3,t4)",
    "java": "class Solution {\r\n    public int minDifference(int[] nums) {\r\n        // sort the nums\r\n        // to gain the mini difference\r\n        // we want to remove the three smallest or biggest \r\n        // 0 - 3\r\n        // 1 - 2\r\n        // 2 - 1\r\n        // 3 - 0\r\n        if(nums.length <= 4){\r\n            return 0;\r\n        }\r\n        \r\n        Arrays.sort(nums);\r\n        \r\n        int left = 0, right = 3;\r\n        \r\n        int res = Integer.MAX_VALUE;\r\n        while(left <= 3){\r\n            int mini = nums[left];\r\n            int max = nums[nums.length - right - 1];\r\n            res = Math.min(res, max - mini);\r\n            \r\n            left++;\r\n            right--;\r\n        }\r\n        \r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 124 ms (Top 40.7%) | Memory: 50.74 MB (Top 23.6%)\r\n\r\nvar minDifference = function(nums) {\r\n    let len = nums.length;\r\n    if (len < 5) return 0;\r\n\r\n    nums.sort((a,b) => a-b)\r\n    \r\n    return Math.min(\r\n        \r\n    ( nums[len-1] - nums[3] ),  // 3 elements removed from start 0 from end\r\n    ( nums[len-4] - nums[0] ),  // 3 elements removed from end 0 from start\r\n    ( nums[len-2] - nums[2] ),  // 2 elements removed from start 1 from end\r\n    ( nums[len-3] - nums[1] ),  // 2 elements removed from end 1 from start\r\n   \r\n\r\n)\r\n    \r\n    \r\n    \r\n      \r\n};"
  }
}
