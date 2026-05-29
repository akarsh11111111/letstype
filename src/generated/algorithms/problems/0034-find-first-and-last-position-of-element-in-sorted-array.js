export default {
  "id": 34,
  "name": "Find First and Last Position of Element in Sorted Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array",
  "relativeDir": "F/Find First and Last Position of Element in Sorted Array",
  "slug": "0034-find-first-and-last-position-of-element-in-sorted-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 67,
    "java": 16,
    "python": 24,
    "javascript": 50
  },
  "languages": {
    "cpp": "// Runtime: 13 ms (Top 55.08%) | Memory: 13.7 MB (Top 17.99%)\r\nclass Solution {\r\npublic:\r\n\r\n    int startEle(vector<int>& nums, int target,int l,int r)\r\n    {\r\n        while(l<=r)\r\n        {\r\n            int m = (l+r)/2;\r\n            if(nums[m]<target) l=m+1;\r\n            else if(nums[m]>target) r = m-1;\r\n            else\r\n            {\r\n                if(m==0)\r\n                    return m;\r\n                else if(nums[m-1]==target)\r\n                    r = m-1;\r\n                else\r\n                    return m;\r\n            }\r\n        }\r\n\r\n        return -1;\r\n    }\r\n\r\n     int lastEle(vector<int>& nums, int target,int l,int r)\r\n    {\r\n        while(l<=r)\r\n        {\r\n            int m = (l+r)/2;\r\n            if(nums[m]<target) l=m+1;\r\n            else if(nums[m]>target) r = m-1;\r\n            else\r\n            {\r\n                if(m==nums.size()-1)\r\n                    return m;\r\n                else if(nums[m+1]==target)\r\n                    l = m+1;\r\n                else\r\n                    return m;\r\n            }\r\n        }\r\n\r\n         return -1;\r\n    }\r\n    vector<int> searchRange(vector<int>& nums, int target) {\r\n\r\n        vector<int> binSearch;\r\n        int a = startEle(nums,target,0,nums.size()-1);\r\n        if(a==-1)\r\n        {\r\n             binSearch.push_back(-1);\r\n             binSearch.push_back(-1);\r\n            return binSearch;\r\n        }\r\n        else\r\n        {\r\n            binSearch.push_back(a);\r\n        }\r\n\r\n        int b = lastEle(nums,target,0,nums.size()-1);\r\n        binSearch.push_back(b);\r\n\r\n        return binSearch;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def searchRange(self, nums: List[int], target: int) -> List[int]:\r\n        # if target is not in nums list, we simply return [-1,-1]\r\n\t\tif target not in nums:\r\n            return [-1,-1]\r\n        \r\n\t\t# create an empty list\r\n        result = []\r\n\t\t# iterate nums for the first time, if we found nums[i] matches with target\r\n\t\t# append the index i to result, break the for loop\r\n\t\t# because we only care the first and last index of target in nums\r\n        for i in range(len(nums)):\r\n            if nums[i] == target:\r\n                result.append(i)\r\n                break\r\n        \r\n\t\t# loop through nums backward, if we found nums[j] matches target\r\n\t\t# append j to result and break the for loop\r\n        for j in range(len(nums)-1, -1, -1):\r\n            if nums[j] == target:\r\n                result.append(j)\r\n                break\r\n        \r\n        return result",
    "java": "// Runtime: 1 ms (Top 22.02%) | Memory: 45.50 MB (Top 10.41%)\r\n\r\nclass Solution {\r\n    public int[] searchRange(int[] nums, int target) {\r\n        int first = -1, last = -1;\r\n        for (int i = 0; i < nums.length; i++) {\r\n            if (nums[i] == target) {\r\n                if (first == -1) {\r\n                    first = i;\r\n                }\r\n                last = i;\r\n            }\r\n        }\r\n        return new int[]{first, last};\r\n    }\r\n}",
    "javascript": "var searchRange = function(nums, target) {\r\n    if (nums.length === 1) return nums[0] === target ? [0, 0] : [-1, -1];\r\n    \r\n    const findFirstInstance = (left, right) => {\r\n        if (left === right) return left;\r\n        var pivot;\r\n        while (left < right) {\r\n            if (left === pivot) left += 1;\r\n            pivot = Math.floor((left + right) / 2);\r\n            if (nums[pivot] === target) {\r\n                if (nums[pivot - 1] !== target) return pivot;\r\n                return findFirstInstance(left, pivot - 1);\r\n            }\r\n            if (nums[pivot] > target) right = pivot;\r\n            else left = pivot;\r\n        }\r\n    }\r\n    const findLastInstance = (left, right) => {\r\n        if (left === right) return left;\r\n        var pivot;\r\n        while (left < right) {\r\n            if (left === pivot) left += 1;\r\n            pivot = Math.floor((left + right) / 2);\r\n            if (nums[pivot] === target) {\r\n                if (nums[pivot + 1] !== target) return pivot;\r\n                return findLastInstance(pivot + 1, right);\r\n            }\r\n            if (nums[pivot] > target) right = pivot;\r\n            else left = pivot;\r\n        }\r\n    }\r\n    \r\n    var left = 0,\r\n        right = nums.length - 1,\r\n        pivot;\r\n    \r\n    while (left < right) {\r\n        if (left === pivot) left += 1;\r\n        pivot = Math.floor((left + right) / 2);\r\n        if (nums[pivot] === target) {\r\n            var first = nums[pivot - 1] !== target ? pivot : findFirstInstance(left, pivot - 1);\r\n            var last = nums[pivot + 1] !== target ? pivot : findLastInstance(pivot + 1, right);\r\n            return [first, last];\r\n        }\r\n        if (nums[pivot] > target) right = pivot;\r\n        else left = pivot;\r\n    }\r\n    \r\n    return [-1, -1];\r\n};"
  }
}
