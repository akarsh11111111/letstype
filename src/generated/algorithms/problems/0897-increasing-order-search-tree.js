export default {
  "id": 897,
  "name": "Increasing Order Search Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/increasing-order-search-tree",
  "relativeDir": "I/Increasing Order Search Tree",
  "slug": "0897-increasing-order-search-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 42,
    "java": 17,
    "python": 19,
    "javascript": 21
  },
  "languages": {
    "cpp": "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    TreeNode* temp;\r\n    vector<int>z;\r\n    TreeNode* increasingBST(TreeNode* root) \r\n    {  \r\n        incresing(root);    \r\n        sort(z.begin(), z.end());\r\n        temp = new TreeNode(z[0]);\r\n        create(temp, z);\r\n        return temp;\r\n    }\r\n    void incresing(TreeNode* root)\r\n    {\r\n        if(root == NULL)  return;\r\n        \r\n        z.push_back(root->val);\r\n        incresing(root->left);\r\n        incresing(root->right);        \r\n    }\r\n    void create(TreeNode* create, vector<int> ze)\r\n    {\r\n          \r\n        for(int i = 1; i<ze.size(); i++)\r\n        {\r\n            cout<<ze[i]<<endl;\r\n            create->right = new TreeNode(ze[i]);\r\n            create = create->right;\r\n        }       \r\n    }\r\n};",
    "python": "// Runtime: 44 ms (Top 21.66%) | Memory: 17.30 MB (Top 23.65%)\r\n\r\nclass Solution:\r\n    def increasingBST(self, node: TreeNode) -> TreeNode:\r\n        dummy = tail = TreeNode()\r\n        while node is not None:\r\n            if node.left is not None:\r\n                predecessor = node.left\r\n                while predecessor.right is not None:\r\n                    predecessor = predecessor.right\r\n                \r\n                predecessor.right = node\r\n                left, node.left = node.left, None\r\n                node = left\r\n            else:\r\n                tail.right = tail = node\r\n                node = node.right\r\n        \r\n        return dummy.right",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.5 MB (Top 73.31%)\r\nclass Solution {\r\n    TreeNode inRoot = new TreeNode();\r\n    TreeNode temp = inRoot;\r\n    public TreeNode increasingBST(TreeNode root) {\r\n        inorder(root);\r\n        return inRoot.right;\r\n    }\r\n    public void inorder(TreeNode root) {\r\n        if(root==null)\r\n            return;\r\n        inorder(root.left);\r\n        temp.right = new TreeNode(root.val);\r\n        temp = temp.right;\r\n        inorder(root.right);\r\n    }\r\n}",
    "javascript": "// Runtime: 113 ms (Top 12.98%) | Memory: 43.5 MB (Top 27.62%)\r\nvar increasingBST = function(root) {\r\n    let newRoot = new TreeNode(-1);\r\n    const newTree = newRoot;\r\n\r\n    const dfs = (node) => {\r\n        if (!node) return null;\r\n\r\n        if (node.left) dfs(node.left);\r\n\r\n        const newNode = new TreeNode(node.val);\r\n        newRoot.right = newNode;\r\n        newRoot.left = null;\r\n        newRoot = newRoot.right;\r\n\r\n        if (node.right) dfs(node.right);\r\n    }\r\n    dfs(root);\r\n\r\n    return newTree.right;\r\n};"
  }
}
