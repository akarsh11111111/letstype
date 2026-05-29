export default {
  "id": 2321,
  "name": "Maximum Score Of Spliced Array",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-score-of-spliced-array",
  "relativeDir": "M/Maximum Score Of Spliced Array",
  "slug": "2321-maximum-score-of-spliced-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 29,
    "python": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maximumsSplicedArray(vector<int>& nums1, vector<int>& nums2) {\r\n        return max(MaxValOfA1(nums1,nums2), MaxValOfA1(nums2,nums1));\r\n    }\r\n    \r\n    int MaxValOfA1(vector<int>& a1, vector<int>& a2) {\r\n        int n = a1.size();\r\n        int sum = 0;\r\n        for(auto &i:a1) sum+=i;\r\n        int L=0, R=0, max_inc=0;\r\n\t\t//max_inc is maximum positive contribution of a1\r\n        int acc1 = 0, acc2 =0;\r\n        while(L<n && R<n) {\r\n            acc1 += a1[R];\r\n            acc2 += a2[R];\r\n            max_inc = max(max_inc, acc2-acc1);\r\n            if(acc1>=acc2) {\r\n                L=R+1;\r\n                R=L;\r\n                acc1=0;\r\n                acc2=0;\r\n            } else {\r\n                R=R+1;\r\n            }\r\n        }\r\n        return sum + max_inc;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximumsSplicedArray(self, nums1: List[int], nums2: List[int]) -> int:\r\n        n = len(nums1)\r\n\t\tnums3 = [0]*n\r\n\t\tnums4 = [0]*n\r\n\t\tfor i in range(n):\r\n\t\t\tnums3[i] = nums1[i]-nums2[i]\r\n\t\t\tnums4[i] = nums2[i]-nums1[i]\r\n\t\tmaxsubseq1 = maxsubseq2 = 0\r\n\t\tv1 = v2 = 0 \r\n\t\t# use kadane algorithm to solve this max subseq problem\r\n\t\tfor i in range(n):\r\n\t\t\tmaxsubseq1 = max(maxsubseq1 + nums3[i], nums3[i])\r\n\t\t\tmaxsubseq2 = max(maxsubseq2 + nums4[i], nums4[i])\r\n\t\t\tv1 = max(v1, maxsubseq1)\r\n\t\t\tv2 = max(v2, maxsubseq2)\r\n\t\t_sum1 = sum(nums1)\r\n\t\t_sum2 = sum(nums2)\r\n\t\treturn max(_sum1 + v2, _sum2 + v1)",
    "java": "class Solution {\r\n\r\n    public int maximumsSplicedArray(int[] nums1, int[] nums2) {\r\n        int ans = 0, sum1 = 0, sum2 = 0;\r\n\r\n        for (int i : nums1) sum1 += i;\r\n        for (int i : nums2) sum2 += i;\r\n\r\n        ans = Math.max(sum1, sum2);\r\n\r\n        int first = 0, second = 0, max1 = 0, max2 = 0;\r\n\r\n        for (int i = 0; i < nums1.length; i++) {\r\n            first += (nums2[i] - nums1[i]);\r\n            second += (nums1[i] - nums2[i]);\r\n            \r\n            max1 = Math.max(max1, first);\r\n            max2 = Math.max(max2, second);\r\n            \r\n            if (first < 0) first = 0;\r\n            if (second < 0) second = 0;\r\n        }\r\n\r\n        ans = Math.max(ans, sum1 + max1);\r\n        ans = Math.max(ans, sum2 + max2);\r\n\r\n        return ans;\r\n    }\r\n}"
  }
}
