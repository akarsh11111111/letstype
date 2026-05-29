export default {
  "id": 462,
  "name": "Minimum Moves to Equal Array Elements II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii",
  "relativeDir": "M/Minimum Moves to Equal Array Elements II",
  "slug": "0462-minimum-moves-to-equal-array-elements-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 11,
    "python": 17,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 13 ms (Top 41.4%) | Memory: 11.78 MB (Top 90.0%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minMoves2(vector<int>& nums) {\r\n        int result = 0, length = nums.size();\r\n        sort(nums.begin(), nums.end());\r\n        for (int i = 0; i < length; i++) {\r\n            int median = length / 2;\r\n            result += abs(nums[i] - nums[median]);\r\n        }\r\n        return result;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minMoves2(self, nums: List[int]) -> int:\r\n        \r\n        n=len(nums)\r\n        nums.sort()\r\n        \r\n        if n%2==1:\r\n            median=nums[n//2]\r\n        else:\r\n            median = (nums[n//2 - 1] + nums[n//2]) // 2\r\n        \r\n        ans=0\r\n        \r\n        for val in nums:\r\n            ans+=abs(val-median)\r\n        \r\n        return ans",
    "java": "class Solution {\r\n    public int minMoves2(int[] nums) {\r\n        Arrays.sort(nums);\r\n        int idx=(nums.length-1)/2;\r\n        int sum=0;\r\n        for(int i=0;i<nums.length;i++){\r\n            sum+=Math.abs(nums[i]-nums[idx]);\r\n        }\r\n        return sum;\r\n    }\r\n}",
    "javascript": "// Runtime: 55 ms (Top 86.29%) | Memory: 43.80 MB (Top 90.32%)\r\n\r\nvar minMoves2 = function(nums) {\r\n    // Sort the array low to high\r\n    nums.sort(function(a, b) { return a-b;});\r\n    let i = 0;\r\n    let j = nums.length - 1;\r\n    let res = 0;\r\n    /**\r\n     * Sum up the difference between the next highest and lowest numbers. Regardless of what number we wish to move towards, the number of moves is the same.\r\n     */\r\n    while (i < j){\r\n        res += nums[j] - nums[i];\r\n        i++;\r\n        j--;\r\n    }\r\n    return res;\r\n};"
  }
}
