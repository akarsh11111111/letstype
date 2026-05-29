export default {
  "id": 283,
  "name": "Move Zeroes",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/move-zeroes",
  "relativeDir": "M/Move Zeroes",
  "slug": "0283-move-zeroes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 17,
    "python": 15,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 47 ms (Top 39.17%) | Memory: 19.3 MB (Top 13.84%)\r\nclass Solution {\r\npublic:\r\n    void moveZeroes(vector<int>& nums) {\r\n        int nums_size = nums.size();\r\n        int cntr=0;\r\n\r\n        for(int i=0;i<nums_size;i++)\r\n        {\r\n            if(nums[i] != 0)\r\n            {\r\n                nums[cntr] = nums[i];\r\n                cntr++;\r\n            }\r\n        }\r\n        for( int i=cntr;i<nums_size;i++)\r\n        {\r\n            nums[i] = 0;\r\n        }\r\n    }\r\n};",
    "python": "# Runtime: 408 ms (Top 21.69%) | Memory: 15.6 MB (Top 65.11%)\r\nclass Solution:\r\n    def moveZeroes(self, nums: List[int]) -> None:\r\n        \"\"\"\r\n        Do not return anything, modify nums in-place instead.\r\n\r\n        \"\"\"\r\n        notzero = 0\r\n        zero = 0\r\n\r\n        while notzero < len(nums):\r\n            if nums[notzero] != 0:\r\n                nums[zero] , nums[notzero] = nums[notzero], nums[zero]\r\n                zero += 1\r\n            notzero += 1",
    "java": "// Runtime: 1 ms (Top 100.0%) | Memory: 46.20 MB (Top 23.08%)\r\n\r\nclass Solution {\r\n    public void moveZeroes(int[] nums) {\r\n        int i = 0; \r\n        for (int num:nums){\r\n            if(num != 0){\r\n                nums[i] = num;\r\n                i++;\r\n            }\r\n        }\r\n        while(i<nums.length){\r\n            nums[i] = 0;\r\n            i++;\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 129 ms (Top 63.23%) | Memory: 46.3 MB (Top 89.79%)\r\nvar moveZeroes = function(nums) {\r\n    let lastNonZeroNumber = 0;\r\n\r\n    //Moves all the non zero numbers at the start of the array\r\n    for(let i=0; i<nums.length;i++){\r\n       if(nums[i] !=0){\r\n           nums[lastNonZeroNumber] = nums[i];\r\n           lastNonZeroNumber++;\r\n       }\r\n    }\r\n\r\n    //Moves all the zeroes replaced from last non zero number found\r\n    //to the end of array\r\n    for(let i = lastNonZeroNumber; i<nums.length;i++){\r\n        nums[i] =0;\r\n    }\r\n\r\n};"
  }
}
