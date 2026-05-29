export default {
  "id": 1537,
  "name": "Get the Maximum Score",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/get-the-maximum-score",
  "relativeDir": "G/Get the Maximum Score",
  "slug": "1537-get-the-maximum-score",
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
    "python": 25,
    "javascript": 38
  },
  "languages": {
    "cpp": "// Runtime: 84 ms (Top 60.79%) | Memory: 56.00 MB (Top 84.58%)\r\n\r\nclass Solution {\r\npublic:\r\n    int maxSum(vector<int>& nums1, vector<int>& nums2) {\r\n        int mod=1e9+7;\r\n        long long int ans=0, sum1=0, sum2=0;\r\n        int i=0, j=0;\r\n        while(i<nums1.size() and j<nums2.size())\r\n        {\r\n            if(nums1[i] < nums2[j])\r\n                sum1 += nums1[i++]; \r\n            else if(nums1[i] > nums2[j])\r\n                sum2 += nums2[j++];\r\n            else\r\n            {\r\n                ans += nums1[i] + max(sum1, sum2);\r\n                i++;\r\n                j++;\r\n                sum1=0;\r\n                sum2=0;\r\n            }\r\n        }\r\n        while(i<nums1.size())\r\n            sum1 += nums1[i++];\r\n        while(j<nums2.size())\r\n            sum2 += nums2[j++];\r\n        ans += max(sum1, sum2);\r\n        ans = ans%mod;\r\n        return (int)ans;\r\n    }\r\n};",
    "python": "from itertools import accumulate\r\nclass Solution:\r\n    def maxSum(self, nums1: List[int], nums2: List[int]) -> int:\r\n        acc1 = list(accumulate(nums1, initial = 0))\r\n        acc2 = list(accumulate(nums2, initial = 0))\r\n        i, j = len(nums1)-1, len(nums2)-1\r\n        previ, prevj = len(nums1), len(nums2)\r\n        prev_maxscore = 0\r\n        while i >= 0 and j >= 0:\r\n            while i >= 0 and j >= 0 and nums1[i] < nums2[j]:\r\n                j -= 1\r\n            if i >= 0 and j >= 0 and nums1[i] == nums2[j]:\r\n                prev_maxscore += max(acc1[previ]-acc1[i], acc2[prevj]-acc2[j])\r\n                previ, prevj = i, j\r\n                i -= 1\r\n                j -= 1\r\n            while i >= 0 and j >= 0 and nums2[j] < nums1[i]:\r\n                i -= 1\r\n            if  i >= 0 and j >= 0 and nums1[i] == nums2[j]:\r\n                prev_maxscore += max(acc1[previ]-acc1[i], acc2[prevj]-acc2[j])\r\n                previ, prevj = i, j\r\n                i -= 1\r\n                j -= 1\r\n        prev_maxscore += max(acc1[previ]-acc1[0], acc2[prevj]-acc2[0])\r\n        return prev_maxscore % (10**9 + 7)",
    "java": "class Solution {\r\n    public int maxSum(int[] nums1, int[] nums2) {\r\n        long currSum = 0, sum1 = 0, sum2 = 0;\r\n        int i = 0;\r\n        int j = 0;\r\n        while(i < nums1.length && j < nums2.length){\r\n            if(nums1[i] == nums2[j]) {\r\n                currSum += Math.max(sum1, sum2) + nums2[j];\r\n                sum1 = 0;\r\n                sum2 = 0;\r\n                i++;\r\n                j++;\r\n            }\r\n            else if(nums1[i] < nums2[j]){\r\n                sum1 += nums1[i++];\r\n            } else {\r\n                sum2 += nums2[j++];\r\n            }\r\n        }\r\n       \r\n        while(i < nums1.length){\r\n            sum1 += nums1[i++];\r\n        }\r\n        while(j < nums2.length){\r\n            sum2 += nums2[j++];\r\n        }\r\n        return (int)((currSum + Math.max(sum1, sum2)) % 1000000007);\r\n    }\r\n}",
    "javascript": "// Runtime: 127 ms (Top 64.29%) | Memory: 49.7 MB (Top 100.00%)\r\n\r\n/**\r\n * @param {number[]} nums1\r\n * @param {number[]} nums2\r\n * @return {number}\r\n */\r\nvar maxSum = function(nums1, nums2) {\r\n    let MODULO_AMOUNT = 10 ** 9 + 7;\r\n    let result = 0;\r\n    let ptr1 = 0;\r\n    let ptr2 = 0;\r\n    let n1 = nums1.length;\r\n    let n2 = nums2.length;\r\n    let section_sum1 = 0;\r\n    let section_sum2 = 0;\r\n    while(ptr1 < n1 || ptr2 < n2){\r\n        if(ptr1 < n1 && ptr2 < n2 && nums1[ptr1] == nums2[ptr2]){\r\n            result += Math.max(section_sum1, section_sum2) + nums1[ptr1];\r\n            result %= MODULO_AMOUNT;\r\n            section_sum1 = 0;\r\n            section_sum2 = 0;\r\n            ptr1 += 1;\r\n            ptr2 += 1;\r\n            continue;\r\n        }\r\n\r\n        if(ptr1 == n1 || (ptr2 != n2 && nums1[ptr1] > nums2[ptr2])){\r\n            section_sum2 += nums2[ptr2];\r\n            ptr2 += 1;\r\n        }else{\r\n            section_sum1 += nums1[ptr1];\r\n            ptr1 += 1;\r\n        }\r\n    }\r\n    result += Math.max(section_sum1, section_sum2);\r\n    return result % MODULO_AMOUNT;\r\n};"
  }
}
