export default {
  "id": 2312,
  "name": "Selling Pieces of Wood",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/selling-pieces-of-wood",
  "relativeDir": "S/Selling Pieces of Wood",
  "slug": "2312-selling-pieces-of-wood",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 22,
    "python": 22,
    "javascript": 23
  },
  "languages": {
    "cpp": "class Solution {\r\nprivate:\r\n\tlong long f(int row, int col, map<pair<int,int>,long long> &mp){\r\n\r\n\t\t//Base case is tackled in this line\r\n\t\tlong long ans = mp[{row,col}]; \r\n\r\n\t\tfor(int i = 1;i < row;i++) //Partitions Row-wise\r\n\t\t\tans = max(ans,f(i,col,mp) + f(row-i,col,mp));\r\n\r\n\t\tfor(int j = 1;j < col;j++) //Partitions Column-wise\r\n\t\t\tans = max(ans,f(row, j, mp) + f(row, col-j, mp));\r\n\r\n\t\treturn ans;\r\n\t}\r\npublic:\r\n\tlong long sellingWood(int m, int n, vector<vector<int>>& prices) {\r\n\t\t//Declaring the HashMap\r\n\t\tmap<pair<int,int>,long long> mp;\r\n\r\n\t\t//Storing Prices in HashMap where {height,width} of wood is key and {Price} is value\r\n\t\tfor(int i = 0;i < prices.size();i++)\r\n\t\t\tmp[{prices[i][0],prices[i][1]}] = prices[i][2];\r\n\r\n\t\treturn f(m,n,mp);\r\n\t}\r\n};",
    "python": "class Solution:\r\n    def sellingWood(self, m: int, n: int, prices: List[List[int]]) -> int:\r\n        price = {(dimension_price[0], dimension_price[1]): dimension_price[2] for dimension_price in prices}\r\n        DP = [[-1 for _ in range(n + 1)] for _ in range(m + 1)]\r\n        \r\n        def solve(h: int, v: int) -> int:\r\n            if DP[h][v] != -1:\r\n                return DP[i][j]\r\n            \r\n            ans = price.get((h, v), 0)\r\n            \r\n            for i in range(1, 1 + h // 2):\r\n                ans = max(ans, (DP[i][v] if DP[i][v] != -1 else solve(i, v)) + (DP[h - i][v] if DP[h - i][v] != -1 else solve(h - i, v)))\r\n            \r\n            for j in range(1, 1 + v // 2):\r\n                ans = max(ans, (DP[h][j] if DP[h][j] != -1 else solve(h, j)) + (DP[h][v - j] if DP[h][v - j] != -1 else solve(h, v - j)))\r\n            \r\n            DP[h][v] = ans\r\n            \r\n            return ans\r\n        \r\n        return solve(m, n)",
    "java": "class Solution {\r\n    public long sellingWood(int m, int n, int[][] prices) {\r\n        long[][] dp = new long[m+1][n+1];\r\n        for (int[] price : prices) {\r\n            dp[price[0]][price[1]] = price[2];\r\n        }\r\n        for (int i = 1; i < m+1; i++) {\r\n            for (int j = 1; j < n+1; j++) {\r\n                // all horizontal\r\n                for (int k = 1; k <= i/2; k++) {\r\n                    dp[i][j] = Math.max(dp[i][j], dp[i-k][j] + dp[k][j]);\r\n                }\r\n                // all vertical\r\n                for (int k = 1; k <= j/2; k++) {\r\n                    dp[i][j] = Math.max(dp[i][j], dp[i][j-k] + dp[i][k]);\r\n                }\r\n            }\r\n        }\r\n        \r\n        return dp[m][n];\r\n    }\r\n}",
    "javascript": "// Runtime: 908 ms (Top 24.08%) | Memory: 63.8 MB (Top 18.52%)\r\nvar sellingWood = function(m, n, prices) {\r\n  let price = Array(n + 1).fill(0).map(() => Array(m + 1).fill(0));\r\n  for (let [height, width, woodPrice] of prices) {\r\n    price[width][height] = woodPrice;\r\n  }\r\n  let memo = Array(n + 1).fill(0).map(() => Array(m + 1).fill(-1));\r\n  return dfs(n, m);\r\n\r\n  function dfs(width, height) {\r\n    if (width === 0 || height === 0) return 0;\r\n    if (memo[width][height] !== -1) return memo[width][height];\r\n\r\n    let ans = price[width][height];\r\n    for (let h = 1; h <= Math.floor(height / 2); h++) {\r\n      ans = Math.max(ans, dfs(width, h) + dfs(width, height - h));\r\n    }\r\n    for (let w = 1; w <= Math.floor(width / 2); w++) {\r\n      ans = Math.max(ans, dfs(w, height) + dfs(width - w, height));\r\n    }\r\n    return memo[width][height] = ans;\r\n  }\r\n};"
  }
}
