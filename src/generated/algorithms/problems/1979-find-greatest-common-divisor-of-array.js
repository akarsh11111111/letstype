export default {
  "id": 1979,
  "name": "Find Greatest Common Divisor of Array",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-greatest-common-divisor-of-array",
  "relativeDir": "F/Find Greatest Common Divisor of Array",
  "slug": "1979-find-greatest-common-divisor-of-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 16,
    "python": 12,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 20 ms (Top 7.45%) | Memory: 12.5 MB (Top 65.76%)\r\nclass Solution {\r\npublic:\r\n    int findGCD(vector<int>& nums) {\r\n        int mn = nums[0], mx = nums[0];\r\n        for(auto n: nums)\r\n        {\r\n            // finding maximum, minimum values of the array.\r\n            if(n > mx) mx = n;\r\n            if(n < mn) mn = n;\r\n        }\r\n\r\n        for(int i = mn; i >= 1; i--)\r\n        {\r\n            // finding greatest common divisor (GCD) of max, min.\r\n            if((mn % i == 0) && (mx % i == 0)) return i;\r\n        }\r\n        return 1;\r\n    }\r\n};",
    "python": "# Runtime: 282 ms (Top 5.10%) | Memory: 13.9 MB (Top 81.34%)\r\nclass Solution:\r\n    def findGCD(self, nums: List[int]) -> int:\r\n        i_min = min(nums)\r\n        i_max = max(nums)\r\n        greater = i_max\r\n        while True:\r\n            if greater % i_min == 0 and greater % i_max == 0:\r\n                lcm = greater\r\n                break\r\n            greater += 1\r\n        return int(i_min/(lcm/i_max))",
    "java": "// Runtime: 3 ms (Top 25.8%) | Memory: 42.56 MB (Top 95.7%)\r\n\r\nclass Solution {\r\n    public int findGCD(int[] nums) {\r\n        Arrays.sort(nums);\r\n        int n=nums[nums.length-1];\r\n        int result=nums[0];\r\n        while(result>0){\r\n            if(nums[0]%result==0 && n%result==0){\r\n                break;\r\n            }\r\n            result--;\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "// Runtime: 102 ms (Top 42.21%) | Memory: 42.3 MB (Top 87.69%)\r\nvar findGCD = function(nums) {\r\n    let newNum = [Math.min(...nums) , Math.max(...nums)]\r\n    let firstNum = newNum[0]\r\n    let secondNum = newNum[1]\r\n    while(secondNum) {\r\n    let newNum = secondNum;\r\n    secondNum = firstNum % secondNum;\r\n    firstNum = newNum;\r\n  }\r\n   return firstNum\r\n};"
  }
}
