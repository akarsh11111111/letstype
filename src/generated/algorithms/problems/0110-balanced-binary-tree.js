export default {
  "id": 110,
  "name": "Balanced Binary Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/balanced-binary-tree",
  "relativeDir": "B/Balanced Binary Tree",
  "slug": "0110-balanced-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 44,
    "python": 35,
    "javascript": 26
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isBalanced(TreeNode* root) {\r\n        // If the tree is empty, we can say it�s balanced...\r\n        if (root == NULL)  return true;\r\n        // Height Function will return -1, when it�s an unbalanced tree...\r\n\t\tif (Height(root) == -1)  return false;\r\n\t\treturn true;\r\n\t}\r\n    // Create a function to return the �height� of a current subtree using recursion...\r\n\tint Height(TreeNode* root) {\r\n        // Base case...\r\n\t\tif (root == NULL)  return 0;\r\n        // Height of left subtree...\r\n\t\tint leftHeight = Height(root->left);\r\n        // Height of height subtree...\r\n\t\tint rightHight = Height(root->right);\r\n        // In case of left subtree or right subtree unbalanced or their heights differ by more than �1�, return -1...\r\n\t\tif (leftHeight == -1 || rightHight == -1 || abs(leftHeight - rightHight) > 1)  return -1;\r\n        // Otherwise, return the height of this subtree as max(leftHeight, rightHight) + 1...\r\n\t\treturn max(leftHeight, rightHight) + 1;\r\n    }\r\n};",
    "python": "# Definition for a binary tree node.\r\nclass TreeNode:\r\n    def __init__(self, val=0, left=None, right=None):\r\n        self.val = val\r\n        self.left = left\r\n        self.right = right\r\n\r\n\r\nclass Solution:\r\n    def isBalanced(self, root: TreeNode) -> bool:\r\n\r\n        # Initialize the result to True\r\n        res = True\r\n\r\n        # DFS through the tree\r\n        def dfs(node, i):\r\n            nonlocal res\r\n\r\n            # If there isn't a node, return previous depth\r\n            if not node:\r\n                return i - 1\r\n\r\n            # Check depths of the left and right subtrees\r\n            left, right = dfs(node.left, i + 1), dfs(node.right, i + 1)\r\n\r\n            # If they are more than 1 difference, save False to the result\r\n            if abs(right - left) > 1:\r\n                res = False\r\n\r\n            # Return the max depth of both subtrees\r\n            return max(left, right)\r\n\r\n        dfs(root, 0)\r\n\r\n        return res",
    "java": "// Runtime: 86 ms (Top 5.00%) | Memory: 44 MB (Top 76.22%)\r\n/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n * int val;\r\n * TreeNode left;\r\n * TreeNode right;\r\n * TreeNode() {}\r\n * TreeNode(int val) { this.val = val; }\r\n * TreeNode(int val, TreeNode left, TreeNode right) {\r\n * this.val = val;\r\n * this.left = left;\r\n * this.right = right;\r\n * }\r\n * }\r\n */\r\nclass Solution {\r\n\r\n    public int treeHeight(TreeNode root){\r\n        if (root == null)\r\n            return 0;\r\n\r\n        int left = treeHeight(root.left);\r\n        int right = treeHeight(root.right);\r\n\r\n        return ( Math.max(left,right) + 1);\r\n\r\n    }\r\n\r\n    public boolean isBalanced(TreeNode root) {\r\n\r\n        if (root == null)\r\n            return true;\r\n\r\n        boolean leftBalanced = isBalanced( root.left);\r\n        boolean rightBalanced = isBalanced( root.right);\r\n        int leftHeight = treeHeight(root.left);\r\n        int rightHeight = treeHeight(root.right);\r\n\r\n        //Return true only when all conditions are true\r\n        return (leftBalanced && rightBalanced && Math.abs(leftHeight - rightHeight) <= 1);\r\n\r\n    }\r\n}",
    "javascript": "// Runtime: 112 ms (Top 53.69%) | Memory: 46.9 MB (Top 82.53%)\r\n/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n * this.val = (val===undefined ? 0 : val)\r\n * this.left = (left===undefined ? null : left)\r\n * this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n * @return {boolean}\r\n */\r\nvar isBalanced = function(root) {\r\n\r\n    let result=true;\r\n    function Dfs(root){\r\n        if(!root)return 0;\r\n        let left=Dfs(root.left)\r\n        let right=Dfs(root.right)\r\n        if(Math.abs(left-right)>1){result=false ;return;}\r\n        return 1+Math.max(left,right)\r\n    }\r\n    Dfs(root)\r\n    return result\r\n};"
  }
}
