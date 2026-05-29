export default {
  "id": 935,
  "name": "Knight Dialer",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/knight-dialer",
  "relativeDir": "K/Knight Dialer",
  "slug": "0935-knight-dialer",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "java": 28,
    "python": 33,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 48 ms (Top 81.41%) | Memory: 8.50 MB (Top 76.13%)\r\n\r\nclass Solution {\r\npublic:\r\n    static const int mod = 1e9 + 7;\r\n    vector<vector<int>> MOVES = {\r\n    {4, 6},\r\n    {8, 6},\r\n    {7, 9},\r\n    {4, 8},\r\n    {3, 9, 0},\r\n    {},\r\n    {0, 1, 7},\r\n    {2, 6},\r\n    {1, 3},\r\n    {2, 4},\r\n};\r\n\r\n    int cache[5001][10];\r\n\r\n    int knightDialer(int n) {\r\n        vector<int> nextNumbers = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};\r\n        return knightDialer(n, nextNumbers);\r\n    }\r\n\r\n    int knightDialer(int remaining, vector<int>& nextNumbers) {\r\n        if (remaining == 1)\r\n            return nextNumbers.size();\r\n\r\n        int count = 0;\r\n        for (int nextNumber : nextNumbers) {\r\n            int cur = cache[remaining][nextNumber];\r\n            if (cur == 0) {\r\n                cur = knightDialer(remaining - 1, MOVES[nextNumber]);\r\n                cache[remaining][nextNumber] = cur;\r\n            }\r\n            count += cur;\r\n            count %= mod;\r\n        }\r\n        return count;\r\n    }\r\n};",
    "python": "// Runtime: 226 ms (Top 89.51%) | Memory: 16.80 MB (Top 56.81%)\r\n\r\nclass Solution:\r\n    MOD = 10**9 + 7\r\n\r\n    def knightDialer(self, n: int) -> int:\r\n        # Initialize an array to store the possible positions of the knight on the phone pad\r\n        cur_pos = [1] * 10\r\n\r\n        # Loop through the number of jumps required\r\n        for jump in range(2, n + 1):\r\n            # Create a new list to store the updated positions after each jump\r\n            new_pos = [0] * 10\r\n\r\n            # Calculate the new positions based on the valid knight moves\r\n            new_pos[0] = (cur_pos[6] + cur_pos[4]) % self.MOD\r\n            new_pos[1] = (cur_pos[6] + cur_pos[8]) % self.MOD\r\n            new_pos[2] = (cur_pos[7] + cur_pos[9]) % self.MOD\r\n            new_pos[3] = (cur_pos[4] + cur_pos[8]) % self.MOD\r\n            new_pos[4] = (cur_pos[0] + cur_pos[3] + cur_pos[9]) % self.MOD\r\n            new_pos[5] = 0  # Knight cannot move to position 5\r\n            new_pos[6] = (cur_pos[0] + cur_pos[1] + cur_pos[7]) % self.MOD\r\n            new_pos[7] = (cur_pos[2] + cur_pos[6]) % self.MOD\r\n            new_pos[8] = (cur_pos[1] + cur_pos[3]) % self.MOD\r\n            new_pos[9] = (cur_pos[2] + cur_pos[4]) % self.MOD\r\n\r\n            # Update the current positions list for the next iteration\r\n            cur_pos = new_pos\r\n\r\n        # Calculate the total count of distinct phone numbers\r\n        total_count = sum(cur_pos) % self.MOD\r\n\r\n        return total_count",
    "java": "class Solution {\r\n    public int knightDialer(int n) {\r\n        var dp = new long[10];\r\n        var tmp = new long[10];\r\n        Arrays.fill(dp, 1);\r\n        for (int i = 1; i < n; i++) {\r\n            tmp[1] = dp[6]+dp[8];\r\n            tmp[2] = dp[7]+dp[9];\r\n            tmp[3] = dp[4]+dp[8];\r\n            tmp[4] = dp[0]+dp[3]+dp[9];\r\n            tmp[5] = 0;\r\n            tmp[6] = dp[0]+dp[1]+dp[7];\r\n            tmp[7] = dp[2]+dp[6];\r\n            tmp[8] = dp[1]+dp[3];\r\n            tmp[9] = dp[2]+dp[4];\r\n            tmp[0] = dp[4]+dp[6];\r\n            for (int j = 0; j < 10; j++) tmp[j] = tmp[j] % 1000000007;\r\n            var arr = dp;\r\n            dp = tmp;\r\n            tmp = arr;\r\n        }\r\n        long res = 0;\r\n        for (int i = 0; i < 10; i++) {\r\n            res = (res+dp[i]) % 1000000007;\r\n        }\r\n        return (int)res;\r\n    }\r\n}",
    "javascript": "// Runtime: 139 ms (Top 83.33%) | Memory: 48.9 MB (Top 52.38%)\r\nvar knightDialer = function(n) {\r\n\r\n    let dp = Array(10).fill(1)\r\n    let MOD = 10**9 + 7\r\n\r\n    for(let i = 2; i <= n ; i++) {\r\n        oldDp = [...dp]\r\n        dp[0] = (oldDp[4] + oldDp[6]) % MOD\r\n        dp[1] = (oldDp[8] + oldDp[6]) % MOD\r\n        dp[2] = (oldDp[9] + oldDp[7]) % MOD\r\n        dp[3] = (oldDp[8] + oldDp[4]) % MOD\r\n        dp[4] = (oldDp[3] + oldDp[9] + oldDp[0]) % MOD\r\n        dp[5] = 0\r\n        dp[6] = (oldDp[0] + oldDp[7] + oldDp[1]) % MOD\r\n        dp[7] = (oldDp[6] + oldDp[2]) % MOD\r\n        dp[8] = (oldDp[3] + oldDp[1]) % MOD\r\n        dp[9] = (oldDp[4] + oldDp[2]) % MOD\r\n    }\r\n\r\n    return dp.reduce((ans, ele) => ans += ele, 0) % MOD\r\n};"
  }
}
