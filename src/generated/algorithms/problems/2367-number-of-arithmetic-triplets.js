export default {
  "id": 2367,
  "name": "Number of Arithmetic Triplets",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-arithmetic-triplets",
  "relativeDir": "N/Number of Arithmetic Triplets",
  "slug": "2367-number-of-arithmetic-triplets",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 20,
    "python": 10,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 311 ms (Top 8.76%) | Memory: 8.6 MB (Top 54.12%)\r\nclass Solution {\r\npublic:\r\n    int arithmeticTriplets(vector<int>& nums, int diff) {\r\n        int ans=0;\r\n        for(int i=0;i<nums.size();i++){\r\n            for(int j=i+1;j<nums.size();j++){\r\n                for(int k=j+1;k<nums.size();k++){\r\n                    if((nums[j]-nums[i])==diff && (nums[k]-nums[j])==diff){\r\n                        ans++;\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:\r\n        \r\n        ans = 0\r\n        n = len(nums)\r\n        for i in range(n):\r\n            if nums[i] + diff in nums and nums[i] + 2 * diff in nums:\r\n                ans += 1\r\n        \r\n        return ans",
    "java": "// Runtime: 1 ms (Top 98.25%) | Memory: 42.8 MB (Top 15.70%)\r\n\r\nclass Solution {\r\n    public int arithmeticTriplets(int[] nums, int diff) {\r\n        int result = 0;\r\n        int[] map = new int[201];\r\n\r\n        for(int num: nums) {\r\n            map[num] = 1;\r\n\r\n            if(num - diff >= 0) {\r\n                map[num] += map[num - diff];\r\n            }\r\n\r\n            if(map[num] >= 3) result += 1;\r\n        }\r\n\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 53 ms (Top 78.36%) | Memory: 42.80 MB (Top 13.18%)\r\n\r\nvar arithmeticTriplets = function(nums, diff) {\r\n    \r\n    let hash = new Map();\r\n    let count = 0;\r\n\r\n    for(let i=0; i<nums.length; i++){\r\n        let temp = nums[i] - diff;\r\n        \r\n        if(hash.has(temp) && hash.has(temp - diff)){\r\n            count++;\r\n        }\r\n        hash.set(nums[i] , \"Hard choices easy life, Easy choices hard life.\");\r\n    }\r\n    \r\n    return count;\r\n};"
  }
}
