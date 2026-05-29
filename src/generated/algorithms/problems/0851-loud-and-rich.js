export default {
  "id": 851,
  "name": "Loud and Rich",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/loud-and-rich",
  "relativeDir": "L/Loud and Rich",
  "slug": "0851-loud-and-rich",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "java": 34,
    "python": 27,
    "javascript": 31
  },
  "languages": {
    "cpp": "// Runtime: 309 ms (Top 15.91%) | Memory: 46.8 MB (Top 48.36%)\r\nclass Solution {\r\npublic:\r\n\r\n    int dfs(int node,vector<int> &answer,vector<int> adjList[],vector<int>& quiet)\r\n    {\r\n        if(answer[node]==-1)\r\n        {\r\n            answer[node] = node;\r\n            for(int child:adjList[node])\r\n            {\r\n                int cand = dfs(child,answer,adjList,quiet);\r\n                if(quiet[cand]<quiet[answer[node]])\r\n                    answer[node] = cand;\r\n            }\r\n        }\r\n\r\n        return answer[node];\r\n    }\r\n    vector<int> loudAndRich(vector<vector<int>>& richer, vector<int>& quiet) {\r\n\r\n        int n = quiet.size();\r\n\r\n        vector<int> adjList[n];\r\n\r\n        for(auto x:richer)\r\n        {\r\n            int v = x[0];\r\n            int u = x[1];\r\n            adjList[u].push_back(v);\r\n        }\r\n\r\n        vector<int> answer(n,-1);\r\n\r\n        for(int node =0;node<n;node++)\r\n        {\r\n            dfs(node,answer,adjList,quiet);\r\n        }\r\n\r\n        return answer;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def loudAndRich(self, richer: List[List[int]], quiet: List[int]) -> List[int]:\r\n        length = len(quiet)\r\n        arr = [i for i in range(length)]\r\n        indegree = [0 for _ in range(length)]\r\n        graph = collections.defaultdict(list)\r\n        dq = collections.deque([])\r\n        \r\n        for a, b in richer:\r\n            # Note that the graph is uni-directional\r\n            graph[a].append(b)\r\n            indegree[b] += 1\r\n\r\n        for i in range(length):\r\n            if not indegree[i]: \r\n                dq.append(i)\r\n    \r\n        while dq:\r\n            node = dq.popleft()\r\n            \r\n            for vertex in graph[node]:\r\n                indegree[vertex] -= 1\r\n                if quiet[arr[node]] < quiet[arr[vertex]]:\r\n                    arr[vertex] = arr[node]\r\n                if not indegree[vertex]:\r\n                    dq.append(vertex)\r\n        return arr",
    "java": "// Runtime: 27 ms (Top 42.47%) | Memory: 65.2 MB (Top 60.25%)\r\nclass Solution {\r\n        ArrayList<ArrayList<Integer>> adj =new ArrayList<>();\r\n        int res[];\r\n    public int[] loudAndRich(int[][] richer, int[] quiet) {\r\n        int n=quiet.length;\r\n        res=new int[n];\r\n        Arrays.fill(res,-1);\r\n         for(int i=0;i<n;i++)\r\n            adj.add(new ArrayList<Integer>());\r\n        for(int i=0;i<richer.length;i++)\r\n        {\r\n            if(adj.get(richer[i][1])==null)\r\n                adj.add(new ArrayList<>());\r\n            adj.get(richer[i][1]).add(richer[i][0]);\r\n        }\r\n        for(int i=0;i<n;i++)\r\n            dfs(i,quiet);\r\n        return res;\r\n    }\r\n    public int dfs(int node ,int[] quiet)\r\n    {\r\n        if(res[node]==-1)\r\n        {\r\n            res[node]=node;\r\n            for(int v:adj.get(node)){\r\n                int cand=dfs(v,quiet);\r\n                if(quiet[cand]<quiet[res[node]])\r\n                res[node]=cand;\r\n            }\r\n        }\r\n        return res[node];\r\n    }\r\n}",
    "javascript": "var loudAndRich = function(richer, quiet) {\r\n    const map = new Map();\r\n    for (const [rich, poor] of richer) {\r\n        map.set(poor, (map.get(poor) || new Set()).add(rich));        \r\n    }\r\n    \r\n    const memo = new Map();\r\n    const getQuietest = (person) => {\r\n        if (memo.has(person)) return memo.get(person);\r\n        const richerList = map.get(person);\r\n        let min = quiet[person];\r\n        let quietest = person;\r\n        if (!richerList) {\r\n            memo.set(person, quietest);\r\n            return quietest;\r\n        }\r\n        for (const rich of richerList) {         \r\n            if (quiet[getQuietest(rich)] < min) {\r\n                min = quiet[getQuietest(rich)];\r\n                quietest = getQuietest(rich);\r\n            }            \r\n        }\r\n        memo.set(person, quietest);\r\n        return quietest;\r\n    }\r\n    const answer = [];\r\n    for (let i=0; i<quiet.length; i++) {\r\n        answer.push(getQuietest(i));\r\n    }\r\n    return answer;\r\n};"
  }
}
