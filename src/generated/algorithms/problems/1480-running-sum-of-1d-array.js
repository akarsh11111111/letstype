export default {
  "id": 1480,
  "name": "Running Sum of 1d Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/running-sum-of-1d-array",
  "relativeDir": "R/Running Sum of 1d Array",
  "slug": "1480-running-sum-of-1d-array",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 9,
    "python": 16,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> runningSum(vector<int>& nums) {\r\n        for(int i=1; i<nums.size(); i++){\r\n            nums[i]+= nums[i-1];\r\n        }\r\n        return nums;\r\n    }\r\n};",
    "python": "// Runtime: 39 ms (Top 85.2%) | Memory: 16.70 MB (Top 56.78%)\r\n\r\nclass Solution:\r\n    def runningSum(self, nums: List[int]) -> List[int]:\r\n        # The variable that will have the running sum\r\n        tot = 0\r\n        # The array that will hold the running su,\r\n        ans = []\r\n        # For loop\r\n        for ele in nums:\r\n            # Adding the element\r\n            tot += ele\r\n            # Appending this running sum to ans\r\n            ans.append(tot)\r\n        # Return ans\r\n        return ans",
    "javascript": "// Runtime: 89 ms (Top 55.72%) | Memory: 42.9 MB (Top 15.89%)\r\n/**\r\n * @param {number[]} nums\r\n * @return {number[]}\r\n */\r\n\r\nvar runningSum = function(nums) {\r\n  let res = [];\r\n  let a = 0;\r\n  for (let i = 0; i < nums.length; i++) {\r\n    res[i] = a + nums[i];\r\n    a = res[i];\r\n    if(res.length < nums.length){\r\n    res.push(a);\r\n    }\r\n  }\r\nreturn res;\r\n};"
  }
}
