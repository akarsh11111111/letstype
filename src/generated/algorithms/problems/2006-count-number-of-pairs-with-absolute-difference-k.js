export default {
  "id": 2006,
  "name": "Count Number of Pairs With Absolute Difference K",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k",
  "relativeDir": "C/Count Number of Pairs With Absolute Difference K",
  "slug": "2006-count-number-of-pairs-with-absolute-difference-k",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 19,
    "python": 14,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 18 ms (Top 82.67%) | Memory: 14.6 MB (Top 9.93%)\r\nclass Solution {\r\npublic:\r\n    int countKDifference(vector<int>& nums, int k) {\r\n        unordered_map<int, int> freq;\r\n        int res = 0;\r\n\r\n        for (auto num : nums) {\r\n            res += freq[num+k] + freq[num-k];\r\n            freq[num]++;\r\n        }\r\n\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countKDifference(self, nums: List[int], k: int) -> int:\r\n        seen = defaultdict(int)\r\n        counter = 0\r\n        for num in nums:\r\n            tmp, tmp2 = num - k, num + k\r\n            if tmp in seen:\r\n                counter += seen[tmp]\r\n            if tmp2 in seen:\r\n                counter += seen[tmp2]\r\n            \r\n            seen[num] += 1\r\n        \r\n        return counter",
    "java": "// Runtime: 9 ms (Top 51.83%) | Memory: 44.1 MB (Top 44.46%)\r\nclass Solution {\r\n    public int countKDifference(int[] nums, int k) {\r\n        Map<Integer,Integer> map = new HashMap<>();\r\n        int res = 0;\r\n\r\n        for(int i = 0;i< nums.length;i++){\r\n            if(map.containsKey(nums[i]-k)){\r\n                res+= map.get(nums[i]-k);\r\n            }\r\n            if(map.containsKey(nums[i]+k)){\r\n                res+= map.get(nums[i]+k);\r\n            }\r\n            map.put(nums[i],map.getOrDefault(nums[i],0)+1);\r\n        }\r\n\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 120 ms (Top 24.96%) | Memory: 43.9 MB (Top 40.35%)\r\nvar countKDifference = function(nums, k) {\r\n    nums = nums.sort((b,a) => b- a)\r\n   let count = 0;\r\n\r\n    for(let i = 0; i< nums.length; i++) {\r\n         for(let j = i + 1; j< nums.length; j++) {\r\n            if(Math.abs(nums[i] - nums[j]) == k) {\r\n                count++\r\n            }\r\n          }\r\n    }\r\n    return count ;\r\n};"
  }
}
