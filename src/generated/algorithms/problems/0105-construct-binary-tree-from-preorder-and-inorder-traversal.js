export default {
  "id": 105,
  "name": "Construct Binary Tree from Preorder and Inorder Traversal",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal",
  "relativeDir": "C/Construct Binary Tree from Preorder and Inorder Traversal",
  "slug": "0105-construct-binary-tree-from-preorder-and-inorder-traversal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 23,
    "python": 23,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 37 ms (Top 52.12%) | Memory: 26.5 MB (Top 17.39%)\r\n/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n * int val;\r\n * TreeNode *left;\r\n * TreeNode *right;\r\n * TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n * TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n * TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    typedef vector<int>::iterator vecIt;\r\n\r\n    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder, TreeNode* retNode, vecIt startIt, vecIt endIt)\r\n    {\r\n        if (startIt >= endIt)\r\n            return (NULL);\r\n        vecIt rootIt;\r\n        vecIt midIt;\r\n        int rootVal;\r\n\r\n        rootIt = preorder.begin();\r\n        rootVal = *rootIt;\r\n        preorder.erase(rootIt);\r\n        retNode = new TreeNode(rootVal);\r\n        midIt = find(startIt, endIt, rootVal);\r\n        retNode->left = buildTree(preorder, inorder, retNode->left, startIt, midIt);\r\n        retNode->right = buildTree(preorder, inorder, retNode->right, midIt + 1, endIt);\r\n        return (retNode);\r\n    }\r\n    TreeNode* buildTree(vector<int>& preorder, vector<int>& inorder) {\r\n        TreeNode* retNode;\r\n\r\n        return (buildTree(preorder, inorder, retNode, inorder.begin(), inorder.end()));\r\n    }\r\n};",
    "python": "# Runtime: 274 ms (Top 36.07%) | Memory: 88.6 MB (Top 22.22%)\r\n\r\n# Definition for a binary tree node.\r\n# class TreeNode(object):\r\n# def __init__(self, val=0, left=None, right=None):\r\n# self.val = val\r\n# self.left = left\r\n# self.right = right\r\nclass Solution(object):\r\n    def buildTree(self, preorder, inorder):\r\n        \"\"\"\r\n        :type preorder: List[int]\r\n        :type inorder: List[int]\r\n        :rtype: TreeNode\r\n        \"\"\"\r\n        if not preorder or not inorder:\r\n            return None\r\n\r\n        root = TreeNode(preorder[0])\r\n        mid = inorder.index(preorder[0])\r\n        root.left = self.buildTree(preorder[1:mid+1], inorder[:mid])\r\n        root.right = self.buildTree(preorder[mid+1:], inorder[mid+1:])\r\n        return root",
    "java": "class Solution {\r\n    Map<Integer, Integer> inMap;\r\n    int curIndex = 0;\r\n    int[] preOrder;\r\n    public TreeNode buildTree(int[] preorder, int[] inorder) {\r\n        preOrder = preorder;\r\n        inMap = new HashMap<>();\r\n        for(int i=0; i<inorder.length; i++) {\r\n            inMap.put(inorder[i], i);\r\n        }\r\n        return dfs(0, preorder.length-1);\r\n    }\r\n    \r\n    public TreeNode dfs(int s, int e){\r\n        if(s > e) return null;\r\n        int curNode = preOrder[curIndex++];\r\n        TreeNode root  = new TreeNode(curNode);\r\n        int inRoot = inMap.get(curNode);\r\n        root.left = dfs(s, inRoot-1);\r\n        root.right = dfs(inRoot+1, e);\r\n        return root;\r\n    }\r\n}",
    "javascript": "// Runtime: 121 ms (Top 79.59%) | Memory: 44.5 MB (Top 97.46%)\r\n/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n * this.val = (val===undefined ? 0 : val)\r\n * this.left = (left===undefined ? null : left)\r\n * this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {number[]} preorder\r\n * @param {number[]} inorder\r\n * @return {TreeNode}\r\n */\r\nvar buildTree = function(preorder, inorder) {\r\n    let idx = 0;\r\n    function create(inorderStart, inorderEnd) {\r\n        if (idx === preorder.length || inorderStart > inorderEnd) {\r\n            return null;\r\n        }\r\n        const root = new TreeNode(preorder[idx]);\r\n        const mid = inorder.indexOf(preorder[idx]);\r\n        idx++;\r\n        root.left = create(inorderStart, mid -1);\r\n        root.right = create(mid + 1, inorderEnd);\r\n        return root;\r\n    }\r\n\r\n    return create(0, inorder.length -1);\r\n};"
  }
}
