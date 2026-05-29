export default {
  "id": 785,
  "name": "Is Graph Bipartite?",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/is-graph-bipartite",
  "relativeDir": "I/Is Graph Bipartite",
  "slug": "0785-is-graph-bipartite",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 29,
    "python": 24,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n\tbool isBipartite(int node, vector<int>&color, vector<vector<int>>& graph)\r\n\t{\r\n\t\tif(color[node]==-1)    color[node] = 1;\r\n\t\tfor(auto it:graph[node])\r\n\t\t{\r\n\t\t\tif(color[it]==-1)\r\n\t\t\t{\r\n\t\t\t\tcolor[it] = !color[node];\r\n\t\t\t\tif(!isBipartite(it,color,graph))    \r\n\t\t\t\t\treturn false;\r\n\t\t\t}\r\n\t\t\telse if(color[it]==color[node])    \r\n\t\t\t\treturn false;\r\n\t\t}\r\n\t\treturn true;\r\n\t}\r\n\tbool isBipartite(vector<vector<int>>& graph) {\r\n\t\tint n = graph.size();\r\n\t\tvector<int> color(n,-1);\r\n\t\tfor(int i=0;i<n;i++)\r\n\t\t\tif(color[i] == -1)\r\n\t\t\t\tif(!isBipartite(i,color,graph))     \r\n\t\t\t\t\treturn false;\r\n\t\treturn true;\r\n\t}\r\n};",
    "python": "class Solution:\r\n    def isBipartite(self, graph: List[List[int]]) -> bool:\r\n        v = len(graph)\r\n        color = [-1]*v\r\n        color[0] = 1\r\n        def helper(src, q):\r\n            q.append(src)\r\n            \r\n            while q:\r\n                node = q.pop(0)\r\n                \r\n                for j in graph[node]:\r\n                    if color[j] == -1:\r\n                        color[j] = 1 - color[node]\r\n                        q.append(j)\r\n                    elif color[node] == color[j]:\r\n                        return False\r\n            return True\r\n            \r\n        for i in range(v):\r\n            if not helper(i, []):\r\n                return False\r\n        return True\r\n\t```",
    "java": "class Solution{\r\n    public boolean isBipartite(int[][] graph) {\r\n        int n = graph.length;\r\n        int[] colors = new int[n];\r\n\r\n        //take two colors and color adjacent neighbours differently, if any of the neighbour is already colored and is not a different color, but same color, then return false else true.\r\n        for (int i = 0; i < n; i++) {\r\n            if (colors[i] == 0) { //if not yet coloured.\r\n                Queue<Integer> q = new LinkedList<>();\r\n                q.add(i);\r\n                colors[i] = 1; //color it with blue\r\n\r\n                while (!q.isEmpty()) {\r\n                    int cur = q.poll(); //start polling the current node\r\n\r\n                    for (int x : graph[cur]) {\r\n                        if (colors[x] == 0) { //if not yet colored\r\n                            colors[x] = -colors[cur]; // Use a different color for the adjacent node\r\n                            q.offer(x);\r\n                        } else if (colors[x] != -colors[cur])//if the adjacent node/neighbour is already coloured and not a different colour, we return false, as no two adjacent vertices must have same colors.\r\n                            return false;\r\n                    }\r\n                }\r\n\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "var isBipartite = function(graph) {\r\n    const colors = new Map();\r\n    const stack = [];\r\n    \r\n    for (let i = 0; i < graph.length; i++) {\r\n        if (colors.has(i)) continue;\r\n        \r\n        colors.set(i, true);\r\n        stack.push(i);\r\n\r\n        while (stack.length > 0) {\r\n            let current = stack.pop();\r\n\r\n            for (let neighbour of graph[current]) {\r\n                if (!colors.has(neighbour)) {\r\n                    colors.set(neighbour, !colors.get(current));\r\n                    stack.push(neighbour);\r\n                    continue;\r\n                }\r\n                \r\n                if (colors.get(neighbour) === colors.get(current)) return false;\r\n            }\r\n        }\r\n    }\r\n    \r\n    return true\r\n};"
  }
}
