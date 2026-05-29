export default {
  "id": 222,
  "name": "Count Complete Tree Nodes",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-complete-tree-nodes",
  "relativeDir": "C/Count Complete Tree Nodes",
  "slug": "0222-count-complete-tree-nodes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 11,
    "java": 35,
    "python": 19,
    "javascript": 3
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int countNodes(TreeNode* root) {\r\n        if(root==nullptr) return 0;\r\n        \r\n        int left = countNodes(root->left);\r\n        int right = countNodes(root->right);\r\n        \r\n        return 1+left+right;\r\n    }\r\n};",
    "python": "// Runtime: 73 ms (Top 66.36%) | Memory: 23.80 MB (Top 18.91%)\r\n\r\nclass Solution:\r\n        # @param {TreeNode} root\r\n        # @return {integer}\r\n        def countNodes(self, root):\r\n            if not root:\r\n                return 0\r\n            leftDepth = self.getDepth(root.left)\r\n            rightDepth = self.getDepth(root.right)\r\n            if leftDepth == rightDepth:\r\n                return pow(2, leftDepth) + self.countNodes(root.right)\r\n            else:\r\n                return pow(2, rightDepth) + self.countNodes(root.left)\r\n    \r\n        def getDepth(self, root):\r\n            if not root:\r\n                return 0\r\n            return 1 + self.getDepth(root.left)",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 50.7 MB (Top 10.84%)\r\n/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n * int val;\r\n * TreeNode left;\r\n * TreeNode right;\r\n * TreeNode() {}\r\n * TreeNode(int val) { this.val = val; }\r\n * TreeNode(int val, TreeNode left, TreeNode right) {\r\n * this.val = val;\r\n * this.left = left;\r\n * this.right = right;\r\n * }\r\n * }\r\n */\r\nclass Solution {\r\n\r\n    static int count = 0;\r\n\r\n    static void Postorder(TreeNode root){\r\n        if(root == null){\r\n            return;\r\n        }\r\n        Postorder(root.left);\r\n        Postorder(root.right);\r\n        count++;\r\n    }\r\n\r\n    public int countNodes(TreeNode root) {\r\n        count = 0;\r\n        Postorder(root);\r\n        return count;\r\n    }\r\n}",
    "javascript": "var countNodes = function(root) {\r\n    return root === null ? 0 : countNodes(root.left) + countNodes(root.right) + 1;\r\n}"
  }
}
