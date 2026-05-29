export default {
  "id": 2304,
  "name": "Minimum Path Cost in a Grid",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-path-cost-in-a-grid",
  "relativeDir": "M/Minimum Path Cost in a Grid",
  "slug": "2304-minimum-path-cost-in-a-grid",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 37,
    "python": 20,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int solve(vector<vector<int>> &grid,vector<vector<int>>& moveCost,int i,int j,int n,int m){\r\n        if(i==n-1){\r\n            return grid[i][j];\r\n        }\r\n        int ans=INT_MAX;\r\n        for(int k=0;k<m;k++){\r\n            ans=min(ans,grid[i][j]+moveCost[grid[i][j]][k]+solve(grid,moveCost,i+1,k,n,m));\r\n        }\r\n        return ans;\r\n    }\r\n    int minPathCost(vector<vector<int>>& grid, vector<vector<int>>& moveCost) {\r\n        int ans=INT_MAX;\r\n        int n=grid.size();\r\n        int m=grid[0].size();\r\n        for(int i=0;i<m;i++){\r\n            ans=min(ans,solve(grid,moveCost,0,i,n,m));\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def minPathCost(self, grid: List[List[int]], moveCost: List[List[int]]) -> int:\r\n        max_row, max_col = len(grid), len(grid[0])\r\n        dp = [[-1] * max_col for _ in range(max_row)] \r\n\r\n        def recursion(row, col):\r\n            if row == max_row - 1: # If last row then return nodes value\r\n                return grid[row][col]\r\n            if dp[row][col] == -1: # If DP for this node is not computed then we will do so now.\r\n                current = grid[row][col] # Current Node Value\r\n                res = float('inf') # To store best path from Current Node\r\n                for c in range(max_col): # Traverse all path from Current Node\r\n                    val = moveCost[current][c] + recursion(row + 1, c) # Move cost + Target Node Value\r\n                    res = min(res, val)\r\n                dp[row][col] = res + current # DP[current node] = Best Path + Target Node Val + Current Node Val\r\n            return dp[row][col]\r\n\r\n        for c in range(max_col):\r\n            recursion(0, c) # Start recursion from all nodes in 1st row\r\n        return min(dp[0]) # Return min value from 1st row",
    "java": "class Solution {\r\n    Integer dp[][];\r\n    public int minPathCost(int[][] grid, int[][] moveCost) \r\n    {\r\n        dp=new Integer[grid.length][grid[0].length];\r\n        int ans=Integer.MAX_VALUE;\r\n       \r\n        for(int i=0;i<grid[0].length;i++)\r\n        {\r\n            ans=Math.min(ans,grid[0][i]+helper(grid,moveCost,grid[0][i],1));\r\n        }\r\n        return ans;\r\n    }\r\n    public int helper(int[][] grid,int[][] moveCost,int cur,int i)\r\n    {\r\n        if(i==grid.length)\r\n        {\r\n            return 0;\r\n        }\r\n        int ans=Integer.MAX_VALUE;\r\n        for(int k=0;k<grid[0].length;k++)\r\n        {\r\n            int a=Integer.MAX_VALUE;\r\n            if(dp[i][k]!=null)\r\n            {\r\n                a=dp[i][k];\r\n            }\r\n            else\r\n            {\r\n                a=helper(grid,moveCost,grid[i][k],i+1);\r\n                dp[i][k]=a;\r\n            }\r\n            ans=Math.min(grid[i][k]+moveCost[cur][k]+a,ans);\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 96 ms (Top 94.12%) | Memory: 59.50 MB (Top 11.76%)\r\n\r\nvar minPathCost = function(grid, moveCost) {\r\n\r\n    const dfs=(r,c,dp)=>{\r\n        if(r===grid.length || c===grid[r].length) return 0;\r\n        if(dp[r][c]!==undefined) return dp[r][c];\r\n\r\n        // current cost\r\n        const cost=grid[r][c], nextRow=r+1;\r\n\r\n        if(nextRow===grid.length) return cost;\r\n        \r\n        let nextMoveCost=Number.MAX_SAFE_INTEGER;\r\n        for(let nextCol=0;nextCol<grid[nextRow].length;nextCol++){\r\n            nextMoveCost=Math.min(nextMoveCost,dfs(nextRow,nextCol,dp)+moveCost[cost][nextCol]/*path cost*/);\r\n        }\r\n        return dp[r][c]=cost+(nextMoveCost===Number.MAX_SAFE_INTEGER?0:nextMoveCost);\r\n    };\r\n\r\n    let minCost=Number.MAX_SAFE_INTEGER;\r\n    const dp=Array(grid.length).fill().map(()=>Array(grid[0].length).fill());\r\n    for(let c=0;c<grid[0].length;c++){\r\n        minCost=Math.min(minCost,dfs(0,c,dp));\r\n    }\r\n    return minCost;\r\n};"
  }
}
