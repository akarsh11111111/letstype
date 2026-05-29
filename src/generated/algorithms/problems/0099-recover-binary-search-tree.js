export default {
  "id": 99,
  "name": "Recover Binary Search Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/recover-binary-search-tree",
  "relativeDir": "R/Recover Binary Search Tree",
  "slug": "0099-recover-binary-search-tree",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 23,
    "python": 53,
    "javascript": 22
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> v;\r\n    int i=0;\r\n    void inorder(TreeNode* root){\r\n        if(!root) return;\r\n        inorder(root->left);\r\n        v.push_back(root->val);\r\n        inorder(root->right);\r\n    }\r\n    void check(TreeNode* root){\r\n        if(!root) return;\r\n        check(root->left);\r\n        if(v[i]!=root->val) swap(v[i],root->val);\r\n        i++;\r\n        check(root->right);\r\n    }\r\n    void recoverTree(TreeNode* root) {\r\n        inorder(root);\r\n        sort(v.begin(),v.end());\r\n        check(root);\r\n    }\r\n};",
    "python": "# Runtime: 61 ms (Top 95.6%) | Memory: 16.68 MB (Top 75.1%)\r\n\r\nclass Solution:\r\n    \r\n    \"\"\"\r\n        Brute force kind of thing\r\n        -> Inorder Traversal returns sorted array\r\n        -> find a swap btwn numbers to make sorted\r\n        Make single swap to make array sorted\r\n        [1, 2, 3, 4, 10, 6, 9, 5, 10, 12]\r\n         x, x, x, x, x, No\r\n            prev number is mismatch -> 10 is cause\r\n        now go frm right to left\r\n        [1, 2, 3, 4, 10, 6, 9, 5, 11, 12]\r\n                            No x   x   x\r\n                        mismatch with next number -> 5 is the cause\r\n        swap 10, 5\r\n        \r\n        Eg: 2\r\n        [3, 2, 1]\r\n         x  No -> 3 is the cause\r\n        [3, 2, 1]\r\n         x  No -> 1 is the cause\r\n        swap values -> 1, 3\r\n    \"\"\"\r\n    \r\n    def inorder(self, root, li):\r\n        if root is None:\r\n            return li\r\n        li = self.inorder(root.left, li)\r\n        li.append(root)\r\n        li = self.inorder(root.right, li)\r\n        return li\r\n    \r\n    def recoverTree(self, root: TreeNode) -> None:\r\n        \"\"\"\r\n        Do not return anything, modify root in-place instead.\r\n        \"\"\"\r\n        li = self.inorder(root, [])\r\n        n = len(li)\r\n        i, j = 1, n-2\r\n        a = li[0]\r\n        for i in range(1, n):\r\n            if li[i].val < li[i-1].val:\r\n                a = li[i-1]\r\n                break\r\n        b = li[-1]\r\n        for i in range(n-2, -1, -1):\r\n            if li[i].val > li[i+1].val:\r\n                b = li[i+1]\r\n                break\r\n\r\n        a.val,b.val = b.val, a.val",
    "javascript": "// Runtime: 269 ms (Top 19.02%) | Memory: 52.1 MB (Top 64.55%)\r\nvar recoverTree = function(root) {\r\n    const arr = [];\r\n    const traverse = (r = root) => {\r\n        if(!r) return;\r\n        traverse(r.left);\r\n        arr.push(r.val);\r\n        traverse(r.right);\r\n    }\r\n    traverse();\r\n\r\n    arr.sort((a, b) => a - b);\r\n    let k = 0;\r\n    const recover = (r = root) => {\r\n        if(!r) return null;\r\n        recover(r.left);\r\n        r.val = arr[k++];\r\n        recover(r.right);\r\n    }\r\n    recover();\r\n    return root;\r\n};"
  }
}
