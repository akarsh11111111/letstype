export default {
  "id": 414,
  "name": "Third Maximum Number",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/third-maximum-number",
  "relativeDir": "T/Third Maximum Number",
  "slug": "0414-third-maximum-number",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 25,
    "python": 14,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 12 ms (Top 11.87%) | Memory: 11.00 MB (Top 18.16%)\r\n\r\nclass Solution {\r\npublic:\r\n int thirdMax(vector<int>& nums) {\r\n           set<int>s;\r\n        for(int i=0;i<nums.size();i++){\r\n            s.insert(nums[i]);\r\n        }\r\n        if(s.size()>=3){   // when set size >=3 means 3rd Maximum exist(because set does not contain duplicate element)\r\n            int Third_index_from_last=s.size()-3;\r\n            auto third_maximum=next(s.begin(),Third_index_from_last);\r\n            return *third_maximum;\r\n        }\r\n            return *--s.end(); // return maximum if 3rd maximum not exist\r\n    }\r\n};",
    "python": "class Solution:\r\n    def thirdMax(self, nums: List[int]) -> int:\r\n        nums_set = set(nums)\r\n        sorted_set = sorted(nums_set)\r\n        return sorted_set[-3] if len(nums_set) >2 else sorted_set[-1]\r\n    \r\n    \r\n            #use set() to remove dups\r\n            #if len of nums after dups have been removed is at least 2, a third max val must exist\r\n            #if not, just return the max\r\n        \r\n        \r\n        #you can do it in 1 line like this but then you have to call the same functions repeatedly\r\n        #return sorted(set(nums))[-3] if len(set(nums)) > 2  else sorted(set(nums))[-1]",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 42.70 MB (Top 89.77%)\r\n\r\nclass Solution {\r\n    public int thirdMax(int[] nums) {\r\n\t\r\n\t\t// taking long data type since array can contain Integer.MIN_VALUE\r\n        long max = Long.MIN_VALUE, sMax = Long.MIN_VALUE, tMax = Long.MIN_VALUE;\r\n        for (int i : nums) {\r\n            if (i > max) {\r\n                tMax = sMax;\r\n                sMax = max;\r\n                max = i;\r\n            } else if (i > sMax && i != max) {\r\n                tMax = sMax;\r\n                sMax = i;\r\n            } else if (i > tMax && i != sMax && i != max) {\r\n                tMax = i;\r\n            }\r\n        }\r\n\t\t\r\n\t\t// if thirdMax was not updated, return the first Max\r\n\t\t\r\n        return tMax == Long.MIN_VALUE ? (int) max : (int) tMax;\r\n    }\r\n}",
    "javascript": "var thirdMax = function(nums) {\r\n    nums.sort((a,b) => b-a);\r\n\t//remove duplicate elements\r\n    for(let i=0; i<nums.length;i++){\r\n        if(nums[i] === nums[i+1]){\r\n            nums.splice(i+1, 1);\r\n            i--\r\n        }\r\n    }\r\n    \r\n    return nums[2] !=undefined?nums[2]: nums[0]\r\n};"
  }
}
