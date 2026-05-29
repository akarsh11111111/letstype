export default {
  "id": 1887,
  "name": "Reduction Operations to Make the Array Elements Equal",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal",
  "relativeDir": "R/Reduction Operations to Make the Array Elements Equal",
  "slug": "1887-reduction-operations-to-make-the-array-elements-equal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 15,
    "python": 10,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int reductionOperations(vector<int>& nums) {\r\n        int n = nums.size();\r\n        \r\n        map<int, int> mp;\r\n        for(int i = 0; i < n; i ++) {\r\n            mp[nums[i]] ++;             // storing the frequency\r\n        }\r\n        \r\n        int ans = 0;\r\n        int pre = 0;\r\n        for (auto i = mp.end(); i != mp.begin(); i--) {\r\n            ans += i -> second + pre;   // total operations\r\n            pre += i -> second;         // maintaing the previous frequency count\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 717 ms (Top 99.99%) | Memory: 24.60 MB (Top 36.15%)\r\n\r\nclass Solution:\r\n    def reductionOperations(self, nums: List[int]) -> int:\r\n        ans = val = 0\r\n        nums.sort()\r\n        for i in range(1, len(nums)): \r\n            if nums[i-1] < nums[i]: val += 1\r\n            ans += val\r\n        return ans",
    "java": "class Solution {\r\n    public int reductionOperations(int[] nums) {\r\n        Map<Integer, Integer> valMap = new TreeMap<>(Collections.reverseOrder());\r\n\r\n        for (int i=0; i<nums.length; i++)\r\n            valMap.put(nums[i], valMap.getOrDefault(nums[i], 0) + 1);\r\n\r\n        int mapSize = valMap.size();\r\n        int opsCount = 0;\r\n        for (Map.Entry<Integer, Integer> entry : valMap.entrySet()) {\r\n            opsCount += entry.getValue() * (--mapSize);\r\n        }\r\n        return opsCount;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar reductionOperations = function(nums) {\r\n   nums.sort((a,b)=>a-b);\r\n    let count = 0;\r\n    for(let i = nums.length - 1;i>0;i--)\r\n        if(nums[i] !== nums[i-1])\r\n            count += nums.length - i\r\n    return count\r\n};"
  }
}
