export default {
  "id": 145,
  "name": "Binary Tree Postorder Traversal",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-tree-postorder-traversal",
  "relativeDir": "B/Binary Tree Postorder Traversal",
  "slug": "0145-binary-tree-postorder-traversal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 31,
    "python": 42,
    "javascript": 33
  },
  "languages": {
    "cpp": "class Solution {\r\n    void solve(TreeNode *root, vector<int> &ans){\r\n        if(root == NULL) return;\r\n        solve(root->left, ans);\r\n        solve(root->right, ans);\r\n        ans.push_back(root->val);\r\n    }\r\npublic:\r\n    vector<int> postorderTraversal(TreeNode* root) {\r\n        vector<int> ans;\r\n        solve(root, ans);\r\n        return ans;\r\n    }\r\n};",
    "python": "from typing import List, Optional\r\n\r\n\r\nclass Solution:\r\n\t\"\"\"\r\n\tTime:   O(n)\r\n\tMemory: O(n)\r\n\t\"\"\"\r\n\r\n\tdef postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\r\n\t\tif root is None:\r\n\t\t\treturn []\r\n\r\n\t\tpostorder = []\r\n\t\tstack = [root]\r\n\r\n\t\twhile stack:\r\n\t\t\tnode = stack.pop()\r\n\t\t\tpostorder.append(node.val)\r\n\t\t\tif node.left is not None:\r\n\t\t\t\tstack.append(node.left)\r\n\t\t\tif node.right is not None:\r\n\t\t\t\tstack.append(node.right)\r\n\r\n\t\treturn postorder[::-1]\r\n\r\n\r\nclass Solution:\r\n\t\"\"\"\r\n\tTime:   O(n)\r\n\tMemory: O(n)\r\n\t\"\"\"\r\n\r\n\tdef postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\r\n\t\treturn list(self.postorder_generator(root))\r\n\r\n\t@classmethod\r\n\tdef postorder_generator(cls, tree: Optional[TreeNode]):\r\n\t\tif tree is not None:\r\n\t\t\tyield from cls.postorder_generator(tree.left)\r\n\t\t\tyield from cls.postorder_generator(tree.right)\r\n\t\t\tyield tree.val",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 42.3 MB (Top 40.74%)\r\n/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n * int val;\r\n * TreeNode left;\r\n * TreeNode right;\r\n * TreeNode() {}\r\n * TreeNode(int val) { this.val = val; }\r\n * TreeNode(int val, TreeNode left, TreeNode right) {\r\n * this.val = val;\r\n * this.left = left;\r\n * this.right = right;\r\n * }\r\n * }\r\n */\r\nclass Solution {\r\n    List<Integer> res = new ArrayList<>();\r\n    public List<Integer> postorderTraversal(TreeNode root) {\r\n        traversal(root);\r\n        return res;\r\n    }\r\n\r\n    public void traversal(TreeNode root){\r\n        if(root == null)\r\n            return;\r\n        traversal(root.left);\r\n        traversal(root.right);\r\n        res.add(root.val);\r\n    }\r\n}",
    "javascript": "// Runtime: 72 ms (Top 78.56%) | Memory: 42.1 MB (Top 54.23%)\r\nclass Pair{\r\n    constructor(node, state){\r\n        this.node = node;\r\n        this.state = state;\r\n    }\r\n}\r\nvar postorderTraversal = function(root) {\r\n    let ans = [];\r\n    let st = []; // stack\r\n    root != null && st.push(new Pair(root, 1));\r\n\r\n    while(st.length > 0){\r\n        let top = st[st.length - 1];\r\n\r\n        if(top.state == 1){\r\n\r\n            top.state++;\r\n            if(top.node.left != null){\r\n                st.push(new Pair(top.node.left, 1))\r\n            }\r\n        } else if(top.state == 2){\r\n            top.state++;\r\n            if(top.node.right != null){\r\n                st.push(new Pair(top.node.right, 1))\r\n            }\r\n        } else{\r\n            ans.push(top.node.val);\r\n            st.pop();\r\n        }\r\n    }\r\n    return ans;\r\n};"
  }
}
