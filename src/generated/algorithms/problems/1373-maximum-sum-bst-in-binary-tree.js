export default {
  "id": 1373,
  "name": "Maximum Sum BST in Binary Tree",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-sum-bst-in-binary-tree",
  "relativeDir": "M/Maximum Sum BST in Binary Tree",
  "slug": "1373-maximum-sum-bst-in-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 26,
    "python": 22,
    "javascript": 52
  },
  "languages": {
    "cpp": "// Runtime: 178 ms (Top 94.41%) | Memory: 113.3 MB (Top 38.78%)\r\nclass Solution {\r\npublic:\r\n    int ans = 0 ;\r\n\r\n    array<int,4> solve(TreeNode * root){\r\n        if(!root) return {1,0,INT_MIN,INT_MAX} ;\r\n\r\n        array<int,4> l = solve(root->left) ;\r\n        array<int,4> r = solve(root->right) ;\r\n\r\n        if(l[0] and r[0]){\r\n            if(root->val > l[2] and root->val < r[3]){\r\n                ans = max({ans,l[1],r[1]}) ;\r\n                return {1,l[1] + r[1] + root->val,max({root->val,l[2],r[2]}),min({root->val,l[3],r[3]})} ;\r\n            }\r\n        }\r\n\r\n        return {0,max(l[1],r[1]),INT_MIN,INT_MAX} ;\r\n    }\r\n\r\n    int maxSumBST(TreeNode* root) {\r\n        auto arr = solve(root) ;\r\n        return max(ans,arr[1]) ;\r\n    }\r\n};",
    "python": "// Runtime: 405 ms (Top 22.49%) | Memory: 35.50 MB (Top 99.31%)\r\n\r\nclass Solution:\r\n    def maxSumBST(self, root: TreeNode) -> int:\r\n        res = 0\r\n        def traverse(root):\r\n            '''return status_of_bst, size_of_bst, left_bound, right_bound'''\r\n            nonlocal res\r\n            if not root: return 1, 0, None, None # this subtree is empty\r\n            \r\n            ls, l, ll, lr = traverse(root.left)\r\n            rs, r, rl, rr = traverse(root.right)\r\n            \r\n            if ((ls == 2 and lr < root.val) or ls == 1) and ((rs == 2 and rl > root.val) or rs == 1):\r\n\t\t        # this subtree is a BST\r\n                size = root.val + l + r\r\n                res = max(res, size)\r\n                return 2, size, (ll if ll is not None else root.val), (rr if rr is not None else root.val)\r\n            return 0, None, None, None # this subtree is not a BST\r\n        \r\n        traverse(root)\r\n        return res",
    "java": "// Runtime: 15 ms (Top 57.67%) | Memory: 71 MB (Top 82.51%)\r\nclass Solution {\r\n\r\n    int ans = 0;\r\n    public int maxSumBST(TreeNode root) {\r\n        solve(root);\r\n        return ans;\r\n    }\r\n    // int[] = { min, max, sum };\r\n    private int[] solve(TreeNode root) {\r\n        if(root == null)\r\n            return new int[] { Integer.MAX_VALUE, Integer.MIN_VALUE, 0 };\r\n\r\n        int[] left = solve(root.left);\r\n        int[] right = solve(root.right);\r\n\r\n        if(root.val > left[1] && root.val < right[0]) {\r\n             int sum = left[2] + right[2] + root.val;\r\n             ans = Math.max(ans, sum);\r\n             return new int[] { Math.min(left[0], root.val), Math.max(root.val, right[1]), sum };\r\n        }\r\n\r\n        return new int[] { Integer.MIN_VALUE, Integer.MAX_VALUE, 0 };\r\n    }\r\n\r\n}",
    "javascript": "// Runtime: 347 ms (Top 18.00%) | Memory: 83.8 MB (Top 70.00%)\r\n\r\nvar maxSumBST = function(root) {\r\n    let max = 0;\r\n    const dfs = (node) => {\r\n        // NoNode\r\n        if(!node) return [true, 0, Infinity, -Infinity];\r\n\r\n        // LeafNode\r\n        if(node && !node.left && !node.right) {\r\n            max = Math.max(max, node.val);\r\n            return [true, node.val, node.val, node.val]\r\n        };\r\n\r\n        const [isLeftValid, leftVal, leftMin, leftMax] = dfs(node.left);\r\n        const [isRightValid, rightVal, rightMin, rightMax] = dfs(node.right);\r\n\r\n        /**\r\n        * To establish that the current node is also a valid BST, we need to verify the following:\r\n        * 1. Left sub tree is a valid BST\r\n        * 2. Right sub tree is a valid BST\r\n        * 3. The values in the left BST are smaller than current node's value\r\n        * 4. The values in the right BST are greater than current node's value\r\n        **/\r\n        if(isLeftValid && isRightValid && node.val > leftMax && node.val < rightMin) {\r\n            max = Math.max(max, leftVal + rightVal + node.val);\r\n            return [\r\n                true,\r\n                leftVal + rightVal + node.val,\r\n                /**\r\n                * 12\r\n                * / \\\r\n                * 8 16\r\n                * \\ /\r\n                * 9 15\r\n                * \\ /\r\n                * 10 14\r\n                * \\ /\r\n                * Infinity -Infinity\r\n                * [Infinity and -Infinity are to depict NoNode cases]\r\n                **/\r\n                Math.min(node.val, leftMin),\r\n                Math.max(node.val, rightMax)\r\n            ];\r\n        }\r\n\r\n        return [false, 0, leftMax, rightMin];\r\n    }\r\n    dfs(root);\r\n\r\n    return max;\r\n};"
  }
}
