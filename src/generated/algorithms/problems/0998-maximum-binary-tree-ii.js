export default {
  "id": 998,
  "name": "Maximum Binary Tree II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-binary-tree-ii",
  "relativeDir": "M/Maximum Binary Tree II",
  "slug": "0998-maximum-binary-tree-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 52,
    "java": 12,
    "python": 38,
    "javascript": 26
  },
  "languages": {
    "cpp": "// Runtime: 13 ms (Top 20.00%) | Memory: 13.5 MB (Top 62.44%)\r\n/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n * int val;\r\n * TreeNode *left;\r\n * TreeNode *right;\r\n * TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n\r\n    void insertIntoMaxTreeRec(TreeNode* root,TreeNode* newNode)//o(logn)\r\n    {\r\n\r\n        if(!root)\r\n            return;\r\n        if(root->right&&root->right->val<newNode->val)\r\n        {\r\n            newNode->left=root->right;\r\n            root->right=newNode;\r\n\r\n            return;\r\n\r\n        }\r\n        if(!root->right)\r\n        {root->right=newNode;\r\n\r\n        return;}\r\n\r\n         insertIntoMaxTreeRec( root->right, newNode);\r\n\r\n    }\r\n    TreeNode* insertIntoMaxTree(TreeNode* root, int val) {\r\n         TreeNode* curr=new TreeNode(val);\r\n\r\n        if(root->val<val)\r\n        {\r\n            curr->left=root;\r\n            root=curr;\r\n        }else\r\n        {\r\n              insertIntoMaxTreeRec( root, curr);\r\n\r\n        }\r\n        return root;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    \"\"\"\r\n    approach:\r\n    given a, we can get the inorder traversal of it, then append val to it and\r\n    then construct the tree back\r\n    \"\"\"\r\n    def insertIntoMaxTree(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:\r\n        inorder_list = []\r\n        def inorder(root):\r\n            if not root:\r\n                return\r\n            inorder(root.left)\r\n            inorder_list.append(root.val)\r\n            inorder(root.right)\r\n            \r\n        inorder(root)\r\n        inorder_list.append(val)\r\n        \r\n        def get_maximum(val_list):\r\n            max_index = -1\r\n            max_val = -1\r\n            for i, val in enumerate(val_list):\r\n                if val > max_val:\r\n                    max_val = val\r\n                    max_index = i\r\n            return max_index, max_val\r\n                \r\n        def create_tree(val_list):\r\n            if not len(val_list):\r\n                return None\r\n            index, val = get_maximum(val_list)\r\n            node = TreeNode(val)\r\n            node.left = create_tree(val_list[:index])\r\n            node.right = create_tree(val_list[index+1:])\r\n            return node\r\n        \r\n        b = create_tree(inorder_list)\r\n        return b",
    "java": "class Solution {\r\n    public TreeNode insertIntoMaxTree(TreeNode root, int val) {\r\n        if (root==null) return new TreeNode(val);\r\n        if (val > root.val) {\r\n            TreeNode newRoot = new TreeNode(val);\r\n            newRoot.left = root;\r\n            return newRoot;\r\n        }\r\n        root.right = insertIntoMaxTree(root.right, val);\r\n        return root;\r\n    }\r\n}",
    "javascript": "// Runtime: 82 ms (Top 76.74%) | Memory: 43.8 MB (Top 83.72%)\r\n/**\r\n * @param {TreeNode} root\r\n * @param {number} val\r\n * @return {TreeNode}\r\n */\r\nvar insertIntoMaxTree = function(root, val) {\r\n    // get new node\r\n    var node = new TreeNode(val);\r\n\r\n    // no root\r\n    if(!root) {\r\n        return node;\r\n    }\r\n\r\n    // upward derivation if val larger then root\r\n    if(val > root.val) {\r\n        return node.left = root, node;\r\n    }\r\n\r\n    // downward derivation\r\n    root.right = insertIntoMaxTree(root.right, val);\r\n\r\n    // root construct\r\n    return root;\r\n};"
  }
}
