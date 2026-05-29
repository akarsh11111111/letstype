export default {
  "id": 1305,
  "name": "All Elements in Two Binary Search Trees",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/all-elements-in-two-binary-search-trees",
  "relativeDir": "A/All Elements in Two Binary Search Trees",
  "slug": "1305-all-elements-in-two-binary-search-trees",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 20,
    "java": 32,
    "python": 21,
    "javascript": 12
  },
  "languages": {
    "cpp": "// Runtime: 265 ms (Top 34.71%) | Memory: 85.2 MB (Top 55.38%)\r\nclass Solution {\r\npublic:\r\n    vector<int> v;\r\n    void Temp(TreeNode* root)\r\n    {\r\n        if(root!=NULL){\r\n        Temp(root->left);\r\n        v.push_back(root->val);\r\n        Temp(root->right);\r\n        }\r\n    }\r\n    vector<int> getAllElements(TreeNode* root1, TreeNode* root2) {\r\n        Temp(root1);\r\n        Temp(root2);\r\n        sort(v.begin(), v.end());\r\n\r\n        return v;\r\n    }\r\n};",
    "python": "\r\n# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\n    def getAllElements(self, root1: TreeNode, root2: TreeNode) -> List[int]:\r\n        \r\n        \r\n        l1,l2=[],[]\r\n        def preorder(root,l):\r\n            if root is None:\r\n                return \r\n            preorder(root.left,l)\r\n            l.append(root.val)\r\n            preorder(root.right,l)\r\n        preorder(root1,l1)\r\n        preorder(root2,l2)\r\n        return sorted(l1+l2)",
    "java": "// Runtime: 19 ms (Top 53.0%) | Memory: 44.86 MB (Top 93.0%)\r\n\r\nclass Solution {\r\n    public List<Integer> getAllElements(TreeNode root1, TreeNode root2) {\r\n        Stack<TreeNode> st1 = new Stack<>();\r\n        Stack<TreeNode> st2 = new Stack<>();\r\n        \r\n        List<Integer> res = new ArrayList<>();\r\n        \r\n        while(root1 != null || root2 != null || !st1.empty() || !st2.empty()){\r\n            while(root1 != null){\r\n                st1.push(root1);\r\n                root1 = root1.left;\r\n            }\r\n            while(root2 != null){\r\n                st2.push(root2);\r\n                root2 = root2.left;\r\n            }\r\n            if(st2.empty() || (!st1.empty() && st1.peek().val <= st2.peek().val)){\r\n                root1 = st1.pop();\r\n                res.add(root1.val);\r\n                root1 = root1.right;\r\n            }\r\n            else{\r\n                root2 = st2.pop();\r\n                res.add(root2.val);\r\n                root2 = root2.right;\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var getAllElements = function(root1, root2) {\r\n    const ans = [];\r\n    const traverse = (r) => {\r\n        if(!r) return;\r\n        traverse(r.left);\r\n        ans.push(r.val);\r\n        traverse(r.right);\r\n    }\r\n    traverse(root1);\r\n    traverse(root2);\r\n    return ans.sort((a, b) => a - b);\r\n};"
  }
}
