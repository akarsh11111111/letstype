export default {
  "id": 1514,
  "name": "Path with Maximum Probability",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/path-with-maximum-probability",
  "relativeDir": "P/Path with Maximum Probability",
  "slug": "1514-path-with-maximum-probability",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 41,
    "python": 23,
    "javascript": 40
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    double maxProbability(int n, vector<vector<int>>& edges, vector<double>& succProb, int start, int end) {\r\n        vector<vector<pair<int, double>>> graph(n);\r\n        for(int i = 0; i < edges.size(); ++i){\r\n            graph[edges[i][0]].push_back({edges[i][1], succProb[i]});\r\n            graph[edges[i][1]].push_back({edges[i][0], succProb[i]});\r\n        }\r\n        priority_queue<pair<double, int>> pq;\r\n        pq.push({1.0, start});\r\n        vector<bool> visited(n, false);\r\n        vector<double> values(n, 0.0);\r\n        values[start] = 1.0;\r\n        while(!pq.empty()){\r\n            double currValue = pq.top().first, currNode = pq.top().second;\r\n            pq.pop();\r\n            visited[currNode] = true;\r\n            for(int i = 0; i < graph[currNode].size(); ++i){\r\n                double weight = graph[currNode][i].second;\r\n                int nextNode = graph[currNode][i].first;\r\n                if(visited[nextNode] == false){\r\n                    double nextProb = currValue * weight;\r\n                    if(nextProb > values[nextNode])\r\n                        values[nextNode] = nextProb;\r\n                    pq.push({nextProb, nextNode});\r\n                }\r\n            }\r\n        }\r\n        return values[end] == 0.0 ? 0.0 : values[end];\r\n    }\r\n};",
    "python": "# Runtime: 755 ms (Top 91.19%) | Memory: 25.4 MB (Top 98.78%)\r\nclass Solution(object):\r\n    def maxProbability(self, n, edges, succProb, start, end):\r\n        adj=[[] for i in range(n)]\r\n        dist=[sys.maxsize for i in range(n)]\r\n        heap=[]\r\n        c=0\r\n        for i,j in edges:\r\n            adj[i].append([j,succProb[c]])\r\n            adj[j].append([i,succProb[c]])\r\n            c+=1\r\n        heapq.heappush(heap,[-1.0,start])\r\n        dist[start]=1\r\n        while(heap):\r\n            prob,u=heapq.heappop(heap)\r\n            for v,w in adj[u]:\r\n                if(dist[v]>-abs(w*prob)):\r\n                    dist[v]=-abs(w*prob)\r\n                    heapq.heappush(heap,[dist[v],v])\r\n        if(sys.maxsize==dist[end]):\r\n            return 0.00000\r\n        else:\r\n            return -dist[end]",
    "java": "// Runtime: 82 ms (Top 52.25%) | Memory: 75.8 MB (Top 66.61%)\r\nclass Pair{\r\n    int to;\r\n    double prob;\r\n    public Pair(int to,double prob){\r\n        this.to=to;\r\n        this.prob=prob;\r\n    }\r\n}\r\nclass Solution {\r\n    public double maxProbability(int n, int[][] edges, double[] succProb, int start, int end) {\r\n        List<List<Pair>> adj=new ArrayList<>();\r\n        for(int i=0;i<n;i++){\r\n            adj.add(new ArrayList<Pair>());\r\n        }\r\n        for(int i=0;i<edges.length;i++){\r\n            adj.get(edges[i][0]).add(new Pair(edges[i][1],succProb[i]));\r\n            adj.get(edges[i][1]).add(new Pair(edges[i][0],succProb[i]));\r\n        }\r\n        //node,to node,probability\r\n        double probs[]=new double[n];\r\n        Arrays.fill(probs,0.0);\r\n        probs[start]=1.0;\r\n        PriorityQueue<Pair> pq=new PriorityQueue<>((p1,p2)->Double.compare(p2.prob,p1.prob));\r\n        pq.offer(new Pair(start,1.0));\r\n        while(!pq.isEmpty()){\r\n            Pair curr=pq.poll();\r\n            for(Pair x:adj.get(curr.to)){\r\n                if(((curr.prob)*(x.prob))>probs[x.to]){\r\n                    probs[x.to]=((curr.prob)*(x.prob));\r\n                    pq.offer(new Pair(x.to,probs[x.to]));\r\n\r\n                }\r\n                else{\r\n                    continue;\r\n                }\r\n            }\r\n        }\r\n        return probs[end];\r\n    }\r\n}",
    "javascript": "var maxProbability = function(n, edges, succProb, start, end) {\r\n    const graph = new Map();\r\n    edges.forEach(([a, b], i) => {\r\n        const aSet = graph.get(a) || [];\r\n        const bSet = graph.get(b) || [];\r\n        aSet.push([b, succProb[i]]), bSet.push([a, succProb[i]]);\r\n        graph.set(a, aSet), graph.set(b, bSet);\r\n    });\r\n    \r\n    const dist = new Array(n).fill(0);\r\n    const vis  = new Array(n).fill(false);\r\n    \r\n    dist[start] = 1;\r\n    \r\n    const getMaxProbNode = () => {\r\n        let maxVal = 0, maxIndex = -1;\r\n        for(let i = 0; i < n; i++) {\r\n            if(maxVal < dist[i] && !vis[i]) {\r\n                maxVal = dist[i], maxIndex = i;\r\n            }\r\n        }\r\n        return maxIndex;\r\n    }\r\n    \r\n    for(let i = 0; i < n - 1; i++) {\r\n        const maxProbNode = getMaxProbNode();\r\n        vis[maxProbNode] = true;\r\n        \r\n        const adjacentNodes = graph.get(maxProbNode) || [];\r\n        const len = adjacentNodes.length;\r\n        for(let j = 0; j < len; j++) {\r\n            const [node, prob] = adjacentNodes[j];\r\n            if(!vis[node] && dist[node] < dist[maxProbNode] * prob) {\r\n                dist[node] = dist[maxProbNode] * prob;\r\n            }\r\n        }\r\n    }\r\n    \r\n    return dist[end];\r\n};"
  }
}
