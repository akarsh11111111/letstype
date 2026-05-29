export default {
  "id": 1685,
  "name": "Sum of Absolute Differences in a Sorted Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array",
  "relativeDir": "S/Sum of Absolute Differences in a Sorted Array",
  "slug": "1685-sum-of-absolute-differences-in-a-sorted-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 17,
    "python": 8,
    "javascript": 8
  },
  "languages": {
    "cpp": "// Runtime: 154 ms (Top 81.76%) | Memory: 83.2 MB (Top 78.51%)\r\nclass Solution {\r\npublic:\r\n    vector<int> getSumAbsoluteDifferences(vector<int>& nums) {\r\n        vector<int>ans(nums.size(),0);\r\n        for(int i = 1;i<nums.size();i++)\r\n            ans[0]+=(nums[i]-nums[0]);\r\n\r\n        for(int j = 1;j<nums.size();j++)\r\n            ans[j] = ans[j-1]+(nums[j]-nums[j-1])*j-(nums[j]-nums[j-1])*(nums.size()-j);\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 733 ms (Top 62.5%) | Memory: 31.64 MB (Top 85.1%)\r\n\r\nfrom itertools import accumulate \r\n\r\nclass Solution(object):\r\n    def getSumAbsoluteDifferences(self, nums):\r\n        total, n = sum(nums), len(nums) #for i, ri in zip(nums, reversed(nums)): pref.append(pref[-1] + i)\r\n        return [(((i+1) * num) - pref) + ((total-pref) - ((n-i-1) * num)) for (i, num), pref in zip(enumerate(nums), list(accumulate(nums)))]",
    "java": "// Runtime: 26 ms (Top 7.55%) | Memory: 110.7 MB (Top 79.24%)\r\nclass Solution {\r\n    public int[] getSumAbsoluteDifferences(int[] nums) {\r\n        int n = nums.length;\r\n        int[] res = new int[n];\r\n        int sumBelow = 0;\r\n        int sumTotal = Arrays.stream(nums).sum();\r\n\r\n        for (int i = 0; i < n; i++) {\r\n            int num = nums[i];\r\n            sumTotal -= num;\r\n            res[i] = sumTotal - (n - i - 1) * num + i * num - sumBelow;\r\n            sumBelow += num;\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var getSumAbsoluteDifferences = function(nums) {\r\n    const N = nums.length;\r\n    const ans = new Array(N);\r\n    ans[0] = nums.reduce((a, b) => a + b, 0) - (N * nums[0]);\r\n    for (let i = 1; i < N; i++)\r\n        ans[i] = ans[i - 1] + (nums[i] - nums[i - 1]) * i - (nums[i] - nums[i - 1]) * (N - i); \r\n    return ans;\r\n};"
  }
}
