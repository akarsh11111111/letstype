export default {
  "id": 337,
  "name": "House Robber III",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/house-robber-iii",
  "relativeDir": "H/House Robber III",
  "slug": "0337-house-robber-iii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 24,
    "python": 20,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> dp(TreeNode* root)\r\n    {\r\n        vector<int> ans(2,0); //dp[0]: maximal money you can get by robbing current node. dp[1]: maximal money you can get when not rob this node\r\n        if(root==NULL) return ans;\r\n        vector<int> left=dp(root->left);\r\n        vector<int> right=dp(root->right);\r\n        ans[0]=root->val+left[1]+right[1];\r\n        ans[1]=max(left[0],left[1])+max(right[0],right[1]);\r\n        return ans;\r\n    }\r\n    int rob(TreeNode* root) {\r\n        vector<int> ans=dp(root);\r\n        return max(ans[0],ans[1]);\r\n    }\r\n};",
    "python": "class Solution:\r\n    def rob(self, root: Optional[TreeNode]) -> int:\r\n        hashMap = {}\r\n        \r\n        def helper(root: Optional[TreeNode]) -> int:\r\n            if not root:\r\n                return 0\r\n            if root in hashMap:\r\n                return hashMap[root]\r\n            ansOption1 = root.val\r\n            if root.left is not None:\r\n                ansOption1 += (helper(root.left.left) + helper(root.left.right))\r\n            if root.right is not None:\r\n                ansOption1 += (helper(root.right.left) + helper(root.right.right))\r\n            ansOption2 = helper(root.left) + helper(root.right)\r\n            ansFinal = max(ansOption1, ansOption2)\r\n            hashMap[root] = ansFinal\r\n            return ansFinal\r\n        \r\n        return helper(root)",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 44.60 MB (Top 27.04%)\r\n\r\nclass Solution {\r\n    public int rob(TreeNode root) {\r\n        int ans[] = robHouse(root);\r\n        return Math.max(ans[0],ans[1]);\r\n    }\r\n    \r\n    public int[] robHouse(TreeNode root){\r\n        if(root==null){\r\n            return new int[2];\r\n        }\r\n        \r\n        int left[] = robHouse(root.left);\r\n        int right[] = robHouse(root.right);\r\n        \r\n        int ans[] = new int[2];\r\n        \r\n        ans[0] = Math.max(left[0],left[1])+Math.max(right[0],right[1]);\r\n        ans[1] = root.val+left[0]+right[0];\r\n        \r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 109 ms (Top 52.36%) | Memory: 47.7 MB (Top 20.94%)\r\nvar rob = function(root) {\r\n    const dfs = (node = root) => {\r\n        if (!node || node.val === null) return [0, 0];\r\n        const { val, left, right } = node;\r\n        const [robL, notRobL] = dfs(left);\r\n        const [robR, notRobR] = dfs(right);\r\n        const rob = val + notRobL + notRobR;\r\n        const notRob = Math.max(robL, notRobL) + Math.max(robR, notRobR);\r\n\r\n        return [rob, notRob];\r\n    };\r\n\r\n    return Math.max(...dfs());\r\n};"
  }
}
