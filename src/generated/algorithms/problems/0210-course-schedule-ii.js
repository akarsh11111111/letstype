export default {
  "id": 210,
  "name": "Course Schedule II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/course-schedule-ii",
  "relativeDir": "C/Course Schedule II",
  "slug": "0210-course-schedule-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 41,
    "python": 28,
    "javascript": 60
  },
  "languages": {
    "cpp": "// Runtime: 39 ms (Top 48.99%) | Memory: 14.4 MB (Top 36.44%)\r\nclass Solution {\r\npublic:\r\n    vector<int> findOrder(int numCourses, vector<vector<int>>& prerequisites) {\r\n        map<int, vector<int>>adj;\r\n        vector<int> indegree(numCourses,0);\r\n        vector<int>res;\r\n        for(int i=0;i<prerequisites.size();i++){\r\n            adj[prerequisites[i][1]].push_back(prerequisites[i][0]);\r\n            indegree[prerequisites[i][0]]++;\r\n        }\r\n        queue<int> q;\r\n        for(int i=0;i<numCourses;i++){\r\n            if(indegree[i]==0)\r\n                q.push(i);\r\n        }\r\n        while(!q.empty()){\r\n            int x=q.front();\r\n            q.pop();\r\n            res.push_back(x);\r\n            for(auto u:adj[x]){\r\n                indegree[u]--;\r\n                if(indegree[u]==0){\r\n                    q.push(u);\r\n                }\r\n            }\r\n        }\r\n        if(res.size()==numCourses)\r\n            return res;\r\n        return {};\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:\r\n        d = {i:[] for i in range(numCourses)}\r\n        \r\n        for crs, prereq in prerequisites:\r\n            d[crs].append(prereq)\r\n         \r\n        visit, cycle = set(), set()\r\n        output = []\r\n        def dfs(crs):\r\n            if crs in cycle:\r\n                return False\r\n            if crs in visit:\r\n                return True\r\n            \r\n            cycle.add(crs)\r\n            for nei in d[crs]:\r\n                if not dfs(nei):\r\n                    return False\r\n            cycle.remove(crs)\r\n            visit.add(crs)\r\n            output.append(crs)\r\n            return True\r\n        \r\n        for crs in range(numCourses):\r\n            if not dfs(crs):\r\n                return []\r\n        return output",
    "java": "class Solution {\r\n    public int[] findOrder(int numCourses, int[][] prerequisites) {\r\n        Map<Integer, Set<Integer>> graph = new HashMap<>();\r\n        int[] inDegree = new int[numCourses];\r\n        for (int i = 0; i < numCourses; i++) {\r\n            graph.put(i, new HashSet<Integer>());\r\n        }\r\n        \r\n        for (int[] pair : prerequisites) {\r\n            graph.get(pair[1]).add(pair[0]);\r\n            inDegree[pair[0]]++;\r\n        }\r\n        \r\n        // BFS - Kahn's Algorithm - Topological Sort\r\n        Queue<Integer> bfsContainer = new LinkedList<>();\r\n        for (int i = 0; i < numCourses; i++) {\r\n            if (inDegree[i] == 0) {\r\n                bfsContainer.add(i);    \r\n            }\r\n        }\r\n        \r\n        int count = 0;\r\n        int[] ans = new int[numCourses];\r\n        while (!bfsContainer.isEmpty()) {\r\n            int curr = bfsContainer.poll();\r\n            ans[count++] = curr;\r\n            for (Integer num : graph.get(curr)) {\r\n                inDegree[num]--;\r\n                if (inDegree[num] == 0) {\r\n                    bfsContainer.add(num);\r\n                }\r\n            }\r\n        }\r\n        \r\n        if (count < numCourses) {\r\n            return new int[] {};\r\n        } else {\r\n            return ans;\r\n        }\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} numCourses\r\n * @param {number[][]} prerequisites\r\n * @return {number[]}\r\n */\r\nvar findOrder = function(numCourses, prerequisites) {\r\n    let visiting = new Set();\r\n    const visited = new Set();\r\n    const adjList = new Map();\r\n    const result = [];\r\n    \r\n\t// Generate scaffold of adjacency list\r\n\t// initialized with no prereqs\r\n    for (let i = 0; i < numCourses; i++) {\r\n        adjList.set(i, []);\r\n    }\r\n    \r\n\t// Fill adjacency list with course prereqs\r\n\t// Key is the course\r\n\t// Value is any course prereqs\r\n    for (const item of prerequisites) {\r\n        const [course, prereq] = item;\r\n        adjList.get(course).push(prereq);\r\n    }\r\n    \r\n    const dfs = (node) => {\r\n\t    // We've already traversed down this path before\r\n\t\t// and determined that it isn't cyclical\r\n        if (visited.has(node)) return true;\r\n\t\t\r\n\t\t// Visiting keeps track of what we've seen\r\n\t\t// during this current traversal and determines\r\n\t\t// if we have a cycle.\r\n        if (visiting.has(node)) return false;\r\n  \r\n\t\t// Mark this node as part of the current traversal\r\n        visiting.add(node);\r\n        \r\n\t\t// Get all adjacent nodes to traverse\r\n\t\t// traverse them in a loop looking for cycles\r\n        const children = adjList.get(node);\r\n        for (const child of children) {\r\n            if (!dfs(child)) return false;\r\n        }\r\n\t\t\r\n\t\t// Ensures we don't re-traverse already traversed nodes since\r\n\t\t// we've already determined they contain no cycles.\r\n        visited.add(node);\r\n\t\t\r\n\t\t// Add this node to the result stack to return at the end\r\n        result.push(node);\r\n        return true;\r\n    }\r\n    \r\n    for (const node of adjList.keys()) {\r\n        if(!dfs(node)) return [];\r\n    }\r\n    \r\n    return result;\r\n};"
  }
}
