export default {
  "id": 450,
  "name": "Delete Node in a BST",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/delete-node-in-a-bst",
  "relativeDir": "D/Delete Node in a BST",
  "slug": "0450-delete-node-in-a-bst",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 19,
    "java": 36,
    "python": 63,
    "javascript": 38
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    TreeNode* deleteNode(TreeNode* root, int key) {\r\n        if(root) \r\n            if(key < root->val) root->left = deleteNode(root->left, key);     //We frecursively call the function until we find the target node\r\n            else if(key > root->val) root->right = deleteNode(root->right, key);       \r\n            else{\r\n                if(!root->left && !root->right) return NULL;          //No child condition\r\n                if (!root->left || !root->right)\r\n                    return root->left ? root->left : root->right;    //One child contion -> replace the node with it's child\r\n\t\t\t\t\t                                                //Two child condition   \r\n                TreeNode* temp = root->left;                        //(or) TreeNode *temp = root->right;\r\n                while(temp->right != NULL) temp = temp->right;     //      while(temp->left != NULL) temp = temp->left;\r\n                root->val = temp->val;                            //       root->val = temp->val;\r\n                root->left = deleteNode(root->left, temp->val);  //        root->right = deleteNode(root->right, temp);\t\t\r\n            }\r\n        return root;\r\n    }   \r\n};",
    "python": "\r\n# Definition for a binary tree node.\r\n# class TreeNode:\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution:\r\ndef deleteNode(self, root: Optional[TreeNode], key: int) -> Optional[TreeNode]:\r\n\r\ndef find_inorder(root, key):\r\n\r\n\tif root is None :\r\n\t\treturn []\r\n\r\n\treturn find_inorder(root.left, key) + [root.val] + find_inorder(root.right, key)\r\n\r\ndef find_preorder(root, key):\r\n\r\n\tif root is None:\r\n\t\treturn []\r\n\r\n\treturn [root.val] + find_preorder(root.left,key) + find_preorder(root.right, key)\r\n\r\npreorder = find_preorder(root, key)\r\n\r\ntry:\r\n\tpreorder.remove(key)\r\nexcept:\r\n\treturn root\r\n\r\ninorder = find_inorder(root, key)\r\n\r\ninorder.remove(key)\r\n\r\n\r\n\r\n\r\nhashmap = {}\r\n\r\nfor i in range(len(inorder)):\r\n\tkey = inorder[i]\r\n\thashmap[key] = i\r\n\r\ndef buildTree(left, right):\r\n\r\n\tif left > right:\r\n\t\treturn \r\n\r\n\tval = inorder[left]\r\n\troot = TreeNode(val)\r\n\r\n\tindex = hashmap[val]\r\n\r\n\troot.left = buildTree(left, index-1)\r\n\troot.right = buildTree(index+1, right)\r\n\r\n\treturn root\r\n\r\nN = len(inorder)\r\nnew_tree = buildTree(0,N-1)\r\n\r\nreturn new_tree",
    "java": "// Runtime: 0 ms (Top 100.0%) | Memory: 44.92 MB (Top 83.3%)\r\n\r\nclass Solution {\r\n    public TreeNode deleteNode(TreeNode root, int key) {\r\n        if(root==null) return null;\r\n        \r\n        if(key<root.val){                            \r\n            root.left = deleteNode(root.left,key);\r\n            return root;\r\n        }\r\n        \r\n        else if(key>root.val){\r\n            root.right = deleteNode(root.right,key);\r\n            return root;\r\n        }\r\n        \r\n        else{\r\n            if(root.left==null){\r\n                return root.right;\r\n            }\r\n            else if(root.right==null){\r\n                return root.left;\r\n            }\r\n            else{\r\n                TreeNode min = root.right;\r\n                while(min.left!=null){\r\n                    min = min.left;\r\n                }\r\n                \r\n                root.val = min.val;\r\n                root.right = deleteNode(root.right,min.val);\r\n                return root;\r\n            }\r\n        }\r\n    }\r\n}",
    "javascript": "/**\r\n * Definition for a binary tree node.\r\n * function TreeNode(val, left, right) {\r\n *     this.val = (val===undefined ? 0 : val)\r\n *     this.left = (left===undefined ? null : left)\r\n *     this.right = (right===undefined ? null : right)\r\n * }\r\n */\r\n\r\nconst getLeftMostNode=(root)=>{\r\n    if(!root)return null;\r\n    let node=getLeftMostNode(root.left);\r\n    return node?node:root;\r\n}\r\n/**\r\n * @param {TreeNode} root\r\n * @param {number} key\r\n * @return {TreeNode}\r\n */\r\n\r\n\r\nvar deleteNode = function(root, key) {\r\n    if(!root)return null;\r\n    if(root.val>key){\r\n    root.left=deleteNode(root.left,key);\r\n    }else if(root.val<key){\r\n    root.right= deleteNode(root.right,key);\r\n    }else{\r\n        if(!root.left)return root.right;\r\n        if(!root.right)return root.left;\r\n        let succ_node=getLeftMostNode(root.right);\r\n        root.val=succ_node.val;\r\n        root.right= deleteNode(root.right,succ_node.val);\r\n        \r\n    }\r\n    return root;\r\n\r\n};"
  }
}
