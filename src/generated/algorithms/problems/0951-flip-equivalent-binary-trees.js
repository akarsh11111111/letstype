export default {
  "id": 951,
  "name": "Flip Equivalent Binary Trees",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/flip-equivalent-binary-trees",
  "relativeDir": "F/Flip Equivalent Binary Trees",
  "slug": "0951-flip-equivalent-binary-trees",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 15,
    "python": 19,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.0%) | Memory: 14.40 MB (Top 7.7%)\r\n\r\nclass Solution {\r\npublic:\r\n    //Isommorphic tree \r\n    bool flipEquiv(TreeNode* root1, TreeNode* root2) {\r\n        if(!root1 and !root2) return true ;\r\n        if(!root1 or  !root2) return false ;\r\n        if(root1->val != root2->val) return false ;\r\n        \r\n        //if flipped then  left subtree == right subtree and right subtree == left subtree \r\n        bool a = flipEquiv(root1->left,root2->right) ;\r\n        bool b = flipEquiv(root1->right,  root2->left) ;\r\n        \r\n        // if not flipped then left subtree == left subtree and right subtree == right subtree\r\n        bool aa = flipEquiv(root1->left,root2->left) ;\r\n        bool bb = flipEquiv(root1->right,root2->right) ;\r\n        \r\n        return (a and b) || (aa and bb );\r\n    }\r\n};",
    "python": "// Runtime: 32 ms (Top 89.57%) | Memory: 16.70 MB (Top 53.69%)\r\n\r\nclass Solution:\r\n    def flipEquiv(self, root1: TreeNode, root2: TreeNode) -> bool:\r\n        queue = deque([(root1, root2)])\r\n        while queue:\r\n            node1, node2 = queue.pop()\r\n            if (not node1) and (not node2):\r\n                continue\r\n            elif (not node1) or (not node2) or (node1.val != node2.val):\r\n                return False\r\n            L1, R1, L2, R2 = node1.left, node1.right, node2.left, node2.right\r\n            if (L1 and L2 and L1.val == L2.val) or (R1 and R2 and R1.val == R2.val):\r\n                queue.append((L1, L2))\r\n                queue.append((R1, R2))\r\n            else:\r\n                queue.append((L1, R2))\r\n                queue.append((L2, R1))\r\n        return True",
    "java": "class Solution {\r\n    public boolean flipEquiv(TreeNode root1, TreeNode root2) {\r\n        return helper(root1, root2);\r\n    }\r\n    \r\n    private boolean helper(TreeNode x, TreeNode y)\r\n    {\r\n        if(x == null && y == null) return true;\r\n        if(x == null || y == null || x.val != y.val) return false;\r\n        boolean similarity = helper(x.left, y.left) && helper(x.right, y.right); // check if 2 subtrees are similar\r\n        boolean swap = helper(x.left, y.right) && helper(x.right, y.left); // check if the 2 subtrees can be similar after swapping the left & right subtrees with each other\r\n        \r\n        return similarity || swap; // if either true, means we can flip to match both trees\r\n    }\r\n}",
    "javascript": "var flipEquiv = function(root1, root2) {\r\n    const flipEquivHelper = (r1 = root1, r2 = root2) => {\r\n        if(!r1 && !r2) return true;\r\n        \r\n        if(!r1 || !r2) return false;\r\n        \r\n        if(r1.val != r2.val) return false;\r\n        \r\n        let ans = false;\r\n        // normal\r\n        ans = ans || (\r\n            flipEquivHelper(r1.left, r2.left) && \r\n            flipEquivHelper(r1.right, r2.right)\r\n        );\r\n        // flip\r\n        ans = ans || (\r\n            flipEquivHelper(r1.right, r2.left) && \r\n            flipEquivHelper(r1.left, r2.right)\r\n        );\r\n        return ans;\r\n    }\r\n    return flipEquivHelper();\r\n};"
  }
}
