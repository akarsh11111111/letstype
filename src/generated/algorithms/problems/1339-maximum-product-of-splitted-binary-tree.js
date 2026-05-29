export default {
  "id": 1339,
  "name": "Maximum Product of Splitted Binary Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-product-of-splitted-binary-tree",
  "relativeDir": "M/Maximum Product of Splitted Binary Tree",
  "slug": "1339-maximum-product-of-splitted-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 36,
    "python": 24,
    "javascript": 38
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    int mod = 1e9+7;\r\n    unordered_map<TreeNode*,pair<long long int,long long int>> mp;\r\n    long long int helper(TreeNode* root){\r\n        if(!root)\r\n            return 0;\r\n        long long int ls = 0,rs = 0;\r\n        if(root->left)\r\n            ls = helper(root->left);\r\n        if(root->right)\r\n            rs = helper(root->right);\r\n        mp[root] = {ls,rs};\r\n        return ls+rs+root->val;\r\n    }\r\n    long long int ans = 0;\r\n    void helper2(TreeNode* root,long long int adon){\r\n        if(root == NULL)\r\n            return;\r\n        long long int x = root->val + adon;\r\n        ans = max(ans,max((x+mp[root].first)*mp[root].second,(x+mp[root].second)*mp[root].first));\r\n        helper2(root->left,x+mp[root].second);\r\n        helper2(root->right,x+mp[root].first);\r\n    }\r\n    int maxProduct(TreeNode* root) {\r\n        long long int x = helper(root);\r\n        helper2(root,0);\r\n        return ans%mod;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def maxProduct(self, root: Optional[TreeNode]) -> int:\r\n        def findTotalSum(node, totalSum):\r\n            if node is None:\r\n                return totalSum\r\n            totalSum = findTotalSum(node.left,totalSum)\r\n            totalSum += node.val\r\n            totalSum = findTotalSum(node.right,totalSum)\r\n            return totalSum\r\n        \r\n        def dfs(node,maxProd,totalSum):\r\n            if node is None:\r\n                return maxProd,0\r\n            if not node.left and not node.right:\r\n                return maxProd,node.val\r\n            maxProd, lSum = dfs(node.left,maxProd,totalSum)\r\n            maxProd, rSum = dfs(node.right,maxProd,totalSum)\r\n            subTreeSum = lSum+rSum+node.val\r\n            maxProd = max(maxProd,(totalSum-lSum)*lSum,(totalSum-rSum)*rSum,(totalSum-subTreeSum)*subTreeSum)\r\n            return maxProd, subTreeSum\r\n        \r\n        totalSum = findTotalSum(root, 0)\r\n        product,_ = dfs(root,1,totalSum)\r\n        return product % (pow(10,9)+7)",
    "java": "// Runtime: 12 ms (Top 82.12%) | Memory: 70.1 MB (Top 38.32%)\r\nclass Solution {\r\n    public void findMaxSum(TreeNode node,long sum[]){\r\n        if(node==null) return ;\r\n\r\n        findMaxSum(node.left,sum);\r\n        findMaxSum(node.right,sum);\r\n\r\n        sum[0]+=node.val;\r\n\r\n    }\r\n\r\n    public long findProd(TreeNode node,long sum[],long []max){\r\n        if(node==null) return 0;\r\n\r\n        long left=findProd(node.left, sum, max);\r\n        long right=findProd(node.right,sum,max);\r\n\r\n        long val=left+right+node.val;\r\n\r\n        max[0]=Math.max(max[0],val*(sum[0]-val));\r\n\r\n        return val;\r\n    }\r\n    public int maxProduct(TreeNode root) {\r\n\r\n        long max[]=new long[1];\r\n        long sum[]=new long[1];\r\n\r\n        findMaxSum(root,sum);\r\n\r\n       long n= findProd(root,sum,max);\r\n\r\n        return (int)(max[0]%((int)1e9+7));\r\n    }\r\n}",
    "javascript": "var maxProduct = function(root) {\r\n    const lefteRightSumMap = new Map();\r\n    \r\n    function getLeftRightSumMap(node) {\r\n        if (node === null)\r\n            return 0;\r\n\r\n        let leftSum = getLeftRightSumMap(node.left);\r\n        let rightSum = getLeftRightSumMap(node.right);\r\n        \r\n        lefteRightSumMap.set(node, {leftSum, rightSum});\r\n        \r\n        return leftSum + rightSum + node.val;\r\n    }\r\n    \r\n    getLeftRightSumMap(root);\r\n    \r\n    let maxProduct = -Infinity;\r\n\r\n    function getMaxProductDFS(node, parentSum) {\r\n        if (node === null) return;\r\n        \r\n        const {leftSum, rightSum} = lefteRightSumMap.get(node);\r\n        \r\n        // cut left edge\r\n        maxProduct = Math.max(maxProduct, leftSum * (parentSum + node.val + rightSum));\r\n        \r\n        // cut right edge\r\n        maxProduct = Math.max(maxProduct, rightSum * (parentSum + node.val + leftSum));\r\n\r\n        getMaxProductDFS(node.left, parentSum + node.val + rightSum);\r\n        getMaxProductDFS(node.right, parentSum + node.val + leftSum);\r\n    }\r\n    \r\n    getMaxProductDFS(root, 0);\r\n    \r\n    return maxProduct % (Math.pow(10, 9) + 7);\r\n};"
  }
}
