export default {
  "id": 2295,
  "name": "Replace Elements in an Array",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/replace-elements-in-an-array",
  "relativeDir": "R/Replace Elements in an Array",
  "slug": "2295-replace-elements-in-an-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 13,
    "python": 9,
    "javascript": 33
  },
  "languages": {
    "cpp": "// Runtime: 207 ms (Top 100.0%) | Memory: 111.20 MB (Top 98.8%)\r\n\r\nint m[1000001];\r\nclass Solution {\r\npublic:\r\nvector<int> arrayChange(vector<int>& nums, vector<vector<int>>& operations) {\r\n    for (int i = 0; i < nums.size(); ++i)\r\n        m[nums[i]] = i;\r\n    for (auto &op : operations) {\r\n        nums[m[op[0]]] = op[1];\r\n        m[op[1]] = m[op[0]];\r\n    }\r\n    return nums;\r\n}\r\n};",
    "python": "class Solution:\r\n    def arrayChange(self, nums: List[int], operations: List[List[int]]) -> List[int]:\r\n            replacements = {}\r\n            for x, y in reversed(operations):\r\n                replacements[x] = replacements.get(y, y)\r\n            for idx, val in enumerate(nums):\r\n                if val in replacements:\r\n                    nums[idx] = replacements[val]\r\n            return nums",
    "java": "// Runtime: 124 ms (Top 26.09%) | Memory: 164.1 MB (Top 72.68%)\r\nclass Solution {\r\n    public int[] arrayChange(int[] nums, int[][] operations) {\r\n        Map<Integer,Integer> map = new HashMap<>();\r\n        for(int i=0;i<nums.length;i++) map.put(nums[i],i);\r\n        for(int[] op: operations) {\r\n            nums[map.get(op[0])] = op[1];\r\n            map.put(op[1],map.get(op[0]));\r\n            map.remove(op[0]);\r\n        }\r\n        return nums;\r\n    }\r\n}",
    "javascript": "// Runtime: 445 ms (Top 59.00%) | Memory: 110.1 MB (Top 14.00%)\r\n/**\r\n * @param {number[]} nums\r\n * @param {number[][]} operations\r\n * @return {number[]}\r\n */\r\nvar arrayChange = function(nums, operations) {\r\n    let map = new Map()\r\n\r\n    for(let i = 0; i < nums.length; i++){\r\n        let num = nums[i]\r\n        map.set(num, i)\r\n    }\r\n\r\n    for(let op of operations){\r\n        let key = op[0]\r\n        let value = op[1]\r\n\r\n        // if key exists\r\n        if(map.has(key)){\r\n            const idx = map.get(key)\r\n            map.set(value, idx)\r\n            map.delete(key)\r\n        }\r\n    }\r\n\r\n    for(let [key, idx] of map){\r\n        nums[idx] = key\r\n    }\r\n\r\n    return nums\r\n\r\n};"
  }
}
