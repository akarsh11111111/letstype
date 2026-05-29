export default {
  "id": 173,
  "name": "Binary Search Tree Iterator",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-search-tree-iterator",
  "relativeDir": "B/Binary Search Tree Iterator",
  "slug": "0173-binary-search-tree-iterator",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 49,
    "python": 34,
    "javascript": 42
  },
  "languages": {
    "cpp": "//TC O(1) and O(H) Space\r\n\r\n//MIMIC inorder\r\nclass BSTIterator {\r\npublic:\r\n    stack<TreeNode*> stk;\r\n    BSTIterator(TreeNode* root) {\r\n        pushAll(root);\r\n         // left is done\r\n    }\r\n    \r\n    int next() {\r\n        //root handled\r\n        TreeNode* node = stk.top();\r\n        int ans = node->val;\r\n        stk.pop();\r\n        \r\n        //right handled\r\n        pushAll(node->right);\r\n        \r\n        return ans;\r\n        \r\n    }\r\n    \r\n    bool hasNext() {\r\n        return stk.size() != 0; // stk is empty then no next to show simple\r\n    }\r\n    \r\n    void pushAll(TreeNode* root){\r\n        //left part - as inorder is like Left left left, once a root is done then check right\r\n        while(root!= NULL){\r\n            stk.push(root);\r\n            root = root->left;\r\n        }\r\n        \r\n    }\r\n};",
    "python": "# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass BSTIterator:\r\n\r\n    def __init__(self, root: Optional[TreeNode]):\r\n        self.root=root\r\n        self.tree=[]#list to store the inorder traversal\r\n        def inorder(node):\r\n            if not node:\r\n                return\r\n            inorder(node.left)\r\n            self.tree.append(node.val)\r\n            inorder(node.right)\r\n            return\r\n        inorder(self.root)\r\n        self.i=0\r\n        \r\n\r\n    def next(self) -> int:\r\n        self.i+=1\r\n        return self.tree[self.i-1]\r\n\r\n    def hasNext(self) -> bool:\r\n        return self.i-1<len(self.tree)-1\r\n\r\n\r\n# Your BSTIterator object will be instantiated and called as such:\r\n# obj = BSTIterator(root)\r\n# param_1 = obj.next()\r\n# param_2 = obj.hasNext()",
    "java": "class BSTIterator {\r\n\r\n    TreeNode root;\r\n    TreeNode current;\r\n    Stack<TreeNode> st = new Stack<>();\r\n    public BSTIterator(TreeNode root) {\r\n        this.root = root;\r\n        //init(root);\r\n        current = findLeft(root);\r\n        //System.out.println(\"Init: stack is: \"+st);\r\n    }\r\n\r\n    public int next() {\r\n        \r\n        int val = -1;\r\n        if(current != null)\r\n            val = current.val;\r\n        else\r\n            return -1;\r\n        \r\n        if(current.right != null)\r\n            current = findLeft(current.right);\r\n        else if(!st.isEmpty())\r\n            current = st.pop();\r\n         else   \r\n            current = null;\r\n       // System.out.println(\"next: stack is: \"+st);\r\n        return val;\r\n    }\r\n    \r\n    public TreeNode findLeft(TreeNode node) {\r\n        \r\n        if(node == null)\r\n            return null;\r\n        \r\n        if(node.left != null){\r\n            TreeNode next = node.left;\r\n            st.push(node);\r\n            return findLeft(next);\r\n        }\r\n        else\r\n            return node;\r\n        \r\n    }\r\n    \r\n    public boolean hasNext() {\r\n        return current != null;\r\n    }\r\n}",
    "javascript": "/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.left = (left===undefined ? null : left)\r\n *     this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n */\r\nvar BSTIterator = function(root) {\r\n    this.stack = [];\r\n    this.node = root;\r\n};\r\n\r\n/**\r\n * @return {number}\r\n */\r\nBSTIterator.prototype.next = function() {\r\n    while (this.node) {\r\n        this.stack.push(this.node);\r\n        this.node = this.node.left;\r\n    }\r\n    const node = this.stack.pop();\r\n    this.node = node.right;\r\n    return node.val;\r\n};\r\n\r\n/**\r\n * @return {boolean}\r\n */\r\nBSTIterator.prototype.hasNext = function() {\r\n    return this.node || this.stack.length > 0;\r\n};\r\n\r\n/** \r\n * Your BSTIterator object will be instantiated and called as such:\r\n * var obj = new BSTIterator(root)\r\n * var param_1 = obj.next()\r\n * var param_2 = obj.hasNext()\r\n */"
  }
}
