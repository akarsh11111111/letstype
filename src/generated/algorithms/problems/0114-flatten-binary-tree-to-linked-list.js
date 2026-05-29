export default {
  "id": 114,
  "name": "Flatten Binary Tree to Linked List",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list",
  "relativeDir": "F/Flatten Binary Tree to Linked List",
  "slug": "0114-flatten-binary-tree-to-linked-list",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 18,
    "python": 28,
    "javascript": 36
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    TreeNode* prev= NULL;\r\n    \r\n    void flatten(TreeNode* root) {\r\n        if(root==NULL) return;\r\n        \r\n        flatten(root->right);\r\n        flatten(root->left);\r\n        \r\n        root->right=prev;\r\n        root->left= NULL;\r\n        prev=root;\r\n    }\r\n};",
    "python": "# Runtime: 59 ms (Top 52.37%) | Memory: 15.1 MB (Top 89.03%)\r\n#Call the right of the tree node till the node root left and right is not None\r\n#After reaching the bottom of the tree make the root.right = prev and\r\n#root.left = None and then prev = None\r\n#Initially prev will point to None but this is used to point the previously visited root node\r\n#Prev pointer helps us to change the values from left to right\r\nclass Solution:\r\n    def flatten(self, root: Optional[TreeNode]) -> None:\r\n        \"\"\"\r\n        Do not return anything, modify root in-place instead.\r\n        \"\"\"\r\n        prev = None #You can also define that variable inside the init function using self keyword\r\n        def dfs(root):\r\n            nonlocal prev\r\n\r\n            if not root:\r\n                return\r\n\r\n            dfs(root.right)\r\n            dfs(root.left)\r\n\r\n            root.right = prev\r\n            root.left = None\r\n            prev = root\r\n\r\n        dfs(root)\r\n# If the above solution is hard to understand than one can do level order traversal\r\n#Using Stack DS but this will increase the space complexity to O(N).",
    "java": "class Solution {\r\n    public void flatten(TreeNode root) {\r\n        TreeNode curr=root;\r\n        while(curr!=null)\r\n        {\r\n            if(curr.left!=null)\r\n            {\r\n               TreeNode prev=curr.left;\r\n               while(prev.right!=null)\r\n                   prev=prev.right;\r\n               prev.right=curr.right;\r\n               curr.right=curr.left; \r\n               curr.left=null; \r\n            }\r\n            curr=curr.right;\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 134 ms (Top 14.04%) | Memory: 45 MB (Top 18.98%)\r\n/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n * this.val = (val===undefined ? 0 : val)\r\n * this.left = (left===undefined ? null : left)\r\n * this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n * @return {void} Do not return anything, modify root in-place instead.\r\n */\r\nvar flatten = function(root) {\r\n    const dfs = (node) => {\r\n        if (!node) return\r\n\r\n        if (!node.left && !node.right) return node\r\n\r\n        const leftNode = node.left\r\n        const rightNode = node.right\r\n\r\n        const leftTree = dfs(leftNode)\r\n        const rightTree = dfs(rightNode)\r\n\r\n        if (leftTree) leftTree.right = rightNode\r\n\r\n        node.left = null\r\n        node.right = leftNode || rightNode\r\n\r\n        return rightTree || leftTree\r\n    }\r\n\r\n    dfs(root)\r\n    return root\r\n};"
  }
}
