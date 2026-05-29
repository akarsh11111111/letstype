export default {
  "id": 623,
  "name": "Add One Row to Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/add-one-row-to-tree",
  "relativeDir": "A/Add One Row to Tree",
  "slug": "0623-add-one-row-to-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 15,
    "python": 12,
    "javascript": 32
  },
  "languages": {
    "cpp": "#!/usr/bin/python\r\n# -*- coding: utf-8 -*-\r\n# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\n\r\n\r\nclass Solution:\r\n\r\n    def Solve(\r\n        self,\r\n        root,\r\n        val,\r\n        depth,\r\n        curr,\r\n        ):\r\n        if root == None:\r\n            return None\r\n        if depth == 1:\r\n            return TreeNode(val, root)\r\n        if curr == depth - 1:\r\n            (left, right) = (root.left, root.right)\r\n            (root.left, root.right) = (TreeNode(val, left),\r\n                    TreeNode(val, None, right))\r\n            return root\r\n        self.Solve(root.left, val, depth, curr + 1)\r\n        self.Solve(root.right, val, depth, curr + 1)\r\n        return root\r\n\r\n    def addOneRow(\r\n        self,\r\n        root,\r\n        val,\r\n        depth,\r\n        ):\r\n        return self.Solve(root, val, depth, 1)",
    "python": "// Runtime: 77 ms (Top 6.3%) | Memory: 18.50 MB (Top 98.9%)\r\n\r\nclass Solution:\r\n    def addOneRow(self, root: TreeNode, v: int, d: int) -> TreeNode:\r\n        if d == 1: return TreeNode(v, root, None)\r\n        elif d == 2:\r\n            root.left = TreeNode(v, root.left, None)\r\n            root.right = TreeNode(v, None, root.right)\r\n        else:\r\n            if root.left: self.addOneRow(root.left, v, d-1)\r\n            if root.right: self.addOneRow(root.right, v, d-1)\r\n        return root",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 44.40 MB (Top 37.52%)\r\n\r\nclass Solution {\r\n    public TreeNode addOneRow(TreeNode root, int v, int d) {\r\n        if (d == 1) return new TreeNode(v, root, null);\r\n        else if (d == 2) {\r\n            root.left = new TreeNode(v, root.left, null);\r\n            root.right = new TreeNode(v, null, root.right);\r\n        } else {\r\n            if (root.left != null) addOneRow(root.left, v, d-1);\r\n            if (root.right != null) addOneRow(root.right, v, d-1);\r\n        }\r\n        return root;\r\n    }\r\n}",
    "javascript": "// Runtime: 81 ms (Top 52.6%) | Memory: 48.75 MB (Top 19.3%)\r\n\r\n/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.left = (left===undefined ? null : left)\r\n *     this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n * @param {number} val\r\n * @param {number} depth\r\n * @return {TreeNode}\r\n */\r\nvar addOneRow = function(root, val, depth) {\r\n\tif (depth === 1) return new TreeNode(val, root);\r\n\r\n\tconst refactor = (node = root, currentDep = 1) => {\r\n\t\tif (!node) return;\r\n\t\tif (currentDep === depth - 1) {\r\n\t\t\tconst { left, right } = node;\r\n\t\t\tnode.left = new TreeNode(val, left);\r\n\t\t\tnode.right = new TreeNode(val, null, right);\r\n\t\t}\r\n\t\trefactor(node.left, currentDep + 1);\r\n\t\trefactor(node.right, currentDep + 1);\r\n\t};\r\n\trefactor();\r\n\treturn root;\r\n};"
  }
}
