export default {
  "id": 1105,
  "name": "Filling Bookcase Shelves",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/filling-bookcase-shelves",
  "relativeDir": "F/Filling Bookcase Shelves",
  "slug": "1105-filling-bookcase-shelves",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 33,
    "python": 25,
    "javascript": 31
  },
  "languages": {
    "cpp": "// Runtime: 84 ms (Top 5.26%) | Memory: 19.4 MB (Top 6.60%)\r\nclass Solution {\r\npublic:\r\n    int minHeightShelves(vector<vector<int>>& books, int shelfWidth) {\r\n        int n=books.size();\r\n        vector<vector<int>> cost(n+1,vector<int>(n+1));\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            int height=books[i-1][1];\r\n            int width=books[i-1][0];\r\n            cost[i][i]=height;\r\n            for(int j=i+1;j<=n;j++)\r\n            {\r\n                height=max(height,books[j-1][1]);\r\n                width+=books[j-1][0];\r\n                if(width<=shelfWidth) cost[i][j]=height;\r\n                else cost[i][j]=-1;\r\n            }\r\n        }\r\n        vector<int> ans(n+1);\r\n        ans[0]=0;\r\n        for(int i=1;i<=n;i++)\r\n        {\r\n            ans[i]=INT_MAX;\r\n            for(int j=1;j<=i;j++)\r\n            {\r\n                if(cost[j][i]==-1) continue;\r\n                if(ans[j-1]!=INT_MAX) ans[i]=min(ans[i],ans[j-1]+cost[j][i]);\r\n            }\r\n        }\r\n        return ans[n];\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minHeightShelves(self, books, shelf_width: int) -> int:\r\n        n, dp = len(books), [float('inf')] * (len(books)+1)\r\n        dp[0] = 0\r\n\r\n        for i in range(1, n+1):\r\n            max_width, max_height, j = shelf_width, 0, i - 1\r\n            \r\n            while j >= 0 and max_width - books[j][0] >= 0:\r\n                max_width -= books[j][0]\r\n                max_height = max(max_height, books[j][1])\r\n                dp[i] = max_height\r\n                j -= 1\r\n\r\n            if j >= 0 and max_width - books[j][0] < 0:\r\n                j = i - 1\r\n                dp[i] = float('inf')\r\n                width, height = 0, 0\r\n                while j >= 0 and width + books[j][0] <= shelf_width:\r\n                    width = width + books[j][0]\r\n                    height = max(books[j][1], height)\r\n                    dp[i] = min(dp[i], height + dp[j])\r\n                    j -= 1\r\n\r\n        return dp[n]",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 42.30 MB (Top 39.5%)\r\n\r\nclass Solution {\r\n    public int minHeightShelves(int[][] books, int shelfWidth) {\r\n        int memo[] = new int[books.length];\r\n        return recur(books, shelfWidth, 0, memo);\r\n    }\r\n    \r\n    private int recur(int[][] books, int shelfWidth, int index, int[] memo) {\r\n        \r\n        if (index == books.length) {\r\n            return 0;\r\n        }\r\n        \r\n        if (memo[index] > 0) {\r\n            return memo[index];\r\n        }\r\n        int ans = Integer.MAX_VALUE;\r\n        int height = 0;\r\n        int width = 0;\r\n        \r\n        for (int i = index; i < books.length; i++) {\r\n            width += books[i][0];\r\n            \r\n            if (width > shelfWidth) {\r\n                break;\r\n            }\r\n            height = Math.max(height, books[i][1]);\r\n            ans = Math.min(ans, height + recur(books, shelfWidth, i + 1, memo));\r\n        }\r\n        return memo[index] = ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 92 ms (Top 69.01%) | Memory: 42.4 MB (Top 98.59%)\r\nvar minHeightShelves = function(books, shelfWidth) {\r\n    let booksArr = []\r\n\r\n    for(let i = 0; i < books.length; i++) {\r\n        let remainingWidth = shelfWidth - books[i][0]\r\n        let bookHeight = books[i][1]\r\n\r\n        let maxHeight = bookHeight\r\n\r\n        let prevSum = booksArr[i - 1] !== undefined ? booksArr[i - 1] : 0\r\n        let minSumHeight = bookHeight + prevSum\r\n\r\n        for(let x = i - 1; x >= 0 ; x--) {\r\n\r\n            let prevBookWidth = books[x][0]\r\n            let prevBookHeight = books[x][1]\r\n            if(remainingWidth - prevBookWidth < 0) break\r\n            remainingWidth -= prevBookWidth\r\n\r\n            prevSum = booksArr[x - 1] !== undefined ? booksArr[x - 1] : 0\r\n\r\n            maxHeight = Math.max(maxHeight, prevBookHeight)\r\n\r\n            minSumHeight = Math.min(prevSum + maxHeight, minSumHeight)\r\n        }\r\n        booksArr[i] = minSumHeight\r\n    }\r\n\r\n    return booksArr[books.length - 1]\r\n};"
  }
}
