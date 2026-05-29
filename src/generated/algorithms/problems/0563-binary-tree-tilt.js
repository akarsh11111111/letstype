export default {
  "id": 563,
  "name": "Binary Tree Tilt",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-tree-tilt",
  "relativeDir": "B/Binary Tree Tilt",
  "slug": "0563-binary-tree-tilt",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 48,
    "java": 15,
    "python": 23,
    "javascript": 20
  },
  "languages": {
    "cpp": "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    \r\n    /*  We will take help of recursion\r\n        Each function call will return the sum of subtree with root as current root\r\n        and the tilt sum will be updated in the variable passed as reference\r\n    */\r\n    \r\n    int getTiltSum(TreeNode* root, int &tiltSum){\r\n        if(root == NULL){\r\n            return 0;\r\n        }\r\n        if(root->left == NULL and root->right == NULL){     // If we have a leaf\r\n            tiltSum+=0;         // Add nothing to tilt sum\r\n            return root->val;   // return its value as sum\r\n        }\r\n        \r\n        int leftSubTreeSum = getTiltSum(root->left, tiltSum);   // Sum of all nodes in left\r\n        int rightSubTreeSum = getTiltSum(root->right, tiltSum); // and right subtrees\r\n        \r\n        tiltSum += abs(leftSubTreeSum - rightSubTreeSum);   // Update the tilt sum\r\n        \r\n        // return the sum of left Subtree + right subtree + current node as the sum of the \r\n        return (root->val + leftSubTreeSum + rightSubTreeSum);  // subtree with root as current node.\r\n        \r\n    }\r\n    \r\n    \r\n    int findTilt(TreeNode* root) {\r\n        // variable to be passed as refrence and store the result\r\n        int tiltSum = 0;\r\n        \r\n        getTiltSum(root, tiltSum);\r\n        \r\n        return tiltSum;\r\n    }\r\n};",
    "python": "# Runtime: 66 ms (Top 84.95%) | Memory: 16.4 MB (Top 43.30%)\r\n# Definition for a binary tree node.\r\n# class TreeNode:\r\n# def __init__(self, val=0, left=None, right=None):\r\n# self.val = val\r\n# self.left = left\r\n# self.right = right\r\nclass Solution:\r\n    def findTilt(self, root: Optional[TreeNode]) -> int:\r\n        res = [0]\r\n        def tilt_helper(root,res):\r\n            if not root:\r\n                return 0\r\n\r\n            left = tilt_helper(root.left,res)\r\n            right = tilt_helper(root.right,res)\r\n\r\n            res[0] += abs(left-right)\r\n\r\n            return left + right + root.val\r\n\r\n        tilt_helper(root,res)\r\n        return res[0]",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 45.7 MB (Top 24.54%)\r\nclass Solution {\r\n    int max = 0;\r\n    public int findTilt(TreeNode root) {\r\n        loop(root);\r\n        return max;\r\n    }\r\n    public int loop(TreeNode root){\r\n        if(root==null) return 0;\r\n        int left = loop(root.left);\r\n        int right = loop(root.right);\r\n        max+= Math.abs(left-right);\r\n        return root.val+left+right;\r\n    }\r\n}",
    "javascript": "// Runtime: 117 ms (Top 43.50%) | Memory: 47.8 MB (Top 17.51%)\r\nvar findTilt = function(root) {\r\n    function helper(node, acc) {\r\n        if (node === null) {\r\n            return 0;\r\n        }\r\n\r\n        const left = helper(node.left, acc);\r\n        const right = helper(node.right, acc);\r\n\r\n        acc.sum += Math.abs(left - right);\r\n\r\n        return left + node.val + right;\r\n    }\r\n\r\n    let acc = { sum: 0 };\r\n    helper(root, acc);\r\n\r\n    return acc.sum;\r\n};"
  }
}
