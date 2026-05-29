export default {
  "id": 1448,
  "name": "Count Good Nodes in Binary Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-good-nodes-in-binary-tree",
  "relativeDir": "C/Count Good Nodes in Binary Tree",
  "slug": "1448-count-good-nodes-in-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 25,
    "java": 20,
    "python": 23,
    "javascript": 16
  },
  "languages": {
    "cpp": "\r\nclass Solution {\r\npublic:\r\n    int count=0;\r\n    void sol(TreeNode* root,int gr){\r\n        if(!root)return;  // base condition \r\n       \r\n        if(gr<=root->val){  //check point max element increase count\r\n            gr=max(gr,root->val);\r\n            count++;\r\n        }\r\n        \r\n        if(root->left) sol(root->left,gr);\r\n        if(root->right) sol(root->right,gr);\r\n        \r\n    }\r\n    int goodNodes(TreeNode* root) {\r\n        \r\n        if(!root->left && !root->right) return 1; //check for if there is one node\r\n        int gr=root->val;\r\n        sol(root,gr);\r\n        return count;\r\n        \r\n    }\r\n};",
    "python": "// Runtime: 132 ms (Top 87.49%) | Memory: 31.70 MB (Top 89.21%)\r\n\r\nclass Solution:\r\n    def goodNodes(self, root: TreeNode) -> int:\r\n        # Our counter for the good nodes.\r\n        count = 0\r\n        \r\n        def helper(node, m):\r\n            nonlocal count\r\n\t\t\t# If we run out of nodes return.\r\n            if not node:\r\n                return\r\n\t\t\t# If the current node val is >= the largest observed in the path thus far.\r\n            if node.val >= m:\r\n\t\t\t    # Add 1 to the count and update the max observed value.\r\n                count += 1\r\n                m = max(m, node.val)\r\n\t\t\t# Traverse l and r subtrees.\r\n            helper(node.left, m)\r\n            helper(node.right, m)\r\n                \r\n        helper(root, root.val)\r\n        return count",
    "java": "// Runtime: 2 ms (Top 100.00%) | Memory: 50.3 MB (Top 97.37%)\r\nclass Solution {\r\n    int ans = 0;\r\n    public int goodNodes(TreeNode root) {\r\n        if (root == null) return 0;\r\n        dfs(root, root.val);\r\n        return ans;\r\n    }\r\n\r\n    void dfs(TreeNode root, int mx) {\r\n        if (root == null) return;\r\n\r\n        mx = Math.max(mx, root.val);\r\n        if(mx <= root.val) ans++;\r\n\r\n        dfs(root.left, mx);\r\n        dfs(root.right, mx);\r\n\r\n    }\r\n}",
    "javascript": "// Runtime: 205 ms (Top 56.30%) | Memory: 70.4 MB (Top 45.50%)\r\n\r\nvar goodNodes = function(root) {\r\n    let ans = 0;\r\n    const traverse = (r = root, mx = root.val) => {\r\n        if(!r) return;\r\n        if(r.val >= mx) {\r\n            ans++;\r\n        }\r\n        let childMax = Math.max(mx, r.val);\r\n        traverse(r.left, childMax);\r\n        traverse(r.right, childMax);\r\n    }\r\n    traverse();\r\n    return ans;\r\n};"
  }
}
