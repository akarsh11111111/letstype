export default {
  "id": 1848,
  "name": "Minimum Distance to the Target Element",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-distance-to-the-target-element",
  "relativeDir": "M/Minimum Distance to the Target Element",
  "slug": "1848-minimum-distance-to-the-target-element",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 12,
    "python": 12,
    "javascript": 9
  },
  "languages": {
    "cpp": "class Solution{\r\npublic:\r\n    int getMinDistance(vector<int>& nums, int target, int start){\r\n        int ans = INT_MAX;\r\n        for(int i = 0; i < nums.size(); i++){\r\n            int temp = 0;\r\n            if (nums[i] == target){\r\n                temp = abs(i - start);\r\n                if (temp < ans){\r\n                    ans = temp;\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def getMinDistance(self, nums: List[int], target: int, start: int) -> int:\r\n        if nums[start] == target: return 0\r\n        left, right = start-1, start+1\r\n        N = len(nums)\r\n        while True:\r\n            if left >=0 and nums[left] == target:\r\n                return start - left\r\n            if right < N and nums[right] == target:\r\n                return right - start\r\n            left -= 1\r\n            right += 1",
    "java": "// Runtime: 2 ms (Top 8.87%) | Memory: 43.1 MB (Top 80.91%)\r\nclass Solution {\r\n    public int getMinDistance(int[] nums, int target, int start) {\r\n        int ans = Integer.MAX_VALUE;\r\n        for (int i = 0; i < nums.length; i++) {\r\n            if (nums[i] == target) {\r\n                ans = Math.min(ans, Math.abs(i - start));\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var getMinDistance = function(nums, target, start) {\r\n    let min = Infinity;\r\n    for(let i=nums.indexOf(target);i<nums.length;i++){\r\n        if(nums[i]===target){\r\n            if(Math.abs(i-start)<min) min = Math.abs(i-start);\r\n        }\r\n    }\r\n    return min;\r\n};"
  }
}
