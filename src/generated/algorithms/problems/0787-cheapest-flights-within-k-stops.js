export default {
  "id": 787,
  "name": "Cheapest Flights Within K Stops",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/cheapest-flights-within-k-stops",
  "relativeDir": "C/Cheapest Flights Within K Stops",
  "slug": "0787-cheapest-flights-within-k-stops",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 51,
    "python": 16,
    "javascript": 33
  },
  "languages": {
    "cpp": "// Runtime: 34 ms (Top 83.45%) | Memory: 13.5 MB (Top 63.50%)\r\nclass Solution {\r\npublic:\r\n    #define f first\r\n    #define s second\r\n    int findCheapestPrice(int n, vector<vector<int>>& flights, int src, int dst, int k){\r\n        priority_queue< array<int,3>, vector<array<int,3>>, greater<array<int,3>>> pq;\r\n        unordered_map<int, vector<pair<int,int>>> g;\r\n\r\n        for(auto& f : flights){\r\n            g[f[0]].push_back({f[1],f[2]});\r\n        }\r\n        vector<int> dis(n,INT_MAX);\r\n        pq.push({0,src,0});\r\n        while(!pq.empty()){\r\n            int c = pq.top()[0];\r\n            int cur = pq.top()[1];\r\n            int lvl = pq.top()[2];\r\n            pq.pop();\r\n            if(cur==dst) return c;\r\n            if(lvl > k || lvl >= dis[cur]) continue;\r\n            dis[cur] = lvl;\r\n            for(auto& nei : g[cur]){\r\n                pq.push({c+nei.s, nei.f, lvl+1});\r\n            }\r\n        }\r\n        return -1;\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:\r\n\t\tgraph = defaultdict(list)\r\n\t\tfor u,v,w in flights: graph[u].append((v,w))\r\n\r\n\t\tpq = [(0,src,0)]\r\n\t\tdis = [float('inf')]*n\r\n\r\n\t\twhile pq:\r\n\t\t\tc,n,l = heappop(pq)\r\n\t\t\tif n==dst: return c\r\n\t\t\tif l > k or l>= dis[n]: continue\r\n\t\t\tdis[n] = l\r\n\t\t\tfor v,w in graph[n]:\r\n\t\t\t\theappush(pq,(c+w,v,l+1))\r\n\t\treturn -1",
    "java": "class Solution {\r\n    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {\r\n       // Initialize Prices arr with infinity & src 0\r\n        int[] prices = new int[n];\r\n        for(int i = 0; i < n; i++)\r\n            prices[i] = Integer.MAX_VALUE;\r\n        prices[src] = 0;\r\n        \r\n        // Build Adj list {key: src | val: dst+price}\r\n        Map<Integer, List<int[]>> flightsMap = new HashMap<>();\r\n        for(int[] flight : flights){\r\n            int flightSrc = flight[0];\r\n            int flightDst = flight[1];\r\n            int flightPrice = flight[2];\r\n            \r\n            List<int[]> flightsList = flightsMap.getOrDefault(flightSrc, new ArrayList<>());\r\n            flightsList.add(new int[]{flightDst, flightPrice});\r\n            flightsMap.put(flightSrc, flightsList);\r\n        }\r\n        \r\n        // Start Bellman ford Algo\r\n        Queue<Integer> q = new LinkedList<>();\r\n        q.offer(src);\r\n        while(k >= 0 && !q.isEmpty()){\r\n            int[] tempPrices = new int[n];                  // Temporary Prices Arr\r\n            for(int i = 0; i < n; i++)\r\n                tempPrices[i] = prices[i];\r\n            \r\n            int size = q.size();\r\n            for(int i = 0; i < size; i++){\r\n                int curSrc = q.poll();\r\n                int curPrice = prices[curSrc];\r\n                List<int[]> curFlightsList = flightsMap.getOrDefault(curSrc, new ArrayList<>());\r\n                for(int[] flight : curFlightsList){\r\n                    int flightDst = flight[0];\r\n                    int flightPrice = flight[1];\r\n                    int newPrice = curPrice + flightPrice;\r\n                    if(newPrice < tempPrices[flightDst]){\r\n                        tempPrices[flightDst] = newPrice;\r\n                        q.offer(flightDst);\r\n                    }\r\n                }\r\n            }\r\n            for(int i = 0; i < n; i++)                    // Copy Temp Prices to Original Price Arr\r\n                prices[i] = tempPrices[i];\r\n            k--;\r\n        }\r\n        int totalPrice = prices[dst];\r\n        return totalPrice == Integer.MAX_VALUE? -1 : totalPrice;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} n\r\n * @param {number[][]} flights\r\n * @param {number} src\r\n * @param {number} dst\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nconst MAX_PRICE=Math.pow(10,8);\r\nvar findCheapestPrice = function(n, flights, src, dst, k) {\r\n    let prev=[];\r\n    let step=0;\r\n    let curr=[];\r\n    for(let i=0;i<n;i++){\r\n        prev[i]=MAX_PRICE;\r\n    }\r\n    prev[src]=0;\r\n    while(step-1<k){\r\n      curr=[...prev];\r\n        let isAnyChange=false;\r\n        for(let i=0;i<flights.length;i++){\r\n            let [src,dst,p]=flights[i];\r\n            if(prev[src]>=MAX_PRICE)continue;\r\n            let totalCostToReachDst=prev[src]+p;\r\n            curr[dst]=Math.min(curr[dst],totalCostToReachDst);\r\n        }\r\n        step++;\r\n        prev=curr;\r\n        \r\n    }\r\n    return prev[dst]>=MAX_PRICE?-1:prev[dst];\r\n    \r\n};"
  }
}
