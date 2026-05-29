export default {
  "id": 41,
  "name": "First Missing Positive",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/first-missing-positive",
  "relativeDir": "F/First Missing Positive",
  "slug": "0041-first-missing-positive",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 29,
    "python": 23,
    "javascript": 30
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int firstMissingPositive(vector<int>& nums) {\r\n        int n = nums.size();\r\n        for(int i=0; i<n; i++){\r\n            if(nums[i]==i+1 || nums[i]<=0 || nums[i]>n) continue;\r\n            while(nums[i]!=i+1 && nums[i]>0 && nums[i]<=n && nums[nums[i]-1] != nums[i]){\r\n                swap(nums[i],nums[nums[i]-1]);\r\n            }\r\n        }\r\n        int ans = -1;\r\n        for(int i=0; i<n; i++){\r\n            if(nums[i]!=i+1){\r\n                ans = i+1;\r\n                break;\r\n            }\r\n        }\r\n        if(ans==-1){\r\n            return n+1;\r\n        }else{\r\n            return ans;\r\n        }\r\n    }\r\n};",
    "python": "# Runtime: 295 ms (Top 90.42%) | Memory: 28 MB (Top 72.11%)\r\nclass Solution:\r\n    def firstMissingPositive(self, nums: List[int]) -> int:\r\n        mn = float('inf')\r\n        mx = 0\r\n        numsSet = set()\r\n\r\n        for i in range(len(nums) - 1, -1, -1):\r\n            if nums[i] > 0:\r\n                if nums[i] < mn:\r\n                    mn = nums[i]\r\n                if nums[i] > mx:\r\n                    mx = nums[i]\r\n                numsSet.add(nums[i])\r\n            del nums[i]\r\n\r\n        if mn >= 2:\r\n            return 1\r\n        if len(numsSet) == mx:\r\n            return mx + 1\r\n        for i in range(2, len(numsSet) + 1):\r\n            if i not in numsSet:\r\n                return i",
    "java": "// Runtime: 2 ms (Top 91.14%) | Memory: 57.8 MB (Top 74.85%)\r\nclass Solution {\r\n   public int firstMissingPositive(int[] nums) {\r\n       //cyclic sort\r\n        int i = 0;\r\n        while (i<nums.length){\r\n            int correct = nums[i]-1;\r\n            if(nums[i]>0 && nums[i]<=nums.length && nums[i]!=nums[correct]){\r\n                swap(nums,i,correct);\r\n            }else{\r\n                i++;\r\n            }\r\n        }\r\n       //linear search to find the missing number\r\n        for(int index=0;index<nums.length;index++){\r\n            if (nums[index] != index+1) {\r\n                return index+1;\r\n            }\r\n        }\r\n       //if array has all the elements match to its index then 1st missing num will be\r\n       //nums.length+1\r\n        return nums.length+1;\r\n    }\r\n    static void swap(int[]arr,int a , int b){\r\n        int temp = arr[a];\r\n        arr[a]=arr[b];\r\n        arr[b]=temp;\r\n    }\r\n}",
    "javascript": "// Runtime: 89 ms (Top 95.64%) | Memory: 46.2 MB (Top 94.14%)\r\n/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar firstMissingPositive = function (nums) {\r\n\r\n    //first make all negative numbers to zero =>zero means we ignore whis number\r\n    for (let index = 0; index < nums.length; index++) {\r\n        if (nums[index] < 0)\r\n            nums[index] = 0\r\n    }\r\n\r\n    for (let index = 0; index < nums.length; index++) {\r\n        const temp = Math.abs(nums[index])\r\n        const element = temp - 1\r\n\r\n        if (element < nums.length && element >= 0)\r\n            nums[element] = nums[element] === 0 ? -(nums.length + 1) : Math.abs(nums[element]) * -1\r\n\r\n    }\r\n\r\n    for (let index = 0; index < nums.length; index++) {\r\n        const element = (nums[index])\r\n        if (element >= 0) return index + 1\r\n\r\n    }\r\n    return nums.length+1\r\n\r\n};"
  }
}
