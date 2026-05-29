export default {
  "id": 655,
  "name": "Print Binary Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/print-binary-tree",
  "relativeDir": "P/Print Binary Tree",
  "slug": "0655-print-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 40,
    "python": 28,
    "javascript": 39
  },
  "languages": {
    "cpp": "// Runtime: 0 ms (Top 100.00%) | Memory: 8.6 MB (Top 12.25%)\r\nclass Solution {\r\npublic:\r\n    vector<vector<string>> res;\r\n\r\n    int height(TreeNode* root){\r\n        if(!root)\r\n            return 0;\r\n        return 1 + max(height(root->left), height(root->right));\r\n    }\r\n\r\n    void fill(TreeNode* root, int r, int c, int h){\r\n        if(!root)\r\n            return;\r\n        res[r][c] = to_string(root->val);\r\n        fill(root->left, r + 1, c - pow(2, h - r - 1), h);\r\n        fill(root->right, r + 1, c + pow(2, h - r - 1), h);\r\n    }\r\n\r\n    vector<vector<string>> printTree(TreeNode* root) {\r\n        int h = height(root);\r\n        int c = pow(2, h) - 1;\r\n        res.resize(h, vector<string>(c, \"\"));\r\n        fill(root, 0, (c - 1) / 2, h - 1);\r\n        return res;\r\n    }\r\n};",
    "python": "// Runtime: 31 ms (Top 97.8%) | Memory: 17.40 MB (Top 11.72%)\r\n\r\nclass Solution:\r\n    def printTree(self, root: TreeNode) -> List[List[str]]:\r\n        height = 0\r\n        def dfs(node, h):                               # Find height\r\n            nonlocal height\r\n            height = max(height, h)\r\n            if node.left:\r\n                dfs(node.left, h+1)\r\n            if node.right:    \r\n                dfs(node.right, h+1)\r\n        dfs(root, 0)\r\n        n = 2 ** (height + 1) - 1                       # Get `n`\r\n        offset = (n - 1) // 2                           # Column for root node\r\n        ans = [[''] * n for _ in range(height + 1)]\r\n        q = [(root, 0, offset)]\r\n        for i in range(height+1):                       # BFS\r\n            tmp_q = []\r\n            while q:\r\n                cur, r, c = q.pop()\r\n                ans[r][c] = str(cur.val)\r\n                if cur.left:\r\n                    tmp_q.append((cur.left, r+1, c-2 ** (height - r - 1)))\r\n                if cur.right:    \r\n                    tmp_q.append((cur.right, r+1, c+2 ** (height - r - 1)))\r\n            q = tmp_q\r\n        return ans",
    "java": "// Runtime: 1 ms (Top 100.00%) | Memory: 43.8 MB (Top 78.96%)\r\nclass Solution {\r\n    public List<List<String>> printTree(TreeNode root) {\r\n        List<List<String>> res = new ArrayList();\r\n\r\n        int height = getHeight(root);\r\n        int row = height + 1;\r\n        int column = (int) Math.pow(2, height+1) - 1;\r\n\r\n        for(int k=0; k<row; k++){\r\n            List<String> list = new ArrayList();\r\n            for(int i=0; i<column; i++){\r\n                list.add(\"\");\r\n            }\r\n            res.add(list);\r\n        }\r\n\r\n        int left = 0;\r\n        int right = column-1;\r\n        int level=0;\r\n        print(res, left, right, level, root);\r\n\r\n        return res;\r\n    }\r\n    public void print(List<List<String>> res, int left, int right, int level, TreeNode root){\r\n        if(root == null) return;\r\n        int mid = left+(right-left)/2;\r\n        res.get(level).set(mid, String.valueOf(root.val));\r\n\r\n        print(res, left, mid-1, level+1, root.left);\r\n        print(res, mid+1, right, level+1, root.right);\r\n    }\r\n    public int getHeight(TreeNode root){\r\n        if (root==null) return -1;\r\n        int left = getHeight(root.left);\r\n        int right = getHeight(root.right);\r\n\r\n        return Math.max(left, right)+1;\r\n    }\r\n}",
    "javascript": "/**\r\n * @param {TreeNode} root\r\n * @return {string[][]}\r\n */\r\nvar printTree = function(root) {\r\n\t// find the height of the tree\r\n    const m = getHeight(root)\r\n    const height = m - 1\r\n    const n = 2**(height+1)-1\r\n    // create an empty m by n matrix    \r\n    const ans = []\r\n    for (let i = 0; i<m; i++) {\r\n        ans.push(Array(n).fill(\"\"))\r\n    }\r\n    // insert the root\r\n    ans[0][(n-1)/2] = root.val.toString()\r\n\t// insert the rest of the nodes\r\n    format(root,0,(n-1)/2,ans,height)\r\n    return ans\r\n};\r\n\r\nfunction getHeight(node) {\r\n    if (!node) return 0\r\n    const leftHeight = getHeight(node.left)+1\r\n    const rightHeight = getHeight(node.right)+1\r\n    return Math.max(leftHeight,rightHeight) // take the subtree with bigger height\r\n}\r\n\r\nfunction format(node,r,c,ans,height) {\r\n    const offset = 2**(height-r-1) // calculate the common offset\r\n    if (node.left) {\r\n        ans[r+1][c-offset] = node.left.val.toString()\r\n        format(node.left,r+1,c-offset,ans,height) // recurse left node\r\n    }\r\n    if (node.right) {\r\n        ans[r+1][c+offset] = node.right.val.toString()\r\n        format(node.right,r+1,c+offset,ans,height) // recurse right node\r\n    }\r\n}"
  }
}
