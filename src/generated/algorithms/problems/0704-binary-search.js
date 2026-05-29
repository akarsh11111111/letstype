export default {
  "id": 704,
  "name": "Binary Search",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-search",
  "relativeDir": "B/Binary Search",
  "slug": "0704-binary-search",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 24,
    "python": 17,
    "javascript": 36
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int search(vector<int>& nums, int target) {\r\n        int n = nums.size();\r\n        int jump = 5;\r\n        int p = 0;\r\n        while (jump*5 < n) jump *= 5;\r\n        while (jump > 0) {\r\n            while (p+jump < n && nums[p+jump] <= target) p += jump;\r\n            jump /= 5;\r\n        }\r\n        return (p == n || nums[p]!= target) ? -1 : p;\r\n    }\r\n};",
    "python": "# Runtime: 214 ms (Top 71.5%) | Memory: 17.81 MB (Top 65.3%)\r\n\r\nclass Solution:\r\n    def search(self, nums: List[int], target: int) -> int:\r\n        left = 0\r\n        right = len(nums)-1\r\n        \r\n        while left<=right:\r\n            mid = (left+right)//2\r\n            if nums[mid]==target:\r\n                return mid\r\n            elif nums[mid]>target:\r\n                right = mid-1\r\n            else:\r\n                left = mid+1\r\n        \r\n        return -1",
    "java": "class Solution {\r\n    public int search(int[] nums, int target) {\r\n        int l = 0;\r\n        int r = nums.length - 1;\r\n        return binarySearch(nums, l, r, target);\r\n    }\r\n    \r\n    private int binarySearch(int[] nums, int l, int r, int target) {\r\n        if (l <= r) {\r\n            int mid = (r + l) / 2;\r\n        \r\n            if (nums[mid] == target) {\r\n                return mid;\r\n            } \r\n        \r\n            if (nums[mid] < target) {\r\n                return binarySearch(nums, mid + 1, r, target);\r\n            } else {\r\n                return binarySearch(nums, l, mid - 1, target);\r\n            }\r\n        } \r\n        return -1;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @param {number} target\r\n * @return {number}\r\n */\r\nvar search = function(nums, target) {\r\n    \r\n    let low=0;\r\n    let high=nums.length-1;\r\n    \r\n    if(target<nums[0] || target>nums[high]){\r\n        return -1;\r\n    }\r\n    \r\n    while(low<=high) {\r\n        \r\n        mid=Math.floor((low+high)/2);\r\n        \r\n        if (nums[mid]==target){\r\n            return mid;\r\n        }\r\n        else{\r\n            \r\n            if(target>nums[mid]){\r\n                low=mid+1;\r\n                \r\n            }\r\n            else{\r\n                high=mid-1;\r\n            }\r\n        }\r\n    }\r\n    \r\n    return -1;\r\n    \r\n};"
  }
}
