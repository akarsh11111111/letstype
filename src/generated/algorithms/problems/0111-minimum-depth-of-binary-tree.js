export default {
  "id": 111,
  "name": "Minimum Depth of Binary Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-depth-of-binary-tree",
  "relativeDir": "M/Minimum Depth of Binary Tree",
  "slug": "0111-minimum-depth-of-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 29,
    "python": 20,
    "javascript": 15
  },
  "languages": {
    "cpp": "// Runtime: 480 ms (Top 20.84%) | Memory: 144.6 MB (Top 72.25%)\r\nclass Solution {\r\npublic:\r\n    void maxlevel(TreeNode* root,int level,int &ans){\r\n        if(!root)\r\n            return ;\r\n\r\n        if(!root->left && !root->right){\r\n            ans=min(level,ans);\r\n            return ;\r\n        }\r\n\r\n        maxlevel(root->left,level+1,ans);\r\n        maxlevel(root->right,level+1,ans);\r\n    }\r\n    int minDepth(TreeNode* root) {\r\n        if(!root)\r\n            return 0;\r\n\r\n        int ans=INT_MAX;\r\n        maxlevel(root,0,ans);\r\n        return ans+1;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def minDepth(self, root):\r\n        # Base case...\r\n        # If the subtree is empty i.e. root is NULL, return depth as 0...\r\n        if root is None:  return 0\r\n        # Initialize the depth of two subtrees...\r\n        leftDepth = self.minDepth(root.left)\r\n        rightDepth = self.minDepth(root.right)\r\n        # If the both subtrees are empty...\r\n        if root.left is None and root.right is None:\r\n            return 1\r\n        # If the left subtree is empty, return the depth of right subtree after adding 1 to it...\r\n        if root.left is None:\r\n            return 1 + rightDepth\r\n        # If the right subtree is empty, return the depth of left subtree after adding 1 to it...\r\n        if root.right is None:\r\n            return 1 + leftDepth\r\n        # When the two child function return its depth...\r\n        # Pick the minimum out of these two subtrees and return this value after adding 1 to it...\r\n        return min(leftDepth, rightDepth) + 1;    # Adding 1 is the current node which is the parent of the two subtrees...",
    "java": "/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n *     int val;\r\n *     TreeNode left;\r\n *     TreeNode right;\r\n *     TreeNode() {}\r\n *     TreeNode(int val) { this.val = val; }\r\n *     TreeNode(int val, TreeNode left, TreeNode right) {\r\n *         this.val = val;\r\n *         this.left = left;\r\n *         this.right = right;\r\n *     }\r\n * }\r\n */\r\nclass Solution {\r\n    public int minDepth(TreeNode root) {\r\n        if(root == null)\r\n            return 0;\r\n        \r\n        int left = minDepth(root.left);\r\n        int right = minDepth(root.right);\r\n        if(root.left == null)\r\n            return right+1;\r\n        if(root.right == null)\r\n            return left+1;\r\n        return Math.min(left, right)+1;\r\n    }\r\n}",
    "javascript": "var minDepth = function(root) {\r\n    if (!root){\r\n        return 0\r\n    }\r\n    if(root.left && root.right){\r\n        return Math.min(minDepth(root.left), minDepth(root.right)) + 1\r\n    }\r\n    if(root.right){\r\n        return minDepth(root.right) + 1\r\n    }\r\n    if(root.left){\r\n        return minDepth(root.left) + 1\r\n    }\r\n    return 1\r\n};"
  }
}
