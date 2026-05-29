export default {
  "id": 2359,
  "name": "Find Closest Node to Given Two Nodes",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-closest-node-to-given-two-nodes",
  "relativeDir": "F/Find Closest Node to Given Two Nodes",
  "slug": "2359-find-closest-node-to-given-two-nodes",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 52,
    "python": 42,
    "javascript": 29
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int closestMeetingNode(vector<int>& edges, int node1, int node2) {\r\n        \r\n        // special case, if node1 and node2 are same the answer will be itself\r\n        if(node1 == node2)\r\n            return node1;\r\n\r\n        int n = edges.size();\r\n        // distance vectors for node1 and node2\r\n        vector<int> m1(n, -1);\r\n        vector<int> m2(n, -1);\r\n        int ans = -1;\r\n        int maxD = n + 1;\r\n\r\n        int node = node1;\r\n        int dist = 0;\r\n        // calculate distance from node1       \r\n        while(node != -1 && m1[node] == -1)\r\n        {\r\n            m1[node] = dist;\r\n            dist++;\r\n            node = edges[node];   \r\n        }\r\n\r\n        node = node2;\r\n        dist = 0;\r\n        // calculate distance from node2 while checking for the same node in distance vector for node1\r\n        while(node != -1 && m2[node] == -1)\r\n        {\r\n            if(m1[node] != -1)\r\n            {\r\n                if(maxD > max(dist, m1[node]))\r\n                {\r\n                    ans = node;\r\n                    maxD = max(dist, m1[node]);\r\n                }\r\n                else if(maxD == max(dist, m1[node]))\r\n                {\r\n                    if(ans > node)\r\n                        ans = node;\r\n                }\r\n            }\r\n\r\n            m2[node] = dist;\r\n            dist++;\r\n            node = edges[node];\r\n        }\r\n\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 3032 ms (Top 5.02%) | Memory: 139.1 MB (Top 14.52%)\r\nclass Solution:\r\n    def closestMeetingNode(self, edges: List[int], node1: int, node2: int) -> int:\r\n\r\n        res = float(\"inf\")\r\n\r\n        def dfs(node, arr, counter=0):\r\n\r\n            #making sure we haven't visited the node before (i.e., value in the array != -1)\r\n            while arr[node]==-1 and node!=-1:\r\n\r\n                #assigning how many moves it takes to reach node\r\n                arr[node] = counter\r\n                next_node = edges[node]\r\n\r\n                #going through each neighbor if exists and updating the counter\r\n                dfs(edges[node], arr, counter+1)\r\n\r\n            return arr\r\n\r\n        #find moves to reach nodes from node1\r\n        n1 = [-1 for i in range(len(edges))]\r\n        dfs(node1, n1)\r\n\r\n        #find moves to reach nodes from node2\r\n        n2 = [-1 for i in range(len(edges))]\r\n        dfs(node2, n2)\r\n\r\n        answer = -1\r\n\r\n        for i in range(len(edges)):\r\n\r\n            #check if the end node is reachable from both starting nodes\r\n            if n1[i]!=-1 and n2[i]!=-1:\r\n                maximum_distance = max(n1[i], n2[i])\r\n\r\n                #update the distance and the final answer if relevant\r\n                if maximum_distance<res:\r\n                    res = maximum_distance\r\n                    answer = i\r\n\r\n        return answer",
    "javascript": "// Runtime: 134 ms (Top 68.97%) | Memory: 57.00 MB (Top 96.55%)\r\n\r\nvar closestMeetingNode = function(edges, node1, node2) {\r\n    let n = edges.length\r\n    let map1 = new Array(n).fill(-1)\r\n    let map2 = new Array(n). fill(-1)\r\n    map1[node1] = 0\r\n    map2[node2] = 0\r\n\r\n    while (edges[node1] != -1 && map1[edges[node1]] == -1) {\r\n        map1[edges[node1]] = map1[node1] + 1\r\n        node1 = edges[node1]\r\n    }\r\n    while (edges[node2] != -1 && map2[edges[node2]] == -1) {\r\n        map2[edges[node2]] = map2[node2] + 1\r\n        node2 = edges[node2]\r\n    } \r\n\r\n    let res = n, node = -1\r\n    for (let i = 0; i < n; i++) {\r\n        if (map1[i] == -1 || map2[i] == -1) continue\r\n        let val = Math.max(map1[i], map2[i])\r\n        if (res > val) {\r\n            res = val\r\n            node = i\r\n        }\r\n    }\r\n    return node\r\n};"
  }
}
