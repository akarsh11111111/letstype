export default {
  "id": 988,
  "name": "Smallest String Starting From Leaf",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/smallest-string-starting-from-leaf",
  "relativeDir": "S/Smallest String Starting From Leaf",
  "slug": "0988-smallest-string-starting-from-leaf",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 33,
    "java": 26,
    "python": 19,
    "javascript": 46
  },
  "languages": {
    "cpp": "/**\r\n * Definition for a binary tree node.\r\n * struct TreeNode {\r\n *     int val;\r\n *     TreeNode *left;\r\n *     TreeNode *right;\r\n *     TreeNode() : val(0), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}\r\n *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}\r\n * };\r\n */\r\nclass Solution {\r\npublic:\r\n    string res;\r\n    void solve(TreeNode* root,string cur){\r\n        if(!root) return;\r\n        cur.push_back((char)('a'+root->val));//converting integer to corresponding characer\r\n        if(!root->left and !root->right){\r\n\t\t\t//reversing the string since it is computed from root to leaf, but we need viceversa\r\n            reverse(cur.begin(),cur.end());\r\n            if(res==\"\" or cur<res) res=cur;//updating the result based on lexicographical order\r\n            return;\r\n        }\r\n        solve(root->left,cur);\r\n        solve(root->right,cur);\r\n        return;\r\n    }\r\n    string smallestFromLeaf(TreeNode* root) {\r\n        if(!root) return \"\"; \r\n        solve(root,\"\");\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution:\r\n    res = 'z' * 13           # init max result, tree depth,  12< log2(8000) < 13\r\n    \r\n    def smallestFromLeaf(self, root: TreeNode) -> str:\r\n        \r\n        def helper(node: TreeNode, prev):\r\n            prev = chr(97 + node.val) + prev\r\n            \r\n            if not node.left and not node.right:\r\n                self.res = min(self.res, prev)\r\n                return\r\n            \r\n            if node.left:\r\n                helper(node.left, prev)\r\n            if node.right:\r\n                helper(node.right, prev)\r\n        \r\n        helper(root, \"\")\r\n        return self.res",
    "java": "// Runtime: 7 ms (Top 58.14%) | Memory: 45.5 MB (Top 29.64%)\r\nclass Solution {\r\n    String result = null;\r\n    public String smallestFromLeaf(TreeNode root) {\r\n        build(root, new StringBuilder());\r\n        return result;\r\n    }\r\n\r\n    public void build(TreeNode root, StringBuilder str) {\r\n        if (root == null) return;\r\n\r\n        StringBuilder sb = new StringBuilder(str).insert(0, String.valueOf(intToChar(root.val)));\r\n\r\n        if (root.left == null && root.right == null) { // we are on a leaf node\r\n            result = result == null || sb.toString().compareTo(result) < 0 ? sb.toString() : result;\r\n            return;\r\n        }\r\n        build(root.left, sb); // build left child\r\n        build(root.right, sb); // build right child\r\n    }\r\n\r\n    // turns an int (0-25) into a Character ex: 0 -> a, 1 -> b, 2 -> c\r\n    public Character intToChar(int i) {\r\n        return (char) (i + 'a');\r\n    }\r\n}",
    "javascript": "var smallestFromLeaf = function(root) {\r\n    \r\n    if(root === null) return '';\r\n    \r\n    let queue = [[root, ''+giveCharacter(root.val)]];\r\n    let leafLevelFound = false;\r\n    let possibleSmallString = [];\r\n    \r\n    while(queue.length > 0){\r\n        \r\n        let currentLevelLength = queue.length;\r\n        \r\n        \r\n        for(let i=0; i<currentLevelLength; i++){\r\n            \r\n            let [currentNode, currentPath] = queue.shift();\r\n            \r\n            if(currentNode.left === null && currentNode.right ===null){\r\n                // as one of the test case is failing with this approacch - saying legth/depth of the path doesnt matter\r\n                // even TOTAL (ASCII)SUM of letters also not matter - it should be dictionary first path\r\n                // hence, no need of this logic and have to continue until all path discovered\r\n                // So, instead removing - just never doing TRUE - hence it will continue exploring and putting all paths\r\n                leafLevelFound = false; \r\n                possibleSmallString.push(currentPath); //.split(\"\").reverse().join(\"\")\r\n            }\r\n            \r\n            if(!leafLevelFound){\r\n                if(currentNode.left !== null) queue.push([currentNode.left,giveCharacter(currentNode.left.val)+currentPath]);\r\n                if(currentNode.right !== null) queue.push([currentNode.right,giveCharacter(currentNode.right.val)+currentPath]);\r\n            }\r\n            \r\n        }\r\n        \r\n        if(leafLevelFound) break; \r\n    }\r\n    \r\n    // console.log(possibleSmallString);\r\n    possibleSmallString.sort();\r\n    // console.log(possibleSmallString);\r\n    return possibleSmallString[0];\r\n    \r\n};\r\n\r\nfunction giveCharacter(num){\r\n    return String.fromCharCode(num+97);\r\n}"
  }
}
