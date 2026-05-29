export default {
  "id": 453,
  "name": "Minimum Moves to Equal Array Elements",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-moves-to-equal-array-elements",
  "relativeDir": "M/Minimum Moves to Equal Array Elements",
  "slug": "0453-minimum-moves-to-equal-array-elements",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 14,
    "python": 3,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 84 ms (Top 19.36%) | Memory: 28.2 MB (Top 98.61%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minMoves(vector<int>& nums) {\r\n\r\n        // sorting the array to get min at the first\r\n        sort(nums.begin(), nums.end());\r\n        int cnt = 0, n = nums.size();\r\n\r\n        // Now we have to make min equal to every number and keep adding the count\r\n        for(int i = 1; i < n; i++)\r\n            cnt += nums[i] - nums[0];\r\n\r\n        return cnt;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minMoves(self, nums: List[int]) -> int:\r\n        return sum(nums)-min(nums)*len(nums)",
    "java": "class Solution {\r\n    public int minMoves(int[] nums) {\r\n        int min=Integer.MAX_VALUE;\r\n        int count=0;\r\n        for(int i:nums)\r\n            min=Math.min(i,min);\r\n        \r\n        for(int i=0;i<nums.length;i++)\r\n        {\r\n            count+=nums[i]-min;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "// Runtime: 56 ms (Top 77.88%) | Memory: 45.00 MB (Top 71.68%)\r\n\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\n/*\r\nthinking:\r\nThis problem can be reversed to think. \r\nAdd 1 to n-1 elements according to the intention of the question.\r\nIn fact, we can think of it as subtracting 1 from the remainder.\r\nAdd：[1,2,3] => [2,3,3] => [3,4,3] => [4,4,4]\r\nSubtracted：[1,2,3] =>  [1,2,2] => [1,1,2] => [1,1,1]\r\n↑ Find the smallest element first, and find the sum of the differences between all elements and the smallest element, \r\nwhich is the minimum  moves.\r\n*/\r\nvar minMoves = function(nums) {\r\n    if(nums == null || nums.length<=1) return 0;\r\n    let min = nums[0]\r\n    let sum = 0\r\n    for( i = 0;i< nums.length;i++){\r\n        sum += nums[i]\r\n        min = Math.min(min,nums[i])\r\n    }\r\n    return sum-min*nums.length\r\n};"
  }
}
