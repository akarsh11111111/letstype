export default {
  "id": 448,
  "name": "Find All Numbers Disappeared in an Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array",
  "relativeDir": "F/Find All Numbers Disappeared in an Array",
  "slug": "0448-find-all-numbers-disappeared-in-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 25,
    "python": 3,
    "javascript": 11
  },
  "languages": {
    "cpp": "// Runtime: 133 ms (Top 33.68%) | Memory: 33.7 MB (Top 61.94%)\r\nclass Solution {\r\npublic:\r\n    vector<int> findDisappearedNumbers(vector<int>& nums) {\r\n        vector<int> res;\r\n        int n = nums.size();\r\n        for (int i = 0; i < n; i++) {\r\n            if (nums[abs(nums[i]) - 1] > 0) {\r\n                nums[abs(nums[i]) - 1] *= -1;\r\n            }\r\n        }\r\n        for (int i = 0; i < n; i++) {\r\n            if (nums[i] > 0)\r\n                res.push_back(i + 1);\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:\r\n        return set(nums) ^ set(range(1,len(nums)+1))",
    "java": "// Runtime: 9 ms (Top 62.33%) | Memory: 67.5 MB (Top 39.21%)\r\nclass Solution {\r\n    public List<Integer> findDisappearedNumbers(int[] nums) {\r\n        List<Integer> res = new ArrayList<>();\r\n        // 0 1 2 3 4 5 6 7 <- indx\r\n        // 4 3 2 7 8 2 3 1 <- nums[i]\r\n        for(int i=0;i<nums.length;i++) {\r\n            int indx = Math.abs(nums[i])-1;\r\n            if(nums[indx]>0) {\r\n                nums[indx] = nums[indx]*-1;\r\n            }\r\n        }\r\n        // 0 1 2 3 4 5 6 7 <- indx\r\n        // -4 -3 -2 -7 8 2 -3 -1 <- nums[i]\r\n        for(int i=0;i<nums.length;i++) {\r\n            if(nums[i]>0) {\r\n                res.add(i+1);\r\n            }else {\r\n                nums[i] *= -1;\r\n            }\r\n        }\r\n        // [ 5, 6]\r\n        return res;\r\n    }\r\n}",
    "javascript": "var findDisappearedNumbers = function(nums) {\r\n    let result = [];\r\n    for(let i = 0; i < nums.length; i++) {\r\n        let id = Math.abs(nums[i]) - 1;\r\n        nums[id] = - Math.abs(nums[id]);\r\n    }\r\n    for(let i = 0; i < nums.length; i++) {\r\n        if(nums[i] > 0) result.push(i + 1);\r\n    }\r\n    return result;\r\n};"
  }
}
