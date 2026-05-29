export default {
  "id": 279,
  "name": "Perfect Squares",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/perfect-squares",
  "relativeDir": "P/Perfect Squares",
  "slug": "0279-perfect-squares",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 18,
    "python": 20,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numSquares(int n) {\r\n        \r\n        vector<int> perfectSq;\r\n        \r\n        for(int i = 1; i*i <= n; ++i){\r\n            perfectSq.push_back(i*i);\r\n        }\r\n        \r\n        int m = perfectSq.size();\r\n        vector<vector<int>> dp( m+1, vector<int>(n+1, 0));\r\n        \r\n        dp[0][0] = 0;\r\n        for( int i = 1; i <= n; ++i ) dp[0][i] = INT_MAX;\r\n        \r\n        for(int i = 1; i <= m; ++i){\r\n            for(int j = 1; j <= n; ++j){\r\n                \r\n                if( j < perfectSq[i-1]){\r\n                    dp[i][j] = dp[i-1][j];\r\n                }\r\n                else{\r\n                    dp[i][j] = min( dp[i-1][j], dp[i][ j - perfectSq[i-1] ] + 1);\r\n                }\r\n                \r\n            }\r\n        }\r\n   \r\n        return dp[m][n];\r\n    }\r\n};",
    "python": "// Runtime: 28 ms (Top 99.85%) | Memory: 17.30 MB (Top 57.47%)\r\n\r\nclass Solution:\r\n    def isSquare(self, n: int) -> bool:\r\n        sq = int(math.sqrt(n))\r\n        return sq*sq == n\r\n        \r\n    def numSquares(self, n: int) -> int:\r\n        # Lagrange's four-square theorem\r\n        if self.isSquare(n):\r\n            return 1\r\n        while (n & 3) == 0:\r\n            n >>= 2\r\n        if (n & 7) == 7:\r\n            return 4\r\n        sq = int(math.sqrt(n)) + 1\r\n        for i in range(1,sq):\r\n            if self.isSquare(n - i*i):\r\n                return 2\r\n        return 3",
    "java": "// Runtime: 20 ms (Top 91.34%) | Memory: 42.30 MB (Top 82.04%)\r\n\r\nclass Solution {\r\n    public int numSquares(int n) {\r\n        int dp[]=new int [n+1];\r\n        dp[0]=0;\r\n        dp[1]=1;\r\n        \r\n        for(int i=2;i<dp.length;i++){\r\n            int min=Integer.MAX_VALUE;\r\n            for(int j=1;j*j<=i;j++){\r\n                min=Math.min(min,dp[i-j*j]);\r\n            }\r\n            dp[i]=min+1;\r\n        }\r\n        return dp[n];\r\n    }\r\n}",
    "javascript": "\r\nvar numSquares = function(n) {\r\n    let dp = new Array(n+1).fill(Infinity);\r\n    \r\n    dp[0] = 0;\r\n    \r\n    for(let i=1; i <= n; i++){\r\n        for(let k=1; k*k <= i; k++){\r\n            dp[i] = Math.min(dp[i],dp[i - (k*k)] + 1);\r\n        }\r\n    }\r\n    \r\n    return dp[n];\r\n};"
  }
}
