export default {
  "id": 513,
  "name": "Find Bottom Left Tree Value",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-bottom-left-tree-value",
  "relativeDir": "F/Find Bottom Left Tree Value",
  "slug": "0513-find-bottom-left-tree-value",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 19,
    "python": 32,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int findBottomLeftValue(TreeNode* root) {\r\n        queue<TreeNode*> q;\r\n        q.push(root);\r\n        int ans=root->val;\r\n        \r\n        while(!q.empty()){\r\n            int n=q.size();\r\n            for(int i=0;i<n;i++){\r\n                TreeNode* curr= q.front();\r\n                q.pop();\r\n                \r\n                if(i==0) ans=curr->val;\r\n                \r\n                if(curr->left) q.push(curr->left);\r\n                if(curr->right) q.push(curr->right);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:\r\n        \r\n        res = root.val\r\n        stack = [(0, root)]\r\n        prev_d = 0\r\n        \r\n        while stack:\r\n            \r\n            curr_d, curr_v = stack.pop(0)\r\n            \r\n            if curr_v.left:\r\n                stack.append((curr_d+1, curr_v.left))\r\n                if prev_d != curr_d + 1:\r\n                    res = curr_v.left.val\r\n                    prev_d = curr_d+1\r\n            \r\n            if curr_v.right:\r\n                stack.append((curr_d+1, curr_v.right))\r\n                if prev_d != curr_d + 1:\r\n                    res = curr_v.right.val\r\n                    prev_d = curr_d+1\r\n        \r\n        return res\r\n\t\t\r\n\t\t# An Upvote will be encouraging",
    "java": "\r\nclass Solution {\r\n    int max = Integer.MIN_VALUE;\r\n    int res = -1;\r\n    public int findBottomLeftValue(TreeNode root) {\r\n        check(root,0);\r\n        return res;\r\n    }\r\n    void check(TreeNode root, int h){\r\n        if(root==null)\r\n            return;\r\n        if(h>max){\r\n            max=h;\r\n            res = root.val;\r\n        }\r\n        check(root.left,h+1);\r\n        check(root.right,h+1);\r\n    }\r\n}",
    "javascript": "// Runtime: 117 ms (Top 31.08%) | Memory: 46.1 MB (Top 80.63%)\r\nvar findBottomLeftValue = function(root) {\r\n    let arr=[];\r\n    let q=[root];\r\n    while(q.length!==0){\r\n        let current=q.shift();\r\n        arr.push(current.val)\r\n        if(current.right){\r\n            q.push(current.right)\r\n        }\r\n        if(current.left){\r\n            q.push(current.left);\r\n        }\r\n    }\r\n    return arr[arr.length-1]\r\n};"
  }
}
