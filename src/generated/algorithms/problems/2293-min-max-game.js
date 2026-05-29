export default {
  "id": 2293,
  "name": "Min Max Game",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/min-max-game",
  "relativeDir": "M/Min Max Game",
  "slug": "2293-min-max-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 23,
    "python": 15,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minMaxGame(vector<int>& nums) {\r\n        int n = nums.size(); \r\n        if(n==1) return nums[0];  // Base case\r\n        vector<int> newNum(n/2); \r\n        for(int i=0; i<n/2; i++) { \r\n            if(i%2==0) newNum[i] = min(nums[2 * i], nums[2 * i + 1]); \r\n            else newNum[i] = max(nums[2 * i], nums[2 * i + 1]); \r\n        } \r\n        int res = minMaxGame(newNum); // Recursive call\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minMaxGame(self, a: List[int]) -> int:\r\n        \r\n        def solve(n):\r\n            if n==1:\r\n                return\r\n            for i in range(n//2):\r\n                if i%2:\r\n                    a[i] = max (a[2*i], a[2*i+1])\r\n                else:\r\n                    a[i] = min (a[2*i], a[2*i+1])\r\n            solve(n//2)\r\n            return\r\n        solve(len(a))\r\n        return a[0]",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 43.60 MB (Top 22.49%)\r\n\r\nclass Solution {\r\n    public int minMaxGame(int[] nums) {\r\n        int len=nums.length;\r\n        if(len==1)\r\n            return nums[0];\r\n        int[] newNums=new int[len/2];\r\n        int index=0;\r\n        for(int i=0;i<len;i+=2)\r\n        {\r\n            if(index%2==0)\r\n            {\r\n                newNums[index++]=Math.min(nums[i],nums[i+1]);\r\n            }\r\n            else\r\n            {\r\n                newNums[index++]=Math.max(nums[i],nums[i+1]);\r\n            }\r\n        }\r\n        return minMaxGame(newNums);\r\n    }\r\n}",
    "javascript": "// Runtime: 105 ms (Top 27.62%) | Memory: 42 MB (Top 97.79%)\r\nvar minMaxGame = function(nums) {\r\n    while (nums.length > 1) {\r\n        let half = nums.length / 2;\r\n        for (let i = 0; i < half; i++)\r\n            nums[i] = i % 2 === 0 ? Math.min(nums[2 * i], nums[2 * i + 1]) : Math.max(nums[2 * i], nums[2 * i + 1]);\r\n\r\n        nums.length = half;\r\n    }\r\n\r\n    return nums[0];\r\n};"
  }
}
