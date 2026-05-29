export default {
  "id": 956,
  "name": "Tallest Billboard",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/tallest-billboard",
  "relativeDir": "T/Tallest Billboard",
  "slug": "0956-tallest-billboard",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 19,
    "python": 21,
    "javascript": 34
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tint f(int i,vector<int>& v, int a, int b){\r\n\t\tif(i==v.size()){\r\n\t\t\tif(a==b){\r\n\t\t\t\treturn a;\r\n\t\t\t}\r\n\t\t  return 0;\r\n\t\t}\r\n\r\n\t\tint x = f(i+1,v,a,b);\r\n\t\tint y = f(i+1,v,a+v[i],b);\r\n\t\tint z = f(i+1,v,a,b+v[i]);\r\n\r\n\t\treturn max({x,y,z});\r\n\t}\r\n\tint tallestBillboard(vector<int>& rods) {\r\n\t\treturn f(0,rods,0,0);\r\n\r\n\t}\r\n};",
    "python": "# Runtime: 760 ms (Top 68.15%) | Memory: 14.5 MB (Top 56.05%)\r\n\r\nclass Solution:\r\n    def tallestBillboard(self, rods: List[int]) -> int:\r\n        dp = collections.defaultdict(int)\r\n        dp[0] = 0\r\n        for x in rods:\r\n            nxt = dp.copy()\r\n            for d, y in dp.items():\r\n                # init state\r\n                # ------|----- d -----| # tall side\r\n                # - y --| # low side\r\n\r\n                # put x to tall side\r\n                # ------|----- d -----|---- x --|\r\n                # - y --|\r\n                nxt[d + x] = max(nxt.get(x + d, 0), y)\r\n\r\n                nxt[abs(d - x)] = max(nxt.get(abs(d - x), 0), y + min(d, x))\r\n            dp = nxt\r\n        return dp[0]",
    "java": "class Solution {\r\n    public int tallestBillboard(int[] rods) {\r\n        int[] result = new int[1];\r\n        dfs(rods, 0, 0, 0, rods.length, result);\r\n        return result[0];\r\n    }\r\n    private void dfs(int[] rods, int left, int right, int level, int n, int[] result) {\r\n        if (level == n) {\r\n            if (left == right) {\r\n                result[0] = Math.max(left, result[0]);\r\n            }\r\n            return;\r\n        }\r\n        \r\n        dfs(rods, left, right, level + 1, n, result);\r\n        dfs(rods, left + rods[level], right, level + 1, n, result);\r\n        dfs(rods, left, right + rods[level], level + 1, n, result);\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number[]} rods\r\n * @return {number}\r\n */\r\nvar tallestBillboard = function(rods) {\r\n    let len = rods.length;\r\n    if (len <= 1) return 0;\r\n    let dp = [];\r\n    for (let i = 0; i < len + 5; i++) {\r\n        dp[i] = [];\r\n        for (let j = 0; j < 5005 * 2; j++) {\r\n            dp[i][j] = -1\r\n        }\r\n    }\r\n    return solve(0, 0, rods, dp);\r\n}\r\n\r\nvar solve = function(i, sum, rods, dp) {\r\n  if (i == rods.length) {\r\n        if (sum == 0) {\r\n            return 0\r\n        }else{\r\n            return -5000\r\n        }\r\n    }\r\n    if (dp[i][sum + 5000] != -1) {\r\n        return dp[i][sum + 5000];\r\n    }\r\n    let val = solve(i + 1, sum, rods, dp);\r\n    val = Math.max(val, solve(i + 1, sum + rods[i], rods, dp) + rods[i]);\r\n    val = Math.max(val, solve(i + 1, sum - rods[i], rods, dp));\r\n    dp[i][sum + 5000] = val;\r\n    return val;\r\n}"
  }
}
