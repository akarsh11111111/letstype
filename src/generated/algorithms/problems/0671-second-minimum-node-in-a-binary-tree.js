export default {
  "id": 671,
  "name": "Second Minimum Node In a Binary Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/second-minimum-node-in-a-binary-tree",
  "relativeDir": "S/Second Minimum Node In a Binary Tree",
  "slug": "0671-second-minimum-node-in-a-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 28,
    "python": 14,
    "javascript": 20
  },
  "languages": {
    "cpp": "// Runtime: 9 ms (Top 7.20%) | Memory: 7.1 MB (Top 26.56%)\r\nclass Solution {\r\npublic:\r\n    int findSecondMinimumValue(TreeNode* root) {\r\n        queue<TreeNode*>q;\r\n        q.push(root);\r\n        vector<int>v;\r\n        while(!q.empty()){\r\n            v.push_back(q.front()->val);\r\n            if(q.front()->left){\r\n                q.push(q.front()->left);\r\n            }\r\n            if(q.front()->right){\r\n                q.push(q.front()->right);\r\n            }\r\n            q.pop();\r\n        }\r\n        sort(v.begin(),v.end());\r\n        int ans=-1;\r\n        for(int i=1;i<v.size();i++){\r\n            if(v[i]!=v[0]){\r\n                return v[i];\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def findSecondMinimumValue(self, root: Optional[TreeNode]) -> int:\r\n        temp1=temp2=float(inf)\r\n        from collections import deque\r\n        a=deque([root])\r\n        while a:\r\n            node=a.popleft()\r\n            if node.valtemp1:\r\n                if node.val",
    "java": "// Runtime: 0 ms (Top 100.00%) | Memory: 41.8 MB (Top 20.63%)\r\nclass Solution {\r\n    int ans = Integer.MAX_VALUE;\r\n    boolean x = true;\r\n\r\n    public int findSecondMinimumValue(TreeNode root) {\r\n        go(root);\r\n        return x ? -1 : ans;\r\n    }\r\n\r\n    private void go(TreeNode root) {\r\n        if (root == null) return;\r\n        if (root.left != null) {\r\n            if (root.left.val == root.val) go(root.left);\r\n            else {\r\n                x = false;\r\n                ans = Math.min(ans, root.left.val);\r\n            }\r\n        }\r\n        if (root.right != null) {\r\n            if (root.right.val == root.val) go(root.right);\r\n            else {\r\n                x = false;\r\n                ans = Math.min(ans, root.right.val);\r\n            }\r\n        }\r\n    }\r\n}",
    "javascript": "var findSecondMinimumValue = function(root) {\r\n  \r\n    let firstMin=Math.min()\r\n    let secondMin=Math.min()\r\n    \r\n    const que=[root]\r\n    \r\n    while(que.length){\r\n        const node=que.shift()\r\n        if(node.val<=firstMin){\r\n            if(node.val<firstMin)secondMin=firstMin\r\n            firstMin=node.val\r\n        }else if(node.val<=secondMin){\r\n            secondMin=node.val\r\n        }\r\n        if(node.left)que.push(node.left)\r\n        if(node.right)que.push(node.right)\r\n    }\r\n    return secondMin===Math.min()?-1:secondMin\r\n};"
  }
}
