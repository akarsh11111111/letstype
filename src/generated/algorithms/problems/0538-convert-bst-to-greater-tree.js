export default {
  "id": 538,
  "name": "Convert BST to Greater Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/convert-bst-to-greater-tree",
  "relativeDir": "C/Convert BST to Greater Tree",
  "slug": "0538-convert-bst-to-greater-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 16,
    "java": 48,
    "python": 26,
    "javascript": 13
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int val = 0;\r\n    TreeNode* convertBST(TreeNode* root) {\r\n\r\n        if(root)\r\n        {\r\n            convertBST(root->right); // traverse right sub-tree\r\n            val += root->val; // add val\r\n            root->val = val; // update val\r\n            convertBST(root->left); // traverse left sub-tree\r\n        }\r\n        \r\n        return root;\r\n    }\r\n};",
    "python": "# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def convertBST(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\r\n        ans = []\r\n        def inorder(node):\r\n            if not node:\r\n                return node\r\n            inorder(node.left)\r\n            ans.append(node.val)\r\n            inorder(node.right)\r\n        def dfs(node):\r\n            if not node:\r\n                return None\r\n            idx = ans.index(node.val)\r\n            node.val = node.val + sum(ans[idx+1:])\r\n            dfs(node.left)\r\n            dfs(node.right)\r\n\r\n        inorder(root)\r\n        dfs(root)\r\n        return root",
    "java": "class Solution {\r\n    public TreeNode convertBST(TreeNode root) {\r\n    if(root!=null) {\r\n\r\n\r\n        List<Integer> nodesValues = new ArrayList<>();\r\n        helperNodesVales(root, nodesValues);\r\n        traverseAndAdd(root, nodesValues);\r\n\r\n        return root;\r\n    }\r\n        return null;\r\n    }\r\n\r\n    private void helperNodesVales(TreeNode root, List<Integer> nodesValues) {\r\n        if (root != null) {\r\n            nodesValues.add(root.val);\r\n        }\r\n        if (root.right != null) {\r\n            helperNodesVales(root.right, nodesValues);\r\n        }\r\n        if (root.left != null) {\r\n            helperNodesVales(root.left, nodesValues);\r\n        }\r\n        if (root == null) {\r\n            return;\r\n        }\r\n    }\r\n\r\n    private void traverseAndAdd(TreeNode root, List<Integer> nodesValues) {\r\n        if (root != null) {\r\n            int rootVal = root.val;\r\n            for (int i = 0; i < nodesValues.size(); i++) {\r\n                if (nodesValues.get(i) > rootVal)\r\n                    root.val += nodesValues.get(i);\r\n            }\r\n        }\r\n        if (root.right != null) {\r\n            traverseAndAdd(root.right, nodesValues);\r\n        }\r\n        if (root.left != null) {\r\n            traverseAndAdd(root.left, nodesValues);\r\n        }\r\n        if (root == null) {\r\n            return;\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 143 ms (Top 60.33%) | Memory: 51.8 MB (Top 40.50%)\r\nvar convertBST = function(root) {\r\n    let sum = 0;\r\n    const go = (node) => {\r\n        if (!node) return;\r\n        go(node.right);\r\n        sum += node.val;\r\n        node.val = sum;\r\n        go(node.left);\r\n    }\r\n    go(root);\r\n    return root;\r\n};"
  }
}
