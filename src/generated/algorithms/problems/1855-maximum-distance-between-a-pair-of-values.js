export default {
  "id": 1855,
  "name": "Maximum Distance Between a Pair of Values",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-distance-between-a-pair-of-values",
  "relativeDir": "M/Maximum Distance Between a Pair of Values",
  "slug": "1855-maximum-distance-between-a-pair-of-values",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 26,
    "python": 10,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 380 ms (Top 17.33%) | Memory: 98.4 MB (Top 73.73%)\r\nclass Solution {\r\npublic:\r\n    int maxDistance(vector<int>& nums1, vector<int>& nums2) {\r\n\r\n        reverse(nums2.begin(),nums2.end());\r\n        int ans = 0;\r\n        for(int i=0;i<nums1.size();++i){\r\n            auto it = lower_bound(nums2.begin(),nums2.end(),nums1[i]) - nums2.begin(); //Finds first element greater than or equal to nums1[i]\r\n            int j = nums2.size() - 1 - it; //Index of the found element in the original array\r\n            if(i<=j) ans = max(ans,j-i); //Update distance\r\n        }\r\n        return ans;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxDistance(self, n1: List[int], n2: List[int]) -> int:\r\n        i = j = res = 0\r\n        while i < len(n1) and j < len(n2):\r\n            if n1[i] > n2[j]:\r\n                i += 1\r\n            else:\r\n                res = max(res, j - i)\r\n                j += 1\r\n        return res",
    "java": "// Runtime: 57 ms (Top 16.02%) | Memory: 101.7 MB (Top 80.40%)\r\nclass Solution {\r\n    public int maxDistance(int[] nums1, int[] nums2) {\r\n        int max = 0;\r\n        for (int i = 0; i < nums1.length; i++) {\r\n            int r = nums2.length - 1;\r\n            int l = i;\r\n            int m = i;\r\n            while (l <= r) {\r\n                m = l + (r - l) / 2;\r\n                if (nums1[i] > nums2[m]) {\r\n                    r = m - 1;\r\n                } else if (nums1[i] == nums2[m]) {\r\n                    l = m + 1;\r\n                } else {\r\n                    l = m + 1;\r\n                }\r\n            }\r\n            if (r < 0) {\r\n                continue;\r\n            }\r\n            max = Math.max(max, r - i);\r\n        }\r\n        return max;\r\n    }\r\n}",
    "javascript": "var maxDistance = function(nums1, nums2) {\r\n    let i = 0, j = 0;\r\n    \r\n    let ans = 0;\r\n    while (i < nums1.length && j < nums2.length) {\r\n        // maintain the i <= j invariant\r\n        j = Math.max(j, i);\r\n        \r\n        // we want to maximize j so move it forward whenever possible\r\n        while (nums1[i] <= nums2[j]) {\r\n            ans = Math.max(ans, j - i);\r\n            j++;\r\n        }\r\n        \r\n        // we want to minimize i so move it forward only to maintain invariants\r\n        i++;\r\n    }\r\n    \r\n    return ans;\r\n};"
  }
}
