export default {
  "id": 2045,
  "name": "Second Minimum Time to Reach Destination",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/second-minimum-time-to-reach-destination",
  "relativeDir": "S/Second Minimum Time to Reach Destination",
  "slug": "2045-second-minimum-time-to-reach-destination",
  "availableLanguages": [
    "cpp",
    "java",
    "python"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 60,
    "java": 31,
    "python": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int secondMinimum(int n, vector<vector<int>>& edges, int time, int change) {\r\n        // if the shortest path from 1 to n is of length L\r\n        // find whether there is a path of length L+1\r\n        // there is always a path of length L+2\r\n        \r\n        vector<vector<int>> adj(n);\r\n        for (auto& e : edges) {\r\n            int u = e[0]-1, v = e[1]-1;\r\n            adj[u].push_back(v);\r\n            adj[v].push_back(u);\r\n        }\r\n        \r\n        // bfs from goal\r\n        vector<int> d(n, 1e9);\r\n        d[n-1] = 0;\r\n        queue<int> q;\r\n        q.push(n-1);\r\n        while (!q.empty()) {\r\n            int cur = q.front(); q.pop();\r\n            for (auto nei : adj[cur]) {\r\n                if (d[nei] == 1e9) {\r\n                    d[nei] = d[cur] + 1;\r\n                    q.push(nei);\r\n                }\r\n            }\r\n        }\r\n        \r\n        // check the existence of a path with length = d[0]+1\r\n        int len = d[0] + 2;\r\n        q.push(0);\r\n        bool done = false;\r\n        while (!q.empty()) {\r\n            int cur = q.front(); q.pop();\r\n            for (auto nei : adj[cur]) {\r\n                if (d[nei] == d[cur]) {\r\n                    len--;\r\n                    done = true;\r\n                    break;\r\n                } else if (d[nei] == d[cur] - 1) {\r\n                    q.push(nei);\r\n                }\r\n            }\r\n            if (done) break;\r\n        }\r\n        \r\n        // calculate the time needed\r\n        // light : green in [0, c),  [2c, 3c), ... \r\n        //          red  in [c, 2c), [3c, 4c), ...\r\n        int currTime = 0;\r\n        //cout << len << '\\n';\r\n        for (int i = 0; i < len; i++) {\r\n\t\t\tif ((currTime / change) % 2 == 1)  // have to wait until the signal turns into green\r\n                currTime = ((currTime / change) + 1) * change;    \r\n            currTime += time;\r\n        }\r\n        return currTime;\r\n    }\r\n};",
    "python": "from heapq import heappop,heappush\r\nfrom collections import defaultdict\r\n\r\nclass Solution:\r\n    def secondMinimum(self, n: int, edges: List[List[int]], time: int, change: int) -> int:\r\n        G = defaultdict(list)\r\n        dist = defaultdict(set)\r\n        for v, w in edges:\r\n            G[v].append(w)\r\n            G[w].append(v)\r\n        h = [(0, 1)]\r\n        res = []\r\n        while h:\r\n            d, v = heappop(h)\r\n            if len(dist[v]) > 1:\r\n                continue\r\n            if d in dist[v]:\r\n                continue\r\n            dist[v].add(d)\r\n            q, r = divmod(d, change)\r\n            if q%2 == 1:\r\n                d += change - r\r\n            for w in G[v]:\r\n                if w == n:\r\n                    if  res:\r\n                        if d+time not in res:\r\n                            return d+time\r\n                    else:\r\n                        res.append(d+time)\r\n                if len(dist[w]) < 2:\r\n                    heappush(h, (d+time,w))",
    "java": "// Runtime: 254 ms (Top 50.50%) | Memory: 51.9 MB (Top 97.03%)\r\nclass Solution {\r\n    public int secondMinimum(int n, int[][] edges, int time, int change) {\r\n        Map<Integer, List<Integer>> g = new HashMap();\r\n        for(int[] e : edges) {\r\n            int u = e[0], v = e[1];\r\n            g.computeIfAbsent(u, x -> new ArrayList()).add(v);\r\n            g.computeIfAbsent(v, x -> new ArrayList()).add(u);\r\n        }\r\n        PriorityQueue<int[]> q = new PriorityQueue<>((a,b) -> a[1] - b[1]);\r\n        q.offer(new int[]{1, 0});\r\n        int[] uniqueVisit = new int[n+1]; // uniqueVisit limit to 2 <==> relax twice at most\r\n        int[] dis = new int[n+1];\r\n        Arrays.fill(dis, -1);\r\n        while(!q.isEmpty()) {\r\n            int size = q.size();\r\n            int[] cur = q.poll();\r\n            int node = cur[0], t = cur[1]; // arriving time\r\n            if(dis[node] == t || uniqueVisit[node] >= 2) continue; // skip if it's same value or has been relaxed twice already\r\n            uniqueVisit[node]++;\r\n            dis[node] = t;\r\n            if(node == n && uniqueVisit[node] == 2) return dis[node];\r\n            // generate leaving time (waiting the green light)\r\n            if((t / change) % 2 != 0) t = (t/change + 1) * change;\r\n            for(int nei : g.getOrDefault(node, new ArrayList<>())) {\r\n                q.offer(new int[]{nei, t + time});\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n}"
  }
}
