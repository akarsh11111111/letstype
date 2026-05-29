export default {
  "id": 52,
  "name": "N-Queens II",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/n-queens-ii",
  "relativeDir": "N/N-Queens II",
  "slug": "0052-n-queens-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 32,
    "python": 33,
    "javascript": 43
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 64.18%) | Memory: 6 MB (Top 83.58%)\r\nclass Solution {\r\npublic:\r\n    int totalNQueens(int n) {\r\n    vector<bool> col(n), diag(2*n-1), anti_diag(2*n-1);\r\n    return solve(col, diag, anti_diag, 0);\r\n}\r\n\r\nint solve(vector<bool>& col, vector<bool>& diag, vector<bool>& anti_diag, int row) {\r\n    int n = size(col), count = 0;\r\n    if(row == n) return 1;\r\n    for(int column = 0; column < n; column++)\r\n        if(!col[column] && !diag[row + column] && !anti_diag[row - column + n - 1]){\r\n            col[column] = diag[row + column] = anti_diag[row - column + n - 1] = true;\r\n            count += solve(col, diag, anti_diag, row + 1);\r\n            col[column] = diag[row + column] = anti_diag[row - column + n - 1] = false;\r\n        }\r\n    return count;\r\n}\r\n};",
    "python": "class Solution:\r\n    def totalNQueens(self, n: int) -> int:\r\n        res=0\r\n        #用于存放结果\r\n        pdia=set()\r\n        ndia=set()\r\n        col=set()\r\n\r\n        def backtrack(r):\r\n            #利用r作为一种计数，表示目前所在的行数\r\n            if r==n:\r\n            #判断已经完成棋盘，返回结果\r\n                nonlocal res\r\n                res+=1\r\n                return\r\n            for c in range(n):\r\n                #对于n行n列的棋盘，每次在每一行我们尝试n种选择，\r\n                #即每个岔路口有n条路线\r\n                if (r+c) in pdia or (r-c) in ndia or c in col:\r\n                    #如果在同一对角线，或同一列，则不符合要求\r\n                    continue\r\n                col.add(c)\r\n                pdia.add(r+c)\r\n                ndia.add(r-c)\r\n                \r\n                backtrack(r+1)\r\n                \r\n                col.remove(c)\r\n                pdia.remove(r+c)\r\n                ndia.remove(r-c)\r\n\r\n        backtrack(0)\r\n        return res",
    "java": "// Runtime: 1 ms (Top 98.59%) | Memory: 41.2 MB (Top 48.22%)\r\nclass Solution {\r\n    int count = 0;\r\n    public int totalNQueens(int n) {\r\n        boolean col[] = new boolean[n];\r\n        boolean diag[] = new boolean[2*n-1];\r\n        boolean rdiag[] = new boolean[2*n-1];\r\n\r\n        countSolution(n,col, diag, rdiag, 0);\r\n        return count;\r\n\r\n    }\r\n    void countSolution(int n, boolean[] col, boolean[] diag, boolean[] rdiag, int r ){\r\n        if (r == n ){\r\n            count++;\r\n            return;\r\n        }\r\n\r\n        for(int c = 0 ; c < n; c++){\r\n            if(col[c] == false && diag[r+c] == false && rdiag[r-c+n-1] == false){\r\n                col[c] = true;\r\n                diag[r+c] = true;\r\n                rdiag[r-c+n-1] = true;\r\n                countSolution(n, col, diag, rdiag, r+1);\r\n                col[c] = false;\r\n                diag[r+c] = false;\r\n                rdiag[r-c+n-1] = false;\r\n            }\r\n        }\r\n\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} n\r\n * @return {number}\r\n */\r\nvar totalNQueens = function(n) {\r\n\t// Keep track of columns with queens\r\n    const cols = new Set();\r\n\t// Keep track of positive slope diagonal by storing row number + column number\r\n    const posDiag = new Set();\r\n\t// Keep track of negative slope diagonal by storing row number - column number\r\n    const negDiag = new Set();\r\n\t// Count of valid boards\r\n    let count = 0;\r\n    \r\n    const backtrack = function(r) {\r\n\t\t// Base case to end recursion, we have traversed board and found valid position in each row\r\n        if(r === n) {\r\n            count += 1;\r\n            return;\r\n        }\r\n\t\t// Loop through each column to see if you can place a queen\r\n        for(let c = 0; c < n; c++) {\r\n\t\t\t// invalid position check, if position in set we cannot place queen here\r\n            if(cols.has(c) || posDiag.has(r+c) || negDiag.has(r-c)) continue;\r\n            \r\n\t\t\t// add new queen to sets\r\n            cols.add(c);\r\n            posDiag.add(r+c);\r\n            negDiag.add(r-c);\r\n            \r\n\t\t\t// backtrack\r\n            backtrack(r+1);\r\n            \r\n\t\t\t// remove current position from sets because backtracking for this position is complete\r\n            cols.delete(c);\r\n            posDiag.delete(r+c);\r\n            negDiag.delete(r-c);\r\n        }\r\n    }\r\n    \r\n    backtrack(0);\r\n    return count;\r\n};"
  }
}
