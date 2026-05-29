export default {
  "id": 530,
  "name": "Minimum Absolute Difference in BST",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-absolute-difference-in-bst",
  "relativeDir": "M/Minimum Absolute Difference in BST",
  "slug": "0530-minimum-absolute-difference-in-bst",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 17,
    "python": 16,
    "javascript": 19
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 96.14%) | Memory: 25.40 MB (Top 77.88%)\r\n\r\nclass Solution {\r\npublic:\r\n    int inorder(TreeNode* root, int& prevElement, int& ans){\r\n\r\n        if(root->left) inorder(root->left, prevElement, ans);\r\n        if(prevElement >=0 ) ans = min(ans, abs(prevElement-root->val));\r\n        prevElement = root->val;\r\n        if(root->right) inorder(root->right, prevElement, ans);\r\n\r\n        return ans;      \r\n\r\n\r\n    }\r\n    int getMinimumDifference(TreeNode* root){\r\n        int prevElement = -1;\r\n        int ans = INT_MAX;\r\n        return inorder(root, prevElement, ans);\r\n     \r\n    }\r\n};",
    "python": "# Runtime: 46 ms (Top 97.4%) | Memory: 18.70 MB (Top 13.8%)\r\n\r\nclass Solution:\r\n    def getMinimumDifference(self, root: Optional[TreeNode]) -> int:\r\n        cur, stack, minDiff, prev = root, [], 10**5, -10**5\r\n        \r\n        while stack or cur:\r\n            while cur:\r\n                stack.append(cur)\r\n                cur = cur.left\r\n            node = stack.pop()\r\n            minDiff = min(minDiff, node.val - prev)\r\n            prev = node.val\r\n            cur = node.right\r\n        \r\n        return minDiff",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 44.70 MB (Top 9.23%)\r\n\r\nclass Solution {\r\n    int prev = Integer.MAX_VALUE;\r\n    int ans = Integer.MAX_VALUE;\r\n    public int getMinimumDifference(TreeNode root) {\r\n        inOrder(root);\r\n        return ans;\r\n    }\r\n    \r\n    public void inOrder(TreeNode root){\r\n        if(root.left!=null) inOrder(root.left);\r\n        ans = Math.min(ans,Math.abs(root.val-prev));\r\n        prev = root.val;\r\n        if(root.right!=null) inOrder(root.right);\r\n    }\r\n}",
    "javascript": "// Runtime: 233 ms (Top 5.19%) | Memory: 47.2 MB (Top 96.75%)\r\nvar getMinimumDifference = function(root) {\r\n    let order = inOrder(root, []);\r\n    let diff = Math.abs(order[1] - order[0]);\r\n    for(let i=0;i<order.length;i++) {\r\n        for(let j=i+1;j<order.length;j++) {\r\n            if(Math.abs(order[i] - order[j]) < diff) diff = Math.abs(order[i] - order[j])\r\n        }\r\n    }\r\n    return diff;\r\n};\r\n\r\nconst inOrder = (root, order) => {\r\n    if(!root) return null;\r\n    inOrder(root.left, order);\r\n    order.push(root.val);\r\n    inOrder(root.right, order);\r\n    return order;\r\n}"
  }
}
