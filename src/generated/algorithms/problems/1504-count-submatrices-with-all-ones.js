export default {
  "id": 1504,
  "name": "Count Submatrices With All Ones",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-submatrices-with-all-ones",
  "relativeDir": "C/Count Submatrices With All Ones",
  "slug": "1504-count-submatrices-with-all-ones",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 39,
    "python": 24,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int numSubmat(vector<vector<int>>& mat) {\r\n        int n = mat.size(), m = mat[0].size();\r\n        vector<vector<int>> v(n,vector<int>(m+1,0));\r\n        for(int i=0; i<n; i++){\r\n            for(int j=0; j<m; j++){\r\n                v[i][j+1] = v[i][j] + mat[i][j];\r\n            }\r\n        }\r\n        int res = 0;\r\n        for(int i=0; i<m; i++){\r\n            for(int j=i+1; j<=m; j++){\r\n                int cnt = 0;\r\n                for(int k=0; k<n; k++){\r\n                    int x = v[k][j] - v[k][i];\r\n                    if(x == (j-i)){\r\n                        cnt++;\r\n                    }else{\r\n                        res += cnt*(cnt+1)/2;\r\n                        cnt = 0;\r\n                    }\r\n                }\r\n                res += cnt*(cnt+1)/2;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def numSubmat(self, mat: List[List[int]]) -> int:\r\n        from dataclasses import dataclass\r\n        @dataclass\r\n        class Cell:\r\n            left: int = 0\r\n            top: int = 0\r\n            \r\n        n = len(mat)\r\n        m = len(mat[0])  \r\n        dp = [[Cell() for _ in range(m + 1)] for _ in range(n + 1)]\r\n        \r\n        ans = 0\r\n        for i in range(1, n + 1):\r\n            for j in range(1, m + 1):\r\n                if mat[i - 1][j - 1]: \r\n                    dp[i][j].top = 1 + dp[i - 1][j].top\r\n                    dp[i][j].left = 1 + dp[i][j - 1].left\r\n                    \r\n                    min_height = dp[i][j].top\r\n                    for k in range(dp[i][j].left):\r\n                        min_height = min(min_height, dp[i][j-k].top)\r\n                        ans += min_height \r\n        return ans",
    "java": "// Runtime: 7 ms (Top 78.37%) | Memory: 45.40 MB (Top 34.13%)\r\n\r\nclass Solution {\r\n    private int n;\r\n    private int res = 0;\r\n    \r\n    public int numSubmat(int[][] mat) {\r\n        this.n = mat[0].length;\r\n        \r\n        // dp[j] : the height (number of consecutive '1's) of column j \r\n        int[] dp = new int[n];\r\n        for (int i = 0; i < mat.length; i++) {\r\n            // calculating (updating) heights\r\n            for (int j = 0; j < n; j++) {\r\n                dp[j] = mat[i][j] == 1 ? dp[j] + 1 : 0;\r\n            }\r\n            enumerateRowByMinHeight(dp);\r\n        }\r\n        return res;\r\n    }\r\n\r\n    public void enumerateRowByMinHeight(int[] dp) {\r\n        // monotonic stack storing indices : for index p < q in stack, dp[p] < dp[q]\r\n        Deque<Integer> stack = new LinkedList<>();\r\n        stack.offerLast(-1);\r\n\r\n        for (int j = 0; j < n; j++) {\r\n            while (stack.peekLast() != -1 && dp[stack.peekLast()] >= dp[j]) {\r\n                int idx = stack.pollLast();\r\n                res += dp[idx] * (idx - stack.peekLast()) * (j - idx);\r\n            }\r\n            stack.offerLast(j);\r\n        }\r\n        while (stack.peekLast() != -1) {\r\n            int idx = stack.pollLast();\r\n            res += dp[idx] * (idx - stack.peekLast()) * (n - idx);\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 126 ms (Top 74.14%) | Memory: 44.6 MB (Top 82.76%)\r\n/**\r\n * @param {number[][]} mat\r\n * @return {number}\r\n */\r\nvar numSubmat = function(mat) {\r\n    var m = mat.length;\r\n    var n = mat[0].length;\r\n\r\n    for(let i=0; i<m; i++){\r\n        for(let j = n-2; j>=0; j-- ){\r\n            if(mat[i][j] === 0)continue;\r\n            mat[i][j] += mat[i][j+1];\r\n\r\n        }\r\n    }\r\n    var sum = 0\r\n    for(let i=0; i<m; i++){\r\n        for(let j = 0; j<n; j++ ){\r\n            if(mat[i][j] === 0)continue;\r\n            var min = mat[i][j]\r\n\r\n            for(let k=i; k<m; k++){\r\n                if(mat[k][j] === 0)break;\r\n                min = Math.min(min , mat[k][j])\r\n                sum += min\r\n            }\r\n        }\r\n\r\n    }\r\n    return sum\r\n};"
  }
}
