export default {
  "id": 2167,
  "name": "Minimum Time to Remove All Cars Containing Illegal Goods",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods",
  "relativeDir": "M/Minimum Time to Remove All Cars Containing Illegal Goods",
  "slug": "2167-minimum-time-to-remove-all-cars-containing-illegal-goods",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 30,
    "python": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int minimumTime(string s) {\r\n        int n=s.length();\r\n        vector<int>dp(n,0);\r\n        if(s[n-1]=='0'){\r\n            dp[n-1]=0;\r\n        } else {\r\n            dp[n-1]=1;\r\n        }\r\n        for(int i=n-2;i>=0;i--){\r\n            if(s[i]=='0')dp[i]=dp[i+1];\r\n            if(s[i]=='1'){\r\n                dp[i]=2+dp[i+1]; // consider current index to be a middle one and remove\r\n                dp[i]=min(dp[i],n-i); // or remove all to the right\r\n            }\r\n        }\r\n\t\t// now go from left to right\r\n        int ans=dp[0];\r\n        for(int i=0;i<n-1;i++){\r\n            ans=min(ans,i+1+dp[i+1]); // cost of removing all from left and dp[i+1]\r\n        }\r\n        ans=min(ans,n); // taking overall minimum\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minimumTime(self, s):\r\n        def minSum(nums):\r\n            dp = [0]*len(nums)\r\n            dp[0] = nums[0]\r\n            for i in range(1, len(nums)):\r\n                dp[i] = min(nums[i], nums[i] + dp[i-1])\r\n            return min(0, min(dp))\r\n\r\n        n = len(s)\r\n        s1 = [1 if i == \"1\" else -1 for i in s]\r\n        score = minSum(s1)\r\n       \r\n        return n + score",
    "java": "// Runtime: 42 ms (Top 58.8%) | Memory: 47.53 MB (Top 50.0%)\r\n\r\nclass Solution {\r\n    public int minimumTime(String s) {\r\n        int n = s.length();\r\n        int min = s.length();\r\n        int[] nums = new int[n];\r\n        for (int i = 0; i < n; i++)\r\n            nums[i] = s.charAt(i) - '0';\r\n\r\n\t\t// step1\r\n        int[] leftOptimized = new int[n + 2];\r\n        for (int i = 1; i <= n; i++) {\r\n            leftOptimized[i] = Math.min(i, leftOptimized[i - 1] + (nums[i - 1] == 1? 2: 0));\r\n        }\r\n\r\n\t\t// step2\r\n        int[] rightOptimized = new int[n + 2];\r\n        for (int i = n; i > 0; i--) {\r\n            rightOptimized[i] = Math.min(n - i + 1, rightOptimized[i + 1] + (nums[i - 1] == 1? 2: 0));\r\n        }\r\n\r\n\t\t// step3\r\n        for (int p = 0; p <= n; p++) {\r\n            min = Math.min(min, leftOptimized[p] + rightOptimized[p + 1]);\r\n        }\r\n\r\n        return min;\r\n    }\r\n}"
  }
}
