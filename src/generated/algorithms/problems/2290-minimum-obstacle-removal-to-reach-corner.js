export default {
  "id": 2290,
  "name": "Minimum Obstacle Removal to Reach Corner",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner",
  "relativeDir": "M/Minimum Obstacle Removal to Reach Corner",
  "slug": "2290-minimum-obstacle-removal-to-reach-corner",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 42,
    "python": 20,
    "javascript": 45
  },
  "languages": {
    "cpp": "// Runtime: 375 ms (Top 84.23%) | Memory: 127.40 MB (Top 49.7%)\r\n\r\nclass Solution {\r\npublic:\r\n    int minimumObstacles(vector<vector<int>>& grid) {\r\n      int m=grid.size(), n=grid[0].size();\r\n        vector<int> dir={0,1,0,-1,0};\r\n        vector<vector<int>> dist(m, vector<int> (n,INT_MAX));\r\n        vector<vector<bool>> vis(m, vector<bool>(n,0));\r\n        deque<pair<int,int>>q;\r\n        dist[0][0]=0;\r\n        q.push_front({0,0});\r\n        while(!q.empty())\r\n        {\r\n            auto cur=q.front();\r\n            q.pop_front();\r\n            int x=cur.first;\r\n            int y=cur.second;\r\n            for(int i=0;i<4;i++)\r\n            {\r\n                int cx=x+dir[i];\r\n                int cy=y+dir[i+1];\r\n            if(cx>=0 and cy>=0 and cx<m and cy<n)\r\n            {\r\n                if(!vis[cx][cy])\r\n                {\r\n                    dist[cx][cy]=dist[x][y]+(grid[cx][cy]==1);\r\n                    if(grid[cx][cy]==1)\r\n                        q.push_back({cx,cy});//obstacle cell pushed at the end\r\n                    else\r\n                    q.push_front({cx,cy}); //empty cell pushed on top\r\n                    vis[cx][cy] = true;\r\n                }\r\n            }\r\n        }\r\n    }\r\n        return dist[m-1][n-1];\r\n    }\r\n};",
    "python": "// Runtime: 4890 ms (Top 15.42%) | Memory: 42.20 MB (Top 64.95%)\r\n\r\nclass Solution:\r\n    def minimumObstacles(self, grid: List[List[int]]) -> int:\r\n        m, n = len(grid), len(grid[0])\r\n        q = [(0, 0, 0)]\r\n        dist = [[float('inf') for _ in range(n)] for _ in range(m)]\r\n\r\n        while q:\r\n            size = len(q)\r\n            for _ in range(size):\r\n                obs, x, y = heapq.heappop(q)\r\n                if dist[x][y] < float('inf'): continue\r\n                obs += grid[x][y]\r\n                dist[x][y] = obs\r\n                if x + 1 < m: heapq.heappush(q, (obs, x + 1, y))\r\n                if x > 0: heapq.heappush(q, (obs, x - 1, y))\r\n                if y + 1 < n: heapq.heappush(q, (obs, x, y + 1))\r\n                if y > 0: heapq.heappush(q, (obs, x, y - 1))\r\n        return dist[m - 1][n - 1]",
    "java": "\r\nclass Solution {\r\n    int [][]grid;\r\n    int n,m;\r\n    boolean [][]seen;\r\n    int []dx = new int[]{0,0,1,-1};\r\n    int []dy = new int[]{1,-1,0,0};\r\n    int [][]dp;\r\n    int finalres;\r\n    private boolean isValid(int i, int j) {\r\n        return Math.min(i,j)>=0 && i<n && j<m && !seen[i][j];\r\n    }\r\n    \r\n    private int solve(int i, int j, int cnt) {\r\n        if(cnt>=finalres) return finalres;\r\n        if(i == n-1 && j == m-1) {\r\n            return cnt;\r\n        }\r\n        if(dp[i][j]!=Integer.MAX_VALUE) return dp[i][j];\r\n        int res = n*m+1;\r\n        seen[i][j]=true;\r\n        for(int k=0;k<4;k++) {\r\n            int newI = i+dx[k], newJ = j+dy[k];\r\n            if(isValid(newI, newJ)) {\r\n                res = Math.min(res, solve(newI, newJ, cnt+grid[i][j]));\r\n            }\r\n        }\r\n        seen[i][j]=false;\r\n        return dp[i][j]=Math.min(dp[i][j], res);\r\n    }\r\n    \r\n    public int minimumObstacles(int[][] grid) {\r\n        this.grid = grid;\r\n        this.n = grid.length;\r\n        this.m = grid[0].length;\r\n        this.seen = new boolean[n][m];\r\n        dp = new int[n][m];\r\n        finalres = n*m+1;\r\n        for(int []row:dp) Arrays.fill(row, Integer.MAX_VALUE);\r\n        return solve(0,0,0);\r\n    }\r\n}",
    "javascript": "// Runtime: 1576 ms (Top 35.29%) | Memory: 109.4 MB (Top 35.29%)\r\n/**\r\n * @param {number[][]} grid\r\n * @return {number}\r\n */\r\nvar minimumObstacles = function(grid) {\r\n    let dx=[[0,1],[0,-1],[1,0],[-1,0]];\r\n    let distance=[];\r\n    for(let i=0;i<grid.length;i++){\r\n        distance[i]=[];\r\n        for(let j=0;j<grid[i].length;j++){\r\n            distance[i][j]=Number.MAX_SAFE_INTEGER;\r\n        }\r\n    }\r\n    return bfs(0,0);\r\n\r\n    function bfs(row,col){\r\n        let queue=[];\r\n        distance[row][col]=0;\r\n        queue.push([row,col]);\r\n        while(queue.length>0){\r\n            let element = queue.shift();\r\n            let row = element[0];\r\n            let col = element[1];\r\n            let originalDist = distance[row][col];\r\n            for(let d=0;d<dx.length;d++){\r\n                let i = row + dx[d][0];\r\n                let j = col + dx[d][1];\r\n                if(i>=0 && i<=grid.length-1 && j>=0 && j<=grid[i].length-1){\r\n                    let dist = originalDist;\r\n                    if(grid[i][j]===1){\r\n                        dist++;\r\n                    }\r\n                    if(distance[i][j]>dist){//Update distance for this neighbour node if the new distance is smaller than the previous distance\r\n                        queue.push([i,j]);\r\n                        distance[i][j]=dist;\r\n                    }\r\n\r\n                }\r\n            }\r\n        }\r\n        //return the minimum distance for last cell after completing the process\r\n        return distance[(grid.length-1)][(grid[row].length-1)];\r\n    }\r\n};"
  }
}
