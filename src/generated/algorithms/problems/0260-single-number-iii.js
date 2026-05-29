export default {
  "id": 260,
  "name": "Single Number III",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/single-number-iii",
  "relativeDir": "S/Single Number III",
  "slug": "0260-single-number-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 24,
    "python": 4,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> singleNumber(vector<int>& nums){\r\n        vector<int> ans;\r\n        int xorr = 0;\r\n        for(int i=0; i<nums.size(); i++){\r\n            xorr = xorr xor nums[i];\r\n        }\r\n        int count  = 0;\r\n        while(xorr){\r\n            if(xorr & 1){\r\n                break;\r\n            }\r\n            count++;\r\n            xorr = xorr >> 1;\r\n        }\r\n        int xorr1 = 0;\r\n        int xorr2 = 0;\r\n        for(int i=0; i<nums.size(); i++){\r\n            if(nums[i] & (1 << count)){\r\n                xorr1 = xorr1 xor nums[i];\r\n            }\r\n            else{\r\n                xorr2 = xorr2 xor nums[i];\r\n            }\r\n        }\r\n        ans.push_back(xorr1);\r\n        ans.push_back(xorr2);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def singleNumber(self, nums: List[int]) -> List[int]:\r\n        x = Counter(nums)\r\n        return([y for y in x if x[y] == 1])",
    "java": "// Runtime: 1 ms (Top 99.89%) | Memory: 44.50 MB (Top 39.71%)\r\n\r\nclass Solution {\r\n    public int[] singleNumber(int[] nums) {\r\n        if (nums == null || nums.length < 2 || nums.length % 2 != 0) {\r\n            throw new IllegalArgumentException(\"Invalid Input\");\r\n        }\r\n\r\n        int aXORb = 0;\r\n        for (int n : nums) {\r\n            aXORb ^= n;\r\n        }\r\n\r\n        int rightSetBit = aXORb & -aXORb;\r\n        int a = 0;\r\n        for (int n : nums) {\r\n            if ((n & rightSetBit) != 0) {\r\n                a ^= n;\r\n            }\r\n        }\r\n\r\n        return new int[] {a, aXORb ^ a};\r\n    }\r\n}",
    "javascript": "// Runtime: 192 ms (Top 11.57%) | Memory: 47.5 MB (Top 5.66%)\r\nvar singleNumber = function(nums) {\r\n    let hash ={}\r\n    for ( let num of nums){\r\n        if( hash[num]===undefined)\r\n            hash[num] =1\r\n        else\r\n            hash[num]++\r\n    }\r\n\r\n    let result =[]\r\n    for ( let [key, value] of Object.entries(hash)){\r\n         if(value==1)\r\n         result.push(key)\r\n    }\r\n    return result\r\n};"
  }
}
