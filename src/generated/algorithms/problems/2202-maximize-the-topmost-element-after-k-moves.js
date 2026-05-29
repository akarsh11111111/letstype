export default {
  "id": 2202,
  "name": "Maximize the Topmost Element After K Moves",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves",
  "relativeDir": "M/Maximize the Topmost Element After K Moves",
  "slug": "2202-maximize-the-topmost-element-after-k-moves",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 19,
    "python": 20,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 89 ms (Top 70.91%) | Memory: 63.80 MB (Top 73.86%)\r\n\r\nclass Solution {\r\npublic:\r\n    int maximumTop(vector<int>& nums, int k) {\r\n        int n=nums.size();\r\n        if(n==1&&(k&1)){\r\n            return -1;\r\n        }\r\n        int mxm=-1;\r\n        for(int i=0;i<n&&i<k-1;i++){\r\n            mxm=max(mxm,nums[i]);\r\n        }\r\n        if(k<n){\r\n            mxm=max(mxm,nums[k]);\r\n        }\r\n        return mxm;\r\n    }\r\n};",
    "python": "# Runtime: 498 ms (Top 63.4%) | Memory: 30.38 MB (Top 40.6%)\r\n\r\nclass Solution:\r\n    def maximumTop(self, nums: List[int], k: int) -> int:\r\n        if len(nums) == 1:\r\n            if k%2 != 0:\r\n                return -1\r\n            return nums[0]\r\n        \r\n        if k == 0:\r\n            return nums[0]\r\n        if k == len(nums):\r\n            return max(nums[:-1])\r\n        if k > len(nums):\r\n            return max(nums)\r\n        if k == 1:\r\n            return nums[1]\r\n        m = max(nums[:k-1])\r\n        m = max(m, nums[k])\r\n        return m",
    "java": "// Runtime: 1 ms (Top 100.00%) | Memory: 85.6 MB (Top 12.35%)\r\nclass Solution {\r\n    public int maximumTop(int[] nums, int k) {\r\n        int n = nums.length, max = -1;\r\n\r\n        if(n==1){\r\n            if(k%2==1) return -1;\r\n            else return nums[0];\r\n        }\r\n\r\n        if(k<n) max = nums[k];\r\n        else if(k>n) k = n+1;\r\n\r\n        for (int i = 0; i < k-1; i++) {\r\n            max = Math.max(max, nums[i]);\r\n        }\r\n        return max;\r\n    }\r\n}",
    "javascript": "var maximumTop = function(nums, k) {\r\n    const MIN = Number.MIN_SAFE_INTEGER;\r\n    const n = nums.length;\r\n    \r\n    if (k === 0) return nums[0];\r\n    if (n === 1 && k % 2 == 1) return -1; // if there is only 1 item and k is odd, then the last move always will be removing the item\r\n    if (k === 1) return nums[1];\r\n    if (k > n) return Math.max(...nums);\r\n    \r\n    let max = MIN;\r\n    \r\n    for (let i = 1; i <= k - 1; ++i) {\r\n        const num = nums[i - 1];\r\n        max = Math.max(max, num);\r\n    }\r\n   \r\n    if (k < n) return Math.max(max, nums[k]); // If there is 1 or more item than k in the array, then the two choices we have is to remove\r\n                                              // k elements which will make the nums[k] be the topmost element or removing k - 1 elements\r\n                                              // and putting the largest number from there back onto the pile.\r\n    \r\n    return max;\r\n};"
  }
}
