export default {
  "id": 129,
  "name": "Sum Root to Leaf Numbers",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/sum-root-to-leaf-numbers",
  "relativeDir": "S/Sum Root to Leaf Numbers",
  "slug": "0129-sum-root-to-leaf-numbers",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 24,
    "java": 23,
    "python": 28,
    "javascript": 24
  },
  "languages": {
    "cpp": "// Runtime: 13 ms (Top 6.52%) | Memory: 9.2 MB (Top 47.28%)\r\nclass Solution {\r\npublic:\r\n    int ans=0;\r\n    void dfs(TreeNode* root, string s){\r\n        if(!root->left && !root->right){\r\n            s+=to_string(root->val);\r\n            ans+=stoi(s);\r\n            return;\r\n        }\r\n        string o = s;\r\n        s+=to_string(root->val);\r\n        if(root->left) dfs(root->left,s);\r\n        if(root->right) dfs(root->right,s);\r\n        s=o;\r\n\r\n    }\r\n    int sumNumbers(TreeNode* root) {\r\n        if(!root) return ans;\r\n        string s = \"\";\r\n        dfs(root,s);\r\n        return ans;\r\n    }\r\n};",
    "python": "# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def sumNumbers(self, root: Optional[TreeNode]) -> int:\r\n        \r\n        int_list = []\r\n        \r\n        def traverse(node, input_string):\r\n            \r\n            nonlocal int_list\r\n            \r\n            if not node:\r\n                return int_list\r\n            \r\n            input_string = input_string + str(node.val)\r\n\r\n            if not (node.left or node.right):\r\n                int_list.append(int(input_string))\r\n            \r\n            traverse(node.left, input_string)\r\n            traverse(node.right, input_string)\r\n                \r\n        traverse(root, \"\")\r\n        return sum(int_list)",
    "java": "class Solution {\r\n    int res;\r\n    public int sumNumbers(TreeNode root) {\r\n        res = 0;\r\n        getSum(root, 0);\r\n        \r\n        return res;\r\n    }\r\n    \r\n    public void getSum(TreeNode root, int sum){\r\n        \r\n        if(root.left == null && root.right == null) {\r\n            res += (sum*10+root.val);\r\n        }\r\n        \r\n        if(root.left != null)\r\n            getSum(root.left, sum*10+root.val);\r\n        \r\n        \r\n        if(root.right != null)\r\n            getSum(root.right, sum*10+root.val);\r\n    }\r\n}",
    "javascript": "/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.left = (left===undefined ? null : left)\r\n *     this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n * @return {number}\r\n */\r\nvar sumNumbers = function(root) {\r\n    return dfs(root)\r\n};\r\n\r\nconst dfs = (root, path = '') => {\r\n    if (!root.left && !root.right) return +(path + root.val)\r\n    \r\n    const left = root.left ? dfs(root.left, path + root.val) : 0\r\n    const right = root.right ? dfs(root.right, path + root.val) : 0\r\n    \r\n    return left + right\r\n}"
  }
}
