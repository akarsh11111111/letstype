export default {
  "id": 1992,
  "name": "Find All Groups of Farmland",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-all-groups-of-farmland",
  "relativeDir": "F/Find All Groups of Farmland",
  "slug": "1992-find-all-groups-of-farmland",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 40,
    "java": 26,
    "python": 37,
    "javascript": 37
  },
  "languages": {
    "cpp": "// Runtime: 607 ms (Top 6.76%) | Memory: 113.6 MB (Top 19.34%)\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> nbrs = {{0,1},{1,0},{-1,0},{0,-1}};\r\n    pair<int, int> dfs(vector<vector<int>> &land, int i, int j, vector<vector<bool>> &visited) {\r\n        visited[i][j] = true;\r\n        pair<int, int> res = make_pair(i, j);\r\n        for(auto &nbr: nbrs) {\r\n            int x = i + nbr[0];\r\n            int y = j + nbr[1];\r\n            if(x < 0 || y < 0 || x >= land.size() || y >= land[0].size() || visited[x][y] || land[x][y] != 1)\r\n                continue;\r\n            pair<int, int> ans = dfs(land, x, y, visited);\r\n            res.first = max(res.first, ans.first);\r\n            res.second = max(res.second, ans.second);\r\n        }\r\n        return res;\r\n    }\r\n    vector<vector<int>> findFarmland(vector<vector<int>>& land) {\r\n        int m = land.size();\r\n        int n = land[0].size();\r\n        vector<vector<bool>> visited(m, vector<bool>(n, false));\r\n        vector<vector<int>> ans;\r\n        for(int i = 0; i < m; i++) {\r\n            for(int j = 0; j < n; j++) {\r\n                if(!visited[i][j] && land[i][j] == 1) {\r\n                    pair<int, int> p = dfs(land, i, j, visited);\r\n                    vector<int> res;\r\n                    res.push_back(i);\r\n                    res.push_back(j);\r\n                    res.push_back(p.first);\r\n                    res.push_back(p.second);\r\n                    ans.push_back(res);\r\n                    cout << 1 << endl;\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 1416 ms (Top 90.80%) | Memory: 33.1 MB (Top 49.64%)\r\nclass Solution:\r\n\r\n    def findFarmland(self, land: List[List[int]]) -> List[List[int]]:\r\n        n = len(land)\r\n        m = len(land[0])\r\n\r\n        groups = []\r\n        visited = set()\r\n\r\n        for y in range(n):\r\n            for x in range(m):\r\n                if land[y][x] == 0:\r\n                    continue\r\n\r\n                if (y, x) in visited:\r\n                    continue\r\n\r\n                q = collections.deque()\r\n                q.append((y, x))\r\n                visited.add((y, x))\r\n\r\n                while q:\r\n                    cy, cx = q.popleft()\r\n\r\n                    for dy, dx in ((0, 1), (1, 0)):\r\n                        if (cy + dy, cx + dx) in visited:\r\n                            continue\r\n\r\n                        if 0 <= cy + dy < n and 0 <= cx + dx < m:\r\n                            if land[cy + dy][cx + dx] == 1:\r\n                                q.append((cy + dy, cx + dx))\r\n                                visited.add((cy + dy, cx + dx))\r\n\r\n                groups.append([y, x, cy, cx])\r\n\r\n        return groups",
    "java": "// Runtime: 20 ms (Top 59.55%) | Memory: 62.3 MB (Top 88.99%)\r\nclass Solution {\r\n    int[] arr;\r\n    public int[][] findFarmland(int[][] land) {\r\n        List<int[]> res = new ArrayList<>();\r\n        for(int i=0;i<land.length;i++)\r\n            for(int j=0;j<land[0].length;j++){\r\n                if(land[i][j] == 1){\r\n                    arr = new int[]{i,j,0,0};\r\n                    dfs(land,i,j);\r\n                    res.add(arr);\r\n                }\r\n            }\r\n        return res.stream().map(i->i).toArray(int[][] :: new);\r\n    }\r\n    public void dfs(int[][] land, int i,int j){\r\n        if(i<0 || j<0 || i>=land.length || j>= land[0].length || land[i][j] == 0) return;\r\n        arr[2] = Math.max(i,arr[2]);\r\n        arr[3] = Math.max(j,arr[3]);\r\n        land[i][j] = 0;\r\n        dfs(land,i-1,j);\r\n        dfs(land,i,j+1);\r\n        dfs(land,i+1,j);\r\n        dfs(land,i,j-1);\r\n    }\r\n}",
    "javascript": "// Runtime: 390 ms (Top 54.29%) | Memory: 96.8 MB (Top 37.14%)\r\n\r\nvar findFarmland = function(land) {\r\n    let height = land.length;\r\n    let width = land[0].length;\r\n    let results = [];\r\n    let endRow = 0;\r\n    let endCol = 0;\r\n\r\n    let go = (i, j) => {\r\n        if (i < 0 || j < 0 || i >= height || j >= width || land[i][j] === 0) {\r\n            return;\r\n        }\r\n\r\n        endRow = Math.max(endRow, i);\r\n        endCol = Math.max(endCol, j);\r\n        land[i][j] = 0; // reset everything to 0\r\n\r\n        go(i + 1, j);\r\n        go(i - 1, j);\r\n        go(i, j + 1);\r\n        go(i, j - 1);\r\n    }\r\n\r\n    for (let i = 0; i < height; i++) {\r\n        for (let j = 0; j < width; j++) {\r\n            if (land[i][j] === 1) {\r\n                endRow = 0;\r\n                endCol = 0;\r\n                go(i, j);\r\n                results.push([i, j, endRow, endCol]);\r\n            }\r\n        }\r\n    }\r\n\r\n    return results;\r\n};"
  }
}
