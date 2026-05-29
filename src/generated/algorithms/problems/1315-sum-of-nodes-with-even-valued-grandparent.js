export default {
  "id": 1315,
  "name": "Sum of Nodes with Even-Valued Grandparent",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent",
  "relativeDir": "S/Sum of Nodes with Even-Valued Grandparent",
  "slug": "1315-sum-of-nodes-with-even-valued-grandparent",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 16,
    "python": 10,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 47 ms (Top 96.11%) | Memory: 41.4 MB (Top 80.98%)\r\nclass Solution {\r\npublic:\r\n    void sumGparent(TreeNode* child, int& sum, TreeNode* parent, TreeNode* Gparent){\r\n        if(!child) return;\r\n        if(Gparent) if(Gparent->val % 2 ==0) sum += child->val;\r\n        sumGparent(child->left, sum, child, parent);\r\n        sumGparent(child->right, sum, child, parent);\r\n    }\r\n\r\n    int sumEvenGrandparent(TreeNode* root) {\r\n        if(!root) return 0;\r\n        int sum=0;\r\n        sumGparent(root, sum, NULL, NULL); // (child, sum, parent, grand-parent)\r\n        return sum;\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef sumEvenGrandparent(self, root: TreeNode) -> int:\r\n\r\n\t\tdef dfs(root, p, gp):\r\n\t\t\tif not root: return 0\r\n\t\t\tif gp and gp.val%2==0:\r\n\t\t\t\treturn root.val + dfs(root.left,root,p)+dfs(root.right,root,p)\r\n\t\t\treturn 0 + dfs(root.left,root,p)+dfs(root.right,root,p)\r\n\r\n\t\treturn dfs(root,None,None)",
    "java": "class Solution {\r\n    int sum=0;\r\n    public int sumEvenGrandparent(TreeNode root) {\r\n        dfs(root,null,null);\r\n        return sum;\r\n    }\r\n void dfs(TreeNode current, TreeNode parent, TreeNode grandParent) {\r\n        if (current == null) return; // base case \r\n        if (grandParent != null && grandParent.val % 2 == 0) {\r\n            sum += current.val;\r\n        }\r\n\t\t\t\t//cur->cur.left ||cur.right , parent=cur,grandPrarent=parent\r\n        dfs(current.left, current, parent)\r\n        dfs(current.right, current, parent);\r\n    }\r\n    }",
    "javascript": "const dfs = function(node, evenParent) {\r\n    if (!node) return 0;\r\n    \r\n    const isEvenNode = node.val % 2 === 0;\r\n    \r\n    const left = dfs(node.left, isEvenNode);\r\n    const right = dfs(node.right, isEvenNode);\r\n    \r\n    if (!evenParent) return left + right;\r\n    return left + right + (node.left ? node.left.val : 0) + (node.right ? node.right.val : 0);\r\n}\r\n\r\nvar sumEvenGrandparent = function(root) {\r\n    if (!root) return 0;\r\n    return dfs(root, false);\r\n};"
  }
}
