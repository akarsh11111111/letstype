export default {
  "id": 35,
  "name": "Search Insert Position",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/search-insert-position",
  "relativeDir": "S/Search Insert Position",
  "slug": "0035-search-insert-position",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 17,
    "python": 6,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int searchInsert(vector<int>& nums, int target) {\r\n        int ans=0;\r\n        int size=nums.size();\r\n        if(target>nums[size-1]){\r\n            return nums.size();\r\n        }\r\n        for(int i=0;i<nums.size();i++){\r\n            while(target>nums[i]){\r\n                if(target==nums[i]){\r\n                    return i; \r\n                    i++;\r\n                }\r\n                ans=i+1;\r\n                i++;\r\n            }\r\n            \r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def searchInsert(self, nums, target):\r\n        for i, num in enumerate(nums):\r\n            if num >= target:\r\n                return i\r\n        return len(nums)",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 42.90 MB (Top 78.78%)\r\n\r\nclass Solution {\r\n    public int searchInsert(int[] nums, int target) {\r\n        int start = 0;\r\n        int end = nums.length-1;\r\n\r\n        while (start <= end) {\r\n            int mid = start + (end-start)/2;\r\n            if (nums[mid] == target) return mid;\r\n            else if (nums[mid] > target) end = mid-1;\r\n            else start = mid+1;\r\n        }\r\n\r\n        return start;\r\n    }\r\n}",
    "javascript": "// Runtime: 71 ms (Top 81.32%) | Memory: 42.7 MB (Top 14.71%)\r\nvar searchInsert = function(nums, target) {\r\n    let start=0;\r\n    let end= nums.length-1;\r\n\r\n    while(start <= end) {\r\n        const mid = Math.trunc((start+end)/2);\r\n        if(nums[mid] === target) {\r\n            return mid;\r\n        }\r\n        if(nums[mid] < target) {\r\n            start = mid+1;\r\n        } else {\r\n            end = mid-1\r\n        }\r\n        if(nums[end]< target){\r\n          return end+1;\r\n        }\r\n\r\n        if(nums[start] > target){\r\n          return start;\r\n        }\r\n    }\r\n};"
  }
}
