export default {
  "id": 2265,
  "name": "Count Nodes Equal to Average of Subtree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree",
  "relativeDir": "C/Count Nodes Equal to Average of Subtree",
  "slug": "2265-count-nodes-equal-to-average-of-subtree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 18,
    "java": 25,
    "python": 26,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 95.3%) | Memory: 11.96 MB (Top 50.2%)\r\n\r\nclass Solution {\r\npublic:\r\n    pair<int,int> func(TreeNode* root,int &ans){\r\n        if(!root)return {0,0};\r\n        auto p1=func(root->left,ans);\r\n        auto p2=func(root->right,ans);\r\n        int avg=(root->val+p1.first+p2.first)/(p1.second+p2.second+1);\r\n        if(avg==root->val)ans++;\r\n        return {root->val+p1.first+p2.first,p1.second+p2.second+1};\r\n    }\r\n    int averageOfSubtree(TreeNode* root) {\r\n        int ans=0;\r\n        func(root,ans);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def averageOfSubtree(self, root: Optional[TreeNode]) -> int:\r\n        \r\n        \r\n        def calculate_average(root):\r\n            if root:\r\n                self.summ+=root.val\r\n                self.nodecount+=1\r\n                calculate_average(root.left)\r\n                calculate_average(root.right)\r\n        \r\n        \r\n        def calculate_for_each_node(root):\r\n            if root:\r\n                self.summ = 0\r\n                self.nodecount = 0\r\n                calculate_average(root)\r\n                if ((self.summ)//(self.nodecount)) == root.val:\r\n                    self.count+=1 \r\n                calculate_for_each_node(root.left)\r\n                calculate_for_each_node(root.right)\r\n                \r\n                \r\n        self.count = 0\r\n        calculate_for_each_node(root)       \r\n        return self.count",
    "java": "class Solution {\r\n    int res = 0;\r\n    public int averageOfSubtree(TreeNode root) {\r\n        dfs(root);\r\n        return res;\r\n    }\r\n    \r\n    private int[] dfs(TreeNode node) {\r\n        if(node == null) {\r\n            return new int[] {0,0};\r\n        }\r\n        \r\n        int[] left = dfs(node.left);\r\n        int[] right = dfs(node.right);\r\n        \r\n        int currSum = left[0] + right[0] + node.val;\r\n        int currCount = left[1] + right[1] + 1;\r\n        \r\n        if(currSum / currCount == node.val) {\r\n            res++;\r\n        }\r\n            \r\n        return new int[] {currSum, currCount};\r\n    }\r\n}",
    "javascript": "// Runtime: 73 ms (Top 20.02%) | Memory: 47.50 MB (Top 17.03%)\r\n\r\nvar averageOfSubtree = function(root) {\r\n    let result = 0;\r\n    \r\n    const traverse = node => {\r\n        if (!node) return [0, 0];\r\n        \r\n        const [leftSum, leftCount] = traverse(node.left);\r\n        const [rightSum, rightCount] = traverse(node.right);\r\n        \r\n        const currSum = node.val + leftSum + rightSum;\r\n        const currCount = 1 + leftCount + rightCount;\r\n        \r\n        if (Math.floor(currSum / currCount) === node.val) result++;\r\n        \r\n        return [currSum, currCount];\r\n    };\r\n    \r\n    traverse(root);\r\n    return result;\r\n};"
  }
}
