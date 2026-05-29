export default {
  "id": 2364,
  "name": "Count Number of Bad Pairs",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-number-of-bad-pairs",
  "relativeDir": "C/Count Number of Bad Pairs",
  "slug": "2364-count-number-of-bad-pairs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 17,
    "python": 14,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    long long countBadPairs(vector<int>& nums) {\r\n        \r\n        //j - i != nums[j] - nums[i] means  nums[i]-i != nums[j]-j\r\n        map<long long,long long >mp;\r\n        for(int i=0;i<nums.size();i++)\r\n        {\r\n            nums[i] = nums[i]-i;\r\n            \r\n            mp[nums[i]]++;\r\n        }\r\n        long long  n = nums.size();\r\n        long long totalPair = n*(n-1)/2;\r\n        \r\n        for(auto& it:mp)\r\n        {\r\n            if(it.second>1)\r\n            {\r\n                totalPair -= (it.second)*(it.second-1)/2;\r\n            } \r\n        }\r\n        \r\n        \r\n        \r\n        return totalPair;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def countBadPairs(self, nums: List[int]) -> int:\r\n        nums_len = len(nums)\r\n        count_dict = dict()\r\n        for i in range(nums_len):\r\n            nums[i] -= i\r\n            if nums[i] not in count_dict:\r\n                count_dict[nums[i]] = 0\r\n            count_dict[nums[i]] += 1\r\n        \r\n        count = 0\r\n        for key in count_dict:\r\n            count += math.comb(count_dict[key], 2)\r\n        return math.comb(nums_len, 2) - count",
    "java": "// Runtime: 44 ms (Top 94.02%) | Memory: 55.7 MB (Top 95.47%)\r\nclass Solution {\r\n    public long countBadPairs(int[] nums) {\r\n        HashMap<Integer, Integer> seen = new HashMap<>();\r\n        long count = 0;\r\n        for(int i = 0; i < nums.length; i++){\r\n            int diff = i - nums[i];\r\n            if(seen.containsKey(diff)){\r\n                count += (i - seen.get(diff));\r\n            }else{\r\n                count += i;\r\n            }\r\n            seen.put(diff, seen.getOrDefault(diff, 0) + 1);\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} nums\r\n * @return {number}\r\n */\r\nvar countBadPairs = function(nums) {\r\n    let map={},goodPair=0;\r\n    for(let i=0;i<nums.length;i++){\r\n        let value = nums[i]-i;\r\n        if(map[value]!==undefined){\r\n            goodPair += map[value];\r\n            map[value]++;\r\n        }else{\r\n            map[value]=1;\r\n        }\r\n    }\r\n    let n =  nums.length; \r\n    let totalPairs = n*(n-1)/2;\r\n    return totalPairs-goodPair;\r\n};"
  }
}
