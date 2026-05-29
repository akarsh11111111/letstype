export default {
  "id": 2267,
  "name": "Check if There Is a Valid Parentheses String Path",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-if-there-is-a-valid-parentheses-string-path",
  "relativeDir": "C/Check if There Is a Valid Parentheses String Path",
  "slug": "2267-check-if-there-is-a-valid-parentheses-string-path",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 52,
    "java": 40,
    "python": 23
  },
  "languages": {
    "cpp": "// Runtime: 677 ms (Top 15.4%) | Memory: 125.54 MB (Top 33.7%)\r\n\r\nclass Solution {\r\npublic:\r\n    int n,m;\r\n    int dp[101][101][200];\r\n    bool find(vector<vector<char>>& mat,int row,int col,int open)\r\n    {\r\n        if(row<0||col<0||row>=n||col>=m||open<0)\r\n        {\r\n            return false;\r\n        }\r\n        if(dp[row][col][open]!=-1)\r\n        {\r\n            return dp[row][col][open];\r\n        }\r\n        if(row==n-1&&col==m-1)\r\n        {\r\n            if(mat[row][col]=='(')\r\n            {\r\n                open++;\r\n            }\r\n            else \r\n            {\r\n                open--;\r\n            }\r\n            return open==0;\r\n        }\r\n        if(mat[row][col]=='(')\r\n        {\r\n            if(find(mat,row+1,col,open+1)||find(mat,row,col+1,open+1))\r\n            {\r\n                return true;\r\n            }\r\n        }\r\n        else\r\n        {\r\n            if(find(mat,row+1,col,open-1)||find(mat,row,col+1,open-1))\r\n            {\r\n                return true;\r\n            }\r\n        }\r\n        return dp[row][col][open]=false;\r\n    }\r\n    bool hasValidPath(vector<vector<char>>& mat) \r\n    {\r\n        memset(dp,-1,sizeof(dp));\r\n        n=mat.size();\r\n        m=mat[0].size();\r\n        return find(mat,0,0,0);\r\n    }\r\n};",
    "python": "// Runtime: 1143 ms (Top 75.31%) | Memory: 238.70 MB (Top 9.88%)\r\n\r\nclass Solution:\r\n    def hasValidPath(self, grid: List[List[str]]) -> bool:  \r\n        m = len(grid)\r\n        n = len(grid[0])\r\n        @lru_cache(maxsize=None)\r\n        def hasValidPathInner(x, y, cnt):\r\n            # cnt variable would act as a counter to track \r\n            # the balance of parantheses sequence\r\n            if x == m or y == n or cnt < 0:\r\n                return False\r\n            \r\n            # logic to check the balance of sequence\r\n            cnt += 1 if grid[x][y] == '(' else -1\r\n            \r\n            # if balanced and end of grid, return True\r\n            if x == m - 1 and y == n - 1 and not cnt:\r\n                return True\r\n            \r\n            return hasValidPathInner(x + 1, y, cnt) or hasValidPathInner(x, y + 1, cnt)\r\n\r\n        return hasValidPathInner(0, 0, 0)",
    "java": "// Runtime: 538 ms (Top 16.66%) | Memory: 372.3 MB (Top 5.18%)\r\nclass Solution {\r\n    static Boolean[][][] dp;\r\n    public boolean hasValidPath(char[][] grid) {\r\n        int m = grid.length, n = grid[0].length;\r\n        dp = new Boolean[101][101][201]; // [row][col][open-close]\r\n        if(grid[0][0] == ')'){ // cannot start with ')'\r\n            return false;\r\n        }\r\n        if(grid[m-1][n-1] == '('){ // cannot end with '('\r\n            return false;\r\n        }\r\n        return solve(grid,0,0,m,n,0,0);\r\n    }\r\n    public static boolean solve(char[][] grid,int i,int j,int m,int n,int open,int close){\r\n        if(grid[i][j] == '('){\r\n            open++;\r\n        }\r\n        else{\r\n            close++;\r\n        }\r\n        if(close > open){ // at any point if closeBracket count exceeds openBracket count then return false since this path can never lead to valid paranthesis string\r\n            return false;\r\n        }\r\n        if(i == m-1 && j == n-1){ // on reaching bottom right cell if openCount == closeCount return true else return false\r\n            return open == close;\r\n        }\r\n        if(dp[i][j][open-close] != null){ // check for precomputed overlapping subproblem\r\n            return dp[i][j][open-close];\r\n        }\r\n        if(i == m-1){ // make sure to not go out of the grid in last row\r\n            return dp[i][j][open-close] = solve(grid,i,j+1,m,n,open,close);\r\n        }\r\n        if(j == n-1){ // make sure to not go out of the grid in last col\r\n            return dp[i][j][open-close] = solve(grid,i+1,j,m,n,open,close);\r\n        }\r\n        boolean op = solve(grid,i+1,j,m,n,open,close) || solve(grid,i,j+1,m,n,open,close); // we have two choices to move forward, [i+1][j] or [i][j+1]\r\n        return dp[i][j][open-close] = op;\r\n    }\r\n}"
  }
}
