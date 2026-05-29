export default {
  "id": 1379,
  "name": "Find a Corresponding Node of a Binary Tree in a Clone of That Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree",
  "relativeDir": "F/Find a Corresponding Node of a Binary Tree in a Clone of That Tree",
  "slug": "1379-find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 13,
    "java": 17,
    "python": 17,
    "javascript": 23
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    TreeNode* getTargetCopy(TreeNode* original, TreeNode* cloned, TreeNode* target) {\r\n        if(original == target || original == NULL)\r\n            return cloned;\r\n        TreeNode* found_left = getTargetCopy(original->left, cloned->left, target);\r\n        TreeNode* found_right = getTargetCopy(original->right, cloned->right, target);\r\n        if(found_left)\r\n            return found_left;\r\n        else\r\n            return found_right;\r\n    }\r\n};",
    "python": "# Runtime: 1109 ms (Top 30.14%) | Memory: 24.2 MB (Top 19.53%)\r\nclass Solution:\r\n    def getTargetCopy(self, original: TreeNode, cloned: TreeNode, target: TreeNode) -> TreeNode:\r\n        def DFS(node1,node2):\r\n            if node1==target:\r\n                return node2\r\n            if node1 and node1.left is None and node1.right is None:\r\n                return\r\n\r\n            res1 = DFS(node1.left,node2.left) if node1 else None\r\n            if res1 is not None:\r\n                return res1\r\n            res2 = DFS(node1.right,node2.right) if node1 else None\r\n            if res2 is not None:\r\n                return res2\r\n        res=DFS(original,cloned)\r\n        return res",
    "java": "class Solution {\r\n    public final TreeNode getTargetCopy(final TreeNode original, final TreeNode cloned, final TreeNode target) {\r\n        TreeNode[] ref = new TreeNode[]{null};\r\n        dfs(cloned, target, ref);\r\n        return ref[0];\r\n    }\r\n    public static void dfs (TreeNode root, TreeNode target, TreeNode[] ref) {\r\n        if (root == null) return;\r\n        if (root.val == target.val) {\r\n            ref[0] = root;\r\n            return;\r\n        } else {\r\n            dfs(root.left, target, ref);\r\n            dfs(root.right, target, ref);\r\n        }\r\n    }\r\n}",
    "javascript": "// Runtime: 203 ms (Top 86.6%) | Memory: 86.99 MB (Top 45.2%)\r\n\r\nvar getTargetCopy = function(original, cloned, target) {\r\n    \r\n    if( original == null ){\r\n        \r\n        // Base case aka stop condition\r\n        // empty tree or empty node\r\n        return null;\r\n    }\r\n    \r\n    // General cases\r\n    if( original == target ){\r\n       \r\n        // current original node is target, so is cloned\r\n        return cloned;\r\n    }\r\n    \r\n    // Either left subtree has target, or right subtree has target\r\n    return getTargetCopy(original.left, cloned.left, target) || \r\n           getTargetCopy(original.right, cloned.right, target);\r\n    \r\n};"
  }
}
