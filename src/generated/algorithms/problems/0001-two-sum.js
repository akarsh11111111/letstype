export default {
  "id": 1,
  "name": "Two Sum",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/two-sum",
  "relativeDir": "T/Two Sum",
  "slug": "0001-two-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 19,
    "python": 10,
    "javascript": 21
  },
  "languages": {
    "cpp": "// Runtime: 245 ms (Top 44.51%) | Memory: 10.50 MB (Top 77.03%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> twoSum(vector<int>& nums, int target) {\r\n        int n = nums.size();\r\n        for (int i = 0; i < n - 1; i++) {\r\n            for (int j = i + 1; j < n; j++) {\r\n                if (nums[i] + nums[j] == target) {\r\n                    return {i, j};\r\n                }\r\n            }\r\n        }\r\n        return {}; // No solution found\r\n    }\r\n};",
    "python": "// Runtime: 2571 ms (Top 18.27%) | Memory: 17.10 MB (Top 86.21%)\r\n\r\nclass Solution:\r\n    def twoSum(self, nums: List[int], target: int) -> List[int]:\r\n        n = len(nums)\r\n        for i in range(n - 1):\r\n            for j in range(i + 1, n):\r\n                if nums[i] + nums[j] == target:\r\n                    return [i, j]\r\n        return []  # No solution found",
    "java": "class Solution {\r\n    public int[] twoSum(int[] nums, int target) {\r\n        int[] answer = new int[2];\r\n\t\t// Two for loops for selecting two numbers and check sum equal to target or not\r\n\t\t\r\n        for(int i = 0; i < nums.length; i++){\r\n            for(int j = i+1; j < nums.length; j++) {\r\n\t\t\t // j = i + 1; no need to check back elements it covers in i;\r\n                if(nums[i] + nums[j] == target) {\r\n\t\t\t\t// Check sum == target or not\r\n                    answer[0] = i;\r\n                    answer[1] = j;\r\n                    return answer;\r\n                }\r\n            } \r\n        }\r\n          return null;\r\n    }\r\n}",
    "javascript": "// Runtime: 182 ms (Top 28.86%) | Memory: 42.3 MB (Top 74.71%)\r\n/**\r\n * @param {number[]} nums\r\n * @param {number} target\r\n * @return {number[]}\r\n */\r\nvar twoSum = function(nums, target) {\r\n    var sol = [];\r\n    var found = 0;\r\n    for(let i = 0; i < nums.length; i ++) {\r\n        for(let j = i + 1; j < nums.length; j ++) {\r\n            if(nums[i] + nums[j] === target) {\r\n                sol.push(i, j);\r\n                found = 1;\r\n                break;\r\n            }\r\n        }\r\n        if(found == 1) return sol;\r\n    }\r\n    return sol;\r\n};"
  }
}
