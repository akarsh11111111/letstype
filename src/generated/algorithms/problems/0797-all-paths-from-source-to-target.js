export default {
  "id": 797,
  "name": "All Paths From Source to Target",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/all-paths-from-source-to-target",
  "relativeDir": "A/All Paths From Source to Target",
  "slug": "0797-all-paths-from-source-to-target",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 38,
    "python": 14,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 14 ms (Top 47.42%) | Memory: 12.20 MB (Top 63.89%)\r\n\r\nclass Solution {\r\npublic:\r\n    // setting a few class variables, so that we do not have to pass them down all the time in the recursive dfs calls\r\n    int target;\r\n    vector<vector<int>> res;\r\n    vector<int> tmp;\r\n    void dfs(vector<vector<int>>& graph, int currNode = 0) {\r\n\t    // updating tmp\r\n        tmp.push_back(currNode);\r\n\t\t// and either updating res with it if target is met\r\n        if (currNode == target) res.push_back(tmp);\r\n\t\t// or callling dfs again recursively\r\n        else for (int node: graph[currNode]) {\r\n            dfs(graph, node);\r\n        }\r\n        // backtracking with tmp\r\n\t\ttmp.pop_back();\r\n    }\r\n    vector<vector<int>> allPathsSourceTarget(vector<vector<int>>& graph) {\r\n        target = graph.size() - 1;\r\n        dfs(graph);\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def allPathsSourceTarget(self, graph: List[List[int]]) -> List[List[int]]:\r\n        res = []\r\n        self.explore(graph, graph[0], [0], res)\r\n        return res\r\n    \r\n    def explore(self, graph, candidates, step, res):\r\n        if step[-1] == len(graph)-1:\r\n            res.append(list(step))\r\n        else:\r\n            for i in range(len(candidates)):\r\n                step.append(candidates[i])\r\n                self.explore(graph, graph[candidates[i]], step, res)\r\n                step.pop()",
    "java": "Approach : Using dfs+ backtracking we can solve it\t\r\n\t\r\n\tclass Solution {\r\n\t\tpublic List<List<Integer>> allPathsSourceTarget(int[][] graph) {\r\n\t\t\tList<List<Integer>> ans=new ArrayList<>();\r\n\t\t\tList<Integer> temp=new ArrayList<>();\r\n\t\t\t boolean []visit=new boolean [graph.length];\r\n\t\t\thelper(graph,0,graph.length-1,ans,temp,visit);\r\n\r\n\t\t\treturn ans;\r\n\t\t}\r\n\t\tpublic void helper(int[][] graph, int src,int dest,List<List<Integer>> ans,List<Integer> temp,boolean[]vis)\r\n\t\t{\r\n\r\n\t\t\tvis[src]=true;\r\n\t\t\ttemp.add(src);\r\n\t\t\tif(src==dest)\r\n\t\t\t{\r\n\t\t\t\tList<Integer> b =new ArrayList<>();\r\n\t\t\t\tfor(int h:temp){\r\n\t\t\t\t\tb.add(h);\r\n\t\t\t\t}\r\n\t\t\t\tans.add(b);\r\n\t\t\t}\r\n\r\n\t\t\tfor(int i:graph[src])\r\n\t\t\t{\r\n\t\t\t\tif(vis[i]!=true)\r\n\t\t\t\t{\r\n\t\t\t\t\thelper(graph,i,dest,ans,temp,vis);\r\n\t\t\t\t}\r\n\r\n\t\t\t}\r\n\r\n\t\t\tvis[src]=false;\r\n\t\t\ttemp.remove(temp.size()-1);\r\n\t\t}\r\n\t}",
    "javascript": "/**\r\n * @param {number[][]} graph\r\n * @return {number[][]}\r\n */\r\nconst allPathsSourceTarget = function(graph) {\r\n    const n = graph.length;\r\n    const result = [];\r\n    const dfs = (node, path) => {\r\n        if (node === n-1) {\r\n            result.push([...path, node]); // Add the current path to the result if we have reached the target node\r\n            return;\r\n        }\r\n        for (const neighbor of graph[node]) {\r\n            dfs(neighbor, [...path, node]); // Recursively explore all neighbors of the current node\r\n        }\r\n    };\r\n    dfs(0, []); // Start the DFS from the source node\r\n    return result;\r\n};"
  }
}
