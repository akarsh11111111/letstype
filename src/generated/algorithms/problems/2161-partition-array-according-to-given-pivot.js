export default {
  "id": 2161,
  "name": "Partition Array According to Given Pivot",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/partition-array-according-to-given-pivot",
  "relativeDir": "P/Partition Array According to Given Pivot",
  "slug": "2161-partition-array-according-to-given-pivot",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 26,
    "python": 13,
    "javascript": 38
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> pivotArray(vector<int>& nums, int pivot) {\r\n        int i = 0;\r\n        vector<int> res;\r\n        int cnt = count(nums.begin(), nums.end(), pivot);\r\n        while(--cnt >= 0) {\r\n            res.push_back(pivot);\r\n        }\r\n        for(int k = 0; k < nums.size(); k++) {\r\n            if(nums[k] < pivot) {\r\n                res.insert(res.begin() + i, nums[k]);\r\n                i++;\r\n            } else if(nums[k] > pivot) {\r\n                res.push_back(nums[k]);\r\n            } else\r\n                continue;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def pivotArray(self, nums: List[int], pivot: int) -> List[int]:\r\n        left=[]\r\n        mid=[]\r\n        right=[]\r\n        for i in nums:\r\n            if(i<pivot):\r\n                left.append(i)\r\n            elif(i==pivot):\r\n                mid.append(i)\r\n            else:\r\n                right.append(i)\r\n        return left+mid+right",
    "java": "// Runtime: 12 ms (Top 37.13%) | Memory: 169.4 MB (Top 17.70%)\r\n// Time complexity = 2n = O(n)\r\n// Space complexity = O(1), or O(n) if the result array is including in the complexity analysis.\r\n\r\nclass Solution {\r\n    public int[] pivotArray(int[] nums, int pivot) {\r\n        int[] result = new int[nums.length];\r\n        int left = 0, right = nums.length - 1;\r\n\r\n        for(int i = 0; i < nums.length; i++) {\r\n            if(nums[i] < pivot) {\r\n                result[left++] = nums[i];\r\n            }\r\n            if(nums[nums.length - 1 - i] > pivot) {\r\n                result[right--] = nums[nums.length - 1 - i];\r\n            }\r\n        }\r\n\r\n        while(left <= right) {\r\n            result[left++] = pivot;\r\n            result[right--] = pivot;\r\n        }\r\n\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 411 ms (Top 73.77%) | Memory: 86.1 MB (Top 45.90%)\r\n/**\r\n * @param {number[]} nums\r\n * @param {number} pivot\r\n * @return {number[]}\r\n */\r\nvar pivotArray = function(nums, pivot) {\r\n\r\n    let n=nums.length;\r\n\r\n    //first Solution with 3 separet Array\r\n    let lessPivot=[]\r\n    let equalPivot=[]\r\n    let bigerPivot=[]\r\n\r\n    for(let i=0;i<n;i++){\r\n        if(nums[i]<pivot)lessPivot.push(nums[i])\r\n        else if(nums[i]===pivot)equalPivot.push(nums[i])\r\n        else bigerPivot.push(nums[i])\r\n\r\n    }\r\n    return lessPivot.concat(equalPivot.concat(bigerPivot))\r\n\r\n    //second Solution with one Array\r\n\r\n    let result=[]\r\n    for(let num of nums){\r\n        if(num<pivot)result.push(num)\r\n    }\r\n\r\n    for(let num of nums){\r\n        if(num===pivot)result.push(num)\r\n    }\r\n    for(let num of nums){\r\n        if(num>pivot)result.push(num)\r\n    }\r\n    return result\r\n};"
  }
}
