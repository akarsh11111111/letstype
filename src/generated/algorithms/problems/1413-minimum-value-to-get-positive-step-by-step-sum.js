export default {
  "id": 1413,
  "name": "Minimum Value to Get Positive Step by Step Sum",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum",
  "relativeDir": "M/Minimum Value to Get Positive Step by Step Sum",
  "slug": "1413-minimum-value-to-get-positive-step-by-step-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 13,
    "python": 5,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minStartValue(vector<int>& nums) {\r\n        int result=min(nums[0],0);\r\n        for(int i=1;i<nums.size();i++){\r\n            nums[i]+=nums[i-1];\r\n            result = min(result,nums[i]);\r\n        }\r\n        return abs(result)+1;\r\n    }\r\n};",
    "python": "# Runtime: 42 ms (Top 60.3%) | Memory: 16.30 MB (Top 27.0%)\r\n\r\nclass Solution:\r\n    def minStartValue(self, nums: List[int]) -> int:\r\n        return max(1, 1 - min(accumulate(nums)))",
    "java": "class Solution {\r\n    public int minStartValue(int[] nums) {\r\n        int lowest_sum = 0;\r\n        int sum = 0;\r\n        for(int i=0; i<nums.length; i++) {\r\n            sum += nums[i];\r\n            if(lowest_sum > sum) {\r\n                lowest_sum = sum;\r\n            }\r\n        }\r\n        return 1-lowest_sum;\r\n    }\r\n}",
    "javascript": "var minStartValue = function(nums) {\r\n    var min = 1;\r\n    var sum = 0;\r\n\t\r\n    for(var i=0;i<nums.length;i++){\r\n        sum = sum+nums[i];\r\n        min = Math.min(min,sum);\r\n    }\r\n    if(min == 1){\r\n        return min;\r\n    }\r\n\t// add 1 to negative of min value obtained to keep the sum always positive\r\n    return (-1*min)+1;\r\n};"
  }
}
