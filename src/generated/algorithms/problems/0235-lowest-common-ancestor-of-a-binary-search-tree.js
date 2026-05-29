export default {
  "id": 235,
  "name": "Lowest Common Ancestor of a Binary Search Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree",
  "relativeDir": "L/Lowest Common Ancestor of a Binary Search Tree",
  "slug": "0235-lowest-common-ancestor-of-a-binary-search-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 9,
    "java": 26,
    "python": 9,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 47 ms (Top 42.80%) | Memory: 23.4 MB (Top 13.91%)\r\nclass Solution {\r\npublic:\r\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q) {\r\n        if(p->val<root->val && q->val<root->val) return lowestCommonAncestor(root->left,p,q);\r\n        else if(p->val>root->val && q->val>root->val) return lowestCommonAncestor(root->right,p,q);\r\n        return root;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':\r\n          \r\n        if ((root.val >= p.val) and (root.val <= q.val)) or ((root.val >= q.val) and (root.val <= p.val)):\r\n            return root\r\n        elif (root.val > p.val):\r\n            return self.lowestCommonAncestor(root.left, p, q)\r\n        else:\r\n            return self.lowestCommonAncestor(root.right, p , q)",
    "java": "// Runtime: 6 ms (Top 35.9%) | Memory: 43.95 MB (Top 54.7%)\r\n\r\n/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n *     int val;\r\n *     TreeNode left;\r\n *     TreeNode right;\r\n *     TreeNode(int x) { val = x; }\r\n * }\r\n */\r\n\r\nclass Solution {\r\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\r\n        if(root == null || root == p || root == q)return root;\r\n\r\n        TreeNode left = lowestCommonAncestor(root.left, p , q);\r\n        TreeNode right = lowestCommonAncestor(root.right, p ,q);\r\n\r\n        if(left == null)return right;\r\n        if(right == null)return left;\r\n        else{\r\n            return root;\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 138 ms (Top 36.23%) | Memory: 52 MB (Top 81.19%)\r\nvar lowestCommonAncestor = function(root, p, q) {\r\n    while(root){\r\n        if(p.val>root.val && q.val>root.val){\r\n            root=root.right\r\n        }else if(p.val<root.val && q.val<root.val){\r\n            root=root.left\r\n        }else{\r\n            return root\r\n        }\r\n    }\r\n}"
  }
}
