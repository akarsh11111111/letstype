export default {
  "id": 688,
  "name": "Knight Probability in Chessboard",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/knight-probability-in-chessboard",
  "relativeDir": "K/Knight Probability in Chessboard",
  "slug": "0688-knight-probability-in-chessboard",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 59,
    "java": 42,
    "python": 26,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    // declare a dp\r\n    \r\n    double dp[30][30][105];\r\n    \r\n    // x and y co-ordinates of 8 directions\r\n   \r\n    vector<int> dx = {-2, -2, -1, 1, 2, 2, 1, -1};\r\n    \r\n    vector<int> dy = {-1, 1, 2, 2, 1, -1, -2, -2};\r\n    \r\n    double dfs(int i, int j, int n, int moves)\r\n    {\r\n        // base case if we have reached out of grid\r\n        \r\n        if(i < 0 || i >= n || j < 0 || j >= n)\r\n            return 0;\r\n        \r\n        // if no moves are remaining\r\n        \r\n        if(moves <= 0)\r\n            return 1;\r\n        \r\n        // if already calculated\r\n        \r\n        if(dp[i][j][moves] != 0)\r\n            return dp[i][j][moves];\r\n        \r\n        // find total possible ways of staying on chess board\r\n        \r\n        double ans = 0;\r\n        \r\n        for(int k = 0; k < 8; k++)\r\n        {\r\n            int new_row = i + dx[k];\r\n            \r\n            int new_col = j + dy[k];\r\n            \r\n            ans += dfs(new_row, new_col, n, moves - 1);\r\n        }\r\n        \r\n        // for each cell there are 8 possible moves, so probablity will be no. of successfull moves / 8\r\n        \r\n        // store the result and return\r\n        \r\n        return dp[i][j][moves] = ans / 8.0;\r\n    }\r\n    \r\n    double knightProbability(int n, int k, int row, int column) {\r\n        \r\n        // initialize the dp with 0\r\n        \r\n        memset(dp, 0, sizeof(dp));\r\n       \r\n        return dfs(row, column, n, k);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def knightProbability(self, n: int, k: int, row: int, column: int) -> float:\r\n        \r\n        x_dir = [2, 1, -1, -2, -2, -1, 1, 2]\r\n        y_dir = [1, 2, 2, 1, -1, -2, -2, -1]\r\n        \r\n        cache = {}\r\n        \r\n        def kMoves(i, j, moves):\r\n            if i >= n or j >= n or i < 0 or j < 0:\r\n                return 0\r\n            \r\n            if moves == k:\r\n                return 1\r\n            \r\n            if (i, j, moves) in cache:\r\n                return cache[(i, j, moves)]\r\n            \r\n            totMoves = 0\r\n            for ind in range(8):\r\n                totMoves += kMoves(i+x_dir[ind], j+y_dir[ind], moves+1)*(1/8)\r\n            \r\n            cache[(i, j, moves)] = totMoves\r\n            return totMoves\r\n        \r\n        return kMoves(row, column, 0)",
    "java": "class Solution {\r\n    public double knightProbability(int n, int k, int row, int column) {\r\n        double [][]curr=new double[n][n];\r\n        double [][]next=new double[n][n];\r\n        \r\n        curr[row][column]=1;\r\n        \r\n        int [][]dir={{-2,1},{-1,2},{1,2},{2,1},{2,-1},{1,-2},{-1,-2},{-2,-1}};\r\n        for(int p=1;p<=k;p++){\r\n            for(int i=0;i<n;i++){\r\n                for(int j=0;j<n;j++){\r\n                    if(curr[i][j]!=0){\r\n                        \r\n                        for(int d=0;d<8;d++){\r\n                            int ni=i+dir[d][0];\r\n                            int nj=j+dir[d][1];\r\n                            \r\n                            if(ni<0 || nj<0 || ni>=n || nj>=n){\r\n                                continue;\r\n                            }\r\n                            \r\n                            next[ni][nj]+=curr[i][j]/8.0;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            \r\n            curr=next;\r\n            next=new double[n][n];\r\n        }\r\n        \r\n        double sum=0.0;\r\n        \r\n        for(int i=0;i<n;i++){\r\n            for(int j=0;j<n;j++){\r\n                sum+=curr[i][j];\r\n            }\r\n        }\r\n        \r\n        return sum;\r\n    }\r\n}",
    "javascript": "// Runtime: 101 ms (Top 86.16%) | Memory: 49.2 MB (Top 38.36%)\r\nvar knightProbability = function(n, k, row, column) {\r\n    if (k === 0) return 1;\r\n    const dirs = [[-2, -1], [-1, -2], [1, -2], [2, -1], [2, 1], [1, 2], [-1, 2], [-2, 1]];\r\n    const dp = Array(k + 1)\r\n        .fill('')\r\n        .map(_ => Array(n).fill('').map(_ => Array(n).fill(0)));\r\n\r\n    const isOut = (pos) => pos < 0 || pos > n - 1;\r\n    const move = (x = row, y = column, step = k) => {\r\n        if (step === 0) return 1;\r\n        const moves = dp[step][x][y];\r\n        if (moves !== 0) return moves;\r\n\r\n        for (const [mvoeX, moveY] of dirs) {\r\n            const nextX = x + mvoeX;\r\n            const nextY = y + moveY;\r\n            if (isOut(nextX) || isOut(nextY)) continue;\r\n\r\n            dp[step][x][y] += move(nextX, nextY, step - 1);\r\n        }\r\n        return dp[step][x][y];\r\n    };\r\n\r\n    move();\r\n    return dp[k][row][column] / 8 ** k;\r\n};"
  }
}
