export default {
  "id": 88,
  "name": "Merge Sorted Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/merge-sorted-array",
  "relativeDir": "M/Merge Sorted Array",
  "slug": "0088-merge-sorted-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 29,
    "python": 17,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 76.26%) | Memory: 9.3 MB (Top 30.17%)\r\nclass Solution {\r\npublic:\r\n    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {\r\n        vector<int> temp(n+m);\r\n        int i=0,j=0,k=0;\r\n        while(i<m && j<n){ //select smaller element from both vector\r\n            if(nums1[i]<nums2[j]){\r\n                temp[k]=nums1[i];\r\n                i++;\r\n                k++;\r\n            }\r\n            else{\r\n                temp[k]=nums2[j];\r\n                j++;\r\n                k++;\r\n            }\r\n        }\r\n        while(i<m){ //insert remaining nums1 element\r\n            temp[k]=nums1[i];\r\n            i++;\r\n            k++;\r\n        }\r\n        while(j<n){ //insert remaining nums2 element\r\n            temp[k]=nums2[j];\r\n            j++;\r\n            k++;\r\n        }\r\n        nums1=temp;\r\n        return ;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def merge(self, nums1, m, nums2, n):\r\n        # Initialize nums1's index\r\n        i = m - 1\r\n        # Initialize nums2's index\r\n        j = n - 1\r\n        # Initialize a variable k to store the last index of the 1st array...\r\n        k = m + n - 1\r\n        while j >= 0:\r\n            if i >= 0 and nums1[i] > nums2[j]:\r\n                nums1[k] = nums1[i]\r\n                k -= 1\r\n                i -= 1\r\n            else:\r\n                nums1[k] = nums2[j]\r\n                k -= 1\r\n                j -= 1",
    "java": "class Solution {\r\n    public void merge(int[] nums1, int m, int[] nums2, int n) {\r\n        // Initialize i and j to store indices of the last element of 1st and 2nd array respectively...\r\n        int i = m - 1 , j = n - 1;\r\n        // Initialize a variable k to store the last index of the 1st array...\r\n        int k = m + n - 1;\r\n        // Create a loop until either of i or j becomes zero...\r\n        while(i >= 0 && j >= 0) {\r\n            if(nums1[i] >= nums2[j]) {\r\n                nums1[k] = nums1[i];\r\n                i--;\r\n            } else {\r\n                nums1[k] = nums2[j];\r\n                j--;\r\n            }\r\n            k--;\r\n        // Either of i or j is not zero, which means some elements are yet to be merged.\r\n        // Being already in a sorted manner, append them to the 1st array in the front.\r\n        }\r\n        // While i does not become zero...\r\n        while(i >= 0)\r\n            nums1[k--] = nums1[i--];\r\n        // While j does not become zero...\r\n        while(j >= 0)\r\n            nums1[k--] = nums2[j--];\r\n        // Now 1st array has all the elements in the required sorted order...\r\n        return;\r\n    }\r\n}",
    "javascript": "// Runtime: 79 ms (Top 70.72%) | Memory: 42.3 MB (Top 41.15%)\r\nvar merge = function(nums1, m, nums2, n) {\r\n    // Initialize i and j to store indices of the last element of 1st and 2nd array respectively...\r\n    let i = m - 1 , j = n - 1;\r\n    // Initialize a variable k to store the last index of the 1st array...\r\n    let k = m + n - 1;\r\n    // Create a loop until either of i or j becomes zero...\r\n    while(i >= 0 && j >= 0) {\r\n        if(nums1[i] >= nums2[j]) {\r\n            nums1[k] = nums1[i];\r\n            i--;\r\n        } else {\r\n            nums1[k] = nums2[j];\r\n            j--;\r\n        }\r\n        k--;\r\n    // Either of i or j is not zero, which means some elements are yet to be merged.\r\n    // Being already in a sorted manner, append them to the 1st array in the front.\r\n    }\r\n    // While i does not become zero...\r\n    while(i >= 0)\r\n        nums1[k--] = nums1[i--];\r\n    // While j does not become zero...\r\n    while(j >= 0)\r\n        nums1[k--] = nums2[j--];\r\n    // Now 1st array has all the elements in the required sorted order...\r\n    return;\r\n};"
  }
}
