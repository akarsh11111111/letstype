export default {
  "id": 226,
  "name": "Invert Binary Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/invert-binary-tree",
  "relativeDir": "I/Invert Binary Tree",
  "slug": "0226-invert-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 21,
    "python": 14,
    "javascript": 7
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 9.6 MB (Top 79.69%)\r\nclass Solution {\r\npublic:\r\n    TreeNode* invertTree(TreeNode* root) {\r\n        if(root == NULL) return root;\r\n        TreeNode* temp = root->left;\r\n        root->left = root->right;\r\n        root->right = temp;\r\n        invertTree(root->left);\r\n        invertTree(root->right);\r\n        return root;\r\n    }\r\n};",
    "python": "# Runtime: 7 ms (Top 98.3%) | Memory: 13.26 MB (Top 67.3%)\r\n\r\nclass Solution(object):\r\n    def invertTree(self, root):\r\n        # Base case...\r\n        if root == None:\r\n            return root\r\n        # swapping process...\r\n        root.left, root.right = root.right, root.left\r\n        # Call the function recursively for the left subtree...\r\n        self.invertTree(root.left)\r\n        # Call the function recursively for the right subtree...\r\n        self.invertTree(root.right)\r\n        return root     # Return the root...",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.4 MB (Top 66.34%)\r\nclass Solution {\r\n    public TreeNode invertTree(TreeNode root) {\r\n\r\n        swap(root);\r\n        return root;\r\n    }\r\n\r\n    private static void swap(TreeNode current) {\r\n        if (current == null) {\r\n            return;\r\n        }\r\n\r\n        swap(current.left);\r\n        swap(current.right);\r\n\r\n        TreeNode temp = current.left;\r\n        current.left = current.right;\r\n        current.right = temp;\r\n    }\r\n}",
    "javascript": "var invertTree = function(root) {\r\n  if (!root) return root;\r\n    [root.left, root.right] = [root.right, root.left];\r\n    invertTree(root.right)\r\n    invertTree(root.left)\r\n     return root\r\n};"
  }
}
