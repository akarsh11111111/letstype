export default {
  "id": 2089,
  "name": "Find Target Indices After Sorting Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-target-indices-after-sorting-array",
  "relativeDir": "F/Find Target Indices After Sorting Array",
  "slug": "2089-find-target-indices-after-sorting-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 26,
    "python": 6,
    "javascript": 23
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> targetIndices(vector<int>& nums, int target) {\r\n        vector<int> result;\r\n        sort(nums.begin(),nums.end());\r\n        for(int i=0;i<nums.size();i++){\r\n            if(nums[i]==target) result.push_back(i);\r\n        }\r\n        return result;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def targetIndices(self, nums, target):\r\n        ans = []\r\n        for i,num in enumerate(sorted(nums)):\r\n            if num == target: ans.append(i)\r\n        return ans",
    "java": "// Runtime: 2 ms (Top 82.14%) | Memory: 43.8 MB (Top 60.21%)\r\nclass Solution {\r\n    /** Algorithm:\r\n        - Parse the array once and count how many are lesser than target and how many are equal\r\n        - DO NOT sort the array as we don't need it sorted.\r\n          Just to know how many are lesser and how many are equal. O(N) better than O(NlogN - sorting)\r\n        - The response list will have a size = with the number of equal elements (as their positions)\r\n        - Loop from smaller to smaller+equal and add the values into the list. Return the list\r\n    */\r\n    public List<Integer> targetIndices(int[] nums, int target) {\r\n        int smaller = 0;\r\n        int equal = 0;\r\n        for (int num : nums) {\r\n            if (num < target) {\r\n                smaller++;\r\n            } else if (num == target) {\r\n                equal++;\r\n            }\r\n        }\r\n        List<Integer> indices = new ArrayList<>(equal);\r\n        for (int i = smaller; i < smaller + equal; i++) {\r\n            indices.add(i);\r\n        }\r\n        return indices;\r\n    }\r\n}",
    "javascript": "// Runtime: 91 ms (Top 64.54%) | Memory: 43.9 MB (Top 36.99%)\r\n\r\nfunction binarySearch(lists, sorted, low, high, target){\r\n    if(low > high) return;\r\n\r\n    const mid = low + Math.floor((high - low) / 2);\r\n\r\n    if(sorted[mid] === target){\r\n    lists.push(mid);\r\n    }\r\n\r\n    binarySearch(lists, sorted, low, mid-1, target);\r\n    binarySearch(lists, sorted, mid+1, high, target);\r\n}\r\n\r\nvar targetIndices = function(nums, target) {\r\n    let result = [];\r\n    nums.sort((a,b)=>a-b);\r\n    if(!nums.includes(target)) return [];\r\n\r\n    binarySearch(result, nums, 0 , nums.length-1, target);\r\n    return result.sort((a,b) => a-b);\r\n}"
  }
}
