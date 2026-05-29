export default {
  "id": 98,
  "name": "Validate Binary Search Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/validate-binary-search-tree",
  "relativeDir": "V/Validate Binary Search Tree",
  "slug": "0098-validate-binary-search-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 18,
    "python": 18,
    "javascript": 27
  },
  "languages": {
    "cpp": "// We know inorder traversal of BST is always sorted, so we are just finding inorder traversal and check whether it is in sorted manner or not, but only using const space using prev pointer.\r\nclass Solution {\r\npublic:\r\n    TreeNode* prev;\r\n    Solution(){\r\n        prev = NULL;\r\n    }\r\n    bool isValidBST(TreeNode* root) {\r\n        if (root == NULL)\r\n            return true;\r\n        bool a = isValidBST(root->left);\r\n        if (!a)\r\n            return false;\r\n        if (prev != NULL)\r\n        {\r\n            if (prev->val >= root->val)\r\n                return false;\r\n        }\r\n        prev = root;\r\n        return isValidBST(root->right);\r\n    }\r\n};",
    "python": "# Runtime: 89 ms (Top 18.35%) | Memory: 16.5 MB (Top 80.77%)\r\n# Definition for a binary tree node.\r\n# class TreeNode:\r\n# def __init__(self, val=0, left=None, right=None):\r\n# self.val = val\r\n# self.left = left\r\n# self.right = right\r\nclass Solution:\r\n    def isValidBST(self, root: Optional[TreeNode]) -> bool:\r\n\r\n        def valid(node,left,right):\r\n            if not node: # checking node is none\r\n                return True\r\n            if not (node.val>left and node.val<right): # checking the left value is less than node and right value is greater than node\r\n                return False\r\n            return (valid(node.left,left,node.val) and valid(node.right,node.val,right)) # recursively calling left child and right child and returing the result True if both are true else False\r\n\r\n        return valid(root,float(\"-inf\"),float(\"inf\")) #calling recursive function to check",
    "java": "class Solution {\r\n    public boolean isValidBST(TreeNode root) {\r\n        return dfs(root, Integer.MIN_VALUE, Integer.MAX_VALUE);\r\n    }\r\n    \r\n    public boolean dfs(TreeNode root, int min, int max) {\r\n        if (root.val < min || root.val > max || (root.val == Integer.MIN_VALUE && root.left != null) ||                    (root.val == Integer.MAX_VALUE && root.right != null)) return false;\r\n        boolean leftRight = true;\r\n        if (root.left == null && root.right == null) return true;\r\n        if (root.left != null) {\r\n            leftRight = dfs(root.left, min, root.val - 1);\r\n        }\r\n        if (root.right != null) {\r\n            leftRight = dfs(root.right, root.val + 1, max) && leftRight;\r\n        }\r\n        return leftRight;\r\n    }\r\n}",
    "javascript": "// Runtime: 118 ms (Top 5.02%) | Memory: 46.60 MB (Top 30.57%)\r\n\r\nvar isValidBST = function(root) {\r\n    \r\n    return validate(root, -Infinity, Infinity);\r\n};\r\n\r\n\r\nvar validate = function(node, lower,upper){\r\n    \r\n    if ( node == null ){\r\n        \r\n        // empty node or empty tree\r\n        return true;\r\n    }\r\n    \r\n    if( (lower < node.val) && ( node.val < upper ) ){\r\n        \r\n        // check if all tree nodes follow BST rule\r\n        return validate( node.left, lower, node.val) && validate( node.right, node.val, upper);\r\n    }else{\r\n        \r\n        // early reject when we find violation\r\n        return false;\r\n    }\r\n    \r\n}"
  }
}
