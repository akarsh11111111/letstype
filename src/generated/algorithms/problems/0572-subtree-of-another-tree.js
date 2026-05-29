export default {
  "id": 572,
  "name": "Subtree of Another Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/subtree-of-another-tree",
  "relativeDir": "S/Subtree of Another Tree",
  "slug": "0572-subtree-of-another-tree",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 72,
    "python": 24,
    "javascript": 38
  },
  "languages": {
    "cpp": "// Runtime: 90 ms (Top 5.5%) | Memory: 37.50 MB (Top 5.0%)\r\n\r\n/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n     void sol(TreeNode *root, string &s){\r\n         queue<TreeNode*> q;\r\n         q.push(root);\r\n         s+=to_string(root->val);\r\n         while(!q.empty()){\r\n             auto x=q.front(); q.pop();\r\n             if(x->left){\r\n                 \r\n               s+=to_string( x->left->val);   \r\n               q.push(x->left);\r\n             }else if(!x->left){\r\n                 s+='#';\r\n             }\r\n              if(x->right){\r\n                   s+=to_string( x->right->val);\r\n                   q.push(x->right);\r\n              }else if(!x->right){\r\n                  s+='#';\r\n              }\r\n             \r\n         }\r\n     }\r\n    bool isSubtree(TreeNode* root, TreeNode* subRoot) {\r\n        \r\n        string s;\r\n        sol(subRoot, s);\r\n        cout<<s<<\" \";\r\n        queue<TreeNode*> q;\r\n        q.push(root);\r\n        while(!q.empty()){\r\n            auto x=q.front(); q.pop();\r\n            if(x->val==subRoot->val){\r\n                string k;\r\n                sol(x, k);\r\n                cout<<k<<\" \";\r\n              bool  istrue=false;\r\n                if(k.size()==s.size()){\r\n                for(int i=0; i<k.size(); i++){\r\n                    if(k[i]!=s[i]){\r\n                        istrue=true;\r\n                    }\r\n                }\r\n                if(istrue==false){\r\n                    return true;\r\n                }\r\n                }\r\n            }\r\n            if(x->left){\r\n                q.push(x->left);\r\n            }\r\n            if(x->right){\r\n                q.push(x->right);\r\n            }\r\n        }\r\n        return false;\r\n    }\r\n};",
    "python": "class Solution:\r\n    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:\r\n        if subRoot == None:\r\n            return True\r\n        if root == None:\r\n            return False\r\n        \r\n        sameTree = self.isSameTree(root, subRoot)\r\n        subTreeOnLeft = self.isSubtree(root.left, subRoot)\r\n        subTreeOnRight = self.isSubtree(root.right, subRoot)\r\n        \r\n        return subTreeOnLeft or subTreeOnRight or sameTree\r\n        \r\n    def isSameTree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:\r\n        if (root == None and subRoot == None):\r\n            return True\r\n        \r\n        if (root == None or subRoot == None):\r\n            return False\r\n        \r\n        if (root.val != subRoot.val):\r\n            return False\r\n        \r\n        return self.isSameTree(root.left, subRoot.left) and self.isSameTree(root.right, subRoot.right)",
    "javascript": "/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.left = (left===undefined ? null : left)\r\n *     this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n/**\r\n * @param {TreeNode} root\r\n * @param {TreeNode} subRoot\r\n * @return {boolean}\r\n */\r\nvar isSubtree = function(root, subRoot) {\r\n\tif(subRoot === null)  return true;\r\n\tif(root === null) return false;\r\n\r\n\tif (isSameTree(root, subRoot)) {\r\n\t\treturn true;\r\n\t}\r\n\r\n\treturn (isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot));\r\n};\r\n\r\nfunction isSameTree(root, subRoot) {\r\n\tif(root === null && subRoot === null) {\r\n\t   return true;\r\n\t}\r\n\r\n\tif((root && subRoot === null) || (root === null && subRoot)) {\r\n\t\treturn false;\r\n\t} \r\n\r\n\tif(root.val !== subRoot.val) {\r\n\t\treturn false;\r\n\t}\r\n\treturn (isSameTree(root.left, subRoot.left) && isSameTree(root.right, subRoot.right));\r\n}"
  }
}
