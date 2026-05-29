export default {
  "id": 1483,
  "name": "Kth Ancestor of a Tree Node",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/kth-ancestor-of-a-tree-node",
  "relativeDir": "K/Kth Ancestor of a Tree Node",
  "slug": "1483-kth-ancestor-of-a-tree-node",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 47,
    "python": 40,
    "javascript": 56
  },
  "languages": {
    "cpp": "// Runtime: 867 ms (Top 5.20%) | Memory: 119.6 MB (Top 40.27%)\r\nclass TreeAncestor {\r\npublic:\r\n    //go up by only powers of two\r\n    vector<vector<int>> lift ;\r\n    TreeAncestor(int n, vector<int>& parent) {\r\n        lift.resize(n,vector<int>(21,-1)) ;\r\n        //every node's first ancestor is parent itself\r\n        for(int i = 0 ; i < n ; ++i ) lift[i][0] = parent[i] ;\r\n\r\n        for(int i = 0 ; i < n ; ++i ){\r\n            for(int j = 1 ; j <= 20 ; ++j ){\r\n                if(lift[i][j-1] == -1) continue ;\r\n                lift[i][j] = lift[lift[i][j-1]][j-1] ;\r\n            }\r\n        }\r\n    }\r\n\r\n    int getKthAncestor(int node, int k) {\r\n\r\n        for(int i = 0 ; i <= 20 ; ++i ){\r\n            if(k & (1 << i)){\r\n                node = lift[node][i] ;\r\n                if(node == -1) break;\r\n            }\r\n        }\r\n        return node ;\r\n    }\r\n};",
    "python": "# Runtime: 2359 ms (Top 39.76%) | Memory: 44.3 MB (Top 93.27%)\r\nfrom math import ceil, log2\r\nfrom typing import List\r\n\r\nNO_PARENT = -1\r\n\r\nclass TreeAncestor:\r\n    def __init__(self, n: int, parent: List[int]):\r\n        self.parent = [[NO_PARENT] * n for _ in range(ceil(log2(n + 1)))]\r\n        self.__initialize(parent)\r\n\r\n    def __initialize(self, parent: List[int]):\r\n        self.parent[0], prev = parent, parent\r\n\r\n        for jump_pow in range(1, len(self.parent)):\r\n            cur = self.parent[jump_pow]\r\n\r\n            for i, p in enumerate(prev):\r\n                if p != NO_PARENT:\r\n                    cur[i] = prev[p]\r\n\r\n            prev = cur\r\n\r\n    def getKthAncestor(self, node: int, k: int) -> int:\r\n        jump_pow = self.jump_pow\r\n\r\n        while k > 0 and node != NO_PARENT:\r\n            jumps = 1 << jump_pow\r\n\r\n            if k >= jumps:\r\n                node = self.parent[jump_pow][node]\r\n                k -= jumps\r\n            else:\r\n                jump_pow -= 1\r\n\r\n        return node\r\n\r\n    @property\r\n    def jump_pow(self) -> int:\r\n        return len(self.parent) - 1",
    "java": "// Runtime: 96 ms (Top 79.04%) | Memory: 112.4 MB (Top 41.18%)\r\nclass TreeAncestor {\r\n    int n;\r\n    int[] parent;\r\n    List<Integer>[] nodeInPath;\r\n    int[] nodeIdxInPath;\r\n\r\n    public TreeAncestor(int n, int[] parent) {\r\n        this.n = n;\r\n        this.parent = parent;\r\n        nodeInPath = new ArrayList[n];\r\n        nodeIdxInPath = new int[n];\r\n        fill();\r\n    }\r\n\r\n    private void fill() {\r\n        boolean[] inner = new boolean[n];\r\n        for (int i = 1; i < n; i++) {\r\n            inner[parent[i]] = true;\r\n        }\r\n\r\n        for (int i = 1; i < n; i++) {\r\n            if (inner[i] || nodeInPath[i] != null) {\r\n                continue;\r\n            }\r\n            List<Integer> path = new ArrayList<>();\r\n            int k = i;\r\n            while (k != -1) {\r\n                path.add(k);\r\n                k = parent[k];\r\n            }\r\n            int m = path.size();\r\n            for (int j = 0; j < m; j++) {\r\n                int node = path.get(j);\r\n                if (nodeInPath[node] != null) break;\r\n                nodeInPath[node] = path;\r\n                nodeIdxInPath[node] = j;\r\n            }\r\n        }\r\n    }\r\n\r\n    public int getKthAncestor(int node, int k) {\r\n        List<Integer> path = nodeInPath[node];\r\n        int idx = nodeIdxInPath[node] + k;\r\n        return idx >= path.size() ? -1 : path.get(idx);\r\n    }\r\n}",
    "javascript": "// Runtime: 354 ms (Top 80.0%) | Memory: 113.40 MB (Top 40.0%)\r\n\r\n/**\r\n * @param {number} n\r\n * @param {number[]} parent\r\n */\r\n\r\n\r\nlet par;\r\nvar TreeAncestor = function(n, parent) {\r\n  let p = new Array(n);\r\n    for(let i=0;i<n;i++){\r\n           p[i] = new Array(20);\r\n       }\r\n    \r\n        for(let i=0;i<n;i++){\r\n            p[i][0] = parent[i];\r\n        }\r\n    \r\n    for(let j=1;j<20;j++){\r\n        for(let i=0;i<n;i++){\r\n            if(p[i][j-1]==-1){\r\n                p[i][j]= -1;\r\n            }\r\n            else{\r\n                p[i][j] = p[p[i][j-1]][j-1];\r\n            }\r\n        \r\n        }\r\n    }\r\n    par = p;\r\n}\r\n/** \r\n * @param {number} node \r\n * @param {number} k\r\n * @return {number}\r\n */\r\nTreeAncestor.prototype.getKthAncestor = function(node, k) {\r\n    \r\n        for(let i=0;i<20;i++){\r\n            if((k>>i)&1){\r\n                node = par[node][i];\r\n                if(node==-1){\r\n                    return -1;\r\n                }\r\n            }\r\n        }\r\n    return node;\r\n    \r\n};\r\n\r\n/** \r\n * Your TreeAncestor object will be instantiated and called as such:\r\n * var obj = new TreeAncestor(n, parent)\r\n * var param_1 = obj.getKthAncestor(node,k)\r\n */"
  }
}
