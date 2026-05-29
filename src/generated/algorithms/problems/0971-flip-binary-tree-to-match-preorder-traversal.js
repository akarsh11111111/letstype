export default {
  "id": 971,
  "name": "Flip Binary Tree To Match Preorder Traversal",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal",
  "relativeDir": "F/Flip Binary Tree To Match Preorder Traversal",
  "slug": "0971-flip-binary-tree-to-match-preorder-traversal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 38,
    "java": 23,
    "python": 50,
    "javascript": 17
  },
  "languages": {
    "cpp": "// Runtime: 4 ms (Top 80.72%) | Memory: 13.8 MB (Top 73.01%)\r\nclass Solution {\r\npublic:\r\n\r\n    bool helper(int &ind, TreeNode *root, vector<int> &voyage, vector<int> &ans){\r\n        if(root == NULL || ind == voyage.size()){\r\n            ind--;\r\n            return true;\r\n        }\r\n\r\n        // Not possible to create\r\n        if(root->val != voyage[ind]){\r\n            ans.clear();\r\n            ans.push_back(-1);\r\n            return false;\r\n        }\r\n\r\n        // If voyage value not equal to its left child, then swap both childs and check\r\n        if(root->left && root->left->val != voyage[ind+1]){\r\n            TreeNode *temp = root->left;\r\n            root->left = root->right;\r\n            root->right = temp;\r\n\r\n            // Pusing root into ans\r\n            ans.push_back(root->val);\r\n        }\r\n\r\n        return helper(++ind, root->left, voyage, ans) &&\r\n            helper(++ind, root->right, voyage, ans);\r\n    }\r\n\r\n    vector<int> flipMatchVoyage(TreeNode* root, vector<int>& voyage) {\r\n        int ind = 0;\r\n        vector<int> ans;\r\n        helper(ind, root, voyage, ans);\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 50 ms (Top 21.2%) | Memory: 16.23 MB (Top 89.3%)\r\n\r\nclass Solution:\r\n    def flipMatchVoyage(self, root, voyage):\r\n        \r\n        # ------------------------------\r\n        \r\n        def dfs(root):\r\n            \r\n            if not root:\r\n                # base case aka stop condition\r\n\t\t\t\t# empty node or empty tree\r\n                return True\r\n            \r\n            \r\n            ## general cases\r\n            if root.val != voyage[dfs.idx]:\r\n                \r\n                # current node mismatch, no chance to make correction by flip\r\n                return False\r\n            \r\n            # voyage index moves forward\r\n            dfs.idx += 1\r\n            \r\n            if root.left and (root.left.val != voyage[dfs.idx]):\r\n                \r\n                # left child mismatch, flip with right child if right child exists\r\n                root.right and result.append( root.val )\r\n                \r\n                # check subtree in preorder DFS with child node flip\r\n                return dfs(root.right) and dfs(root.left)\r\n                \r\n            else:\r\n                \r\n                # left child match, check subtree in preorder DFS\r\n                return dfs(root.left) and dfs(root.right)\r\n                \r\n      \r\n        # --------------------------\r\n        \r\n        # flip sequence\r\n        result = []\r\n        \r\n        # voyage index during dfs\r\n        dfs.idx = 0\r\n        \r\n        # start checking from root node\r\n        good = dfs(root)\r\n        \r\n        return result if good else [-1]",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 42.10 MB (Top 56.52%)\r\n\r\nclass Solution {\r\n    int vix = 0;\r\n    List<Integer> ans = new ArrayList<>();\r\n    private void dfs(TreeNode node, int[] V) {\r\n        if (node == null || (ans.size() != 0 && ans.get(0) == -1)) return;\r\n        if (node.val != V[vix++])\r\n            ans = new ArrayList<Integer>(Arrays.asList(-1));\r\n        else if (node.left != null && node.left.val != V[vix]) {\r\n            ans.add(node.val);\r\n            dfs(node.right, V);\r\n            dfs(node.left, V);\r\n        } else {\r\n            dfs(node.left, V);\r\n            dfs(node.right, V);\r\n        }\r\n    }\r\n    public List<Integer> flipMatchVoyage(TreeNode root, int[] V) {\r\n        dfs(root, V);\r\n        return ans;\r\n    }\r\n}",
    "javascript": "var flipMatchVoyage = function(root, voyage) {\r\n    const output = []\r\n    let idx = 0;\r\n    \r\n    function run(node) {\r\n        if(!node) return true;\r\n        if(voyage[idx] !== node.val) return false;\r\n        idx++;\r\n        \r\n        if(node.left && node.left.val !== voyage[idx]) {\r\n            output.push(node.val);\r\n            return run(node.right) && run(node.left);\r\n        }\r\n        return run(node.left) && run(node.right);\r\n    }\r\n    return run(root) ? output : [-1];\r\n};"
  }
}
