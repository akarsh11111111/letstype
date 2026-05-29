export default {
  "id": 1557,
  "name": "Minimum Number of Vertices to Reach All Nodes",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes",
  "relativeDir": "M/Minimum Number of Vertices to Reach All Nodes",
  "slug": "1557-minimum-number-of-vertices-to-reach-all-nodes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 20,
    "python": 11,
    "javascript": 21
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> findSmallestSetOfVertices(int n, vector<vector<int>>& edges) {\r\n        vector<int>ans;\r\n        vector<int>indegree(n+2),outdegree(n+2);\r\n        for(auto i:edges)\r\n        {\r\n            indegree[i[1]]++;\r\n            outdegree[i[0]]++;\r\n        }\r\n        for(int i=0;i<n;i++)\r\n        {\r\n            if(indegree[i]==0 && outdegree[i]!=0)\r\n            {\r\n                ans.push_back(i);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef findSmallestSetOfVertices(self, n: int, edges: List[List[int]]) -> List[int]:\r\n\r\n\t\tparent=[[] for i in range(n)]\r\n\t\tfor i in edges:\r\n\t\t\tparent[i[1]].append(i[0])\r\n\t\tans=[]\r\n\t\tfor i in range(n):\r\n\t\t\tif len(parent[i])==0:\r\n\t\t\t\tans.append(i)\r\n\t\treturn ans",
    "java": "// Runtime: 18 ms (Top 43.75%) | Memory: 119 MB (Top 77.96%)\r\nclass Solution {\r\n    public List<Integer> findSmallestSetOfVertices(int n, List<List<Integer>> edges) {\r\n\r\n        int[] indegree = new int[n];\r\n\r\n        for(List<Integer> edge : edges) {\r\n            indegree[edge.get(1)]++;\r\n        }\r\n\r\n        List<Integer> result = new ArrayList<>();\r\n\r\n        for(int i=0; i<n;i ++) {\r\n            if(indegree[i]==0)\r\n                result.add(i);\r\n        }\r\n\r\n        return result;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {number} n\r\n * @param {number[][]} edges\r\n * @return {number[]}\r\n */\r\nvar findSmallestSetOfVertices = function(n, edges) {\r\n    let indegree=[];\r\n    for(let i=0;i<n;i++){\r\n        indegree.push(0);\r\n    }\r\n    let ans=[];\r\n    for( const arr of edges ){\r\n        indegree[arr[1]]++;\r\n    }\r\n    for(let i=0;i<n;i++){\r\n        if(indegree[i]==0){\r\n            ans.push(i);\r\n        }\r\n    }\r\n    return ans;\r\n};"
  }
}
