export default {
  "id": 1752,
  "name": "Check if Array Is Sorted and Rotated",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-array-is-sorted-and-rotated",
  "relativeDir": "C/Check if Array Is Sorted and Rotated",
  "slug": "1752-check-if-array-is-sorted-and-rotated",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 16,
    "python": 9,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 32.48%) | Memory: 9.00 MB (Top 12.17%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool check(vector<int>& nums) {\r\n        int count=0;\r\n        for(int i=0;i<nums.size();i++){\r\n            if(nums[i]>nums[(i+1)%nums.size()])\r\n                count++;\r\n        }\r\n        return (count<=1);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def check(self, num: List[int]) -> bool:\r\n        ct=0\r\n        for i in range(1,len(num)):\r\n            if num[i-1]>num[i]:\r\n                ct+=1\r\n        if num[len(num)-1]>num[0]:\r\n            ct+=1\r\n        return ct<=1",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.6 MB (Top 54.56%)\r\nclass Solution {\r\n    public boolean check(int[] nums) {\r\n        // here we compare all the neighbouring elemnts and check whether they are in somewhat sorted\r\n        // there will be a small change due to rotation in the array at only one place.\r\n        // so if there are irregularities more than once, return false\r\n        // else return true;\r\n        int irregularities = 0;\r\n        int length = nums.length;\r\n        for (int i=0; i<length; i++) {\r\n            if (nums[i] > nums[(i + 1) % length])\r\n                irregularities += 1;\r\n        }\r\n        return irregularities > 1 ? false : true;\r\n    }\r\n}",
    "javascript": "// Runtime: 109 ms (Top 19.53%) | Memory: 42.4 MB (Top 13.28%)\r\n\r\nvar check = function(nums) {\r\n  let decreased = false\r\n  for (let i = 1; i < nums.length; i += 1) {\r\n    if (nums[i] < nums[i - 1]) {\r\n      if (decreased) {\r\n        return false\r\n      }\r\n      decreased = true\r\n    }\r\n  }\r\n  return decreased ? nums[0] >= nums[nums.length - 1] : true\r\n};"
  }
}
