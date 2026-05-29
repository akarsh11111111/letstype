export default {
  "id": 108,
  "name": "Convert Sorted Array to Binary Search Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree",
  "relativeDir": "C/Convert Sorted Array to Binary Search Tree",
  "slug": "0108-convert-sorted-array-to-binary-search-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 13,
    "python": 14,
    "javascript": 11
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    TreeNode* sortedArrayToBST(vector<int>& nums) {\r\n        \r\n        int n = nums.size(); \r\n        if(n==0) //if no elements are present\r\n            return NULL;\r\n        if(n==1) //if only one element is present\r\n            return new TreeNode(nums[0]); //create the root node with that element\r\n        \r\n        int mid = n/2; //finding the position of the middle element in the array\r\n        TreeNode* root = new TreeNode(nums[mid]); //create root node with mid element\r\n        \r\n        vector<int> l (nums.begin(), nums.begin()+mid); //left subarray\r\n        vector<int> r (nums.begin()+mid+1, nums.end()); //right subarray\r\n        \r\n        //using recursion to form the rest of the nodes :\r\n        \r\n        //the left nodes of the root must be smaller than root\r\n        root->left = sortedArrayToBST(l); \r\n        \r\n        //the right nodes of the root must be greater than root\r\n        root->right = sortedArrayToBST(r);\r\n        \r\n        return root;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def formNodes(self,nums, l,r):\r\n        if l > r:\r\n            return None\r\n        else:\r\n            mid = l+(r-l)//2\r\n            node = TreeNode(nums[mid])\r\n            node.left = self.formNodes(nums, l,mid-1)\r\n            node.right = self.formNodes(nums, mid+1,r)\r\n            return node\r\n        \r\n        \r\n    def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:\r\n        return self.formNodes(nums, 0,len(nums)-1)",
    "java": "// Runtime: 1 ms (Top 33.54%) | Memory: 45.2 MB (Top 7.46%)\r\nclass Solution {\r\n    public TreeNode sortedArrayToBST(int[] nums) {\r\n        if (nums.length == 0) return null;\r\n        var mid = nums.length / 2;\r\n        var root = new TreeNode(nums[mid]);\r\n        var left_array = Arrays.copyOfRange(nums, 0, mid);\r\n        var right_array = Arrays.copyOfRange(nums, mid + 1, nums.length);\r\n        root.left = sortedArrayToBST(left_array);\r\n        root.right = sortedArrayToBST(right_array);\r\n        return root;\r\n    }\r\n}",
    "javascript": "// Runtime: 99 ms (Top 68.02%) | Memory: 44.9 MB (Top 22.45%)\r\n\r\nvar sortedArrayToBST = function(nums) {\r\n    if (nums.length === 0) return null;\r\n    // array length - 1 divided by 2\r\n    let mid = (nums.length - 1) >> 1;\r\n    let node = new TreeNode(nums[mid]);\r\n    node.left = sortedArrayToBST(nums.slice(0, mid));\r\n    node.right = sortedArrayToBST(nums.slice(mid + 1));\r\n    return node;\r\n};"
  }
}
