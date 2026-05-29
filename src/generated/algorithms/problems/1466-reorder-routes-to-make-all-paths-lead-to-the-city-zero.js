export default {
  "id": 1466,
  "name": "Reorder Routes to Make All Paths Lead to the City Zero",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero",
  "relativeDir": "R/Reorder Routes to Make All Paths Lead to the City Zero",
  "slug": "1466-reorder-routes-to-make-all-paths-lead-to-the-city-zero",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 22,
    "python": 23,
    "javascript": 54
  },
  "languages": {
    "cpp": "// Runtime: 945 ms (Top 20.47%) | Memory: 96.9 MB (Top 96.62%)\r\nclass Solution {\r\npublic:\r\n    vector<int> Radj[50001],adj[50001] ,visited;\r\n    int bfs(){\r\n        int edges = 0 ;\r\n        queue<int> q ;\r\n        q.push(0) ;\r\n\r\n        while(q.size()){\r\n            auto src = q.front() ; q.pop() ;\r\n            visited[src] = 1 ;\r\n\r\n            for(auto &nbr : adj[src]){\r\n                if(visited[nbr]) continue ;\r\n                //this connection needs reverse orientation\r\n                ++edges ;\r\n                q.push(nbr) ;\r\n            }\r\n\r\n            for(auto &nbr : Radj[src]){\r\n                if(visited[nbr]) continue ;\r\n                q.push(nbr) ;\r\n            }\r\n        }\r\n\r\n        return edges ;\r\n    }\r\n    int minReorder(int n, vector<vector<int>>& connections) {\r\n        visited.resize(n,0);\r\n        for(auto &x : connections) adj[x[0]].push_back(x[1]) , Radj[x[1]].push_back(x[0]);\r\n        return bfs() ;\r\n    }\r\n};",
    "python": "from collections import defaultdict\r\nclass Solution:\r\n    def minReorder(self, n: int, connections: List[List[int]]) -> int:\r\n        count, stack, visited = 0, [ 0 ], set() #Add root node to stack\r\n        neighbours = defaultdict(list) #To store neighbours\r\n\t\tadjacency = defaultdict(list) #To store adjacency\r\n        for i, j in connections:\r\n            adjacency[i].append(j)\r\n            neighbours[i].append(j)\r\n            neighbours[j].append(i)\r\n        while stack:\r\n            current = stack.pop()\r\n            if current in visited:\r\n                continue\r\n            else:\r\n                visited.add(current)\r\n            for i in neighbours[current]:\r\n                if i in visited:\r\n                    continue\r\n                if current not in adjacency[i]:\r\n                    count += 1\r\n                stack.append(i)\r\n        return count",
    "java": "// Runtime: 42 ms (Top 76.3%) | Memory: 72.93 MB (Top 48.8%)\r\n\r\nclass Solution {\r\n    int dfs(List<List<Integer>> al, boolean[] visited, int from) {\r\n        int change = 0;\r\n        visited[from] = true;\r\n        for (var to : al.get(from))\r\n            if (!visited[Math.abs(to)])\r\n                change += dfs(al, visited, Math.abs(to)) + (to > 0 ? 1 : 0);\r\n        return change;   \r\n    }\r\n    public int minReorder(int n, int[][] connections) {\r\n        List<List<Integer>> al = new ArrayList<>();\r\n        for(int i = 0; i < n; ++i) \r\n            al.add(new ArrayList<>());\r\n        for (var c : connections) {\r\n            al.get(c[0]).add(c[1]);\r\n            al.get(c[1]).add(-c[0]);\r\n        }\r\n        return dfs(al, new boolean[n], 0);\r\n    }\r\n}",
    "javascript": "// Runtime: 267 ms (Top 86.1%) | Memory: 107.22 MB (Top 89.0%)\r\n\r\nvar minReorder = function(n, connections) {\r\n    // from: (<from city>, [<to cities>])\r\n    // to: (<to city>, [<from cities>])\r\n    const from = new Map(), to = new Map();\r\n\r\n    // Function to insert in values in map\r\n    const insert = (map, key, value) => {\r\n        if(map.has(key)){\r\n            const arr = map.get(key);\r\n            arr.push(value);\r\n            map.set(key, arr);\r\n        } else {\r\n            map.set(key, [value]);\r\n        }\r\n    }\r\n\r\n    // Set all values in both maps\r\n    for(const [a,b] of connections){\r\n        insert(from, a, b);\r\n        insert(to, b, a);\r\n    }\r\n\r\n    // Queue: cities to visit\r\n    const queue = [0], visited = new Set();\r\n    let count = 0;\r\n\r\n    while(queue.length) {\r\n        const cur = queue.shift(); // First element in queue\r\n\r\n        // Check values in first map\r\n        if(from.has(cur)){\r\n            for(const x of from.get(cur)){\r\n                // If visited, do nothing else add to queue\r\n                if(visited.has(x)) continue;\r\n                queue.push(x);\r\n                count++; // Change direction of this path\r\n            }\r\n        }\r\n\r\n        if(to.has(cur)){\r\n            // If visited, do nothing else add to queue\r\n            for(const x of to.get(cur)){\r\n                if(visited.has(x)) continue;\r\n                queue.push(x);\r\n            }\r\n        }\r\n\r\n        visited.add(cur); // Mark city as visited\r\n    }\r\n\r\n    return count\r\n};"
  }
}
