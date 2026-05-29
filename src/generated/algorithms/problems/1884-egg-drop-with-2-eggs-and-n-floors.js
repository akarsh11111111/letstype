export default {
  "id": 1884,
  "name": "Egg Drop With 2 Eggs and N Floors",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors",
  "relativeDir": "E/Egg Drop With 2 Eggs and N Floors",
  "slug": "1884-egg-drop-with-2-eggs-and-n-floors",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 22,
    "python": 5,
    "javascript": 25
  },
  "languages": {
    "cpp": "int dp[1001][1001];\r\nclass Solution {\r\npublic:\r\n    int solve(int e, int f){\r\n        if(f == 0 || f == 1){\r\n            return f;\r\n        }\r\n        if(e == 1){\r\n            return f;\r\n        }\r\n        if(dp[e][f] != -1) return dp[e][f];\r\n        int mn = INT_MAX;\r\n        int left = 1, right = f;\r\n        while(left <= right){\r\n            int mid = left + (right-left)/2;\r\n            int left_result = solve(e-1,mid-1);\r\n            int right_result = solve(e,f-mid);\r\n            mn = min(mn,1+max(left_result, right_result));\r\n            if(left_result<right_result)\r\n                left = mid+1;\r\n            else\r\n                right = mid-1;\r\n        }\r\n        return dp[e][f] = mn;\r\n    }\r\n    int twoEggDrop(int n) {\r\n        memset(dp, -1, sizeof(dp));\r\n        return solve(2,n);\r\n    }\r\n};",
    "python": "// Runtime: 37 ms (Top 76.06%) | Memory: 17.40 MB (Top 35.12%)\r\n\r\nclass Solution:\r\n    def twoEggDrop(self, n: int) -> int:\r\n        return ceil(((1+n*8)**0.5-1)/2)",
    "java": "// Runtime: 74 ms (Top 32.31%) | Memory: 42.5 MB (Top 12.73%)\r\nclass Solution {\r\n    public int twoEggDrop(int n) {\r\n        int egg = 2; // hard coded to 2 eggs for this problem\r\n        int[][] dp = new int[n+1][egg+1];\r\n        return eggDrop(n, egg, dp);\r\n    }\r\n\r\n    int eggDrop(int n, int egg, int[][] dp) {\r\n        if(n <= 2 || egg == 1) return n;\r\n        if(dp[n][egg] != 0) return dp[n][egg];\r\n        int min = n; // when you drop at each floor starting from 1\r\n        for(int i = 1; i < n; i++) {\r\n            int eggBreak = 1 + eggDrop(i-1, egg-1, dp); // drops needed if egg breaks at this floor\r\n            int noEggBreak = 1 + eggDrop(n-i, egg, dp); // drops needed if egg does not break at this floor\r\n            int moves = Math.max(eggBreak, noEggBreak); // since we want certain moves for n floor take max\r\n            min = Math.min(min, moves);\r\n        }\r\n        dp[n][egg] = min;\r\n        return min;\r\n    }\r\n}",
    "javascript": "/** https://leetcode.com/problems/egg-drop-with-2-eggs-and-n-floors/\r\n * @param {number} n\r\n * @return {number}\r\n */\r\nvar twoEggDrop = function(n) {\r\n  // Writing down strategy on example 2 we can observe following pattern:\r\n  // Drop at floor:   9   22    34    45    55    64    72    79    85    90    94    97    99    100\r\n  // Diff from prev:      13    12    11    10    9     8     7     6     5     4     3     2     1\r\n  \r\n  // So we have hypothesis algorithm\r\n  // That is, `n` minus `d` until `result(n)` is smaller than `d`, where `d` start at 1 and increment by 1 for each iteration. If `result(n)` is 0, subtract 1, else return the result\r\n  \r\n  let d = 1;\r\n  \r\n  while (n > d) {\r\n    n -= d;\r\n    d++;\r\n  }\r\n  \r\n  if (n == 0) {\r\n    d--;\r\n  }\r\n  \r\n  return d;\r\n};"
  }
}
