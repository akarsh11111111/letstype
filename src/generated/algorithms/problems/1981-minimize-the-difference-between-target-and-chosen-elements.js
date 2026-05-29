export default {
  "id": 1981,
  "name": "Minimize the Difference Between Target and Chosen Elements",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements",
  "relativeDir": "M/Minimize the Difference Between Target and Chosen Elements",
  "slug": "1981-minimize-the-difference-between-target-and-chosen-elements",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 23,
    "python": 47,
    "javascript": 36
  },
  "languages": {
    "cpp": "// Runtime: 891 ms (Top 82.1%) | Memory: 15.48 MB (Top 61.3%)\r\n\r\nclass Solution \r\n{\r\npublic:\r\n    int dp[8000][71];\r\n    int n,m;\r\n    int find(vector<vector<int>>&mat,int r,int sum,int &target)\r\n    {\r\n        if(r>=n)\r\n        {\r\n            return abs(sum-target);\r\n        }\r\n        if(dp[sum][r]!=-1)\r\n        {\r\n            return dp[sum][r];\r\n        }\r\n        int ans=INT_MAX;\r\n        for(int i=0;i<m;i++)\r\n        {\r\n            ans=min(ans,find(mat,r+1,sum+mat[r][i],target));\r\n            if(ans==0)\r\n            {\r\n                break;\r\n            }\r\n        }\r\n        return dp[sum][r]=ans;\r\n    }\r\n    int minimizeTheDifference(vector<vector<int>>& mat, int target) \r\n    {\r\n        memset(dp,-1,sizeof(dp));\r\n        n=mat.size();\r\n        m=mat[0].size();\r\n        return find(mat,0,0,target);\r\n    }\r\n};",
    "python": "// Runtime: 2497 ms (Top 82.35%) | Memory: 20.40 MB (Top 18.04%)\r\n\r\nclass Solution:\r\n    def minimizeTheDifference(self, mat: List[List[int]], target: int) -> int:\r\n        \r\n        # store the mxn size of the matrix\r\n        m = len(mat)\r\n        n = len(mat[0])\r\n        \r\n        dp = defaultdict(defaultdict)\r\n        \r\n        # Sorting each row of the array for more efficient pruning\r\n        # Note:this purely based on the observation on problem constraints (although interesting :))\r\n        for i in range(m):\r\n            mat[i] = sorted(mat[i])\r\n        \r\n        # returns minimum absolute starting from from row i to n-1 for the target\r\n        globalMin = float(\"inf\")\r\n        def findMinAbsDiff(i,prevSum):\r\n            nonlocal globalMin\r\n            if i == m:\r\n                globalMin = min(globalMin, abs(prevSum-target))\r\n                return abs(prevSum-target)\r\n            \r\n            # pruning step 1\r\n            # because the array is increasing & prevSum & target will always be positive\r\n            if prevSum-target > globalMin:\r\n                return float(\"inf\")\r\n            \r\n            \r\n            if (i in dp) and (prevSum in dp[i]):\r\n                return dp[i][prevSum]\r\n            \r\n            minDiff = float(\"inf\")\r\n            # for each candidate select that and backtrack\r\n            for j in range(n):\r\n                diff = findMinAbsDiff(i+1, prevSum+mat[i][j])\r\n                # pruning step 2 - break if we found minDiff 0 --> VERY CRTICIAL\r\n                if diff == 0:\r\n                    minDiff = 0\r\n                    break\r\n                minDiff = min(minDiff, diff)\r\n            \r\n            dp[i][prevSum] = minDiff\r\n            return minDiff\r\n        \r\n        return findMinAbsDiff(0, 0)",
    "java": "// Runtime: 1407 ms (Top 25.79%) | Memory: 92.6 MB (Top 35.19%)\r\nclass Solution {\r\n    public int minimizeTheDifference(int[][] mat, int target) {\r\n        Integer[][] dp = new Integer[mat.length][5001];\r\n        return minDiff(mat, 0, target,0, dp);\r\n    }\r\n\r\n    public int minDiff(int[][] mat,int index,int target, int val, Integer[][] dp){\r\n        if(index == mat.length){\r\n            return Math.abs(val - target);\r\n        }\r\n        if(dp[index][val] != null){\r\n            return dp[index][val];\r\n        }\r\n\r\n        int res = Integer.MAX_VALUE;\r\n        for(int i = 0; i < mat[0].length; i++){\r\n            res = Math.min(res, minDiff(mat, index + 1, target, val + mat[index][i], dp));\r\n        }\r\n\r\n        return dp[index][val] = res;\r\n    }\r\n}",
    "javascript": "var minimizeTheDifference = function(mat, target) {\r\n    const MAX = Number.MAX_SAFE_INTEGER;\r\n    \r\n    const m = mat.length;\r\n    const n = mat[0].length;\r\n    \r\n    const memo = [];\r\n    \r\n    for (let i = 0; i < m; ++i) {\r\n        memo[i] = new Array(4901).fill(MAX);\r\n    }\r\n    \r\n    return topDown(0, 0);\r\n    \r\n    function topDown(row, sum) {\r\n        if (row === m) return Math.abs(target - sum);\r\n        if (memo[row][sum] != MAX) return memo[row][sum];\r\n        \r\n        let min = MAX;\r\n        \r\n        mat[row].sort((a, b) => a - b); \r\n        \r\n        const set = new Set(mat[row]);\r\n       \r\n        for (const num of set) {\r\n           const res = topDown(row + 1, sum + num);\r\n            \r\n           if (res > min) break;\r\n           min = res;\r\n        }\r\n        \r\n        memo[row][sum] = min;\r\n        \r\n        return min;\r\n    }\r\n};"
  }
}
