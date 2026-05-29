export default {
  "id": 219,
  "name": "Contains Duplicate II",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/contains-duplicate-ii",
  "relativeDir": "C/Contains Duplicate II",
  "slug": "0219-contains-duplicate-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 12,
    "python": 9,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool containsNearbyDuplicate(vector<int>& nums, int k) {\r\n        unordered_map<int,int> m;\r\n        for(int i=0;i<nums.size();i++){\r\n            if(m.count(nums[i]) && i-m[nums[i]]<=k) return true;\r\n            m[nums[i]]=i;\r\n        }\r\n        return false;\r\n    }   \r\n};",
    "python": "# Runtime: 632 ms (Top 95.72%) | Memory: 27.2 MB (Top 74.47%)\r\nclass Solution:\r\n    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:\r\n        seen = {}\r\n        for i, n in enumerate(nums):\r\n            if n in seen and i - seen[n] <= k:\r\n                    return True\r\n            seen[n] = i\r\n        return False",
    "java": "class Solution {\r\n    public boolean containsNearbyDuplicate(int[] nums, int k) {\r\n        HashMap<Integer, Integer> map = new HashMap<>();\r\n        for (int i = 0; i < nums.length; i++) {\r\n            if (map.containsKey(nums[i]) && (Math.abs(map.get(nums[i]) - i) <= k) ) {\r\n                return true;\r\n            }\r\n            map.put(nums[i], i);\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 199 ms (Top 50.13%) | Memory: 64.1 MB (Top 50.22%)\r\n/**\r\n * @param {number[]} nums\r\n * @param {number} k\r\n * @return {boolean}\r\n */\r\nvar containsNearbyDuplicate = function(nums, k) {\r\n    const duplicateCheck = {};\r\n    let isValid = false;\r\n    for(var indexI=0; indexI<nums.length;indexI++){\r\n         if(duplicateCheck[nums[indexI]] > -1) {\r\n            if(Math.abs(duplicateCheck[nums[indexI]] - indexI) <= k) {\r\n              isValid = true;\r\n              break;\r\n            }\r\n\r\n        }\r\n        duplicateCheck[nums[indexI]] = indexI;\r\n    }\r\n    return isValid;\r\n};"
  }
}
