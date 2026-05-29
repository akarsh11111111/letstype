export default {
  "id": 561,
  "name": "Array Partition",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/array-partition",
  "relativeDir": "A/Array Partition",
  "slug": "0561-array-partition",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 11,
    "python": 14,
    "javascript": 9
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int arrayPairSum(vector<int>& nums) {\r\n     int res=0;\r\n        sort(nums.begin(),nums.end());\r\n        for(int i=0;i<nums.size();i+=2){\r\n            res+=min(nums[i],nums[i+1]);  \r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def arrayPairSum(self, nums):\r\n        \"\"\"\r\n        :type nums: List[int]\r\n        :rtype: int\r\n        \"\"\"\r\n        \r\n        \r\n        nums = sorted(nums)\r\n        \r\n        summ = 0\r\n        for i in range(0,len(nums),2):\r\n            summ += min(nums[i],nums[i+1])\r\n        return summ",
    "java": "// Runtime: 21 ms (Top 17.21%) | Memory: 54.6 MB (Top 23.48%)\r\nclass Solution {\r\n    public int arrayPairSum(int[] nums) {\r\n        Arrays.sort(nums);\r\n        int sum = 0;\r\n        for(int i = 0; i < nums.length; i+=2){\r\n            sum += nums[i];\r\n        }\r\n        return sum;\r\n    }\r\n}",
    "javascript": "// Runtime: 211 ms (Top 22.61%) | Memory: 47.1 MB (Top 91.83%)\r\nvar arrayPairSum = function(nums) {\r\n    nums.sort((a, b) => a - b);\r\n    let total = 0;\r\n    for (let i = 0; i < nums.length; i += 2) {\r\n        total += Math.min(nums[i], nums[i + 1]);\r\n    }\r\n    return total;\r\n};"
  }
}
