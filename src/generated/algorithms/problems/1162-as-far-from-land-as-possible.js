export default {
  "id": 1162,
  "name": "As Far from Land as Possible",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/as-far-from-land-as-possible",
  "relativeDir": "A/As Far from Land as Possible",
  "slug": "1162-as-far-from-land-as-possible",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 52,
    "python": 22,
    "javascript": 43
  },
  "languages": {
    "cpp": "class Solution {\r\n    vector<int> dr = {0,0,1,-1};\r\n    vector<int> dc = {1,-1,0,0};\r\npublic:\r\n    bool isPos(int r,int c,int n){\r\n        return ( r>=0 && c>=0 && r<n && c<n );\r\n    }\r\n\r\n    int maxDistance(vector<vector<int>>& grid) {\r\n        int n = grid.size();\r\n        vector< vector<int> > dist(n,vector<int>(n,-1));\r\n        queue< vector<int> > pq;\r\n        for(int i=0 ; i<n ; i++){\r\n            for(int j=0 ; j<n ; j++){\r\n                if( 1==grid[i][j] ){\r\n                    dist[i][j] = 0;\r\n                    pq.push({i,j});\r\n                }\r\n            }\r\n        }\r\n        int ans = 0;\r\n        while( !pq.empty() ){\r\n            vector<int> vect = pq.front();\r\n            pq.pop();\r\n            int r = vect[0];\r\n            int c = vect[1];\r\n            if( 0==grid[r][c] ){\r\n                ans = max(ans,dist[r][c]);\r\n            }\r\n            for(int i=0 ; i<4 ; i++){\r\n                int nr = r+dr[i];\r\n                int nc = c+dc[i];\r\n                if( isPos(nr,nc,n) && -1==dist[nr][nc] ){\r\n                    dist[nr][nc] = dist[r][c]+1;\r\n                    pq.push({nr,nc});\r\n                }\r\n            }\r\n        }\r\n        return (ans==0 ? -1 : ans);\r\n    }\r\n};",
    "python": "from collections import *\r\nclass Solution:\r\n    def maxDistance(self, grid) -> int:\r\n        m,n=len(grid),len(grid[0])\r\n        queue=deque([])\r\n        for i in range(m):\r\n            for j in range(n):\r\n                if grid[i][j]==1:\r\n                    queue.append((i,j))\r\n        c=-1\r\n        while queue:\r\n            # print(queue)\r\n            temp=len(queue)\r\n            for _ in range(temp):\r\n                (i,j)=queue.popleft()\r\n                for (x,y) in ((i-1,j),(i+1,j),(i,j-1),(i,j+1)):\r\n                    if x < 0 or x >= m or y < 0 or y >= n or grid[x][y]==1:\r\n                        continue\r\n                    grid[x][y]=1\r\n                    queue.append((x,y))\r\n            c+=1\r\n        return c if c!=0 else -1",
    "java": "class Solution {\r\n    class Point {\r\n        int x, y;\r\n        public Point(int x, int y){\r\n            this.x=x;\r\n            this.y=y;\r\n        }\r\n    }\r\n    int[][] dist;\r\n    int n,ans;\r\n    int[] dx={0, 0, +1, -1};\r\n    int[] dy={+1, -1, 0, 0};\r\n    public int maxDistance(int[][] grid) {\r\n        n=grid.length;\r\n        dist = new int[n][n];\r\n        Queue<Point> q = new LinkedList<>();\r\n        for (int i=0;i<n;i++){\r\n            for (int j=0;j<n;j++){\r\n                if (grid[i][j]==0) dist[i][j]=2*1000*1000*1000;\r\n                else {\r\n                    dist[i][j]=0;\r\n                    q.add(new Point(i, j)); // multisource on grid[i][j] = 1\r\n                }\r\n            }\r\n        }\r\n        ans=-1;\r\n        while(!q.isEmpty()){\r\n            Point p = q.poll();\r\n            int x = p.x;\r\n            int y = p.y;\r\n            for (int k = 0; k < 4; k++) {\r\n                int r=dx[k]+x;\r\n                int c=dy[k]+y;\r\n                if (valid(r,c)&&grid[r][c]==0&&dist[r][c]>dist[x][y]+1){\r\n                    dist[r][c]=dist[x][y]+1;\r\n                    Point newP = new Point(r,c);\r\n                    q.add(newP);\r\n                }\r\n            }\r\n        }\r\n        for (int i=0;i<n;i++){\r\n            for (int j=0;j<n;j++){\r\n                ans=Math.max(ans,dist[i][j]); // Manhattan distance is the same as the distance on the grid in general \r\n            }\r\n        }\r\n        if (ans==0||ans==2*1000*1000*1000) ans=-1;\r\n        return ans;\r\n    }\r\n    public boolean valid(int r, int c){\r\n        return r>=0&&c>=0&&r<n&&c<n;\r\n    }\r\n}",
    "javascript": "// Runtime: 263 ms (Top 33.64%) | Memory: 50 MB (Top 56.36%)\r\n/**\r\n * @param {number[][]} grid\r\n * @return {number}\r\n */\r\nconst DIR = [\r\n    [0,1],\r\n    [0,-1],\r\n    [1,0],\r\n    [-1,0]\r\n];\r\nvar maxDistance = function(grid) {\r\n    const ROWS = grid.length;\r\n    const COLS = grid[0].length;\r\n    const cost = new Array(ROWS).fill().map(()=>new Array(COLS).fill(Infinity));\r\n    const que = [];\r\n    for(let row=0; row<ROWS; row++) {\r\n        for(let col=0; col<COLS; col++) {\r\n            if(grid[row][col] === 1) {\r\n                que.push([row, col]);\r\n                cost[row][col] = 0;\r\n            }\r\n        }\r\n    }\r\n    if(que.length == 0 || que.length == ROWS * COLS) return -1;\r\n    while(que.length) {\r\n        const [row, col] = que.shift();\r\n        for(const dir of DIR) {\r\n            const newRow = row+dir[0];\r\n            const newCol = col+dir[1];\r\n            if(newRow < 0 || newCol < 0 || newRow >= ROWS || newCol >= COLS) continue;\r\n            if(cost[newRow][newCol] > cost[row][col] + 1) {\r\n                cost[newRow][newCol] = cost[row][col] + 1;\r\n                que.push([newRow, newCol]);\r\n            }\r\n        }\r\n    }\r\n    let max = 0;\r\n    for(const row of cost) {\r\n        max = Math.max(max, ...row);\r\n    }\r\n    return max;\r\n};"
  }
}
