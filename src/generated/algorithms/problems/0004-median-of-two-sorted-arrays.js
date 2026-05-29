export default {
  "id": 4,
  "name": "Median of Two Sorted Arrays",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/median-of-two-sorted-arrays",
  "relativeDir": "M/Median of Two Sorted Arrays",
  "slug": "0004-median-of-two-sorted-arrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 55,
    "python": 12,
    "javascript": 36
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    \r\n    //Merging two arrays :- \r\n    vector<int> mergeSortedArrays(vector<int>&arr1,vector<int>&arr2){\r\n        int n = arr1.size();\r\n        int m = arr2.size();\r\n        vector<int> ans(m+n);\r\n        int i = 0;\r\n        int j = 0;\r\n        int mainIndex = 0;\r\n        \r\n        while( i < n && j < m ){\r\n            if(arr1[i] <= arr2[j])ans[mainIndex++] = arr1[i++];\r\n            else ans[mainIndex++] = arr2[j++];\r\n        }\r\n        \r\n        while( i < n){\r\n            ans[mainIndex++] = arr1[i++];\r\n        }\r\n        \r\n        while( j < m){\r\n            ans[mainIndex++] = arr2[j++];\r\n        }\r\n        return ans;\r\n    }\r\n    double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {\r\n        vector<int> ans = mergeSortedArrays(nums1,nums2);\r\n        float median = 0;\r\n        int n = ans.size()-1;\r\n        \r\n        if(n%2 != 0)\r\n         median=(ans[n/2]+ans[(n/2)+1])/2.0; \r\n        else\r\n            median=ans[n/2]; \r\n        return median;\r\n        \r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def findMedianSortedArrays(self, nums1, nums2):\r\n        lis = nums1 + nums2\r\n        lis.sort()\r\n        hi = len(lis)\r\n        print(5/2)\r\n        if hi%2 == 0:\r\n            if (lis[hi/2] + lis[hi/2-1])%2 == 0:\r\n                return (lis[hi/2] + lis[hi/2-1] )/2\r\n            return (lis[hi/2] + lis[hi/2-1])/2 + 0.5\r\n        else:\r\n            return lis[hi//2]",
    "java": "// Runtime: 5 ms (Top 46.02%) | Memory: 50.6 MB (Top 18.35%)\r\n\r\nclass Solution {\r\n    public double findMedianSortedArrays(int[] nums1, int[] nums2) {\r\n        if(nums1.length==1 && nums2.length==1) return (double)(nums1[0]+nums2[0])/2.0;\r\n        int i = 0;\r\n        int j = 0;\r\n        int k = 0;\r\n        int nums[] = new int[nums1.length + nums2.length];\r\n        if(nums1.length !=0 && nums2.length != 0){\r\n          while(i < nums1.length && j < nums2.length){\r\n            if(nums1[i] < nums2[j]){\r\n                nums[k] = nums1[i];\r\n                i++;\r\n                k++;\r\n            }else{\r\n                nums[k] = nums2[j];\r\n                j++;\r\n                k++;\r\n            }\r\n          }\r\n            while(i < nums1.length){\r\n                nums[k] = nums1[i];\r\n                i++;\r\n                k++;\r\n            }\r\n             while(j < nums2.length){\r\n                nums[k] = nums2[j];\r\n                j++;\r\n                k++;\r\n            }\r\n        }\r\n        if(nums1.length==0){\r\n            for(int h: nums2){\r\n                nums[k] = h;\r\n                k++;\r\n            }\r\n        }\r\n\r\n        if(nums2.length==0){\r\n            for(int d : nums1){\r\n                nums[k] = d;\r\n                k++;\r\n            }\r\n        }\r\n\r\n        int mid = (nums.length / 2);\r\n\r\n        if (nums.length % 2 == 0) {\r\n            return ((double) nums[mid] + (double) nums[mid - 1]) / 2.0;\r\n        } else {\r\n            return nums[mid];\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 79 ms (Top 92.6%) | Memory: 46.70 MB (Top 75.57%)\r\n\r\nvar findMedianSortedArrays = function(nums1, nums2) {\r\n    if (nums1.length > nums2.length) {\r\n        [nums1, nums2] = [nums2, nums1];\r\n    }\r\n    \r\n    const m = nums1.length;\r\n    const n = nums2.length;\r\n    let low = 0, high = m;\r\n    \r\n    while (low <= high) {\r\n        const partitionX = Math.floor((low + high) / 2);\r\n        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;\r\n        \r\n        const maxX = (partitionX === 0) ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];\r\n        const maxY = (partitionY === 0) ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1];\r\n        \r\n        const minX = (partitionX === m) ? Number.MAX_SAFE_INTEGER : nums1[partitionX];\r\n        const minY = (partitionY === n) ? Number.MAX_SAFE_INTEGER : nums2[partitionY];\r\n        \r\n        if (maxX <= minY && maxY <= minX) {\r\n            if ((m + n) % 2 === 0) {\r\n                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;\r\n            } else {\r\n                return Math.max(maxX, maxY);\r\n            }\r\n        } else if (maxX > minY) {\r\n            high = partitionX - 1;\r\n        } else {\r\n            low = partitionX + 1;\r\n        }\r\n    }\r\n    \r\n    throw new Error(\"Input arrays are not sorted.\");\r\n};"
  }
}
