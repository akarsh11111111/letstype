export default {
  "id": 2294,
  "name": "Partition Array Such That Maximum Difference Is K",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/partition-array-such-that-maximum-difference-is-k",
  "relativeDir": "P/Partition Array Such That Maximum Difference Is K",
  "slug": "2294-partition-array-such-that-maximum-difference-is-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 12,
    "python": 16,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int partitionArray(vector<int>& nums, int k) {\r\n        \r\n        int n(size(nums)), res(0);\r\n        sort(begin(nums), end(nums));\r\n    \r\n        for (int start=0, next=0; start<n;) {\r\n            while (next<n and nums[next]-nums[start] <= k) next++;            \r\n            start = next;\r\n            res++;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def partitionArray(self, nums: List[int], k: int) -> int:\r\n        nums.sort()\r\n        ans = 1\r\n\t\t# To keep track of starting element of each subsequence\r\n        start = nums[0]\r\n        \r\n        for i in range(1, len(nums)):\r\n            diff = nums[i] - start\r\n            if diff > k:\r\n\t\t\t\t# If difference of starting and current element of subsequence is greater\r\n\t\t\t\t# than K, then only start new subsequence\r\n                ans += 1\r\n                start = nums[i]\r\n        \r\n        return ans",
    "java": "class Solution {\r\n\r\n    public int partitionArray(int[] nums, int k) {\r\n        Arrays.sort(nums);\r\n        int c = 1, prev = 0;\r\n        for (int i = 0; i < nums.length; i++) {\r\n            if (nums[i] - nums[prev] <= k) continue;\r\n            c++; prev = i;\r\n        }\r\n        return c;\r\n    }\r\n}",
    "javascript": "// Runtime: 322 ms (Top 36.23%) | Memory: 54.6 MB (Top 31.88%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar partitionArray = function(nums, k) {\r\n\r\n    nums.sort((a,b) =>{ return a-b})\r\n\r\n    let n = nums.length ,ans=0\r\n\r\n    for(let i=0 ; i<n; i++){\r\n        let ele = nums[i]\r\n        while(i<n && nums[i]-ele<=k) i++\r\n        i--\r\n        ans++\r\n    }\r\n    return ans\r\n};"
  }
}
