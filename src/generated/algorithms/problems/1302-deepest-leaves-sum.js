export default {
  "id": 1302,
  "name": "Deepest Leaves Sum",
  "difficulty": "medium",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/deepest-leaves-sum",
  "relativeDir": "D/Deepest Leaves Sum",
  "slug": "1302-deepest-leaves-sum",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 22,
    "java": 39,
    "python": 46,
    "javascript": 22
  },
  "languages": {
    "cpp": "\t\t\t\t\t\t**\t#Vote if u like ❤️**\r\n\t\t\t\t\t\t\t\r\n\tclass Solution {\r\n\tpublic:\r\n\t\tvoid fun(TreeNode *root , int l , map<int , vector<int>> &m)\r\n\t\t{\r\n\t\t\tif(root == NULL) return; //If root is NULL it will return \r\n\t\t\tm[l].push_back(root -> val); //With level as key inserting the value to the vector\r\n\t\t\tfun(root -> left, l + 1, m); // passing the left with level + 1 \r\n\t\t\tfun(root -> right, l + 1 , m); // passing right with level + 1\r\n\t\t}\r\n\t\tint deepestLeavesSum(TreeNode* root) {\r\n\t\t\tmap<int , vector<int>> m;  // Map with key as level and value of vector for storing the values\r\n\t\t\tfun(root , 0 , m); // A void fun with map and level as 0\r\n\t\t   auto itr = m.rbegin(); //Hence we need the leaves node the nodes are present in last level \r\n\t\t\tint sum = 0; // Sum Variable \r\n\t\t\tfor(int i = 0; i < itr-> second.size(); i++) {sum += itr -> second[i];}\r\n\t\t\treturn sum;\r\n\t\t}\r\n\t};\r\n\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t-Yash:)",
    "python": "# Definition for a binary tree node.\r\n# class TreeNode(object):\r\n#     def __init__(self, val=0, left=None, right=None):\r\n#         self.val = val\r\n#         self.left = left\r\n#         self.right = right\r\nclass Solution(object):\r\n    \r\n    \"\"\"\r\n    THOUGHT PROCESS:\r\n        1) find the height of the tree, this way we would know how deep we need to go.\r\n        2) we need a counter to check how deep we are and this is not available in deepestLeavesSum so we create a new function deepestLeave.\r\n        3) now we go in depth, if we are at bottom, we return the value, we recursively visit both left and right nodes.\r\n        \r\n    \"\"\"\r\n    \r\n    def height(self, root):\r\n        if root is None:\r\n            return 0\r\n        else:\r\n            x, y = 1, 1\r\n            if root.left:\r\n                x = self.height(root.left)+1\r\n            if root.right:\r\n                y = self.height(root.right)+1\r\n            \r\n            return max(x, y)\r\n            \r\n    \r\n    def deepestLeave(self, root, depth):\r\n        \r\n        if root is None:\r\n            return 0\r\n        \r\n        if root.left is None and root.right is None:\r\n            if depth == 1:\r\n                return root.val\r\n        \r\n        return self.deepestLeave(root.left, depth-1) + self.deepestLeave(root.right, depth-1)\r\n    \r\n    def deepestLeavesSum(self, root):\r\n        \"\"\"\r\n        :type root: TreeNode\r\n        :rtype: int\r\n        \"\"\"\r\n        return self.deepestLeave(root, self.height(root))",
    "java": "// Runtime: 22 ms (Top 8.75%) | Memory: 59.3 MB (Top 36.23%)\r\nclass Solution {\r\n    public int height(TreeNode root)\r\n    {\r\n        if(root == null)\r\n            return 0;\r\n        return Math.max(height(root.left), height(root.right)) + 1;\r\n    }\r\n    public int deepestLeavesSum(TreeNode root) {\r\n        if(root == null) return 0;\r\n        if(root.left == null && root.right == null) return root.val;\r\n        Queue<TreeNode> q = new LinkedList<>();\r\n        q.add(root);\r\n        q.add(null);\r\n        int hght = height(root);\r\n        int sum = 0;\r\n        while(q.size()>0 && q.peek()!=null)\r\n        {\r\n            TreeNode temp = q.remove();\r\n            if(temp.left!=null) q.add(temp.left);\r\n            if(temp.right!=null) q.add(temp.right);\r\n            if(q.peek() == null)\r\n            {\r\n                q.remove();\r\n                q.add(null);\r\n                hght--;\r\n            }\r\n            if(hght == 1)\r\n            {\r\n                while(q.size()>0 && q.peek()!=null)\r\n                {\r\n                    sum+=q.remove().val;\r\n                }\r\n            }\r\n\r\n        }\r\n        return sum;\r\n    }\r\n}",
    "javascript": "var deepestLeavesSum = function(root) {\r\n    let queue = [];\r\n    queue.push([root, 0]);\r\n    let sum = 0;\r\n    let curLevel = 0\r\n    let i = 0;\r\n    while(queue.length-i > 0) {\r\n        let [node, level] = queue[i];\r\n        queue[i] = null;\r\n        i++;\r\n        if(level > curLevel) {\r\n            sum = 0;\r\n            curLevel = level;\r\n        }\r\n        sum += node.val;\r\n        if(node.left != null) queue.push([node.left, level+1]);\r\n        if(node.right != null) queue.push([node.right, level+1]);\r\n    }\r\n    return sum;\r\n    //time: o(n)\r\n    //space: o(n)\r\n};"
  }
}
