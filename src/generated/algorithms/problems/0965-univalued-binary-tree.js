export default {
  "id": 965,
  "name": "Univalued Binary Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/univalued-binary-tree",
  "relativeDir": "U/Univalued Binary Tree",
  "slug": "0965-univalued-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 21,
    "python": 23,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 8 ms (Top 19.98%) | Memory: 9.9 MB (Top 77.87%)\r\nclass Solution {\r\npublic:\r\n    bool recur(TreeNode* root, int value){\r\n        if(root==NULL)\r\n            return true;\r\n        if(root->val!=value){\r\n            return false;\r\n        }\r\n        return recur(root->left,value) &&recur(root->right,value);\r\n\r\n    }\r\n    bool isUnivalTree(TreeNode* root) {\r\n        if(root==NULL)\r\n            return true;\r\n        int value=root->val;\r\n        return recur(root,value);\r\n\r\n    }\r\n};",
    "python": "# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def isUnivalTree(self, root: Optional[TreeNode]) -> bool:\r\n        val1 = root.val\r\n        self.tracker = False\r\n        def dfs(root,val1):\r\n            if not root:\r\n                return \r\n            if root.val!=val1:\r\n                self.tracker=True\r\n            dfs(root.left,val1)\r\n            dfs(root.right,val1)\r\n            return \r\n        dfs(root,val1)\r\n        \r\n        if self.tracker == False:\r\n            return True\r\n        return False",
    "java": "class Solution {\r\n    boolean ans=true;\r\n    int firstVal=0;\r\n    public boolean isUnivalTree(TreeNode root) {\r\n        if(root==null)\r\n          return ans; \r\n        firstVal=root.val;\r\n        traversal(root);\r\n      return ans;\r\n    }\r\n  private void traversal(TreeNode root)\r\n  {\r\n    if(root==null)\r\n      return;\r\n    if(root.val!=firstVal)\r\n        ans=false;\r\n    traversal(root.left);\r\n    traversal(root.right);\r\n  }\r\n  \r\n}",
    "javascript": "// Runtime: 80 ms (Top 65.60%) | Memory: 42.1 MB (Top 90.67%)\r\nvar isUnivalTree = function(root) {\r\n    if (!root) {\r\n        return false;\r\n    }\r\n\r\n    const prev = root.val;\r\n    const nodes = [root];\r\n\r\n    for (const node of nodes) {\r\n        if (node.val !== prev) {\r\n            return false;\r\n        }\r\n\r\n        if (node.left) {\r\n            nodes.push(node.left);\r\n        }\r\n\r\n        if (node.right) {\r\n            nodes.push(node.right);\r\n        }\r\n    }\r\n\r\n    return true;\r\n};\r\n    ```"
  }
}
