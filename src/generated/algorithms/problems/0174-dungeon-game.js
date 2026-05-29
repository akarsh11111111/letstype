export default {
  "id": 174,
  "name": "Dungeon Game",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/dungeon-game",
  "relativeDir": "D/Dungeon Game",
  "slug": "0174-dungeon-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "java": 18,
    "python": 18,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int solve(int i, int j, int m , int n, vector<vector<int>> &grid)\r\n    {\r\n        // if we come out of the grid simply return a large value\r\n        if(i >= m || j >= n)\r\n            return INT_MAX;\r\n        \r\n        // calucate health by the 2 possible ways\r\n        int down = solve(i + 1, j, m, n, grid);\r\n        int right = solve(i, j + 1, m, n, grid);\r\n        \r\n\t\t// take the min both both\r\n        int health = min(down, right);\r\n        \r\n        // we reach the destination when both the sides return INT_MAX\r\n        if(health == INT_MAX)\r\n        {\r\n            health = 1; // both are +ve large integers so min health required = 1\r\n        }\r\n        \r\n        int ans = 0;\r\n        if(health - grid[i][j] > 0)\r\n        {\r\n            ans = health - grid[i][j];\r\n        }\r\n        else\r\n        {\r\n            ans = 1;\r\n        }\r\n             \r\n        return ans;\r\n    }\r\n    \r\n    int calculateMinimumHP(vector<vector<int>>& dungeon) \r\n    {\r\n        int m = dungeon.size();\r\n        int n = dungeon[0].size();\r\n        \r\n        return solve(0, 0, m, n, dungeon);\r\n    }\r\n};",
    "python": "class Solution:\r\n\r\n\r\n\tdef calculateMinimumHP(self, dungeon: List[List[int]]) -> int:\r\n\r\n\t\tdp = defaultdict(lambda: inf)\r\n\t\tdp[(len(dungeon), len(dungeon[0]) - 1)] = 1\r\n\r\n\t\tfor i in range(len(dungeon) - 1, -1, -1):\r\n\r\n\t\t\tfor j in range(len(dungeon[0]) - 1, -1, -1):\r\n\r\n\t\t\t\tdp[(i, j)] = min(dp[(i + 1, j)], dp[(i, j + 1)]) - dungeon[i][j]\r\n\r\n\t\t\t\tif dp[(i, j)] <= 0:\r\n\t\t\t\t\tdp[(i, j)] = 1\r\n\r\n\t\treturn dp[(0, 0)]",
    "java": "class Solution {\r\n    Integer[][] min;\r\n    public int calculateMinimumHP(int[][] dungeon) {\r\n        min = new Integer[dungeon.length][dungeon[0].length];\r\n        int answer = min(0, 0, dungeon);\r\n        return Math.max(answer, 1);\r\n    }\r\n    public int min(int i, int j, int[][] dungeon){\r\n        if(i > dungeon.length - 1 || j > dungeon[0].length - 1) return 400000;\r\n        if(i == dungeon.length - 1 && j == dungeon[0].length - 1) return - dungeon[i][j] + 1; \r\n        if(min[i][j] == null){\r\n            int down = min(i + 1, j, dungeon);\r\n            int right = min(i, j + 1, dungeon);\r\n            min[i][j] = Math.min(Math.max(right, 1), Math.max(down, 1)) - dungeon[i][j];\r\n        }\r\n        return min[i][j];\r\n    }\r\n}",
    "javascript": "/**\r\n * The dynamic programming solution.\r\n * \r\n * Time Complexity:  O(m*n)\r\n * Space Complexity: O(1)\r\n * \r\n * @param {number[][]} dungeon\r\n * @return {number}\r\n */\r\nvar calculateMinimumHP = function(dungeon) {\r\n\tconst m = dungeon.length\r\n\tconst n = dungeon[0].length\r\n\r\n\tconst ii = m - 1\r\n\tconst jj = n - 1\r\n\r\n\tfor (let i = ii; i >= 0; i--) {\r\n\t\tfor (let j = jj; j >= 0; j--) {\r\n\t\t\tif (i < ii || j < jj) {\r\n\t\t\t\tconst hc = dungeon[i][j]\r\n\r\n\t\t\t\tconst hp1 = (i < ii) ? Math.min(hc, hc + dungeon[i + 1][j]) : -Infinity\r\n\t\t\t\tconst hp2 = (j < jj) ? Math.min(hc, hc + dungeon[i][j + 1]) : -Infinity\r\n\r\n\t\t\t\tdungeon[i][j] = Math.max(hp1, hp2)\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\treturn Math.max(1 - dungeon[0][0], 1)\r\n}"
  }
}
