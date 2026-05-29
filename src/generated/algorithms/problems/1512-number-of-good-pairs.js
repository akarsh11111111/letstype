export default {
  "id": 1512,
  "name": "Number of Good Pairs",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-good-pairs",
  "relativeDir": "N/Number of Good Pairs",
  "slug": "1512-number-of-good-pairs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 18,
    "python": 23,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 7.86%) | Memory: 7.2 MB (Top 60.31%)\r\nclass Solution {\r\npublic:\r\n    int numIdenticalPairs(vector<int>& nums) {\r\n\r\n        int cnt = 0;\r\n        for(int i=0 ; i<nums.size() ; i++){\r\n            for(int j=i+1 ; j<nums.size() ; j++){\r\n                if(nums[i] == nums[j]){\r\n                    cnt++;\r\n                }\r\n            }\r\n        }\r\n\r\n        return cnt;\r\n    }\r\n};",
    "python": "from itertools import combinations\r\nclass Solution:\r\n    def numIdenticalPairs(self, nums) -> int:\r\n        res = 0\r\n\t\tnums_set = set(nums)\r\n        nums_coppy = nums\r\n        for number in nums_set:\r\n            number_found = []\r\n            deleted = 0\r\n            while True:\r\n                try:\r\n                    found = nums_coppy.index(number)\r\n                    nums_coppy.remove(number)\r\n                    if deleted > 0:\r\n                        number_found.append(found + deleted)\r\n                    else:\r\n                        number_found.append(found + deleted)\r\n                    deleted += 1\r\n                except:\r\n                    comb = list(combinations(number_found, 2))\r\n                    res += len(comb)\r\n                    break\r\n        return res",
    "java": "// Runtime: 1 ms (Top 85.5%) | Memory: 40.27 MB (Top 18.8%)\r\n\r\nclass Solution {\r\n    public int numIdenticalPairs(int[] nums) {\r\n        int len =nums.length;\r\n        int counter=0;\r\n        for (int i =0;i<len;i++){\r\n            for (int j=i+1;j<len;j++){\r\n                if(nums[i]==nums[j]){\r\n                    counter++; \r\n                }           \r\n            }\r\n            \r\n        }\r\n        return counter;\r\n        \r\n    }\r\n}",
    "javascript": "// Runtime: 97 ms (Top 35.93%) | Memory: 42.3 MB (Top 27.32%)\r\nvar numIdenticalPairs = function(nums) {\r\n    let counter = 0;\r\n    let map = {};\r\n    for(let num of nums) {\r\n        if(map[num]) {\r\n            counter += map[num];\r\n            map[num]++;\r\n        } else {\r\n            map[num] = 1;\r\n        }\r\n    }\r\n    return counter;\r\n};"
  }
}
