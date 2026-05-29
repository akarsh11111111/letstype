export default {
  "id": 886,
  "name": "Possible Bipartition",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/possible-bipartition",
  "relativeDir": "P/Possible Bipartition",
  "slug": "0886-possible-bipartition",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 47,
    "python": 27,
    "javascript": 36
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    \r\n    bool dfs(vector<int>adj[], vector<int>& color, int node){\r\n        for(auto it: adj[node]){ //dfs over adjacent nodes\r\n            if(color[it]==-1){ //not visited yet\r\n                color[it]=1-color[node]; //set different color of adjacent nodes \r\n                if(!dfs(adj,color,it)) return false;\r\n            }\r\n            else if(color[it]!=1-color[node]) return false; //if adjacent nodes have same color\r\n        }\r\n        return true;\r\n    }\r\n    \r\n    \r\n    bool possibleBipartition(int n, vector<vector<int>>& dislikes) {\r\n        vector<int>adj[n+1];\r\n        for(int i=0;i<dislikes.size();i++){//undirected graph\r\n            adj[dislikes[i][0]].push_back(dislikes[i][1]);\r\n            adj[dislikes[i][1]].push_back(dislikes[i][0]);\r\n        }\r\n        vector<int>color(n+1,-1); //-1 i.e. not visited yet\r\n        for(int i=1;i<=n;i++){\r\n            if(color[i]==-1){\r\n                color[i]=0;\r\n                if(!dfs(adj,color,i)) return false;\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n};",
    "python": "# Runtime: 997 ms (Top 62.25%) | Memory: 22.2 MB (Top 22.99%)\r\nclass Solution:\r\n    def possibleBipartition(self, n: int, dislikes: List[List[int]]) -> bool:\r\n        def dfs(i, c):\r\n            if color[i] != 0:\r\n                if color[i] != c:\r\n                    return False\r\n                return True\r\n\r\n            color[i] = c\r\n            for u in e[i]:\r\n                if not dfs(u, 3 - c):\r\n                    return False\r\n            return True\r\n\r\n        e = [[] for _ in range(n)]\r\n        for u, v in dislikes:\r\n            u -= 1\r\n            v -= 1\r\n            e[u].append(v)\r\n            e[v].append(u)\r\n        color = [0] * n\r\n        for i in range(n):\r\n            if color[i] == 0:\r\n                if not dfs(i, 1):\r\n                    return False\r\n        return True",
    "java": "class Solution {\r\n    int[] rank;\r\n    int[] parent;\r\n    int[] rival;\r\n    public boolean possibleBipartition(int n, int[][] dislikes) {\r\n        rank = new int[n+1];\r\n        rival = new int[n+1];\r\n        parent = new int[n+1];\r\n        for(int i = 1;i <= n;i++){\r\n            rank[i] = 1;\r\n            parent[i] = i;\r\n        }\r\n        for(int[] dis : dislikes){\r\n            int x = dis[0], y = dis[1];\r\n            if(find(x) == find(y))\r\n                return false;\r\n            if(rival[x] != 0)\r\n                union(rival[x], y);\r\n            else\r\n                rival[x] = y;\r\n            if(rival[y] != 0)\r\n                union(rival[y], x);\r\n            else\r\n                rival[y] = x;\r\n        }\r\n        return true;\r\n    }\r\n    public int find(int x){\r\n        if(parent[x] == x)\r\n            return x;\r\n        return parent[x] = find(parent[x]);\r\n    }\r\n    public void union(int x, int y){\r\n        int x_set = find(x);\r\n        int y_set = find(y);\r\n        if(x_set == y_set)\r\n            return;\r\n        if(rank[x_set] < rank[y_set])\r\n            parent[x_set] = y_set;\r\n        else if(rank[y_set] < rank[x_set])\r\n            parent[y_set] = x_set;\r\n        else{\r\n            parent[x_set] = y_set;\r\n            rank[y_set]++;\r\n        }\r\n    }\r\n}",
    "javascript": "var possibleBipartition = function(n, dislikes) {\r\n    const g = new Map();\r\n    dislikes.forEach(([a, b]) => {\r\n        const aDis = g.get(a) || [];\r\n        const bDis = g.get(b) || [];\r\n        g.set(a, aDis.concat(b));\r\n        g.set(b, bDis.concat(a));\r\n    });\r\n    \r\n    const vis = new Array(n+1).fill(false);\r\n    const col = new Array(n+1).fill(-1);\r\n    \r\n    const dfs = (n, c = 0) => {\r\n        if(vis[n]) return true;\r\n        \r\n        col[n] = c;\r\n        vis[n] = true;\r\n        \r\n        const nodes = g.get(n) || [];\r\n        for(let node of nodes) {\r\n            if(!vis[node]) {\r\n                if(!dfs(node, 1 - c)) return false;\r\n            }\r\n            \r\n            if(node != n && col[node] == c) return false;\r\n        }\r\n        \r\n        return true;\r\n    };\r\n    \r\n    let canBi = true;\r\n    for(let i = 1; i <= n; i++) {\r\n        canBi &= dfs(i);\r\n    }\r\n    return canBi;\r\n};"
  }
}
