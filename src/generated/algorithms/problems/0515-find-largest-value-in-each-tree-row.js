export default {
  "id": 515,
  "name": "Find Largest Value in Each Tree Row",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/find-largest-value-in-each-tree-row",
  "relativeDir": "F/Find Largest Value in Each Tree Row",
  "slug": "0515-find-largest-value-in-each-tree-row",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 27,
    "java": 40,
    "python": 23,
    "javascript": 16
  },
  "languages": {
    "cpp": "// Runtime: 3 ms (Top 99.90%) | Memory: 22.1 MB (Top 68.12%)\r\nclass Solution {\r\npublic:\r\n    vector<int>res;\r\n    vector<int> largestValues(TreeNode* root) {\r\n        if(!root) return {};\r\n        if(!root->left && !root->right) return {root->val};\r\n        TreeNode*temp;\r\n        int mx = INT_MIN;\r\n        queue<TreeNode*>q;\r\n        q.push(root);\r\n\r\n        while(!q.empty()){\r\n            int sz = q.size();\r\n            while(sz--){\r\n                temp = q.front();\r\n                if(temp->val > mx) mx = temp->val;\r\n                q.pop();\r\n                if(temp->left) q.push(temp->left);\r\n                if(temp->right) q.push(temp->right);\r\n            }\r\n            res.push_back(mx);\r\n            mx = INT_MIN;\r\n        }\r\n        return res;\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def largestValues(self, root):\r\n        \"\"\"\r\n        :type root: TreeNode\r\n        :rtype: List[int]\r\n        \"\"\"\r\n        if not root:\r\n            return []\r\n        ans=[]\r\n        q=[]\r\n        q.append(root)\r\n        while q:\r\n            s=len(q)\r\n            t=[]\r\n            for i in range(s):\r\n                n=q.pop(0)\r\n                t.append(n.val)\r\n                if n.left:\r\n                    q.append(n.left)\r\n                if n.right:\r\n                    q.append(n.right)\r\n            ans.append(max(t))\r\n        return ans",
    "java": "// Runtime: 6 ms (Top 12.42%) | Memory: 45.3 MB (Top 32.64%)\r\n/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n * int val;\r\n * TreeNode left;\r\n * TreeNode right;\r\n * TreeNode() {}\r\n * TreeNode(int val) { this.val = val; }\r\n * TreeNode(int val, TreeNode left, TreeNode right) {\r\n * this.val = val;\r\n * this.left = left;\r\n * this.right = right;\r\n * }\r\n * }\r\n */\r\nclass Solution {\r\n    private List<Integer> li=new ArrayList<>();\r\n\r\n    public List<Integer> largestValues(TreeNode root) {\r\n\r\n        if(root==null) return li; //if root is NULL\r\n\r\n        //using bfs(level-order)\r\n        Queue<TreeNode> q=new LinkedList<>();\r\n        q.add(root);\r\n        while(!q.isEmpty()){\r\n            int size=q.size();\r\n            int res=Integer.MIN_VALUE;\r\n            while(size-->0){\r\n                TreeNode temp=q.poll();\r\n                if(temp.left!=null) q.add(temp.left);\r\n                if(temp.right!=null) q.add(temp.right);\r\n                res =Math.max(res,temp.val); //comparing every node in each level to get max\r\n            }\r\n            li.add(res); //adding each level Max value to the list\r\n        }\r\n        return li;\r\n    }\r\n}",
    "javascript": "var largestValues = function(root) {\r\n    if(!root) return [];\r\n    \r\n    const op = [];\r\n    const Q = [[root, 1]];\r\n    while(Q.length) {\r\n        const [r, l] = Q.shift();\r\n        \r\n        if(op.length < l) op.push(-Infinity);\r\n        op[l-1] = Math.max(op[l-1], r.val);\r\n        \r\n        if(r.left) Q.push([r.left, l + 1]);\r\n        if(r.right) Q.push([r.right, l + 1]);\r\n    }\r\n    return op;\r\n};"
  }
}
