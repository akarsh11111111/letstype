export default {
  "id": 783,
  "name": "Minimum Distance Between BST Nodes",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/minimum-distance-between-bst-nodes",
  "relativeDir": "M/Minimum Distance Between BST Nodes",
  "slug": "0783-minimum-distance-between-bst-nodes",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 15,
    "java": 48,
    "python": 23,
    "javascript": 24
  },
  "languages": {
    "cpp": "class Solution {\r\n    int minDiff=INT_MAX,prev=INT_MAX;\r\npublic:\r\n    void inorder(TreeNode* p){\r\n        if(p==NULL) return;\r\n        inorder(p->left);\r\n        minDiff=min(minDiff,abs(p->val-prev));\r\n        prev=p->val;\r\n        inorder(p->right);\r\n    }\r\n    int minDiffInBST(TreeNode* root) {\r\n        inorder(root);\r\n        return minDiff;\r\n    }\r\n};",
    "python": "# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def minDiffInBST(self, root: Optional[TreeNode]) -> int:\r\n        if root is None:\r\n            return 0\r\n        temp1=float(inf)\r\n        from collections import deque\r\n        a=deque([root])\r\n        b=[]\r\n        while a:\r\n            node=a.popleft()\r\n            b.append(node.val)\r\n            if node.left:\r\n                a.append(node.left)\r\n            if node.right:\r\n                a.append(node.right)\r\n        b.sort()\r\n        for i in range(0,len(b)-1):\r\n            if b[i+1]-b[i]",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 40.00 MB (Top 72.0%)\r\n\r\n/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n *     int val;\r\n *     TreeNode left;\r\n *     TreeNode right;\r\n *     TreeNode() {}\r\n *     TreeNode(int val) { this.val = val; }\r\n *     TreeNode(int val, TreeNode left, TreeNode right) {\r\n *         this.val = val;\r\n *         this.left = left;\r\n *         this.right = right;\r\n *     }\r\n * }\r\n */\r\nclass Solution {\r\n    \r\n    int mini=Integer.MAX_VALUE;\r\n\r\n    public void find(TreeNode root,ArrayList<Integer>arr){\r\n    \r\n    if(root==null){\r\n        return;\r\n    }\r\n    \r\n    \r\n    arr.add(root.val);\r\n    \r\n    find(root.left,arr);\r\n    \r\n    for(int i=arr.size()-2;i>=0;i--){\r\n    \r\n        mini=Math.min(mini,Math.abs(root.val-arr.get(i)));\r\n    }\r\n    \r\n    find(root.right,arr);\r\n    \r\n    arr.remove(arr.size()-1);\r\n    }\r\n\r\n    public int minDiffInBST(TreeNode root) {\r\n    ArrayList<Integer>arr=new ArrayList<>();\r\n    find(root,arr);\r\n    return mini;    \r\n    }\r\n}",
    "javascript": "/**\r\n * @param {TreeNode} root\r\n * @return {number}\r\n */\r\nvar minDiffInBST = function(root) {\r\n    let arr = [];\r\n    \r\n\tconst helper = (node) => {\r\n\t\tif (node) {\r\n\t\t\thelper(node.left);\r\n\t\t\tarr.push(node.val);\r\n\t\t\thelper(node.right);\r\n\t\t}\r\n\t}\r\n\thelper(root);\r\n    \r\n\tlet min = Infinity;\r\n\tfor (let i = 0; i < arr.length - 1; i++) {\r\n\t\tconst diff = Math.abs(arr[i] - arr[i + 1]);\r\n\t\tmin = Math.min(min, diff);\r\n\t}\r\n    \r\n\treturn min;\r\n};"
  }
}
