export default {
  "id": 1697,
  "name": "Checking Existence of Edge Length Limited Paths",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths",
  "relativeDir": "C/Checking Existence of Edge Length Limited Paths",
  "slug": "1697-checking-existence-of-edge-length-limited-paths",
  "availableLanguages": [
    "cpp",
    "java"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 53,
    "java": 54
  },
  "languages": {
    "cpp": "// Runtime: 390 ms (Top 98.27%) | Memory: 111.20 MB (Top 59.25%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<bool> distanceLimitedPathsExist(int length, vector<vector<int>>& adjList, vector<vector<int>>& queries) {\r\n        vector<int> parent(length);\r\n        vector<int> rank(length);\r\n        vector<int> weight(length);\r\n        for (int i = 0; i < length ; i++) parent[i] = i;\r\n\r\n        sort(adjList.begin(), adjList.end(), [](const vector<int>& a, const vector<int>& b) {\r\n            return a[2] < b[2];\r\n        });\r\n        for (vector<int>& edge : adjList) unionByRank(edge[0], edge[1], edge[2], parent, rank, weight);\r\n\r\n        vector<bool> answer;\r\n        for (vector<int>& query : queries)\r\n            answer.push_back(isConnectedAndWithinLimit(query[0], query[1], query[2], parent, weight));\r\n\r\n        return answer;\r\n    }\r\n\r\n    bool isConnectedAndWithinLimit(int p, int q, int limit, vector<int>& parent, vector<int>& weight) {\r\n        return find(p, limit, parent, weight) == find(q, limit, parent, weight);\r\n    }\r\n\r\n    int find(int x, int limit, vector<int>& parent, vector<int>& weight) {\r\n        while (x != parent[x]) {\r\n            if (weight[x] >= limit) {\r\n                break;\r\n            }\r\n            x = parent[x];\r\n        }\r\n        return x;\r\n    }\r\n\r\n    void unionByRank(int x, int y, int limit, vector<int>& parent, vector<int>& rank, vector<int>& weight) {\r\n        int x_ref = find(x, INT_MAX, parent, weight);\r\n        int y_ref = find(y, INT_MAX, parent, weight);\r\n        if (x_ref != y_ref) {\r\n            if (rank[x_ref] < rank[y_ref]) {\r\n                parent[x_ref] = y_ref;\r\n                weight[x_ref] = limit;\r\n            } else {\r\n                parent[y_ref] = x_ref;\r\n                weight[y_ref] = limit;\r\n                if (rank[x_ref] == rank[y_ref]) {\r\n                    rank[x_ref]++;\r\n                }\r\n            }\r\n        }\r\n    }\r\n};",
    "java": "class Solution {\r\n    private int[] parents;\r\n    public boolean[] distanceLimitedPathsExist(int n, int[][] edgeList, int[][] queries) {\r\n        this.parents = new int[n];\r\n        for (int i = 0; i < n; i++) parents[i] = i;\r\n        \r\n        int m = queries.length;\r\n        \r\n        // storing {u, v, weight, original idx} by increasing weight\r\n        int[][] sortedQueries = new int[m][4];\r\n        for (int i = 0; i < m; i++) {\r\n            sortedQueries[i] = new int[]{queries[i][0], queries[i][1], queries[i][2], i};\r\n        }\r\n        Arrays.sort(sortedQueries, (a,b) -> a[2] - b[2]);\r\n        \r\n        \r\n        // sort edgeList by increasing weight \r\n        Arrays.sort(edgeList, (a,b) -> a[2] - b[2]);\r\n        int idx = 0;\r\n        \r\n        boolean[] res = new boolean[m];\r\n        \r\n        for (int i = 0; i < m; i++) {\r\n            int[] q = sortedQueries[i];\r\n            int w = q[2];\r\n            \r\n            // union all edges with weight less than current query\r\n            while (idx < edgeList.length && edgeList[idx][2] < w) {\r\n                int[] e = edgeList[idx++];\r\n                int u = e[0], v = e[1];\r\n                union(u, v);\r\n            }\r\n            \r\n            int uQuery = q[0], vQuery = q[1], id = q[3];\r\n            res[id] = (find(uQuery) == find(vQuery));\r\n        }\r\n        \r\n        return res;\r\n    }\r\n    \r\n    private void union(int u, int v) {\r\n        int uParent = find(u);\r\n        int vParent = find(v);\r\n        parents[uParent] = vParent;\r\n    }\r\n    \r\n    private int find(int u) {\r\n        while (u != parents[u]) {\r\n            parents[u] = parents[parents[u]];\r\n            u = parents[u];\r\n        }\r\n        return u;\r\n    }  \r\n}"
  }
}
