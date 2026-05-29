export default {
  "id": 1673,
  "name": "Find the Most Competitive Subsequence",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-the-most-competitive-subsequence",
  "relativeDir": "F/Find the Most Competitive Subsequence",
  "slug": "1673-find-the-most-competitive-subsequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 16,
    "python": 11,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 217 ms (Top 97.04%) | Memory: 113.4 MB (Top 23.87%)\r\nclass Solution {\r\npublic:\r\n    vector<int> mostCompetitive(vector<int>& nums, int k) {\r\n        vector<int> stack;\r\n        int nums_to_delete = nums.size()-k;\r\n        for (int i = 0; i < nums.size(); i++) {\r\n            while (!stack.empty() && nums[i] < stack.back() && nums_to_delete) {\r\n                stack.pop_back();\r\n                nums_to_delete--;\r\n            }\r\n            stack.push_back(nums[i]);\r\n        }\r\n        return vector<int>(stack.begin(), stack.begin()+k);\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef mostCompetitive(self, nums: List[int], k: int) -> List[int]:\r\n\t\tend = len(nums) - k\r\n\t\tans = []\r\n\t\tfor num in nums:\r\n\t\t\twhile end and ans and num < ans[-1] :\r\n\t\t\t\tans.pop()\r\n\t\t\t\tend -= 1\r\n\t\t\tans.append(num)\r\n\t\t\r\n\t\treturn ans[:k]",
    "java": "// Runtime: 7 ms (Top 96.43%) | Memory: 61.60 MB (Top 10.06%)\r\n\r\nclass Solution {\r\n    public int[] mostCompetitive(int[] nums, int k) {\r\n        int[] stack = new int[k];\r\n        for(int i=0,j=0;i<nums.length;i++) {\r\n          while(j>0 && stack[j-1]>nums[i] && j+nums.length-i>k) {\r\n              j--;\r\n          }\r\n          if(j<k) {\r\n              stack[j++]=nums[i];\r\n          }\r\n        }\r\n        return stack;\r\n    }\r\n}",
    "javascript": "// Runtime: 350 ms (Top 45.24%) | Memory: 74.4 MB (Top 26.19%)\r\nvar mostCompetitive = function(nums, k) {\r\n  let nbToRemove = nums.length - k,stack=[];\r\n  for (const num of nums) {\r\n    while (num<stack[stack.length -1] && stack.length && nbToRemove) {\r\n      stack.pop();\r\n      nbToRemove--;\r\n    }\r\n    stack.push(num)\r\n  }\r\n  while ( nbToRemove ) {\r\n    stack.pop();\r\n    nbToRemove--;\r\n  }\r\n  return stack;\r\n};"
  }
}
