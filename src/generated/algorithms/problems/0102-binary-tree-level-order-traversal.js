export default {
  "id": 102,
  "name": "Binary Tree Level Order Traversal",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-tree-level-order-traversal",
  "relativeDir": "B/Binary Tree Level Order Traversal",
  "slug": "0102-binary-tree-level-order-traversal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 34,
    "java": 37,
    "python": 30,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> levelOrder(TreeNode* root) {\r\n       queue<TreeNode *>q;\r\n        vector<vector<int>> result;\r\n        if(root==NULL) return result;\r\n        q.push(root);\r\n        q.push(NULL);\r\n        vector<int>temp;\r\n        while(!q.empty())\r\n        {\r\n            TreeNode *top = q.front();\r\n            q.pop();\r\n            if(top==NULL)\r\n            {\r\n                result.push_back(temp);\r\n                temp.clear();\r\n                if(!q.empty())\r\n                {\r\n                    q.push(NULL);\r\n                    continue;\r\n                }\r\n                return result;               \r\n            }\r\n            else temp.push_back(top->val);                            \r\n            \r\n            if(top->left) q.push(top->left);                \r\n               \r\n            if(top->right) q.push(top->right);            \r\n        }\r\n        \r\n        return result;\r\n    }\r\n};",
    "python": "# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    \r\n        \r\n    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:\r\n        \r\n        ret = []\r\n        next_levels = [[root]]\r\n        \r\n        for level in next_levels:\r\n            curr_lv = []\r\n            next_lv = []\r\n            for node in level:\r\n                if not node: \r\n                    continue\r\n                curr_lv.append(node.val)\r\n                next_lv.append(node.left)\r\n                next_lv.append(node.right)\r\n            \r\n            if curr_lv: \r\n                ret.append(curr_lv)\r\n            if next_lv: \r\n                next_levels.append(next_lv)\r\n        \r\n        return ret",
    "java": "// Runtime: 2 ms (Top 39.54%) | Memory: 43.4 MB (Top 69.45%)\r\nclass Solution {\r\n    public List<List<Integer>> levelOrder(TreeNode root) {\r\n        List<List<Integer>> result = new ArrayList<>();\r\n        if(root == null)\r\n            return result;\r\n        List<Integer> rootList = new ArrayList<>();\r\n        rootList.add(root.val);\r\n        result.add(rootList);\r\n        levelOrder(root,1,result);\r\n        return result;\r\n\r\n    }\r\n\r\n    private void levelOrder(TreeNode root, int level, List<List<Integer>> result) {\r\n        if(root == null)\r\n            return;\r\n        List<Integer> children = exploreChildren(root);\r\n        if(!children.isEmpty()){\r\n            if(level < result.size())\r\n                result.get(level).addAll(children);\r\n            else\r\n                result.add(children);\r\n        }\r\n        levelOrder(root.left, level + 1, result);\r\n        levelOrder(root.right, level + 1,result);\r\n    }\r\n\r\n    private List<Integer> exploreChildren(TreeNode root) {\r\n        List<Integer> children = new ArrayList<>();\r\n        if(root.left != null)\r\n            children.add(root.left.val);\r\n        if(root.right != null)\r\n            children.add(root.right.val);\r\n        return children;\r\n    }\r\n}",
    "javascript": "// Runtime: 113 ms (Top 25.04%) | Memory: 44.6 MB (Top 16.66%)\r\nvar levelOrder = function(root) {\r\n  const result = [];\r\n  if (root == null) return result\r\n\r\n  let lvl = 0;\r\n  let temp = [];\r\n  let q = new Queue();\r\n  q.enqueue(root)\r\n\r\n  while (!q.isEmpty()) {\r\n    let levelSize = q.size();\r\n    while (levelSize-- != 0) {\r\n      let node = q.dequeue()\r\n      temp.push(node.val)\r\n      // enqueue both children first,\r\n      // before looking at the next dequeued item\r\n      if (node.left != null) q.enqueue(node.left);\r\n      if (node.right != null) q.enqueue(node.right);\r\n    }\r\n    result.push(temp);\r\n    temp = [];\r\n    lvl +=1\r\n  }\r\n\r\n  return result\r\n};"
  }
}
