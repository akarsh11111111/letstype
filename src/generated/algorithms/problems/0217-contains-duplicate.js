export default {
  "id": 217,
  "name": "Contains Duplicate",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/contains-duplicate",
  "relativeDir": "C/Contains Duplicate",
  "slug": "0217-contains-duplicate",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 13,
    "python": 5,
    "javascript": 25
  },
  "languages": {
    "cpp": "// Runtime: 116 ms (Top 79.99%) | Memory: 46.6 MB (Top 80.24%)\r\nclass Solution {\r\npublic:\r\n    bool containsDuplicate(vector<int>& nums) {\r\n        sort(nums.begin(), nums.end());\r\n        int n = nums.size();\r\n        for (int i=0; i<n-1; i++){\r\n            if (nums[i]==nums[i+1])\r\n        return true;\r\n            }\r\n        return false;\r\n\r\n    }\r\n};",
    "python": "# Runtime: 714 ms (Top 44.74%) | Memory: 26.1 MB (Top 5.18%)\r\n\r\nclass Solution:\r\n    def containsDuplicate(self, nums: List[int]) -> bool:\r\n        return len(nums) != len(set(nums))",
    "java": "// Runtime: 19 ms (Top 27.66%) | Memory: 57.30 MB (Top 21.08%)\r\n\r\nclass Solution {\r\n    public boolean containsDuplicate(int[] nums) {\r\n        Arrays.sort(nums);\r\n        int n = nums.length;\r\n        for (int i = 1; i < n; i++) {\r\n            if (nums[i] == nums[i - 1])\r\n                return true;\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "var containsDuplicate = function(nums) {\r\n    if(nums.length <= 1) return false;\r\n    let cache = {};\r\n    let mid = Math.floor(nums.length /2)\r\n    let left = mid -1;\r\n    let right  = mid;\r\n    while(left >= 0 || right < nums.length) {\r\n        if(nums[left] === nums[right]) {\r\n            return true;\r\n        };\r\n        if(cache[nums[left]]){\r\n            return true\r\n        } else {\r\n            cache[nums[left]] = true; \r\n        }\r\n        if(cache[nums[right]]){\r\n            return true;\r\n        } else{\r\n            cache[nums[right]] = true;\r\n        }\r\n        left--;\r\n        right++;\r\n    }\r\n    return false;\r\n};"
  }
}
