export default {
  "id": 908,
  "name": "Smallest Range I",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/smallest-range-i",
  "relativeDir": "S/Smallest Range I",
  "slug": "0908-smallest-range-i",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 9,
    "java": 19,
    "python": 7,
    "javascript": 6
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int smallestRangeI(vector<int>& nums, int k) {\r\n        int mx = *max_element(nums.begin(), nums.end());\r\n        int mn = *min_element(nums.begin(), nums.end());\r\n        \r\n        return max(0, (mx-mn-2*k));\r\n    }\r\n};",
    "python": "// Runtime: 156 ms (Top 5.06%) | Memory: 18.40 MB (Top 7.47%)\r\n\r\nclass Solution:\r\n    def smallestRangeI(self, A: List[int], K: int) -> int:\r\n        maxi = max(A)\r\n        mini = min(A)\r\n        return max(0, maxi-K-mini-K)",
    "java": "// Runtime: 4 ms (Top 41.38%) | Memory: 50.1 MB (Top 6.90%)\r\n\r\nclass Solution {\r\n    public int smallestRangeI(int[] nums, int k) {\r\n        if (nums.length == 1)\r\n            return 0;\r\n\r\n        int min = Integer.MAX_VALUE;\r\n        int max = Integer.MIN_VALUE;\r\n\r\n        for (int num: nums) {\r\n            min = Math.min(min, num);\r\n            max = Math.max(max, num);\r\n        }\r\n        int diff = max - min;\r\n\r\n        return Math.max(0, diff - 2*k);\r\n    }\r\n}",
    "javascript": "// Runtime: 90 ms (Top 57.43%) | Memory: 43.8 MB (Top 84.16%)\r\nvar smallestRangeI = function(nums, k) {\r\n    let max = Math.max(...nums);\r\n    let min = Math.min(...nums);\r\n    return Math.max(0, max - min- 2*k)\r\n};"
  }
}
