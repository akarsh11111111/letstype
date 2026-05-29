export default {
  "id": 1958,
  "name": "Check if Move is Legal",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-move-is-legal",
  "relativeDir": "C/Check if Move is Legal",
  "slug": "1958-check-if-move-is-legal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 39,
    "python": 27,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool inBoard(vector<vector<char>>& board, int x, int y) {\r\n        return x >= 0 && x < board.size() && y >= 0 && y < board[0].size();\r\n    }\r\n    \r\n    bool isLegal(vector<vector<char>>& board, int x, int y, char color) {\r\n        if (color == 'B') return board[x][y] == 'W';\r\n        if (color == 'W') return board[x][y] == 'B';\r\n        return false;\r\n    }\r\n    \r\n    bool checkMove(vector<vector<char>>& board, int rMove, int cMove, char color) {\r\n        vector<int> dir_x = {0, 0, 1, 1, 1, -1, -1, -1}, dir_y = {1, -1, 1, -1, 0, 1, -1, 0};\r\n        for (int i = 0; i < 8; i++) {\r\n            int x = rMove + dir_x[i], y = cMove + dir_y[i], count = 0;\r\n            while (inBoard(board, x, y) && isLegal(board, x, y, color)) {\r\n                x += dir_x[i], y += dir_y[i];\r\n                count++;\r\n            }\r\n            if (inBoard(board, x, y) && board[x][y] == color && count > 0) return true;\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "# Runtime: 82 ms (Top 35.62%) | Memory: 14 MB (Top 54.79%)\r\nclass Solution:\r\n    def checkMove(self, board: List[List[str]], rMove: int, cMove: int, color: str) -> bool:\r\n        directions = [False] * 8\r\n        moves = [(1, 0), (1, 1), (0, 1), (-1, 1), (-1, 0),\r\n                 (-1, -1), (0, -1), (1, -1)]\r\n        opposite_color = \"W\" if color == \"B\" else \"B\"\r\n\r\n        for d in range(8):\r\n            r, c = rMove + moves[d][0], cMove + moves[d][1]\r\n            if 0 <= r < 8 and 0 <= c < 8 and board[r][c] == opposite_color:\r\n                directions[d] = True\r\n\r\n        for step in range(2, 8):\r\n            if not any(d for d in directions):\r\n                return False\r\n            for d in range(8):\r\n                if directions[d]:\r\n                    r, c = rMove + step * moves[d][0], cMove + step * moves[d][1]\r\n                    if 0 <= r < 8 and 0 <= c < 8:\r\n                        if board[r][c] == color:\r\n                            return True\r\n                        elif board[r][c] == \".\":\r\n                            directions[d] = False\r\n                    else:\r\n                        directions[d] = False\r\n        return False",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 41.24 MB (Top 69.6%)\r\n\r\nclass Solution {\r\n    public boolean checkMove(char[][] board, int rMove, int cMove, char color) {\r\n\r\n        int[][] direction = {{1, 0}, {-1, 0}, {0, 1}, {0, -1}, {1, 1}, {-1, -1}, {1, -1}, {-1, 1}};\r\n\r\n        for(int[] d : direction)\r\n        {\r\n            if(dfs(board,rMove,cMove,color,d,1))\r\n                return true;\r\n        }\r\n        return false;\r\n    }\r\n\r\n    public boolean dfs(char[][] board, int r, int c, char color,int[] direcn,int len)\r\n    {\r\n\r\n        int nr = r + direcn[0];\r\n        int nc = c + direcn[1];\r\n\r\n        if( nr<0 || nc<0 || nr>7 || nc>7) return false;\r\n\r\n        if(board[nr][nc] == color)\r\n        {\r\n            if(len>=2) return true;\r\n            else\r\n                return false;\r\n        }\r\n        else\r\n        {\r\n            if(board[nr][nc] == '.')\r\n            {  \r\n                return false;\r\n            }\r\n            return dfs(board,nr,nc,color,direcn,len+1);\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 45 ms (Top 90.9%) | Memory: 42.05 MB (Top 100.0%)\r\n\r\nvar checkMove = function(board, rMove, cMove, color) {\r\n    const moves = [-1, 0, 1];\r\n    \r\n    let count = 0;\r\n    \r\n    for (let i = 0; i < 3; ++i) {\r\n        for (let j = 0; j < 3; ++j) {\r\n            if (i === 1 && j === 1) continue;\r\n            \r\n            const rowDir = moves[i];\r\n            const colDir = moves[j];\r\n            \r\n            if (isLegal(rMove, cMove, rowDir, colDir, color, 1)) return true;\r\n        }\r\n    }\r\n    \r\n    return false;\r\n      \r\n    function withinBound(row, col) {\r\n        return row >= 0 && col >= 0 && row < 8 && col < 8;\r\n    }\r\n   \r\n    function isLegal(currRow, currCol, rowDir, colDir, startColor, length) {\r\n        if (!withinBound(currRow, currCol)) return false; // we went passed the boundaries\r\n        if (board[currRow][currCol] === startColor) return length >= 3; // we seen another start color\r\n        if (board[currRow][currCol] === \".\" && length > 1) return false;\r\n\r\n        return isLegal(currRow + rowDir, currCol + colDir, rowDir, colDir, startColor, length + 1);\r\n    }\r\n};"
  }
}
