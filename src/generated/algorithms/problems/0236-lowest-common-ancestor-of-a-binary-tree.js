export default {
  "id": 236,
  "name": "Lowest Common Ancestor of a Binary Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree",
  "relativeDir": "L/Lowest Common Ancestor of a Binary Tree",
  "slug": "0236-lowest-common-ancestor-of-a-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 36,
    "python": 17,
    "javascript": 9
  },
  "languages": {
    "cpp": "// Runtime: 23 ms (Top 59.57%) | Memory: 14.3 MB (Top 23.43%)\r\nclass Solution\r\n{\r\npublic:\r\n    TreeNode* lowestCommonAncestor(TreeNode* root, TreeNode* p, TreeNode* q)\r\n    {\r\n        if(!root)\r\n        {\r\n            return NULL;\r\n        }\r\n        if(root==p or root == q)\r\n        {\r\n            return root;\r\n        }\r\n        TreeNode *left=lowestCommonAncestor(root->left,p,q);\r\n        TreeNode *right=lowestCommonAncestor(root->right,p,q);\r\n        if(left and right) return root;\r\n        if(left) return left;\r\n        else return right;\r\n\r\n    }\r\n};",
    "python": "# Runtime: 197 ms (Top 13.70%) | Memory: 26.4 MB (Top 30.94%)\r\nclass Solution:\r\n    # @param {TreeNode} root\r\n    # @param {TreeNode} p\r\n    # @param {TreeNode} q\r\n    # @return {TreeNode}\r\n    def lowestCommonAncestor(self, root, p, q):\r\n        # escape condition\r\n        if (not root) or (root == p) or (root == q):\r\n            return root\r\n        # search left and right subtree\r\n        left = self.lowestCommonAncestor(root.left, p, q)\r\n        right = self.lowestCommonAncestor(root.right, p, q)\r\n        if left and right:\r\n            # both found, root is the LCA\r\n            return root\r\n        return left or right",
    "java": "/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n *     int val;\r\n *     TreeNode left;\r\n *     TreeNode right;\r\n *     TreeNode(int x) { val = x; }\r\n * }\r\n */\r\nclass Solution {\r\n    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {\r\n        List<TreeNode> path_to_p= new ArrayList<>();\r\n        List<TreeNode> path_to_q= new ArrayList<>();\r\n        getPath(root,p,path_to_p);\r\n        getPath(root,q,path_to_q);\r\n        int n=path_to_q.size()>path_to_p.size()?path_to_p.size():path_to_q.size();\r\n        TreeNode anscesstor=root;\r\n        for(int i=0;i<n;i++){\r\n            if(path_to_q.get(i)==path_to_p.get(i)) anscesstor=path_to_p.get(i);\r\n        }\r\n        return anscesstor;\r\n        \r\n        \r\n    }\r\n    \r\n    boolean getPath(TreeNode root, TreeNode target,List<TreeNode> list){\r\n        if(root==null) return false;\r\n        list.add(root);\r\n        if(root==target) return true;\r\n        if(getPath(root.left,target,list) || getPath(root.right,target,list)){\r\n            return true;\r\n        }\r\n        list.remove(list.size()-1);\r\n        return false;\r\n    }\r\n}",
    "javascript": "// Runtime: 139 ms (Top 26.90%) | Memory: 51.6 MB (Top 71.61%)\r\nvar lowestCommonAncestor = function(root, p, q) {\r\n    if(!root || root.val == p.val || root.val == q.val) return root;\r\n\r\n    let left = lowestCommonAncestor(root.left, p, q);\r\n    let right = lowestCommonAncestor(root.right, p, q);\r\n\r\n    return (left && right) ? root : left || right;\r\n};"
  }
}
