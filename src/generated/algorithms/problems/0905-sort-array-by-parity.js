export default {
  "id": 905,
  "name": "Sort Array By Parity",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sort-array-by-parity",
  "relativeDir": "S/Sort Array By Parity",
  "slug": "0905-sort-array-by-parity",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 23,
    "python": 9,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 67.86%) | Memory: 16.80 MB (Top 16.67%)\r\n\r\nclass Solution {\r\npublic:\r\n    std::vector<int> sortArrayByParity(std::vector<int>& nums) {\r\n        std::vector<int> result;\r\n        for (int i : nums) {\r\n            if (i % 2 == 0) {\r\n                result.push_back(i);\r\n            }\r\n        }\r\n        for (int j : nums) {\r\n            if (j % 2 != 0) {\r\n                result.push_back(j);\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n};",
    "python": "# Runtime: 84 ms (Top 42.8%) | Memory: 17.10 MB (Top 53.6%)\r\n\r\nclass Solution:\r\n    def sortArrayByParity(self, A: List[int]) -> List[int]:\r\n        i, j = 0, len(A) - 1\r\n        while i < j:\r\n        \tif A[i] % 2 == 1 and A[j] % 2 == 0: A[i], A[j] = A[j], A[i]\r\n        \ti, j = i + 1 - A[i] % 2, j - A[j] % 2\r\n        return A",
    "java": "// Runtime: 1 ms (Top 100.00%) | Memory: 48.1 MB (Top 66.96%)\r\nclass Solution {\r\n\r\n    public int[] sortArrayByParity(int[] nums) {\r\n        int i = 0;\r\n        int j = 0;\r\n\r\n        while(i < nums.length){\r\n            if(nums[i] % 2 == 1){\r\n                i++;\r\n            }else{\r\n                int temp = nums[i];\r\n                nums[i] = nums[j];\r\n                nums[j] = temp;\r\n\r\n                i++;\r\n                j++;\r\n            }\r\n        }\r\n\r\n        return nums;\r\n    }\r\n}",
    "javascript": "var sortArrayByParity = function(nums) {\r\n  let even = []\r\n  let odd = []\r\n  \r\n  for(let i = 0; i < nums.length; i++){\r\n      (nums[i] % 2 === 0) ? even.push(nums[i]) : odd.push(nums[i])\r\n  }\r\n    \r\n    return [...even, ...odd]\r\n  \r\n    \r\n};"
  }
}
