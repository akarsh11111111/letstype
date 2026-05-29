export default {
  "id": 645,
  "name": "Set Mismatch",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/set-mismatch",
  "relativeDir": "S/Set Mismatch",
  "slug": "0645-set-mismatch",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 16,
    "python": 18,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 63 ms (Top 47.00%) | Memory: 28.6 MB (Top 35.26%)\r\nclass Solution {\r\npublic:\r\n    vector<int> findErrorNums(vector<int>& nums)\r\n    {\r\n        unordered_map<int,int> m;\r\n        int p,q;\r\n        for(auto &x:nums)\r\n        {\r\n            m[x]++;\r\n            if(m[x]==2)\r\n            {\r\n                p=x;\r\n                break;\r\n            }\r\n        }\r\n        int n=nums.size();\r\n        q=(n*(n+1))/2-accumulate(nums.begin(),nums.end(),0)+p;\r\n        return {p,q};\r\n\r\n    }\r\n};\r\n// if you like the solution plz upvote.",
    "python": "// Runtime: 150 ms (Top 93.95%) | Memory: 18.00 MB (Top 86.53%)\r\n\r\nclass Solution:\r\n    def findErrorNums(self, nums):\r\n        n = len(nums)\r\n        v = [0] * (n + 1)\r\n        missing, duplicate = 0, 0\r\n\r\n        for num in nums:\r\n            v[num] += 1\r\n\r\n        for i in range(1, len(v)):\r\n            if v[i] == 2:\r\n                duplicate = i\r\n            if v[i] == 0:\r\n                missing = i\r\n\r\n        return [duplicate, missing]",
    "java": "// Runtime: 2 ms (Top 97.57%) | Memory: 45.20 MB (Top 54.78%)\r\n\r\nclass Solution {\r\n    public int[] findErrorNums(int[] nums) {\r\n        int N = nums.length, sum = N * (N + 1) / 2;\r\n        int[] ans = new int[2];\r\n        boolean[] seen = new boolean[N+1];\r\n        for (int num : nums) {\r\n            sum -= num;\r\n            if (seen[num]) ans[0] = num;\r\n            seen[num] = true;\r\n        }\r\n        ans[1] = sum + ans[0];\r\n        return ans;\r\n    }\r\n}",
    "javascript": "class Solution {\r\npublic:\r\n    vector<int> findErrorNums(vector<int>& nums) \r\n    {\r\n        unordered_map<int,int> m;\r\n        int p,q;\r\n        for(auto &x:nums)\r\n        {\r\n            m[x]++;\r\n            if(m[x]==2)\r\n            {\r\n                p=x;\r\n                break;\r\n            }\r\n        }\r\n        int n=nums.size();\r\n        q=(n*(n+1))/2-accumulate(nums.begin(),nums.end(),0)+p;\r\n        return {p,q};\r\n        \r\n    }\r\n};\r\n// if you like the solution plz upvote."
  }
}
