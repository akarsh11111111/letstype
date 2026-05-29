export default {
  "id": 979,
  "name": "Distribute Coins in Binary Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/distribute-coins-in-binary-tree",
  "relativeDir": "D/Distribute Coins in Binary Tree",
  "slug": "0979-distribute-coins-in-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 17,
    "python": 20,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 10 ms (Top 18.75%) | Memory: 14.30 MB (Top 15.52%)\r\n\r\nclass Solution {\r\npublic:\r\n    \r\n    // calculate required moves in postorder manner\r\n    int traverse(TreeNode* root, int &moves)\r\n    {\r\n        if(!root) return 0;\r\n        \r\n        // left subtree excess amount coin\r\n        int left = traverse(root->left,moves);\r\n        \r\n        // right subtree excess amount coin\r\n        int right = traverse(root->right,moves);\r\n        \r\n        // moves needed to neutralize the excess amount of coins of left and right subtree\r\n        moves += abs(left) + abs(right);\r\n        \r\n        // current subtree including current root excess amount is \r\n        // total coins in the subtree - total nodes in the subtree\r\n        // left and right subtree excess amount coin + root coin -1\r\n        return root->val + left + right -1;\r\n    }\r\n    \r\n    int distributeCoins(TreeNode* root) {\r\n        \r\n        int moves = 0;\r\n        traverse(root,moves);\r\n        return moves;\r\n    }\r\n};",
    "python": "# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def distributeCoins(self, root: Optional[TreeNode]) -> int:\r\n        \r\n        def dfs(root):\r\n            if not root:\r\n                return 0,0\r\n            \r\n            net_left,left_walk = dfs(root.left)\r\n            net_right,right_walk = dfs(root.right)\r\n            \r\n\t\t\t# if any node has extra or deficiency in both cases there has to be a walk of abs(extra) or abs(deficiency)\r\n\t\t\t\r\n            return net_left+net_right+(root.val-1), left_walk+right_walk+abs(net_left)+abs(net_right)\r\n        return dfs(root)[1]",
    "java": "// Runtime: 1 ms (Top 58.67%) | Memory: 43.1 MB (Top 15.04%)\r\nclass Solution {\r\n    int count = 0;\r\n        public int helper(TreeNode root)\r\n        {\r\n            if(root == null)\r\n                return 0;\r\n            int left = helper(root.left);\r\n            int right = helper(root.right);\r\n            count+= Math.abs(left)+Math.abs(right);\r\n            return (left+right+root.val-1);\r\n        }\r\n        public int distributeCoins(TreeNode root) {\r\n            helper(root);\r\n            return count;\r\n        }\r\n}",
    "javascript": "// Runtime: 138 ms (Top 8.82%) | Memory: 44.3 MB (Top 85.29%)\r\nvar distributeCoins = function(root) {\r\n    var moves = 0;\r\n    postorder(root);\r\n    return moves;\r\n\r\n    function postorder(node){\r\n        if(!node)\r\n            return 0;\r\n\r\n        const subTotal = postorder(node.left) + postorder(node.right);\r\n        const result = node.val - 1 + subTotal;\r\n        moves += Math.abs(result);\r\n\r\n        return result;\r\n\r\n    }\r\n};"
  }
}
