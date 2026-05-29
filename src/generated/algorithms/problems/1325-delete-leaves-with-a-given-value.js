export default {
  "id": 1325,
  "name": "Delete Leaves With a Given Value",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/delete-leaves-with-a-given-value",
  "relativeDir": "D/Delete Leaves With a Given Value",
  "slug": "1325-delete-leaves-with-a-given-value",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 31,
    "java": 11,
    "python": 9,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 43 ms (Top 7.25%) | Memory: 21.8 MB (Top 63.99%)\r\n\r\n/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n * int val;\r\n * TreeNode *left;\r\n * TreeNode *right;\r\n * TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    TreeNode* removeLeafNodes(TreeNode* root, int target) {\r\n        if(root==NULL || root->left == NULL && root->right == NULL && root->val == target)\r\n            return NULL;\r\n\r\n        root->left = removeLeafNodes(root->left,target);\r\n        root->right = removeLeafNodes(root->right,target);\r\n\r\n        if(root->left == NULL && root->right == NULL && root->val == target)\r\n        {\r\n            return NULL;\r\n        }\r\n\r\n        return root;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def removeLeafNodes(self, root: Optional[TreeNode], target: int) -> Optional[TreeNode]:\r\n        if not root:\r\n            return None\r\n        root.left = self.removeLeafNodes(root.left, target)\r\n        root.right = self.removeLeafNodes(root.right, target)\r\n        if not root.left and not root.right and root.val == target:\r\n            return None\r\n        return root",
    "java": "class Solution {\r\n    public TreeNode removeLeafNodes(TreeNode root, int target) {\r\n        if(root==null)\r\n            return root;\r\n        root.left = removeLeafNodes(root.left,target);\r\n        root.right = removeLeafNodes(root.right,target);\r\n        if(root.left == null && root.right == null && root.val == target)\r\n            root = null;\r\n        return root;\r\n    }\r\n}",
    "javascript": "// Runtime: 148 ms (Top 30.20%) | Memory: 47.4 MB (Top 67.11%)\r\nvar removeLeafNodes = function(root, target) {\r\n    const parent = new TreeNode(-1, root, null);\r\n\r\n    const traverse = (r = root, p = parent, child = -1) => {\r\n        if(!r) return null;\r\n        traverse(r.left, r, -1);\r\n        traverse(r.right, r, 1);\r\n        if(r.left == null && r.right == null && r.val == target) {\r\n            if(child == -1) p.left = null;\r\n            else p.right = null;\r\n        }\r\n    }\r\n    traverse();\r\n    return parent.left;\r\n};"
  }
}
