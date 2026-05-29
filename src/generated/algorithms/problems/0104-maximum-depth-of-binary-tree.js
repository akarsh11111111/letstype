export default {
  "id": 104,
  "name": "Maximum Depth of Binary Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-depth-of-binary-tree",
  "relativeDir": "M/Maximum Depth of Binary Tree",
  "slug": "0104-maximum-depth-of-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 10,
    "java": 11,
    "python": 19,
    "javascript": 10
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 96.96%) | Memory: 18.9 MB (Top 14.27%)\r\nclass Solution {\r\npublic:\r\n    int maxDepth(TreeNode* root) {\r\n        if(root == NULL) return 0;\r\n        int left = maxDepth(root->left);\r\n        int right = maxDepth(root->right);\r\n        return max(left, right) + 1;\r\n    }\r\n};",
    "python": "# Runtime: 47 ms (Top 88.16%) | Memory: 16.3 MB (Top 23.73%)\r\nclass Solution(object):\r\n    def maxDepth(self, root):\r\n        \"\"\"\r\n        :type root: TreeNode\r\n        :rtype: int\r\n        \"\"\"\r\n        result = 0\r\n        depths = []\r\n        self.handler(root, result, depths)\r\n        return max(depths)\r\n\r\n    def handler(self, root, result, depths):\r\n        if root:\r\n            result += 1\r\n            self.handler(root.left, result, depths)\r\n            self.handler(root.right, result, depths)\r\n        else:\r\n            depths.append(result)",
    "java": "class Solution {\r\n    public int maxDepth(TreeNode root) {\r\n        // Base Condition\r\n        if(root == null) return 0;\r\n        // Hypothesis\r\n        int left = maxDepth(root.left);\r\n        int right = maxDepth(root.right);\r\n        // Induction\r\n        return Math.max(left, right) + 1;\r\n    }\r\n}",
    "javascript": "var maxDepth = function(root) {\r\n    if(root == null) return 0\r\n    \r\n    let leftDepth = maxDepth(root.left)\r\n    let rightDepth = maxDepth(root.right)\r\n    \r\n    let ans = Math.max(leftDepth,rightDepth) + 1\r\n    \r\n    return ans\r\n};"
  }
}
