export default {
  "id": 1026,
  "name": "Maximum Difference Between Node and Ancestor",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-difference-between-node-and-ancestor",
  "relativeDir": "M/Maximum Difference Between Node and Ancestor",
  "slug": "1026-maximum-difference-between-node-and-ancestor",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 34,
    "python": 12,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\nprivate:\r\n    int maxDiff;\r\n    pair <int, int> helper(TreeNode* root) {\r\n        if (root == NULL) return {INT_MAX, INT_MIN};\r\n        pair <int, int> L = helper(root -> left), R = helper(root -> right);\r\n        pair <int, int> minMax = {min(L.first, R.first), max(L.second, R.second)};\r\n        if (minMax.first != INT_MAX) maxDiff = max(maxDiff, max(abs(root -> val - minMax.first), abs(root -> val - minMax.second)));\r\n        return {min(root -> val, minMax.first), max(root -> val, minMax.second)};\r\n    }\r\npublic:\r\n    int maxAncestorDiff(TreeNode* root) {\r\n        maxDiff = INT_MIN;\r\n        helper(root);\r\n        return maxDiff;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxAncestorDiff(self, root: Optional[TreeNode]) -> int:\r\n        self.max_diff = float('-inf')\r\n        \r\n        def dfs(node,prev_min,prev_max):\r\n            if not node:\r\n                return\r\n            dfs(node.left,min(prev_min,node.val),max(prev_max,node.val))\r\n            dfs(node.right,min(prev_min,node.val),max(prev_max,node.val))\r\n            self.max_diff = max(abs(node.val-prev_min),abs(node.val-prev_max),self.max_diff)\r\n        dfs(root,root.val,root.val)\r\n        return self.max_diff",
    "java": "// Runtime: 1 ms (Top 70.91%) | Memory: 41.7 MB (Top 98.42%)\r\n/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n * int val;\r\n * TreeNode left;\r\n * TreeNode right;\r\n * TreeNode() {}\r\n * TreeNode(int val) { this.val = val; }\r\n * TreeNode(int val, TreeNode left, TreeNode right) {\r\n * this.val = val;\r\n * this.left = left;\r\n * this.right = right;\r\n * }\r\n * }\r\n */\r\nclass Solution {\r\n    public int maxAncestorDiff(TreeNode root) {\r\n\r\n        if (root == null) return 0;\r\n\r\n        return find(root, Integer.MAX_VALUE, Integer.MIN_VALUE);\r\n    }\r\n\r\n    public int find(TreeNode root, int min, int max) {\r\n        if (root == null) return Math.abs(max-min);\r\n\r\n        min = Math.min(min, root.val);\r\n        max = Math.max(max, root.val);\r\n\r\n        return Math.max(find(root.left, min, max), find(root.right, min, max));\r\n    }\r\n\r\n}",
    "javascript": "// Runtime: 117 ms (Top 31.87%) | Memory: 45.8 MB (Top 47.25%)\r\nvar maxAncestorDiff = function(root) {\r\n    let ans = 0;\r\n    const traverse = (r = root, mx = root.val, mn = root.val) => {\r\n        if(!r) return;\r\n        ans = Math.max(ans, Math.abs(mx - r.val), Math.abs(mn - r.val));\r\n        mx = Math.max(mx, r.val);\r\n        mn = Math.min(mn, r.val);\r\n        traverse(r.left, mx, mn);\r\n        traverse(r.right, mx, mn);\r\n    }\r\n    traverse();\r\n    return ans;\r\n};"
  }
}
