export default {
  "id": 1038,
  "name": "Binary Search Tree to Greater Sum Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree",
  "relativeDir": "B/Binary Search Tree to Greater Sum Tree",
  "slug": "1038-binary-search-tree-to-greater-sum-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 15,
    "python": 13,
    "javascript": 14
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 8.2 MB (Top 56.00%)\r\nclass Solution {\r\npublic:\r\n\r\n    int s = 0;\r\n\r\n    void solve(TreeNode* root){\r\n        if(!root) return;\r\n        solve(root->right);\r\n\r\n        root->val = s + root->val;\r\n        s = root->val;\r\n\r\n        solve(root->left);\r\n        return;\r\n    }\r\n\r\n    TreeNode* bstToGst(TreeNode* root) {\r\n        if(!root) return NULL;\r\n        solve(root);\r\n        return root;\r\n    }\r\n};",
    "python": "# Runtime: 36 ms (Top 83.6%) | Memory: 16.39 MB (Top 54.5%)\r\n\r\nclass Solution:\r\n    def bstToGst(self, root):\r\n        self.total = 0\r\n        def dfs(n):\r\n            if n:\r\n                dfs(n.right)\r\n                self.total +=  n.val\r\n                n.val       =  self.total\r\n                dfs(n.left)\r\n        dfs(root)\r\n        return root",
    "java": "class Solution {\r\n    int sum=0;\r\n    public TreeNode bstToGst(TreeNode root) {\r\n        if(root!=null){\r\n            bstToGst(root.right);\r\n            sum += root.val;\r\n            root.val = sum;\r\n            bstToGst(root.left);\r\n        }\r\n        return root;\r\n    }\r\n\r\n    \r\n   \r\n}",
    "javascript": "// Runtime: 106 ms (Top 21.51%) | Memory: 42.5 MB (Top 31.40%)\r\nvar bstToGst = function(root) {\r\n    let sum = 0;\r\n    const traverse = (r = root) => {\r\n        if(!r) return null;\r\n        traverse(r.right);\r\n        let temp = r.val;\r\n        r.val += sum;\r\n        sum += temp;\r\n        traverse(r.left);\r\n    }\r\n    traverse();\r\n    return root;\r\n};"
  }
}
