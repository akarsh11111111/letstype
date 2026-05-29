export default {
  "id": 1145,
  "name": "Binary Tree Coloring Game",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-tree-coloring-game",
  "relativeDir": "B/Binary Tree Coloring Game",
  "slug": "1145-binary-tree-coloring-game",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 46,
    "java": 31,
    "python": 32,
    "javascript": 18
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    // nodex means \"node with val = x\" \r\n    // Idea behind this is to block either nodex's parent or it's left child or right child. Block means we will chose that node as nodey. Why? because it will devide the tree in two parts, one for player 1 and other for player 2. Then we have to just take the maximum no of nodes we can get, from these three nodes as head, and if max is greater than n/2, means we can will.\r\n    TreeNode *nodex, *parentx;\r\n    Solution(){\r\n        nodex = NULL;\r\n        parentx = NULL;\r\n    }\r\n    int count(TreeNode *root)\r\n    {\r\n        if (root == NULL)\r\n            return 0;\r\n        int a = count(root->left);\r\n        int b = count(root->right);\r\n        return a + b + 1;\r\n    }\r\n    bool findx(TreeNode *root, int x)\r\n    {\r\n        if (root == NULL)\r\n            return false;\r\n        parentx = root;\r\n        if (root->val == x)\r\n        {\r\n            nodex = root;\r\n            return true; \r\n        }\r\n        bool a = findx(root->left, x);\r\n        if (a)\r\n            return true;\r\n        bool b = findx(root->right, x);\r\n        return b;\r\n    }\r\n    bool btreeGameWinningMove(TreeNode* root, int n, int x) {\r\n        findx(root, x); // Find the node which has val = x\r\n        int p = n - count(nodex); // Count the no of nodes of blue color, if we decide to take parent of nodex as nodey\r\n        int r = count(nodex->right); // Count the no of nodes of blue color, if we decide to take right child of nodex as nodey\r\n        int l = count(nodex->left); // Count the no of nodes of blue color, if we decide to take left child of nodex as nodey\r\n        int mx = max(p,r);\r\n        mx = max(mx, l); // max of all three possible scenarios\r\n        if (mx > n/2)\r\n            return true;\r\n        else\r\n            return false;\r\n    }\r\n};",
    "python": "# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def findParent(self,node,par = None):\r\n        if node:\r\n            self.parent[node.val] = par\r\n            self.findParent(node.left,node)\r\n            self.findParent(node.right,node)\r\n    \r\n    def traverse(self,node,done):\r\n        if node:\r\n            if node in done: return 0\r\n            done[node] = True\r\n            a = self.traverse(self.parent[node.val],done)\r\n            b = self.traverse(node.left,done)\r\n            c = self.traverse(node.right,done)\r\n            return a + b + c + 1\r\n        return 0\r\n    \r\n    def btreeGameWinningMove(self, root: Optional[TreeNode], n: int, x: int) -> bool:\r\n        self.parent = {}\r\n        self.findParent(root)\r\n        parent = self.parent[x]\r\n        node = root if root.val == x else parent.left if parent and parent.left and parent.left.val == x else parent.right\r\n        up = self.traverse(parent,{node:True})\r\n        left = self.traverse(node.left,{node:True})\r\n        right = self.traverse(node.right,{node:True})\r\n        return (up > left + right) or (left > up + right) or (right > up + left)",
    "java": "\tclass Solution {\r\n\tint xkaLeft=0,xkaRight=0;\r\n\tpublic int size(TreeNode node, int x)\r\n\t{\r\n\t\tif(node==null)\r\n\t\t{\r\n\t\t\treturn 0;\r\n\t\t}\r\n\t\tint ls=size(node.left,x);\r\n\t\tint rs=size(node.right,x);\r\n\r\n\t\tif(node.val==x)\r\n\t\t{\r\n\t\t\txkaLeft=ls;\r\n\t\t\txkaRight=rs;\r\n\t\t}\r\n\r\n\t\treturn ls+rs+1;\r\n\t}\r\n\tpublic boolean btreeGameWinningMove(TreeNode root, int n, int x) {\r\n\r\n\t\tsize(root,x);\r\n\t\tint parent=n-(xkaLeft+xkaRight+1);\r\n\t\tint max=Math.max(parent,Math.max(xkaRight,xkaLeft));\r\n\t\tif(max>n/2)\r\n\t\t{\r\n\t\t\treturn true;\r\n\t\t}\r\n\t\treturn false;\r\n\t}\r\n}",
    "javascript": "// Runtime: 97 ms (Top 56.76%) | Memory: 44.4 MB (Top 35.14%)\r\nvar left, right, val;\r\nvar btreeGameWinningMove = function(root, n, x) {\r\n    function count(node) {\r\n        if (node == null)\r\n            return 0;\r\n        var l = count(node.left);\r\n        var r = count(node.right);\r\n        if (node.val == val) {\r\n            left = l;\r\n            right = r;\r\n        }\r\n        return l + r + 1;\r\n    }\r\n    val = x;\r\n    count(root);\r\n    return Math.max(n - left - right - 1, Math.max(left, right)) > n / 2;\r\n};"
  }
}
