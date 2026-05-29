export default {
  "id": 31,
  "name": "Next Permutation",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/next-permutation",
  "relativeDir": "N/Next Permutation",
  "slug": "0031-next-permutation",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 53,
    "python": 34,
    "javascript": 37
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 90.34%) | Memory: 12.1 MB (Top 74.79%)\r\n\r\nclass Solution {\r\npublic:\r\n    void nextPermutation(vector<int>& nums) {\r\n        if(nums.size()==1)\r\n            return;\r\n\r\n        int i=nums.size()-2;\r\n        while(i>=0 && nums[i]>=nums[i+1]) i--;\r\n        if(i>=0){\r\n            int j=nums.size()-1;\r\n            while(nums[i] >= nums[j]) j--;\r\n            swap(nums[j], nums[i]);\r\n        }\r\n        sort(nums.begin()+i+1, nums.end());\r\n    }\r\n};",
    "python": "class Solution:\r\n    def nextPermutation(self, nums) -> None:\r\n        firstDecreasingElement = -1\r\n        toSwapWith = -1\r\n        lastIndex = len(nums) - 1\r\n\r\n        # Looking for an element that is less than its follower\r\n        for i in range(lastIndex, 0, -1):\r\n            if nums[i] > nums[i - 1]:\r\n                firstDecreasingElement = i - 1\r\n                break\r\n\r\n        # If there is not any then reverse the array to make initial permutation\r\n        if firstDecreasingElement == -1:\r\n            for i in range(0, lastIndex // 2 + 1):\r\n                nums[i], nums[lastIndex - i] = nums[lastIndex - i], nums[i]\r\n            return\r\n\r\n        # Looking for an element to swap it with firstDecreasingElement\r\n        for i in range(lastIndex, 0, -1):\r\n            if nums[i] > nums[firstDecreasingElement]:\r\n                toSwapWith = i\r\n                break\r\n\r\n        # Swap found elements\r\n        nums[firstDecreasingElement], nums[toSwapWith] = nums[toSwapWith], nums[firstDecreasingElement]\r\n\r\n        # Reverse elements from firstDecreasingElement to the end of the array\r\n        left = firstDecreasingElement + 1\r\n        right = lastIndex\r\n        while left < right:\r\n            nums[left], nums[right] = nums[right], nums[left]\r\n            left += 1\r\n            right -= 1",
    "java": "// Runtime: 1 ms (Top 91.93%) | Memory: 43.7 MB (Top 52.39%)\r\n\r\nclass Solution {\r\n    public void nextPermutation(int[] nums) {\r\n        // FIND peek+1\r\n        int nextOfPeak = -1;\r\n        for (int i = nums.length - 1; i > 0; i--) {\r\n            if (nums[i] > nums[i - 1]) {\r\n                nextOfPeak = i - 1;\r\n                break;\r\n            }\r\n        }\r\n\r\n        // Return reverse Array\r\n        if (nextOfPeak == -1) {\r\n            int start = 0;\r\n            int end = nums.length - 1;\r\n            while (start <= end) {\r\n                int temp = nums[start];\r\n                nums[start] = nums[end];\r\n                nums[end] = temp;\r\n                start++;\r\n                end--;\r\n            }\r\n            return;\r\n        }\r\n        // Find element greater than peek\r\n        int reversalPoint = nums.length - 1;\r\n        for (int i = nums.length - 1; i > nextOfPeak; i--) {\r\n            if (nums[i] > nums[nextOfPeak]) {\r\n                reversalPoint = i;\r\n                break;\r\n            }\r\n        }\r\n\r\n        // swap nextOfPeak && reversalPoint\r\n        int temp = nums[nextOfPeak];\r\n        nums[nextOfPeak] = nums[reversalPoint];\r\n        nums[reversalPoint] = temp;\r\n\r\n        // Reverse array from nextOfPeak+1\r\n        int start = nextOfPeak + 1;\r\n        int end = nums.length - 1;\r\n        while (start <= end) {\r\n            int temp1 = nums[start];\r\n            nums[start] = nums[end];\r\n            nums[end] = temp1;\r\n            start++;\r\n            end--;\r\n        }\r\n\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {void} Do not return anything, modify nums in-place instead.\r\n */\r\nvar nextPermutation = function(nums) {\r\n    const dsc = nums.slice();\r\n    dsc.sort((a, b) => b - a);\r\n    if (dsc.every((n, i) => n === nums[i])) {\r\n        nums.sort((a, b) => a - b);\r\n    } else {\r\n        const len = nums.length;\r\n        let lo = len - 1, hi;\r\n        while (nums[lo] === dsc[dsc.length - 1]) {\r\n            lo--;\r\n            dsc.pop();\r\n        }\r\n        while (lo >= 0) {\r\n            // console.log(lo, nums[lo], nums.slice(lo + 1))\r\n            hi = nums.slice(lo + 1).reverse().findIndex((n) => n > nums[lo]);\r\n            if (hi !== -1) {\r\n                hi = len - 1 - hi;\r\n                break;\r\n            }\r\n            lo--;\r\n        }\r\n\r\n        const lval = nums[lo];\r\n        // console.log(lo, lval, hi, nums[hi]);\r\n        nums[lo] = nums[hi];\r\n        nums[hi] = lval;\r\n        const sorted = nums.slice(lo + 1);\r\n        // console.log(nums, sorted)\r\n        sorted.sort((a, b) => a - b);\r\n        for (let i = 0; i < sorted.length; i++)\r\n            nums[lo + 1 + i] = sorted[i];\r\n    }\r\n};"
  }
}
