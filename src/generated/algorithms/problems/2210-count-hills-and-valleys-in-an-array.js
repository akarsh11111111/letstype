export default {
  "id": 2210,
  "name": "Count Hills and Valleys in an Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-hills-and-valleys-in-an-array",
  "relativeDir": "C/Count Hills and Valleys in an Array",
  "slug": "2210-count-hills-and-valleys-in-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 25,
    "python": 12,
    "javascript": 28
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int countHillValley(vector<int>& nums) {\r\n\t// taking a new vector\r\n        vector<int>v;\r\n        v.push_back(nums[0]);\r\n\t\t//pushing unique elements into new vector\r\n        for(int i=1;i<nums.size();i++){\r\n            if(nums[i]!=nums[i-1]){\r\n                v.push_back(nums[i]);\r\n            }\r\n        }\r\n        int c=0;\r\n\t\t//checking for valley or hill\r\n        for(int i=1;i<v.size()-1;i++){\r\n            if(v[i]>v[i-1] and v[i]>v[i+1] or v[i]<v[i-1] and v[i]<v[i+1]){\r\n                c++;\r\n            }\r\n        }\r\n        return c;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countHillValley(self, nums: List[int]) -> int:\r\n        c = 0\r\n        i = 1\r\n        while i <len(nums)-1:\r\n            j = i+1\r\n            while j < len(nums)-1 and nums[j] == nums[i]:\r\n                j += 1\r\n            if (nums[i-1] > nums[i] and nums[j] > nums[i]) or (nums[i-1] < nums[i] and nums[j] < nums[i]):\r\n                    c += 1\r\n            i = j\r\n        return c",
    "java": "class Solution {\r\n    public int countHillValley(int[] nums) {\r\n        int result = 0;\r\n    \r\n\t\t// Get head start. Find first index for which nums[index] != nums[index-1]\r\n\t\tint start = 1;\r\n\t\twhile(start < nums.length && nums[start] == nums[start-1])\r\n\t\t\tstart++;\r\n\r\n\t\tint prev = start-1; //index of prev different value num\r\n\t\tfor(int i=start; i<nums.length-1; i++) {\r\n\t\t\tif(nums[i] == nums[i+1]) //If numbers are same, simply ignore them\r\n\t\t\t\tcontinue;\r\n\t\t\telse {\r\n\t\t\t\tif(nums[i] > nums[prev] && nums[i] > nums[i+1]) //compare current num with prev number and next number\r\n\t\t\t\t\tresult++;\r\n\t\t\t\tif(nums[i] < nums[prev] && nums[i] < nums[i+1])\r\n\t\t\t\t\tresult++;\r\n\t\t\t\tprev = i;   // Now your current number will become prev number.\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn result;\r\n\t}\r\n}",
    "javascript": "// Runtime: 104 ms (Top 32.99%) | Memory: 42.2 MB (Top 52.58%)\r\n\r\nvar countHillValley = function(nums) {\r\n    let previous;\r\n    let count = 0;\r\n    for (let i=0; i<nums.length; i++) {\r\n        if (previous === undefined) {\r\n            previous = i;\r\n            continue;\r\n        }\r\n        if (nums[i-1] === nums[i]) {\r\n            continue;\r\n        }\r\n        let nextCheck = i + 1;\r\n        while(nums[nextCheck] === nums[i]) {\r\n              nextCheck++;\r\n        }\r\n        if(nums[i] > nums[previous] && nums[i] > nums[nextCheck]) {\r\n            count++;\r\n        }\r\n        if(nums[i] < nums[previous] && nums[i] < nums[nextCheck]) {\r\n            count++;\r\n        }\r\n        previous = i;\r\n        i = nextCheck - 1;\r\n    }\r\n    return count;\r\n};"
  }
}
