export default {
  "id": 1080,
  "name": "Insufficient Nodes in Root to Leaf Paths",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/insufficient-nodes-in-root-to-leaf-paths",
  "relativeDir": "I/Insufficient Nodes in Root to Leaf Paths",
  "slug": "1080-insufficient-nodes-in-root-to-leaf-paths",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 21,
    "python": 49,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 36 ms (Top 34.43%) | Memory: 33.30 MB (Top 49.32%)\r\n\r\n// What we do is a basic DFS from root to leaf, here I used preorder.\r\nclass Solution {\r\npublic:\r\n    TreeNode* sufficientSubset(TreeNode* root, int limit) {\r\n// Base cases to check if there is no root node\r\n        if(!root) return root;\r\n// or else if there are no leaf nodes to the root node and thus we simply check if the root node is less than the limit or not, if it is less we return null or else we know what to return.\r\n        if(!root->left && !root->right){\r\n            if(root->val < limit) return NULL;\r\n            else return root;\r\n        } else {\r\n// We then start out DFS traversal, every time decreasing the limit with the current node's value and after that, we move over ahead and check the base conditions again and see if any case has been satisfied or not\r\n            root->left = sufficientSubset(root->left, limit-root->val);\r\n            root->right = sufficientSubset(root->right, limit-root->val);\r\n            \r\n            if(!root->left && !root->right) return NULL;\r\n            else return root;\r\n        }\r\n    }\r\n};",
    "python": "class Solution:\r\n    \"\"\"\r\n    we can try to solve this problem using depth first traversal\r\n    \"\"\"\r\n    def dfs(self, root, sum_so_far, limit):\r\n        if root is None:\r\n            return None, 0\r\n        \r\n        x, left  = self.dfs(root.left, sum_so_far + root.val, limit)\r\n        y, right = self.dfs(root.right, sum_so_far + root.val, limit)\r\n        # print('for node= {}, sum_so_far= {}, left= {}, right= {}'.format(root.val, sum_so_far, left, right))\r\n        if root.left is None and root.right is None:\r\n            # it is leaf, left and right should be 0\r\n            if sum_so_far + root.val < limit:\r\n                # node is insufficient\r\n                return None, root.val\r\n            else:\r\n                # node is sufficient\r\n                return root, root.val\r\n        elif root.left is not None and root.right is None:\r\n            root.left = x\r\n            if sum_so_far + root.val + left < limit:\r\n                # node is insufficient\r\n                return None, root.val + left\r\n            else:\r\n                return root, root.val + left\r\n            \r\n        elif root.left is None and root.right is not None:\r\n            root.right = y\r\n            if sum_so_far + root.val + right < limit:\r\n                return None, root.val + right\r\n            else:\r\n                return root, root.val + right\r\n            \r\n        elif root.left is not None and root.right is not None:\r\n            root.left = x\r\n            root.right = y\r\n            if sum_so_far + root.val + left < limit and sum_so_far + root.val + right < limit:\r\n                return None, max(root.val + left, root.val + right)\r\n            elif sum_so_far + root.val + left < limit and sum_so_far + root.val + right > limit:\r\n                return root, root.val + right\r\n            elif sum_so_far + root.val + left > limit and sum_so_far + root.val + right < limit:\r\n                return root, root.val + left\r\n            else:\r\n                return root, max(root.val + left, root.val + right)\r\n        \r\n    def sufficientSubset(self, root: Optional[TreeNode], limit: int) -> Optional[TreeNode]:\r\n        root, _ = self.dfs(root, 0, limit)\r\n        return root",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 45.20 MB (Top 7.32%)\r\n\r\nclass Solution {   \r\n   public TreeNode helper(TreeNode root,int limit, int sumTillNow)\r\n    {\r\n        if(root == null)  return null;\r\n        \r\n        if(root.left == null && root.right == null)\r\n             return root.val + sumTillNow < limit ? null : root;\r\n        \r\n        root.left = helper(root.left,limit,sumTillNow + root.val);\r\n        root.right = helper(root.right,limit,sumTillNow + root.val);\r\n        \r\n        return root.left == null && root.right == null ? null : root;\r\n    }\r\n    \r\n    \r\n    public TreeNode sufficientSubset(TreeNode root, int limit){\r\n        return helper(root,limit,0);\r\n    }\r\n}",
    "javascript": "// Runtime: 160 ms (Top 41.18%) | Memory: 49.6 MB (Top 38.24%)\r\nvar sufficientSubset = function(root, limit) {\r\n    const MIN = Number.MIN_SAFE_INTEGER;\r\n    const sum = removeNodes(root, 0);\r\n\r\n    if (sum < limit) return null;\r\n\r\n    return root;\r\n\r\n    function removeNodes(node, prevSum) {\r\n        if (node == null) return MIN;\r\n        if (node.left == node.right) return node.val + prevSum;\r\n\r\n        const leftSum = removeNodes(node.left, prevSum + node.val);\r\n        const rightSum = removeNodes(node.right, prevSum + node.val);\r\n\r\n        if (leftSum < limit) node.left = null;\r\n        if (rightSum < limit) node.right = null;\r\n\r\n        if (node.left == node.right) return MIN;\r\n\r\n        return node.left == null ? rightSum : leftSum;\r\n    }\r\n};"
  }
}
