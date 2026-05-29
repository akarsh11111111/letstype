export default {
  "id": 1748,
  "name": "Sum of Unique Elements",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-unique-elements",
  "relativeDir": "S/Sum of Unique Elements",
  "slug": "1748-sum-of-unique-elements",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 13,
    "python": 12,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 10 ms (Top 6.43%) | Memory: 8.1 MB (Top 24.14%)\r\nclass Solution {\r\npublic:\r\n    int sumOfUnique(vector<int>& nums)\r\n    {\r\n       int sum=0;\r\n       map<int,int>mp;\r\n\r\n       for(auto x:nums)\r\n       mp[x]++;\r\n\r\n       for(auto m:mp)\r\n       {\r\n           if(m.second==1)\r\n               sum+=m.first;\r\n       }\r\n        return sum;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def sumOfUnique(self, nums: List[int]) -> int:\r\n        hashmap = {}\r\n        for i in nums:\r\n            if i in hashmap.keys():\r\n                hashmap[i] += 1\r\n            else:\r\n                hashmap[i] = 1\r\n        sum = 0\r\n        for k, v in hashmap.items():\r\n            if v == 1: sum += k\r\n        return sum",
    "java": "// Runtime: 1 ms (Top 86.10%) | Memory: 40.1 MB (Top 92.63%)\r\nclass Solution {\r\n    public int sumOfUnique(int[] nums) {\r\n        int res = 0;\r\n        Map<Integer,Integer> map = new HashMap<>();\r\n        for(int i = 0;i<nums.length;i++){\r\n            map.put(nums[i],map.getOrDefault(nums[i],0)+1);\r\n            if(map.get(nums[i]) == 1)res+=nums[i];\r\n            else if(map.get(nums[i]) == 2)res-=nums[i];\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "// Runtime: 63 ms (Top 94.39%) | Memory: 41.6 MB (Top 96.05%)\r\nvar sumOfUnique = function(nums) {\r\n  let obj = {}\r\n  let sum = 0\r\n  // count frequency of each number\r\n  for(let num of nums){\r\n    if(obj[num] === undefined){\r\n      sum += num\r\n      obj[num] = 1\r\n    }else if(obj[num] === 1){\r\n      sum -= num\r\n      obj[num] = -1\r\n    }\r\n  }\r\n\r\n  return sum\r\n};"
  }
}
