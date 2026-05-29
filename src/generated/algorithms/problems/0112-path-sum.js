export default {
  "id": 112,
  "name": "Path Sum",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/path-sum",
  "relativeDir": "P/Path Sum",
  "slug": "0112-path-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "java": 9,
    "python": 12,
    "javascript": 14
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool ans=false;\r\n      int sum=0;\r\n    void recur(TreeNode* root, int target){\r\n        if(root==NULL)return;\r\n        \r\n            sum+=root->val;\r\n            recur(root->left,target);\r\n            recur(root->right,target);\r\n           if(root->left==NULL && root->right==NULL&&sum == target){ // !!Check only if it is a leaf node....\r\n             ans = true;\r\n             return;\r\n            }\r\n            sum-=root->val; //backtracking\r\n            return;\r\n        \r\n    }\r\n    bool hasPathSum(TreeNode* root, int targetSum) {\r\n        recur(root,targetSum);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def hasPathSum(self, root, targetSum):\r\n        \"\"\"\r\n        :type root: TreeNode\r\n        :type targetSum: int\r\n        :rtype: bool\r\n        \"\"\"\r\n        if not root: return False\r\n        targetSum -= root.val\r\n        if not root.left and not root.right:\r\n            return not targetSum\r\n        return self.hasPathSum(root.left, targetSum) or self.hasPathSum(root.right, targetSum)",
    "java": "class Solution {\r\n    public boolean hasPathSum(TreeNode root, int targetSum) {\r\n       if(root == null) return false;\r\n      \r\n      if(root.left == null && root.right == null) return root.val == targetSum;\r\n      \r\n      return hasPathSum(root.right, targetSum - root.val) || hasPathSum(root.left, targetSum - root.val);\r\n    }\r\n}",
    "javascript": "var hasPathSum = function(root, targetSum) {\r\n\treturn DFS(root, 0 , targetSum)\r\n};\r\n\r\nconst DFS = (curr, currentSum, targetSum) =>{\r\n\r\n\tif(!curr) return false\r\n\r\n\tcurrentSum += curr.val;\r\n\r\n\tif(!curr.left && !curr.right) return currentSum === targetSum;\r\n\r\n\treturn DFS(curr.left, currentSum, targetSum) || DFS(curr.right, currentSum, targetSum)\r\n}"
  }
}
