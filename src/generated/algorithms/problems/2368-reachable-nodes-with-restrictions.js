export default {
  "id": 2368,
  "name": "Reachable Nodes With Restrictions",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reachable-nodes-with-restrictions",
  "relativeDir": "R/Reachable Nodes With Restrictions",
  "slug": "2368-reachable-nodes-with-restrictions",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 46,
    "java": 28,
    "python": 25,
    "javascript": 44
  },
  "languages": {
    "cpp": "// Runtime: 397 ms (Top 87.55%) | Memory: 168.60 MB (Top 83.82%)\r\n\r\nclass Solution {\r\npublic:\r\n    int reachableNodes(int n, vector<vector<int>>& edges, vector<int>& restricted) {\r\n        \r\n        vector<int> adj[n];\r\n        \r\n        // A visited array.\r\n        vector<int> vis(n,0);\r\n        \r\n        // Count varable to keep count of traversed nodes.\r\n        int cnt = 0;\r\n        \r\n        // Mark all restricted node as visited.\r\n        for(int i=0;i<restricted.size();i++)\r\n            vis[restricted[i]] = 1;\r\n        \r\n        // Make adjency list.\r\n        for(int i=0;i<edges.size();i++)\r\n        {\r\n            adj[edges[i][0]].push_back(edges[i][1]);\r\n            adj[edges[i][1]].push_back(edges[i][0]);\r\n        }\r\n        \r\n        // Perform normal DFS starting from 0th node.\r\n        dfs(adj, vis, 0, cnt);\r\n        \r\n        return cnt;\r\n        \r\n    }\r\n    \r\n    \r\n    void dfs(vector<int> adj[], vector<int> &vis, int node, int &cnt)\r\n    {\r\n        vis[node] = 1;\r\n        cnt++;\r\n        \r\n        for(auto it : adj[node])\r\n        {\r\n            if(!vis[it])\r\n                dfs(adj, vis, it, cnt);\r\n        }\r\n    }\r\n    \r\n};",
    "python": "class Solution:\r\n    def reachableNodes(self, n: int, edges: List[List[int]], restricted: List[int]) -> int:\r\n        # ignore restricted node\r\n        # bfs from 0\r\n        \r\n        # O(E), EDITED: the time complexity here is wrong, plz see my comment\r\n        adj_dict = collections.defaultdict(list)\r\n        for u, v in edges:\r\n            if u in restricted or v in restricted:  # EDITED: not O(1)\r\n                continue\r\n            adj_dict[u].append(v)\r\n            adj_dict[v].append(u)\r\n        \r\n        # O(V + E)\r\n        queue = collections.deque([0])\r\n        visited = {0}\r\n        while queue:\r\n            cur = queue.popleft()\r\n            for neighbor in adj_dict[cur]:\r\n                if neighbor in visited:\r\n                    continue\r\n                visited.add(neighbor)\r\n                queue.append(neighbor)\r\n\r\n        return len(visited)",
    "java": "class Solution {\r\n    int count=0;\r\n    ArrayList<ArrayList<Integer>> adj=new ArrayList<>();\r\n    public int reachableNodes(int n, int[][] edges, int[] restricted) {\r\n        boolean[] vis=new boolean[n];\r\n        for(int i:restricted){\r\n            vis[i]=true;\r\n        }\r\n        for(int i=0;i<n;i++){\r\n            adj.add(new ArrayList<>());\r\n        }\r\n        for(int[] ii:edges){\r\n            adj.get(ii[0]).add(ii[1]);\r\n            adj.get(ii[1]).add(ii[0]);\r\n        }\r\n        dfs(0,vis);\r\n        return count;\r\n    }\r\n    private void dfs(int node,boolean[] vis){\r\n        vis[node]=true;\r\n        count++;\r\n        for(int it:adj.get(node)){\r\n            if(vis[it]==false){\r\n                dfs(it,vis);\r\n            }\r\n        }\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} n\r\n * @param {number[][]} edges\r\n * @param {number[]} restricted\r\n * @return {number}\r\n */\r\nvar reachableNodes = function(n, edges, restricted) {\r\n    const adj = {};\r\n    \r\n    for (const [u, v] of edges) {\r\n        if (adj[u]) {\r\n            adj[u].add(v);\r\n        } else {\r\n            adj[u] = new Set().add(v);\r\n        }\r\n        if (adj[v]) {\r\n            adj[v].add(u);\r\n        } else {\r\n            adj[v] = new Set().add(u);\r\n        }\r\n    }\r\n    \r\n    const restrictedSet = new Set(restricted);\r\n    const visited = new Set();\r\n    \r\n    let ans = 0;\r\n    \r\n    function dfs(node) {\r\n        if (restrictedSet.has(node) || visited.has(node)) {\r\n            return;\r\n        }\r\n        \r\n        ans++;\r\n        visited.add(node);\r\n        \r\n        for (const adjNode of adj[node]) {\r\n            dfs(adjNode);\r\n        }\r\n    }\r\n    \r\n    dfs(0);\r\n    \r\n    return ans;\r\n};"
  }
}
