export default {
  "id": 144,
  "name": "Binary Tree Preorder Traversal",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-tree-preorder-traversal",
  "relativeDir": "B/Binary Tree Preorder Traversal",
  "slug": "0144-binary-tree-preorder-traversal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 21,
    "python": 43,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution {\r\n    void solve(TreeNode *root, vector<int> &ans){\r\n        if(root == NULL) return;\r\n        ans.push_back(root->val);\r\n        solve(root->left, ans);\r\n        solve(root->right, ans);\r\n    }\r\npublic:\r\n    vector<int> preorderTraversal(TreeNode* root) {\r\n        vector<int> ans;\r\n        solve(root, ans);\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 58 ms (Top 23.56%) | Memory: 13.9 MB (Top 60.28%)\r\nfrom collections import deque\r\nfrom typing import List, Optional\r\n\r\nclass Solution:\r\n    \"\"\"\r\n    Time: O(n)\r\n    Memory: O(n)\r\n    \"\"\"\r\n\r\n    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\r\n        if root is None:\r\n            return []\r\n\r\n        queue = deque([root])\r\n        preorder = []\r\n\r\n        while queue:\r\n            node = queue.pop()\r\n            preorder.append(node.val)\r\n\r\n            if node.right is not None:\r\n                queue.append(node.right)\r\n            if node.left is not None:\r\n                queue.append(node.left)\r\n\r\n        return preorder\r\n\r\nclass Solution:\r\n    \"\"\"\r\n    Time: O(n)\r\n    Memory: O(n)\r\n    \"\"\"\r\n\r\n    def preorderTraversal(self, root: Optional[TreeNode]) -> List[int]:\r\n        return list(self.preorder_generator(root))\r\n\r\n    @classmethod\r\n    def preorder_generator(cls, tree: Optional[TreeNode]):\r\n        if tree is not None:\r\n            yield tree.val\r\n            yield from cls.preorder_generator(tree.left)\r\n            yield from cls.preorder_generator(tree.right)",
    "java": "class Solution {\r\n     public List<Integer> preorderTraversal(TreeNode root) {\r\n        List<Integer> result = new ArrayList<>();\r\n        preorderTraversal2(root, result);\r\n        return result;\r\n    }\r\n\r\n\r\n    public List<Integer> preorderTraversal2(TreeNode root,List<Integer> result) {\r\n        if(root!=null){\r\n               result.add(root.val);\r\n            if(root.left!=null){\r\n                preorderTraversal2(root.left,result);\r\n            }\r\n            if(root.right!=null){\r\n                preorderTraversal2(root.right,result);\r\n            }\r\n        }\r\n        return result;\r\n    }\r\n}",
    "javascript": "var preorderTraversal = function(root) {\r\n    let res = []\r\n    \r\n    const check = node => {\r\n        if(node === null) return\r\n        else res.push(node.val)\r\n        \r\n        if(node.left !== null) check(node.left)\r\n        if(node.right !== null) check(node.right)\r\n    }\r\n    \r\n    check(root)\r\n    \r\n    return res\r\n};"
  }
}
