export default {
  "id": 1706,
  "name": "Where Will the Ball Fall",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/where-will-the-ball-fall",
  "relativeDir": "W/Where Will the Ball Fall",
  "slug": "1706-where-will-the-ball-fall",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 27,
    "python": 34,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 35 ms (Top 78.20%) | Memory: 13.2 MB (Top 52.18%)\r\nclass Solution {\r\npublic:\r\n    int util(vector<vector<int>>&grid,bool top,int i,int j)\r\n    {\r\n        if(top==0&&i==grid.size()-1)return j;\r\n        if(top==1)\r\n        {\r\n            if(grid[i][j]==1)\r\n            {\r\n                if(j+1>=grid[0].size()||grid[i][j+1]==-1)return -1;\r\n                return util(grid,!top,i,j+1);\r\n            }\r\n            else\r\n            {\r\n                if(j-1<0||grid[i][j-1]==1)return -1;\r\n                return util(grid,!top,i,j-1);\r\n            }\r\n        }\r\n        else\r\n        {\r\n            return util(grid,!top,i+1,j);\r\n        }\r\n    }\r\n    vector<int> findBall(vector<vector<int>>& grid) {\r\n        vector<int>ans(grid[0].size(),-1);\r\n        for(int i=0;i<grid[0].size();i++)\r\n        {\r\n            ans[i]=util(grid,true,0,i);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 205 ms (Top 93.96%) | Memory: 14.3 MB (Top 84.02%)\r\n\r\nclass Solution:\r\n    def findBall(self, grid: List[List[int]]) -> List[int]:\r\n\r\n        m,n=len(grid),len(grid[0])\r\n        for i in range(m):\r\n            grid[i].insert(0,1)\r\n            grid[i].append(-1)\r\n        res=[]\r\n\r\n        for k in range(1,n+1):\r\n            i , j = 0 , k\r\n            struck = False\r\n            while i<m:\r\n                if grid[i][j]==1:\r\n                    if grid[i][j+1]==1:\r\n                        j+=1\r\n                    else:\r\n                        struck=True\r\n                        break\r\n                else:\r\n                    if grid[i][j-1]==-1:\r\n                        j-=1\r\n                    else:\r\n                        struck=True\r\n                        break\r\n                i+=1\r\n            if struck:\r\n                res.append(-1)\r\n            else:\r\n                res.append(j-1)\r\n\r\n        return res",
    "java": "// Runtime: 1 ms (Top 93.85%) | Memory: 54.4 MB (Top 47.92%)\r\nclass Solution {\r\n    public int dfs(int[][] grid, int i, int j){\r\n        if(i==grid.length)\r\n            return j;\r\n\r\n        if(j<0 || j>=grid[0].length)\r\n            return -1;\r\n\r\n        if(grid[i][j]==1 && j+1<grid[0].length && grid[i][j+1]==1)\r\n            return dfs(grid,i+1,j+1);\r\n\r\n        else if(grid[i][j]==-1 && j-1>=0 && grid[i][j-1]==-1)\r\n            return dfs(grid,i+1,j-1);\r\n\r\n        return -1;\r\n    }\r\n    public int[] findBall(int[][] grid) {\r\n        int m = grid[0].length;\r\n        int[] ar = new int[m];\r\n\r\n        for(int j=0;j<m;j++)\r\n            ar[j]=dfs(grid,0,j);\r\n\r\n        return ar;\r\n    }\r\n}",
    "javascript": "var findBall = function(grid) {\r\n    let m = grid.length,\r\n        n = grid[0].length,\r\n        ans = []\r\n    for (let start = 0; start < n; start++) {     // Iterate through the different starting conditions\r\n        let j = start\r\n        for (let i = 0; i < m; i++) {             // Then iterate downward from grid[i][j]\r\n            let dir = grid[i][j]                  // Compare the direction of the current cell to the direction\r\n            if (dir === grid[i][j+dir]) j += dir  //   of the cell on the slant side and move that way if matched\r\n            else i = m, j = -1                    // Otherwise jump to the loop's end and set j to the fail value\r\n        }\r\n        ans[start] = j                            // Update the answer\r\n    }\r\n    return ans                                    // Return the completed answer\r\n};"
  }
}
