export default {
  "id": 2192,
  "name": "All Ancestors of a Node in a Directed Acyclic Graph",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph",
  "relativeDir": "A/All Ancestors of a Node in a Directed Acyclic Graph",
  "slug": "2192-all-ancestors-of-a-node-in-a-directed-acyclic-graph",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "python": 18,
    "javascript": 43
  },
  "languages": {
    "cpp": "// Runtime: 238 ms (Top 81.29%) | Memory: 62.6 MB (Top 82.53%)\r\nclass Solution {\r\npublic:\r\n    void dfs(vector<vector<int>> &graph,int i,int j,vector<vector<int>> &ans,vector<bool> &vis){\r\n        vis[j]=true;\r\n        for(auto &x:graph[j]){\r\n            if(!vis[x]){\r\n                ans[x].push_back(i);\r\n                dfs(graph,i,x,ans,vis);\r\n            }\r\n\r\n        }\r\n    }\r\n    vector<vector<int>> getAncestors(int n, vector<vector<int>>& edges) {\r\n\r\n        vector<vector<int>> ans(n),graph(n);\r\n        for(auto &v:edges){\r\n            graph[v[0]].push_back(v[1]);\r\n        }\r\n        for(int i=0;i<n;i++){\r\n            vector<bool> vis(n);\r\n            dfs(graph,i,i,ans,vis);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 2132 ms (Top 14.62%) | Memory: 30.4 MB (Top 89.89%)\r\nclass Solution:\r\n    def getAncestors(self, n: int, edges: List[List[int]]) -> List[List[int]]:\r\n        graph = {}\r\n        for a, b in edges:\r\n            graph[b] = graph.get(b, []) + [a]\r\n        op = [[] for i in range(n)]\r\n        for a in graph:\r\n            visited = set()\r\n            paths = [a]\r\n            while len(paths) > 0:\r\n                curr = paths.pop()\r\n                for b in graph.get(curr, []):\r\n                    if b not in visited:\r\n                        visited.add(b)\r\n                        paths.append(b)\r\n            op[a] = sorted(visited)\r\n        return op",
    "javascript": "// Runtime: 522 ms (Top 82.69%) | Memory: 89.6 MB (Top 82.69%)\r\nvar getAncestors = function(n, edges) {\r\n    const adj = [];\r\n    const ancestors = [];\r\n    const inDegrees = new Array(n).fill(0);\r\n\r\n    for (let i = 0 ; i < n; ++i) {\r\n        adj[i] = new Set();\r\n        ancestors[i] = new Set();\r\n    }\r\n\r\n    for (const [from, to] of edges) {\r\n        adj[from].add(to);\r\n        ++inDegrees[to];\r\n    }\r\n\r\n    const queue = [];\r\n\r\n    for (let i = 0 ; i < n; ++i) {\r\n        if (inDegrees[i] === 0) queue.push(i);\r\n    }\r\n\r\n    while (queue.length > 0) {\r\n        const node = queue.shift();\r\n\r\n        for (const child of adj[node]) {\r\n            --inDegrees[child];\r\n\r\n            if (inDegrees[child] === 0) queue.push(child);\r\n\r\n            ancestors[child].add(node);\r\n            ancestors[node].forEach((prev) => ancestors[child].add(prev));\r\n        }\r\n    }\r\n\r\n    const res = [];\r\n\r\n    for (let i = 0; i < n; ++i) {\r\n        res[i] = [...ancestors[i]].sort((a, b) => a - b);\r\n    }\r\n\r\n    return res;\r\n};"
  }
}
