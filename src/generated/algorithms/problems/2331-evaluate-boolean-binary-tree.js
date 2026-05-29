export default {
  "id": 2331,
  "name": "Evaluate Boolean Binary Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/evaluate-boolean-binary-tree",
  "relativeDir": "E/Evaluate Boolean Binary Tree",
  "slug": "2331-evaluate-boolean-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 8,
    "java": 12,
    "python": 13,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 12 ms (Top 56.49%) | Memory: 15.30 MB (Top 39.4%)\r\n\r\nclass Solution {\r\npublic:\r\n    bool evaluateTree(TreeNode* root) {\r\n        return (root->val < 2) ? root->val : (root->val == 2) ? evaluateTree(root->left) || evaluateTree(root->right) : evaluateTree(root->left) && evaluateTree(root->right);\r\n    }\r\n};",
    "python": "# Runtime: 98 ms (Top 35.75%) | Memory: 14.7 MB (Top 20.30%)\r\nclass Solution:\r\n    def evaluateTree(self, root: Optional[TreeNode]) -> bool:\r\n        def recur(node):\r\n            if not node.left and not node.right: #leaf node\r\n                return True if node.val == 1 else False\r\n            left = recur(node.left)\r\n            right = recur(node.right)\r\n            if node.val == 2: #if node is or\r\n                return left or right\r\n            if node.val == 3: #if node is and\r\n                return left and right\r\n        return recur(root)",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 42.4 MB (Top 93.53%)\r\nclass Solution {\r\n    public boolean evaluateTree(TreeNode root) {\r\n        if(root.val == 1)\r\n            return true;\r\n        if(root.val == 0)\r\n            return false;\r\n        if(root.val == 2)\r\n            return evaluateTree(root.left) || evaluateTree(root.right);\r\n        return evaluateTree(root.left) && evaluateTree(root.right);\r\n    }\r\n}",
    "javascript": "// Runtime: 129 ms (Top 23.56%) | Memory: 48.4 MB (Top 85.63%)\r\n/**\r\n * @param {TreeNode} root\r\n * @return {boolean}\r\n */\r\nvar evaluateTree = function(root) {\r\n  return root.val === 3 ? evaluateTree(root.left) && evaluateTree(root.right) :\r\n         root.val === 2 ? evaluateTree(root.left) || evaluateTree(root.right) :\r\n         root.val;\r\n};"
  }
}
