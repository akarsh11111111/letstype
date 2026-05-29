export default {
  "id": 559,
  "name": "Maximum Depth of N-ary Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-depth-of-n-ary-tree",
  "relativeDir": "M/Maximum Depth of N-ary Tree",
  "slug": "0559-maximum-depth-of-n-ary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 16,
    "python": 47,
    "javascript": 34
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int maxDepth(Node* root) \r\n    {\r\n        if(root == NULL)\r\n        {\r\n            return 0;\r\n        }\r\n        int dep = 1, mx = INT_MIN;\r\n        helper(root, dep, mx);\r\n        return mx;\r\n    }\r\n    \r\n    void helper(Node *root, int dep, int& mx)\r\n    {\r\n        if(root->children.size() == 0)\r\n        {\r\n            mx = max(mx, dep);\r\n        }\r\n        for(int i = 0 ; i<root->children.size() ; i++)\r\n        {\r\n            helper(root->children[i], dep+1, mx);\r\n        }\r\n    }\r\n};",
    "python": "\"\"\"\r\n# Definition for a Node.\r\nclass Node:\r\n    def __init__(self, val=None, children=None):\r\n        self.val = val\r\n        self.children = children\r\n\"\"\"\r\n\r\n#DFS\r\nclass Solution:\r\n    def maxDepth(self, root: 'Node') -> int:\r\n        if root is None:\r\n            return 0\r\n        def dfs(r):\r\n            \r\n            if not r.children:\r\n                return 1\r\n            depth = 0\r\n            for child in r.children:\r\n                depth = max(depth, dfs(child) + 1)\r\n            \r\n            return depth\r\n\r\n        return dfs(root)\r\n\t\t\r\n\t\t\r\n#BFS \r\nclass Solution:\r\n    def maxDepth(self, root: 'Node') -> int:\r\n        if root is None:\r\n            return 0\r\n        def bfs(r):\r\n            \r\n            q = []\r\n            q.append(root)\r\n            level = 0\r\n            while q != []:\r\n                    num_nodes = len(q)\r\n                    level += 1\r\n                    for _ in  range(num_nodes):\r\n                        node = q.pop(0)\r\n\r\n                        for child in node.children:\r\n                            q.append(child)\r\n            return level\r\n\r\n        return bfs(root)",
    "java": "class Solution {\r\n    public int maxDepth(Node root) {\r\n        if (root == null) return 0;\r\n        int[] max = new int[]{0};\r\n        dfs(root,1,max);\r\n        return max[0];\r\n    }\r\n    public static void dfs(Node root, int depth, int[] max) {\r\n        if (depth>max[0]) max[0] = depth;\r\n        if(root==null){\r\n            return;\r\n        }\r\n        ++depth;\r\n        for(Node n:root.children) dfs(n, depth, max);\r\n    }\r\n}",
    "javascript": "// Runtime: 106 ms (Top 57.76%) | Memory: 45.2 MB (Top 47.13%)\r\n/**\r\n * // Definition for a Node.\r\n * function Node(val,children) {\r\n * this.val = val;\r\n * this.children = children;\r\n * };\r\n */\r\n\r\n/**\r\n * @param {Node|null} root\r\n * @return {number}\r\n */\r\nvar maxDepth = function(root) {\r\n  let max = 0;\r\n\r\n  if (!root) {\r\n    return max;\r\n  }\r\n\r\n  const search = (root, index) => {\r\n    max = Math.max(index, max);\r\n\r\n    if (root?.children && root?.children.length > 0) {\r\n      for (let i = 0; i < root.children.length; i++) {\r\n        search(root.children[i], index+1);\r\n      }\r\n    }\r\n  }\r\n\r\n  search(root, 1);\r\n\r\n  return max;\r\n};"
  }
}
