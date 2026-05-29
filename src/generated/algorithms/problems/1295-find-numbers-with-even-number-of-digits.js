export default {
  "id": 1295,
  "name": "Find Numbers with Even Number of Digits",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-numbers-with-even-number-of-digits",
  "relativeDir": "F/Find Numbers with Even Number of Digits",
  "slug": "1295-find-numbers-with-even-number-of-digits",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 13,
    "python": 7,
    "javascript": 7
  },
  "languages": {
    "cpp": "// Runtime: 11 ms (Top 48.50%) | Memory: 9.9 MB (Top 12.31%)\r\nclass Solution {\r\npublic:\r\n    int findNumbers(vector<int>& nums) {\r\n        int count = 0;\r\n\r\n        for(auto it:nums)\r\n        {\r\n            int amount = 0;\r\n            while(it>0)\r\n            {\r\n                amount++;\r\n                it /= 10;\r\n            }\r\n            if (amount % 2 == 0)\r\n            {\r\n                count++;\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findNumbers(self, nums: List[int]) -> int:\r\n        even_count = 0\r\n        for elem in nums:\r\n            if(len(str(elem))%2 == 0):\r\n                even_count += 1\r\n        return even_count",
    "java": "class Solution \r\n{\r\n    public int findNumbers(int[] nums) \r\n    {\r\n        int count = 0;\r\n        for(int val : nums)\r\n        {\r\n            if((val>9 && val<100)  ||  (val>999 && val<10000)  || val==100000  )\r\n                count++;\r\n        }\r\n        return count;\r\n    }\r\n}",
    "javascript": "var findNumbers = function(nums) {\r\n\tlet count = 0;\r\n\tfor(let num of nums){\r\n\t\tif(String(num).length % 2 === 0) count++\r\n\t}\r\n\treturn count;\r\n};"
  }
}
