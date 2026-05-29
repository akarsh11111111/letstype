export default {
  "id": 1526,
  "name": "Minimum Number of Increments on Subarrays to Form a Target Array",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array",
  "relativeDir": "M/Minimum Number of Increments on Subarrays to Form a Target Array",
  "slug": "1526-minimum-number-of-increments-on-subarrays-to-form-a-target-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 21,
    "python": 8,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minNumberOperations(vector<int>& target) {\r\n        int n=target.size();\r\n        int pre=0, cnt=0;\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            if(target[i]>pre)\r\n            cnt+=target[i]-pre;\r\n            pre=target[i];\r\n        }\r\n        return cnt;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minNumberOperations(self, nums: List[int]) -> int:\r\n        res=nums[0]\r\n        prev=nums[0]\r\n        for i in range(1,len(nums)):\r\n            res += max(0,nums[i]-prev)\r\n            prev=nums[i]\r\n        return res",
    "java": "// Runtime: 3 ms (Top 98.94%) | Memory: 51.4 MB (Top 94.35%)\r\n// Imagine 3 cases\r\n// Case 1. [3,2,1], we need 3 operations.\r\n// Case 2. [1,2,3], we need 3 operations.\r\n// Case 3. [3,2,1,2,3], we need 5 operations.\r\n// What we need to add is actually the diff (cur - prev)\r\n// Time complexity: O(N)\r\n// Space complexity: O(1)\r\nclass Solution {\r\n    public int minNumberOperations(int[] target) {\r\n        int res = 0;\r\n        int prev = 0;\r\n        for (int cur : target) {\r\n            if (cur > prev) {\r\n                res += cur - prev;\r\n            }\r\n            prev = cur;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 140 ms (Top 40.00%) | Memory: 50.8 MB (Top 90.00%)\r\nvar minNumberOperations = function(target) {\r\n    let res = target[0];\r\n    for(let g=1; g<target.length; g++){\r\n        if(target[g] > target[g-1]){\r\n            res = res + (target[g] - target[g-1]);\r\n        }\r\n        // for target[g] < target[g-1] we need not worry as its already been taken care by previous iterations\r\n    }\r\n    return res;\r\n};"
  }
}
