export default {
  "id": 938,
  "name": "Range Sum of BST",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/range-sum-of-bst",
  "relativeDir": "R/Range Sum of BST",
  "slug": "0938-range-sum-of-bst",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 21,
    "python": 13,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 235 ms (Top 36.09%) | Memory: 64.6 MB (Top 92.35%)\r\nclass Solution {\r\npublic:\r\n\r\n    int solve(TreeNode* root, int low, int high){\r\n        if(root == NULL)\r\n            return 0;\r\n\r\n        int sum = 0;\r\n        if(low <= root->val && root->val <= high){\r\n            sum = root->val;\r\n        }\r\n\r\n        return sum + solve(root->left, low, high) + solve(root->right, low, high);\r\n    }\r\n\r\n    int rangeSumBST(TreeNode* root, int low, int high) {\r\n\r\n        return solve(root, low, high);\r\n    }\r\n};",
    "python": "// Runtime: 106 ms (Top 94.04%) | Memory: 24.40 MB (Top 92.45%)\r\n\r\nclass Solution:\r\n    def rangeSumBST(self, root, L, R):\r\n        if not root:\r\n            return 0\r\n        \r\n        if L <= root.val <= R:\r\n            return root.val + self.rangeSumBST(root.left, L, R) + self.rangeSumBST(root.right, L, R)\r\n        elif root.val < L:\r\n            return self.rangeSumBST(root.right, L, R)\r\n        else:\r\n            return self.rangeSumBST(root.left, L, R)",
    "java": "class Solution {\r\n    private int sum = 0;\r\n    public int rangeSumBST(TreeNode root, int low, int high) {\r\n        dfs(root, low, high);\r\n        return sum;\r\n    }\r\n    \r\n    public void dfs(TreeNode root, int low, int high){\r\n        if(root == null) return;\r\n        \r\n        if(root.val < low) dfs(root.right, low, high);\r\n        else if(root.val > high) dfs(root.left, low, high);\r\n        \r\n        if(root.val >= low && root.val <= high) {\r\n            sum += root.val;\r\n            dfs(root.left, low, high);\r\n            dfs(root.right, low, high);\r\n        }\r\n        \r\n    }\r\n}",
    "javascript": "// Runtime: 248 ms (Top 56.51%) | Memory: 95.8 MB (Top 75.37%)\r\nvar rangeSumBST = function(root, low, high) {\r\n    let sum = 0;\r\n    const summer = (root) => {\r\n        if(!root) {\r\n            return;\r\n        }\r\n\r\n        sum = root.val >= low && root.val <= high ? root.val + sum : sum;\r\n\r\n        summer(root.left)\r\n        summer(root.right)\r\n    }\r\n\r\n    summer(root);\r\n\r\n    return sum;\r\n};"
  }
}
