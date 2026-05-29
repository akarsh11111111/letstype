export default {
  "id": 2097,
  "name": "Valid Arrangement of Pairs",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/valid-arrangement-of-pairs",
  "relativeDir": "V/Valid Arrangement of Pairs",
  "slug": "2097-valid-arrangement-of-pairs",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 46,
    "java": 52,
    "python": 24,
    "javascript": 27
  },
  "languages": {
    "cpp": "// Runtime: 2105 ms (Top 22.94%) | Memory: 477.9 MB (Top 17.92%)\r\nclass Solution {\r\npublic:\r\n    vector<vector<int>> validArrangement(vector<vector<int>>& pairs) {\r\n        int m = pairs.size();\r\n        // Eulerian Path\r\n        unordered_map<int, stack<int>> adj;\r\n        unordered_map<int, int> in;\r\n        unordered_map<int, int> out;\r\n        // reserve spaces for unordered_map may help in runtime.\r\n        adj.reserve(m);\r\n        in.reserve(m);\r\n        out.reserve(m);\r\n        for (int i = 0; i < m; i++) {\r\n            int u = pairs[i][0], v = pairs[i][1];\r\n            in[v]++;\r\n            out[u]++;\r\n            adj[u].push(v);\r\n        }\r\n        // find the starting node\r\n        int start = -1;\r\n        for (auto& p : adj) {\r\n            int i = p.first;\r\n            if (out[i] - in[i] == 1) start = i;\r\n        }\r\n        if (start == -1) {\r\n            // Eulerian Circuit -> start at any node\r\n            start = adj.begin()->first;\r\n        }\r\n        vector<vector<int>> ans;\r\n        euler(adj, ans, start);\r\n        reverse(ans.begin(), ans.end());\r\n        return ans;\r\n    }\r\nprivate:\r\n    void euler(unordered_map<int, stack<int>>& adj, vector<vector<int>>& ans, int curr) {\r\n        auto& stk = adj[curr];\r\n        while (!stk.empty()) {\r\n            int nei = stk.top();\r\n            stk.pop();\r\n            euler(adj, ans, nei);\r\n            // postorder\r\n            ans.push_back({curr, nei});\r\n        }\r\n    }\r\n};",
    "python": "#Hierholzer Algorithm\r\nfrom collections import defaultdict\r\nclass Solution:\r\n    def validArrangement(self, pairs: List[List[int]]) -> List[List[int]]:\r\n        G = defaultdict(list)\r\n        din = defaultdict(int)\r\n        dout = defaultdict(int)\r\n        for v, w in pairs:\r\n            G[v].append(w)\r\n            dout[v] += 1\r\n            din[w] += 1\r\n        start = pairs[0][0]\r\n        for v in G:\r\n            if din[v]+1 == dout[v]:\r\n                start = v\r\n        route = []\r\n        def dfs(v):\r\n            while G[v]:\r\n                w = G[v].pop()\r\n                dfs(w)\r\n            route.append(v)\r\n        dfs(start)\r\n        route.reverse()\r\n        return [[route[i],route[i+1]] for i in range(len(route)-1)]",
    "java": "class Solution {\r\n    public int[][] validArrangement(int[][] pairs) {\r\n        int n = pairs.length;\r\n        \r\n        int[][] ans = new int[n][2];\r\n        for (int[] a : ans) {\r\n            a[0] = -1;\r\n            a[1] = -1;\r\n        }\r\n        \r\n        Map<Integer, Integer> outdegree = new HashMap<>();\r\n        Map<Integer, Deque<Integer>> out = new HashMap<>();\r\n        \r\n        for (int[] pair : pairs) {\r\n            outdegree.put(pair[0], outdegree.getOrDefault(pair[0], 0) + 1);\r\n            outdegree.put(pair[1], outdegree.getOrDefault(pair[1], 0) - 1);\r\n            \r\n            out.computeIfAbsent(pair[0], k -> new ArrayDeque<>());\r\n            out.computeIfAbsent(pair[1], k -> new ArrayDeque<>());\r\n            \r\n            out.get(pair[0]).addLast(pair[1]);\r\n        }\r\n        \r\n        for (Map.Entry<Integer, Integer> entry : outdegree.entrySet()) {\r\n            if (entry.getValue() == 1) ans[0][0] = entry.getKey();\r\n            if (entry.getValue() == -1) ans[n - 1][1] = entry.getKey();\r\n        }\r\n        \r\n        if (ans[0][0] == -1) {\r\n            ans[0][0] = pairs[0][0];\r\n            ans[n - 1][1] = pairs[0][0];\r\n        }\r\n        \r\n        int i = 0;\r\n        int j = n - 1;\r\n        while (i < j) {\r\n            int from = ans[i][0];\r\n            \r\n            Deque<Integer> toList = out.get(from);\r\n            \r\n            if (toList.size() == 0) {\r\n                ans[j][0] = ans[--i][0];\r\n                ans[--j][1] = ans[j + 1][0];\r\n            } else {\r\n                ans[i++][1] = toList.removeLast();\r\n                ans[i][0] = ans[i - 1][1];\r\n            }\r\n        }\r\n        \r\n        return ans;\r\n    }\r\n}",
    "javascript": "var validArrangement = function(pairs) {\r\n  let graph = {};\r\n  let degrees = {}; // outdegree: positive, indegree: negative\r\n  for (var [x, y] of pairs) {\r\n    if (!graph[x]) graph[x] = [];\r\n    graph[x].push(y);\r\n    if (degrees[x] === undefined) degrees[x] = 0;\r\n    if (degrees[y] === undefined) degrees[y] = 0;\r\n    degrees[x]++;\r\n    degrees[y]--;\r\n  }\r\n  let start = pairs[0][0];\r\n  for (var [x] of pairs) {\r\n    if (degrees[x] === 1) start = x; // one extra outdegree\r\n  }\r\n  let ans = [];\r\n  dfs(start);\r\n\r\n  function dfs(node) {\r\n    while ((graph[node] || []).length) {\r\n      let neighbor = graph[node].pop();\r\n      dfs(neighbor);\r\n      ans.push([node, neighbor]);\r\n    }\r\n  }\r\n  return ans.reverse();\r\n};"
  }
}
