export default {
  "id": 107,
  "name": "Binary Tree Level Order Traversal II",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-tree-level-order-traversal-ii",
  "relativeDir": "B/Binary Tree Level Order Traversal II",
  "slug": "0107-binary-tree-level-order-traversal-ii",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 26,
    "java": 38,
    "python": 13,
    "javascript": 15
  },
  "languages": {
    "cpp": "class Solution {\r\n    void dft(TreeNode* root, int level, map<int,vector<int>,std::greater<int>>& levelVals)\r\n    {\r\n        if (root == nullptr)\r\n            return;\r\n        \r\n        if (levelVals.find(level) == levelVals.end())\r\n            levelVals[level] = {root->val};\r\n        else\r\n            levelVals[level].push_back(root->val);\r\n        \r\n        dft(root->left,level+1,levelVals);\r\n        dft(root->right,level+1,levelVals);\r\n    }\r\npublic:\r\n    vector<vector<int>> levelOrderBottom(TreeNode* root) {\r\n        map<int,vector<int>,std::greater<int>> levelVals;\r\n        dft(root,0,levelVals);\r\n        \r\n        vector<vector<int>> res;\r\n        for (const auto& [level,vals] : levelVals)\r\n            res.push_back(vals);\r\n        \r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def levelOrderBottom(self, root: Optional[TreeNode]) -> List[List[int]]:\r\n        def dfs(node, level, result):\r\n            if not node:\r\n                return\r\n            if level >= len(result):\r\n                result.append([])\r\n            result[level].append(node.val)\r\n            dfs(node.left, level+1, result)\r\n            dfs(node.right, level+1, result)\r\n        result = []\r\n        dfs(root, 0, result)\r\n        return result[::-1]",
    "java": "/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n *     int val;\r\n *     TreeNode left;\r\n *     TreeNode right;\r\n *     TreeNode() {}\r\n *     TreeNode(int val) { this.val = val; }\r\n *     TreeNode(int val, TreeNode left, TreeNode right) {\r\n *         this.val = val;\r\n *         this.left = left;\r\n *         this.right = right;\r\n *     }\r\n * }\r\n */\r\nclass Solution {\r\n    public List<List<Integer>> levelOrderBottom(TreeNode root) {\r\n        Queue<TreeNode> al=new LinkedList<>();\r\n        List<List<Integer>> fal=new LinkedList<>();\r\n        if(root==null) return fal;\r\n        al.offer(root);\r\n        while(!al.isEmpty()){\r\n            List<Integer> aal=new LinkedList<>();\r\n            int num=al.size();\r\n            for(int i=0;i<num;i++){\r\n                if(al.peek().left != null){\r\n                    al.offer(al.peek().left);\r\n                }\r\n                if( al.peek().right != null){\r\n                    al.offer(al.peek().right);\r\n                }\r\n                aal.add(al.poll().val);\r\n            }\r\n            fal.add(0,aal);\r\n        }\r\n        return fal;\r\n    }\r\n}",
    "javascript": "// Runtime: 110 ms (Top 30.61%) | Memory: 44.3 MB (Top 44.87%)\r\nvar levelOrderBottom = function(root) {\r\n    let solution = []\r\n    function dfs(node, level) {\r\n        if(!node) return null\r\n\r\n        if(!solution[level]) solution[level] = []\r\n        solution[level].push(node.val)\r\n\r\n        dfs(node.left, level + 1)\r\n        dfs(node.right, level + 1)\r\n    }\r\n    dfs(root, 0)\r\n    return solution.reverse()\r\n};"
  }
}
