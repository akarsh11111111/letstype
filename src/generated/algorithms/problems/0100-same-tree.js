export default {
  "id": 100,
  "name": "Same Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/same-tree",
  "relativeDir": "S/Same Tree",
  "slug": "0100-same-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 9,
    "java": 16,
    "python": 15,
    "javascript": 19
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool isSameTree(TreeNode* p, TreeNode* q) {\r\n        if(p == NULL || q == NULL) return q == p;\r\n        if(p->val != q->val) return false;\r\n        \r\n        return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);\r\n    }\r\n};",
    "python": "// Runtime: 43 ms (Top 21.7%) | Memory: 17.30 MB (Top 8.84%)\r\n\r\nclass Solution:\r\n    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:\r\n        stack = [[p,q]]\r\n        while stack:\r\n            p,q = stack.pop()\r\n            if not p and not q:\t\t\t\t\t#(1)\r\n                continue\r\n            elif p and q and p.val == q.val:\t#(2)\r\n                stack.append([p.left, q.left])\r\n                stack.append([p.right, q.right])\r\n            else:\t\t\t\t\t\t\t\t#(3)\r\n                return False\r\n        return True",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 39.66 MB (Top 84.7%)\r\n\r\nclass Solution {\r\n    public boolean isSameTree(TreeNode p, TreeNode q) {\r\n        // Base case: if both trees are null, they are identical\r\n        if (p == null && q == null) {\r\n            return true;\r\n        }\r\n        // If only one tree is null or the values are different, they are not identical\r\n        if (p == null || q == null || p.val != q.val) {\r\n            return false;\r\n        }\r\n        // Recursively check if the left and right subtrees are identical\r\n        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);\r\n    }\r\n}",
    "javascript": "var isSameTree = function(p, q) {\r\n    \r\n    const stack = [p, q];\r\n    \r\n    while (stack.length) {\r\n        const node2 = stack.pop();\r\n        const node1 = stack.pop();\r\n        \r\n        if (!node1 && !node2) continue;\r\n\r\n        if (!node1 && node2 || node1 && !node2 || node1.val !== node2.val) {\r\n            return false;\r\n        }\r\n        \r\n        stack.push(node1.left, node2.left, node1.right, node2.right);\r\n    }\r\n    \r\n    return true;\r\n};"
  }
}
