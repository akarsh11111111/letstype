export default {
  "id": 124,
  "name": "Binary Tree Maximum Path Sum",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-tree-maximum-path-sum",
  "relativeDir": "B/Binary Tree Maximum Path Sum",
  "slug": "0124-binary-tree-maximum-path-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 24,
    "python": 21,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 46 ms (Top 39.79%) | Memory: 28.2 MB (Top 22.38%)\r\nclass Solution {\r\npublic:\r\n    int rec(TreeNode* root,int& res ){\r\n        if(root==nullptr) return 0;\r\n        // maximum value from left\r\n        int l = rec(root->left,res);\r\n        //maximum value from right\r\n        int r = rec(root->right,res);\r\n\r\n        //check if path can go through this node ,if yes upadte the result value\r\n        res = max(res,root->val+l+r);\r\n\r\n        // return the maximum non-negative path value\r\n        return max({l+root->val,r+root->val,0});\r\n    }\r\n    int maxPathSum(TreeNode* root) {\r\n        int res = INT_MIN;\r\n        int x = rec(root,res);\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxPathSum(self, root: Optional[TreeNode]) -> int:\r\n        self.res=root.val\r\n        def solving(root):\r\n            if not root:\r\n                return 0\r\n            current=root.val\r\n            sleft,sright=float('-inf'),float('-inf')\r\n            if root.left:\r\n                sleft=solving(root.left)\r\n                if(sleft>=0):\r\n                    current+=sleft\r\n            if root.right:\r\n                sright=solving(root.right)\r\n                if(sright>=0):\r\n                    current+=sright\r\n            if(current>self.res):\r\n                self.res=current\r\n            return max(root.val, root.val+sleft, root.val+sright)\r\n        solving(root)\r\n        return self.res",
    "java": "// Runtime: 1 ms (Top 99.74%) | Memory: 48.6 MB (Top 11.74%)\r\nclass Solution {\r\n\r\n    int[] ans = new int[1];\r\n    public int maxPathSum(TreeNode root) {\r\n        ans[0]=root.val; //Handle edge case\r\n        dfs(root);\r\n        return ans[0];\r\n    }\r\n\r\n    public int dfs(TreeNode root){\r\n\r\n        if(root==null)\r\n            return 0;\r\n\r\n        int left=Math.max(0,dfs(root.left)); //Check on the left subtree and if returned negative take 0\r\n        int right=Math.max(0,dfs(root.right)); //Check on the right subtree and if returned negative take 0\r\n\r\n        int maxInTheNode=root.val+left+right; //Calculating the max while including the root its left and right child.\r\n        ans[0]=Math.max(ans[0],maxInTheNode); //Keeping max globally\r\n\r\n        return root.val+Math.max(left,right); //Since only one split is allowed returning the one split that returns max value\r\n    }\r\n}",
    "javascript": "var maxPathSum = function(root) {\r\n    let res = -Infinity;\r\n    function solve(root){\r\n        if(!root){\r\n            return 0;\r\n        }\r\n        \r\n        let left = solve(root.left);\r\n        let right = solve(root.right);\r\n        //ignore the values with negative sum\r\n        let leftVal = Math.max(left, 0);\r\n        let rightVal = Math.max(right,0);\r\n        \r\n        let localMax = leftVal + rightVal + root.val;\r\n        res = Math.max(localMax,res);\r\n        return Math.max(leftVal, rightVal) + root.val;\r\n        \r\n    }\r\n    solve(root);\r\n    return res;\r\n    \r\n};"
  }
}
