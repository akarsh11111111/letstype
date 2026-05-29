export default {
  "id": 2236,
  "name": "Root Equals Sum of Children",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/root-equals-sum-of-children",
  "relativeDir": "R/Root Equals Sum of Children",
  "slug": "2236-root-equals-sum-of-children",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 9,
    "java": 8,
    "python": 3,
    "javascript": 5
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool checkTree(TreeNode* root) {\r\n        if(root->left->val+root->right->val==root->val){\r\n            return true;\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def checkTree(self, root: Optional[TreeNode]) -> bool:\r\n        return root.val == (root.left.val + root.right.val)",
    "java": "// Runtime: 1 ms (Top 77.34%) | Memory: 41.9 MB (Top 35.55%)\r\nclass Solution\r\n{\r\n    public boolean checkTree(TreeNode root)\r\n    {\r\n        return root.val == root.left.val + root.right.val; // O(1)\r\n    }\r\n}",
    "javascript": "// Runtime: 55 ms (Top 53.46%) | Memory: 42.60 MB (Top 83.59%)\r\n\r\nvar checkTree = function(root) {\r\n    return root.val === root.left.val + root.right.val;\r\n};"
  }
}
