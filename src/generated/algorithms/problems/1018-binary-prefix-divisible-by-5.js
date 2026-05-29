export default {
  "id": 1018,
  "name": "Binary Prefix Divisible By 5",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-prefix-divisible-by-5",
  "relativeDir": "B/Binary Prefix Divisible By 5",
  "slug": "1018-binary-prefix-divisible-by-5",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 14,
    "python": 8,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    /*\r\n    1. We notice that 1 = 1; 10 = 1*2 + 0 = 2; 101 = 2*2 + 1 = 5; .Therefore, the current_decimal form of number = previous sum * 2 + nums[i];\r\n    2. It means: current_number = current_number * 2 + nums[i] (i = current index)\r\n    3. If we did that, the current_number will exceed integer limit => Therefore, we modulo the current_number by 5. We check if the remainder equals to 0 or not. By doing that, we can keep our current_number from 0 to 4, which will not exceed integer range.    \r\n    */\r\n    vector<bool> prefixesDivBy5(vector<int>& nums) {\r\n        vector<bool> answer;\r\n        int current_number = 0;\r\n        for(int i = 0; i < nums.size(); i++){\r\n            current_binary = (current_number *2 + nums[i])%5;\r\n            if(current_number == 0) answer.push_back(true);\r\n            else answer.push_back(false);\r\n        }\r\n        return answer;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def prefixesDivBy5(self, nums: List[int]) -> List[bool]:\r\n        cur = 0\r\n        res = []\r\n        for bit in nums:\r\n            cur = 2*cur + bit\r\n            res.append(cur % 5 == 0)\r\n        return res",
    "java": "class Solution {\r\n    public List<Boolean> prefixesDivBy5(int[] nums) {\r\n        List<Boolean> list = new ArrayList<>();\r\n        int sum=0;\r\n        for(int i=0;i<nums.length;i++){\r\n            sum=(sum*2+nums[i])%5;\r\n            if(sum==0)\r\n            list.add(true);\r\n            else\r\n            list.add(false);\r\n        }\r\n        return list;\r\n    }\r\n}",
    "javascript": "// Runtime: 59 ms (Top 81.36%) | Memory: 45.80 MB (Top 89.83%)\r\n\r\nvar prefixesDivBy5 = function(nums) {\r\n   let res = [];\r\n   let binary = 0;\r\n   for(let num of nums){\r\n       binary = (binary % 5) * 2 + num;\r\n       let checkBinary = (binary % 5 === 0);\r\n       res.push(checkBinary);\r\n   }    \r\n   return res;\r\n};"
  }
}
