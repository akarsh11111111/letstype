export default {
  "id": 1929,
  "name": "Concatenation of Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/concatenation-of-array",
  "relativeDir": "C/Concatenation of Array",
  "slug": "1929-concatenation-of-array",
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
    "python": 4,
    "javascript": 4
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> getConcatenation(vector<int>& nums) {\r\n        int n=nums.size();\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            nums.push_back(nums[i]);\r\n        }\r\n        return nums;\r\n    }\r\n};",
    "python": "# Runtime: 139 ms (Top 57.29%) | Memory: 14.1 MB (Top 65.51%)\r\nclass Solution(object):\r\n    def getConcatenation(self, nums):\r\n        return nums * 2",
    "java": "// Runtime: 6 ms (Top 7.82%) | Memory: 50.1 MB (Top 50.44%)\r\nclass Solution {\r\n    public int[] getConcatenation(int[] nums) {\r\n        int[] ans = new int[2 * nums.length];\r\n        for(int i = 0; i < nums.length; i++){\r\n            ans[i] = ans[i + nums.length] = nums[i];\r\n        }\r\n\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var getConcatenation = function(nums) {\r\n\t//spread the nums array twice and return it\r\n    return [...nums,...nums]\r\n};"
  }
}
