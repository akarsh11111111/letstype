export default {
  "id": 257,
  "name": "Binary Tree Paths",
  "difficulty": "easy",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-tree-paths",
  "relativeDir": "B/Binary Tree Paths",
  "slug": "0257-binary-tree-paths",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 28,
    "java": 25,
    "python": 21,
    "javascript": 18
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 89.27%) | Memory: 13.9 MB (Top 17.11%)\r\nclass Solution {\r\nprivate:\r\n    void dfs(TreeNode* root,string s,vector<string> &ans){\r\n        if(root == NULL) return;\r\n\r\n        s += (to_string(root -> val));\r\n\r\n        if(root -> left != NULL || root -> right != NULL) s += \"->\";\r\n\r\n        if(root -> left == NULL and root -> right == NULL) {\r\n            ans.push_back(s);\r\n        }\r\n\r\n        dfs(root -> left,s,ans);\r\n        dfs(root -> right,s,ans);\r\n        s.pop_back();\r\n    }\r\npublic:\r\n    vector<string> binaryTreePaths(TreeNode* root) {\r\n\r\n        vector<string> ans;\r\n        string s;\r\n        dfs(root,s,ans);\r\n        return ans;\r\n\r\n    }\r\n};",
    "python": "class Solution:\r\n    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:\r\n        \r\n        # DFS solution\r\n        output = []\r\n        stack = [(root, '')]\r\n        \r\n        while stack:\r\n            node, path = stack.pop()\r\n            path += str(node.val)\r\n            \r\n            if not node.left and not node.right:\r\n                output.append(path)\r\n                \r\n            path += '->'\r\n            if node.left:\r\n                stack.append((node.left, path))\r\n            if node.right:\r\n                stack.append((node.right, path))\r\n                \r\n        return output",
    "java": "// Runtime: 1 ms (Top 99.96%) | Memory: 42.40 MB (Top 35.43%)\r\n\r\nclass Solution {\r\n    public List<String> binaryTreePaths(TreeNode root) {\r\n        List<String> result = new ArrayList<>();\r\n        dfs(root, new StringBuilder(), result);\r\n        return result;\r\n    }\r\n\r\n    private void dfs(TreeNode node, StringBuilder path, List<String> result) {\r\n        if (node == null) return;\r\n        int len = path.length();\r\n        if (len > 0) {\r\n            path.append(\"->\");\r\n        }\r\n        path.append(node.val);\r\n        if (node.left == null && node.right == null) {\r\n            result.add(path.toString());\r\n        } else {\r\n            dfs(node.left, path, result);\r\n            dfs(node.right, path, result);\r\n        }\r\n        path.setLength(len); // Backtrack by resetting the StringBuilder\r\n    }\r\n}",
    "javascript": "\r\n\r\nvar binaryTreePaths = function(root) {\r\n    if ( root === null ) {\r\n        return [];\r\n    }\r\n    const lPath = binaryTreePaths(root.left);\r\n    const rPath = binaryTreePaths(root.right);\r\n    if ( lPath.length === 0 && rPath.length === 0 ) return [\"\" + root.val];\r\n\r\n    if ( lPath.length > 0 )\r\n        for ( let i = 0; i < lPath.length; i++ )\r\n            lPath[i] = root.val + \"->\" + lPath[i];\r\n    if ( rPath.length > 0 )\r\n        for ( let i = 0; i < rPath.length; i++ )\r\n            rPath[i] = root.val + \"->\" + rPath[i];\r\n    return lPath.concat(rPath);\r\n};"
  }
}
