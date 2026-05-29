export default {
  "id": 81,
  "name": "Search in Rotated Sorted Array II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/search-in-rotated-sorted-array-ii",
  "relativeDir": "S/Search in Rotated Sorted Array II",
  "slug": "0081-search-in-rotated-sorted-array-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 53,
    "java": 39,
    "python": 14,
    "javascript": 7
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 85.97%) | Memory: 14.40 MB (Top 23.6%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool search(vector<int>& nums, int target) {\r\n        \r\n        if( nums[0] == target or nums.back() == target ) return true; \r\n        // this line is redundant it reduces only the worst case when all elements are same to O(1)\r\n        \r\n        const int n = nums.size();\r\n        int l = 0 , h = n-1;\r\n        while( l+1 < n and nums[l] == nums[l+1]) l++;\r\n\r\n        // if all elements are same\r\n        if( l == n-1){\r\n            if( nums[0] == target ) return true;\r\n            else return false;\r\n        }\r\n        \r\n        // while last element is equal to 1st element\r\n        while( h >= 0 and nums[h] == nums[0] ) h--;\r\n        int start = l , end = h;\r\n        \r\n        // find the point of pivot ie from where the rotation starts\r\n        int pivot = -1;\r\n        while( l <= h ){\r\n            int mid = l + (h-l)/2;\r\n            if( nums[mid] >= nums[0] ) l = mid+1;\r\n            else {\r\n                pivot = mid;\r\n                h = mid-1;\r\n            }\r\n        }\r\n        \r\n        \r\n        if( pivot == -1 ) l = start , h = end; // if no pivot exits then search space is from start -e end\r\n        else {\r\n            if( target > nums[end] ) l = start , h = pivot-1; // search space second half\r\n            else l = pivot , h = end; // search space first half\r\n        }\r\n        \r\n        // normal binary search\r\n        while ( l <= h ){\r\n            int mid = l + (h-l)/2;\r\n            if( nums[mid] > target ) h = mid-1;\r\n            else if( nums[mid] < target ) l = mid+1;\r\n            else return true;\r\n        }\r\n        \r\n        return false;\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def search(self, nums: List[int], target: int) -> bool:\r\n        nums.sort()\r\n        low=0\r\n        high=len(nums)-1\r\n        while low<=high:\r\n            mid=(low+high)//2\r\n            if nums[mid]==target:\r\n                return True\r\n            elif nums[mid]>target:\r\n                high=mid-1\r\n            else:\r\n                low=mid+1\r\n        return False",
    "java": "class Solution {\r\n    public boolean search(int[] nums, int target) {\r\n   if (nums == null || nums.length == 0) return false;\r\n    \r\n   int left = 0, right = nums.length-1;\r\n    int start = 0;\r\n\r\n//1. find index of the smallest element\r\n    while(left < right) {\r\n         while (left < right && nums[left] == nums[left + 1])\r\n                ++left;\r\n         while (left < right && nums[right] == nums[right - 1])\r\n                --right;\r\n        int mid = left + (right-left)/2;\r\n        if (nums[mid] > nums[right]) {\r\n            left = mid +1;\r\n        } else right = mid;\r\n    }\r\n    \r\n//2. figure out in which side our target lies\r\n    start = left;\r\n    left = 0;\r\n    right = nums.length-1;\r\n    if (target >= nums[start] && target <= nums[right])\r\n        left = start;\r\n    else right = start;\r\n    \r\n//3. Run normal binary search in sorted half.\r\n    while(left <= right) {\r\n        int mid = left + (right - left)/2;\r\n        if (nums[mid] == target) return true;\r\n        \r\n        if (nums[mid] > target) right = mid-1;\r\n        else left = mid + 1;\r\n    }\r\n    \r\n    return false;\r\n}\r\n}",
    "javascript": "// Runtime: 61 ms (Top 98.58%) | Memory: 42.3 MB (Top 80.97%)\r\nvar search = function(nums, target) {\r\n    let found = nums.findIndex(c=> c==target);\r\n    if(found === -1) return false\r\n    else\r\n        return true\r\n};"
  }
}
