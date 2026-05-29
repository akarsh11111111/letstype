export default {
  "id": 606,
  "name": "Construct String from Binary Tree",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/construct-string-from-binary-tree",
  "relativeDir": "C/Construct String from Binary Tree",
  "slug": "0606-construct-string-from-binary-tree",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "python": 21,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 28 ms (Top 84.86%) | Memory: 23.4 MB (Top 89.65%)\r\nclass Solution {\r\n    void tree2str(TreeNode* root,string &s) {\r\n        if(!root) return;\r\n\r\n        s+=to_string(root->val);\r\n\r\n        if(!root->left && !root->right) return;\r\n\r\n        s.push_back('('); tree2str(root->left,s); s.push_back(')');\r\n\r\n        if(root->right){\r\n            s.push_back('('); tree2str(root->right,s); s.push_back(')');\r\n        }\r\n    }\r\npublic:\r\n    string tree2str(TreeNode* root) {\r\n        string ans = \"\";\r\n        tree2str(root,ans);\r\n        return ans;\r\n    }\r\n};",
    "python": "class Solution {\r\n    void tree2str(TreeNode* root,string &s) {\r\n        if(!root) return;\r\n        \r\n        s+=to_string(root->val);\r\n        \r\n        if(!root->left && !root->right) return;\r\n        \r\n        s.push_back('('); tree2str(root->left,s); s.push_back(')');\r\n        \r\n        if(root->right){\r\n            s.push_back('('); tree2str(root->right,s); s.push_back(')');\r\n        }\r\n    } \r\npublic:\r\n    string tree2str(TreeNode* root) {\r\n        string ans = \"\";\r\n        tree2str(root,ans);\r\n        return ans;\r\n    }\r\n};",
    "javascript": "// Runtime: 61 ms (Top 73.88%) | Memory: 54.70 MB (Top 5.14%)\r\n\r\nvar tree2str = function(root) {\r\n    // Step 1: Base case - if the root is null, return an empty string\r\n    if (root === null) return \"\";\r\n\r\n    // Step 2: Start with the value of the current node as the result string\r\n    let result = root.val.toString();\r\n\r\n    // Step 3: Recursively process the left and right subtrees\r\n    let leftSubtree = tree2str(root.left);\r\n    let rightSubtree = tree2str(root.right);\r\n\r\n    // Step 4: Check conditions to determine the final result\r\n    if (leftSubtree === \"\" && rightSubtree === \"\") {\r\n        // Both left and right subtrees are empty, return the current result\r\n        return result;\r\n    }\r\n    if (leftSubtree === \"\") {\r\n        // Left subtree is empty, include empty parentheses for it and the right subtree\r\n        return result + \"()\" + \"(\" + rightSubtree + \")\";\r\n    }\r\n    if (rightSubtree === \"\") {\r\n        // Right subtree is empty, include the left subtree\r\n        return result + \"(\" + leftSubtree + \")\";\r\n    }\r\n\r\n    // Both left and right subtrees are non-empty, include both in the result\r\n    return result + \"(\" + leftSubtree + \")\" + \"(\" + rightSubtree + \")\";\r\n};"
  }
}
