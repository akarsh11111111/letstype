export default {
  "id": 1269,
  "name": "Number of Ways to Stay in the Same Place After Some Steps",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-ways-to-stay-in-the-same-place-after-some-steps",
  "relativeDir": "N/Number of Ways to Stay in the Same Place After Some Steps",
  "slug": "1269-number-of-ways-to-stay-in-the-same-place-after-some-steps",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 32,
    "python": 18,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int n, MOD = 1e9 + 7;\r\n    int numWays(int steps, int arrLen) {\r\n        n = arrLen;\r\n        vector<vector<int>> memo(steps / 2 + 1, vector<int>(steps + 1, -1));\r\n        return dp(memo, 0, steps) % MOD;\r\n    }\r\n    long dp(vector<vector<int>>& memo, int i, int steps){\r\n        if(steps == 0)\r\n            return i == 0;\r\n        if(i < 0 || i == n || i > steps)\r\n            return 0;\r\n        if(memo[i][steps] != -1)\r\n            return memo[i][steps];\r\n        return memo[i][steps] = (dp(memo, i, steps - 1) + dp(memo, i - 1, steps - 1) + dp(memo, i + 1, steps - 1)) % MOD;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numWays(self, steps: int, arrLen: int) -> int:\r\n        \r\n        # obtain maximum index we can reach\r\n        maxLen = min(steps+1, arrLen)\r\n        dp = [0]*maxLen\r\n        dp[0] = 1\r\n        \r\n        for step in range(1, steps+1):\r\n            dp2 = [0]*maxLen\r\n            for pos in range(maxLen):\r\n                # dp[step][pos] = dp[step-1][pos] + dp[step-1][pos-1] + dp[step-1][pos+1] \r\n                temp1 = 0 if pos == 0 else dp[pos-1]\r\n                temp2 = 0 if pos == maxLen-1 else dp[pos+1]\r\n                dp2[pos] = (dp[pos] + temp1 + temp2)%(10**9+7)\r\n                \r\n            dp = dp2\r\n        return dp[0]",
    "java": "// Runtime: 205 ms (Top 20.9%) | Memory: 55.71 MB (Top 10.4%)\r\n\r\nclass Solution {\r\n    \r\n    HashMap<String,Long> map = new HashMap();\r\n    \r\n    public int numWays(int steps, int arrLen) {\r\n        \r\n        return (int) (ways(steps,arrLen,0) % ((Math.pow(10,9)) +7));\r\n    }\r\n    \r\n    public long ways(int steps,int arrLen,int index){\r\n        String curr = index + \"->\" + steps;\r\n        \r\n        if(index == 0 && steps == 0){\r\n            return 1;\r\n        }else if(index < 0 || (index >= arrLen) || steps == 0){\r\n            return 0;\r\n        }\r\n        \r\n        if(map.containsKey(curr)){\r\n            return map.get(curr);\r\n        }\r\n        long stay = ways(steps-1,arrLen,index);\r\n        long right = ways(steps-1,arrLen,index+1);\r\n        long left = ways(steps-1,arrLen,index-1);\r\n        \r\n        map.put(curr , (stay+right+left) % 1000000007);\r\n        \r\n        return (right + left + stay) % 1000000007;\r\n    }\r\n}",
    "javascript": "var numWays = function(steps, arrLen) {\r\n  let memo = Array(steps + 1).fill(0).map(() => Array(steps + 1).fill(-1)), mod = 10 ** 9 + 7;\r\n  return dp(0, steps);\r\n  \r\n  function dp(i, steps) {\r\n    if (steps === 0) return i === 0 ? 1 : 0; // found a way\r\n    if (i > steps || i < 0 || i >= arrLen) return 0; // out of bounds\r\n    if (memo[i][steps] !== -1) return memo[i][steps]; // memoized\r\n    \r\n    let moveLeft = dp(i - 1, steps - 1);\r\n    let moveRight = dp(i + 1, steps - 1);\r\n    let stay = dp(i, steps - 1);\r\n    return memo[i][steps] = (moveLeft + moveRight + stay) % mod;\r\n  }\r\n};"
  }
}
