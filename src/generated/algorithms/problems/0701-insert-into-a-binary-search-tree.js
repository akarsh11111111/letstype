export default {
  "id": 701,
  "name": "Insert into a Binary Search Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/insert-into-a-binary-search-tree",
  "relativeDir": "I/Insert into a Binary Search Tree",
  "slug": "0701-insert-into-a-binary-search-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 11,
    "python": 11,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 204 ms (Top 5.17%) | Memory: 57 MB (Top 48.48%)\r\nclass Solution {\r\npublic:\r\n    TreeNode* insertIntoBST(TreeNode* root, int val) {\r\n        if(root==NULL) return new TreeNode(val);\r\n        TreeNode* node = root;\r\n        while(true){\r\n            if(val>=node->val){\r\n                if(node->right) node = node->right;\r\n                else{\r\n                    node->right = new TreeNode(val);\r\n                    break;\r\n                }\r\n            }\r\n            else{\r\n                if(node->left) node = node->left;\r\n                else{\r\n                    node->left = new TreeNode(val);\r\n                    break;\r\n                }\r\n            }\r\n        }\r\n        return root;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def insertIntoBST(self, root, val):\r\n        if not root:\r\n            return TreeNode(val)\r\n      \r\n        if val<root.val:\r\n            root.left = self.insertIntoBST(root.left, val)\r\n        else:\r\n            root.right = self.insertIntoBST(root.right, val)\r\n  \r\n        return root",
    "java": "class Solution {\r\n    public TreeNode insertIntoBST(TreeNode root, int val) {\r\n        if(root == null) return new TreeNode(val);\r\n      \r\n     if(root.val > val) root.left = insertIntoBST(root.left, val);\r\n      \r\n      else root.right = insertIntoBST(root.right, val);\r\n      \r\n      return root;\r\n    }\r\n}",
    "javascript": "var insertIntoBST = function(root, val) {\r\n    \r\n    if (root == null) {\r\n        return new TreeNode(val);\r\n    }\r\n    \r\n    if(val < root.val) {\r\n        root.left = insertIntoBST(root.left, val);\r\n    } else {\r\n        root.right = insertIntoBST(root.right, val);\r\n    }\r\n    \r\n    return root;\r\n};"
  }
}
