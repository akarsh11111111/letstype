export default {
  "id": 2134,
  "name": "Minimum Swaps to Group All 1's Together II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together-ii",
  "relativeDir": "M/Minimum Swaps to Group All 1's Together II",
  "slug": "2134-minimum-swaps-to-group-all-1-s-together-ii",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "python": 13,
    "javascript": 29
  },
  "languages": {
    "cpp": "// Runtime: 229 ms (Top 10.78%) | Memory: 80.5 MB (Top 44.03%)\r\nclass Solution {\r\npublic:\r\n    int minSwaps(vector<int>& nums) {\r\n        int n = nums.size();\r\n        int ones = 0; // total no. of ones\r\n        for(int i=0;i<n;i++){\r\n            if(nums[i]==1) ones++;\r\n        }\r\n        if(ones<=1) return 0;\r\n\r\n        int k = ones; // sliding window length\r\n        int maxOnes = 0; // maxOnes in sub array of length k\r\n        int cnt = 0;\r\n        for(int i=0;i<k;i++){\r\n            if(nums[i]==1) cnt++;\r\n        }\r\n        maxOnes = cnt;\r\n        for(int i=k;i<n+k;i++){\r\n            if(nums[i-k]==1) cnt--; // if element removing from window is 1, then decrease count.\r\n            if(nums[i%n]==1) cnt++; // if element adding to window is 1, then increase count.\r\n            maxOnes = max(maxOnes,cnt); // maintaing maxOnes for all sub arrays of length k.\r\n        }\r\n        return(k - maxOnes); // (total length of subarray - ones in the sub array found)\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minSwaps(self, nums: List[int]) -> int:\r\n        width = sum(num == 1 for num in nums) #width of the window\r\n        nums += nums\r\n        res = width\r\n        curr_zeros = sum(num == 0 for num in nums[:width]) #the first window is nums[:width]\r\n        \r\n        for i in range(width, len(nums)):\r\n            curr_zeros -= (nums[i - width] == 0) #remove the leftmost 0 if exists\r\n            curr_zeros += (nums[i] == 0) #add the rightmost 0 if exists\r\n            res = min(res, curr_zeros) #update if needed\r\n        \r\n        return res",
    "javascript": "// Runtime: 102 ms (Top 90.00%) | Memory: 56.1 MB (Top 32.50%)\r\nvar minSwaps = function(nums) {\r\n    const MAX = Number.MAX_SAFE_INTEGER;\r\n\r\n    let ones = nums.reduce((acc, bit) => acc + bit, 0);\r\n\r\n    const doubledNums = nums.concat(nums.slice(0, nums.length - 1));\r\n\r\n    let minSwap = MAX;\r\n    let left = 0;\r\n    let onesWithinWindow = 0;\r\n\r\n    for (let i = 0; i < doubledNums.length; ++i) {\r\n        const rightBit = doubledNums[i];\r\n\r\n        if (rightBit === 1) onesWithinWindow += 1;\r\n\r\n        if (i >= ones) {\r\n            const leftBit = doubledNums[left];\r\n\r\n            if (leftBit === 1) onesWithinWindow -= 1;\r\n            ++left;\r\n        }\r\n\r\n        if (i + 1 >= ones) minSwap = Math.min(minSwap, ones - onesWithinWindow);\r\n    }\r\n\r\n    return minSwap;\r\n};"
  }
}
