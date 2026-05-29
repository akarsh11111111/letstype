export default {
  "id": 1955,
  "name": "Count Number of Special Subsequences",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-number-of-special-subsequences",
  "relativeDir": "C/Count Number of Special Subsequences",
  "slug": "1955-count-number-of-special-subsequences",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 19,
    "python": 18
  },
  "languages": {
    "cpp": "// Runtime: 236 ms (Top 97.78%) | Memory: 172.2 MB (Top 58.73%)\r\nclass Solution {\r\npublic:\r\n    int countSpecialSubsequences(vector<int>& nums) {\r\n        long long z=0,o=0,t=0;\r\n        long long mod =1e9 +7;\r\n        for(int i=0;i<nums.size();i++)\r\n        {\r\n            if(nums[i]==0)\r\n                z=(z+z+1)%mod;\r\n            else if(nums[i]==1)\r\n                o=(o+o+z)%mod;\r\n            else\r\n                t=(t+t+o)%mod;\r\n        }\r\n        return (((t%mod)+mod)%mod);\r\n    }\r\n};",
    "python": "# Runtime: 4322 ms (Top 46.43%) | Memory: 18 MB (Top 47.62%)\r\nclass Solution:\r\n    def countSpecialSubsequences(self, nums: List[int]) -> int:\r\n        if not nums:\r\n            return 0\r\n\r\n        last_0 = 0\r\n        last_1 = 0\r\n        last_2 = 0\r\n\r\n        for i in nums:\r\n            if i == 0:\r\n                last_0 = (2*last_0 + 1)% 1000000007\r\n            elif i == 1:\r\n                last_1 = (last_0 + 2*last_1) % 1000000007\r\n            elif i == 2:\r\n                last_2 = (last_1 + 2*last_2) % 1000000007\r\n        return last_2 % 1000000007",
    "java": "// Runtime: 81 ms (Top 33.85%) | Memory: 118.7 MB (Top 84.62%)\r\nclass Solution {\r\n    public int countSpecialSubsequences(int[] nums) {\r\n        long z = 0; //starting and ending with zero\r\n        long zo = 0; //starting with zero and ending with One\r\n        long zot = 0;//starting with zero and ending Two\r\n        int mod = 1000000007;\r\n        for (int i : nums) {\r\n            if (i == 0) {\r\n                z = ((2*z) % mod + 1) % mod; //zero = 2*zero+1\r\n            } else if (i == 1) {\r\n                zo = ((2 * zo) % mod + z % mod) % mod; //zero = 2*zeroOne+zero\r\n            } else {\r\n                zot = ((2 * zot) % mod + zo % mod) % mod; //zeroOneTwo = 2*zeroOneTwo+zeroOne\r\n            }\r\n        }\r\n        return (int)(zot%mod);\r\n    }\r\n}"
  }
}
