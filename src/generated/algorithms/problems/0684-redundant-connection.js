export default {
  "id": 684,
  "name": "Redundant Connection",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/redundant-connection",
  "relativeDir": "R/Redundant Connection",
  "slug": "0684-redundant-connection",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 71,
    "java": 50,
    "python": 55,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 9 ms (Top 75.92%) | Memory: 9.2 MB (Top 31.64%)\r\nclass UnionFind {\r\n    public:\r\n\r\n    int* parent;\r\n    int* rank;\r\n\r\n    UnionFind(int n){\r\n        rank = new int[n];\r\n        parent = new int[n];\r\n\r\n        for(int i=0; i<n; i++){\r\n            parent[i] = i;\r\n            rank[i] = 0;\r\n        }\r\n    }\r\n\r\n    // collapsing find\r\n    int Find(int node){\r\n        // if parent of node is itself\r\n        if(parent[node] == node){\r\n            return node;\r\n        }\r\n        return parent[node] = Find(parent[node]);\r\n    }\r\n\r\n    // union by rank\r\n    void Union(int u, int v){\r\n        // find the parent nodes of u and v\r\n        u = Find(u);\r\n        v = Find(v);\r\n\r\n        // if u and v don't belong to the same set\r\n        if(u != v){\r\n            if(rank[u]<rank[v]){\r\n                swap(u,v);\r\n            }\r\n\r\n            // attaching the lower rank tree with the higher rank one\r\n            parent[v] = u;\r\n\r\n            // if ranks are equal increase the rank of u\r\n            if(rank[u]==rank[v]){\r\n                rank[u]++;\r\n            }\r\n        }\r\n    }\r\n};\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> findRedundantConnection(vector<vector<int>>& edges) {\r\n        UnionFind UF = UnionFind(1001);\r\n\r\n        for(vector<int>& edge : edges){\r\n            int u = edge[0];\r\n            int v = edge[1];\r\n\r\n            // if adding this edge creates a cycle\r\n            if(UF.Find(u) == UF.Find(v)){\r\n                return {u,v};\r\n            }\r\n\r\n            // add u and v to the same set\r\n            UF.Union(u,v);\r\n        }\r\n\r\n        // if no cycle was found\r\n        return {-1};\r\n    }\r\n};",
    "python": "class UnionFind:\r\n    \r\n    def __init__(self, size):\r\n        \r\n        self.parent = [-1 for _ in range(size)]\r\n        self.rank = [-1 for _ in range(size)]\r\n        \r\n    def find(self, i):\r\n        \r\n        if self.parent[i] == -1:\r\n            return i\r\n        \r\n        k = self.find(self.parent[i])\r\n        self.parent[i] = k\r\n        return k\r\n    \r\n    def union(self, x, y):\r\n        \r\n        x = self.find(x)\r\n        y = self.find(y)\r\n        \r\n        if x == y:\r\n            return -1\r\n        else:\r\n            \r\n            if self.rank[x] > self.rank[y]:\r\n                self.parent[y] = x\r\n            \r\n            elif self.rank[x] < self.rank[y]:\r\n                self.parent[x] = y\r\n                \r\n            else:\r\n                self.rank[x] += 1\r\n                self.parent[y] = x\r\n\r\nclass Solution:\r\n    def findRedundantConnection(self, edges: List[List[int]]) -> List[int]:\r\n   \r\n        vertex_set = set()\r\n    \r\n        for edge in edges:\r\n            vertex_set.add(edge[0])\r\n            vertex_set.add(edge[1])\r\n        \r\n        \r\n        union_find = UnionFind(len(vertex_set))\r\n        \r\n        for edge in edges:\r\n            \r\n            new_edge = [edge[0]-1, edge[1]-1]\r\n            \r\n            if union_find.union(new_edge[0], new_edge[1]) == -1:\r\n                return edge\r\n        \r\n        return []",
    "java": "// Runtime: 1 ms (Top 89.63%) | Memory: 43.5 MB (Top 75.35%)\r\nclass Solution {\r\n    public int[] findRedundantConnection(int[][] edges) {\r\n        UnionFind uf = new UnionFind(edges.length);\r\n        for (int[] edge : edges) {\r\n            if (!uf.union(edge[0], edge[1])) {\r\n                return new int[]{edge[0], edge[1]};\r\n            }\r\n        }\r\n        return null;\r\n    }\r\n\r\n    private class UnionFind {\r\n        int[] rank;\r\n        int[] root;\r\n\r\n        UnionFind(int n) {\r\n            rank = new int[n + 1];\r\n            root = new int[n + 1];\r\n            for (int i = 1; i <= n; i++) {\r\n                root[i] = i;\r\n                rank[i] = 1;\r\n            }\r\n        }\r\n\r\n        int find(int x) {\r\n            if (x == root[x]) {\r\n                return x;\r\n            }\r\n            return root[x] = find(root[x]);\r\n        }\r\n\r\n        boolean union(int x, int y) {\r\n            int rootX = find(x);\r\n            int rootY = find(y);\r\n            if (rootX != rootY) {\r\n                if (rank[rootX] > rank[rootY]) {\r\n                    root[rootY] = root[rootX];\r\n                } else if (rank[rootY] > rank[rootX]) {\r\n                    root[rootX] = root[rootY];\r\n                } else {\r\n                    root[rootY] = root[rootX];\r\n                    rank[rootX]++;\r\n                }\r\n                return true;\r\n            }\r\n            return false;\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 123 ms (Top 34.33%) | Memory: 44.8 MB (Top 65.98%)\r\n\r\nvar findRedundantConnection = function(edges) {\r\n    const root = [];\r\n    const find = (index) => {\r\n        const next = root[index];\r\n        return next ? find(next) : index;\r\n    };\r\n\r\n    for (const [a, b] of edges) {\r\n        const x = find(a);\r\n        const y = find(b);\r\n\r\n        if (x === y) return [a, b];\r\n        root[x] = y;\r\n    }\r\n};"
  }
}
