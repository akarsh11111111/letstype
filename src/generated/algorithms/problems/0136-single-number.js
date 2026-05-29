export default {
  "id": 136,
  "name": "Single Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/single-number",
  "relativeDir": "S/Single Number",
  "slug": "0136-single-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 12,
    "python": 12,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int singleNumber(vector<int>& nums) { \r\n       unordered_map<int,int> a;\r\n\t   for(auto x: nums)\r\n\t\t   a[x]++;\r\n\t   for(auto z:a)\r\n\t\t   if(z.second==1)\r\n\t\t\t   return z.first;\r\n\t   return -1;\r\n    }\r\n};",
    "python": "# Runtime: 301 ms (Top 20.49%) | Memory: 16.1 MB (Top 98.97%)\r\nclass Solution:\r\n    def singleNumber(self, nums: List[int]) -> int:\r\n        nums.sort()\r\n        i=0\r\n        while i<len(nums)-1:\r\n            if nums[i]==nums[i+1]:\r\n                i+=2\r\n            else:\r\n                return nums[i]\r\n\r\n        return nums[-1]",
    "java": "// Runtime: 13 ms (Top 30.48%) | Memory: 52.1 MB (Top 26.29%)\r\nclass Solution {\r\n    public int singleNumber(int[] nums) {\r\n        Stack numStack = new Stack();\r\n        Arrays.sort(nums);\r\n        for (var i = 0; i < nums.length; ++i) {\r\n            numStack.push(nums[i]);\r\n            if (i < nums.length - 1 && nums[++i] != (int) numStack.peek()) break;\r\n        }\r\n        return (int) numStack.pop();\r\n    }\r\n}",
    "javascript": "var singleNumber = function(nums) {\r\n    let s = 0; // Location of first possible suspect\r\n    for (let i = s + 1; i < nums.length; i++) {\r\n        if (nums[i] == nums[s]) { // If we found a duplicate\r\n            nums.splice(i, 1); // Remove duplicate so it won't confuse us next time we come across it\r\n            s++; // Next suspect's location\r\n            i = s; // Start of next search (i=s+1 in next loop iteration)\r\n        }\r\n    }\r\n    return nums[s];\r\n};"
  }
}
