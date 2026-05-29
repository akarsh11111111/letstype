export default {
  "id": 889,
  "name": "Construct Binary Tree from Preorder and Postorder Traversal",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal",
  "relativeDir": "C/Construct Binary Tree from Preorder and Postorder Traversal",
  "slug": "0889-construct-binary-tree-from-preorder-and-postorder-traversal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 48,
    "java": 33,
    "python": 27,
    "javascript": 20
  },
  "languages": {
    "cpp": "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    bool vis[40];\r\n    \r\n    TreeNode* solve(vector<int>& pre,int p, vector<int>& pos,int q){\r\n        TreeNode* root=new TreeNode(pre[p]);\r\n        vis[pre[p]]=true;\r\n        p++;\r\n        q--;\r\n        \r\n        if(p>=pre.size() || q<0){\r\n            return root;\r\n        }\r\n        if(!vis[pre[p]]){\r\n            \r\n            int x=q;\r\n            while(x>0 and pos[x]!=pre[p])x--;\r\n            if(pos[x]==pre[p]){\r\n                root->left=solve(pre,p,pos,x);\r\n            }\r\n            \r\n        }\r\n        if(!vis[pos[q]]){\r\n            int x=p;\r\n            while(x<pre.size()-1 and pos[q]!=pre[x])x++;\r\n            if(pos[q]==pre[x]){\r\n                root->right=solve(pre,x,pos,q);\r\n            }\r\n        }\r\n        return root;\r\n    }\r\n        \r\n    TreeNode* constructFromPrePost(vector<int>& preorder, vector<int>& postorder) {\r\n        int n=postorder.size();\r\n        return solve(preorder,0,postorder,n-1);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def constructFromPrePost(self, preorder: List[int], postorder: List[int]) -> Optional[TreeNode]:\r\n\r\n        def build(preorder, preStart, preEnd, postorder, postStart, postEnd):\r\n            if preStart > preEnd:\r\n                return\r\n            elif preStart == preEnd:\r\n                return TreeNode(preorder[preStart])\r\n            \r\n            rootVal = preorder[preStart]\r\n            leftRootVal = preorder[preStart + 1]\r\n            index = valToIndex[leftRootVal]\r\n            root = TreeNode(rootVal)\r\n            leftSize = index - postStart + 1\r\n            \r\n            root.left = build(preorder, preStart + 1, preStart + leftSize,\r\npostorder, postStart, index)\r\n            root.right = build(preorder, preStart + leftSize + 1, preEnd,\r\npostorder, index + 1, postEnd - 1)\r\n            \r\n            return root\r\n        \r\n        valToIndex = {}\r\n        for i in range(len(postorder)):\r\n            valToIndex[postorder[i]] = i\r\n        \r\n        return build(preorder, 0, len(preorder) - 1, postorder, 0, len(postorder) - 1)",
    "java": "// Runtime: 2 ms (Top 63.11%) | Memory: 44.6 MB (Top 8.84%)\r\nclass Solution\r\n{\r\n    public TreeNode constructFromPrePost(int[] preorder, int[] postorder)\r\n    {\r\n        // O(n) time | O(h) space\r\n        if(preorder == null || postorder == null || preorder.length == 0 || postorder.length == 0) return null;\r\n\r\n        TreeNode root = new TreeNode(preorder[0]);\r\n        int mid = 0;\r\n\r\n        if(preorder.length == 1) return root;\r\n\r\n        // update mid\r\n        for(int i = 0; i < postorder.length; i++)\r\n        {\r\n            if(preorder[1] == postorder[i])\r\n            {\r\n                mid = i;\r\n                break;\r\n            }\r\n        }\r\n\r\n        root.left = constructFromPrePost(\r\n                                            Arrays.copyOfRange(preorder, 1, 1 + mid + 1),\r\n                                            Arrays.copyOfRange(postorder, 0, mid + 1));\r\n\r\n        root.right = constructFromPrePost(\r\n                                            Arrays.copyOfRange(preorder, 1 + mid + 1, preorder.length),\r\n                                            Arrays.copyOfRange(postorder, mid + 1, postorder.length - 1));\r\n        return root;\r\n    }\r\n}",
    "javascript": "// Runtime: 117 ms (Top 56.52%) | Memory: 45.2 MB (Top 69.57%)\r\nvar constructFromPrePost = function(preorder, postorder) {\r\n    let preIndex = 0\r\n\r\n    const dfs = (postArr) => {\r\n        if (postArr.length === 0) return null\r\n\r\n        const val = preorder[preIndex]\r\n        const nextVal = preorder[++preIndex]\r\n        const mid = postArr.indexOf(nextVal)\r\n\r\n        const root = new TreeNode(val)\r\n        root.left = dfs(postArr.slice(0, mid + 1))\r\n        root.right = dfs(postArr.slice(mid + 1, postArr.indexOf(val)))\r\n\r\n        return root\r\n    }\r\n\r\n    return dfs(postorder)\r\n};"
  }
}
