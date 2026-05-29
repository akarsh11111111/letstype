export default {
  "id": 977,
  "name": "Squares of a Sorted Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/squares-of-a-sorted-array",
  "relativeDir": "S/Squares of a Sorted Array",
  "slug": "0977-squares-of-a-sorted-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 20,
    "python": 18,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 96 ms (Top 8.36%) | Memory: 26 MB (Top 33.66%)\r\nclass Solution {\r\npublic:\r\n    vector<int> sortedSquares(vector<int>& nums) {\r\n        for(int i=0;i<nums.size();i++){\r\n            nums[i] = nums[i]*nums[i];\r\n        }\r\n        sort(nums.begin(),nums.end());\r\n        return nums;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def sortedSquares(self, nums: List[int]) -> List[int]:\r\n        l,r = 0, len(nums)-1\r\n        pointer = 0\r\n        arr = [0] *len(nums)\r\n        pointer = r\r\n        while l<=r:\r\n            if abs(nums[r]) > abs(nums[l]):\r\n                arr[pointer] = nums[r] **2\r\n                r-=1\r\n                pointer-=1\r\n            else:\r\n                arr[pointer] = nums[l] **2\r\n                l+=1\r\n                pointer-=1\r\n                \r\n            \r\n        return arr",
    "java": "// Runtime: 2 ms (Top 87.02%) | Memory: 54.8 MB (Top 82.69%)\r\nclass Solution {\r\n    public int[] sortedSquares(int[] nums) {\r\n        int s=0;\r\n        int e=nums.length-1;\r\n        int p=nums.length-1;\r\n        int[] a=new int[nums.length];\r\n        while(s<=e){\r\n            if(nums[s]*nums[s]>nums[e]*nums[e]){\r\n                a[p--]=nums[s]*nums[s];\r\n                s++;\r\n            }\r\n            else{\r\n                a[p--]=nums[e]*nums[e];\r\n                e--;\r\n            }\r\n        }\r\n        return a;\r\n    }\r\n}",
    "javascript": "var sortedSquares = function(nums) {\r\n\tlet left = 0;\r\n\tlet right = nums.length - 1;\r\n\tconst arr = new Array(nums.length);\r\n\tlet arrIndex = arr.length - 1;\r\n\r\n\twhile (left <= right) {\r\n\t\tif (Math.abs(nums[left]) > Math.abs(nums[right])) {\r\n\t\t\tarr[arrIndex] = nums[left] * nums[left];\r\n\t\t\tleft++;\r\n\t\t} else {\r\n\t\t\tarr[arrIndex] = nums[right] * nums[right];\r\n\t\t\tright--;\r\n\t\t}\r\n\t\tarrIndex--;\r\n\t}\r\n\r\n\treturn arr;\r\n};"
  }
}
