export default {
  "id": 654,
  "name": "Maximum Binary Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-binary-tree",
  "relativeDir": "M/Maximum Binary Tree",
  "slug": "0654-maximum-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 43,
    "java": 31,
    "python": 10,
    "javascript": 10
  },
  "languages": {
    "cpp": "\r\n/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    TreeNode* constructMaximumBinaryTree(vector<int>& nums) \r\n    {\r\n        return recur(0, nums.size() - 1, nums);\r\n    }\r\n    \r\n    TreeNode* recur(int st, int en, vector<int> &ar)\r\n    {\r\n        if(st > en)\r\n        {\r\n            return NULL;\r\n        }\r\n        TreeNode* cur = new TreeNode();\r\n        int maxm = -1, ind;\r\n        for(int i = st; i <= en; i++)\r\n        {\r\n            if(maxm < ar[i])\r\n            {\r\n                maxm = ar[i];\r\n                ind = i;\r\n            }\r\n        }\r\n        \r\n        cur->val = ar[ind];\r\n        cur->left = recur(st, ind-1, ar);\r\n        cur->right = recur(ind+1, en, ar);\r\n        \r\n        return cur;\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef constructMaximumBinaryTree(self, nums: List[int]) -> Optional[TreeNode]:\r\n\t\tif not nums:\r\n\t\t\treturn None\r\n\t\tm = max(nums)\r\n\t\tidx  = nums.index(m)\r\n\t\troot = TreeNode(m)\r\n\t\troot.left = self.constructMaximumBinaryTree(nums[:idx])\r\n\t\troot.right = self.constructMaximumBinaryTree(nums[idx+1:])\r\n\t\treturn root",
    "java": "class Solution {\r\n    public TreeNode constructMaximumBinaryTree(int[] nums) {\r\n        TreeNode root = construct(nums,0,nums.length-1);\r\n        return root;\r\n    }\r\n    \r\n    private TreeNode construct(int []nums, int start, int end) {\r\n        if(start > end)\r\n            return null;\r\n        if(start == end)\r\n            return new TreeNode(nums[start]);\r\n        \r\n        int maxIdx = findMax(nums,start,end);\r\n        TreeNode root = new TreeNode(nums[maxIdx]);\r\n        \r\n        root.left = construct(nums,start,maxIdx-1);\r\n        root.right = construct(nums,maxIdx+1,end);\r\n        \r\n        return root;\r\n    }\r\n    \r\n    private int findMax(int []arr, int low, int high) {\r\n        int idx = -1, max = Integer.MIN_VALUE;\r\n        for(int i=low;i<=high;++i) \r\n            if(arr[i]>max) {\r\n                max = arr[i];\r\n                idx = i;\r\n            }\r\n        return idx;\r\n    }\r\n}",
    "javascript": "// Runtime: 81 ms (Top 79.6%) | Memory: 49.10 MB (Top 75.12%)\r\n\r\nvar constructMaximumBinaryTree = function(nums) {\r\n    max = Math.max(...nums)\r\n    var index = nums.indexOf(max)\r\n    var tree = new TreeNode(max)\r\n    if(index !==0) tree.left = constructMaximumBinaryTree(nums.slice(0,index));\r\n    if(index !==nums.length-1) tree.right=constructMaximumBinaryTree(nums.slice(index+1));\r\n    return tree\r\n}"
  }
}
