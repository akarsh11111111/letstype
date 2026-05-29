export default {
  "id": 1250,
  "name": "Check If It Is a Good Array",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-it-is-a-good-array",
  "relativeDir": "C/Check If It Is a Good Array",
  "slug": "1250-check-if-it-is-a-good-array",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 10,
    "java": 21,
    "python": 8,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 100 ms (Top 27.69%) | Memory: 29.4 MB (Top 37.30%)\r\nclass Solution {\r\npublic:\r\n    bool isGoodArray(vector<int>& nums) {\r\n        int gcd=0;\r\n        for(int i=0; i<nums.size(); i++){\r\n            gcd=__gcd(gcd,nums[i]);\r\n        }return gcd==1;\r\n    }\r\n};",
    "python": "# Runtime: 527 ms (Top 22.03%) | Memory: 24.7 MB (Top 71.19%)\r\nclass Solution:\r\n    def isGoodArray(self, nums: List[int]) -> bool:\r\n        def gcd(a,b):\r\n            while a:\r\n                a, b = b%a, a\r\n            return b\r\n        return reduce(gcd,nums)==1",
    "java": "class Solution {\r\n    public boolean isGoodArray(int[] nums) {\r\n        int gcd = nums[0];\r\n        for(int i =1; i<nums.length; i++){\r\n           gcd = GCD(gcd, nums[i]);\r\n            if (gcd==1)\r\n                return true;\r\n        }\r\n        return gcd ==1;\r\n        \r\n    }\r\n    int GCD(int a, int b){\r\n        if(b==0){\r\n            return a;\r\n        }\r\n        else{\r\n            return GCD(b, a%b);\r\n        }\r\n            \r\n    }\r\n}",
    "javascript": "// Runtime: 150 ms (Top 20.00%) | Memory: 48.4 MB (Top 40.00%)\r\n\r\nvar isGoodArray = function(nums) {\r\n    let gcd = nums[0]\r\n\r\n    for(let n of nums){while(n){[gcd, n] = [n, gcd % n]}}\r\n\r\n    return (gcd === 1)\r\n};"
  }
}
