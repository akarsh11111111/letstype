export default {
  "id": 2246,
  "name": "Longest Path With Different Adjacent Characters",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-path-with-different-adjacent-characters",
  "relativeDir": "L/Longest Path With Different Adjacent Characters",
  "slug": "2246-longest-path-with-different-adjacent-characters",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 44,
    "java": 40,
    "python": 13,
    "javascript": 39
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>>g;\r\n    int ans=0;\r\n   int dfs(int node,int par, string &s){\r\n       // vector to store max length & second max length that we get from children of node at v[1] & v[0] respectively\r\n        vector<int>v(2,0);\r\n       for(auto child:g[node]){\r\n           if(child != par){\r\n               int x = dfs(child,node,s);\r\n\t\t\t   // if char at node != char at child then node can be included in our ans\r\n               if(s[node] != s[child]){\r\n                   if(v[1]<x){\r\n                       v[0]=v[1];\r\n                       v[1]=x;\r\n                       \r\n                   }else{\r\n                       v[0]=max(v[0],x);\r\n                   }\r\n               }\r\n               \r\n           }\r\n       }\r\n       // update our ans every time we return to node\r\n       ans = max(ans, v[0]+v[1]+1);\r\n\t   //return the max length up till here including node\r\n       return max(v[0],v[1])+1;\r\n        \r\n    }\r\n    int longestPath(vector<int>& parent, string s) {\r\n        int n = s.size();\r\n        \r\n        ans =0;\r\n        g.assign(n+1,{});\r\n        for(int i=1;i<parent.size();i++){\r\n           g[parent[i]].push_back(i);\r\n           g[i].push_back(parent[i]);\r\n        }\r\n\t\t// run dfs and calculate max \r\n        ans = max(ans, dfs(0,-1,s));\r\n        return ans;\r\n        \r\n    }\r\n};",
    "python": "class Solution:\r\n    def longestPath(self, parent: list[int], s: str) -> int:\r\n        def l_path_and_chain(tree: dict[int, list[int]], s: str, root: int) -> tuple[int, int]:\r\n            lp = lc1 = lc2 = 0\r\n            for child, path, chain in ((c, *l_path_and_chain(tree, s, c)) for c in tree[root]):\r\n                lp = max(lp, path)\r\n                if s[child] != s[root]: *_, lc2, lc1 = sorted((chain, lc2, lc1))\r\n\r\n            return max(lp, lc1 + lc2 + 1), lc1 + 1\r\n\r\n        t = defaultdict(list)\r\n        for c, p in enumerate(parent): t[p].append(c)\r\n        return l_path_and_chain(t, s, 0)[0]",
    "java": "// Runtime: 151 ms (Top 22.99%) | Memory: 94.00 MB (Top 86.21%)\r\n\r\nclass Solution {\r\n    int longestPathValue = 1; // variable to store the length of the longest path\r\n\r\n    public int longestPath(int[] parent, String s) {\r\n        // create an adjacency list representation of the tree\r\n        Map<Integer, List<Integer>> adj = new HashMap<>();\r\n        for(int i = 1; i < parent.length; i++){\r\n            int j = parent[i];\r\n            adj.putIfAbsent(j, new LinkedList<>());\r\n            adj.get(j).add(i);\r\n        }\r\n        // call dfs on the root of the tree\r\n        dfs(0, adj, s);\r\n        return longestPathValue;\r\n    }\r\n\r\n    public int dfs(int node, Map<Integer, List<Integer>> adj, String s){\r\n        // if the node is a leaf node, return 1\r\n        if(!adj.containsKey(node)) return 1;\r\n        int max = 0, secondMax = 0;\r\n        // for each neighbor of the node\r\n        for(int nbrNode : adj.get(node)){\r\n            int longestPathFromNbrNode = dfs(nbrNode , adj, s);\r\n            // if the characters at the current node and its neighbor are the same, ignore the neighbor\r\n            if(s.charAt(node) == s.charAt(nbrNode)) continue;\r\n            // update max and secondMax with the longest path from the neighbor node\r\n            if(longestPathFromNbrNode > max){\r\n                secondMax = max;\r\n                max = longestPathFromNbrNode;\r\n            }else if(longestPathFromNbrNode > secondMax){\r\n                secondMax = longestPathFromNbrNode;\r\n            }\r\n        }\r\n        // update longestPathValue with the longest path that includes the current node\r\n        longestPathValue = Math.max(longestPathValue, max+secondMax+1);\r\n        return max+1;\r\n    }\r\n}",
    "javascript": "var longestPath = function(parent, s) {\r\n  const adjList = parent.reduce((adjList, parent, node) => {\r\n    if (parent < 0) return adjList;\r\n    adjList[parent].push(node);\r\n    return adjList;\r\n  }, new Array(parent.length).fill(0).map(() => []));\r\n  \r\n  let longest = 1;\r\n  \r\n  const getLongest = (node) => {\r\n    let maxChild1 = 0;\r\n    let maxChild2 = 0;\r\n    \r\n    adjList[node].forEach((child) => {\r\n      const childLength = getLongest(child);\r\n    \r\n\t  // child letter matches our node, so we can't use it\r\n      if (s[child] === s[node]) return;\r\n      \r\n\t  // compare and update the longest two child paths\r\n      if (childLength > maxChild1) {\r\n        maxChild2 = maxChild1;\r\n        maxChild1 = childLength;\r\n      } else if (childLength > maxChild2) {\r\n        maxChild2 = childLength;\r\n      }\r\n    });\r\n    \r\n\t// longest loop\r\n    longest = Math.max(longest, maxChild1 + maxChild2 + 1);\r\n    \r\n\t// return longest path up the tree\r\n    return 1 + maxChild1;\r\n  }\r\n  \r\n  getLongest(0);\r\n  \r\n  return longest;\r\n};"
  }
}
