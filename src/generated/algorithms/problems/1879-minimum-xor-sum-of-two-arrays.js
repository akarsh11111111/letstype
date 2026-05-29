export default {
  "id": 1879,
  "name": "Minimum XOR Sum of Two Arrays",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-xor-sum-of-two-arrays",
  "relativeDir": "M/Minimum XOR Sum of Two Arrays",
  "slug": "1879-minimum-xor-sum-of-two-arrays",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 39,
    "python": 10
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int dp[14][16384];\r\n    int dfs(vector<int> &nums1, vector<int> &nums2, int used, int i) {\r\n        if (i == nums1.size())\r\n            return 0;\r\n\t\t\t\r\n        if (dp[i][used] > -1)\r\n            return dp[i][used];\r\n        int small = INT_MAX;\r\n        for (int j = 0; j < nums2.size(); j++) {\r\n            if (!(used & (1 << j))) {\r\n                small = min(small, (nums1[i] xor nums2[j]) + dfs(nums1, nums2, used | (1 << j), i + 1));\r\n            }\r\n        }\r\n        return dp[i][used] = small;\r\n    }\r\n    int minimumXORSum(vector<int>& nums1, vector<int>& nums2) {    \r\n        memset(dp, -1, sizeof(dp));\r\n        return dfs(nums1, nums2, 0, 0);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumXORSum(self, a: List[int], b: List[int]) -> int:\r\n        @cache\r\n        def dp(mask: int) -> int:\r\n            i = bin(mask).count(\"1\")\r\n            if i >= len(a):\r\n                return 0\r\n            return min((a[i] ^ b[j]) + dp(mask + (1 << j)) \r\n                       for j in range(len(b)) if mask & (1 << j) == 0)\r\n        return dp(0)",
    "java": "\r\n\r\nclass Solution {\r\n    Integer[][] cache;\r\n    \r\n    public int minimumXORSum(int[] nums1, int[] nums2) {\r\n        int n = nums1.length;\r\n        \r\n        cache = new Integer[n][1 << n];\r\n\r\n        return getMinXorSum(0, 0, nums1, nums2);\r\n    }\r\n    \r\n    \r\n    private int  getMinXorSum(int index, int mask, int[] nums1, int[] nums2){\r\n        if(index == nums1.length) return 0;\r\n        \r\n        //retrieve from cache\r\n        if(cache[index][mask] != null) return cache[index][mask];\r\n        \r\n        //find minimum         \r\n        int minXorSum = Integer.MAX_VALUE;\r\n\r\n        for(int i = 0; i < nums2.length; i++){\r\n            if((mask >> i & 1) == 1) continue;\r\n            \r\n            int xorSum =  (nums1[index] ^ nums2[i]) + getMinXorSum(index + 1, mask | (1 << i), nums1, nums2);\r\n            \r\n            //update minimum xor sum\r\n            minXorSum  = Math.min(xorSum, minXorSum);\r\n        }\r\n        \r\n        //store in cache\r\n        cache[index][mask] = minXorSum;\r\n        \r\n        return minXorSum;\r\n    }\r\n    \r\n}"
  }
}
