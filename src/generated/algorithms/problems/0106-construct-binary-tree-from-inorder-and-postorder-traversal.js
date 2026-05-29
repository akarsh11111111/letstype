export default {
  "id": 106,
  "name": "Construct Binary Tree from Inorder and Postorder Traversal",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal",
  "relativeDir": "C/Construct Binary Tree from Inorder and Postorder Traversal",
  "slug": "0106-construct-binary-tree-from-inorder-and-postorder-traversal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 20,
    "python": 53,
    "javascript": 32
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    TreeNode* buildTree(vector<int>& ino, vector<int>& post) {\r\n    int i1 = post.size()-1;\r\n        return solve(i1,ino,post,0,ino.size()-1);\r\n    }\r\n    TreeNode* solve(int &i,vector<int> &in,vector<int> &post,int l,int r){\r\n        if(l>r)return NULL;\r\n        int x = r;\r\n        while(post[i] != in[x]){\r\n            x--;\r\n        }\r\n        i--;\r\n        // cout<<in[x]<<\" \";\r\n        TreeNode* root = new TreeNode(in[x]);\r\n        root->right = solve(i,in,post,x+1,r);\r\n        root->left = solve(i,in,post,l,x-1);\r\n        return root;\r\n    }\r\n};",
    "python": "import bisect\r\n# Definition for a binary tree node.\r\n# class TreeNode(object):\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution(object):\r\n\r\n    def buildTree(self, inorder, postorder):\r\n        \"\"\"\r\n        7\r\n         2\r\n       -8 \r\n        :type inorder: List[int]\r\n        :type postorder: List[int]\r\n        :rtype: TreeNode\r\n        ([-4,-10,3,-1], [7]) ((11,-8,2), [7])\r\n        \"\"\"\r\n        currentSplits = [(inorder, [], [])]\r\n        nodeDirectory = {}\r\n        finalSplits = []\r\n        for nodeVal in reversed(postorder):\r\n            nodeDirectory[nodeVal] = TreeNode(nodeVal)\r\n            for splits, nodes, directions in reversed(currentSplits):\r\n                removing = None\r\n                if nodeVal in splits:\r\n                    removing = (splits, nodes, directions)\r\n                    left = splits[:splits.index(nodeVal)]\r\n                    right = splits[splits.index(nodeVal)+1:]\r\n                    currentSplits.append((left, nodes+[nodeVal], directions + ['left']))\r\n                    if len(left) <= 1:\r\n                        finalSplits.append((left, nodes+[nodeVal], directions + ['left']))\r\n                    currentSplits.append((right, nodes+[nodeVal], directions + ['right']))\r\n                    if len(right) <= 1:\r\n                        finalSplits.append((right, nodes+[nodeVal], directions + ['right']))\r\n                    break\r\n                if removing:\r\n                    currentSplits.remove(removing)\r\n        finalSplits = [splits for splits in finalSplits if splits[0]]\r\n\r\n        while finalSplits:\r\n            nodeVal, nodes, directions = finalSplits.pop()\r\n            bottomNode = nodeDirectory[nodeVal[0]] if nodeVal else None\r\n            while nodes:\r\n                attachingNode = nodeDirectory[nodes.pop()]\r\n                attachingDir = directions.pop()\r\n                if attachingDir == 'left':\r\n                    attachingNode.left = bottomNode\r\n                else:\r\n                    attachingNode.right = bottomNode\r\n                bottomNode = attachingNode\r\n        return nodeDirectory[postorder[-1]]",
    "java": "class Solution {\r\n    int[] io; int[] po;\r\n    int n;   // nth post order node \r\n    public TreeNode buildTree(int[] inorder, int[] postorder) {\r\n        this.n = inorder.length-1; this.io = inorder; this.po = postorder; \r\n        return buildTree(0, n); \r\n    }\r\n    public TreeNode buildTree(int low, int high) {\r\n        if(n < 0 || low > high) return null;\r\n        int currNode = po[n--];\r\n        int idxInInorder = low;\r\n        TreeNode root = new TreeNode(currNode); \r\n        if(low == high) return root;   // no more nodes\r\n        \r\n        while(io[idxInInorder] != currNode) idxInInorder++; // find index of currNode in inorder\r\n        root.right = buildTree(idxInInorder+1, high);\r\n        root.left = buildTree(low, idxInInorder-1);\r\n        return root;    \r\n    }\r\n}",
    "javascript": "// Runtime: 92 ms (Top 87.91%) | Memory: 45.1 MB (Top 70.11%)\r\n/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n * this.val = (val===undefined ? 0 : val)\r\n * this.left = (left===undefined ? null : left)\r\n * this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {number[]} inorder\r\n * @param {number[]} postorder\r\n * @return {TreeNode}\r\n */\r\nvar buildTree = function(inorder, postorder) {\r\n    let postIndex = postorder.length - 1\r\n\r\n    const dfs = (left, right) => {\r\n        if (left > right) return null\r\n\r\n        const val = postorder[postIndex--]\r\n        const mid = inorder.findIndex(e => e === val)\r\n        const root = new TreeNode(val)\r\n\r\n        root.right = dfs(mid + 1, right)\r\n        root.left = dfs(left, mid - 1)\r\n\r\n        return root\r\n    }\r\n\r\n    return dfs(0, inorder.length - 1)\r\n};"
  }
}
