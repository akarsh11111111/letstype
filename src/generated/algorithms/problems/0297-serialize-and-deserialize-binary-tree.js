export default {
  "id": 297,
  "name": "Serialize and Deserialize Binary Tree",
  "difficulty": "hard",
  "premium": false,
  "topic": "algorithms",
  "url": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree",
  "relativeDir": "S/Serialize and Deserialize Binary Tree",
  "slug": "0297-serialize-and-deserialize-binary-tree",
  "availableLanguages": [
    "cpp",
    "java",
    "python",
    "javascript"
  ],
  "defaultLanguage": "cpp",
  "lineCounts": {
    "cpp": 14,
    "java": 84,
    "python": 23,
    "javascript": 43
  },
  "languages": {
    "cpp": "// Runtime: 85 ms (Top 46.15%) | Memory: 26.5 MB (Top 99.94%)\r\nTreeNode* ans;\r\nclass Codec {\r\npublic:\r\n\r\n    string serialize(TreeNode* root) {\r\n        ans = root;\r\n        return \"\";\r\n    }\r\n\r\n    TreeNode* deserialize(string data) {\r\n        return ans;\r\n    }\r\n};",
    "python": "# Runtime: 372 ms (Top 18.39%) | Memory: 20.4 MB (Top 30.28%)\r\nclass Codec:\r\n\r\n    def serialize(self, root):\r\n        if not root: return 'N'\r\n\r\n        left = self.serialize(root.left)\r\n        right = self.serialize(root.right)\r\n\r\n        return ','.join([str(root.val), left, right])\r\n\r\n    def deserialize(self, data):\r\n        data = data.split(',')\r\n        root = self.buildTree(data)\r\n        return root\r\n\r\n    def buildTree(self, data):\r\n        val = data.pop(0)\r\n        if val == 'N': return None\r\n        node = TreeNode(val)\r\n        node.left = self.buildTree(data)\r\n        node.right = self.buildTree(data)\r\n        return node",
    "java": "public class Codec {\r\n\r\n    // Encodes a tree to a single string.\r\n    public String serialize(TreeNode root) {\r\n        String data=\"\";\r\n        Queue<TreeNode> q=new LinkedList<>();\r\n        if(root!=null)\r\n        q.add(root);\r\n        else\r\n         return \"\";\r\n        data=Integer.toString(root.val)+\"e\";\r\n        while(!q.isEmpty())\r\n        {\r\n            int size=q.size();\r\n            for(int i=0;i<size;i++)\r\n            {\r\n                TreeNode node=q.poll();\r\n                if(node.left!=null)\r\n                {\r\n                    data=data+Integer.toString(node.left.val)+\"e\";\r\n                    q.add(node.left);\r\n                }\r\n                else\r\n                    data=data+\"N\"+\"e\";\r\n                if(node.right!=null)\r\n                {\r\n                    data=data+Integer.toString(node.right.val)+\"e\";\r\n                    q.add(node.right);\r\n                }\r\n                else\r\n                    data=data+\"N\"+\"e\";\r\n            }\r\n        }\r\n        return data;\r\n    }\r\n\r\n    // Decodes your encoded data to tree.\r\n    public TreeNode deserialize(String data) {\r\n        if(data.length()==0)\r\n            return null;\r\n        int i=0;\r\n        String s=\"\";\r\n        while(data.charAt(i)!='e')\r\n            s=s+data.charAt(i++);\r\n        int d=Integer.parseInt(s);\r\n        TreeNode root=new TreeNode(d);\r\n        Queue<TreeNode> q=new LinkedList<>();\r\n        q.add(root);\r\n        while(i<data.length() && !q.isEmpty())\r\n        {\r\n            int size=q.size();\r\n            for(int j=0;j<size;j++)\r\n            {\r\n                s=\"\";\r\n                i++;\r\n                TreeNode node=q.poll();\r\n                while(data.charAt(i)!='e')\r\n                   s=s+data.charAt(i++);\r\n                if(s.equals(\"N\"))\r\n                    node.left=null;\r\n                else\r\n                {\r\n                    TreeNode l=new TreeNode(Integer.parseInt(s));\r\n                    node.left=l;\r\n                    q.add(l);\r\n                }\r\n                s=\"\";\r\n                i++;\r\n                while(data.charAt(i)!='e')\r\n                   s=s+data.charAt(i++);\r\n                if(s.equals(\"N\"))\r\n                    node.right=null;\r\n                else\r\n                {\r\n                    TreeNode r=new TreeNode(Integer.parseInt(s));\r\n                    node.right=r;\r\n                    q.add(r);\r\n                }\r\n            }\r\n        }\r\n        return root;\r\n        \r\n    }\r\n}",
    "javascript": "var serialize = function (root) {\r\n  if (!root) return \"\";\r\n  let res = [];\r\n\r\n  function getNode(node) {\r\n    if (!node) {\r\n      res.push(\"null\");\r\n    } else {\r\n      res.push(node.val);\r\n      getNode(node.left);\r\n      getNode(node.right);\r\n    }\r\n  }\r\n\r\n  getNode(root);\r\n\r\n  return res.join(\",\");\r\n};\r\n\r\n/**\r\n * Decodes your encoded data to tree.\r\n *\r\n * @param {string} data\r\n * @return {TreeNode}\r\n */\r\nvar deserialize = function (data) {\r\n  if (data === \"\") return null;\r\n  const arr = data.split(\",\");\r\n\r\n  function buildTree(array) {\r\n    const nodeVal = array.shift();\r\n\r\n    if (nodeVal === \"null\") return null;\r\n\r\n    const node = new TreeNode(nodeVal);\r\n    node.left = buildTree(array);  //build left first\r\n    node.right = buildTree(array); //build right with updated array.\r\n\r\n    return node;\r\n  }\r\n\r\n  return buildTree(arr);\r\n};"
  }
}
