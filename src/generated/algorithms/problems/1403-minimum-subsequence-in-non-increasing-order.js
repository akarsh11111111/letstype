export default {
  "id": 1403,
  "name": "Minimum Subsequence in Non-Increasing Order",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order",
  "relativeDir": "M/Minimum Subsequence in Non-Increasing Order",
  "slug": "1403-minimum-subsequence-in-non-increasing-order",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 20,
    "python": 9,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> minSubsequence(vector<int>& nums) {\r\n        \r\n        sort(nums.begin(), nums.end(),greater<int>());\r\n        vector<int> res;\r\n        int sum = 0;\r\n        for(int i: nums)\r\n            sum += i;\r\n        \r\n        int x=0;\r\n        for(int i=0; i<nums.size(); i++)\r\n        {\r\n            x += nums[i];\r\n            sum -= nums[i];\r\n            res.push_back(nums[i]);\r\n            if(x>sum)\r\n                break;\r\n            \r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minSubsequence(self, nums: List[int]) -> List[int]:\r\n        nums.sort(reverse=True)\r\n        val = sum(nums)\r\n        temp = []\r\n        for i in range(len(nums)):\r\n            temp.append(nums[i])\r\n            if sum(temp)>val-sum(temp):\r\n                return temp",
    "java": "// Runtime: 6 ms (Top 45.85%) | Memory: 44.9 MB (Top 74.27%)\r\nclass Solution {\r\n    public List<Integer> minSubsequence(int[] nums) {\r\n        int total = 0;\r\n        for(int i=0;i<nums.length;i++){\r\n            total += nums[i];\r\n        }\r\n        Arrays.sort(nums);\r\n        int sum = 0;\r\n        ArrayList<Integer> ans = new ArrayList<>();\r\n        for(int i=nums.length-1;i>=0;i--){\r\n            ans.add(nums[i]);\r\n            sum += nums[i];\r\n            if(sum>total-sum){\r\n                return ans;\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number[]}\r\n */\r\nvar minSubsequence = function(nums) {\r\n  const target = nums.reduce((a, b) => a + b) / 2;\r\n  nums.sort((a, b) => b - a);\r\n  let i = 0, sum = 0;\r\n  while (sum <= target) {\r\n    sum += nums[i++];\r\n  }\r\n  return nums.slice(0, i);\r\n};"
  }
}
