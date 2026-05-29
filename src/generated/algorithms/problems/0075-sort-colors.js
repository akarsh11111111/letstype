export default {
  "id": 75,
  "name": "Sort Colors",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sort-colors",
  "relativeDir": "S/Sort Colors",
  "slug": "0075-sort-colors",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 21,
    "python": 17,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    void sortColors(vector<int>& nums) {\r\n        int a =0; int b=0,c=0;int i;\r\n        for(i=0;i<nums.size();i++){\r\n            if(nums[i]==0){\r\n                a++;\r\n            }\r\n            if(nums[i]==1){\r\n                b++;\r\n            }\r\n            else c++;\r\n            \r\n        }\r\n        for(i=0;i<nums.size();i++){\r\n            if(i<a){\r\n                nums[i]=0;\r\n            }\r\n            else if(i<a+b){\r\n                nums[i]=1;\r\n            }\r\n            else nums[i]=2;\r\n        }\r\n      \r\n    }\r\n};",
    "python": "// Runtime: 49 ms (Top 8.88%) | Memory: 16.20 MB (Top 55.73%)\r\n\r\nclass Solution:\r\n    def sortColors(self, nums: List[int]) -> None:\r\n\r\n        red, white, blue = 0, 0, len(nums) - 1\r\n\r\n        while white <= blue:\r\n            if nums[white] == 0:\r\n                nums[white], nums[red] = nums[red], nums[white]\r\n                red += 1\r\n                white += 1\r\n            elif nums[white] == 1:\r\n                white += 1\r\n            else:\r\n                nums[white], nums[blue] = nums[blue], nums[white]\r\n                blue -= 1",
    "java": "class Solution {\r\n\r\n  public void sortColors(int[] nums) {\r\n\r\n    int zeroIndex = 0, twoIndex = nums.length - 1, i = 0;\r\n    while (i <= twoIndex) {\r\n      if (nums[i] == 0)\r\n        swap(nums, zeroIndex++, i++);\r\n      else if (nums[i] == 2)\r\n        swap(nums, twoIndex--, i);\r\n      else\r\n        i++;\r\n    }\r\n  }\r\n\r\n  public void swap(int[] nums, int i, int j) {\r\n    int temp = nums[i];\r\n    nums[i] = nums[j];\r\n    nums[j] = temp;\r\n  }\r\n}",
    "javascript": "// Runtime: 47 ms (Top 86.98%) | Memory: 41.70 MB (Top 76.34%)\r\n\r\nvar sortColors = function(arr) {\r\n    \r\n    let one=0, zero=0, two=0\r\n    \r\n\r\n    // step1 \r\n    for(let elem of arr){\r\n        if(elem == 0) zero++\r\n        else if ( elem == 1) one ++\r\n        else two ++\r\n    }\r\n\r\n\r\n\r\n\r\n    // step2\r\n    arr.length=0\r\n\r\n\r\n\r\n\r\n    // step3\r\n    for(let i=0;i<zero;i++) arr.push(0)\r\n    for(let i=0;i<one;i++) arr.push(1)\r\n    for(let i=0;i<two;i++) arr.push(2)    \r\n    \r\n\r\n};"
  }
}
