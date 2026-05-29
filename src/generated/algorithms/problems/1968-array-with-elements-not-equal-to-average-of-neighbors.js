export default {
  "id": 1968,
  "name": "Array With Elements Not Equal to Average of Neighbors",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/array-with-elements-not-equal-to-average-of-neighbors",
  "relativeDir": "A/Array With Elements Not Equal to Average of Neighbors",
  "slug": "1968-array-with-elements-not-equal-to-average-of-neighbors",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 13,
    "python": 16,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 346 ms (Top 68.74%) | Memory: 123.3 MB (Top 40.85%)\r\n//Approach-1 (Using sorting O(nlogn))\r\n/*\r\n    If you make sure that\r\n    nums[i-1] < nums[i] > nums[i+1]\r\n    You are good to go.\r\n\r\n    So, just sort the input and choose wisely to satisfy above condition.\r\n\r\n    Example :\r\n    [6,2,0,9,7]\r\n    sort it : [0, 2, 6, 7, 9]\r\n\r\n    result : [0, _, 2, _, 6] - 1st loop (fill alternaltely)\r\n    result : [0, 7, 2, 9, 6] - 2nd loop (fill next larger numbers from nums to result in spaces left)\r\n\r\n*/\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> rearrangeArray(vector<int>& nums) {\r\n        int n = nums.size();\r\n        sort(begin(nums), end(nums));\r\n\r\n        vector<int> result(n);\r\n        int j = 0;\r\n        int i = 0;\r\n        for(; i < n && j < n; i++, j += 2) //alternately fill so that you leave one space in between for large number\r\n            result[j] = nums[i];\r\n\r\n        j = 1;\r\n        for(; i < n && j < n; i++, j += 2) //filter the large number in spaces between that we left above\r\n            result[j] = nums[i];\r\n\r\n        return result;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def rearrangeArray(self, nums: List[int]) -> List[int]:\r\n        for i in range(1, len(nums) -1):\r\n            pre = nums[i-1]\r\n            current = nums[i]\r\n            next = nums[i+1]\r\n            \r\n            # If block will run when we meet 1 2 3 or 6 4 2\r\n            if (pre < current < next) or (pre > current > next):\r\n                # Swap next and current\r\n                # For example: \r\n                # 1 2 3 -> 1 3 2\r\n                # 6 4 2 -> 6 2 4\r\n                nums[i+1], nums[i] = nums[i], nums[i+1]\r\n                \r\n        return nums",
    "java": "// Runtime: 67 ms (Top 33.85%) | Memory: 147.3 MB (Top 73.33%)\r\nclass Solution {\r\n    public int[] rearrangeArray(int[] nums) {\r\n       Arrays.sort(nums);\r\n       // sort in wave format\r\n        for(int i = 0;i<nums.length-1;i+=2){\r\n            int temp = nums[i];\r\n            nums[i] = nums[i+1];\r\n            nums[i+1] = temp;\r\n        }\r\n        return nums;\r\n    }\r\n}",
    "javascript": "// Runtime: 671 ms (Top 72.22%) | Memory: 86.2 MB (Top 94.44%)\r\nvar rearrangeArray = function(nums) {\r\n    let arr=[], res=[]\r\n    for(let q of nums) arr[q]= 1\r\n\r\n    let l=0, r=arr.length-1\r\n    while(l<=r){\r\n        while(!arr[l])l++\r\n        while(!arr[r])r--\r\n        if(l<=r)res.push(l++)\r\n        if(l<=r)res.push(r--)\r\n    }\r\n    return res\r\n};"
  }
}
