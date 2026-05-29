export default {
  "id": 1022,
  "name": "Sum of Root To Leaf Binary Numbers",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers",
  "relativeDir": "S/Sum of Root To Leaf Binary Numbers",
  "slug": "1022-sum-of-root-to-leaf-binary-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 36,
    "java": 13,
    "python": 26,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Itrative\r\nclass Solution {\r\npublic:\r\n    int sumRootToLeaf(TreeNode* root) {\r\n        int sum=0;\r\n        stack<pair<TreeNode*,int>>s;\r\n        s.push({root,0});\r\n        while(!s.empty()){\r\n            TreeNode*p=s.top().first;\r\n            int num=s.top().second;\r\n            s.pop();\r\n            num=(num<<1)|p->val;\r\n            if(p->left==NULL && p->right==NULL) sum+=num;\r\n            if(p->right) s.push({p->right,num});\r\n            if(p->left) s.push({p->left,num});\r\n        }\r\n        return sum;\r\n    }\r\n};\r\n\r\n// Recursive\r\nclass Solution {\r\n    int sum=0;\r\npublic:\r\n    void preorder(TreeNode* root,int num){\r\n        if(root==NULL) return;\r\n        num=(num<<1) | root->val;\r\n        if(root->left==NULL && root->right==NULL) sum+=num;\r\n        preorder(root->left,num);\r\n        preorder(root->right,num);\r\n    }\r\n    int sumRootToLeaf(TreeNode* root) {\r\n        preorder(root,0);\r\n        return sum;\r\n    }\r\n};",
    "python": "# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def sumRootToLeaf(self, root: Optional[TreeNode]) -> int:\r\n        def path(root,p,ans):\r\n            p.append(str(root.val))\r\n            if root.left==None and root.right==None:\r\n                t = int(\"\".join(p),2)\r\n                p.pop()\r\n                return t+ans\r\n            if root.left==None:\r\n                t = path(root.right,p,ans)\r\n                p.pop()\r\n                return t\r\n            if root.right==None:\r\n                t = path(root.left,p,ans)\r\n                p.pop()\r\n                return t\r\n            t = path(root.left,p,ans)+path(root.right,p,ans)\r\n            p.pop()\r\n            return t\r\n        return path(root,[],0)",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 41.80 MB (Top 51.65%)\r\n\r\nclass Solution {\r\n    public int sumRootToLeaf(TreeNode root) {\r\n        return sumRootToLeaf(root, 0);\r\n    }\r\n    public int sumRootToLeaf(TreeNode root, int sum){\r\n        if(root == null) return 0;\r\n        sum = (2 * sum) + root.val;\r\n        if(root.left == null && root.right == null) return sum;\r\n        return sumRootToLeaf(root.left, sum) + sumRootToLeaf(root.right, sum);\r\n    }\r\n}",
    "javascript": "// Runtime: 113 ms (Top 42.26%) | Memory: 44.9 MB (Top 34.73%)\r\nvar sumRootToLeaf = function(root) {\r\n\r\n    let sum = 0;\r\n\r\n    const getSum = (root, currStr) => {\r\n        if(!root) {\r\n            return;\r\n        }\r\n\r\n        if(!root.left && !root.right) {\r\n            sum = sum + parseInt(currStr + root.val, 2);\r\n        }\r\n\r\n        getSum(root.left, '' + currStr + root.val);\r\n        getSum(root.right, '' + currStr + root.val);\r\n    }\r\n\r\n    getSum(root, '');\r\n\r\n    return sum;\r\n};"
  }
}
