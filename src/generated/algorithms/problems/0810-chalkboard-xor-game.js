export default {
  "id": 810,
  "name": "Chalkboard XOR Game",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/chalkboard-xor-game",
  "relativeDir": "C/Chalkboard XOR Game",
  "slug": "0810-chalkboard-xor-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 9,
    "java": 12,
    "python": 14
  },
  "languages": {
    "cpp": "// Runtime: 19 ms (Top 23.87%) | Memory: 13.1 MB (Top 34.84%)\r\nclass Solution {\r\npublic:\r\n    bool xorGame(vector<int>& nums) {\r\n        int val = 0;\r\n        for (auto& x : nums) val ^= x;\r\n        return val == 0 || size(nums) % 2 == 0;\r\n    }\r\n};",
    "python": "# Runtime: 84 ms (Top 36.7%) | Memory: 16.24 MB (Top 100.0%)\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Solution:\r\n  def xorGame(self, nums: List[int]) -> bool:\r\n    return functools.reduce(operator.xor, nums) == 0 or len(nums) % 2 == 0",
    "java": "class Solution {\r\n    public boolean xorGame(int[] nums) {\r\n        int x = 0;\r\n        for(int i=0;i<nums.length;i++){\r\n            x^=nums[i];\r\n        }\r\n        // if(x==0 || nums.length%2==0) // **This also works **\r\n        //     return true;\r\n        // return false;\r\n        return (x==0 || nums.length%2==0);\r\n    }\r\n}"
  }
}
