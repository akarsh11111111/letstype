export default {
  "id": 1123,
  "name": "Lowest Common Ancestor of Deepest Leaves",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves",
  "relativeDir": "L/Lowest Common Ancestor of Deepest Leaves",
  "slug": "1123-lowest-common-ancestor-of-deepest-leaves",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 45,
    "python": 30,
    "javascript": 23
  },
  "languages": {
    "cpp": "// Runtime: 24 ms (Top 5.16%) | Memory: 21.30 MB (Top 86.33%)\r\n\r\nclass Solution {\r\npublic:\r\n    int getDepth(TreeNode* root) {\r\n        if (!root)\r\n            return 0;\r\n        return max(getDepth(root->right), getDepth(root->left)) + 1;\r\n    }\r\n    \r\n    TreeNode* lcaDeepestLeaves(TreeNode* root) {\r\n        if (!root)\r\n            return NULL;\r\n        \r\n        int right_depth = getDepth(root->right);\r\n        int left_depth = getDepth(root->left);\r\n        \r\n        if (right_depth == left_depth)\r\n            return root;\r\n        \r\n        if (right_depth > left_depth) \r\n            return lcaDeepestLeaves(root->right);\r\n        \r\n        else \r\n            return lcaDeepestLeaves(root->left);\r\n    }\r\n};",
    "python": "# Runtime: 112 ms (Top 7.97%) | Memory: 14.4 MB (Top 40.85%)\r\nclass Solution:\r\n    def lcaDeepestLeaves(self, root: Optional[TreeNode]) -> Optional[TreeNode]:\r\n\r\n        self.max_lvl = (0,[])\r\n        self.pathes = {}\r\n        def rec(root,parent,lvl):\r\n            if not root:\r\n                return\r\n            if lvl > self.max_lvl[0]:\r\n                self.max_lvl = (lvl,[root])\r\n            elif lvl == self.max_lvl[0]:\r\n                self.max_lvl = (lvl,self.max_lvl[1]+[root])\r\n            self.pathes[root] = parent\r\n            rec(root.left,root,lvl+1)\r\n            rec(root.right,root,lvl+1)\r\n        rec(root,None,0)\r\n        print(self.max_lvl)\r\n        # for key in self.pathes:\r\n        # if key!=None and self.pathes[key]!=None:\r\n        # print(key.val,\"-\",self.pathes[key].val)\r\n        if len(self.max_lvl[1]) < 2:\r\n            return self.max_lvl[1][0]\r\n        parent = self.max_lvl[1]\r\n        while len(parent) > 1:\r\n            temp = set()\r\n            for p in parent:\r\n                temp.add(self.pathes.get(p,None))\r\n            parent = temp\r\n        return parent.pop()",
    "java": "// Runtime: 7 ms (Top 8.73%) | Memory: 45 MB (Top 22.93%)\r\nclass Solution {\r\n    public TreeNode lcaDeepestLeaves(TreeNode root) {\r\n        if (root.left == null && root.right == null) return root;\r\n        int depth = findDepth(root);\r\n        Queue<TreeNode> q = new LinkedList<>();\r\n        q.offer(root);\r\n        int count = 0;\r\n        while (!q.isEmpty()) {\r\n            int size = q.size();\r\n            count++;\r\n            if (count == depth) {\r\n                break;\r\n            }\r\n            for (int i = 0; i < size; i++) {\r\n                TreeNode cur = q.poll();\r\n                if (cur.left != null) q.offer(cur.left);\r\n                if (cur.right != null) q.offer(cur.right);\r\n            }\r\n        }\r\n        Set<Integer> set = new HashSet<>();\r\n        while (!q.isEmpty()) {\r\n            set.add(q.poll().val);\r\n        }\r\n        return find(root, set);\r\n    }\r\n\r\n    public int findDepth(TreeNode root) {\r\n        if (root == null) return 0;\r\n        int left = findDepth(root.left);\r\n        int right = findDepth(root.right);\r\n        return 1 + Math.max(left, right);\r\n    }\r\n\r\n    public TreeNode find(TreeNode root, Set<Integer> set) {\r\n        if (root == null) return root;\r\n        if (set.contains(root.val)) return root;\r\n        TreeNode left = find(root.left, set);\r\n        TreeNode right = find(root.right, set);\r\n        if (left != null && right != null) return root;\r\n        else if (left != null) return left;\r\n        else if (right != null) return right;\r\n        else return null;\r\n    }\r\n}",
    "javascript": "// Runtime: 107 ms (Top 61.22%) | Memory: 46.9 MB (Top 57.14%)\r\nvar lcaDeepestLeaves = function(root) {\r\n    if(!root) return root;\r\n    // keep track of max depth if node have both deepest node\r\n    let md = 0, ans = null;\r\n    const compute = (r = root, d = 0) => {\r\n        if(!r) {\r\n            md = Math.max(md, d);\r\n            return d;\r\n        }\r\n\r\n        const ld = compute(r.left, d + 1);\r\n        const rd = compute(r.right, d + 1);\r\n\r\n        if(ld == rd && ld == md) {\r\n            ans = r;\r\n        }\r\n\r\n        return Math.max(ld, rd);\r\n    }\r\n    compute();\r\n    return ans;\r\n};"
  }
}
