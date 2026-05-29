export default {
  "id": 230,
  "name": "Kth Smallest Element in a BST",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/kth-smallest-element-in-a-bst",
  "relativeDir": "K/Kth Smallest Element in a BST",
  "slug": "0230-kth-smallest-element-in-a-bst",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 27,
    "python": 22,
    "javascript": 28
  },
  "languages": {
    "cpp": "// Runtime: 36 ms (Top 27.23%) | Memory: 24.3 MB (Top 34.42%)\r\nclass Solution {\r\npublic:\r\n    void findInorder(TreeNode* root, vector<int> &ans) {\r\n        if(root == NULL)\r\n            return;\r\n\r\n        findInorder(root->left, ans);\r\n        ans.push_back(root->val);\r\n        findInorder(root->right, ans);\r\n    }\r\n    int kthSmallest(TreeNode* root, int k) {\r\n        vector<int> ans;\r\n        findInorder(root, ans);\r\n        return ans[k-1];\r\n    }\r\n};",
    "python": "# Runtime: 86 ms (Top 42.71%) | Memory: 18.1 MB (Top 15.27%)\r\n\r\n# Definition for a binary tree node.\r\n# class TreeNode:\r\n# def __init__(self, val=0, left=None, right=None):\r\n# self.val = val\r\n# self.left = left\r\n# self.right = right\r\nclass Solution:\r\n    def kthSmallest(self, root: Optional[TreeNode], k: int) -> int:\r\n        n=0\r\n        stack=[] # to store the elements\r\n        cur=root # pointer to iterate\r\n        while cur or stack:\r\n            while cur: # used to find the left most element\r\n                stack.append(cur)\r\n                cur=cur.left\r\n            cur=stack.pop() # pop the most recent element which will be the least value at that moment\r\n            n+=1\r\n            if n==k:\r\n                return cur.val\r\n            cur=cur.right",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 44.10 MB (Top 76.35%)\r\n\r\nclass Solution {\r\n    private int count = 0;\r\n    private int result = 0;\r\n\r\n    public int kthSmallest(TreeNode root, int k) {\r\n        inorderTraversal(root, k);\r\n        return result;\r\n    }\r\n\r\n    private void inorderTraversal(TreeNode node, int k) {\r\n        if (node == null || count >= k) {\r\n            return;\r\n        }\r\n\r\n        inorderTraversal(node.left, k);\r\n\r\n        count++;\r\n        if (count == k) {\r\n            result = node.val;\r\n            return;\r\n        }\r\n\r\n        inorderTraversal(node.right, k);\r\n    }\r\n}",
    "javascript": "// Runtime: 75 ms (Top 95.24%) | Memory: 48.7 MB (Top 25.31%)\r\n/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n * this.val = (val===undefined ? 0 : val)\r\n * this.left = (left===undefined ? null : left)\r\n * this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n * @param {number} k\r\n * @return {number}\r\n */\r\nvar kthSmallest = function(root, k) {\r\n    let stack = [];\r\n    while(root != null || stack.length > 0) {\r\n        while(root != null){\r\n            stack.push(root);\r\n            root = root.left\r\n        }\r\n        root = stack.pop();\r\n        if(--k == 0) break;\r\n        root = root.right;\r\n    };\r\n\r\n    return root.val;\r\n};"
  }
}
