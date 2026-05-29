export default {
  "id": 1519,
  "name": "Number of Nodes in the Sub-Tree With the Same Label",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/number-of-nodes-in-the-sub-tree-with-the-same-label",
  "relativeDir": "N/Number of Nodes in the Sub-Tree With the Same Label",
  "slug": "1519-number-of-nodes-in-the-sub-tree-with-the-same-label",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 45,
    "java": 34,
    "python": 27,
    "javascript": 40
  },
  "languages": {
    "cpp": "class Solution {\r\n    vector<int> ans;\r\n    vector<vector<int>> graph;\r\n    string global;\r\npublic:\r\n    \r\n    \r\n    vector<int> getAns(int u, int parent){\r\n        ans[u] = 1;\r\n        char rootChar = global[u];\r\n        vector<int> toReturn = {0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0};\r\n        \r\n        for(int adj : graph[u]){\r\n            if(adj != parent){\r\n                vector<int> c = getAns(adj, u);\r\n                for(int i = 0 ; i < 26 ; i++){\r\n                    toReturn[i] += c[i];\r\n                } \r\n                ans[u] += c[rootChar-'a'];\r\n            }\r\n            \r\n        }\r\n        toReturn[rootChar-'a'] += 1;\r\n        return toReturn;\r\n    }\r\n    \r\n    vector<int> countSubTrees(int n, vector<vector<int>>& edges, string labels) {\r\n        ans.resize(n);\r\n        graph.resize(n);\r\n        global = labels;\r\n        \r\n        \r\n        \r\n        for(vector<int> edge : edges){\r\n            graph[edge[0]].push_back(edge[1]);\r\n            graph[edge[1]].push_back(edge[0]);\r\n        }\r\n        \r\n        int root = 0;\r\n        int parent =  -1;  \r\n        getAns(root, parent);\r\n        return ans;\r\n \r\n    }\r\n};",
    "python": "class Solution:\r\n    \"\"\"\r\n    we can solve this using dfs based approach\r\n    identify the root of the tree and start a dfs from there \r\n    \"\"\"\r\n    def countSubTrees(self, n: int, edges: List[List[int]], labels: str) -> List[int]:\r\n        graph_map = {i: set() for i in range(n)}\r\n        for edge in edges:\r\n            graph_map[edge[0]].add(edge[1])\r\n            graph_map[edge[1]].add(edge[0])\r\n            \r\n        result = [None for _ in range(n)]\r\n        \r\n        visited = set()\r\n        def dfs(index):\r\n            visited.add(index)\r\n            temp = [0 for _ in range(26)]\r\n            temp[ord(labels[index])-97]+=1\r\n            for idx in graph_map[index]:\r\n                if idx not in visited:\r\n                    x = dfs(idx)\r\n                    temp = [a + b for a, b in zip(temp, x)]\r\n            result[index] = temp[ord(labels[index])-97]\r\n            return temp\r\n        \r\n        dfs(0)\r\n        return result",
    "java": "class Solution {\r\n  int[] res;\r\n\r\n  public int[] countSubTrees(int n, int[][] edges, String labels) {\r\n    res = new int[n];\r\n    Map<Integer, List<Integer>> adjList = new HashMap<>();\r\n    for (int i = 0; i < n; i++) {\r\n      adjList.put(i, new ArrayList<>());\r\n    }\r\n    for (int[] edge : edges) {\r\n      adjList.get(edge[0]).add(edge[1]);\r\n      adjList.get(edge[1]).add(edge[0]);\r\n    }\r\n    postOrderDfs(adjList, labels, 0, -1);\r\n    return res;\r\n  }\r\n\r\n  int[] postOrderDfs(Map<Integer, List<Integer>> adjList, String labels, int n, int parent) {\r\n    int[] chars = new int[26];\r\n    chars[labels.charAt(n) - 'a']++;\r\n    for (int next : adjList.get(n)) {\r\n      if (next != parent) mergeArrCounts(chars, postOrderDfs(adjList, labels, next, n));\r\n    }\r\n    res[n] = chars[labels.charAt(n) - 'a'];\r\n    return chars;\r\n  }\r\n\r\n  // Merge from B to A\r\n  void mergeArrCounts(int[] A, int[] B) {\r\n    for (int i = 0; i < 26; i++) {\r\n      A[i] += B[i];\r\n    }\r\n  }\r\n}",
    "javascript": "// Runtime: 656 ms (Top 100.00%) | Memory: 181.4 MB (Top 60.00%)\r\nvar countSubTrees = function(n, edges, labels) {\r\n    const adj = [];\r\n\r\n    for (let i = 0; i < n; i++) {\r\n        adj[i] = [];\r\n    }\r\n\r\n    for (const [u, v] of edges) {\r\n        adj[u].push(v);\r\n        adj[v].push(u);\r\n    }\r\n\r\n    const resCount = new Array(n).fill(0);\r\n\r\n    dfs(0, -1);\r\n\r\n    return resCount;\r\n\r\n    function dfs(node, parent) {\r\n        const label = labels.charCodeAt(node) - 97;\r\n\r\n        const charCount = new Array(26).fill(0);\r\n\r\n        charCount[label] = 1;\r\n\r\n        for (const childNode of adj[node]) {\r\n            if (childNode == parent) continue;\r\n\r\n            const subCount = dfs(childNode, node);\r\n\r\n            for (let i = 0; i < 26; i++) {\r\n                charCount[i] += subCount[i];\r\n            }\r\n        }\r\n\r\n        resCount[node] = charCount[label];\r\n        return charCount;\r\n    }\r\n}"
  }
}
