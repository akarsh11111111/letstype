export default {
  "id": 2096,
  "name": "Step-By-Step Directions From a Binary Tree Node to Another",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another",
  "relativeDir": "S/Step-By-Step Directions From a Binary Tree Node to Another",
  "slug": "2096-step-by-step-directions-from-a-binary-tree-node-to-another",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 52,
    "java": 29,
    "python": 17,
    "javascript": 27
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    bool search(TreeNode* root, int target, string &s){\r\n        if(root==NULL) {\r\n            return false;\r\n        }\r\n        if(root->val==target) {\r\n            return true;\r\n        }\r\n        \r\n        bool find1=search(root->left,target, s+='L');  // search on left side\r\n        if(find1) return true;\r\n        s.pop_back(); // backtracking step\r\n        \r\n        bool find2= search(root->right,target, s+='R'); // search on right side\r\n        if(find2) return true;\r\n        s.pop_back(); // backtracking step\r\n        return false;\r\n    }\r\n  \r\n     TreeNode* lca(TreeNode* root ,int n1 ,int n2)\r\n    {\r\n       if(root==NULL)\r\n       return NULL;\r\n       if(root->val==n1 or root->val==n2)\r\n       return root;\r\n       \r\n       TreeNode* left=lca(root->left,n1,n2);\r\n       TreeNode* right=lca(root->right,n1,n2);\r\n       \r\n       if(left!=NULL && right!=NULL)\r\n       return root;\r\n       if(left)\r\n       return left;\r\n       if(right)\r\n       return right;\r\n       \r\n       return NULL; // not present in tree\r\n       \r\n    }\r\n    string getDirections(TreeNode* root, int startValue, int destValue) {\r\n        TreeNode* temp=lca(root,startValue,destValue);\r\n        \r\n        string s1,s2;\r\n        search(temp,startValue,s1);\r\n        search(temp,destValue,s2);\r\n        for(auto &it:s1){\r\n            it='U';\r\n        }\r\n        return s1+s2;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def getDirections(self, root: Optional[TreeNode], startValue: int, destValue: int) -> str:\r\n        def find(n: TreeNode, val: int, path: List[str]) -> bool:\r\n            if n.val == val:\r\n                return True\r\n            if n.left and find(n.left, val, path):\r\n                path += \"L\"\r\n            elif n.right and find(n.right, val, path):\r\n                path += \"R\"\r\n            return path\r\n        s, d = [], []\r\n        find(root, startValue, s)\r\n        find(root, destValue, d)\r\n        while len(s) and len(d) and s[-1] == d[-1]:\r\n            s.pop()\r\n            d.pop()\r\n        return \"\".join(\"U\" * len(s)) + \"\".join(reversed(d))",
    "java": "class Solution {\r\n    \r\n    private boolean DFS(TreeNode currNode, StringBuilder path, int destVal) {\r\n        if(currNode == null) return false;\r\n        if(currNode.val == destVal) return true;\r\n        if(DFS(currNode.left, path, destVal)) path.append(\"L\");\r\n        else if(DFS(currNode.right, path, destVal)) path.append(\"R\");\r\n        return path.length() > 0;\r\n    }\r\n    \r\n    public String getDirections(TreeNode root, int startValue, int destValue) {\r\n        StringBuilder startToRoot = new StringBuilder();\r\n        StringBuilder endToRoot = new StringBuilder();\r\n        \r\n        DFS(root, startToRoot, startValue);\r\n        DFS(root, endToRoot, destValue);\r\n        \r\n        int i = startToRoot.length(), j = endToRoot.length();\r\n        int cnt = 0;\r\n        while(i > 0 && j > 0 && startToRoot.charAt(i-1) == endToRoot.charAt(j-1)) {\r\n            cnt++; i--; j--;\r\n        }\r\n        \r\n        String sPath = \"U\".repeat(startToRoot.length() - cnt);\r\n        String ePath = endToRoot.reverse().toString().substring(cnt, endToRoot.length());\r\n        \r\n        return sPath + ePath;\r\n    }\r\n}",
    "javascript": "var getDirections = function(root, startValue, destValue) {\r\n    const getPath = (node, value, acc='') => {\r\n        if (node === null) {\r\n            return '';\r\n        } else if (node.val === value) {\r\n            return acc;\r\n        } else {\r\n            return getPath(node.left, value, acc + 'L') + getPath(node.right, value, acc + 'R')\r\n        }\r\n    }\r\n    \r\n\t// generate the paths\r\n    let startPath = getPath(root, startValue);\r\n    let destPath = getPath(root, destValue);\r\n    \r\n    // find the lowest common ancestor\r\n    let i = 0;\r\n    for (; i < startPath.length && i < destPath.length && startPath[i] === destPath[i]; i++);\r\n    \r\n\t// output the final path\r\n    let output = '';\r\n    for (let j = i; j < startPath.length; j++) {\r\n        output += 'U';\r\n    }\r\n    \r\n    return output + destPath.substring(i);\r\n};"
  }
}
