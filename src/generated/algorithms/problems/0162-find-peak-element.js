export default {
  "id": 162,
  "name": "Find Peak Element",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-peak-element",
  "relativeDir": "F/Find Peak Element",
  "slug": "0162-find-peak-element",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 12,
    "java": 19,
    "python": 19,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 10 ms (Top 23.76%) | Memory: 8.8 MB (Top 51.52%)\r\nclass Solution {\r\npublic:\r\n    int findPeakElement(vector<int>& nums) {\r\n        int peak = 0;\r\n        for(int i=1; i<nums.size(); i++) {\r\n            if(nums[i]>nums[i-1])\r\n                peak = i;\r\n        }\r\n        return peak;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def findPeakElement(self, nums):\r\n        \"\"\"\r\n        :type nums: List[int]\r\n        :rtype: int\r\n        \"\"\"\r\n        nums = [-2**32]+nums+[-2**32]\r\n        l,r = 0,len(nums)-1\r\n        while l <=r:\r\n            m = (l+r)//2\r\n\t\t\t# we find the target:\r\n            if nums[m] > nums[m-1] and nums[m] > nums[m+1]:\r\n                return m -1\r\n            else:\r\n                if nums[m] <nums[m+1]:\r\n                    l = m + 1\r\n                else:\r\n                    r = m - 1\r\n        return -1",
    "java": "class Solution {\r\n    public int findPeakElement(int[] nums) {\r\n       int start = 0;\r\n       int end = nums.length - 1;\r\n        \r\n        while(start < end){\r\n            int mid = start + (end - start) / 2;\r\n            if(nums[mid] > nums[mid + 1]){\r\n                //It means that we are in decreasing part of the array\r\n                end = mid;\r\n            }\r\n            else{\r\n                //It means that we are in increasing part of the array\r\n                start = mid + 1;\r\n            }\r\n        }\r\n        return start;\r\n    }\r\n}",
    "javascript": "// Runtime: 63 ms (Top 93.57%) | Memory: 42 MB (Top 69.12%)\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar findPeakElement = function(nums) {\r\n  if(nums.length === 1) return 0;\r\n\r\n  const recursion = (startIndex, endIndex) => {\r\n     const midIndex = Math.floor((startIndex + endIndex)/2);\r\n\r\n     if (startIndex === endIndex) return startIndex;\r\n     if (startIndex + 1 === endIndex) {\r\n        return nums[endIndex] >= nums [startIndex] ? endIndex : startIndex;\r\n     }\r\n\r\n     if(nums[midIndex] > nums[midIndex-1] && nums[midIndex] > nums[midIndex+1]) return midIndex;\r\n     if(nums[midIndex] > nums[midIndex-1] && nums[midIndex] < nums[midIndex+1]) return recursion(midIndex + 1, endIndex);\r\n     if(nums[midIndex] < nums[midIndex-1] && nums[midIndex] > nums[midIndex+1]) return recursion(startIndex, midIndex - 1);\r\n     if(nums[midIndex] < nums[midIndex-1] && nums[midIndex] < nums[midIndex+1])\r\n        return nums[midIndex-1] > nums[midIndex+1] ? recursion(startIndex, midIndex - 1) : recursion(midIndex + 1, endIndex);\r\n\r\n  }\r\n\r\n  return recursion(0, nums.length - 1);\r\n};"
  }
}
