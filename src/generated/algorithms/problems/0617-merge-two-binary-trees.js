export default {
  "id": 617,
  "name": "Merge Two Binary Trees",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/merge-two-binary-trees",
  "relativeDir": "M/Merge Two Binary Trees",
  "slug": "0617-merge-two-binary-trees",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "python": 22,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 83 ms (Top 22.08%) | Memory: 32.4 MB (Top 61.23%)\r\n/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n * int val;\r\n * TreeNode *left;\r\n * TreeNode *right;\r\n * TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    TreeNode* mergeTrees(TreeNode* root1, TreeNode* root2) {\r\n        if(root1==NULL) return root2;\r\n        if(root2==NULL) return root1;\r\n        root1->val+=root2->val;\r\n        root1->left=mergeTrees(root1->left,root2->left);\r\n        root1->right=mergeTrees(root1->right,root2->right);\r\n        return root1;\r\n    }\r\n};",
    "python": "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    TreeNode* mergeTrees(TreeNode* root1, TreeNode* root2) {\r\n        if(root1==NULL) return root2;\r\n        if(root2==NULL) return root1;\r\n        root1->val+=root2->val;\r\n        root1->left=mergeTrees(root1->left,root2->left);\r\n        root1->right=mergeTrees(root1->right,root2->right);\r\n        return root1;\r\n    }\r\n};",
    "javascript": "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    TreeNode* mergeTrees(TreeNode* root1, TreeNode* root2) {\r\n        if(root1==NULL) return root2;\r\n        if(root2==NULL) return root1;\r\n        root1->val+=root2->val;\r\n        root1->left=mergeTrees(root1->left,root2->left);\r\n        root1->right=mergeTrees(root1->right,root2->right);\r\n        return root1;\r\n    }\r\n};"
  }
}
