export default {
  "id": 1462,
  "name": "Course Schedule IV",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/course-schedule-iv",
  "relativeDir": "C/Course Schedule IV",
  "slug": "1462-course-schedule-iv",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 55,
    "java": 27,
    "python": 25,
    "javascript": 31
  },
  "languages": {
    "cpp": "// Runtime: 270 ms (Top 87.54%) | Memory: 69.3 MB (Top 32.97%)\r\n// question similar to find all ancestors of current node\r\n\r\nclass Solution {\r\n\r\npublic:\r\n\r\n    void dfs(vector<vector<int>>&adj,vector<set<int>>&Anc,int u,int par,vector<int>&vis)\r\n    {\r\n        if( vis[u] != 0 )\r\n            return ;\r\n\r\n        vis[u] = 1 ;\r\n\r\n        for(auto&v:adj[u])\r\n        {\r\n            if( vis[v] == 0 )\r\n            {\r\n                Anc[v].insert(par) ;\r\n                dfs(adj,Anc,v,par,vis) ;\r\n            }\r\n        }\r\n\r\n        return ;\r\n    }\r\n\r\n    vector<bool> checkIfPrerequisite(int numCourses, vector<vector<int>>& prerequisites, vector<vector<int>>& queries) {\r\n\r\n        int n = numCourses ;\r\n        vector<vector<int>>adj(n);\r\n        vector<set<int>>Anc(n);\r\n        vector<bool>ans;\r\n\r\n        for(auto&edge:prerequisites)\r\n        {\r\n            adj[edge[0]].push_back(edge[1]) ;\r\n        }\r\n\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            vector<int>vis(n,0);\r\n            dfs(adj,Anc,i,i,vis) ;\r\n        }\r\n\r\n        for(auto&EachQuery:queries)\r\n        {\r\n            if( Anc[EachQuery[1]].find(EachQuery[0]) != Anc[EachQuery[1]].end() )\r\n                ans.push_back(true);\r\n            else\r\n                ans.push_back(false) ;\r\n        }\r\n        return ans ;\r\n    }\r\n\r\n};",
    "python": "class Solution:\r\n    \"\"\"\r\n    one approach I can think of is, given a graph, \r\n    the query[a, b] will be true if there exists a path from a to b in the graph\r\n    else a will not be a prerequisite of b\r\n    but this approach may not scale as the # of queries will increase\r\n    \"\"\"\r\n    def checkIfPrerequisite(self, numCourses: int, prerequisites: List[List[int]], queries: List[List[int]]) -> List[bool]:\r\n        graph = {node: set() for node in range(numCourses)}\r\n        for pre in prerequisites:\r\n            graph[pre[0]].add(pre[1])\r\n        \r\n        def path(cur_node, node_b):\r\n            if cur_node == node_b:\r\n                return True\r\n            for neighbor in graph[cur_node]:\r\n                if path(neighbor, node_b):\r\n                    return True\r\n            return False\r\n            \r\n        ans = []\r\n        for query in queries:\r\n            # see if there is a path from query[0] to query[1]\r\n            ans.append(path(query[0], query[1]))\r\n        return ans",
    "java": "// Runtime: 1518 ms (Top 5.07%) | Memory: 118.7 MB (Top 6.29%)\r\nclass Solution {\r\n    public List<Boolean> checkIfPrerequisite(int numCourses, int[][] prerequisites, int[][] queries) {\r\n        // Generating Map\r\n        Map<Integer, List<Integer>> graph = new HashMap<>();\r\n        for(int e[]: prerequisites){\r\n            graph.putIfAbsent(e[0], new ArrayList<>());\r\n            graph.get(e[0]).add(e[1]);\r\n        }\r\n\r\n        List<Boolean> list = new ArrayList<>();\r\n        // Appling DFS for every query to get result\r\n        for(int[] q: queries){\r\n            list.add(isPre(q[0], q[1], graph, new HashSet<>()));\r\n        }\r\n        return list;\r\n    }\r\n    // Check if src comes before dst using DFS\r\n    private boolean isPre(int src, int dst, Map<Integer, List<Integer>> adj, Set<Integer> visited){\r\n        if(visited.contains(src)) return false;\r\n        visited.add(src);\r\n        for(int neigh: adj.getOrDefault(src, new ArrayList<>())){\r\n            if(neigh == dst || isPre(neigh, dst, adj, visited)) return true;\r\n        }\r\n        return false;\r\n    }\r\n}",
    "javascript": "var checkIfPrerequisite = function(numCourses, prerequisites, queries) {\r\n    let adj = {};\r\n    for (let [from, to] of prerequisites) {\r\n        if (!adj[from]) {\r\n            adj[from] = [];\r\n        }\r\n        \r\n        adj[from].push(to);\r\n    }\r\n    \r\n    let set = {};\r\n    Object.keys(adj).forEach(key => dfs(key));\r\n    return queries.map(([a,b]) => set[a]?.has(b) || false);\r\n    \r\n    function dfs(cur) {\r\n        if (set[cur]) {\r\n            return set[cur];\r\n        }\r\n        \r\n        if (!set[cur]) {\r\n            set[cur] = new Set();\r\n        }\r\n        \r\n        for (let n of (adj[cur] || [])) {\r\n            set[cur].add(n);\r\n            dfs(n);\r\n            set[n].forEach(set[cur].add, set[cur]);\r\n        }\r\n    }\r\n    \r\n};"
  }
}
