export default {
  "id": 1791,
  "name": "Find Center of Star Graph",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-center-of-star-graph",
  "relativeDir": "F/Find Center of Star Graph",
  "slug": "1791-find-center-of-star-graph",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "python": 17,
    "javascript": 17
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findCenter(vector<vector<int>>& edges) {\r\n        //create an adjacency list\r\n        unordered_map<int , set<int> > adj;\r\n        int maxi;\r\n\r\n        for(int i = 0 ; i < edges.size() ; i++){\r\n            int u = edges[i][0];\r\n            int v = edges[i][1];\r\n\r\n            maxi = max(maxi ,max(u,v));\r\n\r\n            adj[u].insert(v);\r\n            adj[v].insert(u);\r\n        }\r\n\r\n        for(auto i : adj){\r\n            if(i.second.size() == maxi-1)\r\n                return i.first;\r\n        }\r\n        return -1;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def findCenter(self, edges: List[List[int]]) -> int:\r\n        \r\n        \"\"\" From the Constraints: A valid STAR GRAPH is confirmed. \r\n\t\tThat means the center will be common to every edges. \r\n\t\tTherefore we can get the center by comparing only first 2 elements\"\"\"\r\n        \r\n        for i in range (1):\r\n            \r\n            # Check if first element of first edge mathches with any element of second edges\r\n            \r\n            if edges[i][0] == edges [i+1][0] or edges[i][0] == edges[i+1][1]:\r\n                return edges[i][0]\r\n            \r\n            #Otherwise second element of first edge will be the answer\r\n            else:\r\n                return edges[i][1]",
    "javascript": "var findCenter = function(edges) {\r\n    // InDegree We need to count\r\n    let indegree = {};\r\n    \r\n    for (let item of edges) {\r\n        for (let i = 0; i < item.length; i++) {\r\n            if (indegree[item[i]]) {\r\n                indegree[item[i]] += 1;\r\n            } else {\r\n                indegree[item[i]] = 1;\r\n            }\r\n            if (indegree[item[i]] === edges.length) {\r\n                return item[i];\r\n            }\r\n        }\r\n    }\r\n};"
  }
}
