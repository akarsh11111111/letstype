export default {
  "id": 590,
  "name": "N-ary Tree Postorder Traversal",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/n-ary-tree-postorder-traversal",
  "relativeDir": "N/N-ary Tree Postorder Traversal",
  "slug": "0590-n-ary-tree-postorder-traversal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 13,
    "python": 20,
    "javascript": 12
  },
  "languages": {
    "cpp": " class Solution {\r\npublic:\r\n    void solve(Node*root,vector<int>&ans){\r\n        if(root==NULL)return;\r\n        for(int i=0;i<root->children.size();i++){\r\n            solve(root->children[i],ans);\r\n        }\r\n        ans.push_back(root->val);\r\n    }\r\n    vector<int> postorder(Node* root) {\r\n        vector<int>ans;\r\n        solve(root,ans);\r\n        return ans;\r\n    }",
    "python": "\"\"\"\r\n# Definition for a Node.\r\nclass Node:\r\n    def __init__(self, val=None, children=None):\r\n        self.val = val\r\n        self.children = children\r\n\"\"\"\r\n\r\nclass Solution:\r\n    def postorder(self, root: 'Node') -> List[int]:\r\n        ans=[]\r\n        def post(root):\r\n            nonlocal ans\r\n            if not root:\r\n                return\r\n            for i in root.children:\r\n                post(i)\r\n            ans.append(root.val)\r\n        post(root)\r\n        return ans",
    "java": "class Solution {\r\n    List<Integer> result = new ArrayList<>();\r\n    public List<Integer> postorder(Node root) {\r\n        addNodes(root);\r\n        return result;\r\n    }\r\n    \r\n    void addNodes(Node root) {\r\n        if (root == null) return;\r\n        for (Node child : root.children) addNodes(child);\r\n        result.add(root.val);\r\n    }\r\n}",
    "javascript": "var postorder = function(root) {\r\n    const res = [];\r\n    function post(node) {\r\n        if (!node) return;\r\n        for (let child of node.children) {\r\n            post(child);\r\n        }\r\n        res.push(node.val);\r\n    }\r\n    post(root);\r\n    return res;\r\n};"
  }
}
