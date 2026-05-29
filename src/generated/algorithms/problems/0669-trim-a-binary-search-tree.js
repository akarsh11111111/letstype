export default {
  "id": 669,
  "name": "Trim a Binary Search Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/trim-a-binary-search-tree",
  "relativeDir": "T/Trim a Binary Search Tree",
  "slug": "0669-trim-a-binary-search-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "java": 14,
    "python": 10,
    "javascript": 12
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    TreeNode* trimBST(TreeNode* root, int low, int high) {\r\n        if(!root) return NULL;\r\n        \r\n        root->left = trimBST(root->left, low, high);\r\n        root->right = trimBST(root->right, low, high);\r\n        \r\n        if(root->val < low){\r\n            if(root->right){\r\n                TreeNode* temp = root;\r\n                // delete root;\r\n                return temp->right;\r\n            }else{\r\n                return NULL;\r\n            }\r\n        }\r\n        if(root->val > high){\r\n            if(root->left){\r\n                TreeNode* temp = root;\r\n                // delete root;\r\n                return temp->left;\r\n            }else{\r\n                return NULL;\r\n            }\r\n        }\r\n        return root;\r\n    }\r\n};",
    "python": "// Runtime: 58 ms (Top 27.96%) | Memory: 20.40 MB (Top 38.8%)\r\n\r\nclass Solution:\r\n\tdef trimBST(self, root: TreeNode, low: int, high: int) -> TreeNode:\r\n\t\tif not root: return root\r\n\t\tif root.val < low: return self.trimBST(root.right, low, high)\r\n\t\tif root.val > high: return self.trimBST(root.left, low, high)\r\n\t\troot.left = self.trimBST(root.left, low, high)\r\n\t\troot.right = self.trimBST(root.right, low, high)\r\n\t\treturn root",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 45.6 MB (Top 46.04%)\r\nclass Solution {\r\n    public TreeNode trimBST(TreeNode root, int low, int high) {\r\n        if (root == null) return root;\r\n        while (root.val < low || root.val > high) {\r\n            root = root.val < low ? root.right : root.left;\r\n            if (root == null)\r\n                return root;\r\n        }\r\n        root.left = trimBST(root.left, low, high);\r\n        root.right = trimBST(root.right, low, high);\r\n        return root;\r\n    }\r\n}",
    "javascript": "// Runtime: 60 ms (Top 81.44%) | Memory: 47.50 MB (Top 87.63%)\r\n\r\nvar trimBST = function(root, low, high) {\r\n    if (!root) return null;\r\n    if (root.val < low) root = trimBST(root.right, low, high);\r\n    else if (root.val > high) root = trimBST(root.left, low, high);\r\n    else {\r\n        root.left = trimBST(root.left, low, high);\r\n        root.right = trimBST(root.right, low, high);\r\n    }\r\n    return root;\r\n};"
  }
}
