export default {
  "id": 525,
  "name": "Contiguous Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/contiguous-array",
  "relativeDir": "C/Contiguous Array",
  "slug": "0525-contiguous-array",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "python": 17,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findMaxLength(vector<int>& nums) {\r\n        unordered_map<int,int> mp; mp[0]=-1;\r\n        int sum = 0,longest_subarray = 0;\r\n        for(int i = 0; i < nums.size(); i++)\r\n        {\r\n            sum += nums[i] == 0 ? - 1 : 1;    \r\n            if(mp.find(sum) != mp.end())\r\n            {\r\n                if(longest_subarray < i - mp[sum])\r\n                {\r\n                    longest_subarray = i - mp[sum];\r\n                }\r\n            }\r\n            else\r\n            {\r\n                mp[sum] = i;\r\n            }\r\n        }\r\n        return longest_subarray;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findMaxLength(self, nums: List[int]) -> int:\r\n        # dictionary\r\n        prefixSum = {0: -1}\r\n        total = 0\r\n        maxlength = 0\r\n        \r\n        for index, value in enumerate(nums):\r\n            if value == 0:\r\n                total -= 1\r\n            else:\r\n                total += 1\r\n            if total not in prefixSum.keys():\r\n                prefixSum[total] = index\r\n            else:\r\n                maxlength = max(maxlength, index-prefixSum[total])        \r\n        return maxlength",
    "javascript": "// Runtime: 142 ms (Top 79.05%) | Memory: 50.5 MB (Top 60.95%)\r\nvar findMaxLength = function(nums) {\r\n    const hash = new Map([[0, -1]]);\r\n    let result = sum = 0;\r\n\r\n    nums.forEach((num, index) => {\r\n        sum += num === 0 ? -1 : 1;\r\n        hash.has(sum)\r\n            ? result = Math.max(result, index - hash.get(sum))\r\n            : hash.set(sum, index);\r\n    });\r\n\r\n    return result;\r\n};"
  }
}
