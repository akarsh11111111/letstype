export default {
  "id": 662,
  "name": "Maximum Width of Binary Tree",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/maximum-width-of-binary-tree",
  "relativeDir": "M/Maximum Width of Binary Tree",
  "slug": "0662-maximum-width-of-binary-tree",
  "availableLanguages": [
    "cpp",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 29,
    "python": 23,
    "javascript": 31
  },
  "languages": {
    "cpp": "// Runtime: 12 ms (Top 70.59%) | Memory: 17.4 MB (Top 21.88%)\r\n/*\r\nRun BFS and store the index of the node when it was stored in the flattened manner.\r\nTake the diff of each of the level and keep traking of max value\r\n\r\n */\r\nclass Solution {\r\npublic:\r\n\r\n    int widthOfBinaryTree(TreeNode* root) {\r\n        if(!root) return 0;\r\n        int res = 0;\r\n        queue<pair<TreeNode*,int>> q;\r\n        q.push({root, 0});\r\n        while(!q.empty()){\r\n            int n = q.size();\r\n            res = max(res, q.back().second - q.front().second + 1);\r\n            int start = q.front().second;\r\n            while(n--){\r\n                TreeNode* p = q.front().first;\r\n                long long ind = q.front().second - start;\r\n                q.pop();\r\n                if(p->left) q.push({p->left, ind*2 + 1});\r\n                if(p->right) q.push({p->right, ind*2 + 2});\r\n            }\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "# Runtime: 46 ms (Top 93.81%) | Memory: 14.7 MB (Top 75.82%)\r\n# Definition for a binary tree node.\r\n# class TreeNode:\r\n# def __init__(self, val=0, left=None, right=None):\r\n# self.val = val\r\n# self.left = left\r\n# self.right = right\r\nclass Solution:\r\n    def widthOfBinaryTree(self, root: Optional[TreeNode]) -> int:\r\n        q = deque([(root, 0)])\r\n        res = 0\r\n\r\n        while q:\r\n            res = max(res, q[-1][1] - q[0][1] + 1)\r\n            for _ in range(len(q)):\r\n                curr, pos = q.popleft()\r\n\r\n                if curr.left:\r\n                    q.append((curr.left, pos*2))\r\n                if curr.right:\r\n                    q.append((curr.right, pos*2 + 1))\r\n\r\n        return res",
    "javascript": "// Runtime: 66 ms (Top 53.29%) | Memory: 47.20 MB (Top 43.11%)\r\n\r\nvar widthOfBinaryTree = function(root) {\r\n    if(!root) {\r\n        return 0;\r\n    }\r\n    const q = [[root, 0]];\r\n    let maxWidth = 0, l = 0, r = 0;\r\n    while(q.length) {\r\n        const size = q.length;\r\n        const startIdx = q[0][1];\r\n        for(let i = 0; i < size; ++i) {\r\n            const [node, idx] = q.shift();\r\n            if(i === 0) {\r\n                l = idx;\r\n            }\r\n            if(i === size - 1) {\r\n                r = idx;\r\n            }\r\n\t\t\tconst subIdx = idx - startIdx;\r\n            if(node.left !== null) {\r\n                q.push([node.left, 2 * subIdx + 1]);\r\n            }\r\n            if(node.right !== null) {\r\n                q.push([node.right, 2 * subIdx + 2]);\r\n            }\r\n        }\r\n        maxWidth = Math.max(maxWidth, r - l + 1);\r\n    }\r\n    return maxWidth;\r\n};"
  }
}
