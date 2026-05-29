export default {
  "id": 1411,
  "name": "Number of Ways to Paint N × 3 Grid",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid",
  "relativeDir": "N/Number of Ways to Paint N × 3 Grid",
  "slug": "1411-number-of-ways-to-paint-n-3-grid",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 63,
    "python": 10,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numOfWays(int n) {\r\n        int mod=1e9+7;\r\n        long long c2=6,c3=6;\r\n        for(int i=2;i<=n;i++){\r\n            long long temp=c3;\r\n            c3=(2*c3+2*c2)%mod;\r\n            c2=(2*temp+3*c2)%mod;\r\n        }\r\n        return (c2+c3)%mod;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numOfWays(self, n: int) -> int:\r\n        two_c_options = 6\r\n        tot_options = 12\r\n        for i in range(n-1):\r\n            temp = tot_options\r\n            tot_options = (two_c_options * 5) + ((tot_options - two_c_options) * 4)\r\n            two_c_options = (two_c_options * 3) + ((temp - two_c_options) * 2)\r\n            tot_options = tot_options % (1000000007)\r\n        return tot_options",
    "java": "class Solution {\r\n    int MOD = 1000000007;\r\n    int[][] states = {{0,1,0},{1,0,1},{2,0,1},\r\n                      {0,1,2},{1,0,2},{2,0,2},\r\n                      {0,2,0},{1,2,0},{2,1,0},\r\n                      {0,2,1},{1,2,1},{2,1,2}};\r\n    \r\n    HashMap<Integer, List<Integer>> nextMap = new HashMap<>();\r\n    Long[][] memo;\r\n    \r\n    public int numOfWays(int n) {\r\n        if(n == 0)\r\n            return 0;\r\n        \r\n\t\t// Graph\r\n        for(int prev = 0; prev < 12; prev++){\r\n            List<Integer> nexts = new ArrayList<>();\r\n            for(int next = 0; next < 12; next++){\r\n                if(next == prev) continue;\r\n            \r\n                boolean flag = true;\r\n                for(int i = 0; i < 3; i++){\r\n                    if(states[prev][i] == states[next][i]){\r\n                        flag = false;\r\n                        break;\r\n                    }\r\n                }\r\n                if(flag)\r\n                    nexts.add(next);\r\n            }\r\n            nextMap.put(prev, nexts);\r\n        }\r\n\t\t\r\n\t\t//DFS\r\n        memo = new Long[12][n];\r\n        long ways = 0;\r\n        for(int i = 0; i < 12; i++){\r\n            ways += dfs(i, n-1);\r\n            ways %= MOD;\r\n        }\r\n        \r\n        return (int)(ways);\r\n    }\r\n    \r\n    long dfs(int prev, int n){\r\n        if(n == 0)\r\n            return 1;\r\n        \r\n        if(memo[prev][n] != null)\r\n            return memo[prev][n];\r\n        \r\n        long ways = 0;\r\n        \r\n        List<Integer> nexts = nextMap.get(prev);\r\n        for(int next : nexts){\r\n            ways += dfs(next, n-1);\r\n            ways %= MOD;\r\n        }\r\n        \r\n        memo[prev][n] = ways;\r\n        return ways;\r\n    }\r\n}",
    "javascript": "// Runtime: 76 ms (Top 85.71%) | Memory: 44.9 MB (Top 50.00%)\r\n/**\r\n * @param {number} n\r\n * @return {number}\r\n */\r\nvar numOfWays = function(n) {\r\n  const mod = Math.pow(10, 9) + 7;\r\n  const dp212 = [6];\r\n  const dp123 = [6];\r\n  for (let i = 1; i < n; i++) {\r\n    // two sides same\r\n    dp212[i] = (dp212[i - 1] * (5 - 2) + dp123[i - 1] * (6 - 2 - 1 - 1)) % mod;\r\n    // three different colors\r\n    dp123[i] = (dp123[i - 1] * (5 - 1 - 1 - 1) + dp212[i - 1] * (6 - 2 - 2)) % mod;\r\n  }\r\n  return (dp212[n - 1] + dp123[n - 1]) % mod;\r\n};"
  }
}
