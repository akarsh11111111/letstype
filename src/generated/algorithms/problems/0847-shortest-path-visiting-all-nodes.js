export default {
  "id": 847,
  "name": "Shortest Path Visiting All Nodes",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/shortest-path-visiting-all-nodes",
  "relativeDir": "S/Shortest Path Visiting All Nodes",
  "slug": "0847-shortest-path-visiting-all-nodes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 41,
    "java": 48,
    "python": 25,
    "javascript": 37
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int shortestPathLength(vector<vector<int>>& graph) {\r\n        int n = graph.size();\r\n        string mask = \"\";\r\n        string eq = \"\";\r\n        for(int i=0; i<n; i++){\r\n            mask += '0';\r\n            eq += '1';\r\n        }\r\n        queue<pair<int,string>>q;\r\n        set<pair<int,string>>s;\r\n        for(int i=0; i<n; i++){\r\n            string temp = mask;\r\n            temp[i] = '1';\r\n            q.push({i,temp});\r\n            s.insert({i,temp});\r\n        }\r\n        int c = 0;\r\n        int flag = 0;\r\n        while(!q.empty()){\r\n            int size = q.size();\r\n            for(int i=0; i<size; i++){\r\n                auto top = q.front();\r\n                q.pop();\r\n                if(top.second == eq) return c;\r\n                for(auto p: graph[top.first]){\r\n                    string temp1 = top.second;\r\n                    temp1[p] = '1';\r\n                    if(s.count({p,temp1}) == 0){\r\n                        q.push({p,temp1});\r\n                        s.insert({p,temp1});\r\n                    }\r\n                }\r\n            }\r\n            c++;\r\n            cout<<\"c is \"<<c;\r\n        }\r\n        return -1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def shortestPathLength(self, graph: List[List[int]]) -> int:\r\n        n = len(graph)\r\n        dist = [[inf]*n for _ in range(n)]\r\n        \r\n        for i, x in enumerate(graph): \r\n            dist[i][i] = 0\r\n            for ii in x: dist[i][ii] = 1\r\n        \r\n        # floyd-warshall \r\n        for k in range(n): \r\n            for i in range(n): \r\n                for j in range(n): \r\n                    dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j])\r\n        \r\n        @cache \r\n        def fn(x, mask): \r\n            if mask == 0: return 0 \r\n            ans = inf \r\n            for i in range(n): \r\n                if mask & (1 << i): \r\n                    ans = min(ans, dist[x][i] + fn(i, mask ^ (1<<i)))\r\n            return ans \r\n        \r\n        return min(fn(x, (1 << n)-1) for x in range(n))",
    "java": "// Runtime: 17 ms (Top 78.04%) | Memory: 46.7 MB (Top 69.44%)\r\nclass Solution {\r\n    class Pair {\r\n        int i;\r\n        int path;\r\n        public Pair(int i, int path) {\r\n            this.i = i;\r\n            this.path = path;\r\n        }\r\n    }\r\n    public int shortestPathLength(int[][] graph) {\r\n        /*\r\n        For each node currentNode, steps as key, visited as value\r\n        boolean[currentNode][steps]\r\n        */\r\n        int n = graph.length;\r\n\r\n        // 111....1, 1<< n - 1\r\n        int allVisited = (1 << n) - 1;\r\n\r\n        boolean[][] visited = new boolean[n][1 << n];\r\n        Queue<Pair> q = new LinkedList<>();\r\n        for (int i = 0; i < n; i++) {\r\n            if (1 << i == allVisited) return 0;\r\n            visited[i][1 << i] = true;\r\n            q.offer(new Pair(i, 1 << i));\r\n        }\r\n        int step = 0;\r\n        while (!q.isEmpty()) {\r\n            int size = q.size();\r\n            for (int i = 0; i < size; i++) {\r\n                Pair p = q.poll();\r\n                int[] edges = graph[p.i];\r\n\r\n                for(int t: edges) {\r\n                    int path = p.path | (1 << t);\r\n                    if (path == allVisited) return step + 1;\r\n                    if (!visited[t][path]) {\r\n                        visited[t][path] = true;\r\n                        q.offer(new Pair(t, path));\r\n                    }\r\n                }\r\n            }\r\n            step++;\r\n        }\r\n        return step;\r\n    }\r\n}",
    "javascript": "// Runtime: 92 ms (Top 67.21%) | Memory: 50.60 MB (Top 77.05%)\r\n\r\n/**\r\n * @param {number[][]} graph\r\n * @return {number}\r\n */\r\nvar shortestPathLength = function(graph) {\r\n    const n = graph.length;\r\n    const allVisited = (1 << n) - 1;\r\n    const queue = [];\r\n    const visited = new Set();\r\n\r\n    for (let i = 0; i < n; i++) {\r\n        queue.push([1 << i, i, 0]);\r\n        visited.add((1 << i) * 16 + i);\r\n    }\r\n\r\n    while (queue.length > 0) {\r\n        const [mask, node, dist] = queue.shift();\r\n\r\n        if (mask === allVisited) {\r\n            return dist;\r\n        }\r\n\r\n        for (const neighbor of graph[node]) {\r\n            const newMask = mask | (1 << neighbor);\r\n            const hashValue = newMask * 16 + neighbor;\r\n\r\n            if (!visited.has(hashValue)) {\r\n                visited.add(hashValue);\r\n                queue.push([newMask, neighbor, dist + 1]);\r\n            }\r\n        }\r\n    }\r\n\r\n    return -1;\r\n}"
  }
}
