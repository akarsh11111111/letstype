export default {
  "id": 547,
  "name": "Number of Provinces",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-provinces",
  "relativeDir": "N/Number of Provinces",
  "slug": "0547-number-of-provinces",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 28,
    "python": 24,
    "javascript": 50
  },
  "languages": {
    "cpp": "// Runtime: 51 ms (Top 25.06%) | Memory: 13.8 MB (Top 67.00%)\r\nclass Solution {\r\nprivate:\r\n    void dfs(int node,vector<vector<int>> &graph,int n,vector<bool> &vis){\r\n\r\n        vis[node] = true;\r\n\r\n        for(int j = 0; j < graph[node].size(); j++){\r\n            if(graph[node][j] == 1 and !vis[j]){\r\n                dfs(j,graph,n,vis);\r\n            }\r\n        }\r\n\r\n    }\r\npublic:\r\n    int findCircleNum(vector<vector<int>>& isConnected) {\r\n\r\n        int n = isConnected.size();\r\n\r\n        vector<bool> vis(n,false);\r\n\r\n        int ans = 0;\r\n\r\n        for(int i = 0; i < n; i++){\r\n            if(!vis[i]){\r\n                ans++;\r\n                dfs(i,isConnected,n,vis);\r\n            }\r\n        }\r\n\r\n        return ans;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findCircleNum(self, isConnected: List[List[int]]) -> int:\r\n        graph = defaultdict(list)\r\n        for i,x in enumerate(isConnected):\r\n            for j,n in enumerate(x):\r\n                if j!=i and n == 1:\r\n                    graph[i].append(j)\r\n            \r\n        visit = set()\r\n        \r\n        def dfs(node):\r\n            if node not in graph:\r\n                return \r\n            for neighbor in graph[node]:\r\n                if neighbor not in visit:\r\n                    visit.add(neighbor)\r\n                    dfs(neighbor)\r\n        count = 0\r\n        for i in range(len(isConnected)):\r\n            if i in visit:\r\n                continue\r\n            count+=1\r\n            dfs(i)\r\n        return count",
    "java": "// Runtime: 7 ms (Top 22.65%) | Memory: 42.7 MB (Top 99.36%)\r\nclass Solution {\r\n    public int findCircleNum(int[][] isConnected) {\r\n        int size = isConnected.length;\r\n        boolean[] isCheck = new boolean[size+1];\r\n        int ans = 0;\r\n\r\n        for(int i=1; i<=size; i++){\r\n\r\n            if(!isCheck[i]){ // Doing BFS if it's false in isCheck[]\r\n                Queue<Integer> q = new LinkedList<>();\r\n                q.add(i);\r\n                ans++; // No. of queue = No. of Graphs\r\n\r\n                while(!q.isEmpty()){\r\n                    int temp = q.remove();\r\n                    isCheck[temp] = true;\r\n\r\n                    for(int j=0; j<size; j++){\r\n                        if(isConnected[temp-1][j]==1 && !isCheck[j+1])\r\n                            q.add(j+1);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 110 ms (Top 51.77%) | Memory: 45.5 MB (Top 30.12%)\r\nfunction DisjointSet (size) {\r\n    this.root = []\r\n    this.rank = []\r\n    this.size = size\r\n    for (let i = 0; i < size; i++) {\r\n        this.root.push(i)\r\n        this.rank.push(1)\r\n    }\r\n    this.find = function(x) {\r\n        if (x === this.root[x]) {\r\n            return x\r\n        }\r\n        this.root[x] = this.find(this.root[x])\r\n        return this.root[x]\r\n    }\r\n    this.union = function(x, y) {\r\n        const rootX = this.find(x)\r\n        const rootY = this.find(y)\r\n        if (rootX === rootY) return\r\n        this.size--\r\n        if (this.rank[rootX] > this.rank[rootY]) {\r\n            this.root[rootY] = this.root[rootX]\r\n        }\r\n        else if (this.rank[rootX] < this.rank[rootY]) {\r\n            this.root[rootX] = this.root[rootY]\r\n        }\r\n        else {\r\n            this.root[rootY] = this.root[rootX]\r\n            this.rank[rootX]++\r\n        }\r\n    }\r\n}\r\n\r\n/**\r\n * @param {number[][]} isConnected\r\n * @return {number}\r\n */\r\nvar findCircleNum = function(isConnected) {\r\n    const n = isConnected.length\r\n    const disjointSet = new DisjointSet(isConnected.length)\r\n    for (let i = 0; i < n; i++) {\r\n        for (let j = 0; j < n; j++) {\r\n            if (isConnected[i][j]) {\r\n                disjointSet.union(i, j)\r\n            }\r\n        }\r\n    }\r\n    return disjointSet.size\r\n};"
  }
}
