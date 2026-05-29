export default {
  "id": 873,
  "name": "Length of Longest Fibonacci Subsequence",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/length-of-longest-fibonacci-subsequence",
  "relativeDir": "L/Length of Longest Fibonacci Subsequence",
  "slug": "0873-length-of-longest-fibonacci-subsequence",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 52,
    "java": 36,
    "python": 14,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 633 ms (Top 77.58%) | Memory: 145.9 MB (Top 23.71%)\r\nclass Solution {\r\npublic:\r\n\r\n    int help(int i,int j, unordered_map<int,int> &mp,vector<int> &nums , vector<vector<int>> &dp){\r\n\r\n        if(dp[i][j]!=-1)\r\n            return dp[i][j];\r\n\r\n        int x=nums[i]+nums[j];\r\n\r\n        if(mp.find(x)!=mp.end())\r\n        {\r\n            dp[i][j]=help(j,mp[x],mp,nums,dp);\r\n           return 1+dp[i][j];\r\n        }\r\n\r\n        return 1;\r\n    }\r\n\r\n   int solve(int idx ,int n, unordered_map<int,int> &mp,vector<int> &nums , vector<vector<int>> &dp)\r\n    {\r\n        int maxi=INT_MIN;\r\n\r\n        for(int i=idx;i<n;i++)\r\n        {\r\n            for(int j=i+1;j<n;j++)\r\n            {\r\n\r\n                int x=nums[i]+nums[j];\r\n\r\n                if(mp.find(x)!=mp.end())\r\n                {\r\n                 maxi=max(maxi,2+help(j,mp[x],mp,nums,dp));\r\n                }\r\n            }\r\n        }\r\n        return (maxi==INT_MIN?0:maxi);\r\n    }\r\n    int lenLongestFibSubseq(vector<int>& arr) {\r\n\r\n        unordered_map<int,int> mp;\r\n        int n=arr.size();\r\n        vector<vector<int>> dp(n,vector<int> (n,-1));\r\n\r\n        for(int i=0;i<arr.size();i++)\r\n            mp[arr[i]]=i;\r\n\r\n       return solve(0,n,mp,arr,dp);\r\n\r\n    }\r\n};",
    "python": "class Solution(object): #DP. Time Complexity: O(N^2), Space Complexity: O(NlogM), M = max(A)\r\n    def lenLongestFibSubseq(self, A):\r\n        index = {Ai: i for i, Ai in enumerate(A)}\r\n        dp = collections.defaultdict(lambda: 2)\r\n        ans = 0\r\n        for k, Ak in enumerate(A): #Following IJK idiom here\r\n            for j in range(k-1,0,-1):            \r\n                i = index.get(Ak - A[j], None)\r\n                if Ak - A[j] >= A[j]: break #Pruning for illegal Ai\r\n                if i is not None and i < j:\r\n                    cur_len = dp[j, k] = dp[i, j] + 1\r\n                    ans = max(ans, cur_len)\r\n        \r\n        return ans # ans is either 0 or >=3 for SURE",
    "java": "// Runtime: 46 ms (Top 97.6%) | Memory: 54.76 MB (Top 33.3%)\r\n\r\nclass Solution {\r\n    /*\r\n    * dp[i][j] is the max length of fibbonacci series whose last two elements\r\n    * are A[i] & A[j]\r\n    * for any integer A[k] we need to find two number A[i] & A[j] such that\r\n    * i < j < k and A[i] + A[j] == A[k], we can find such pairs in O(n) time\r\n    * complexity.\r\n    * if there exist i,j,k such that i < j < k and A[i] + A[j] == A[k] then\r\n    * dp[k][j] = dp[i][j] + 1 (A[k], A[j] are last two elements of fibbonacc series)\r\n    */\r\n    public int lenLongestFibSubseq(int[] A) {\r\n        int n = A.length;\r\n        int[][] dp = new int[n][n];\r\n        int result = 0;\r\n        for (int k = 2; k < n; k++) {\r\n            int i = 0, j = k-1;\r\n            while(i < j) {\r\n                int sum = A[i] + A[j] - A[k];\r\n                if (sum < 0) {\r\n                    i++;\r\n                } else if (sum > 0) {\r\n                    j--;\r\n                } else {\r\n                    // ith, jth kth element are fibbonaci sequence\r\n                    dp[j][k] = dp[i][j] + 1; // since numbers are unique\r\n                    result = Math.max(result, dp[j][k]);\r\n                    i++;\r\n                    j--;\r\n                }\r\n            }\r\n        }\r\n        return result + 2 >= 3? result + 2: 0;\r\n    }\r\n}",
    "javascript": "// Runtime: 623 ms (Top 50.00%) | Memory: 44.1 MB (Top 86.67%)\r\nvar lenLongestFibSubseq = function(arr) {\r\n    let ans = 2;\r\n    const set = new Set(arr);\r\n    const len = arr.length\r\n    for(let i = 0; i < len; i++) {\r\n        for(let j = i + 1; j < len; j++) {\r\n            let a = arr[i], b = arr[j], len = 2;\r\n            while(set.has(a + b)) {\r\n                len++;\r\n                let temp = a + b;\r\n                a = b;\r\n                b = temp;\r\n            }\r\n            ans = Math.max(len, ans);\r\n        }\r\n    }\r\n    return ans == 2 ? 0 : ans;\r\n};"
  }
}
