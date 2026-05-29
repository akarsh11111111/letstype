export default {
  "id": 1457,
  "name": "Pseudo-Palindromic Paths in a Binary Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree",
  "relativeDir": "P/Pseudo-Palindromic Paths in a Binary Tree",
  "slug": "1457-pseudo-palindromic-paths-in-a-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 37,
    "java": 16,
    "python": 30,
    "javascript": 16
  },
  "languages": {
    "cpp": "class Solution {\r\nprivate:\r\n\tvoid dfs(TreeNode* root,int &ans,unordered_map<int,int> &m){\r\n\r\n\t\tif(!root) return;\r\n\t\tm[root -> val]++;\r\n\r\n\t\tif(!root -> left and !root -> right){\r\n\t\t\tint oddCnt = 0;\r\n\t\t\tfor(auto it : m){\r\n\t\t\t\tif(it.second % 2 != 0) oddCnt++;\r\n\t\t\t}\r\n\t\t\tif(oddCnt <= 1) ans++;\r\n\t\t}\r\n\r\n\r\n\t\tdfs(root -> left,ans,m);\r\n\t\tdfs(root -> right,ans,m);\r\n\r\n\t\tm[root -> val]--;\r\n\r\n\t}\r\npublic:\r\n\tint pseudoPalindromicPaths (TreeNode* root) {\r\n\r\n\t\tif(root == NULL) return 0;\r\n\r\n\t\tint ans = 0;\r\n\r\n\t\tunordered_map<int,int> m;\r\n\r\n\t\tdfs(root,ans,m);\r\n\r\n\t\treturn ans;\r\n\r\n\t}\r\n};",
    "python": "# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def dfs(self, node, path):\r\n        if not node:\r\n            return\r\n        \r\n        if not node.left and not node.right:\r\n            path += [node.val]\r\n            d = {}\r\n            for i in path.copy():\r\n                if i in d:\r\n                    del d[i]\r\n                else:\r\n                    d[i] = 1\r\n            #print(d.items())\r\n            self.ans += 1 if len(d) <= 1 else 0\r\n            return\r\n                \r\n        self.dfs(node.left, path+[node.val])\r\n        self.dfs(node.right, path+[node.val])\r\n    \r\n    def pseudoPalindromicPaths (self, root: Optional[TreeNode]) -> int:\r\n        self.ans = 0\r\n        self.dfs(root, [])\r\n        return self.ans",
    "java": "class Solution {\r\n    public int pseudoPalindromicPaths (TreeNode root) {\r\n        return helper(root, 0);\r\n    }\r\n    \r\n    public int helper(TreeNode node, int freq) {\r\n        if (node == null) return 0;\r\n        \r\n        freq = freq ^ (1 << node.val);\r\n        if (node.left == null && node.right == null) {\r\n            return (freq & (freq - 1)) == 0 ? 1 : 0;\r\n            // return Integer.bitCount(freq) <= 1 ? 1 : 0;\r\n        }\r\n        return helper(node.left, freq) + helper(node.right, freq);\r\n    }\r\n}",
    "javascript": "var pseudoPalindromicPaths  = function(root) {\r\n    if(!root) return 0;\r\n    // if even it's zero or it's power of two when odd\r\n    const ways = (r = root, d = 0) => {\r\n        if(!r) return 0;\r\n        d = d ^ (1 << r.val);\r\n        // leaf\r\n        if(r.left == r.right && r.left == null) {\r\n            const hasAllEven = d == 0;\r\n            const hasOneOdd = (d ^ (d & -d)) == 0;\r\n            return Number(hasEven || hasOneOdd);\r\n        }\r\n        return ways(r.left, d) + ways(r.right, d);\r\n    }\r\n    return ways();\r\n};"
  }
}
