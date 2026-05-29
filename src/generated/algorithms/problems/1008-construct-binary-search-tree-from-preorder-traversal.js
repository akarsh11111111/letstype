export default {
  "id": 1008,
  "name": "Construct Binary Search Tree from Preorder Traversal",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal",
  "relativeDir": "C/Construct Binary Search Tree from Preorder Traversal",
  "slug": "1008-construct-binary-search-tree-from-preorder-traversal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 20,
    "python": 18,
    "javascript": 15
  },
  "languages": {
    "cpp": "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    TreeNode* help(int &i,vector<int>& preorder, int bound ){\r\n        if(i==preorder.size() || preorder[i] > bound)\r\n            return NULL;\r\n         TreeNode* root = new TreeNode(preorder[i++]);\r\n         root->left = help(i,preorder,root->val);\r\n         root->right = help(i,preorder,bound);\r\n        return root;\r\n    }\r\n    TreeNode* bstFromPreorder(vector<int>& preorder) {\r\n     \r\n        int i=0;\r\n        return help(i,preorder,INT_MAX);\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef bstFromPreorder(self, preorder: List[int]) -> Optional[TreeNode]:\r\n\t\tif not preorder:\r\n\t\t\treturn None\r\n\t\tnode = preorder.pop(0)\r\n\t\troot = TreeNode(node)\r\n\t\tl = []\r\n\t\tr = []\r\n\r\n\t\tfor val in preorder:\r\n\t\t\tif val < node:\r\n\t\t\t\tl.append(val)\r\n\t\t\telse:\r\n\t\t\t\tr.append(val)\r\n\r\n\t\troot.left = self.bstFromPreorder(l)\r\n\t\troot.right =  self.bstFromPreorder(r)\r\n\t\treturn root",
    "java": "// Runtime: 1 ms (Top 66.41%) | Memory: 42.3 MB (Top 45.67%)\r\nclass Solution {\r\n    public TreeNode bstFromPreorder(int[] preorder) {\r\n        return bst(preorder, 0, preorder.length-1);\r\n    }\r\n\r\n    public TreeNode bst(int[] preorder, int start, int end){\r\n        if(start > end) return null;\r\n\r\n        TreeNode root = new TreeNode(preorder[start]);\r\n        int breakPoint = start+1;\r\n        while(breakPoint <= end && preorder[breakPoint] < preorder[start]){\r\n            breakPoint++;\r\n        }\r\n\r\n        root.left = bst(preorder, start+1, breakPoint-1);\r\n        root.right = bst(preorder, breakPoint, end);\r\n        return root;\r\n    }\r\n}",
    "javascript": "var bstFromPreorder = function(preorder) {\r\n  let head = new TreeNode(preorder[0]);\r\n  for (let i = 1, curr; i<preorder.length; i++) {\r\n     curr = head;\r\n     while (1) {\r\n        if (preorder[i]>curr.val) \r\n          if (curr.right !=null) { curr = curr.right; }\r\n          else { curr.right = new TreeNode(preorder[i]); break; }\r\n        else\r\n          if (curr.left !=null) { curr = curr.left; }\r\n          else { curr.left = new TreeNode(preorder[i]); break; }\r\n     } \r\n  } \r\n  return head;  \r\n};"
  }
}
