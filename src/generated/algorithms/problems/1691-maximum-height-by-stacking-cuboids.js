export default {
  "id": 1691,
  "name": "Maximum Height by Stacking Cuboids",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-height-by-stacking-cuboids",
  "relativeDir": "M/Maximum Height by Stacking Cuboids",
  "slug": "1691-maximum-height-by-stacking-cuboids",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 38,
    "python": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxHeight(vector<vector<int>>& cuboids) {\r\n        ios_base::sync_with_stdio(false);\r\n        cin.tie(NULL);\r\n        for(auto &x:cuboids){\r\n            sort(x.begin(),x.end());\r\n        }\r\n        \r\n        sort(cuboids.begin(),cuboids.end());\r\n        \r\n        int n=cuboids.size();\r\n        vector<int> dp(n,0);\r\n        for (int i=0;i<n;i++){\r\n            dp[i]=cuboids[i][2];\r\n            for (int j=0;j<i;j++){\r\n                if (cuboids[j][1]<=cuboids[i][1] && cuboids[j][2]<=cuboids[i][2]){\r\n                    dp[i]=max(dp[i],dp[j]+cuboids[i][2]);\r\n                }\r\n            }\r\n        }\r\n        return *max_element(dp.begin(),dp.end());\r\n    }\r\n};",
    "python": "# Runtime: 199 ms (Top 36.11%) | Memory: 13.8 MB (Top 87.22%)\r\n\r\nclass Solution:\r\n    def maxHeight(self, cuboids: List[List[int]]) -> int:\r\n        dp=[0]*len(cuboids)\r\n        max_value=0\r\n        for i in range(len(cuboids)):\r\n            cuboids[i].sort()\r\n        cuboids.sort()\r\n        for i in range(len(cuboids)):\r\n            dp[i]=cuboids[i][2]\r\n            for j in range(i):\r\n                if cuboids[i][0]>=cuboids[j][0] and cuboids[i][1]>=cuboids[j][1] and cuboids[i][2]>=cuboids[j][2]:\r\n                    dp[i]=max(dp[i],dp[j]+cuboids[i][2])\r\n            if dp[i]>max_value:\r\n                max_value=dp[i]\r\n        return max_value",
    "java": "// Runtime: 9 ms (Top 37.8%) | Memory: 41.26 MB (Top 83.6%)\r\n\r\nclass Solution {\r\n    public int maxHeight(int[][] cuboids) {\r\n        // Sorting all Dimensions\r\n        for(int[] arr : cuboids) Arrays.sort(arr);\r\n\r\n        // sort all cuboids on basis of height, if same then breadth,\r\n        // if same then length\r\n        Arrays.sort(cuboids, (a, b) -> (b[2] - a[2] == 0 ? (b[1] - a[1] == 0 ? b[0] - a[0] : b[1] - a[1]) : b[2] - a[2]));\r\n\r\n        // use logic of LIS(Longest Increasing Subsequence)\r\n        return helperTab(cuboids);\r\n\r\n    }\r\n    public int helperTab(int[][] nums){\r\n        int n = nums.length;\r\n        int[] currRow = new int[n + 1];\r\n        int[] nextRow = new int[n + 1];\r\n\r\n        for(int curr = n - 1; curr >= 0; curr--){\r\n            for(int prev = curr - 1; prev >= -1; prev--){\r\n                int take = 0;\r\n                if(prev == -1 || check(nums[curr], nums[prev])) take = nums[curr][2] + nextRow[curr + 1];\r\n                int notTake = 0 + nextRow[prev + 1];\r\n                currRow[prev + 1] = Math.max(take, notTake);\r\n            }\r\n            nextRow = currRow;\r\n        }\r\n        return nextRow[0];\r\n    }\r\n    // These function checks whether current cuboid can be placed above \r\n    //the below one or not, on the basis on condition given in question.\r\n    public boolean check(int[] a, int[] b){\r\n        if(a[0] <= b[0] && a[1] <= b[1] && a[2] <= b[2]) return true;\r\n        else return false;\r\n    }\r\n}"
  }
}
