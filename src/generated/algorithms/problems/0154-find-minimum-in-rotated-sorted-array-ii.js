export default {
  "id": 154,
  "name": "Find Minimum in Rotated Sorted Array II",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii",
  "relativeDir": "F/Find Minimum in Rotated Sorted Array II",
  "slug": "0154-find-minimum-in-rotated-sorted-array-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 20,
    "python": 3,
    "javascript": 33
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 76.74%) | Memory: 12.1 MB (Top 99.93%)\r\nclass Solution {\r\npublic:\r\n    int findMin(vector<int>& nums) {\r\n        int l=0,h=nums.size()-1;\r\n        while(l<h){\r\n            int m=l+(h-l)/2;\r\n            if(nums[m]<nums[h]) h=m;\r\n            else if(nums[m]>nums[h]) l=m+1;\r\n            else h--;\r\n        }\r\n        return nums[h];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findMin(self, nums: List[int]) -> int:\r\n        return min(nums)",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 43.6 MB (Top 61.18%)\r\nclass Solution {\r\n    public int findMin(int[] nums) {\r\n        int l = 0;\r\n        int h = nums.length - 1;\r\n        while (l < h) {\r\n            while (l < h && nums[l] == nums[l + 1])\r\n                ++l;\r\n            while (l < h && nums[h] == nums[h - 1])\r\n                --h;\r\n            int mid = l + (h - l) / 2;\r\n            if (nums[mid] > nums[h]) { // smaller elements are in the right side\r\n                l = mid + 1;\r\n            } else {\r\n                h = mid;\r\n            }\r\n        }\r\n        return nums[l];\r\n    }\r\n}",
    "javascript": "// Runtime: 66 ms (Top 92.37%) | Memory: 42.5 MB (Top 45.04%)\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar findMin = function(nums) {\r\n    let min = Infinity;\r\n    let l = 0;\r\n    let r = nums.length - 1;\r\n    while (l <= r) {\r\n        const m = Math.floor((l + r) / 2);\r\n\r\n        // Eliminate dupes ......................... only difference from #153\r\n        while (l < m && nums[l] === nums[m]) l++;\r\n        while (r > m && nums[r] === nums[m]) r--;\r\n        // .........................................\r\n\r\n        // locate the sorted side, the opposite side has the break point\r\n        // min should be on the side that has the break point, so continue search on that side\r\n        if (nums[l] <= nums[m]) {\r\n            // left side is sorted (or l & m are the same index)\r\n            // brake is on right side\r\n            min = Math.min(min, nums[l]);\r\n            l = m + 1;\r\n        } else {\r\n            // right side is sorted\r\n            // break is on left side\r\n            min = Math.min(min, nums[m]);\r\n            r = m - 1;\r\n        }\r\n    }\r\n    return min;\r\n};"
  }
}
