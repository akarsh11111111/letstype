export default {
  "id": 200,
  "name": "Number of Islands",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-islands",
  "relativeDir": "N/Number of Islands",
  "slug": "0200-number-of-islands",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 27,
    "python": 27,
    "javascript": 49
  },
  "languages": {
    "cpp": "// Runtime: 83 ms (Top 18.08%) | Memory: 12.3 MB (Top 54.41%)\r\nclass Solution {\r\npublic:\r\n\r\n    void calculate(vector<vector<char>>& grid, int i, int j)\r\n    {\r\n        if(i>=grid.size() || j>=grid[i].size() || i<0 || j<0)\r\n            return;\r\n\r\n        if(grid[i][j]=='0')\r\n            return;\r\n\r\n        grid[i][j] = '0';\r\n        calculate(grid,i,j-1);\r\n        calculate(grid,i-1,j);\r\n        calculate(grid,i,j+1);\r\n        calculate(grid,i+1,j);\r\n\r\n    }\r\n\r\n    int numIslands(vector<vector<char>>& grid) {\r\n\r\n        int ans = 0;\r\n\r\n        for(int i=0;i<grid.size();i++)\r\n        {\r\n            for(int j=0;j<grid[0].size();j++)\r\n            {\r\n                if(grid[i][j]=='0')\r\n                    continue;\r\n\r\n                else if (grid[i][j]=='1')\r\n                {\r\n                    ans++;\r\n                    calculate(grid,i,j);\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 353 ms (Top 84.15%) | Memory: 28.7 MB (Top 5.01%)\r\n\r\nseen=set()\r\ndef dfs(i,j,m,n,grid):\r\n    global seen\r\n    if (i<0 or i>=m or j<0 or j>=n):return\r\n    if (i,j) in seen:return\r\n    seen.add((i,j))\r\n    if grid[i][j]==\"1\":\r\n        dfs(i,j+1,m,n,grid)\r\n        dfs(i,j-1,m,n,grid)\r\n        dfs(i+1,j,m,n,grid)\r\n        dfs(i-1,j,m,n,grid)\r\n\r\nclass Solution:\r\n    def numIslands(self, grid: List[List[str]]) -> int:\r\n        global seen\r\n        m=len(grid) #no of rows\r\n        n=len(grid[0]) #no of columns\r\n        count=0\r\n        for i in range(m):\r\n            for j in range(n):\r\n                if (i,j) not in seen and grid[i][j]==\"1\":\r\n                    dfs(i,j,m,n,grid)\r\n                    count+=1\r\n        seen.clear()\r\n        return count",
    "java": "// Runtime: 3 ms (Top 97.42%) | Memory: 50.7 MB (Top 93.44%)\r\nclass Solution {\r\n    public int numIslands(char[][] grid) {\r\n        int count = 0;\r\n        int r = grid.length;\r\n        int c = grid[0].length;\r\n        for(int i=0;i<r;i++){\r\n            for(int j=0;j<c;j++){\r\n                if(grid[i][j]=='1'){\r\n                    dfs(grid,i,j);\r\n                    count++;\r\n                }\r\n            }\r\n        }\r\n        return count;\r\n    }\r\n    public void dfs(char[][] grid,int i,int j){\r\n        if(i<0 || j<0 || i>=grid.length || j>=grid[0].length || grid[i][j]=='0'){\r\n            return;\r\n        }\r\n        grid[i][j] = '0';\r\n        dfs(grid,i,j+1);\r\n        dfs(grid,i,j-1);\r\n        dfs(grid,i+1,j);\r\n        dfs(grid,i-1,j);\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {character[][]} grid\r\n * @return {number}\r\n */\r\nvar numIslands = function(grid) {\r\n    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]\r\n    let islandCount = 0\r\n    \r\n    for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {\r\n        for (let colIndex = 0; colIndex < grid[0].length; colIndex++) {\r\n            const node = grid[rowIndex][colIndex]\r\n            \r\n            // Don't bother with water\r\n            if (node === \"0\") continue\r\n            \r\n            // Once we encounter land, try to get all\r\n            // the connected land from the current land.\r\n            // Once we get all the land connected from\r\n            // the current land, mark them as water so\r\n            // that it would disregarded by the main loop.\r\n            islandCount++\r\n            \r\n            const connectedLandStack = [[rowIndex, colIndex]]\r\n            \r\n            while(connectedLandStack.length > 0) {\r\n                const [row, col] = connectedLandStack.pop()\r\n                \r\n                // change the land to water\r\n                grid[row][col] = \"0\"\r\n                \r\n                for (const direction of directions) {\r\n                    // To get all the connected land we need to check\r\n                    //  all directions (left, right, top, bottom)\r\n                    const newNode = [row + direction[0], col + direction[1]]\r\n                    const newNodeValue = grid[newNode[0]]?.[newNode[1]]\r\n                    \r\n                    // We only care about the connected lands\r\n                    if (newNodeValue === undefined || newNodeValue === \"0\") {\r\n                        continue\r\n                    }\r\n                    \r\n                    connectedLandStack.push(newNode)\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    return islandCount\r\n};"
  }
}
