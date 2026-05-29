export default {
  "id": 637,
  "name": "Average of Levels in Binary Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/average-of-levels-in-binary-tree",
  "relativeDir": "A/Average of Levels in Binary Tree",
  "slug": "0637-average-of-levels-in-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 21,
    "java": 19,
    "python": 29,
    "javascript": 22
  },
  "languages": {
    "cpp": "// Runtime: 38 ms (Top 5.39%) | Memory: 22.80 MB (Top 76.84%)\r\n\r\nclass Solution {\r\npublic:\r\n    vector<double> averageOfLevels(TreeNode* root) {\r\n        queue<TreeNode*> q;\r\n        q.push(root);\r\n        vector<double> ans;\r\n        while (q.size()) {\r\n            double qlen = q.size(), row = 0;\r\n            for (int i = 0; i < qlen; i++) {\r\n                TreeNode* curr = q.front(); q.pop();\r\n                row += curr->val;\r\n                if (curr->left) q.push(curr->left);\r\n                if (curr->right) q.push(curr->right);\r\n            }\r\n            ans.push_back(row/qlen);\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "// Runtime: 40 ms (Top 94.14%) | Memory: 19.30 MB (Top 21.03%)\r\n\r\nclass Solution:\r\n    def averageOfLevels(self, root: TreeNode) -> List[float]:\r\n        \r\n        if not root:\r\n            \r\n            # Quick response for empty tree\r\n            return []\r\n        \r\n        traversal_q = [root]\r\n        \r\n        average = []\r\n        \r\n        while traversal_q:\r\n            \r\n            # compute current level average\r\n            cur_avg = sum( (node.val for node in traversal_q if node) ) / len(traversal_q)\r\n            \r\n            # add to result\r\n            average.append( cur_avg )\r\n            \r\n            # update next level queue\r\n            next_level_q = [ child for node in traversal_q for child in (node.left, node.right) if child ]\r\n            \r\n            # update traversal queue as next level's\r\n            traversal_q = next_level_q\r\n            \r\n        return average",
    "java": "// Runtime: 2 ms (Top 97.1%) | Memory: 45.45 MB (Top 6.9%)\r\n\r\nclass Solution {\r\n    public List<Double> averageOfLevels(TreeNode root) {\r\n        Queue<TreeNode> q = new LinkedList<>(List.of(root));\r\n        List<Double> ans = new ArrayList<>();\r\n        while (q.size() > 0) {\r\n            double qlen = q.size(), row = 0;\r\n            for (int i = 0; i < qlen; i++) {\r\n                TreeNode curr = q.poll();\r\n                row += curr.val;\r\n                if (curr.left != null) q.offer(curr.left);\r\n                if (curr.right != null) q.offer(curr.right);\r\n            }\r\n            ans.add(row/qlen);\r\n        }\r\n        return ans;\r\n    }\r\n}",
    "javascript": "// Runtime: 131 ms (Top 34.38%) | Memory: 47 MB (Top 75.16%)\r\nvar averageOfLevels = function(root) {\r\nlet avg = [root.val];\r\nlet level = [];\r\nlet queue = [root];\r\nwhile(queue.length>0){\r\n    let curr = queue.shift();\r\n    if(curr.left){\r\n        level.push(curr.left)\r\n    }\r\n    if(curr.right){\r\n        level.push(curr.right);\r\n    }\r\n    if(queue.length===0){\r\n        queue.push(...level);\r\n        avg.push(level.reduce((a,b) => a+b.val,0)/level.length);\r\n        level = [];\r\n    }\r\n}\r\navg.pop()\r\nreturn avg;\r\n};"
  }
}
