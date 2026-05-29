export default {
  "id": 199,
  "name": "Binary Tree Right Side View",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-tree-right-side-view",
  "relativeDir": "B/Binary Tree Right Side View",
  "slug": "0199-binary-tree-right-side-view",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 39,
    "java": 41,
    "python": 26,
    "javascript": 23
  },
  "languages": {
    "cpp": "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    void solve(TreeNode* root, vector<int> &ans, int level)\r\n    {\r\n        // base case\r\n        if (root == NULL)\r\n        {\r\n            return ; \r\n        }\r\n\r\n        // we entered a new level \r\n        if (level == ans.size())\r\n        {\r\n            ans.push_back(root -> val) ; \r\n        }\r\n\r\n        solve(root -> right, ans, level + 1) ; \r\n        solve(root -> left, ans, level + 1 ) ; \r\n    }\r\n    vector<int> rightSideView(TreeNode* root) {\r\n        vector<int> ans ; \r\n        int level = 0 ; \r\n\r\n        solve(root, ans, level) ;\r\n        \r\n        return ans ; \r\n    }\r\n};",
    "python": "# Runtime: 54 ms (Top 45.43%) | Memory: 13.9 MB (Top 70.59%)\r\n# Definition for a binary tree node.\r\n# class TreeNode:\r\n# def __init__(self, val=0, left=None, right=None):\r\n# self.val = val\r\n# self.left = left\r\n# self.right = right\r\nclass Solution:\r\n    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:\r\n\r\n        def dfs(root, d):\r\n\r\n            if not root: return\r\n\r\n            if self.maxi < d:\r\n                self.res.append(root.val)\r\n                self.maxi = d\r\n\r\n            dfs(root.right, d+1)\r\n            dfs(root.left, d+1)\r\n\r\n        self.res, self.maxi = [], 0\r\n        dfs(root, 1)\r\n        return self.res\r\n\r\n        # An Upvote will be encouraging",
    "java": "class Solution {\r\n    // Utility Function of RightSideView\r\n    public void rightView(TreeNode curr, List<Integer> list, int level) {\r\n        // if, current is null, return\r\n        if(curr == null) {\r\n            return;\r\n        }\r\n        \r\n        // if, level = list size\r\n        // add current val to list\r\n        if(level == list.size()) {\r\n            list.add(curr.val);\r\n        }\r\n        \r\n        // recursive call for right side view\r\n        rightView(curr.right, list, level + 1);\r\n        // recursive call for left side view\r\n        rightView(curr.left, list, level + 1);\r\n    }\r\n    \r\n    // Binary Tree Right Side View Function\r\n    public List<Integer> rightSideView(TreeNode root) {\r\n        // create a list\r\n        List<Integer> result = new ArrayList<>();\r\n        // call right view function\r\n        rightView(root, result, 0);\r\n        return result;\r\n    }\r\n}\r\n\r\n// Output -\r\n/*\r\nInput: root = [1,2,3,null,5,null,4]\r\nOutput: [1,3,4]\r\n*/\r\n\r\n// Time & Space Complexity -\r\n/*\r\nTime - O(n)\r\nSpace - O(h) h = height of binary tree\r\n*/",
    "javascript": "var rightSideView = function(root) {\r\n    if(!root) return [];\r\n    let ans = [];\r\n    let queue = [root];\r\n\t\r\n    while(queue.length > 0){\r\n        let queueLength = queue.length;\r\n\t\t\r\n\t\t// As we are giving priority to right node, \r\n\t\t// first node will always be the one that we want in output \r\n        ans.push(queue[0].val);\r\n\t\t\r\n        for(let i = 0;i<queueLength;i++){\r\n\t\t\t// Ignore TC of queue.shift (assuming we have queue implementation with O(1) TC)\r\n            let current = queue.shift();\r\n\t\t\t\r\n\t\t\t// Always give priority to right node\r\n            if(current.right) queue.push(current.right);\r\n            if(current.left) queue.push(current.left);\r\n        }\r\n    }\r\n    return ans;\r\n};"
  }
}
