export default {
  "id": 543,
  "name": "Diameter of Binary Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/diameter-of-binary-tree",
  "relativeDir": "D/Diameter of Binary Tree",
  "slug": "0543-diameter-of-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 39,
    "python": 44,
    "javascript": 31
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 68.09%) | Memory: 20.80 MB (Top 21.21%)\r\n\r\nclass Solution {\r\npublic:\r\n    int diameterOfBinaryTree(TreeNode* root) {\r\n        int diameter = 0;\r\n        height(root, diameter);\r\n        return diameter;\r\n    }\r\nprivate:\r\n    int height(TreeNode* node, int& diameter) {\r\n        if (!node) {\r\n            return 0;\r\n        }\r\n        int lh = height(node->left, diameter);\r\n        int rh = height(node->right, diameter);\r\n        diameter = max(diameter, lh + rh);\r\n        return 1 + max(lh, rh);\r\n    }\r\n};",
    "python": "# Runtime: 95 ms (Top 16.95%) | Memory: 16.5 MB (Top 10.21%)\r\nclass Solution:\r\n    \"\"\"\r\n    Top Down recursion approach: it is sub optimal\r\n    \"\"\"\r\n    def __init__(self):\r\n        self.max_diameter = 0\r\n    def diameter(self, root):\r\n        if root is None:\r\n            return 0\r\n        return self.max_depth(root.left) + self.max_depth(root.right)\r\n\r\n    def max_depth(self, root):\r\n        if root is None:\r\n            return 0\r\n        return 1 + max(self.max_depth(root.left), self.max_depth(root.right))\r\n\r\n    def func(self, root):\r\n        if root is not None:\r\n            diameter = self.diameter(root)\r\n            if self.max_diameter < diameter:\r\n                self.max_diameter = diameter\r\n            self.diameterOfBinaryTree(root.left)\r\n            self.diameterOfBinaryTree(root.right)\r\n\r\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\r\n        self.func(root)\r\n        return self.max_diameter\r\n\r\n    \"\"\"\r\n    Better Approach: I can try to approach this problem using bottom up recursion\r\n    \"\"\"\r\n    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:\r\n        self.diameter = 0\r\n        def fun(root):\r\n            if root is None:\r\n                return 0\r\n            left = fun(root.left)\r\n            right = fun(root.right)\r\n            if left + right > self.diameter:\r\n                self.diameter = left + right\r\n            return max(left, right) + 1\r\n        fun(root)\r\n        return self.diameter",
    "java": "// Runtime: 1 ms (Top 65.91%) | Memory: 42.9 MB (Top 74.91%)\r\nclass Solution {\r\n    // Declare Global Variable ans to 0\r\n    int ans = 0;\r\n    // Depth First Search Function\r\n    public int dfs(TreeNode root) {\r\n        if(root == null) return 0;\r\n        // recursive call for left height\r\n        int lh = dfs(root.left);\r\n        // recursive call for right height\r\n        int rh = dfs(root.right);\r\n\r\n        // update ans\r\n        ans = Math.max(ans, lh + rh);\r\n\r\n        // return max value\r\n        return Math.max(lh, rh) + 1;\r\n    }\r\n\r\n    // Diameter of Binary Tree Function\r\n    public int diameterOfBinaryTree(TreeNode root) {\r\n        // Call dfs Function\r\n        dfs(root);\r\n        return ans;\r\n    }\r\n}\r\n\r\n// Output -\r\n/*\r\nInput: root = [1,2,3,4,5]\r\nOutput: 3\r\nExplanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].\r\n*/\r\n\r\n// Time & Space Complexity -\r\n/*\r\nTime - O(n)\r\nSpace - O(n)\r\n*/",
    "javascript": "\r\nfunction fastDiameter(node) {\r\n    if(node == null) {\r\n        let pair = new Array(2).fill(0)\r\n        pair[0] = 0\r\n        pair[1] = 0\r\n        return pair\r\n    }\r\n    \r\n    let leftPair = fastDiameter(node.left)\r\n    let rightPair = fastDiameter(node.right)\r\n    \r\n    let leftDiameter = leftPair[0]\r\n    let rightDiameter = rightPair[0]\r\n    \r\n    let height = leftPair[1] + rightPair[1] + 1\r\n    \r\n    let maxDiameter = Math.max(leftDiameter,rightDiameter,height)\r\n    \r\n    let maxHeight = Math.max(leftPair[1],rightPair[1]) + 1\r\n    \r\n    return [maxDiameter,maxHeight]\r\n}\r\n\r\n// diameter --> number of edges between two end nodes\r\nvar diameterOfBinaryTree = function(root) {\r\n    \r\n    let pair = fastDiameter(root)\r\n    \r\n    return pair[0]-1\r\n};"
  }
}
