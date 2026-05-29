export default {
  "id": 2154,
  "name": "Keep Multiplying Found Values by Two",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/keep-multiplying-found-values-by-two",
  "relativeDir": "K/Keep Multiplying Found Values by Two",
  "slug": "2154-keep-multiplying-found-values-by-two",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 16,
    "python": 5,
    "javascript": 8
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 93.65%) | Memory: 11.00 MB (Top 32.27%)\r\n\r\nclass Solution {\r\npublic:\r\n    int solve(vector<int> &nums, int ans)\r\n    {\r\n        sort (nums.begin(), nums.end()) ; \r\n\r\n        for (auto i : nums)\r\n        {\r\n            if (ans == i)\r\n            {\r\n                return solve (nums, ans*2);\r\n            }\r\n        }\r\n        return ans ; \r\n    }\r\n\r\n    int findFinalValue(vector<int>& nums, int original) {\r\n        int ans = original ; \r\n        int result = solve (nums, ans) ; \r\n\r\n        return result ; \r\n    }\r\n};",
    "python": "class Solution:\r\n    def findFinalValue(self, nums: List[int], original: int) -> int:\r\n        while original in nums:\r\n            original *= 2\r\n        return original",
    "java": "class Solution\r\n{\r\n    public int findFinalValue(int[] nums, int original)\r\n    {\r\n        HashSet<Integer> set = new HashSet<>();\r\n        for(int i : nums)\r\n            if(i >= original)\r\n                set.add(i);\r\n        while(true)\r\n            if(set.contains(original))\r\n                original *= 2;\r\n            else\r\n                break;\r\n        return original;\r\n    }\r\n}",
    "javascript": "// Runtime: 76 ms (Top 82.37%) | Memory: 42.4 MB (Top 79.69%)\r\nvar findFinalValue = function(nums, original) {\r\n    while (nums.includes(original)) {\r\n        original = original * 2\r\n    }\r\n\r\n    return original\r\n};"
  }
}
