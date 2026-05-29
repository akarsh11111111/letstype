export default {
  "id": 101,
  "name": "Symmetric Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/symmetric-tree",
  "relativeDir": "S/Symmetric Tree",
  "slug": "0101-symmetric-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 14,
    "python": 14,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 94.24%) | Memory: 16.5 MB (Top 47.31%)\r\nclass Solution {\r\npublic:\r\n\r\n    bool mirror(TreeNode* root1, TreeNode* root2){\r\n        if(root1==NULL and root2==NULL) return true;\r\n        if(root1==NULL or root2==NULL) return false;\r\n\r\n        if(root1->val!=root2->val) return false;\r\n\r\n        return mirror(root1->left, root2->right) and mirror(root1->right,root2->left);\r\n    }\r\n\r\n    bool isSymmetric(TreeNode* root) {\r\n        if(root==NULL) return true;\r\n\r\n        return mirror(root->left,root->right);\r\n    }\r\n};",
    "python": "# Runtime: 50 ms (Top 60.40%) | Memory: 13.9 MB (Top 94.25%)\r\n\r\nclass Solution:\r\n    def isSymmetric(self, root: Optional[TreeNode]) -> bool:\r\n        return root is None or self.findSymmetric(root.left, root.right)\r\n\r\n    def findSymmetric(self, left, right):\r\n        if (left is None or right is None):\r\n            return left == right\r\n\r\n        if (left.val != right.val):\r\n            return False\r\n\r\n        return self.findSymmetric(left.left, right.right) and self.findSymmetric(left.right, right.left)",
    "java": "// Runtime: 1 ms (Top 64.02%) | Memory: 42.7 MB (Top 25.40%)\r\nclass Solution {\r\n    public boolean isSymmetric(TreeNode root) {\r\n        return isSymmetric(root.left,root.right);\r\n    }\r\n\r\n    public boolean isSymmetric(TreeNode rootLeft, TreeNode rootRight) {\r\n        if(rootLeft == null && rootRight == null) {return true;}\r\n        if(rootLeft == null || rootRight == null) {return false;}\r\n        if (rootLeft.val != rootRight.val) {return false;}\r\n        else\r\n            return isSymmetric(rootLeft.right, rootRight.left) && isSymmetric(rootLeft.left, rootRight.right);\r\n    }\r\n}",
    "javascript": "// Runtime: 104 ms (Top 51.21%) | Memory: 44.5 MB (Top 57.00%)\r\nvar isSymmetric = function(root) {\r\n    return helper(root.left, root.right);\r\n\r\n    function helper(left, right){\r\n        if(!left && !right) return true;\r\n        if((!left && right) || (left && !right) || (left.val !== right.val)) return false;\r\n        return helper(left.left, right.right) && helper(left.right, right.left)\r\n    }\r\n};"
  }
}
