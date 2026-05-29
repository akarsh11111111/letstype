export default {
  "id": 1319,
  "name": "Number of Operations to Make Network Connected",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-operations-to-make-network-connected",
  "relativeDir": "N/Number of Operations to Make Network Connected",
  "slug": "1319-number-of-operations-to-make-network-connected",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 49,
    "java": 49,
    "python": 46,
    "javascript": 33
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\r\n\t// Union Find Approach\r\n\r\n\tvector<int> root;\r\n\r\n\tint find(int node){\r\n\t\tif(root[node] != node){\r\n\t\t\treturn find(root[node]);\r\n\t\t}\r\n\t\treturn node;\r\n\t}\r\n\r\n\tint makeConnected(int n, vector<vector<int>>& connections) {\r\n\r\n\t\tint m = connections.size();\r\n\r\n\t\tif(m < n-1){\r\n\t\t\treturn -1;\r\n\t\t}\r\n\r\n\t\tfor(int i=0 ; i<n ; i++){\r\n\t\t\troot.push_back(i);\r\n\t\t}\r\n\r\n\t\tfor(int i=0 ; i<m ; i++){\r\n\r\n\t\t\tint v1 = connections[i][0];\r\n\t\t\tint v2 = connections[i][1];\r\n\r\n\t\t\tint r1 = find(v1);\r\n\t\t\tint r2 = find(v2);\r\n\r\n\t\t\tif(r1 != r2){\r\n\t\t\t\troot[r1] = r2;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\tint ans = 0;\r\n\t\tfor(int i=0 ; i<n ; i++){\r\n\t\t\tif(root[i] == i){\r\n\t\t\t\tans++;\r\n\t\t\t}\r\n\t\t}\r\n\r\n\t\treturn ans - 1;\r\n\t}\r\n};",
    "python": "# Runtime: 772 ms (Top 55.10%) | Memory: 34.3 MB (Top 72.08%)\r\nclass Solution(object):\r\n    def __init__(self):\r\n        self.parents = []\r\n        self.count = []\r\n\r\n    def makeConnected(self, n, connections):\r\n        \"\"\"\r\n        :type n: int\r\n        :type connections: List[List[int]]\r\n        :rtype: int\r\n        \"\"\"\r\n        if len(connections) < n-1:\r\n            return -1\r\n        self.parents = [i for i in range(n)]\r\n        self.count = [1 for _ in range(n)]\r\n        for connection in connections:\r\n            a, b = connection[0], connection[1]\r\n            self.union(a, b)\r\n        return len({self.find(i) for i in range(n)}) - 1\r\n\r\n    def find(self, node):\r\n        \"\"\"\r\n        :type node: int\r\n        :rtype: int\r\n        \"\"\"\r\n        while(node != self.parents[node]):\r\n            node = self.parents[node];\r\n        return node\r\n\r\n    def union(self, a, b):\r\n        \"\"\"\r\n        :type a: int\r\n        :type b: int\r\n        :rtype: None\r\n        \"\"\"\r\n        a_parent, b_parent = self.find(a), self.find(b)\r\n        a_size, b_size = self.count[a_parent], self.count[b_parent]\r\n\r\n        if a_parent != b_parent:\r\n            if a_size < b_size:\r\n                self.parents[a_parent] = b_parent\r\n                self.count[b_parent] += a_size\r\n            else:\r\n                self.parents[b_parent] = a_parent\r\n                self.count[a_parent] += b_size",
    "java": "class Solution {\r\n    public int makeConnected(int n, int[][] connections) {\r\n        int m = connections.length;\r\n        if(m < n - 1) return -1;\r\n        UnionFind uf = new UnionFind(n);\r\n        \r\n        for(int[] connection: connections){\r\n            uf.union(connection[0], connection[1]);\r\n        }\r\n        return uf.getIsolated();\r\n    }\r\n}\r\nclass UnionFind{\r\n    int[] root;\r\n    int[] rank;\r\n    int isolated;\r\n    public UnionFind(int n){\r\n        root = new int[n];\r\n        rank = new int[n];\r\n        for(int i = 0; i < n; i++){\r\n            root[i] = i;\r\n            rank[i] = 1;\r\n        }\r\n        isolated = 0;\r\n    }\r\n    public int find(int x){\r\n        if(root[x] != x) root[x] = find(root[x]);\r\n        return root[x];\r\n    }\r\n    public void union(int x, int y){\r\n        int rootx = find(x);\r\n        int rooty = find(y);\r\n        if(rootx == rooty) return;\r\n        if(rank[rootx] > rank[rooty]){\r\n            root[rooty] = rootx;\r\n        }else if(rank[rootx] < rank[rooty]){\r\n            root[rootx] = rooty;\r\n        }else{\r\n            root[rootx] = rooty;\r\n            rank[rooty] += 1;\r\n        }\r\n    }\r\n    public int getIsolated(){\r\n        for(int i = 0; i < root.length; i ++){\r\n            if(root[i] == i) isolated++;\r\n        }\r\n        return isolated - 1;\r\n    }\r\n}",
    "javascript": "// Runtime: 136 ms (Top 98.52%) | Memory: 57.8 MB (Top 75.56%)\r\n/**\r\n * @param {number} n\r\n * @param {number[][]} connections\r\n * @return {number}\r\n */\r\nclass UnionFind {\r\n    constructor(n) {\r\n        this.root = new Array(n).fill().map((_, index)=>index);\r\n        this.components = n;\r\n    }\r\n    find(x) {\r\n        if(x == this.root[x]) return x;\r\n        return this.root[x] = this.find(this.root[x]);\r\n    }\r\n    union(x, y) {\r\n        const rootX = this.find(x);\r\n        const rootY = this.find(y);\r\n        if(rootX != rootY) {\r\n            this.root[rootY] = rootX;\r\n            this.components--;\r\n        }\r\n    }\r\n}\r\nvar makeConnected = function(n, connections) {\r\n    // We need at least n - 1 cables to connect all nodes (like a tree).\r\n    if(connections.length < n-1) return -1;\r\n    const uf = new UnionFind(n);\r\n    for(const [a, b] of connections) {\r\n        uf.union(a, b);\r\n    }\r\n    return uf.components - 1;\r\n};"
  }
}
