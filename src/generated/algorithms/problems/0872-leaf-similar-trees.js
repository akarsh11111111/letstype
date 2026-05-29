export default {
  "id": 872,
  "name": "Leaf-Similar Trees",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/leaf-similar-trees",
  "relativeDir": "L/Leaf-Similar Trees",
  "slug": "0872-leaf-similar-trees",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 46,
    "java": 26,
    "python": 26,
    "javascript": 44
  },
  "languages": {
    "cpp": "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    \r\n    /*  How to get LeafOrder?\r\n        Simply traverse the tree Left->right\r\n        whenever you get a leaf, push its value to a vector\r\n    */\r\n    \r\n    \r\n    void getLeafOrder(TreeNode* root, vector<int> &leafOrder){  // Here we are passing vector\r\n        if(root == NULL){                                       // by reference to make changes\r\n            return;                                             // directly in main vector\r\n        }\r\n        \r\n        // Leaf found -> push its value in the vector\r\n        if(root->left == NULL and root->right == NULL){\r\n            leafOrder.push_back(root->val);\r\n            return;\r\n        }\r\n        \r\n        getLeafOrder(root->left, leafOrder);    // Left then Right -> to maintain the sequence\r\n        getLeafOrder(root->right, leafOrder);\r\n    }\r\n    \r\n    \r\n    bool leafSimilar(TreeNode* root1, TreeNode* root2) {\r\n        vector<int> leafOrder1;\r\n        vector<int> leafOrder2;\r\n        \r\n        getLeafOrder(root1, leafOrder1);    // Get leaf order for both trees\r\n        getLeafOrder(root2, leafOrder2);\r\n        \r\n        return leafOrder1 == leafOrder2;    // return if they are equal or not\r\n    }\r\n};",
    "python": "# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:\r\n        tree=[]\r\n        def inorder(root):\r\n            nonlocal tree\r\n            if root is None:\r\n                return\r\n            if root.left is None and root.right is None:\r\n                tree.append(root.val)\r\n            \r\n            inorder(root.left)\r\n            inorder(root.right)\r\n        \r\n        inorder(root1)\r\n        inorder(root2)\r\n        tree1=tree[:len(tree)//2]\r\n        tree2=tree[len(tree)//2:]\r\n        if tree1==tree2:\r\n            return True\r\n        else:\r\n            return False",
    "java": "// Runtime: 1 ms (Top 65.37%) | Memory: 42.6 MB (Top 13.06%)\r\nclass Solution {\r\n    public boolean leafSimilar(TreeNode root1, TreeNode root2) {\r\n        List<Integer> list1 = new ArrayList<>();\r\n        checkLeaf(root1, list1);\r\n        List<Integer> list2 = new ArrayList<>();\r\n        checkLeaf(root2, list2);\r\n\r\n        if(list1.size() != list2.size()) return false;\r\n\r\n        int i = 0;\r\n        while(i < list1.size()){\r\n            if(list1.get(i) != list2.get(i)){\r\n                return false;\r\n            }\r\n            i++;\r\n        }\r\n        return true;\r\n    }\r\n\r\n    private void checkLeaf(TreeNode node, List<Integer> arr){\r\n        if(node.left == null && node.right == null) arr.add(node.val);\r\n        if(node.left != null) checkLeaf(node.left, arr);\r\n        if(node.right != null) checkLeaf(node.right, arr);\r\n    }\r\n}",
    "javascript": "/*\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.left = (left===undefined ? null : left)\r\n *     this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root1\r\n * @param {TreeNode} root2\r\n * @return {boolean}\r\n */\r\n \r\nvar leafSimilar = function(root1, root2) {\r\n    let array1 = [], array2 = [];\r\n    let leaf1 = getLeaf(root1, array1),\r\n        leaf2 = getLeaf(root2, array2);\r\n    \r\n    if (leaf1.length !== leaf2.length){   // if different lengths, return false right away\r\n        return false;\r\n    } \r\n    \r\n    for(let i = 0; i < leaf1.length; i++){\r\n        if (leaf1[i] !== leaf2[i]){     // compare pair by pair\r\n            return false;\r\n        }\r\n    }\r\n\t\r\n    return true;\r\n};\r\n\r\nvar getLeaf = function(root, array){    // DFS\r\n    if (!root){\r\n        return;\r\n    }\r\n    if (!(root.left || root.right)){\r\n        array.push(root.val);  // push leaf value to the array\r\n    }\r\n    getLeaf(root.left, array);\r\n    getLeaf(root.right, array);\r\n    \r\n    return array;\r\n}"
  }
}
