export default {
  "id": 1261,
  "name": "Find Elements in a Contaminated Binary Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree",
  "relativeDir": "F/Find Elements in a Contaminated Binary Tree",
  "slug": "1261-find-elements-in-a-contaminated-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 45,
    "java": 39,
    "python": 30,
    "javascript": 37
  },
  "languages": {
    "cpp": "// Runtime: 31 ms (Top 65.66%) | Memory: 22.10 MB (Top 59.04%)\r\n\r\nclass FindElements\r\n{\r\npublic:\r\n    unordered_map<int,int>m;\r\n\r\n    FindElements(TreeNode* root)\r\n    {\r\n        if(root)\r\n        {\r\n            root->val = 0;\r\n            queue<TreeNode*> q;\r\n            q.push(root);\r\n            m[0]++;\r\n\r\n            while(!q.empty())\r\n            {\r\n                TreeNode* temp = q.front();\r\n                q.pop();\r\n                int x = temp->val;\r\n                if(temp->left)\r\n                {\r\n                    temp->left->val = x*2 + 1;\r\n\r\n                    m[x*2 + 1]++;\r\n                    q.push(temp->left);\r\n                }\r\n\r\n                if(temp->right)\r\n                {\r\n                    temp->right->val = x*2 + 2;\r\n\r\n                    m[x*2 + 2]++;\r\n                    q.push(temp->right);\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    bool find(int target)\r\n    {\r\n        return (m.find(target) != m.end());\r\n    }\r\n};",
    "python": "# Runtime: 227 ms (Top 13.41%) | Memory: 18.1 MB (Top 62.12%)\r\n# Definition for a binary tree node.\r\n# class TreeNode:\r\n# def __init__(self, val=0, left=None, right=None):\r\n# self.val = val\r\n# self.left = left\r\n# self.right = right\r\nclass FindElements:\r\n\r\n    def __init__(self, root: Optional[TreeNode]):\r\n        def recoverTree(root):\r\n            if not root:\r\n                return None\r\n            self.vals.add(root.val)\r\n            if root.left:\r\n                root.left.val = 2 * root.val + 1\r\n                recoverTree(root.left)\r\n            if root.right:\r\n                root.right.val = 2 * root.val + 2\r\n                recoverTree(root.right)\r\n        self.vals = set()\r\n        root.val = 0\r\n        recoverTree(root)\r\n\r\n    def find(self, target: int) -> bool:\r\n        return target in self.vals\r\n\r\n# Your FindElements object will be instantiated and called as such:\r\n# obj = FindElements(root)\r\n# param_1 = obj.find(target)",
    "java": "// Runtime: 29 ms (Top 75.56%) | Memory: 52.2 MB (Top 77.99%)\r\nclass FindElements {\r\n    TreeNode tree,nodept;\r\n    public FindElements(TreeNode root) {\r\n        tree=root;\r\n        tree.val=0;\r\n        go(tree);\r\n    }\r\n\r\n    void go(TreeNode node){\r\n        if(node.left!=null){\r\n            node.left.val=node.val*2+1;\r\n            go(node.left);\r\n        }\r\n        if(node.right!=null){\r\n            node.right.val=node.val*2+2;\r\n            go(node.right);\r\n        }\r\n    }\r\n\r\n    public boolean find(int target) {\r\n        return doit(target);\r\n    }\r\n\r\n    boolean doit(int target){\r\n        if(target==0){\r\n            nodept=tree;\r\n            return true;\r\n        }\r\n        boolean f=doit((target-1)/2);\r\n        if(!f)return false;\r\n        if(nodept.left!=null && nodept.left.val==target)\r\n            nodept=nodept.left;\r\n        else if(nodept.right!=null && nodept.right.val==target)\r\n            nodept=nodept.right;\r\n        else f=false;\r\n        return f;\r\n    }\r\n}",
    "javascript": "// Runtime: 166 ms (Top 48.15%) | Memory: 52.1 MB (Top 16.67%)\r\n/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n * this.val = (val===undefined ? 0 : val)\r\n * this.left = (left===undefined ? null : left)\r\n * this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n */\r\nvar FindElements = function(root) {\r\n    this.st = new Set()\r\n\r\n    recover = (root, val) =>{\r\n    this.st.add(val);\r\n    if(root.left != null) recover(root.left, val * 2 + 1)\r\n    if(root.right != null) recover(root.right, val * 2 + 2)\r\n    }\r\n\r\n    recover(root, 0)\r\n};\r\n\r\n/**\r\n * @param {number} target\r\n * @return {boolean}\r\n */\r\nFindElements.prototype.find = function(target) {\r\n    return this.st.has(target)\r\n};\r\n\r\n/**\r\n * Your FindElements object will be instantiated and called as such:\r\n * var obj = new FindElements(root)\r\n * var param_1 = obj.find(target)\r\n */"
  }
}
