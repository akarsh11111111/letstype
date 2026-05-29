export default {
  "id": 802,
  "name": "Find Eventual Safe States",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-eventual-safe-states",
  "relativeDir": "F/Find Eventual Safe States",
  "slug": "0802-find-eventual-safe-states",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 35,
    "java": 40,
    "python": 39,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 305 ms (Top 34.88%) | Memory: 46.8 MB (Top 90.86%)\r\nclass Solution {\r\npublic:\r\n    vector<int> eventualSafeNodes(vector<vector<int>>& graph) {\r\n        int n=graph.size();\r\n        vector<bool> vis(n, false), curr_vis(n, false), safe(n, true);\r\n\r\n        for(int i=0; i<n; i++)\r\n            if(!vis[i])\r\n                dfs(i, vis, curr_vis, safe, graph);\r\n\r\n        vector<int> ans;\r\n        for(int i=0; i<n; i++)\r\n            if(safe[i])\r\n                ans.push_back(i);\r\n\r\n        return ans;\r\n    }\r\n\r\n    bool dfs(int i, vector<bool> &vis, vector<bool> &curr_vis, vector<bool> &safe, vector<vector<int>>& graph){\r\n        vis[i]=true, curr_vis[i]=true;\r\n\r\n        for(auto j : graph[i]){\r\n            if(!vis[j]){\r\n                if(dfs(j, vis, curr_vis, safe, graph)==false)\r\n                    return safe[i] = false;\r\n            }\r\n            else if(curr_vis[j])\r\n                return safe[i] = false;\r\n        }\r\n\r\n        curr_vis[i]=false;\r\n        return safe[i];\r\n    }\r\n};",
    "python": "import collections\r\n\r\nclass Solution:\r\n    def eventualSafeNodes(self, graph: list[list[int]]) -> list[int]:\r\n\r\n        n = len(graph)\r\n        ans = []\r\n        \r\n        for i in range(n):\r\n            if not graph[i]:\r\n                ans.append(i)\r\n        \r\n        def loop(key, loops):\r\n    \r\n            loops.append(key)\r\n            for i in graph[key]:\r\n                if i in loops:\r\n                    return False\r\n                elif i in ans: \r\n                    continue\r\n                else:\r\n                    r = loop(i, loops)\r\n                    if r == True: \r\n                        continue\r\n                    else: \r\n                        return False\r\n\r\n            idx = loops.index(key)\r\n            loops.pop(idx)\r\n            return True\r\n                    \r\n        for i in range(n):\r\n            loops = []\r\n            if i in ans:\r\n                continue\r\n            r = loop(i, loops)\r\n            if r == True: ans.append(i)\r\n \r\n        return sorted(ans)",
    "java": "// Runtime: 7 ms (Top 80.80%) | Memory: 65.9 MB (Top 65.16%)\r\n\r\nclass Solution {\r\n   public List<Integer> eventualSafeNodes(int[][] graph) {\r\n    int n=graph.length;\r\n    List<Integer> ans=new ArrayList<>();\r\n\r\n    boolean visited[]=new boolean[n];\r\n    boolean dfsVisited[]=new boolean[n];\r\n\r\n    boolean nodeCycles[]=new boolean[n];\r\n\r\n    for(int i=0;i<n;i++){\r\n        if(visited[i]==false){\r\n             isCycle(i,graph,dfsVisited,visited,nodeCycles);\r\n        }\r\n    }\r\n    for(int i=0;i<nodeCycles.length;i++){\r\n        if(nodeCycles[i]==false)\r\n            ans.add(i);\r\n    }\r\n    return ans;\r\n}\r\n\r\npublic boolean isCycle(int node,int graph[][],boolean dfsVisited[],boolean visited[],boolean [] nodeCycles) {\r\n    visited[node]=true;\r\n    dfsVisited[node]=true;\r\n\r\n    for(int adjNode:graph[node]){\r\n        if(visited[adjNode]==false){\r\n           if(isCycle(adjNode,graph,dfsVisited,visited,nodeCycles))\r\n                return nodeCycles[node]=true;\r\n        }else if(visited[adjNode]==true && dfsVisited[adjNode]==true){\r\n            return nodeCycles[node]=true;\r\n        }\r\n    }\r\n    dfsVisited[node]=false;\r\n    return false;\r\n}\r\n}",
    "javascript": "// Runtime: 99 ms (Top 84.75%) | Memory: 51.20 MB (Top 71.75%)\r\n\r\n/**\r\n * @param {number[][]} graph\r\n * @return {number[]}\r\n */\r\nvar eventualSafeNodes = function(graph) {\r\n    const n = graph.length;\r\n    const result = new Array(n).fill(0);\r\n\r\n    const dfs = (node) => {\r\n        if (result[node] !== 0) return result[node] === 2;\r\n        result[node] = 1;\r\n        for (let neighbor of graph[node]) {\r\n            if (result[neighbor] === 1 || !dfs(neighbor)) return false;   \r\n        }\r\n        result[node] = 2;\r\n        return true;\r\n    };\r\n    const safeNodes = [];\r\n    for (let node = 0; node < n; node++) {\r\n        if (dfs(node)) safeNodes.push(node);\r\n    \r\n    }\r\n    return safeNodes;\r\n};"
  }
}
