export default {
  "id": 687,
  "name": "Longest Univalue Path",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/longest-univalue-path",
  "relativeDir": "L/Longest Univalue Path",
  "slug": "0687-longest-univalue-path",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 57,
    "java": 39,
    "python": 23,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 168 ms (Top 78.52%) | Memory: 72 MB (Top 11.12%)\r\nclass Solution {\r\npublic:\r\n    int maxlen=0;\r\n    pair<int,int> util(TreeNode* root,int val ){\r\n        if(!root)\r\n            return {0,-1001};\r\n\r\n        // in pair we will the first part will return the no nodes ,\r\n        //and in the second part we will return the value associated with it\r\n\r\n        pair<int,int> l=util(root->left,root->val);\r\n        pair<int,int> r=util(root->right,root->val);\r\n\r\n        /* now we will check whether the value coming from\r\n        the left subtree or(&) right subtree is equal to the\r\n        value of the current node\r\n\r\n         if equal to both the left && right subtree, then the length returned\r\n        will be max of the left & right subtree , becuase ATQ, we have to\r\n        return the longest path where each node in the path has the same\r\n        value , therefore from the current node we can travel to either the\r\n        left or right subtree , but the maxlength can be l.first+r.first+1 ,\r\n        because we can travel from the leftmost node through the current\r\n        node to the rightmost node , which will be a valid path , therefore\r\n        we will compare this with the maxlength\r\n\r\n        */\r\n        if(l.second==root->val && r.second==root->val){\r\n          maxlen=max(maxlen,l.first+r.first+1);\r\n          return {max(l.first,r.first)+1,root->val};\r\n\r\n        }\r\n\r\n        // now similary checking for all the other nodes:\r\n\r\n        else if(l.second==root->val){\r\n            maxlen=max(maxlen,l.first+1);\r\n            return {l.first+1,root->val};\r\n        }\r\n        else if(r.second==root->val){\r\n            maxlen=max(maxlen,r.first+1);\r\n            return {r.first+1,root->val};\r\n        }\r\n        else{\r\n            return {1,root->val};\r\n        }\r\n\r\n    }\r\n    int longestUnivaluePath(TreeNode* root) {\r\n        if(!root)\r\n            return 0;\r\n        util(root,root->val);\r\n        return max(maxlen-1,0);\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n\tmax_path=0\r\n\tdef longestUnivaluePath(self, root: Optional[TreeNode]) -> int:\r\n\t\tself.dfs(root);\r\n\t\treturn self.max_path\r\n\r\n\tdef dfs(self,root):\r\n\t\tif root is None:return 0\r\n\t\tleft=self.dfs(root.left)\r\n\t\tright=self.dfs(root.right)\r\n\r\n\t\tif root.left  and  root.left.val == root.val:\r\n\t\t\tleftPath=left+1\r\n\t\telse:\r\n\t\t\tleftPath=0\r\n\r\n\t\tif root.right and  root.right.val == root.val:\r\n\t\t\trightPath=right+1\r\n\t\telse:\r\n\t\t\trightPath=0\r\n\r\n\t\tself.max_path = max(self.max_path, leftPath + rightPath)\r\n\t\treturn max(leftPath, rightPath)",
    "java": "/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n *     int val;\r\n *     TreeNode left;\r\n *     TreeNode right;\r\n *     TreeNode() {}\r\n *     TreeNode(int val) { this.val = val; }\r\n *     TreeNode(int val, TreeNode left, TreeNode right) {\r\n *         this.val = val;\r\n *         this.left = left;\r\n *         this.right = right;\r\n *     }\r\n * }\r\n */\r\nclass Solution {\r\n    int maxLen = 0;\r\n    public int longestUnivaluePath(TreeNode root) {\r\n        lup(root);\r\n        return maxLen;\r\n    }\r\n    public int lup(TreeNode root) {\r\n        if (root == null) {\r\n            return 0;\r\n        }\r\n        int left = lup(root.left);\r\n        int right = lup(root.right);\r\n        int leftMax = 0;\r\n        int rightMax = 0;\r\n        if (root.left != null && root.val == root.left.val) {\r\n            leftMax = left + 1;\r\n        }\r\n        if (root.right != null && root.val == root.right.val) {\r\n            rightMax = right + 1;\r\n        }\r\n        maxLen = Math.max(maxLen, leftMax + rightMax);\r\n        return Math.max(leftMax, rightMax);\r\n    }\r\n}",
    "javascript": "var longestUnivaluePath = function(root) {\r\n\tlet max = 0;\r\n\tconst dfs = (node = root, parentVal) => {\r\n\t\tif (!node) return 0;\r\n\t\tconst { val, left, right } = node;\r\n\t\tconst leftPath = dfs(left, val);\r\n\t\tconst rightPath = dfs(right, val);\r\n\r\n\t\tmax = Math.max(max, leftPath + rightPath);\r\n\t\treturn val === parentVal \r\n\t\t\t? Math.max(leftPath, rightPath) + 1\r\n\t\t\t: 0;\r\n\t};\r\n\r\n\tdfs();\r\n\treturn max;\r\n};"
  }
}
