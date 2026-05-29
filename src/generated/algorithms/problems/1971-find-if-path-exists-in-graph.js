export default {
  "id": 1971,
  "name": "Find if Path Exists in Graph",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-if-path-exists-in-graph",
  "relativeDir": "F/Find if Path Exists in Graph",
  "slug": "1971-find-if-path-exists-in-graph",
  "availableLanguages": [
    "cpp",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "python": 34
  },
  "languages": {
    "cpp": "// Runtime: 1891 ms (Top 5.09%) | Memory: 280.7 MB (Top 5.05%)\r\nclass Solution {\r\nprivate:\r\n    unordered_map<int, vector<int>> adj;\r\n    unordered_map<int, bool> visited;\r\n\r\n    bool dfs(int node, int destination){\r\n        visited[node] = true;\r\n        for(auto neighbour:adj[node]){\r\n            if(!visited[neighbour]){\r\n                if(neighbour == destination)\r\n                    return true;\r\n                if(dfs(neighbour, destination))\r\n                    return true;\r\n            }\r\n        }\r\n        return false;\r\n    }\r\npublic:\r\n    bool validPath(int n, vector<vector<int>>& edges, int source, int destination) {\r\n        if(source == destination)\r\n            return true;\r\n\r\n        for(auto edge:edges){\r\n            adj[edge[0]].push_back(edge[1]);\r\n            adj[edge[1]].push_back(edge[0]);\r\n        }\r\n        return dfs(source, destination);\r\n    }\r\n};",
    "python": "# Runtime: 1647 ms (Top 68.5%) | Memory: 108.91 MB (Top 50.2%)\r\n\r\nclass Solution(object):\r\n    def validPath(self, n, edges, start, end):\r\n        \"\"\"\r\n        :type n: int\r\n        :type edges: List[List[int]]\r\n        :type start: int\r\n        :type end: int\r\n        :rtype: bool\r\n        \"\"\"\r\n        visited = [False]*n\r\n        d = {}\r\n\t\t#store the undirected edges for both vertices\r\n        for i in edges:\r\n            if i[0] in d:\r\n                d[i[0]].append(i[1])\r\n            else:\r\n                d[i[0]] = [i[1]]\r\n                \r\n            if i[1] in d:\r\n                d[i[1]].append(i[0])\r\n            else:\r\n                d[i[1]] = [i[0]]\r\n        #create a queue as we will apply BFS\r\n        q = [start]\r\n        while q:\r\n            curr = q.pop(0)  #pop the first element as we do in queue\r\n            if curr == end:  #if its the end then we can return True\r\n                return True\r\n            elif curr in d and not visited[curr]: #else if it is not the end then check whether its visited or not\r\n                q.extend(d[curr])  #add the adjacent vertices of the current node to the queue\r\n            visited[curr] = True  #mark this curr vertex as visited = True, so that we dont visit this vertex again\r\n        return False  #return False if the queue gets empty and we dont reach the end"
  }
}
