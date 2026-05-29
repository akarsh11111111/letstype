export default {
  "id": 103,
  "name": "Binary Tree Zigzag Level Order Traversal",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal",
  "relativeDir": "B/Binary Tree Zigzag Level Order Traversal",
  "slug": "0103-binary-tree-zigzag-level-order-traversal",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 32,
    "java": 50,
    "python": 32,
    "javascript": 31
  },
  "languages": {
    "cpp": "class Solution {\r\npublic:\r\n    vector<vector<int>> zigzagLevelOrder(TreeNode* root) {\r\n    vector<vector<int>> ans;\r\n    if(!root) return ans;\r\n    vector<int> r;\r\n    queue<TreeNode*> q;\r\n    int count=1;\r\n    q.push(root);\r\n    q.push(NULL);\r\n    while(1){\r\n        if(q.front()==NULL){\r\n            q.pop();\r\n            if(count%2==0) reverse(r.begin(),r.end());\r\n            ans.push_back(r);\r\n            if (q.empty()) return ans;\r\n            q.push(NULL);\r\n            r.resize(0);\r\n            count++;\r\n            continue;\r\n        }\r\n        \r\n            r.push_back((q.front())->val);\r\n            if(q.front()->left)q.push((q.front())->left); \r\n            if(q.front()->right)q.push((q.front())->right);\r\n            \r\n            q.pop();\r\n    }\r\n    return ans;\r\n\r\n    }\r\n};",
    "python": "class Solution(object):\r\n    def zigzagLevelOrder(self, root):\r\n        \"\"\"\r\n        :type root: TreeNode\r\n        :rtype: List[List[int]]\r\n        \"\"\"\r\n        if not root: return []\r\n        \r\n        ans = []\r\n        \r\n        node = root \r\n        \r\n        q = collections.deque([node])\r\n        \r\n        order = -1 \r\n        \r\n        while q:\r\n            order = -order\r\n            level = []\r\n            for _ in range(len(q)):\r\n                node = q.popleft()\r\n                \r\n                level.append(node.val)\r\n                \r\n                if node.left:\r\n                    q.append(node.left)\r\n                if node.right:\r\n                    q.append(node.right)\r\n                    \r\n            ans.append(level[::order])\r\n                \r\n        return ans",
    "java": "/**\r\n * Definition for a binary tree node.\r\n * public class TreeNode {\r\n *     int val;\r\n *     TreeNode left;\r\n *     TreeNode right;\r\n *     TreeNode() {}\r\n *     TreeNode(int val) { this.val = val; }\r\n *     TreeNode(int val, TreeNode left, TreeNode right) {\r\n *         this.val = val;\r\n *         this.left = left;\r\n *         this.right = right;\r\n *     }\r\n * }\r\n */\r\nclass Solution {\r\n    public List<List<Integer>> zigzagLevelOrder(TreeNode root) {\r\n        Queue<TreeNode> q=new LinkedList<TreeNode>();\r\n        List<List<Integer>> res=new ArrayList<>();\r\n        if(root==null){\r\n            return res;\r\n        }\r\n        q.offer(root);\r\n        boolean flag=true;\r\n        while(!q.isEmpty()){\r\n            int size=q.size();\r\n            List<Integer> curr=new ArrayList<>();\r\n            for(int i=0;i<size;i++){\r\n                if(q.peek().left!=null){\r\n                    q.offer(q.peek().left);\r\n                }\r\n                if(q.peek().right!=null){\r\n                    q.offer(q.peek().right);\r\n                }\r\n                if(flag==true){\r\n                    curr.add(q.poll().val);\r\n                }else{\r\n                    curr.add(0,q.poll().val);\r\n                }\r\n            }\r\n            if(flag==true){\r\n                flag=false;\r\n            }else{\r\n                flag=true;\r\n            }\r\n            res.add(curr);\r\n        }\r\n        return res;\r\n    }\r\n}",
    "javascript": "var zigzagLevelOrder = function(root) {\r\n    let result = []\r\n    if(root == null) return result\r\n    \r\n    let queue = []\r\n    let leftToRight = true\r\n    \r\n    queue.push(root)\r\n    \r\n    while(queue.length != 0) {\r\n        let qSize = queue.length\r\n        let ans = []\r\n        \r\n        // Processing level\r\n        for(let i=0;i<qSize;i++) {\r\n            let front = queue.shift()\r\n            \r\n            let index = leftToRight ? i : qSize-i-1\r\n            ans[index] = front.val\r\n            \r\n            if(front.left) queue.push(front.left)\r\n            if(front.right) queue.push(front.right)\r\n        }\r\n        // changing order of operation\r\n        leftToRight = !leftToRight\r\n        \r\n        result.push(ans)\r\n    }\r\n    \r\n    return result\r\n};"
  }
}
