export default {
  "id": 128,
  "name": "Longest Consecutive Sequence",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-consecutive-sequence",
  "relativeDir": "L/Longest Consecutive Sequence",
  "slug": "0128-longest-consecutive-sequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 47,
    "python": 14,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int longestConsecutive(vector<int>& nums) {\r\n        \r\n        set<int> hashSet;\r\n        \r\n        int longestConsecutiveSequence = 0; \r\n        \r\n        for(auto it : nums){\r\n            hashSet.insert(it);\r\n        }\r\n        \r\n        for(auto it : nums){\r\n            \r\n            if(!hashSet.count(it-1)){\r\n                \r\n                int count = 1;\r\n                \r\n                while(hashSet.count(it+count)) ++count;\r\n                \r\n                longestConsecutiveSequence = max(count,longestConsecutiveSequence);\r\n                \r\n            }\r\n            \r\n        }\r\n        \r\n        return longestConsecutiveSequence;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def longestConsecutive(self, nums):\r\n        ans=0\r\n        nums=set(nums)\r\n        count=0\r\n        for i in nums:\r\n            if i-1 not in nums:\r\n                j=i\r\n                count=0\r\n                while j in nums:\r\n                    count+=1\r\n                    j+=1\r\n                ans=max(ans,count)            \r\n        return ans",
    "java": "class Solution {\r\n    public int longestConsecutive(int[] nums) {\r\n        Set<Integer> storage = new HashSet();\r\n        \r\n        for(int i = 0; i < nums.length; i++){\r\n            storage.add(nums[i]);\r\n        }\r\n        \r\n        int maxL = 0;\r\n        \r\n        for(int i = 0; i < nums.length; i++){\r\n            \r\n            //check if nums[i] id present in set or not\r\n            //since after checking in set we remove the element from \r\n            //set, there is no double calculation for same sequence \r\n            if(storage.contains(nums[i])){\r\n                storage.remove(nums[i]);\r\n                \r\n                int dec = nums[i]-1;\r\n                int inc = nums[i]+1;\r\n                int tempL = 1;\r\n                \r\n                //check both ways from nums[i] and calculate \r\n                //tempL. since we are removing elements from \r\n                //set we only calculate once for every sequence.\r\n                \r\n                while(storage.contains(dec)){\r\n                    storage.remove(dec);\r\n                    dec--;\r\n                    tempL++;\r\n                }\r\n                \r\n                while(storage.contains(inc)){\r\n                    storage.remove(inc);\r\n                    inc++;\r\n                    tempL++;\r\n                }\r\n                \r\n                \r\n                maxL = Math.max(maxL, tempL);\r\n                \r\n            }\r\n        }\r\n        \r\n        return maxL;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar longestConsecutive = function(nums) {\r\n  if(nums.length === 1){\r\n    return 1\r\n  }\r\n  if(nums.length === 0){\r\n    return 0\r\n  }\r\n  nums.sort((a, b) => a - b)\r\n  let result = 1\r\n  let streak = 1\r\n  let i = 0\r\n  while(i < nums.length - 1){\r\n    if(nums[i] == nums[i + 1]) {\r\n      i++ \r\n      continue\r\n    }\r\n    if(nums[i] == nums[i + 1] - 1){\r\n      streak++\r\n       if(streak > result){\r\n         result = streak\r\n       }\r\n    } else {\r\n      streak = 1\r\n    }\r\n    i++\r\n  }\r\n  return result\r\n};"
  }
}
