export default {
  "id": 416,
  "name": "Partition Equal Subset Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/partition-equal-subset-sum",
  "relativeDir": "P/Partition Equal Subset Sum",
  "slug": "0416-partition-equal-subset-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 42,
    "python": 14,
    "javascript": 19
  },
  "languages": {
    "cpp": " class Solution {\r\npublic:\r\n    bool canPartition(vector<int>& nums) {\r\n        int sum = 0;\r\n        int n = nums.size();\r\n        for(int i = 0;i<n;i++)\r\n            sum = sum + nums[i];\r\n        cout<<sum;\r\n        \r\n        if(sum % 2 == 0){\r\n            int s = sum/2;\r\n            int t[n+1][s+1];\r\n            for(int i = 0; i<s+1;i++)\r\n                t[0][i] = false;\r\n            for(int i = 0;i<n+1;i++)\r\n                t[i][0] = true;\r\n            \r\n            for(int i =1;i<n+1;i++){\r\n                for(int j = 1; j<s+1;j++){\r\n                    if(nums[i-1] <= j)\r\n                        t[i][j] = t[i-1][j-nums[i-1]] || t[i-1][j];\r\n                    else\r\n                        t[i][j] = t[i-1][j];\r\n                }\r\n            }\r\n            return t[n][s];\r\n        }else\r\n            return false;\r\n    }\r\n};",
    "python": "// Runtime: 437 ms (Top 80.03%) | Memory: 18.00 MB (Top 70.21%)\r\n\r\nclass Solution:\r\n    def canPartition(self, nums: List[int]) -> bool:\r\n        dp, s = set([0]), sum(nums)\r\n        if s&1:\r\n            return False\r\n        for num in nums:\r\n            for curr in range(s>>1, num-1, -1):\r\n                if curr not in dp and curr-num in dp:\r\n                    if curr == s>>1:\r\n                        return True\r\n                    dp.add(curr)\r\n        return False",
    "java": "class Solution {\r\n    public boolean canPartition(int[] nums) {\r\n        int sum = 0;\r\n        for(int i=0; i<nums.length; i++){\r\n            sum = sum+nums[i];\r\n        }\r\n       \r\n        if(sum%2 !=0){\r\n            return false;\r\n        }\r\n        int[][] dp = new int[nums.length+1][sum];\r\n        for(int i=0; i<dp.length; i++){\r\n            Arrays.fill(dp[i],-1);\r\n        }\r\n       \r\n        return helper(nums,sum/2,0,dp)>= 1? true : false;\r\n    }\r\n    public int helper(int[] nums, int sum, int i, int[][] dp){\r\n        if(i==nums.length && sum==0){\r\n            return 1;\r\n        }\r\n        if(i==nums.length){\r\n            return 0;\r\n        }\r\n        if(sum < 0){\r\n            return 0;\r\n        }\r\n        if(dp[i][sum] != -1){\r\n            return dp[i][sum];\r\n        }\r\n        if(sum<nums[i]){\r\n           return dp[i][sum] = helper(nums,sum,i+1,dp);\r\n        }\r\n        int a = helper(nums,sum-nums[i],i+1,dp); //Take the value\r\n        int b = helper(nums,sum,i+1,dp); //Not take the value\r\n        if(a==1 || b==1){   // if any of the options is returning true then whole answer would be true\r\n                return dp[i][sum]=1;\r\n        }else{\r\n                return dp[i][sum]=0;\r\n        }\r\n    }\r\n}",
    "javascript": "var canPartition = function(nums) {\r\n    let sum = nums.reduce((prevVal, currValue) => prevVal + currValue, 0); // sum of each values\r\n    if (sum % 2 !== 0) return false; // return false if odd sum\r\n    \r\n    let target = sum / 2;  // ex.[1,5,11,5]  target is half which is 11\r\n    let dp = new Set(); // add unique values\r\n    dp.add(0); //intialize with 0\r\n    for (var i = nums.length - 1; i >= 0; i--) {  //start from end\r\n        nextDp = new Set(); \r\n        for (const ele of dp.values()) {\r\n           let newVal = ele + nums[i];\r\n           if(newVal === target) return true; \r\n           nextDp.add(newVal); \r\n        }\r\n        dp = new Set([...dp, ...nextDp]);\r\n    }\r\n    \r\n    return false;\r\n};"
  }
}
