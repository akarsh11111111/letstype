export default {
  "id": 958,
  "name": "Check Completeness of a Binary Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/check-completeness-of-a-binary-tree",
  "relativeDir": "C/Check Completeness of a Binary Tree",
  "slug": "0958-check-completeness-of-a-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 30,
    "java": 21,
    "python": 14,
    "javascript": 30
  },
  "languages": {
    "cpp": "// Runtime: 7 ms (Top 64.29%) | Memory: 10.3 MB (Top 76.53%)\r\nclass Solution {\r\npublic:\r\n    bool isComplete = true;\r\n\r\n    // Returns min, max height of node\r\n    pair<int,int> helper(TreeNode *root){\r\n        // NULL is of height zero\r\n        if(root == NULL){\r\n            return {0, 0};\r\n        }\r\n\r\n        // Moving to its children\r\n        pair<int,int> lst = helper(root->left);\r\n        pair<int,int> rst = helper(root->right);\r\n\r\n        // Height of rst is greater than lst or\r\n        // There are levels which are not filled other than the last level (diff between levels > 1)\r\n        if(rst.second > lst.first || lst.second - rst.first > 1){\r\n            isComplete = false;\r\n        }\r\n\r\n        return {min(lst.first, rst.first)+1, max(lst.second, rst.second)+1};\r\n    }\r\n\r\n    bool isCompleteTree(TreeNode* root) {\r\n        helper(root);\r\n        return isComplete;\r\n    }\r\n};",
    "python": "class Solution:\r\n\tdef isCompleteTree(self, root: Optional[TreeNode]) -> bool:\r\n\t\t# if not root: return True\r\n\t\tdef node_count(root):\r\n\t\t\tif not root: return 0\r\n\t\t\treturn 1 + node_count(root.left) + node_count(root.right)\r\n\r\n\t\tdef isCBT(root,i,count):\r\n\t\t\tif not root: return True\r\n\t\t\tif i>=count: return False\r\n\t\t\treturn isCBT(root.left,2*i+1,count) and isCBT(root.right,2*i+2,count)\r\n\r\n\r\n\t\treturn isCBT(root,0,node_count(root))",
    "java": "// Runtime: 2 ms (Top 49.17%) | Memory: 42.4 MB (Top 73.50%)\r\nclass Solution {\r\n    public boolean isCompleteTree(TreeNode root) {\r\n        boolean end = false;\r\n        Queue<TreeNode> queue = new LinkedList<>();\r\n        queue.offer(root);\r\n        while(!queue.isEmpty()) {\r\n            TreeNode currentNode = queue.poll();\r\n            if(currentNode == null) {\r\n                end = true;\r\n            } else {\r\n                if(end) {\r\n                    return false;\r\n                }\r\n                queue.offer(currentNode.left);\r\n                queue.offer(currentNode.right);\r\n            }\r\n        }\r\n        return true;\r\n    }\r\n}",
    "javascript": "var isCompleteTree = function(root) {\r\nlet queue = [root];\r\nlet answer = [root];\r\nwhile(queue.length > 0) {\r\n    let current = queue.shift();\r\n    if(current) {\r\n        queue.push(current.left);\r\n        answer.push(current.left);\r\n        queue.push(current.right);\r\n        answer.push(current.right);\r\n    }\r\n}\r\n\r\nconsole.log(\"queue\", queue);\r\n\r\nwhile(answer.length > 0 ) {\r\n    let current = answer.shift();\r\n    if(current === null) break;\r\n}\r\nconsole.log(\"answer after shifting\", answer);\r\n let flag = true;\r\n for(let current of answer) {\r\n    if(current !== null) {\r\n        flag = false;\r\n        break\r\n    }\r\n}\r\n\r\nreturn flag\r\n};"
  }
}
