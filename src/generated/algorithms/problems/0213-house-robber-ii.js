export default {
  "id": 213,
  "name": "House Robber II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/house-robber-ii",
  "relativeDir": "H/House Robber II",
  "slug": "0213-house-robber-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 85,
    "java": 38,
    "python": 17,
    "javascript": 28
  },
  "languages": {
    "cpp": "\r\nclass Solution {\r\npublic:\r\n    int rob(vector<int>& nums) \r\n    {\r\n        int n = nums.size();  \r\n        if(n == 1)\r\n        {\r\n            return nums[0];\r\n        }\r\n        //dp[n][2][1]\r\n        vector<vector<vector<int>>> dp(n+1, vector<vector<int>>(2, vector<int>(2, -1)));\r\n        \r\n        int maxm = 0;\r\n        for(int i = 0; i < n; i++)\r\n        {\r\n            for(int j = 0; j < 2; j++)\r\n            {\r\n                for(int k = 0; k < 2; k++)\r\n                {\r\n                    maxm = max(maxm, dp_fun(dp, i, j, k, nums));\r\n                }\r\n            }\r\n        }\r\n        \r\n        return maxm;\r\n        \r\n    }\r\n    \r\n    int dp_fun(vector<vector<vector<int>>> &dp, int ind, int num, int last, vector<int> &ar)\r\n    {\r\n        int n = ar.size();\r\n        if(dp[ind][num][last] == -1)\r\n        {\r\n            if(ind == 0)\r\n            {\r\n                if(last == 1)\r\n                {\r\n                    dp[ind][num][last] = 0;\r\n                }\r\n                else \r\n                {\r\n                    if(num == 1)\r\n                    {\r\n                        dp[ind][num][last] = ar[ind];\r\n                    }\r\n                    else \r\n                    {\r\n                        dp[ind][num][last] = 0;\r\n                    }\r\n                }\r\n            }\r\n            else if (ind == n-1)\r\n            {\r\n                if(num == 0)\r\n                {\r\n                    dp[ind][num][last] = 0;\r\n                }\r\n                else \r\n                {\r\n                    if(last == 0)\r\n                    {\r\n                        dp[ind][num][last] = dp_fun(dp, ind-1, 1, 0, ar);    \r\n                    }\r\n                    else \r\n                    {\r\n                        dp[ind][num][last] = ar[ind] + dp_fun(dp, ind-1, 0, 1, ar);\r\n                    }\r\n                }\r\n            }\r\n            else \r\n            {\r\n                if(num == 1)\r\n                {\r\n                    dp[ind][num][last] = max(ar[ind] + dp_fun(dp, ind-1, 0, last, ar), dp_fun(dp, ind-1, 1, last, ar));\r\n                }\r\n                else \r\n                {\r\n                    dp[ind][num][last] = dp_fun(dp, ind-1, 1, last, ar);\r\n                }\r\n            }\r\n        }\r\n        return dp[ind][num][last];\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def rob(self, nums):\r\n        \"\"\"\r\n        :type nums: List[int]\r\n        :rtype: int\r\n        \"\"\"\r\n        if len(nums) == 1:\r\n            return nums[0]\r\n        def helper(nums):\r\n            one, two = 0, 0\r\n            for i in nums:\r\n                temp = max(i + one, two)\r\n                one = two\r\n                two = temp\r\n            return two\r\n        \r\n        return max(helper(nums[:-1]), helper(nums[1:]))",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 39.4 MB (Top 99.44%)\r\nclass Solution {\r\n    public int rob(int[] nums) {\r\n        if(nums.length==1){\r\n            return nums[0];\r\n        }\r\n        int[] t = new int[nums.length];\r\n        for(int i = 0 ; i < t.length;i++){\r\n            t[i] = -1;\r\n        }\r\n        int[] k = new int[nums.length];\r\n        for(int i = 0 ; i < k.length;i++){\r\n            k[i] = -1;\r\n        }\r\n        return Math.max(helper(nums,0,0,t),helper(nums,1,1,k));\r\n    }\r\n    static int helper(int[] nums, int i,int start , int[] t){\r\n        if(start==0 && i==nums.length-2){\r\n            return nums[i];\r\n        }\r\n        if(start==1 && i==nums.length-1){\r\n            return nums[i];\r\n        }\r\n        if(start==0 && i>=nums.length-1){\r\n            return 0;\r\n        }\r\n        if(start==1 && i>=nums.length){\r\n            return 0;\r\n        }\r\n        if(t[i] != -1){\r\n            return t[i];\r\n        }\r\n        int pick = nums[i]+helper(nums,i+2,start,t);\r\n        int notpick = helper(nums,i+1,start,t);\r\n        t[i] = Math.max(pick,notpick);\r\n        return t[i];\r\n    }\r\n}",
    "javascript": "// Runtime: 81 ms (Top 62.79%) | Memory: 42.1 MB (Top 52.33%)\r\nvar rob = function(nums) {\r\n\r\n    let dp = []\r\n    dp[0] = [0,0]\r\n    dp[1] = [nums[0],0]\r\n\r\n    for(let i=2; i<=nums.length;i++){\r\n        let val = nums[i-1]\r\n\r\n        let rob = dp[i-2][0] + val\r\n        let dont = dp[i-1][0]\r\n        let noFirst = dp[i-2][1] + val\r\n\r\n        let best = (rob>=dont)?rob:dont\r\n\r\n        if(dp[i-1][1]>noFirst) noFirst=dp[i-1][1]\r\n\r\n        if(i!=nums.length){\r\n            dp[i] = [best,noFirst]\r\n        }else{\r\n            dp[i] = [dont,noFirst]\r\n        }\r\n\r\n    }\r\n    return (dp[nums.length][0]>=dp[nums.length][1]) ? dp[nums.length][0]:dp[nums.length][1]\r\n\r\n};"
  }
}
