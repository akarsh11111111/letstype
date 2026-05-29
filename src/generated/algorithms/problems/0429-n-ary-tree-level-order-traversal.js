export default {
  "id": 429,
  "name": "N-ary Tree Level Order Traversal",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/n-ary-tree-level-order-traversal",
  "relativeDir": "N/N-ary Tree Level Order Traversal",
  "slug": "0429-n-ary-tree-level-order-traversal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 19,
    "python": 16,
    "javascript": 20
  },
  "languages": {
    "cpp": "\r\nclass Solution {\r\npublic:\r\n    \r\n    vector<vector<int>> ans;\r\n    \r\n    vector<vector<int>> levelOrder(Node* root) {\r\n        \r\n        dfs(root, 0);\r\n        return ans;\r\n    }\r\n    \r\n    void dfs(Node* root, int level) {\r\n        \r\n        if(!root) {\r\n            return;\r\n        }\r\n        if(level == ans.size()) {\r\n            ans.push_back({});\r\n        }\r\n        ans[level].push_back(root->val);\r\n        for(auto i : root->children) {\r\n            dfs(i, level+1);\r\n        }\r\n        \r\n    }\r\n    \r\n};",
    "python": "from collections import defaultdict\r\nclass Solution:\r\n    def levelOrder(self, root: 'Node') -> List[List[int]]:\r\n        self.d=defaultdict(list)\r\n        def check(root,ind):\r\n            self.d[ind].append(root.val)\r\n            if root.children:\r\n                for x in root.children:\r\n                    check(x,ind+1)\r\n        if root==None:\r\n            return []\r\n        check(root,0)\r\n        l=[]\r\n        for x in sorted(self.d.keys()):\r\n            l.append(self.d[x])\r\n        return l",
    "java": "class Solution {\r\n    public List<List<Integer>> result= new ArrayList();\r\n    public List<List<Integer>> levelOrder(Node root) {\r\n       if(root==null) return result;\r\n        helper(root,0);\r\n        return result;\r\n    }\r\n    \r\n    private void helper(Node node,int level){\r\n       if(result.size()<=level){\r\n           result.add(new ArrayList());\r\n       }\r\n        result.get(level).add(node.val);\r\n        for(Node child:node.children){\r\n            helper(child,level+1);\r\n        }\r\n        \r\n    }\r\n}",
    "javascript": "var levelOrder = function(root) {\r\n    if(!root) return [];\r\n    \r\n    const Q  = [[root, 0]];\r\n    const op = [];\r\n    \r\n    while(Q.length) {\r\n        const [node, level] = Q.shift();\r\n        \r\n        if(op.length <= level) {\r\n            op[level] = [];\r\n        }\r\n        op[level].push(node.val);\r\n        \r\n        for(const child of node.children) {\r\n            Q.push([child, level + 1]);\r\n        }\r\n    }\r\n    return op;\r\n};"
  }
}
