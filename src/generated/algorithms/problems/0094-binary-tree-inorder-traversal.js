export default {
  "id": 94,
  "name": "Binary Tree Inorder Traversal",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-tree-inorder-traversal",
  "relativeDir": "B/Binary Tree Inorder Traversal",
  "slug": "0094-binary-tree-inorder-traversal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 32,
    "python": 40,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 33.36%) | Memory: 8.90 MB (Top 28.05%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<int> inorderTraversal(TreeNode* root) {\r\n        vector<int> nodes;\r\n        stack<TreeNode*> todo;\r\n        while (root || !todo.empty()) {\r\n            while (root) {\r\n                todo.push(root);\r\n                root = root -> left;\r\n            }\r\n            root = todo.top();\r\n            todo.pop();\r\n            nodes.push_back(root -> val);\r\n            root = root -> right;\r\n        }\r\n        return nodes;\r\n    }\r\n};",
    "python": "from typing import List, Optional\r\n\r\n\r\nclass Solution:\r\n\t\"\"\"\r\n\tTime:   O(n)\r\n\tMemory: O(n)\r\n\t\"\"\"\r\n\r\n\tdef inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\r\n\t\tinorder = []\r\n\t\tstack = []\r\n\r\n\t\twhile stack or root is not None:\r\n\t\t\tif root:\r\n\t\t\t\tstack.append(root)\r\n\t\t\t\troot = root.left\r\n\t\t\telse:\r\n\t\t\t\tnode = stack.pop()\r\n\t\t\t\tinorder.append(node.val)\r\n\t\t\t\troot = node.right\r\n\r\n\t\treturn inorder\r\n\r\n\r\nclass Solution:\r\n\t\"\"\"\r\n\tTime:   O(n)\r\n\tMemory: O(n)\r\n\t\"\"\"\r\n\r\n\tdef inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\r\n\t\treturn list(self.inorder_generator(root))\r\n\r\n\t@classmethod\r\n\tdef inorder_generator(cls, tree: Optional[TreeNode]):\r\n\t\tif tree is not None:\r\n\t\t\tyield from cls.inorder_generator(tree.left)\r\n\t\t\tyield tree.val\r\n\t\t\tyield from cls.inorder_generator(tree.right)",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 40.83 MB (Top 42.1%)\r\n\r\n/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n *     int val;\r\n *     TreeNode left;\r\n *     TreeNode right;\r\n *     TreeNode() {}\r\n *     TreeNode(int val) { this.val = val; }\r\n *     TreeNode(int val, TreeNode left, TreeNode right) {\r\n *         this.val = val;\r\n *         this.left = left;\r\n *         this.right = right;\r\n *     }\r\n * }\r\n */\r\nclass Solution {\r\n    List<Integer> li = new LinkedList<Integer>();\r\n    public List<Integer> inorderTraversal(TreeNode root) {\r\n     if(root == null){\r\n         List<Integer> li = new LinkedList<Integer>();\r\n         return li ;\r\n     }\r\n     inorderTraversal(root.left);     \r\n     li.add(root.val);     \r\n     inorderTraversal(root.right);\r\n     return li;\r\n\r\n    }\r\n    \r\n}",
    "javascript": "// Runtime: 86 ms (Top 54.59%) | Memory: 41.8 MB (Top 88.92%)\r\nvar inorderTraversal = function(root) {\r\n    let result = [];\r\n    function traverse(node) {\r\n        if(!node) {\r\n            return;\r\n        }\r\n        traverse(node.left);\r\n        result.push(node.val);\r\n        traverse(node.right);\r\n    }\r\n    traverse(root);\r\n    return result;\r\n};"
  }
}
