export default {
  "id": 221,
  "name": "Maximal Square",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximal-square",
  "relativeDir": "M/Maximal Square",
  "slug": "0221-maximal-square",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 32,
    "python": 17,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 71 ms (Top 51.33%) | Memory: 19.30 MB (Top 86.07%)\r\n\r\nclass Solution {\r\npublic:\r\n    int dp[301][301];\r\n    int helperMethod(int i,int j,vector<vector<char>>& matrix)\r\n    {\r\n        if(i<0 || j<0 || i>= matrix.size()|| j>=matrix[0].size()|| matrix[i][j] == '0')\r\n            return 0;\r\n        if(dp[i][j]!=-1)\r\n            return dp[i][j];\r\n        \r\n        return dp[i][j] = 1+min( helperMethod(i+1,j,matrix),\r\n                            min(helperMethod(i+1,j+1,matrix),helperMethod(i,j+1,matrix))) ;\r\n    }\r\n    int maximalSquare(vector<vector<char>>& matrix) {\r\n        int m=matrix.size();\r\n        int n=matrix[0].size();\r\n        int ans = INT_MIN;\r\n        memset(dp,-1,sizeof(dp));\r\n        for(int i=0;i<m;i++)\r\n        {\r\n            for(int j=0;j<n;j++)\r\n            {\r\n                if(matrix[i][j]=='1')\r\n                {\r\n                    ans=max(ans,helperMethod(i,j,matrix));\r\n                }\r\n            }\r\n        }\r\n        return ans==INT_MIN?0:ans*ans;\r\n    }\r\n};",
    "python": "// Runtime: 499 ms (Top 97.16%) | Memory: 19.30 MB (Top 88.93%)\r\n\r\nclass Solution:\r\n    def maximalSquare(self, matrix: List[List[str]]) -> int:\r\n        m, n = len(matrix), len(matrix[0])\r\n        result = 0\r\n        dp = [[0]*n for _ in range(m)]  # dp[x][y] is the length of the maximal square at (x, y)\r\n        for i in range(m):\r\n            for j in range(n):\r\n                if matrix[i][j] == '1':  # ensure this condition first\r\n                    # perform computation, mind border restrictions\r\n                    dp[i][j] = min(dp[i-1][j] if i > 0 else 0,\r\n                                   dp[i][j-1] if j > 0 else 0,\r\n                                   dp[i-1][j-1] if i > 0 and j > 0 else 0) + 1\r\n                    if dp[i][j] > result:\r\n                        result = dp[i][j]\r\n        return result*result",
    "java": "// Runtime: 5 ms (Top 98.27%) | Memory: 53.6 MB (Top 98.31%)\r\nclass Solution {\r\n    public int maximalSquare(char[][] matrix) {\r\n        int m = matrix.length;\r\n        int n = matrix[0].length;\r\n        int[][] dp = new int[m][n];\r\n\r\n        int max = 0;\r\n\r\n        for (int i = 0; i < m; i++) {\r\n            dp[i][0] = matrix[i][0] - 48;\r\n            if (matrix[i][0] == '1') max = 1;\r\n        }\r\n        for (int i = 0; i < n; i++) {\r\n            dp[0][i] = matrix[0][i] - 48;\r\n            if (matrix[0][i] == '1') max = 1;\r\n        }\r\n\r\n        for (int i = 1; i < m; i++) {\r\n            for (int j = 1; j < n; j++) {\r\n                if (matrix[i][j] == '1') {\r\n                    dp[i][j] = Math.min(dp[i - 1][j - 1], Math.min(dp[i][j - 1], dp[i - 1][j])) + 1;\r\n                    if (dp[i][j] > max) {\r\n                        max = dp[i][j];\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        return max * max;\r\n    }\r\n}",
    "javascript": "var maximalSquare = function(matrix) {\r\n    let max = 0;\r\n    const height = matrix.length-1;\r\n    const width = matrix[0].length-1;\r\n    for (let i=height; i>=0; i--) {\r\n        for (let j=width; j>=0; j--) {\r\n            const right = j < width ? Number(matrix[i][j+1]) : 0;\r\n            const diag = i < height && j < width ? Number(matrix[i+1][j+1]) : 0\r\n            const bottom = i < height ? Number(matrix[i+1][j]) : 0;\r\n            matrix[i][j] = matrix[i][j] === '0' ? 0 : \r\n                Math.min(right, diag, bottom) + 1;\r\n            max = Math.max(max, matrix[i][j] * matrix[i][j]);\r\n        }  \r\n    }\r\n    return max;\r\n};"
  }
}
