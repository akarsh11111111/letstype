export default {
  "id": 1615,
  "name": "Maximal Network Rank",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximal-network-rank",
  "relativeDir": "M/Maximal Network Rank",
  "slug": "1615-maximal-network-rank",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 28,
    "python": 12,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maximalNetworkRank(int n, vector<vector<int>>& roads) {\r\n        vector<vector<int>>graph(n,vector<int>(n,0));\r\n        vector<int>degree(n,0);\r\n        for(int i=0;i<roads.size();i++){\r\n            int u=roads[i][0];\r\n            int v=roads[i][1];\r\n            degree[u]++;\r\n            degree[v]++;\r\n            graph[u][v]=1;\r\n            graph[v][u]=1;\r\n        }\r\n        int ans=0;\r\n        for(int i=0;i<graph.size();i++){\r\n            for(int j=0;j<graph.size();j++){\r\n                if(j!=i){\r\n                    int rank=degree[i]+degree[j]-graph[i][j];\r\n                    ans=max(ans,rank);\r\n                }\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maximalNetworkRank(self, n: int, roads) -> int:\r\n        max_rank = 0\r\n        connections = {i: set() for i in range(n)}\r\n        for i, j in roads:\r\n            connections[i].add(j)\r\n            connections[j].add(i)\r\n        for i in range(n - 1):\r\n            for j in range(i + 1, n):\r\n                max_rank = max(max_rank, len(connections[i]) +\r\n                               len(connections[j]) - (j in connections[i]))\r\n        return max_rank",
    "java": "// Runtime: 40 ms (Top 12.52%) | Memory: 44.60 MB (Top 24.53%)\r\n\r\nclass Solution {\r\n    public int maximalNetworkRank(int n, int[][] roads) {\r\n        int[] degree = new int[n];\r\n        Set<String> roadSet = new HashSet<>();\r\n        \r\n        for (int[] road : roads) {\r\n            degree[road[0]]++;\r\n            degree[road[1]]++;\r\n            roadSet.add(road[0] + \",\" + road[1]);\r\n            roadSet.add(road[1] + \",\" + road[0]);\r\n        }\r\n\r\n        int maxRank = 0;\r\n        for (int i = 0; i < n; i++) {\r\n            for (int j = i+1; j < n; j++) {\r\n                int rank = degree[i] + degree[j];\r\n                if (roadSet.contains(i + \",\" + j)) {\r\n                    rank--;\r\n                }\r\n                maxRank = Math.max(maxRank, rank);\r\n            }\r\n        }\r\n\r\n        return maxRank;\r\n    }\r\n}",
    "javascript": "var maximalNetworkRank = function(n, roads) {\r\n    let res = 0\r\n    let map = new Map()\r\n    roads.forEach(([u,v])=>{\r\n        map.set(u, map.get(u) || new Set())\r\n        let set = map.get(u)\r\n        set.add(v)\r\n        \r\n        map.set(v, map.get(v) || new Set())\r\n        set = map.get(v)\r\n        set.add(u)\r\n    })\r\n    \r\n    for(let i=0;i<n;i++){\r\n        if(!map.has(i)) continue\r\n        let uAdj = map.get(i)\r\n        let uCount = uAdj.size;\r\n        for(let j=i+1;j<n;j++){\r\n            if(!map.has(j)) continue\r\n            let vAdj = map.get(j)\r\n            let vCount = vAdj.size\r\n            if(vAdj.has(i)) vCount--\r\n            res = Math.max(uCount+vCount, res)\r\n        }\r\n    }\r\n    return res\r\n};"
  }
}
