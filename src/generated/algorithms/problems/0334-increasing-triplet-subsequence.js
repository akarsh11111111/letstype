export default {
  "id": 334,
  "name": "Increasing Triplet Subsequence",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/increasing-triplet-subsequence",
  "relativeDir": "I/Increasing Triplet Subsequence",
  "slug": "0334-increasing-triplet-subsequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 20,
    "python": 11,
    "javascript": 33
  },
  "languages": {
    "cpp": "// Runtime: 173 ms (Top 6.23%) | Memory: 61.5 MB (Top 69.24%)\r\nclass Solution {\r\npublic:\r\n    bool increasingTriplet(vector<int>& nums) {\r\n        int n = nums.size();\r\n        int smallest = INT_MAX;\r\n        int second_smallest = INT_MAX;\r\n        for(int i = 0;i<n;i++)\r\n        {\r\n            if(nums[i] <= smallest)\r\n            {\r\n                smallest = nums[i];\r\n            }\r\n            else if(nums[i] <= second_smallest)\r\n            {\r\n                second_smallest = nums[i];\r\n            }\r\n            else\r\n            {\r\n                return true;\r\n            }\r\n        }\r\n\r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def increasingTriplet(self, nums: List[int]) -> bool:\r\n        first = second = float('inf')\r\n        for n in nums:\r\n            if n <= first:\r\n                first = n\r\n            elif n <= second:\r\n                second = n\r\n            else:\r\n                return True\r\n        return False",
    "java": "class Solution {\r\n    public boolean increasingTriplet(int[] nums) {\r\n        if(nums.length < 3)\r\n            return false;\r\n        \r\n        int x = Integer.MAX_VALUE;\r\n        int y = Integer.MAX_VALUE;\r\n        \r\n        for (int i : nums){\r\n            if(i <= x){\r\n                x = i;\r\n            }else if (i <= y)\r\n                y = i;\r\n            else \r\n                return true;\r\n        }\r\n        \r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 690 ms (Top 5.03%) | Memory: 64.7 MB (Top 5.59%)\r\nvar increasingTriplet = function(nums) {\r\n    const length = nums.length, arr = [];\r\n    let tripletFound = false, arrLength, added = false, found = false;\r\n    if(length < 3) return false;\r\n    arr.push([nums[0],1]);\r\n    for(let index = 1; index < length; index++) {\r\n        let count = 1;\r\n        added = false;\r\n        found = false;\r\n        arrLength = arr.length;\r\n        for(let index2 = 0; index2 < arrLength; index2++) {\r\n            if(arr[index2][0] < nums[index]) {\r\n                added = true;\r\n                if(count !== arr[index2][1]+1) {\r\n                    count = arr[index2][1]+1;\r\n                    if(JSON.stringify(arr[index2+1]) !== JSON.stringify([nums[index],count]))\r\n                        arr.push([nums[index],count]);\r\n                }\r\n                if(arr[index2][1]+1 === 3) {\r\n                    tripletFound = true;\r\n                    break;\r\n                }\r\n            }\r\n            if(arr[index2][0] === nums[index]) found = true;\r\n        }\r\n        if(tripletFound) break;\r\n        if(!added && !found) {\r\n                arr.push([nums[index],1]);\r\n            }\r\n    }\r\n    return tripletFound;\r\n};"
  }
}
