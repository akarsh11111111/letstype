export default {
  "id": 1761,
  "name": "Minimum Degree of a Connected Trio in a Graph",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph",
  "relativeDir": "M/Minimum Degree of a Connected Trio in a Graph",
  "slug": "1761-minimum-degree-of-a-connected-trio-in-a-graph",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 32,
    "python": 20,
    "javascript": 29
  },
  "languages": {
    "cpp": "// Runtime: 1614 ms (Top 22.77%) | Memory: 55.6 MB (Top 5.09%)\r\nclass Solution {\r\npublic:\r\n    int minTrioDegree(int n, vector<vector<int>>& edges) {\r\n        vector<unordered_set<int>> adj(n+1);\r\n        int res = INT_MAX;\r\n        for (vector<int>& edge : edges) {\r\n            adj[edge[0]].insert(edge[1]);\r\n            adj[edge[1]].insert(edge[0]);\r\n        }\r\n\r\n        for (int i = 1; i < n; ++i) {\r\n            for (auto iter1 = adj[i].begin(); iter1 != adj[i].end(); ++iter1) {\r\n                if (*iter1 <= i) continue;\r\n                for (auto iter2 = adj[i].begin(); iter2 != adj[i].end(); ++iter2) {\r\n                    int u = *iter1, v = *iter2;\r\n                    if (v <= u) continue;\r\n                    if (adj[u].count(v)) {\r\n                        int cur = adj[i].size() + adj[u].size() + adj[v].size() - 6;\r\n                        res = min(res, cur);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        return res == INT_MAX ? -1 : res;\r\n    }\r\n};",
    "python": "// Runtime: 4822 ms (Top 24.41%) | Memory: 38.50 MB (Top 62.2%)\r\n\r\nclass Solution:\r\n    def minTrioDegree(self, n: int, edges: List[List[int]]) -> int:\r\n        graph = [[False]*n for _ in range(n)]\r\n        degree = [0]*n\r\n        \r\n        for u, v in edges: \r\n            graph[u-1][v-1] = graph[v-1][u-1] = True\r\n            degree[u-1] += 1\r\n            degree[v-1] += 1\r\n        \r\n        ans = inf\r\n        for i in range(n): \r\n            for j in range(i+1, n):\r\n                if graph[i][j]: \r\n                    for k in range(j+1, n):\r\n                        if graph[j][k] and graph[k][i]: \r\n                            ans = min(ans, degree[i] + degree[j] + degree[k] - 6)\r\n        return ans if ans < inf else -1",
    "java": "class Solution {\r\npublic int minTrioDegree(int n, int[][] edges) {\r\n\t// to store edge information\r\n    boolean[][] graph = new boolean[n+1][n+1];\r\n\t//to store inDegrees to a node(NOTE: here inDegree and outDegree are same because it is Undirected graph)\r\n    int[] inDegree = new int[n+1];\r\n    \r\n    for(int[] edge : edges) {\r\n        graph[edge[0]][edge[1]] = true;\r\n        graph[edge[1]][edge[0]] = true;\r\n        \r\n        inDegree[edge[0]]++;\r\n        inDegree[edge[1]]++;\r\n    }\r\n    \r\n    int result = Integer.MAX_VALUE;\r\n    for(int i=1; i<=n; i++) {\r\n        for(int j=i+1; j<=n; j++) {\r\n            if(graph[i][j]) {\r\n                for(int k=j+1; k<=n; k++) {\r\n                    if(graph[i][k] && graph[j][k]) {\r\n                        result = Math.min(result, inDegree[i] + inDegree[j] + inDegree[k] - 6);\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n    \r\n    \r\n    return result == Integer.MAX_VALUE ? -1 : result;\r\n}\r\n}",
    "javascript": "// Runtime: 1504 ms (Top 45.95%) | Memory: 65.2 MB (Top 54.05%)\r\nvar minTrioDegree = function(n, edges) {\r\n    // create an adjacency list of all the edges;\r\n    const adjacencyList = new Array(n + 1).fill(0).map(() => new Set());\r\n    for (const [x, y] of edges) {\r\n        adjacencyList[x].add(y);\r\n        adjacencyList[y].add(x);\r\n    }\r\n\r\n    let minimumDegree = Infinity;\r\n\r\n    // Find all the combinations of 3 vertices that connect\r\n    // and if they connect calculate the degree\r\n    for (let i = 1; i <= n; i++) {\r\n        for (let j = i + 1; j <= n; j++) {\r\n            for (let k = j + 1; k <= n; k++) {\r\n                if (adjacencyList[i].has(j) && adjacencyList[i].has(k) && adjacencyList[j].has(k)) {\r\n                    // We minus 6 because we have 3 vertices and each vertices has 2 edges\r\n                    // going out to the 3 connecting nodes\r\n                    const degree = adjacencyList[i].size + adjacencyList[j].size + adjacencyList[k].size - 6;\r\n                    minimumDegree =\r\n                        Math.min(minimumDegree, degree);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    return minimumDegree === Infinity ? -1 : minimumDegree;\r\n};"
  }
}
