export default {
  "id": 207,
  "name": "Course Schedule",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/course-schedule",
  "relativeDir": "C/Course Schedule",
  "slug": "0207-course-schedule",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 47,
    "python": 29,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool canFinish(int numCourses, vector<vector<int>>& prerequisites) {\r\n        map<int, vector<int>>adj;\r\n        vector<int> indegree(numCourses,0);\r\n        vector<int>res;\r\n        for(int i=0;i<prerequisites.size();i++){\r\n            adj[prerequisites[i][1]].push_back(prerequisites[i][0]);\r\n            indegree[prerequisites[i][0]]++;\r\n        }\r\n        queue<int> q;\r\n        for(int i=0;i<numCourses;i++){\r\n            if(indegree[i]==0)\r\n                q.push(i);\r\n        }\r\n        while(!q.empty()){\r\n            int x=q.front();\r\n            q.pop();\r\n            res.push_back(x);\r\n            for(auto u:adj[x]){\r\n                indegree[u]--;\r\n                if(indegree[u]==0){\r\n                    q.push(u);\r\n                }\r\n            }\r\n        }\r\n        return res.size()==numCourses;\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:\r\n                 \r\n        pre = {} # course: list of prerequisites\r\n        dep = {} # course: list of dependents\r\n        for p in prerequisites:\r\n            if p[0] not in pre:\r\n                pre[p[0]] = set()\r\n            if p[1] not in dep:\r\n                dep[p[1]] = set()\r\n            pre[p[0]].add(p[1])\r\n            dep[p[1]].add(p[0])\r\n\r\n        # Kahn's algorithm\r\n        l = []\r\n        s = set()\r\n        for i in range(numCourses):\r\n            if i not in dep: # if no dependents (incoming edge)\r\n                s.add(i) \r\n        while s:\r\n            n = s.pop()\r\n            l.append(n)\r\n            if n in pre: # if n has prerequisites\r\n                for m in pre[n]: # for each prerequisites m\r\n                    dep[m].remove(n) # remove n from m's dependents list\r\n                    if not dep[m]: # if m has no more dependents\r\n                        s.add(m)\r\n                        \r\n        return len(l) == numCourses",
    "java": "class Solution {\r\n    public boolean canFinish(int numCourses, int[][] prerequisites) {\r\n        int n = numCourses;\r\n        boolean [] visited = new boolean[n];\r\n        boolean [] dfsVisited = new boolean[n];\r\n        \r\n        List<List<Integer>> adj = createAdjList(n,prerequisites);\r\n        for(int i=0;i<n;i++){\r\n            if(visited[i]==false){\r\n                if(isCycle(i,adj,visited,dfsVisited)){\r\n                    return false;\r\n                }\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n    //find cycle in a directed graph\r\n    private boolean isCycle(int s,List<List<Integer>> adj,boolean [] visited,boolean[] dfsVisited){\r\n       \r\n        visited[s]=true;\r\n        dfsVisited[s]=true;\r\n            \r\n        for(int v:adj.get(s)){\r\n            if(visited[v]==false){\r\n              if(isCycle(v,adj,visited,dfsVisited)){\r\n                return true;\r\n                }  \r\n            }else if(visited[v]==true && dfsVisited[v]==true) {\r\n                return true;\r\n            }   \r\n        }\r\n        dfsVisited[s]=false;\r\n        return false;\r\n    }\r\n    \r\n    private List<List<Integer>> createAdjList(int n,int[][] prerequisites){\r\n        List<List<Integer>> adj = new ArrayList();\r\n        \r\n        for(int i=0;i<n;i++){\r\n            adj.add(new ArrayList<>());\r\n        }\r\n        for(int[] e : prerequisites){\r\n               adj.get(e[1]).add(e[0]);\r\n        }\r\n        return adj;\r\n    }\r\n}",
    "javascript": "// Runtime: 135 ms (Top 41.22%) | Memory: 46.8 MB (Top 77.04%)\r\nvar canFinish = function(numCourses, prerequisites) {\r\n    const adjList = []\r\n    const visit = []\r\n    construAdj()\r\n    for (let i = 0; i < numCourses; i++) {\r\n        if (!dfs(i)) return false\r\n    }\r\n    return true\r\n\r\n    function dfs(i) {\r\n        // base case\r\n        if (visit[i]) return false\r\n        if (visit[i] === false) return true\r\n\r\n        visit[i] = true\r\n\r\n        for (const nei of adjList[i] ?? []) {\r\n            if (!dfs(nei)) return false\r\n        }\r\n\r\n        visit[i] = false\r\n        return true\r\n    }\r\n\r\n    function construAdj() {\r\n        for (const pre of prerequisites) {\r\n            if (!adjList[pre[0]]) adjList[pre[0]] = []\r\n            adjList[pre[0]].push(pre[1])\r\n        }\r\n    }\r\n};"
  }
}
