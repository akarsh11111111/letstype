export default {
  "id": 1382,
  "name": "Balance a Binary Search Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/balance-a-binary-search-tree",
  "relativeDir": "B/Balance a Binary Search Tree",
  "slug": "1382-balance-a-binary-search-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 30,
    "python": 30,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 305 ms (Top 25.60%) | Memory: 63.3 MB (Top 34.89%)\r\nclass Solution {\r\npublic:\r\n    vector<int> nums ;\r\n    void traverse(TreeNode * root){\r\n        if(!root) return ;\r\n        traverse(root->left) ;\r\n        nums.push_back(root->val) ;\r\n        traverse(root->right) ;\r\n        return ;\r\n    }\r\n\r\n    TreeNode * makeTree(int s , int e){\r\n        if(s > e) return nullptr ;\r\n        int m = (s + e) / 2 ;\r\n        TreeNode * root = new TreeNode(nums[m]) ;\r\n\r\n        root->left = makeTree(s,m - 1) ;\r\n        root->right = makeTree(m + 1,e) ;\r\n\r\n        return root ;\r\n    }\r\n\r\n    TreeNode* balanceBST(TreeNode* root) {\r\n        traverse(root) ;\r\n        return makeTree(0,size(nums) - 1) ;\r\n    }\r\n};",
    "python": "# Definition for a binary tree node.\r\n# class TreeNode(object):\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution(object):\r\n    def balanceBST(self, root):\r\n        \"\"\"\r\n        :type root: TreeNode\r\n        :rtype: TreeNode\r\n        \"\"\"\r\n        arr = []\r\n        self.flatTree(root, arr)\r\n        return self.createTree(arr, 0, len(arr))\r\n    \r\n    def flatTree(self, root, arr):\r\n        if not root:\r\n            return\r\n        self.flatTree(root.left, arr)\r\n        arr.append(root)\r\n        self.flatTree(root.right, arr)\r\n    \r\n    def createTree(self, arr, start, length):\r\n        if length == 0:\r\n            return None\r\n        root = arr[start + length / 2]\r\n        root.left = self.createTree(arr, start, length / 2)\r\n        root.right = self.createTree(arr, start + length / 2 + 1, length - length / 2 - 1)\r\n        return root",
    "java": "class Solution {\r\n    public TreeNode balanceBST(TreeNode root) {\r\n        List<Integer> arr = new ArrayList();\r\n        InOrder( root,  arr);\r\n        return sortedArrayToBST( arr, 0, arr.size()-1);\r\n    }\r\n    \r\n    public void InOrder(TreeNode node, List<Integer> arr){\r\n        if(node != null){\r\n            InOrder( node.left, arr);\r\n            arr.add(node.val);\r\n            InOrder( node.right, arr);\r\n        }\r\n    }\r\n    \r\n    public TreeNode sortedArrayToBST(List<Integer> arr, int start, int end) {\r\n\r\n        if (start > end) {\r\n            return null;\r\n        }\r\n \r\n        int mid = (start + end) / 2;\r\n        \r\n        TreeNode node = new TreeNode(arr.get(mid));\r\n        node.left = sortedArrayToBST(arr, start, mid - 1);\r\n        node.right = sortedArrayToBST(arr, mid + 1, end);\r\n         \r\n        return node;\r\n    }\r\n}",
    "javascript": "var balanceBST = function(root) {\r\nlet arr = [];//store sorted value in array\r\nlet InOrder = (node) => {//inorder helper to traverse and store sorted values in array\r\n    if(!node)\r\n        return;\r\n    InOrder(node.left);\r\n    arr.push(node.val);\r\n    InOrder(node.right);\r\n}\r\nInOrder(root);\r\nlet BalancedFromSortedArray = (arr, start, end) => {//create Balanced tree from sorted array\r\n    if(start>end)\r\n        return null;\r\n    let mid = Math.floor((start+end)/2);\r\n    let newNode = new TreeNode(arr[mid]);\r\n    newNode.left = BalancedFromSortedArray(arr,start,mid-1);\r\n    newNode.right = BalancedFromSortedArray(arr,mid+1,end);\r\n    return newNode;\r\n}\r\nlet Balanced = BalancedFromSortedArray(arr,0,arr.length-1);\r\nreturn Balanced;\r\n};"
  }
}
