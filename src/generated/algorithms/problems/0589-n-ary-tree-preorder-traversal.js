export default {
  "id": 589,
  "name": "N-ary Tree Preorder Traversal",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/n-ary-tree-preorder-traversal",
  "relativeDir": "N/N-ary Tree Preorder Traversal",
  "slug": "0589-n-ary-tree-preorder-traversal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 17,
    "java": 19,
    "python": 17,
    "javascript": 3
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<int> preorder(Node* root) {\r\n        vector<int>ans;\r\n        stack<Node*>st;\r\n        st.push(root);\r\n        while(!st.empty()){\r\n            auto frnt=st.top();\r\n            st.pop();\r\n            ans.push_back(frnt->val);\r\n            for(int i=frnt->children.size()-1;i>=0;i--){\r\n                st.push(frnt->children[i]);\r\n            }\r\n        }\r\n        return ans;\r\n    }\r\n};",
    "python": "function preorder(root: Node | null): number[] {\r\n  const res: number[] = [];\r\n\r\n  const getNodeVal = (node: Node | null): void => {\r\n    if (node) {\r\n      res.push(node.val);\r\n\r\n      for (let i = 0; i < node.children.length; i++) {\r\n        getNodeVal(node.children[i]);\r\n      }\r\n    }\r\n  };\r\n\r\n  getNodeVal(root);\r\n\r\n  return res;\r\n}",
    "java": "class Solution {\r\n    public List<Integer> preorder(Node root) {\r\n        if (root == null) return new ArrayList<Integer>();\r\n        \r\n        Stack<Node> stk = new Stack<Node>();\r\n        ArrayList<Integer> arr = new ArrayList<Integer>();\r\n        stk.push(root);\r\n        Node ref;\r\n        while(!stk.empty()) {\r\n            ref = stk.pop();\r\n            // System.out.println(ref.val);\r\n            arr.add(ref.val);\r\n            for(int i=ref.children.size() - 1;i>=0;i--) {\r\n                stk.push(ref.children.get(i));\r\n            }\r\n        }\r\n        return arr;\r\n    }\r\n}",
    "javascript": "var preorder = function(root) {\r\n    return [root.val].concat(root.children.map( (c)=>c ? preorder(c) : [] ).flat() );\r\n};"
  }
}
