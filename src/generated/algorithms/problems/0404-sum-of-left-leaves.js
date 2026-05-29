export default {
  "id": 404,
  "name": "Sum of Left Leaves",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-left-leaves",
  "relativeDir": "S/Sum of Left Leaves",
  "slug": "0404-sum-of-left-leaves",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 15,
    "python": 12,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 12 ms (Top 15.64%) | Memory: 13.5 MB (Top 10.61%)\r\nclass Solution {\r\n    int sum=0;\r\npublic:\r\n    bool solve(TreeNode* root){\r\n        if(root==NULL) return false;\r\n        if(root->left==NULL && root->right==NULL) return true;\r\n        if(solve(root->left)) sum+=root->left->val;\r\n        solve(root->right);\r\n        return false;\r\n    }\r\n    int sumOfLeftLeaves(TreeNode* root) {\r\n        solve(root);\r\n        return sum;\r\n    }\r\n};",
    "python": "def is_leaf(x):\r\n    return x.left is None and x.right is None\r\n\r\nclass Solution:\r\n    def sumOfLeftLeaves(self, root: Optional[TreeNode]) -> int:\r\n        if root is None:\r\n            return 0\r\n        if root.left and is_leaf(root.left):\r\n            left = root.left.val\r\n        else:\r\n            left = self.sumOfLeftLeaves(root.left)\r\n        return left + self.sumOfLeftLeaves(root.right)",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.8 MB (Top 57.76%)\r\nclass Solution {\r\n    public int sumOfLeftLeaves(TreeNode root) {\r\n\r\n        if(root==null)\r\n            return 0;\r\n\r\n        if(root.left!=null && root.left.left==null && root.left.right==null){\r\n            return root.left.val + sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);\r\n        }else{\r\n            return sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);\r\n        }\r\n\r\n    }\r\n}",
    "javascript": "var sumOfLeftLeaves = function(root) {\r\n    let total = 0;\r\n    \r\n    const go = (node, isLeft) => {\r\n        if (isLeft && !node.left && !node.right) {\r\n            total += node.val;\r\n            return;\r\n        }\r\n        if (node.left) go(node.left, true);\r\n        if (node.right) go(node.right, false)\r\n    }\r\n    \r\n    go(root, false)\r\n    \r\n    return total;\r\n};"
  }
}
